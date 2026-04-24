import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type Task } from "@/lib/db";
import { usePromptStore } from "@/stores/promptStore";
import { Plus, Pencil, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { isDayLocked } from "@/lib/engine";
import { dateKey } from "@/lib/dateKeys";

export const Route = createFileRoute("/tasks")({
  head: () => ({
    meta: [
      { title: "Tasks — Hunter System" },
      {
        name: "description",
        content: "Manage your daily task library. Editable until the day begins.",
      },
      { property: "og:title", content: "Hunter Tasks" },
      {
        property: "og:description",
        content: "Forge daily quests with difficulty, time and notification mode.",
      },
    ],
  }),
  component: TasksPage,
});

const DIFF_COLOR: Record<string, string> = {
  easy: "var(--neon-emerald)",
  medium: "var(--neon-cyan)",
  hard: "var(--neon-magenta)",
};

function TasksPage() {
  const tasks = useLiveQuery(() => db.tasks.orderBy("createdAt").toArray()) as Task[] | undefined;
  const openAdd = usePromptStore((s) => s.openAdd);
  const todayLocked = isDayLocked(dateKey());

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between px-1 pt-2">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Library</div>
          <h1 className="text-3xl font-black">Daily tasks</h1>
        </div>
        {todayLocked && (
          <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Lock className="h-3 w-3" /> Day in progress
          </span>
        )}
      </div>

      {!tasks ? (
        <div className="h-32 animate-pulse rounded-3xl bg-white/5" />
      ) : tasks.length === 0 ? (
        <div className="glass rounded-3xl p-8 text-center">
          <div className="mb-2 text-3xl">📜</div>
          <div className="text-sm font-semibold">No tasks yet.</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {todayLocked
              ? "Task library is locked for today. Create tasks before midnight."
              : "Tap + to design your first daily quest."}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((t) => (
            <motion.button
              key={t.id}
              layout
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (!todayLocked) openAdd(t);
              }}
              disabled={todayLocked}
              className="glass relative w-full overflow-hidden rounded-3xl p-4 text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: DIFF_COLOR[t.difficulty] }}
              />
              <div className="flex items-start gap-3 pl-2">
                <div className="flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.time} · {t.durationMin}m · {t.notify}
                  </div>
                  <div className="mt-1 text-base font-semibold">{t.title}</div>
                  {t.promptText && (
                    <div className="mt-1 text-xs italic text-muted-foreground">
                      "{t.promptText}"
                    </div>
                  )}
                  <div
                    className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      color: DIFF_COLOR[t.difficulty],
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {t.difficulty} · +
                    {t.difficulty === "easy" ? 10 : t.difficulty === "medium" ? 20 : 40} XP
                    {t.reverse && <span> · reverse</span>}
                  </div>
                </div>
                <Pencil className="h-4 w-4 text-muted-foreground" />
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          if (!todayLocked) openAdd();
        }}
        disabled={todayLocked}
        className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full text-background disabled:cursor-not-allowed disabled:opacity-50"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-violet)" }}
        aria-label="Add task"
      >
        <Plus className="h-6 w-6" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
