import { Link, useLocation } from "@tanstack/react-router";
import { Home, ListChecks, CalendarDays, User, Sword } from "lucide-react";
import { motion } from "framer-motion";
import { notifications } from "@/services/notifications";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/tasks", label: "Tasks", icon: ListChecks },
  { to: "/quests", label: "Quests", icon: Sword },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
      aria-label="Primary"
    >
      <div className="glass-strong mx-auto flex max-w-md items-center justify-between rounded-full px-2 py-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              onClick={() => notifications.vibrate(10)}
              className="relative flex flex-1 flex-col items-center justify-center rounded-full px-2 py-2 text-[10px] font-medium uppercase tracking-wider"
              aria-label={label}
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/20"
                  style={{ boxShadow: "var(--shadow-glow-violet)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 flex flex-col items-center gap-0.5 transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.8} />
                <span>{label}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
