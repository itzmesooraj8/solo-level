import { format, parseISO } from "date-fns";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { CheckCircle2, XCircle, Clock, Zap, Target } from "lucide-react";

export function DayDetailSheet({
  dateKey,
  onClose,
}: {
  dateKey: string | null;
  onClose: () => void;
}) {
  const log = useLiveQuery(() => (dateKey ? db.dayLogs.get(dateKey) : undefined), [dateKey]);
  const tasks = useLiveQuery(
    () => (dateKey ? db.dayTasks.where("dateKey").equals(dateKey).toArray() : []),
    [dateKey],
  );

  if (!dateKey) return null;

  const statusIcon = {
    completed: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    skipped: <XCircle className="w-4 h-4 text-rose-400" />,
    missed: <XCircle className="w-4 h-4 text-rose-600" />,
    pending: <Clock className="w-4 h-4 text-muted-foreground" />,
    skipped_archived: <Clock className="w-4 h-4 text-muted-foreground opacity-50" />,
  };

  return (
    <Sheet open={!!dateKey} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="bottom"
        className="rounded-t-[2rem] max-h-[80vh] overflow-y-auto border-none glass-strong"
      >
        <SheetHeader className="mb-4">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
          <SheetTitle className="text-xl font-bold">
            {format(parseISO(dateKey), "EEEE, MMMM d")}
          </SheetTitle>
        </SheetHeader>

        {/* Day summary */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            {
              label: "XP Total",
              value: log?.xpEarned ?? 0,
              color: "text-violet-400",
              icon: <Zap className="w-3 h-3" />,
            },
            {
              label: "Cleared",
              value: log?.completed ?? 0,
              color: "text-emerald-400",
              icon: <CheckCircle2 className="w-3 h-3" />,
            },
            {
              label: "Failed",
              value: (log?.missed ?? 0) + (log?.skipped ?? 0),
              color: "text-rose-400",
              icon: <Target className="w-3 h-3" />,
            },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-3 text-center border border-white/5">
              <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter flex items-center justify-center gap-1">
                {s.icon}
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1 px-1">
            Quest Log
          </div>
          {(tasks ?? []).length === 0 && (
            <div className="glass rounded-2xl py-8 text-center border border-dashed border-white/10">
              <p className="text-sm text-muted-foreground">No tasks recorded for this day</p>
            </div>
          )}
          {(tasks ?? []).map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 glass rounded-2xl p-4 border border-white/5 transition hover:bg-white/5"
            >
              <div className="shrink-0">
                {statusIcon[t.status as keyof typeof statusIcon] ?? statusIcon.pending}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate text-foreground">{t.title}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  {t.time} · {t.difficulty}
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-xs font-black ${t.xpDelta >= 0 ? "text-neon-emerald" : "text-neon-magenta"}`}
                >
                  {t.xpDelta > 0 ? "+" : ""}
                  {t.xpDelta} XP
                </div>
                <div className="text-[9px] text-muted-foreground uppercase font-semibold">
                  {t.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
