export type HunterRank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S' | 'SS';

const RANK_THRESHOLDS: [number, HunterRank][] = [
  [0,    'E'],
  [100,  'D'],
  [250,  'C'],
  [500,  'B'],
  [1000, 'A'],
  [2000, 'S'],
  [5000, 'SS'],
];

export function getRank(totalXp: number): HunterRank {
  let rank: HunterRank = 'E';
  for (const [threshold, r] of RANK_THRESHOLDS) {
    if (totalXp >= threshold) rank = r;
  }
  return rank;
}

export function getNextRankThreshold(totalXp: number): number | null {
  for (const [threshold] of RANK_THRESHOLDS) {
    if (totalXp < threshold) return threshold;
  }
  return null; // SS — maxed
}

export const RANK_COLORS: Record<HunterRank, string> = {
  E: '#888780',  // gray
  D: '#378ADD',  // blue
  C: '#1D9E75',  // teal/green
  B: '#BA7517',  // amber
  A: '#7c3aed',  // violet
  S: '#E24B4A',  // red
  SS: '#EF9F27', // gold
};
