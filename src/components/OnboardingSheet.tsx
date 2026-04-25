import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import { useGameStore } from "@/stores/gameStore";
import { notifications } from "@/services/notifications";
import { Sword, Bell, Shield } from "lucide-react";

const STEPS = ["identity", "mode", "notifications"] as const;

export function OnboardingSheet({ open, onComplete }: { open: boolean; onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"strict" | "flex">("flex");
  const setHunterName = useGameStore(s => s.setHunterName);
  const setGameMode = useGameStore(s => s.setMode);

  async function finish() {
    await setHunterName(name || "Hunter");
    await setGameMode(mode);
    await notifications.ensurePermission();
    // Seed 3 starter tasks
    await db.tasks.bulkAdd([
      { id: `seed_${Math.random().toString(36).slice(2, 6)}`, title: "Morning routine", time: "07:00", durationMin: 30, difficulty: "easy", notify: "smart", recurrence: "daily", createdAt: Date.now() },
      { id: `seed_${Math.random().toString(36).slice(2, 6)}`, title: "Daily exercise", time: "18:00", durationMin: 45, difficulty: "medium", notify: "strict", recurrence: "daily", createdAt: Date.now() },
      { id: `seed_${Math.random().toString(36).slice(2, 6)}`, title: "Read / study", time: "21:00", durationMin: 30, difficulty: "easy", notify: "smart", recurrence: "daily", createdAt: Date.now() },
    ]);
    onComplete();
  }

  const screens = [
    // Step 0 — identity
    <div key="identity" className="flex flex-col items-center gap-6 py-4">
      <div className="w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
        <Sword className="w-8 h-8 text-violet-400" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-black neon-text-violet">Arise, Hunter</h2>
        <p className="text-sm text-muted-foreground mt-1">The System has chosen you. What is your name?</p>
      </div>
      <Input
        placeholder="Enter your hunter name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="text-center text-lg font-medium border-white/10 bg-white/5"
        maxLength={20}
      />
      <Button
        className="w-full rounded-xl h-12 text-sm font-bold"
        style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
        onClick={() => setStep(1)}
        disabled={!name.trim()}
      >
        Accept the Call →
      </Button>
    </div>,

    // Step 1 — mode
    <div key="mode" className="flex flex-col gap-4 py-4">
      <div className="text-center">
        <h2 className="text-xl font-black">Choose your path</h2>
        <p className="text-sm text-muted-foreground mt-1">This affects penalties for missed tasks</p>
      </div>
      {[
        { id: "flex", label: "Flex Mode", sub: "–5 XP penalty · 3-miss streak reset · Good for beginners", icon: "🌙" },
        { id: "strict", label: "Strict Mode", sub: "–15 XP penalty · 2-miss streak reset · For disciplined hunters", icon: "⚔️" },
      ].map(m => (
        <button
          key={m.id}
          onClick={() => setMode(m.id as "strict" | "flex")}
          className={`w-full text-left p-4 rounded-2xl border transition-all ${
            mode === m.id
              ? "border-violet-500/60 bg-violet-500/10"
              : "border-white/10 bg-white/3 hover:bg-white/5"
          }`}
        >
          <div className="text-lg mb-0.5">{m.icon} <span className="font-semibold">{m.label}</span></div>
          <div className="text-xs text-muted-foreground">{m.sub}</div>
        </button>
      ))}
      <Button
        className="w-full mt-2 rounded-xl h-12 text-sm font-bold"
        style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
        onClick={() => setStep(2)}
      >
        Continue →
      </Button>
    </div>,

    // Step 2 — notifications
    <div key="notifs" className="flex flex-col items-center gap-6 py-4">
      <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
        <Bell className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-black">Quest Alerts</h2>
        <p className="text-sm text-muted-foreground mt-1">The System will notify you when quests begin. Never miss a task again.</p>
      </div>
      <Button
        className="w-full rounded-xl h-12 text-sm font-bold"
        style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
        onClick={finish}
      >
        Enable Notifications & Begin →
      </Button>
      <button className="text-xs text-muted-foreground underline" onClick={finish}>
        Skip for now
      </button>
    </div>,
  ];

  return (
    <Sheet open={open}>
      <SheetContent side="bottom" className="rounded-t-[2rem] pb-8 max-h-[85vh] overflow-y-auto border-none glass-strong">
        <div className="flex gap-1.5 justify-center mb-6 mt-2">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i <= step ? "w-8 bg-violet-500" : "w-4 bg-white/10"}`} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {screens[step]}
          </motion.div>
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
}
