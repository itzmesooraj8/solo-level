import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { dateKey } from "@/lib/dateKeys";
import { subDays, format, startOfDay } from "date-fns";
import { motion } from "framer-motion";

const STATUS_COLOR: Record<string, string> = {
  perfect: "var(--neon-emerald)",
  partial: "var(--neon-amber)",
  failed: "var(--neon-magenta)",
  "in-progress": "var(--neon-cyan)",
};

export function WeeklySparkline() {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = subDays(new Date(), 6 - i);
    return dateKey(d);
  });

  const logs = useLiveQuery(
    () =>
      db.dayLogs
        .where("dateKey")
        .between(days[0], days[6], true, true)
        .toArray(),
    []
  );

  const logMap = new Map(logs?.map((l) => [l.dateKey, l]));
  const maxXP = Math.max(...(logs?.map((l) => l.xpEarned) ?? [100]), 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          7-Day XP Trend
        </div>
        <div className="text-xs font-bold neon-text-cyan">
          {logs?.reduce((acc, l) => acc + l.xpEarned, 0) ?? 0} XP this week
        </div>
      </div>

      <div className="flex items-end justify-between h-20 gap-2 px-1">
        {days.map((k, i) => {
          const log = logMap.get(k);
          const xp = log?.xpEarned ?? 0;
          const height = Math.max(10, (xp / maxXP) * 100);
          const color = log ? STATUS_COLOR[log.status] : "rgba(255,255,255,0.05)";

          return (
            <div key={k} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full flex-1 flex items-end justify-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  className="w-full rounded-t-lg transition-colors"
                  style={{
                    background: log ? `linear-gradient(to top, color-mix(in oklch, ${color} 40%, transparent), ${color})` : "rgba(255,255,255,0.05)",
                    boxShadow: log ? `0 0 15px -5px ${color}` : "none"
                  }}
                />
              </div>
              <div className="text-[8px] uppercase tracking-tighter text-muted-foreground">
                {format(subDays(new Date(), 6 - i), "EEE").charAt(0)}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
