import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type WeeklyQuest, type Difficulty } from "@/lib/db";
import { weekKey, weekDays, DAY_NAMES } from "@/lib/dateKeys";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Check } from "lucide-react";
import { startOfWeek } from "date-fns";

export const Route = createFileRoute("/quests")({
  head: () => ({
    meta: [
      { title: "Weekly Quests — Hunter System" },
      {
        name: "description",
        content: "Plan side quests for each day of the week. Auto-rolls every Sunday.",
      },
      { property: "og:title", content: "Hunter Weekly Quests" },
      {
        property: "og:description",
        content: "Sunday-to-Saturday quest planner for your weekly grind.",
      },
    ],
  }),
  component: QuestsPage,
});

const DIFF_COLOR: Record<Difficulty, string> = {
  easy: "var(--neon-emerald)",
  medium: "var(--neon-cyan)",
  hard: "var(--neon-magenta)",
};

function uid() {
  return `q_${Math.random().toString(36).slice(2, 10)}`;
}

function QuestsPage() {
  const wk = weekKey();
  const days = weekDays(startOfWeek(new Date(), { weekStartsOn: 0 }));
  const quests = useLiveQuery(() => db.weeklyQuests.where("weekKey").equals(wk).toArray(), [wk]) as
    | WeeklyQuest[]
    | undefined;

  const [adding, setAdding] = useState<{ dayIndex: number } | null>(null);
  const [draft, setDraft] = useState("");
  const [draftDiff, setDraftDiff] = useState<Difficulty>("medium");

  const submit = async () => {
    if (!adding || !draft.trim()) return;
    const q: WeeklyQuest = {
      id: uid(),
      weekKey: wk,
      dayIndex: adding.dayIndex,
      title: draft.trim(),
      difficulty: draftDiff,
      done: false,
    };
    await db.weeklyQuests.put(q);
    setDraft("");
    setAdding(null);
  };

  const toggle = async (q: WeeklyQuest) => {
    await db.weeklyQuests.put({ ...q, done: !q.done });
  };

  const remove = async (id: string) => {
    await db.weeklyQuests.delete(id);
  };

  return (
    <div className="space-y-4">
      <div className="px-1 pt-2">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Side Quests</div>
        <h1 className="text-3xl font-black">This week</h1>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {days.map((d, i) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isToday = d.toDateString() === today.toDateString();
          const dayQuests = (quests ?? []).filter((q) => q.dayIndex === i);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className={`glass rounded-3xl p-4 ${isToday ? "neon-border-violet" : ""}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {DAY_NAMES[i]}
                  </div>
                  <div className="text-lg font-bold">
                    {d.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                  </div>
                </div>
                <button
                  onClick={() => setAdding({ dayIndex: i })}
                  aria-label={`Add quest for ${DAY_NAMES[i]}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-background"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Plus className="h-4 w-4" strokeWidth={3} />
                </button>
              </div>

              {dayQuests.length === 0 ? (
                <div className="text-xs text-muted-foreground">No quests planned.</div>
              ) : (
                <ul className="space-y-2">
                  {dayQuests.map((q) => (
                    <li
                      key={q.id}
                      className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2"
                    >
                      <button
                        onClick={() => toggle(q)}
                        aria-label={q.done ? "Mark undone" : "Mark done"}
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-white/15"
                        style={
                          q.done
                            ? {
                                background: "var(--gradient-primary)",
                                borderColor: "transparent",
                              }
                            : undefined
                        }
                      >
                        {q.done && (
                          <Check className="h-3.5 w-3.5 text-background" strokeWidth={3} />
                        )}
                      </button>
                      <span
                        className={`flex-1 text-sm ${q.done ? "text-muted-foreground line-through" : ""}`}
                      >
                        {q.title}
                      </span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase"
                        style={{
                          color: DIFF_COLOR[q.difficulty],
                          background: "rgba(255,255,255,0.05)",
                        }}
                      >
                        {q.difficulty}
                      </span>
                      <button
                        onClick={() => remove(q.id)}
                        aria-label="Delete"
                        className="text-muted-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {adding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex items-end justify-center"
          >
            <div
              className="absolute inset-0 bg-black/40"
              style={{ backdropFilter: "blur(12px)" }}
              onClick={() => setAdding(null)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="glass-strong relative w-full max-w-md rounded-t-[2rem] p-5"
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
              <h3 className="mb-3 text-lg font-bold">New quest · {DAY_NAMES[adding.dayIndex]}</h3>
              <input
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                placeholder="e.g. Read 30 pages"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDraftDiff(d)}
                    className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      draftDiff === d
                        ? "border-transparent text-background"
                        : "border-white/10 text-muted-foreground"
                    }`}
                    style={draftDiff === d ? { background: DIFF_COLOR[d] } : undefined}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <button
                onClick={submit}
                className="mt-4 w-full rounded-xl py-3 text-sm font-bold text-background"
                style={{ background: "var(--gradient-primary)" }}
              >
                Add quest
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
