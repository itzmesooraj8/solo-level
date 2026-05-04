import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type Task } from "@/lib/db";
import { usePromptStore } from "@/stores/promptStore";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { upsertTask, isDayLocked } from "@/lib/engine";
import { dateKey } from "@/lib/dateKeys";
import { TaskCard } from "@/components/TaskCard";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
  const [showArchived, setShowArchived] = useState(false);

  const filteredTasks = tasks?.filter((t) => (showArchived ? true : !t.archived));

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between px-1 pt-2">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Library</div>
          <h1 className="text-3xl font-black">Daily tasks</h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <Label
              htmlFor="show-archived"
              className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Show archived
            </Label>
            <Switch id="show-archived" checked={showArchived} onCheckedChange={setShowArchived} />
          </div>
        </div>
      </div>

      {!tasks ? (
        <div className="h-32 animate-pulse rounded-3xl bg-white/5" />
      ) : filteredTasks?.length === 0 ? (
        <div className="glass rounded-3xl p-8 text-center">
          <div className="mb-2 text-3xl">{showArchived ? "📁" : "📜"}</div>
          <div className="text-sm font-semibold">
            {showArchived ? "Archive is empty." : "No active tasks."}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {showArchived
              ? "Archived tasks will appear here."
              : "Tap + to design your first daily quest."}
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredTasks?.map((t) => {
            const isTemplate =
              !t.templateId && (t.recurrence === "daily" || t.recurrence === "weekly");
            const isLocked = !isTemplate && isDayLocked(t.targetDate || dateKey());

            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <TaskCard
                  task={t}
                  mode="library"
                  locked={isLocked}
                  onEdit={() => {
                    if (!isLocked) openAdd(t);
                  }}
                  onArchive={async () => {
                    if (!isLocked) {
                      await upsertTask({ ...t, archived: !t.archived });
                    }
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      )}

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          openAdd();
        }}
        className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full text-background disabled:cursor-not-allowed disabled:opacity-50"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-violet)" }}
        aria-label="Add task"
      >
        <Plus className="h-6 w-6" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
