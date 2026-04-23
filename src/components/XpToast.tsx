import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/stores/gameStore";
import { useEffect, useState } from "react";

export function XpToast() {
  const recent = useGameStore((s) => s.recentXp);
  const [item, setItem] = useState<typeof recent>(null);

  useEffect(() => {
    if (!recent) return;
    setItem(recent);
    const t = setTimeout(() => setItem(null), 1500);
    return () => clearTimeout(t);
  }, [recent]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 flex justify-center px-4">
      <AnimatePresence>
        {item && (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className={`glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
              item.amount >= 0 ? "text-[var(--neon-cyan)]" : "text-[var(--neon-magenta)]"
            }`}
            style={{
              boxShadow:
                item.amount >= 0 ? "var(--shadow-glow-cyan)" : "var(--shadow-glow-magenta)",
            }}
          >
            {item.amount >= 0 ? "+" : ""}
            {item.amount} XP
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
