import { useState } from "react";
import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type DayLog, type DayTask } from "@/lib/db";
import { dateKey } from "@/lib/dateKeys";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const STATUS_COLOR: Record<string, string> = {
  perfect: "var(--neon-emerald)",
  partial: "var(--neon-amber)",
  failed: "var(--neon-magenta)",
  "in-progress": "var(--neon-cyan)",
};

export function CalendarGrid() {
  const [month, setMonth] = useState(new Date());
  const [selected, setSelected] = useState<string | null>(null);

  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });
  const days: Date[] = [];
  for (let d = start; d <= end; d = addDays(d, 1)) days.push(d);

  const logs = useLiveQuery(
    () =>
      db.dayLogs
        .where("dateKey")
        .between(format(start, "yyyy-MM-dd"), format(end, "yyyy-MM-dd"), true, true)
        .toArray(),
    [month.getMonth(), month.getFullYear()],
  ) as DayLog[] | undefined;

  const logMap = new Map((logs ?? []).map((l) => [l.dateKey, l]));
  const detailLog = selected ? logMap.get(selected) : undefined;
  const detailTasks = useLiveQuery(
    () =>
      selected
        ? db.dayTasks.where("dateKey").equals(selected).toArray()
        : Promise.resolve([] as DayTask[]),
    [selected],
  ) as DayTask[] | undefined;

  const today = dateKey();

  return (
    <div className="space-y-4">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-[2rem] p-4"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              History
            </div>
            <h1 className="mt-1 text-3xl font-black">{format(month, "MMMM yyyy")}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Color-coded day outcomes with task detail and XP history.
            </p>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setMonth((m) => subMonths(m, 1))}
              aria-label="Previous month"
              className="glass flex h-9 w-9 items-center justify-center rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMonth((m) => addMonths(m, 1))}
              aria-label="Next month"
              className="glass flex h-9 w-9 items-center justify-center rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {(logs ?? []).slice(0, 4).map((log) => (
            <div key={log.dateKey} className="rounded-2xl border border-white/5 bg-white/3 px-2 py-2">
              <div className="text-base font-black tabular-nums text-foreground">{log.xpEarned}</div>
              <div className="mt-1">XP</div>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="glass rounded-3xl p-3">
        <div className="grid grid-cols-7 gap-1 px-1 pb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((d, index) => {
            const k = format(d, "yyyy-MM-dd");
            const log = logMap.get(k);
            const inMonth = isSameMonth(d, month);
            const isToday = k === today;
            return (
              <motion.button
                key={k}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.01 }}
                onClick={() => setSelected(k)}
                className={`relative flex aspect-square flex-col items-center justify-center rounded-2xl text-xs transition ${
                  inMonth ? "" : "opacity-30"
                }`}
                style={{
                  background: log
                    ? `color-mix(in oklch, ${STATUS_COLOR[log.status]} 22%, transparent)`
                    : "rgba(255,255,255,0.03)",
                  boxShadow: isToday ? "0 0 0 1px var(--neon-violet)" : undefined,
                }}
              >
                <span className="font-semibold tabular-nums">{format(d, "d")}</span>
                {log && (
                  <span
                    className="mt-0.5 h-1 w-1 rounded-full"
                    style={{ background: STATUS_COLOR[log.status] }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        {(["perfect", "partial", "failed", "in-progress"] as const).map((s) => (
          <span key={s} className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full" style={{ background: STATUS_COLOR[s] }} />
            {s.replace("-", " ")}
          </span>
        ))}
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent
          side="bottom"
          className="glass-strong h-fit max-h-[85vh] overflow-y-auto rounded-t-[2rem] border-none p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
        >
          {selected && (
            <>
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
              <SheetHeader className="mb-4 flex flex-row items-center justify-between space-y-0 text-left">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {format(new Date(selected), "EEEE")}
                  </div>
                  <SheetTitle className="text-lg font-bold text-foreground">
                    {format(new Date(selected), "MMMM d, yyyy")}
                  </SheetTitle>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="text-muted-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>

              {detailLog && (
                <div className="mb-3 grid grid-cols-3 gap-2 text-center">
                  <DetailStat label="Done" value={detailLog.completed} color="emerald" />
                  <DetailStat
                    label="Missed"
                    value={detailLog.skipped + detailLog.missed}
                    color="magenta"
                  />
                  <DetailStat label="XP" value={detailLog.xpEarned} color="cyan" />
                </div>
              )}

              <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Tasks
              </h4>
              {!detailTasks || detailTasks.length === 0 ? (
                <div className="text-xs text-muted-foreground">No tasks recorded.</div>
              ) : (
                <ul className="space-y-2">
                  {detailTasks.map((t) => (
                    <li
                      key={t.id}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/3 px-3 py-2"
                    >
                      <div>
                        <div className="text-sm font-medium">{t.title}</div>
                        <div className="text-[10px] text-muted-foreground">
                          {t.time} · {t.difficulty}
                        </div>
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                        style={{
                          color:
                            t.status === "completed"
                              ? "var(--neon-emerald)"
                              : t.status === "pending"
                                ? "var(--neon-cyan)"
                                : "var(--neon-magenta)",
                          background: "rgba(255,255,255,0.05)",
                        }}
                      >
                        {t.status}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DetailStat({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "emerald" | "magenta" | "cyan";
}) {
  const c =
    color === "emerald"
      ? "var(--neon-emerald)"
      : color === "magenta"
        ? "var(--neon-magenta)"
        : "var(--neon-cyan)";
  return (
    <div className="rounded-2xl border border-white/5 bg-white/3 py-2">
      <div className="text-lg font-bold tabular-nums" style={{ color: c }}>
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}