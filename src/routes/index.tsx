import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useGameStore } from "@/stores/gameStore";
import { usePromptStore } from "@/stores/promptStore";
import { TodayList } from "@/components/TodayList";
import { Plus, Flame, Trophy, Target } from "lucide-react";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { dateKey } from "@/lib/dateKeys";
import { isDayLocked } from "@/lib/engine";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Hunter System" },
      {
        name: "description",
        content: "Today's quests, XP progress, and streak — your Hunter dashboard.",
      },
      { property: "og:title", content: "Hunter Dashboard" },
      { property: "og:description", content: "Track today's tasks and level up your life." },
    ],
  }),
  component: Dashboard,
});

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "The world sleeps";
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function Dashboard() {
  const player = useGameStore((s) => s.player);
  const openAdd = usePromptStore((s) => s.openAdd);
  const today = dateKey();
  const todayLocked = isDayLocked(today);
  const items = useLiveQuery(() => db.dayTasks.where("dateKey").equals(today).toArray(), [today]);

  if (!player) return null;

  const completed = items?.filter((i) => i.status === "completed").length ?? 0;
  const total = items?.length ?? 0;
  const dayPct = total > 0 ? completed / total : 0;

  return (
    <div className="space-y-4 lg:grid lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)] lg:gap-4 lg:space-y-0">
      <section className="space-y-4">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-1 pt-2"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {greeting()}
          </div>
          <h1 className="mt-1 text-3xl font-black leading-tight">
            Welcome back, <span className="neon-text-violet">Hunter</span>
          </h1>
        </motion.div>

        {/* Today's list */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Quest log · today
            </h2>
          </div>
          <TodayList />
        </div>
      </section>

      <aside className="space-y-3">
        {/* Today progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass flex flex-col justify-between rounded-3xl p-4"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Today's gate
            </div>
            <Target className="h-4 w-4 text-[var(--neon-cyan)]" />
          </div>
          <div className="my-2">
            <div className="text-4xl font-black tabular-nums">
              {completed}
              <span className="text-xl text-muted-foreground">/{total}</span>
            </div>
            <div className="text-xs text-muted-foreground">quests cleared</div>
          </div>
          <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              animate={{ width: `${dayPct * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 }}
            className="glass flex flex-col items-center justify-center rounded-3xl p-3"
          >
            <Flame
              className={`h-8 w-8 ${player.currentStreak > 0 ? "text-[var(--neon-amber)] pulse-glow" : "text-muted-foreground"}`}
            />
            <div className="mt-1 text-2xl font-black tabular-nums">{player.currentStreak}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">streak</div>
          </motion.div>

          {/* Best */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass flex flex-col items-center justify-center rounded-3xl p-3"
          >
            <Trophy className="h-8 w-8 text-[var(--neon-cyan)]" />
            <div className="mt-1 text-2xl font-black tabular-nums">{player.bestStreak}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">best</div>
          </motion.div>
        </div>
      </aside>

      {/* FAB */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          if (!todayLocked) openAdd();
        }}
        disabled={todayLocked}
        className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full text-background disabled:cursor-not-allowed disabled:opacity-50 md:bottom-6 md:right-6"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-violet)" }}
        aria-label="Add task"
      >
        <Plus className="h-6 w-6" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
