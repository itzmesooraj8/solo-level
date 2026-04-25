import { create } from "zustand";
import { db, getOrInitPlayer, type GameMode, type PlayerStats } from "@/lib/db";
import { levelForXp } from "@/lib/leveling";
import { getRank, type HunterRank } from "@/lib/ranks";

interface GameState {
  player: PlayerStats | null;
  loading: boolean;
  pendingLevelUp: { from: number; to: number } | null;
  pendingStreakBreak: { from: number; to: number } | null;
  recentXp: { amount: number; key: number } | null;
  pendingMilestone: number | null;
  pendingRankUp: HunterRank | null;

  load: () => Promise<void>;
  applyXp: (delta: number) => Promise<void>;
  bumpCompleted: () => Promise<void>;
  bumpMissed: () => Promise<void>;
  setMode: (mode: GameMode) => Promise<void>;
  setStreak: (current: number, best?: number) => Promise<void>;
  setLastEvaluatedDay: (key: string) => Promise<void>;
  setHunterName: (name: string) => Promise<void>;
  setPendingMilestone: (streak: number) => void;
  clearPendingMilestone: () => void;
  setPendingRankUp: (rank: HunterRank | null) => void;
  clearLevelUp: () => void;
  clearStreakBreak: () => void;
  wipeAll: () => Promise<void>;
}

async function persist(p: PlayerStats) {
  await db.player.put(p);
}

export const useGameStore = create<GameState>((set, get) => ({
  player: null,
  loading: true,
  pendingLevelUp: null,
  pendingStreakBreak: null,
  recentXp: null,
  pendingMilestone: null,
  pendingRankUp: null,

  load: async () => {
    const p = await getOrInitPlayer();
    set({ player: p, loading: false });
  },

  applyXp: async (delta: number) => {
    const p = get().player;
    if (!p) return;
    const newXp = Math.max(0, p.xp + delta);
    const oldLevel = levelForXp(p.xp);
    const newLevel = levelForXp(newXp);

    const oldRank = getRank(p.xp);
    const newRank = getRank(newXp);

    const next: PlayerStats = { ...p, xp: newXp, level: newLevel };
    await persist(next);

    set({
      player: next,
      recentXp: { amount: delta, key: Date.now() },
      pendingLevelUp: newLevel > oldLevel ? { from: oldLevel, to: newLevel } : get().pendingLevelUp,
      pendingRankUp: newRank !== oldRank ? newRank : get().pendingRankUp,
    });
  },

  bumpCompleted: async () => {
    const p = get().player;
    if (!p) return;
    const next = { ...p, tasksCompleted: p.tasksCompleted + 1 };
    await persist(next);
    set({ player: next });
  },

  bumpMissed: async () => {
    const p = get().player;
    if (!p) return;
    const next = { ...p, tasksMissed: p.tasksMissed + 1 };
    await persist(next);
    set({ player: next });
  },

  setMode: async (mode) => {
    const p = get().player;
    if (!p) return;
    const next = { ...p, mode };
    await persist(next);
    set({ player: next });
  },

  setStreak: async (current, best) => {
    const p = get().player;
    if (!p) return;
    const newBest = Math.max(p.bestStreak, best ?? current);
    const next = { ...p, currentStreak: current, bestStreak: newBest };
    await persist(next);
    set({
      player: next,
      pendingStreakBreak: p.currentStreak > 0 && current === 0 ? { from: p.currentStreak, to: current } : get().pendingStreakBreak,
    });
  },

  setLastEvaluatedDay: async (key) => {
    const p = get().player;
    if (!p) return;
    const next = { ...p, lastEvaluatedDay: key };
    await persist(next);
    set({ player: next });
  },

  setHunterName: async (name) => {
    const p = get().player;
    if (!p) return;
    const next = { ...p, hunterName: name };
    await persist(next);
    set({ player: next });
  },

  setPendingMilestone: (streak) => set({ pendingMilestone: streak }),
  clearPendingMilestone: () => set({ pendingMilestone: null }),

  setPendingRankUp: (rank) => set({ pendingRankUp: rank }),

  clearLevelUp: () => set({ pendingLevelUp: null }),
  clearStreakBreak: () => set({ pendingStreakBreak: null }),

  wipeAll: async () => {
    await Promise.all([
      db.tasks.clear(),
      db.dayTasks.clear(),
      db.dayLogs.clear(),
      db.weeklyQuests.clear(),
      db.promptFires.clear(),
      db.player.clear(),
    ]);
    const fresh = await getOrInitPlayer();
    set({ player: fresh, pendingLevelUp: null, pendingStreakBreak: null, recentXp: null });
  },
}));
