import { useGameStore } from "@/stores/gameStore";
import { levelProgress, rankTitle } from "@/lib/leveling";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import { useState } from "react";

export function DynamicIsland() {
  const player = useGameStore((s) => s.player);
  const [open, setOpen] = useState(false);
  if (!player) return null;
  const lp = levelProgress(player.xp);

  return (
    <div className="sticky top-0 z-30 px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <motion.button
        layout
        onClick={() => setOpen((v) => !v)}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="glass-strong mx-auto flex w-full max-w-md items-center justify-between gap-3 rounded-full px-4 py-2 text-left"
        aria-expanded={open}
        aria-label="Player status"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-violet)] to-[var(--neon-cyan)] text-xs font-bold text-background">
            {player.level}
          </span>
          <div className="leading-tight">
            <div className="text-xs font-semibold neon-text-violet">LV {player.level}</div>
            <div className="text-[10px] text-muted-foreground">{rankTitle(player.level)}</div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2 px-2">
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              animate={{ width: `${lp.pct * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
          <span className="text-[10px] tabular-nums text-muted-foreground">
            {lp.within}/{lp.span}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-[var(--neon-amber)]">
          <Flame className="h-3.5 w-3.5" />
          {player.currentStreak}
        </div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-auto mt-2 max-w-md overflow-hidden"
          >
            <div className="glass rounded-3xl p-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <Stat label="Total XP" value={player.xp.toString()} />
                <Stat label="Best streak" value={player.bestStreak.toString()} />
                <Stat label="Mode" value={player.mode === "strict" ? "Strict" : "Flex"} />
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3 w-3" />
                Tap status pill to collapse
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
