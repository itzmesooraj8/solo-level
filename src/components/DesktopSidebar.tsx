import { Link, useLocation } from "@tanstack/react-router";
import { Home, ListChecks, CalendarDays, User, Sword, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useGameStore } from "@/stores/gameStore";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/tasks", label: "Tasks", icon: ListChecks },
  { to: "/quests", label: "Quests", icon: Sword },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function DesktopSidebar() {
  const { pathname } = useLocation();
  const player = useGameStore((s) => s.player);

  return (
    <aside className="hidden h-screen w-72 shrink-0 p-4 md:block" aria-label="Desktop navigation">
      <div className="glass-strong flex h-full flex-col rounded-[2rem] p-4">
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--neon-violet)] to-[var(--neon-cyan)] text-background">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Solo Level
            </div>
            <div className="text-sm font-bold">Hunter System</div>
          </div>
        </div>

        <nav className="space-y-1.5" aria-label="Primary">
          {items.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-sm font-semibold"
                aria-label={label}
              >
                {active && (
                  <motion.span
                    layoutId="desktop-nav-pill"
                    className="absolute inset-0 rounded-2xl bg-primary/20"
                    style={{ boxShadow: "var(--shadow-glow-violet)" }}
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-3 ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.9} />
                  <span>{label}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs text-muted-foreground">
          <div className="mb-1 uppercase tracking-[0.2em]">Current Mode</div>
          <div className="font-semibold text-foreground">
            {player?.mode === "strict" ? "Strict Protocol" : "Flex Protocol"}
          </div>
          <div className="mt-1">Desktop shell active. Mobile uses BottomNav.</div>
        </div>
      </div>
    </aside>
  );
}
