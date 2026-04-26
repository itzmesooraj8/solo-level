import { useGameStore } from "@/stores/gameStore";
import { levelProgress, rankTitle } from "@/lib/leveling";
import { getRank, RANK_COLORS } from "@/lib/ranks";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, Zap, Trophy, Shield } from "lucide-react";
import { useState } from "react";

export function DynamicIsland() {
  const player = useGameStore((s) => s.player);
  const [open, setOpen] = useState(false);
  if (!player) return null;
  const lp = levelProgress(player.xp);
  const rank = getRank(player.xp);

  return (
    <div className="sticky top-0 z-30 px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <motion.button
        layout
        onClick={() => setOpen((v) => !v)}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`glass-strong mx-auto flex w-full max-w-md items-center justify-between gap-3 px-4 py-2 text-left transition-all duration-300 ${
          open ? "rounded-[2rem] shadow-glow-violet" : "rounded-full"
        }`}
        aria-expanded={open}
        aria-label="Player status"
      >
        <div className="flex items-center gap-2">
          <motion.span
            layout
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-violet)] to-[var(--neon-cyan)] text-xs font-black text-background"
          >
            {player.level}
          </motion.span>
          <div className="leading-tight">
            <div className="text-xs font-black neon-text-violet">LV {player.level}</div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
              {rankTitle(player.level)}
            </div>
          </div>
        </div>

        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-1 items-center gap-2 px-2"
          >
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                animate={{ width: `${lp.pct * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              />
            </div>
            <span className="text-[9px] font-bold tabular-nums text-muted-foreground">
              {Math.round(lp.pct * 100)}%
            </span>
          </motion.div>
        )}

        <div className="flex items-center gap-1.5">
          {open ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center h-8 w-8 rounded-full font-black text-[10px]"
              style={{
                background: RANK_COLORS[rank] + "22",
                color: RANK_COLORS[rank],
                border: `1px solid ${RANK_COLORS[rank]}44`,
              }}
            >
              {rank}
            </motion.div>
          ) : (
            <div className="flex items-center gap-1 text-xs font-black text-[var(--neon-amber)]">
              <Flame className="h-3.5 w-3.5" />
              {player.currentStreak}
            </div>
          )}
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="mx-auto mt-2 max-w-md overflow-hidden"
          >
            <div className="glass-strong rounded-[2rem] p-5 shadow-2xl border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Current Progress
                  </div>
                  <div className="text-2xl font-black text-foreground tabular-nums">
                    {player.xp.toLocaleString()}{" "}
                    <span className="text-xs text-muted-foreground">XP</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Rank
                  </div>
                  <div className="text-2xl font-black" style={{ color: RANK_COLORS[rank] }}>
                    {rank}-Rank
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-muted-foreground">Level {player.level}</span>
                    <span className="text-neon-cyan">
                      {lp.within} / {lp.span} XP to Next Level
                    </span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/5 p-0.5 border border-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "var(--gradient-primary)",
                        boxShadow: "0 0 15px -2px var(--neon-violet)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${lp.pct * 100}%` }}
                      transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <ExpandedStat
                    icon={<Zap className="h-3 w-3" />}
                    label="Total XP"
                    value={player.xp.toString()}
                    color="neon-text-violet"
                  />
                  <ExpandedStat
                    icon={<Flame className="h-3 w-3" />}
                    label="Streak"
                    value={player.currentStreak.toString()}
                    color="text-neon-amber"
                  />
                  <ExpandedStat
                    icon={<Trophy className="h-3 w-3" />}
                    label="Best"
                    value={player.bestStreak.toString()}
                    color="text-neon-cyan"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-muted-foreground" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      {player.mode} Mode
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-[9px] font-black uppercase tracking-widest text-neon-cyan hover:opacity-80 transition-opacity"
                  >
                    Collapse Profile
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExpandedStat({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="glass rounded-2xl p-3 border border-white/5 flex flex-col items-center justify-center gap-1">
      <div className="text-muted-foreground/50">{icon}</div>
      <div className={`text-base font-black tabular-nums ${color}`}>{value}</div>
      <div className="text-[8px] font-black uppercase tracking-tighter text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-lg font-bold neon-text-cyan tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
