import { useEffect, useMemo, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Shield, Sparkles, Swords, UserRound } from "lucide-react";
import { db, type GameMode } from "@/lib/db";
import { notifications } from "@/services/notifications";
import { useGameStore } from "@/stores/gameStore";
import { usePromptStore } from "@/stores/promptStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OnboardingWizard() {
  const player = useGameStore((s) => s.player);
  const setMode = useGameStore((s) => s.setMode);
  const setHunterName = useGameStore((s) => s.setHunterName);
  const openAdd = usePromptStore((s) => s.openAdd);
  const addOpen = usePromptStore((s) => s.addOpen);

  const activeTaskCount = useLiveQuery(
    () => db.tasks.filter((task) => !task.archived).count(),
    [],
  );

  const shouldStart = !!player && !player.hunterName?.trim() && player.xp === 0;

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [hunterName, setLocalHunterName] = useState("");
  const [mode, setLocalMode] = useState<GameMode>("strict");

  useEffect(() => {
    if (shouldStart) {
      setOpen(true);
      setStep(1);
      setLocalHunterName("");
      setLocalMode(player?.mode ?? "strict");
    }
  }, [player?.mode, shouldStart]);

  const canContinueStepOne = hunterName.trim().length >= 2;
  const hasFirstTask = (activeTaskCount ?? 0) > 0;

  const stepLabel = useMemo(() => {
    if (step === 1) return "Name your hunter";
    if (step === 2) return "Forge your first quest";
    return "Choose your discipline";
  }, [step]);

  const complete = async () => {
    if (!player) return;
    if (!canContinueStepOne) return;
    await setMode(mode);
    await setHunterName(hunterName);
    notifications.vibrate([20, 40, 20]);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center px-4"
          style={{ zIndex: 72 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(22px) saturate(130%)",
              WebkitBackdropFilter: "blur(22px) saturate(130%)",
              background:
                "radial-gradient(ellipse at top, oklch(0.62 0.24 295 / 0.2), transparent 45%), rgba(0, 0, 0, 0.62)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="glass-strong relative w-full max-w-md overflow-hidden rounded-[2rem] p-6"
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

            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  First-run protocol
                </div>
                <h2 className="mt-1 text-2xl font-black leading-tight">Initialize Hunter System</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon-cyan">
                {step}/3
              </div>
            </div>

            <div className="mb-5 flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-neon-cyan" : "bg-white/10"}`}
                />
              ))}
            </div>

            <div className="mb-4 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-muted-foreground">
              {stepLabel}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-neon-cyan">
                  <UserRound className="h-5 w-5" />
                  <span className="text-sm font-semibold">What shall we call you, Hunter?</span>
                </div>
                <Input
                  autoFocus
                  value={hunterName}
                  maxLength={24}
                  onChange={(event) => setLocalHunterName(event.target.value)}
                  placeholder="e.g. Sung Jin-Woo"
                />
                <p className="text-xs text-muted-foreground">
                  This name appears in your profile and onboarding records.
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-neon-cyan">
                  <Swords className="h-5 w-5" />
                  <span className="text-sm font-semibold">Set your first daily quest</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  <div className="text-sm font-semibold text-foreground">Quest setup status</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {(activeTaskCount ?? 0) > 0
                      ? `Ready: ${activeTaskCount} active task${activeTaskCount === 1 ? "" : "s"}`
                      : "No active task yet. Create one now, or continue and add it later."}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => openAdd()}
                  className="w-full rounded-xl"
                  style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
                >
                  {addOpen ? "Task editor open" : "Create first quest"}
                </Button>

                {hasFirstTask && (
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neon-emerald">
                    <CheckCircle2 className="h-4 w-4" />
                    First quest forged
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-neon-cyan">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-semibold">Choose your discipline</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => setLocalMode("strict")}
                    className={`rounded-2xl border px-4 py-3 text-left ${
                      mode === "strict"
                        ? "border-(--neon-magenta)/80 bg-(--neon-magenta)/10"
                        : "border-white/10 bg-white/3"
                    }`}
                  >
                    <div className="text-sm font-bold">Strict mode</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      −15 XP on misses. Streak resets at 2 failed actions.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocalMode("flex")}
                    className={`rounded-2xl border px-4 py-3 text-left ${
                      mode === "flex"
                        ? "border-(--neon-cyan)/80 bg-(--neon-cyan)/10"
                        : "border-white/10 bg-white/3"
                    }`}
                  >
                    <div className="text-sm font-bold">Flex mode</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      −5 XP on misses. Streak resets at 3 failed actions.
                    </div>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
                  You can switch this later in Profile.
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((prev) => (prev === 1 ? 1 : ((prev - 1) as 1 | 2 | 3)))}
                disabled={step === 1}
                className="rounded-xl border-white/10 bg-white/3"
              >
                Back
              </Button>

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={() => setStep((prev) => (prev === 3 ? 3 : ((prev + 1) as 1 | 2 | 3)))}
                  disabled={step === 1 && !canContinueStepOne}
                  className="rounded-xl"
                  style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
                >
                  {step === 2 && !hasFirstTask ? "Continue anyway" : "Continue"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={complete}
                  disabled={!canContinueStepOne}
                  className="rounded-xl"
                  style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
                >
                  Complete setup
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}