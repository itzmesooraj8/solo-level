import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { resolveTask } from "@/lib/engine";
import { usePromptStore } from "@/stores/promptStore";

export function PopupOverlay() {
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
          className="fixed inset-0 flex items-center justify-center px-5"
          style={{ zIndex: 60 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(28px) saturate(150%)",
              WebkitBackdropFilter: "blur(28px) saturate(150%)",
              background:
                "radial-gradient(ellipse at top, oklch(0.62 0.24 295 / 0.2), transparent 45%), rgba(0, 0, 0, 0.55)",
            }}
          />

          <motion.div
            initial={{ scale: 0.9, y: 28, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="glass-strong relative w-full max-w-md overflow-hidden rounded-[2.25rem] p-6 text-center"
            style={{ boxShadow: "var(--shadow-glow-violet)" }}
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, var(--neon-violet), var(--neon-cyan), var(--neon-magenta))",
              }}
            />
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl"
              style={{ background: "color-mix(in oklch, var(--neon-cyan) 20%, transparent)" }}
            />

            <div className="mx-auto mb-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-neon-cyan" />
              Check-in
            </div>

            <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neon-cyan">
              System Prompt
            </div>
            <h2 className="mt-2 text-2xl font-black leading-tight">
              {active.promptText ?? `Did you complete: ${active.title}?`}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Scheduled {active.time} · {active.difficulty.toUpperCase()}
              {active.reverse ? " · Reverse logic" : ""}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={async () => {
                  await resolveTask(active, "yes");
                  dismiss();
                }}
                className="flex h-16 flex-col items-center justify-center gap-1 rounded-2xl text-sm font-bold text-background"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow-cyan)",
                }}
              >
                <Check className="h-6 w-6" strokeWidth={3} />
                YES
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={async () => {
                  await resolveTask(active, "no");
                  dismiss();
                }}
                className="flex h-16 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 text-sm font-bold text-foreground"
                style={{
                  background: "var(--gradient-danger)",
                  boxShadow: "var(--shadow-glow-magenta)",
                }}
              >
                <X className="h-6 w-6" strokeWidth={3} />
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
