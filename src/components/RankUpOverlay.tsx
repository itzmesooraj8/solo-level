import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RANK_COLORS, type HunterRank } from "@/lib/ranks";

const RANK_TITLES: Record<HunterRank, string> = {
  E: "Fledgling Hunter",
  D: "Awakened Hunter",
  C: "Seasoned Hunter",
  B: "Elite Hunter",
  A: "Master Hunter",
  S: "National Level Hunter",
  SS: "Shadow Monarch",
};

const RANK_FLAVOR: Record<HunterRank, string> = {
  E: "Your journey begins. The gates await.",
  D: "Your power stirs. Others take notice.",
  C: "You've proven yourself worthy of the hunt.",
  B: "Fear and respect walk beside you.",
  A: "Nations bow to hunters of your caliber.",
  S: "You stand among the world's finest.",
  SS: "You have surpassed the limits of mankind.",
};

export function RankUpOverlay({
  rank,
  onDismiss,
}: {
  rank: HunterRank | null;
  onDismiss: () => void;
}) {
  if (!rank) return null;
  const color = RANK_COLORS[rank];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center p-6"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="text-center max-w-xs w-full"
        >
          {/* Rank ring with glow */}
          <motion.div
            animate={{
              boxShadow: [`0 0 20px ${color}44`, `0 0 60px ${color}88`, `0 0 20px ${color}44`],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl font-black"
            style={{ border: `4px solid ${color}`, color, background: color + "18" }}
          >
            {rank}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="text-[10px] font-black uppercase tracking-[0.6em] mb-3"
              style={{ color }}
            >
              Rank-Up Protocol
            </div>
            <h2 className="text-4xl font-black text-white mb-1">{rank}-Rank</h2>
            <div className="text-xl font-bold mb-4" style={{ color }}>
              {RANK_TITLES[rank]}
            </div>
            <p className="text-sm text-white/50 mb-10 leading-relaxed italic">
              "{RANK_FLAVOR[rank]}"
            </p>
            <Button
              onClick={onDismiss}
              className="w-full h-14 rounded-2xl font-black text-base shadow-lg transition-transform active:scale-95"
              style={{ background: color, color: "#000" }}
            >
              Arise ⚔️
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
