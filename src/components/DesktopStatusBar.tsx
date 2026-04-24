import { useLocation } from "@tanstack/react-router";
import { useGameStore } from "@/stores/gameStore";
import { levelProgress, rankTitle } from "@/lib/leveling";
import { Flame, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

function routeLabel(pathname: string) {
  if (pathname === "/") return "Dashboard";
  if (pathname === "/tasks") return "Task Library";
  if (pathname === "/quests") return "Weekly Quests";
  if (pathname === "/calendar") return "Calendar";
  if (pathname === "/profile") return "Profile";
  return "Hunter System";
}

export function DesktopStatusBar() {
  const { pathname } = useLocation();
  const player = useGameStore((s) => s.player);

  if (!player) return null;
  const lp = levelProgress(player.xp);

  return (
    <header className="hidden px-5 pt-4 md:block" aria-label="Desktop status bar">
      <div className="glass-strong flex items-center justify-between gap-4 rounded-2xl px-4 py-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {routeLabel(pathname)}
          </div>
          <div className="truncate text-sm font-bold">{rankTitle(player.level)}</div>
        </div>

        <div className="flex min-w-[280px] flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-violet)] to-[var(--neon-cyan)] text-xs font-bold text-background">
            {player.level}
          </span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              animate={{ width: `${lp.pct * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground">
            {lp.within}/{lp.span}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1 text-xs text-[var(--neon-amber)]">
            <Flame className="h-3.5 w-3.5" />
            {player.currentStreak}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1 text-xs text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            {player.xp}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1 text-xs text-muted-foreground">
            <Shield className="h-3.5 w-3.5" />
            {player.mode === "strict" ? "Strict" : "Flex"}
          </span>
        </div>
      </div>
    </header>
  );
}
