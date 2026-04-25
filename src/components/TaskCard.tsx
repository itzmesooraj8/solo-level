import { motion } from "framer-motion";
import { Check, Clock, Lock, Pencil, SkipForward, Sparkles, X } from "lucide-react";
import { DIFFICULTY_XP, rankTitle } from "@/lib/leveling";
import type { Difficulty, DayTaskStatus, NotifyMode } from "@/lib/db";

type TaskCardData = {
  id: string;
  title: string;
  time: string;
  difficulty: Difficulty;
  notify?: NotifyMode;
  promptText?: string;
  reverse?: boolean;
  durationMin?: number;
  status?: DayTaskStatus;
  xpDelta?: number;
  archived?: boolean;
};

type TaskCardProps = {
  task: TaskCardData;
  mode?: "today" | "library";
  relativeTime?: string;
  locked?: boolean;
  onComplete?: () => void | Promise<void>;
  onSkip?: () => void | Promise<void>;
  onEdit?: () => void;
};

const DIFFICULTY_STYLE: Record<Difficulty, string> = {
  easy: "var(--neon-emerald)",
  medium: "var(--neon-cyan)",
  hard: "var(--neon-magenta)",
};

const STATUS_STYLE: Record<DayTaskStatus, string> = {
  completed: "var(--neon-emerald)",
  skipped: "var(--neon-magenta)",
  missed: "var(--neon-magenta)",
  pending: "var(--neon-cyan)",
};

function formatTimeLabel(relativeTime?: string, time?: string) {
  if (!time) return relativeTime ?? "";
  if (!relativeTime) return time;
  if (relativeTime === "now") return "Now";
  return `${relativeTime} · ${time}`;
}

export function TaskCard({
  task,
  mode = "today",
  relativeTime,
  locked = false,
  onComplete,
  onSkip,
  onEdit,
}: TaskCardProps) {
  const accent = DIFFICULTY_STYLE[task.difficulty];
  const xp = DIFFICULTY_XP[task.difficulty];
  const resolved = task.status && task.status !== "pending";
  const statusColor = task.status ? STATUS_STYLE[task.status] : accent;

  const body = (
    <div className="relative flex h-full min-h-38 flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/3 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5 rounded-r-full"
        style={{ background: statusColor }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 blur-3xl"
        style={{ background: accent }}
      />

      <div className="relative flex items-start justify-between gap-3 pl-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span className="text-foreground">{formatTimeLabel(relativeTime, task.time)}</span>
            </span>
            {task.durationMin ? <span>{task.durationMin}m</span> : null}
            {task.notify && task.notify !== "strict" ? <span>{task.notify}</span> : null}
            {task.reverse ? <span>reverse</span> : null}
            {task.archived ? <span className="text-neon-amber">archived</span> : null}
          </div>

          <div className="mt-1 text-lg font-bold leading-tight text-foreground">{task.title}</div>
          {task.promptText ? (
            <div className="mt-1 line-clamp-2 text-xs italic text-muted-foreground">
              {task.promptText}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-end gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background"
            style={{ background: accent }}
          >
            +{xp} XP
          </span>

          {mode === "library" ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {task.archived ? <Lock className="h-3 w-3" /> : <Pencil className="h-3 w-3" />}
              {task.archived ? "Archived" : "Edit"}
            </span>
          ) : resolved ? (
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background"
              style={{ background: statusColor }}
            >
              {task.status === "completed" ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
              {task.status}
            </span>
          ) : locked ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Lock className="h-3 w-3" />
              Locked
            </span>
          ) : null}
        </div>
      </div>

      {mode === "today" ? (
        <div className="relative mt-auto pl-2 pt-4">
          {resolved ? (
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3 w-3 text-neon-cyan" />
              {task.status === "completed" ? "Cleared" : "Resolved"}
              {typeof task.xpDelta === "number" ? <span>· {task.xpDelta} XP</span> : null}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={onComplete}
                disabled={locked}
                aria-label="Complete task"
                className="flex h-12 min-w-12 items-center justify-center rounded-2xl text-background transition disabled:cursor-not-allowed disabled:opacity-50"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-cyan)" }}
              >
                <Check className="h-5 w-5" strokeWidth={3} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={onSkip}
                disabled={locked}
                aria-label="Skip task"
                className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </motion.button>
              <div className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                <SkipForward className="h-3 w-3" />
                Swipe card to act
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );

  if (mode === "library") {
    return (
      <motion.button
        type="button"
        whileTap={{ scale: locked ? 1 : 0.98 }}
        onClick={locked ? undefined : onEdit}
        disabled={locked}
        className="group relative w-full text-left disabled:cursor-not-allowed disabled:opacity-70"
      >
        {body}
      </motion.button>
    );
  }

  return (
    <motion.div
      layout
      drag={resolved || locked ? false : "x"}
      dragElastic={0.08}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (resolved || locked) return;
        if (info.offset.x > 72) void onComplete?.();
        if (info.offset.x < -72) void onSkip?.();
      }}
      whileTap={{ scale: resolved || locked ? 1 : 0.985 }}
      className={`touch-pan-y ${locked ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing"}`}
    >
      {body}
    </motion.div>
  );
}