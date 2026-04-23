import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db, type DayTask } from "@/lib/db";
import { dateKey } from "@/lib/dateKeys";
import { useLiveQuery } from "dexie-react-hooks";
import { resolveTask } from "@/lib/engine";
import { Check, X, Lock, Clock } from "lucide-react";

const DIFFICULTY_COLOR: Record<string, string> = {
  easy: "var(--neon-emerald)",
  medium: "var(--neon-cyan)",
  hard: "var(--neon-magenta)",
};

function timeUntil(time: string) {
  const [h, m] = time.split(":").map(Number);
  const now = new Date();
  const t = new Date();
  t.setHours(h, m, 0, 0);
  const diff = t.getTime() - now.getTime();
  if (diff < -60_000) return "missed window";
  if (diff < 60_000) return "now";
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return `in ${mins}m`;
  const hrs = Math.floor(mins / 60);
  return `in ${hrs}h ${mins % 60}m`;
}

export function TodayList() {
  const today = dateKey();
  const items = useLiveQuery(
    () => db.dayTasks.where("dateKey").equals(today).sortBy("time"),
    [today],
  ) as DayTask[] | undefined;

  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 30_000);
    return () => clearInterval(i);
  }, []);
  // referencing tick to keep timeUntil fresh
  void tick;

  if (!items) return <div className="h-32 animate-pulse rounded-3xl bg-white/5" />;

  if (items.length === 0) {
    return (
      <div className="glass rounded-3xl p-8 text-center">
        <div className="mb-2 text-3xl">⚔️</div>
        <div className="text-sm font-semibold">No quests today, Hunter.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Tap the + button to forge your first task.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatePresence initial={false}>
        {items.map((dt) => (
          <motion.div
            key={dt.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="glass relative overflow-hidden rounded-3xl p-4"
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-1"
              style={{ background: DIFFICULTY_COLOR[dt.difficulty] }}
            />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1 pl-2">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {dt.time} · {timeUntil(dt.time)}
                  {dt.notify === "off" && <span>· silent</span>}
                </div>
                <div className="mt-1 truncate text-base font-semibold">{dt.title}</div>
                <div
                  className="mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    color: DIFFICULTY_COLOR[dt.difficulty],
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {dt.difficulty} · +
                  {dt.difficulty === "easy" ? 10 : dt.difficulty === "medium" ? 20 : 40} XP
                </div>
              </div>
              <StatusOrActions dt={dt} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function StatusOrActions({ dt }: { dt: DayTask }) {
  if (dt.status === "completed") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-[var(--neon-emerald)]/20 px-2 py-1 text-[10px] font-bold text-[var(--neon-emerald)]">
        <Check className="h-3 w-3" /> Done
      </span>
    );
  }
  if (dt.status === "skipped" || dt.status === "missed") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-[var(--neon-magenta)]/20 px-2 py-1 text-[10px] font-bold text-[var(--neon-magenta)]">
        <X className="h-3 w-3" /> {dt.status}
      </span>
    );
  }
  return (
    <div className="flex flex-shrink-0 gap-1.5">
      <button
        aria-label="Complete"
        onClick={() => resolveTask(dt, "yes")}
        className="flex h-9 w-9 items-center justify-center rounded-xl text-background transition active:scale-90"
        style={{ background: "var(--gradient-primary)" }}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </button>
      <button
        aria-label="Skip"
        onClick={() => resolveTask(dt, "no")}
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-foreground transition active:scale-90"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function LockBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      <Lock className="h-3 w-3" /> Locked
    </span>
  );
}
