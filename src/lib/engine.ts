// Core game engine: materializes day tasks, runs scheduler tick,
// resolves task outcomes (XP + streak), evaluates day at midnight.
import { db, type DayTask, type DayLog, type Task } from "@/lib/db";
import { dateKey, weekKey } from "@/lib/dateKeys";
import { DIFFICULTY_XP } from "@/lib/leveling";
import { useGameStore } from "@/stores/gameStore";
import { usePromptStore } from "@/stores/promptStore";
import { notifications } from "@/services/notifications";

const resolving = new Set<string>();

export function dayTaskId(dKey: string, taskId: string) {
  return `${dKey}-${taskId}`;
}

/** Returns true if a day's tasks are locked (the day has started, i.e. it's today or past). */
export function isDayLocked(dKey: string) {
  return dKey <= dateKey();
}

/** Materialize today's DayTasks from the active task library. Idempotent. */
export async function materializeToday() {
  const today = dateKey();
  const all = await db.tasks.toArray();
  const active = all.filter((t) => !t.archived);
  for (const t of active) {
    const id = dayTaskId(today, t.id);
    const exists = await db.dayTasks.get(id);
    if (exists) continue;
    const dt: DayTask = {
      id,
      dateKey: today,
      taskId: t.id,
      title: t.title,
      time: t.time,
      difficulty: t.difficulty,
      notify: t.notify,
      promptText: t.promptText,
      reverse: t.reverse,
      status: "pending",
      xpDelta: 0,
    };
    await db.dayTasks.put(dt);
  }

  const pending = await db.dayTasks.where("dateKey").equals(today).and((dt) => dt.status === "pending").toArray();
  await notifications.scheduleDayTasks(
    pending.map((dt) => ({
      id: dt.id,
      title: dt.promptText ?? dt.title,
      time: dt.time,
      notify: dt.notify,
    })),
  );
}

function penaltyFor(mode: "strict" | "flex") {
  return mode === "strict" ? -15 : -5;
}

function streakResetThreshold(mode: "strict" | "flex") {
  return mode === "strict" ? 2 : 3;
}

export async function resolveTask(dt: DayTask, answer: "yes" | "no") {
  const game = useGameStore.getState();
  const player = game.player;
  if (!player) return;
  if (dt.status !== "pending") return;
  if (resolving.has(dt.id)) return;
  resolving.add(dt.id);

  try {
    // Reverse logic: YES is bad if reverse flag set.
    const positive = dt.reverse ? answer === "no" : answer === "yes";

    let xpDelta = 0;
    let status: DayTask["status"];
    if (positive) {
      xpDelta = DIFFICULTY_XP[dt.difficulty];
      status = "completed";
      await game.bumpCompleted();
      notifications.vibrate(20);
    } else {
      xpDelta = penaltyFor(player.mode);
      status = "skipped";
      await game.bumpMissed();
      notifications.vibrate([20, 60, 20]);
    }

    const updated: DayTask = { ...dt, status, xpDelta, resolvedAt: Date.now() };
    await db.dayTasks.put(updated);
    await notifications.cancelTask(dt.id);
    await db.promptFires.delete(dt.id);
    await game.applyXp(xpDelta);
    await refreshDayLog(dt.dateKey);
  } finally {
    resolving.delete(dt.id);
  }
}

export async function refreshDayLog(dKey: string): Promise<DayLog> {
  const items = await db.dayTasks.where("dateKey").equals(dKey).toArray();
  const completed = items.filter((i) => i.status === "completed").length;
  const skipped = items.filter((i) => i.status === "skipped").length;
  const missed = items.filter((i) => i.status === "missed").length;
  const xpEarned = items.reduce((acc, i) => acc + (i.xpDelta || 0), 0);
  const totalBad = skipped + missed;
  let status: DayLog["status"];
  if (dKey === dateKey() && items.some((i) => i.status === "pending")) {
    status = "in-progress";
  } else if (totalBad === 0 && items.length > 0) {
    status = "perfect";
  } else if (totalBad === 1) {
    status = "partial";
  } else if (totalBad >= 2) {
    status = "failed";
  } else {
    status = "in-progress";
  }
  const log: DayLog = { dateKey: dKey, completed, skipped, missed, xpEarned, status };
  await db.dayLogs.put(log);
  return log;
}

async function cleanupStaleWeeklyQuests() {
  const currentWeek = weekKey();
  const all = await db.weeklyQuests.toArray();
  const stale = all.filter((q) => q.weekKey !== currentWeek);
  for (const q of stale) {
    await db.weeklyQuests.delete(q.id);
  }
}

