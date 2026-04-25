import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const MILESTONE_TITLES: Record<number, string> = {
  7:   "Week Warrior",
  14:  "Fortnight Hunter",
  30:  "Monthly Sovereign",
  60:  "Iron Will",
  100: "Shadow Monarch",
};

const MILESTONE_BONUS: Record<number, number> = { 7: 50, 14: 50, 30: 200, 60: 200, 100: 500 };

export function StreakMilestoneOverlay({
  streak, onDismiss
}: { streak: number | null; onDismiss: () => void }) {
  if (!streak) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onDismiss}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass rounded-3xl p-8 text-center max-w-xs mx-4"
          onClick={e => e.stopPropagation()}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ repeat: 2, duration: 0.5 }}
            className="text-6xl mb-4"
          >
            🔥
          </motion.div>
          <div className="text-xs uppercase tracking-widest text-orange-400 mb-1">
            {streak}-Day Streak
          </div>
          <h2 className="text-2xl font-black neon-text-amber mb-1">
            {MILESTONE_TITLES[streak] ?? "Streak Milestone!"}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            +{MILESTONE_BONUS[streak] ?? 50} bonus XP awarded
          </p>
          <Button className="w-full" onClick={onDismiss}>Continue</Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
