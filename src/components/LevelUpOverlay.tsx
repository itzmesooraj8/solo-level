import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useGameStore } from "@/stores/gameStore";
import { rankTitle } from "@/lib/leveling";
import { Button } from "@/components/ui/button";

const LevelUpScene = lazy(() => import("./LevelUpScene"));

export function LevelUpOverlay() {
  const pending = useGameStore((s) => s.pendingLevelUp);
  const clear = useGameStore((s) => s.clearLevelUp);
  const particles = Array.from({ length: 12 }, (_, index) => index);

  return (
    <AnimatePresence>
      {pending && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-70 overflow-hidden"
        >
          <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
            <LevelUpScene level={pending.to} />
          </Suspense>

          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.82))]"
          />

          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((index) => {
              const left = 12 + ((index * 17) % 70);
              const top = 16 + ((index * 13) % 58);
              const size = index % 3 === 0 ? 14 : index % 3 === 1 ? 10 : 8;
              const delay = index * 0.12;
              const color =
                index % 3 === 0
                  ? "var(--neon-cyan)"
                  : index % 3 === 1
                    ? "var(--neon-violet)"
                    : "var(--neon-magenta)";
              return (
                <motion.span
                  key={index}
                  className="absolute rounded-full blur-sm"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: size,
                    height: size,
                    background: color,
                  }}
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.7, 1.2, 0.8], y: [0, -20, 0] }}
                  transition={{ duration: 3.8, delay, repeat: Infinity, ease: "easeInOut" }}
                />
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ y: 36, opacity: 0, scale: 0.94 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.98 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 18 }}
              className="glass-strong relative w-full max-w-md rounded-[2.2rem] border border-white/10 px-6 py-7"
              style={{ boxShadow: "var(--shadow-glow-violet)" }}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 rounded-t-[2.2rem] bg-linear-to-r from-neon-violet via-neon-cyan to-neon-magenta"
              />
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-neon-cyan" />
                Rank ascension
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan">
                Level Up
              </div>
              <div className="mt-2 text-7xl font-black neon-text-violet tabular-nums">
                {pending.to}
              </div>
              <div className="mt-2 text-2xl font-black text-foreground">
                {rankTitle(pending.to)}
              </div>
              <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                You climbed from LV {pending.from} to LV {pending.to}. Keep the pressure on and
                clear the next gate.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute inset-x-0 bottom-12 flex justify-center"
          >
            <Button
              onClick={clear}
              size="lg"
              className="rounded-full px-8 shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)]"
              style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
            >
              Continue
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
