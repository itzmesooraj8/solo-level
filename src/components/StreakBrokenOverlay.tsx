import { AnimatePresence, motion } from "framer-motion";
import { HeartCrack } from "lucide-react";
import { useGameStore } from "@/stores/gameStore";

export function StreakBrokenOverlay() {
  const pending = useGameStore((s) => s.pendingStreakBreak);
  const clear = useGameStore((s) => s.clearStreakBreak);

  return (
    <AnimatePresence>
      {pending && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center px-6"
          style={{ zIndex: 65 }}
        >
          <div
            className="absolute inset-0"
            style={{ backdropFilter: "blur(22px) saturate(130%)", background: "rgba(10,10,18,0.68)" }}
          />
          <motion.div
            initial={{ scale: 0.94, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, x: [0, -10, 10, -6, 6, 0] }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="glass-strong relative w-full max-w-sm rounded-[2rem] p-6 text-center"
            style={{ boxShadow: "var(--shadow-glow-magenta)" }}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--neon-magenta)/15">
              <HeartCrack className="h-8 w-8 text-neon-magenta" />
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-neon-magenta">
              Streak Broken
            </div>
            <h2 className="mt-2 text-3xl font-black">The chain snapped.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pending.from} day streak ended. Start another run and keep the next gate closed.
            </p>
            <button
              onClick={clear}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-background"
              style={{ background: "var(--gradient-danger)" }}
            >
              Rise Again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}