import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type WeeklyQuest, type Difficulty } from "@/lib/db";
import { weekKey, weekDays, DAY_NAMES } from "@/lib/dateKeys";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Check, GripVertical } from "lucide-react";
import { startOfWeek } from "date-fns";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeQuest = quests?.find((q) => q.id === active.id);
    if (!activeQuest) return;

    // Over can be a day container or another quest
    const overId = over.id as string;
    let newDayIndex = activeQuest.dayIndex;

    if (overId.startsWith("day-")) {
      newDayIndex = parseInt(overId.replace("day-", ""));
    } else {
      const overQuest = quests?.find((q) => q.id === overId);
      if (overQuest) {
        newDayIndex = overQuest.dayIndex;
      }
    }

    if (newDayIndex !== activeQuest.dayIndex) {
      await db.weeklyQuests.put({ ...activeQuest, dayIndex: newDayIndex });
    }
  };

  const activeQuest = activeId ? quests?.find((q) => q.id === activeId) : null;

  return (
    <div className="space-y-4">
      <div className="px-1 pt-2">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Side Quests</div>
        <h1 className="text-3xl font-black">This week</h1>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 gap-3">
          {days.map((d, i) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isToday = d.toDateString() === today.toDateString();
            const dayQuests = (quests ?? []).filter((q) => q.dayIndex === i);

            return (
              <DroppableDay
                key={i}
                index={i}
                date={d}
                isToday={isToday}
                onAdd={() => setAdding({ dayIndex: i })}
              >
                <SortableContext
                  items={dayQuests.map((q) => q.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {dayQuests.length === 0 ? (
                    <div className="text-xs text-muted-foreground py-2 px-1">
                      No quests planned.
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {dayQuests.map((q) => (
                        <SortableQuestItem
                          key={q.id}
                          quest={q}
                          onToggle={() => toggle(q)}
                          onRemove={() => remove(q.id)}
                        />
                      ))}
                    </ul>
                  )}
                </SortableContext>
              </DroppableDay>
            );
          })}
        </div>

        <DragOverlay
          dropAnimation={{
            sideEffects: defaultDropAnimationSideEffects({
              styles: {
                active: {
                  opacity: "0.5",
                },
              },
            }),
          }}
        >
          {activeQuest ? (
            <div className="flex items-center gap-2 rounded-xl border border-neon-cyan/50 bg-background/80 backdrop-blur-md px-3 py-2 shadow-xl ring-2 ring-neon-cyan/20">
              <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="flex-1 text-sm font-bold">{activeQuest.title}</span>
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase"
                style={{
                  color: DIFF_COLOR[activeQuest.difficulty],
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {activeQuest.difficulty}
              </span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

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

function DroppableDay({
  index,
  date,
  isToday,
  onAdd,
  children,
}: {
  index: number;
  date: Date;
  isToday: boolean;
  onAdd: () => void;
  children: React.ReactNode;
}) {
  const { setNodeRef, isOver } = useSortable({
    id: `day-${index}`,
  });

  return (
    <motion.div
      ref={setNodeRef}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`glass rounded-3xl p-4 transition-all duration-200 ${
        isToday ? "neon-border-violet" : ""
      } ${isOver ? "bg-white/[0.08] ring-2 ring-neon-cyan/30" : ""}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {DAY_NAMES[index]}
          </div>
          <div className="text-lg font-bold">
            {date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
          </div>
        </div>
        <button
          onClick={onAdd}
          aria-label={`Add quest for ${DAY_NAMES[index]}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-background"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Plus className="h-4 w-4" strokeWidth={3} />
        </button>
      </div>
      {children}
    </motion.div>
  );
}

function SortableQuestItem({
  quest,
  onToggle,
  onRemove,
}: {
  quest: WeeklyQuest;
  onToggle: () => void;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: quest.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 group"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1 -ml-1 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
      >
        <GripVertical className="h-3.5 w-3.5" />
      </div>
      <button
        onClick={onToggle}
        aria-label={quest.done ? "Mark undone" : "Mark done"}
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-white/15"
        style={
          quest.done
            ? {
                background: "var(--gradient-primary)",
                borderColor: "transparent",
              }
            : undefined
        }
      >
        {quest.done && <Check className="h-3.5 w-3.5 text-background" strokeWidth={3} />}
      </button>
      <span className={`flex-1 text-sm ${quest.done ? "text-muted-foreground line-through" : ""}`}>
        {quest.title}
      </span>
      <span
        className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase shrink-0"
        style={{
          color: DIFF_COLOR[quest.difficulty],
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {quest.difficulty}
      </span>
      <button
        onClick={onRemove}
        aria-label="Delete"
        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </li>
  );
}
