// Dexie schema — local-first storage for the Hunter system.
import Dexie, { type Table } from "dexie";

export type Difficulty = "easy" | "medium" | "hard";
export type NotifyMode = "strict" | "smart" | "off";
export type GameMode = "strict" | "flex";

export interface Task {
  id: string;
  title: string;
  time: string; // "HH:MM"
  durationMin: number;
  difficulty: Difficulty;
  notify: NotifyMode;
  promptText?: string;
  reverse?: boolean; // YES = bad (e.g. "Did you eat junk food?")
  createdAt: number;
  archived?: boolean;
  targetDate?: string; // YYYY-MM-DD
  recurrence?: "none" | "daily" | "weekly";
  templateId?: string;
}

export type DayTaskStatus = "pending" | "completed" | "skipped" | "missed";

export interface DayTask {
  id: string; // `${dateKey}-${taskId}`
  dateKey: string; // YYYY-MM-DD
  taskId: string;
  title: string;
  time: string;
  difficulty: Difficulty;
  notify: NotifyMode;
  promptText?: string;
  reverse?: boolean;
  status: DayTaskStatus;
  xpDelta: number;
  resolvedAt?: number;
}

export interface DayLog {
  dateKey: string;
  completed: number;
  skipped: number;
  missed: number;
  xpEarned: number;
  status: "perfect" | "partial" | "failed" | "in-progress";
}

export interface WeeklyQuest {
  id: string;
  weekKey: string; // ISO week start YYYY-MM-DD (Sunday)
  dayIndex: number; // 0 = Sun .. 6 = Sat
  title: string;
  difficulty: Difficulty;
  done: boolean;
}

export interface WeeklyLog {
  weekKey: string;
  completed: number;
  total: number;
  xpEarned: number;
}

export interface PromptFire {
  id: string;
  dateKey: string;
  firedAt: number;
}

export interface PlayerStats {
  id: "me";
  hunterName?: string;
  xp: number;
  level: number;
  bestStreak: number;
  currentStreak: number;
  lastEvaluatedDay?: string;
  tasksCompleted: number;
  tasksMissed: number;
  mode: GameMode;
}

class HunterDB extends Dexie {
  tasks!: Table<Task, string>;
  dayTasks!: Table<DayTask, string>;
  dayLogs!: Table<DayLog, string>;
  weeklyQuests!: Table<WeeklyQuest, string>;
  weeklyLogs!: Table<WeeklyLog, string>;
  promptFires!: Table<PromptFire, string>;
  player!: Table<PlayerStats, string>;

  constructor() {
    super("hunter-db");
    this.version(1).stores({
      tasks: "id, createdAt, archived",
      dayTasks: "id, dateKey, taskId, status, time",
      dayLogs: "dateKey, status",
      weeklyQuests: "id, weekKey, dayIndex",
      player: "id",
    });
    this.version(2).stores({
      tasks: "id, createdAt, archived",
      dayTasks: "id, dateKey, taskId, status, time",
      dayLogs: "dateKey, status",
      weeklyQuests: "id, weekKey, dayIndex",
      promptFires: "id, dateKey, firedAt",
      player: "id",
    });
    this.version(4).stores({
      tasks: "id, createdAt, archived, recurrence, templateId, [templateId+targetDate]",
      dayTasks: "id, dateKey, taskId, status, time",
      dayLogs: "dateKey, status",
      weeklyQuests: "id, weekKey, dayIndex",
      weeklyLogs: "weekKey",
      promptFires: "id, dateKey, firedAt",
      player: "id",
    });
    this.version(5).stores({
      tasks: "id, createdAt, archived, recurrence, templateId, targetDate",
      dayTasks: "id, dateKey, taskId, status, time",
      dayLogs: "dateKey, status",
      weeklyQuests: "id, weekKey, dayIndex",
      weeklyLogs: "weekKey",
      promptFires: "id, dateKey, firedAt",
      player: "id",
    });
  }
}

export const db = new HunterDB();

export async function getOrInitPlayer(): Promise<PlayerStats> {
  const existing = await db.player.get("me");
  if (existing) return existing;
  const fresh: PlayerStats = {
    id: "me",
    xp: 0,
    level: 1,
    bestStreak: 0,
    currentStreak: 0,
    tasksCompleted: 0,
    tasksMissed: 0,
    mode: "strict",
  };
  await db.player.put(fresh);
  return fresh;
}