/** Run at app start + on date change. Marks pending tasks of past days as missed and updates streak. */
export async function evaluatePastDays() {
  const game = useGameStore.getState();
  const player = game.player;
  if (!player) return;

  await cleanupStaleWeeklyQuests();

  const today = dateKey();
  const lastEval = player.lastEvaluatedDay;
  // Find every dayTask with dateKey < today still pending → mark missed (no extra XP penalty beyond skip rule).
  const stale = await db.dayTasks.where("status").equals("pending").toArray();
  const past = stale.filter((d) => d.dateKey < today);
  for (const d of past) {
    await db.dayTasks.put({ ...d, status: "missed", xpDelta: 0, resolvedAt: Date.now() });
    await game.bumpMissed();
  }

  // Recompute logs for affected days
  const affectedDays = new Set(past.map((d) => d.dateKey));
  for (const k of affectedDays) await refreshDayLog(k);

  // Streak evaluation: walk days from lastEval+1 up to yesterday.
  if (lastEval && lastEval >= today) return;
  const start = lastEval ?? today;
  const cursor = new Date(start);
  cursor.setDate(cursor.getDate() + (lastEval ? 1 : 0));
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let current = player.currentStreak;
  let best = player.bestStreak;
  const reset = streakResetThreshold(player.mode);
  while (cursor <= yesterday) {
    const k = dateKey(cursor);
    const log = await db.dayLogs.get(k);
    if (log && (log.completed > 0 || log.skipped > 0 || log.missed > 0)) {
      const bad = log.skipped + log.missed;
      if (bad >= reset) current = 0;
      else current += 1;
      best = Math.max(best, current);
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  await game.setStreak(current, best);
  await game.setLastEvaluatedDay(today);
}

let tickHandle: ReturnType<typeof setInterval> | null = null;
const fired = new Set<string>();
let schedulerDay = dateKey();

async function rememberFired(taskId: string, today: string) {
  await db.promptFires.put({ id: taskId, dateKey: today, firedAt: Date.now() });
  fired.add(taskId);
}

async function clearStalePromptFires(today: string) {
  const all = await db.promptFires.toArray();
  const stale = all.filter((item) => item.dateKey !== today);
  for (const item of stale) {
    await db.promptFires.delete(item.id);
  }
}

/** Start the foreground scheduler. Checks every 15s for due tasks. */
export function startScheduler() {
  if (tickHandle) return;
  const tick = async () => {
    const today = dateKey();
    if (today !== schedulerDay) {
      schedulerDay = today;
      fired.clear();
      await clearStalePromptFires(today);
      await evaluatePastDays();
      await materializeToday();
    }

    const items = await db.dayTasks.where("dateKey").equals(today).toArray();
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const nowKey = `${hh}:${mm}`;
    for (const dt of items) {
      if (dt.status !== "pending") continue;
      if (dt.time > nowKey) continue;
      const persisted = await db.promptFires.get(dt.id);
      if (persisted?.dateKey === today || fired.has(dt.id)) continue;
      await rememberFired(dt.id, today);
      if (dt.notify !== "off") {
        notifications.fire({
          id: dt.id,
          title: dt.promptText ?? `Task: ${dt.title}`,
          body: "Tap to respond — YES / NO",
          silent: dt.notify === "smart",
        });
      }
      usePromptStore.getState().show(dt);
    }
  };
  tick();
  tickHandle = setInterval(tick, 15_000);
}

export function stopScheduler() {
  if (tickHandle) clearInterval(tickHandle);
  tickHandle = null;
}

export async function upsertTask(t: Task) {
  const today = dateKey();
  if (isDayLocked(today)) return;

  await db.tasks.put(t);
  const id = dayTaskId(today, t.id);
  const existing = await db.dayTasks.get(id);
  if (!existing) {
    await db.dayTasks.put({
      id,
      dateKey: today,
      taskId: t.id,
      title: t.title,
      time: t.time,
      difficulty: t.difficulty,
      notify: t.notify,
      promptText: t.promptText,
      reverse: t.reverse,
      status: "pending",
      xpDelta: 0,
    });
  } else if (existing.status === "pending") {
    await db.dayTasks.put({
      ...existing,
      title: t.title,
      time: t.time,
      difficulty: t.difficulty,
      notify: t.notify,
      promptText: t.promptText,
      reverse: t.reverse,
    });
  }

  const pending = await db.dayTasks.where("dateKey").equals(today).and((dt) => dt.status === "pending").toArray();
  await notifications.scheduleDayTasks(
    pending.map((dt) => ({
      id: dt.id,
      title: dt.promptText ?? dt.title,
      time: dt.time,
      notify: dt.notify,
    })),
  );
}

export async function deleteTask(id: string) {
  const today = dateKey();
  if (isDayLocked(today)) return;

  await db.tasks.delete(id);
  const dtId = dayTaskId(today, id);
  const existing = await db.dayTasks.get(dtId);
  if (existing && existing.status === "pending") {
    await db.dayTasks.delete(dtId);
  }

  await db.promptFires.delete(dtId);

  const remaining = await db.dayTasks.where("dateKey").equals(today).and((dt) => dt.status === "pending").toArray();
  await notifications.scheduleDayTasks(
    remaining.map((dt) => ({
      id: dt.id,
      title: dt.promptText ?? dt.title,
      time: dt.time,
      notify: dt.notify,
    })),
  );
}
