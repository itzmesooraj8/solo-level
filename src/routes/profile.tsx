import { createFileRoute } from "@tanstack/react-router";
import { useGameStore } from "@/stores/gameStore";
import { rankTitle, levelProgress, LEVEL_THRESHOLDS } from "@/lib/leveling";
import { motion } from "framer-motion";
import { Shield, Zap, Flame, Trophy, Target, X, Download, Trash2 } from "lucide-react";
import { db } from "@/lib/db";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Hunter System" },
      {
        name: "description",
        content: "Your stats, mode toggle, and data controls.",
      },
      { property: "og:title", content: "Hunter Profile" },
      {
        property: "og:description",
        content: "Stats, rank, and Strict / Flex mode for the Hunter System.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const player = useGameStore((s) => s.player);
  const setMode = useGameStore((s) => s.setMode);
  const wipeAll = useGameStore((s) => s.wipeAll);

  if (!player) return null;
  const lp = levelProgress(player.xp);

  const exportData = async () => {
    const dump = {
      player,
      tasks: await db.tasks.toArray(),
      dayTasks: await db.dayTasks.toArray(),
      dayLogs: await db.dayLogs.toArray(),
      weeklyQuests: await db.weeklyQuests.toArray(),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hunter-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const wipe = async () => {
    if (confirm("Wipe ALL Hunter data? This cannot be undone.")) await wipeAll();
  };

  return (
    <div className="space-y-4">
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong relative overflow-hidden rounded-[2rem] p-6"
        style={{ boxShadow: "var(--shadow-glow-violet)" }}
      >
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--neon-violet)" }}
        />
        <div className="relative flex items-center gap-4">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-black text-background"
            style={{ background: "var(--gradient-primary)" }}
          >
            {player.level}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hunter</div>
            <div className="truncate text-2xl font-black neon-text-violet">
              {rankTitle(player.level)}
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3 w-3" /> {player.xp} XP total
            </div>
          </div>
        </div>

        {/* Level progress */}
        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
            <span>LV {lp.level}</span>
            <span>{lp.isMax ? "MAX" : `${lp.within}/${lp.span} → LV ${lp.level + 1}`}</span>
          </div>
          <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              animate={{ width: `${lp.pct * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<Trophy className="h-5 w-5 text-[var(--neon-cyan)]" />}
          label="Best streak"
          value={player.bestStreak}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-[var(--neon-amber)]" />}
          label="Current streak"
          value={player.currentStreak}
        />
        <StatCard
          icon={<Target className="h-5 w-5 text-[var(--neon-emerald)]" />}
          label="Completed"
          value={player.tasksCompleted}
        />
        <StatCard
          icon={<X className="h-5 w-5 text-[var(--neon-magenta)]" />}
          label="Missed"
          value={player.tasksMissed}
        />
      </div>

      {/* Mode toggle */}
      <div className="glass rounded-3xl p-4">
        <div className="flex items-center gap-3">
          <Shield
            className={`h-6 w-6 ${player.mode === "strict" ? "text-[var(--neon-magenta)]" : "text-[var(--neon-cyan)]"}`}
          />
          <div className="flex-1">
            <div className="text-sm font-bold">
              {player.mode === "strict" ? "Strict mode" : "Flex mode"}
            </div>
            <div className="text-xs text-muted-foreground">
              {player.mode === "strict"
                ? "−15 XP per miss · streak resets at 2 misses"
                : "−5 XP per miss · streak resets at 3 misses"}
            </div>
          </div>
          <Switch
            checked={player.mode === "strict"}
            onCheckedChange={(v) => setMode(v ? "strict" : "flex")}
            aria-label="Toggle strict mode"
          />
        </div>
      </div>

      {/* Level ladder */}
      <div className="glass rounded-3xl p-4">
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Rank ladder
        </div>
        <ul className="space-y-1.5">
          {LEVEL_THRESHOLDS.map((xp, i) => {
            const lv = i + 1;
            const reached = player.level >= lv;
            return (
              <li
                key={lv}
                className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-xs ${
                  reached ? "bg-white/5" : ""
                }`}
              >
                <span
                  className={`font-bold ${reached ? "neon-text-violet" : "text-muted-foreground"}`}
                >
                  LV {lv}
                </span>
                <span className={reached ? "text-foreground" : "text-muted-foreground"}>
                  {rankTitle(lv)}
                </span>
                <span className="tabular-nums text-muted-foreground">{xp} XP</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Data controls */}
      <div className="glass rounded-3xl p-4">
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Data
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={exportData}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium"
          >
            <Download className="h-4 w-4" /> Export local data
          </button>
          <button
            onClick={wipe}
            className="flex items-center gap-2 rounded-xl border border-[var(--neon-magenta)]/30 bg-[var(--neon-magenta)]/10 px-3 py-2 text-sm font-medium text-[var(--neon-magenta)]"
          >
            <Trash2 className="h-4 w-4" /> Wipe everything
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl p-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
        {icon}
      </div>
      <div>
        <div className="text-xl font-black tabular-nums">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
