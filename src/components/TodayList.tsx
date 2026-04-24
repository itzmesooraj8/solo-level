import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { db, type DayTask } from "@/lib/db";
import { dateKey } from "@/lib/dateKeys";
import { useLiveQuery } from "dexie-react-hooks";
import { resolveTask } from "@/lib/engine";
import { Lock } from "lucide-react";
import { TaskCard } from "@/components/TaskCard";
import { usePromptStore } from "@/stores/promptStore";

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
  const openAdd = usePromptStore((s) => s.openAdd);

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
      <div className="glass-strong rounded-[2rem] p-6 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/3 text-3xl">
          ⚔️
        </div>
        <div className="text-base font-bold">No quests today, Hunter.</div>
        <div className="mt-1 text-sm text-muted-foreground">
          Forge a task to keep the streak pressure alive.
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-background"
          style={{ background: "var(--gradient-primary)" }}
        >
          Create first quest
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <AnimatePresence initial={false}>
        {items.map((dt) => (
          <motion.div
            key={dt.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <TaskCard
              task={dt}
              mode="today"
              relativeTime={timeUntil(dt.time)}
              onComplete={() => resolveTask(dt, "yes")}
              onSkip={() => resolveTask(dt, "no")}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
