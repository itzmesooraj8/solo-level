// XP thresholds per level (cumulative).
export const LEVEL_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 5000];

export const DIFFICULTY_XP = { easy: 10, medium: 20, hard: 40 } as const;

export function levelForXp(xp: number): number {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return level;
}

export function levelProgress(xp: number) {
  const level = levelForXp(xp);
  const idx = level - 1;
  const floor = LEVEL_THRESHOLDS[idx] ?? 0;
  const ceil = LEVEL_THRESHOLDS[idx + 1] ?? floor + 5000;
  const within = xp - floor;
  const span = ceil - floor;
  return {
    level,
    floor,
    ceil,
    within,
    span,
    pct: Math.max(0, Math.min(1, within / span)),
    isMax: idx + 1 >= LEVEL_THRESHOLDS.length,
  };
}

export function rankTitle(level: number) {
  return (
    [
      "E-Rank Hunter",
      "D-Rank Hunter",
      "C-Rank Hunter",
      "B-Rank Hunter",
      "A-Rank Hunter",
      "S-Rank Hunter",
      "Sovereign",
    ][level - 1] ?? "Sovereign"
  );
}
