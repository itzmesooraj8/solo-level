import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "@/stores/gameStore";
import { usePromptStore } from "@/stores/promptStore";
import { TodayList } from "@/components/TodayList";
import { Plus, Flame, Trophy, Target, Lock, Sparkles, AlertCircle, X, Shield } from "lucide-react";
import { NotificationPermissionCard } from "@/components/NotificationPermissionCard";
import { OnboardingSheet } from "@/components/OnboardingSheet";
import { WeeklySparkline } from "@/components/WeeklySparkline";
import { RankBadge } from "@/components/RankBadge";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { dateKey } from "@/lib/dateKeys";
import { isDayLocked } from "@/lib/engine";
import { XPBar } from "@/components/XPBar";

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

function MissedBanner() {
  const recentlyMissed = useLiveQuery(
    () =>
      db.dayTasks
        .where("status")
        .equals("missed")
        .filter((t) => (t.resolvedAt ? Date.now() - t.resolvedAt < 86400000 : false))
        .toArray(),
    [],
  );

  const [dismissed, setDismissed] = useState(false);

  if (!recentlyMissed || recentlyMissed.length === 0 || dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="glass overflow-hidden rounded-2xl border-none bg-neon-magenta/10"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-magenta/20">
            <AlertCircle className="h-5 w-5 text-neon-magenta" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">
              You missed {recentlyMissed.length} tasks
            </div>
            <div className="text-xs text-muted-foreground">Surface these as missed in history.</div>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-lg p-2 transition hover:bg-white/5"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </motion.div>
  );
}

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

  const [showOnboarding, setShowOnboarding] = useState(false);
  const taskCount = useLiveQuery(() => db.tasks.count(), []);

  useEffect(() => {
    if (taskCount === 0) setShowOnboarding(true);
  }, [taskCount]);

  const items = useLiveQuery(() => db.dayTasks.where("dateKey").equals(today).toArray(), [today]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(timer);
  }, []);

  if (!player) return null;

  const completed = items?.filter((i) => i.status === "completed").length ?? 0;
  const total = items?.length ?? 0;
  const dayPct = total > 0 ? completed / total : 0;
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const lockMinutes = Math.max(0, Math.floor((midnight.getTime() - now) / 60_000));
  const lockLabel = lockMinutes < 60
      ? `Tasks lock in ${lockMinutes}m`
      : `Tasks lock in ${Math.floor(lockMinutes / 60)}h ${lockMinutes % 60}m`;

  return (
    <div className="space-y-4 lg:grid lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)] lg:gap-4 lg:space-y-0">
      <OnboardingSheet open={showOnboarding} onComplete={() => setShowOnboarding(false)} />
      <section className="space-y-4">
        <NotificationPermissionCard />
        <MissedBanner />
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-1 pt-2"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {greeting()}
          </div>
          <h1 className="mt-1 flex items-center gap-3 text-3xl font-black leading-tight">
            Welcome, <span className="neon-text-violet">{player.hunterName || "Hunter"}</span>
            <RankBadge totalXp={player.xp} className="h-8 w-8 text-sm" />
          </h1>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            {lockLabel}
          </div>
        </motion.div>

        <XPBar xp={player.xp} level={player.level} />

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
        <WeeklySparkline />
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
            <Target className="h-4 w-4 text-neon-cyan" />
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
          <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/5 bg-white/3 px-3 py-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-neon-amber" />
            {lockLabel}
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
              className={`h-8 w-8 ${player.currentStreak > 0 ? "text-neon-amber pulse-glow" : "text-muted-foreground"}`}
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
            <Trophy className="h-8 w-8 text-neon-cyan" />
            <div className="mt-1 text-2xl font-black tabular-nums">{player.bestStreak}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">best</div>
          </motion.div>
        </div>
      </aside>

      {/* FAB */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          openAdd();
        }}
        className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full text-background disabled:cursor-not-allowed disabled:opacity-50 md:bottom-6 md:right-6"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-violet)" }}
        aria-label="Add task"
      >
        <Plus className="h-6 w-6" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
