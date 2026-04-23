import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/stores/gameStore";
import { rankTitle } from "@/lib/leveling";
import { Button } from "@/components/ui/button";

const LevelUpScene = lazy(() => import("./LevelUpScene"));

export function LevelUpOverlay() {
  const pending = useGameStore((s) => s.pendingLevelUp);
  const clear = useGameStore((s) => s.clearLevelUp);

  return (
    <AnimatePresence>
      {pending && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70]"
        >
          <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
            <LevelUpScene level={pending.to} />
          </Suspense>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
                Level Up
              </div>
              <div className="mt-2 text-7xl font-black neon-text-violet tabular-nums">
                {pending.to}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground/80">
                {rankTitle(pending.to)}
              </div>
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
              className="rounded-full px-8"
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
