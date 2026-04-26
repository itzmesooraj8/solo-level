import { getRank, RANK_COLORS } from "@/lib/ranks";

export function RankBadge({ totalXp, className }: { totalXp: number; className?: string }) {
  const rank = getRank(totalXp);
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-black ${className}`}
      style={{
        background: RANK_COLORS[rank] + "22",
        color: RANK_COLORS[rank],
        border: `1px solid ${RANK_COLORS[rank]}44`,
        boxShadow: `0 0 10px -2px ${RANK_COLORS[rank]}55`,
      }}
    >
      {rank}
    </span>
  );
}
