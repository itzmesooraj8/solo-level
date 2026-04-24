import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type Task } from "@/lib/db";
import { usePromptStore } from "@/stores/promptStore";
import { Plus, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { isDayLocked } from "@/lib/engine";
import { dateKey } from "@/lib/dateKeys";
import { TaskCard } from "@/components/TaskCard";

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
            <motion.div key={t.id} layout>
              <TaskCard
                task={t}
                mode="library"
                locked={todayLocked}
                onEdit={() => {
                  if (!todayLocked) openAdd(t);
                }}
              />
            </motion.div>
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
