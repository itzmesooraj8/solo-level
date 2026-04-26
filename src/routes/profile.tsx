import { createFileRoute } from "@tanstack/react-router";
import { useGameStore } from "@/stores/gameStore";
import { rankTitle, LEVEL_THRESHOLDS } from "@/lib/leveling";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Flame,
  Trophy,
  Target,
  X,
  Download,
  Trash2,
  Edit2,
  Check,
  Upload,
} from "lucide-react";
import { db } from "@/lib/db";
import { Switch } from "@/components/ui/switch";
import { InstallSystemCard } from "@/components/InstallSystemCard";
import { XPBar } from "@/components/XPBar";
import { RankBadge } from "@/components/RankBadge";
import { useState, useRef, useMemo } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { format, parseISO, subDays } from "date-fns";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

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
  const setHunterName = useGameStore((s) => s.setHunterName);
  const load = useGameStore((s) => s.load);

  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(player?.hunterName || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!player) return null;

  const saveName = async () => {
    if (tempName.trim()) {
      await setHunterName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const exportData = async () => {
    const dump = {
      player,
      tasks: await db.tasks.toArray(),
      dayTasks: await db.dayTasks.toArray(),
      dayLogs: await db.dayLogs.toArray(),
      weeklyQuests: await db.weeklyQuests.toArray(),
      promptFires: await db.promptFires.toArray(),
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

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const dump = JSON.parse(event.target?.result as string);
        if (confirm("Importing data will OVERWRITE your current progress. Continue?")) {
          await db.transaction(
            "rw",
            [db.player, db.tasks, db.dayTasks, db.dayLogs, db.weeklyQuests, db.promptFires],
            async () => {
              if (dump.player) await db.player.put(dump.player);
              if (dump.tasks) {
                await db.tasks.clear();
                await db.tasks.bulkPut(dump.tasks);
              }
              if (dump.dayTasks) {
                await db.dayTasks.clear();
                await db.dayTasks.bulkPut(dump.dayTasks);
              }
              if (dump.dayLogs) {
                await db.dayLogs.clear();
                await db.dayLogs.bulkPut(dump.dayLogs);
              }
              if (dump.weeklyQuests) {
                await db.weeklyQuests.clear();
                await db.weeklyQuests.bulkPut(dump.weeklyQuests);
              }
              if (dump.promptFires) {
                await db.promptFires.clear();
                await db.promptFires.bulkPut(dump.promptFires);
              }
            },
          );
          await load();
          alert("Data imported successfully.");
        }
      } catch (err) {
        console.error(err);
        alert("Failed to import data. Invalid file format.");
      }
    };
    reader.readAsText(file);
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
            <div className="flex items-center gap-2">
              {isEditingName ? (
                <div className="flex flex-1 items-center gap-2">
                  <input
                    autoFocus
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={saveName}
                    onKeyDown={(e) => e.key === "Enter" && saveName()}
                    className="w-full bg-transparent text-2xl font-black outline-none"
                  />
                  <button onClick={saveName} className="shrink-0">
                    <Check className="h-5 w-5 text-neon-emerald" />
                  </button>
                </div>
              ) : (
                <div
                  className="group flex cursor-pointer items-center gap-2"
                  onClick={() => {
                    setTempName(player.hunterName || "");
                    setIsEditingName(true);
                  }}
                >
                  <div className="truncate text-2xl font-black neon-text-violet">
                    {player.hunterName || "Unnamed Hunter"}
                  </div>
                  <RankBadge totalXp={player.xp} className="h-6 w-6 text-[10px]" />
                  <Edit2 className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              )}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {rankTitle(player.level)}
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3 w-3" /> {player.xp} XP total
            </div>
          </div>
        </div>
      </motion.div>

      <XPBar xp={player.xp} level={player.level} compact />

      {/* 30-Day Activity */}
      <div className="glass rounded-3xl p-4 overflow-hidden">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            30-Day Activity
          </div>
          <div className="text-[10px] font-bold text-neon-cyan">Last 30 Days</div>
        </div>
        <div className="h-32 w-full">
          <ActivityChart />
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<Trophy className="h-5 w-5 text-neon-cyan" />}
          label="Best streak"
          value={player.bestStreak}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-neon-amber" />}
          label="Current streak"
          value={player.currentStreak}
        />
        <StatCard
          icon={<Target className="h-5 w-5 text-neon-emerald" />}
          label="Completed"
          value={player.tasksCompleted}
        />
        <StatCard
          icon={<X className="h-5 w-5 text-neon-magenta" />}
          label="Missed"
          value={player.tasksMissed}
        />
      </div>

      {/* Mode toggle */}
      <div className="glass rounded-3xl p-4">
        <div className="flex items-center gap-3">
          <Shield
            className={`h-6 w-6 ${player.mode === "strict" ? "text-neon-magenta" : "text-neon-cyan"}`}
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
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-white/15"
          >
            <Download className="h-4 w-4 text-neon-cyan" /> Export local data
          </button>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neon-emerald/20 border border-neon-emerald/30 px-3 py-2.5 text-sm font-bold text-neon-emerald transition hover:bg-neon-emerald/30">
            <Upload className="h-4 w-4" /> Import local data
            <input type="file" onChange={importData} accept=".json" className="hidden" />
          </label>
          <button
            onClick={wipe}
            className="flex items-center gap-2 rounded-xl border border-(--neon-magenta)/30 bg-(--neon-magenta)/10 px-3 py-2 text-sm font-medium text-neon-magenta"
          >
            <Trash2 className="h-4 w-4" /> Wipe everything
          </button>
        </div>
      </div>

      <InstallSystemCard />
    </div>
  );
}

function ActivityChart() {
  const days = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const d = subDays(new Date(), 29 - i);
        return format(d, "yyyy-MM-dd");
      }),
    [],
  );

  const logs = useLiveQuery(
    () => db.dayLogs.where("dateKey").between(days[0], days[29], true, true).toArray(),
    [],
  );

  const data = useMemo(() => {
    const logMap = new Map(logs?.map((l) => [l.dateKey, l]));
    return days.map((k) => ({
      date: k,
      xp: logMap.get(k)?.xpEarned ?? 0,
      status: logMap.get(k)?.status ?? "none",
    }));
  }, [logs, days]);

  const STATUS_COLOR: Record<string, string> = {
    perfect: "var(--neon-emerald)",
    partial: "var(--neon-amber)",
    failed: "var(--neon-magenta)",
    "in-progress": "var(--neon-cyan)",
    none: "rgba(255,255,255,0.05)",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
        <XAxis dataKey="date" hide />
        <YAxis hide domain={[0, "auto"]} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="glass-strong rounded-xl p-2 text-[10px] border-white/10">
                  <div className="font-bold">
                    {format(parseISO(payload[0].payload.date), "MMM d")}
                  </div>
                  <div className="neon-text-cyan">{payload[0].value} XP</div>
                </div>
              );
            }
            return null;
          }}
          cursor={{ fill: "rgba(255,255,255,0.05)" }}
        />
        <Bar dataKey="xp" radius={[2, 2, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={STATUS_COLOR[entry.status]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/4">
        {icon}
      </div>
      <div>
        <div className="text-xl font-black tabular-nums">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
