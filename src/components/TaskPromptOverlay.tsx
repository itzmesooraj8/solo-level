import { motion, AnimatePresence } from "framer-motion";
import { usePromptStore } from "@/stores/promptStore";
import { resolveTask } from "@/lib/engine";
import { Check, X } from "lucide-react";

export function TaskPromptOverlay() {
  const active = usePromptStore((s) => s.active);
  const dismiss = usePromptStore((s) => s.dismiss);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-6"
        >
          {/* Backdrop blur */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(28px) saturate(140%)",
              WebkitBackdropFilter: "blur(28px) saturate(140%)",
              backgroundColor: "oklch(0.08 0.02 270 / 0.55)",
            }}
          />

          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="glass-strong relative w-full max-w-md rounded-[2rem] p-6 text-center"
            style={{ boxShadow: "var(--shadow-glow-violet)" }}
          >
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              System Prompt
            </div>
            <h2 className="mb-1 text-2xl font-bold leading-tight">
              {active.promptText ?? `Did you complete: ${active.title}?`}
            </h2>
            <p className="mb-6 text-xs text-muted-foreground">
              Scheduled {active.time} · {active.difficulty.toUpperCase()}
              {active.reverse && " · Reverse logic"}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={async () => {
                  await resolveTask(active, "yes");
                  dismiss();
                }}
                className="flex h-20 flex-col items-center justify-center gap-1 rounded-2xl text-sm font-bold text-background"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow-cyan)",
                }}
              >
                <Check className="h-7 w-7" strokeWidth={3} />
                YES
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={async () => {
                  await resolveTask(active, "no");
                  dismiss();
                }}
                className="flex h-20 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 text-sm font-bold text-foreground"
                style={{
                  background: "var(--gradient-danger)",
                  boxShadow: "var(--shadow-glow-magenta)",
                }}
              >
                <X className="h-7 w-7" strokeWidth={3} />
                NO
              </motion.button>
            </div>
            <button
              onClick={dismiss}
              className="mt-4 text-xs text-muted-foreground hover:text-foreground"
            >
              Snooze
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
