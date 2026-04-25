import { create } from "zustand";
import { db, type DayTask, type Task } from "@/lib/db";

interface PromptState {
  active: DayTask | null;
  queue: DayTask[];
  show: (t: DayTask) => void;
  openForTask: (taskId: string) => Promise<void>;
  dismiss: () => void;

  // Quick add modal
  addOpen: boolean;
  editingTask: Task | null;
  openAdd: (task?: Task) => void;
  closeAdd: () => void;
}

export const usePromptStore = create<PromptState>((set, get) => ({
  active: null,
  queue: [],
  show: (t) => {
    const { active, queue } = get();
    if (active) {
      if (active.id === t.id || queue.some((q) => q.id === t.id)) return;
      set({ queue: [...queue, t] });
    } else {
      set({ active: t });
    }
  },
  openForTask: async (taskId) => {
    const dt = await db.dayTasks.get(taskId);
    if (dt && dt.status === "pending") {
      get().show(dt);
    }
  },
  dismiss: () => {
    const { queue } = get();
    if (queue.length > 0) {
      const [next, ...rest] = queue;
      set({ active: next, queue: rest });
    } else {
      set({ active: null });
    }
  },

  addOpen: false,
  editingTask: null,
  openAdd: (task) => set({ addOpen: true, editingTask: task ?? null }),
  closeAdd: () => set({ addOpen: false, editingTask: null }),
}));
