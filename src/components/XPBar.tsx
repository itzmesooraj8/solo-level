import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Zap } from "lucide-react";
import { levelProgress, rankTitle } from "@/lib/leveling";

type XPBarProps = {
  xp: number;
  level: number;
  className?: string;
  compact?: boolean;
};

export function XPBar({ xp, level, className = "", compact = false }: XPBarProps) {
  const lp = levelProgress(xp);

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className={`glass-strong relative overflow-hidden rounded-[2rem] p-4 ${className}`}
      style={{ boxShadow: "var(--shadow-glow-violet)" }}
    >
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--neon-cyan)" }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Hunter Rank
          </div>
          <h2
            className={`${compact ? "text-xl" : "text-3xl"} mt-1 font-black leading-tight neon-text-violet`}
          >
            {rankTitle(level)}
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            LV {lp.level} progression is the core loop
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-background"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Zap className="h-3.5 w-3.5" />
            LV {level}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {lp.isMax ? "Max rank" : `Next LV ${lp.level + 1}`}
          </span>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>{lp.isMax ? "Rank capped" : `LV ${lp.level}`}</span>
          <span className="tabular-nums">{lp.isMax ? `${xp} XP` : `${lp.within}/${lp.span} XP`}</span>
        </div>
        <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            animate={{ width: `${lp.pct * 100}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          />
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-2">
          <div className="font-semibold uppercase tracking-wider">Total XP</div>
          <div className="mt-1 text-base font-black tabular-nums text-foreground">{xp}</div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-2">
          <div className="font-semibold uppercase tracking-wider">Rank title</div>
          <div className="mt-1 flex items-center gap-1 text-base font-black text-foreground">
            <span className="truncate">{rankTitle(level)}</span>
            <ChevronRight className="h-4 w-4 text-[var(--neon-cyan)]" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}