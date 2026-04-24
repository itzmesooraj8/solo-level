import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePromptStore } from "@/stores/promptStore";
import { upsertTask, deleteTask } from "@/lib/engine";
import type { Difficulty, NotifyMode, Task } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Trash2, X } from "lucide-react";
import { dateKey } from "@/lib/dateKeys";
import { isDayLocked } from "@/lib/engine";

function uid() {
  return `t_${Math.random().toString(36).slice(2, 10)}`;
}

export function TaskEditorSheet() {
  const open = usePromptStore((s) => s.addOpen);
  const editing = usePromptStore((s) => s.editingTask);
  const close = usePromptStore((s) => s.closeAdd);
  const todayLocked = isDayLocked(dateKey());

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("08:00");
  const [duration, setDuration] = useState(30);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [notify, setNotify] = useState<NotifyMode>("smart");
  const [promptText, setPromptText] = useState("");
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setTime(editing.time);
      setDuration(editing.durationMin);
      setDifficulty(editing.difficulty);
      setNotify(editing.notify);
      setPromptText(editing.promptText ?? "");
      setReverse(!!editing.reverse);
    } else if (open) {
      setTitle("");
      setTime("08:00");
      setDuration(30);
      setDifficulty("medium");
      setNotify("smart");
      setPromptText("");
      setReverse(false);
    }
  }, [editing, open]);

  const save = async () => {
    if (todayLocked) return;
    if (!title.trim()) return;
    const t: Task = {
      id: editing?.id ?? uid(),
      title: title.trim(),
      time,
      durationMin: duration,
      difficulty,
      notify,
      promptText: promptText.trim() || undefined,
      reverse,
      createdAt: editing?.createdAt ?? Date.now(),
    };
    await upsertTask(t);
    close();
  };

  const remove = async () => {
    if (todayLocked) return;
    if (!editing) return;
    await deleteTask(editing.id);
    close();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[55] flex items-end justify-center"
        >
          <div
            className="absolute inset-0 bg-black/40"
            style={{ backdropFilter: "blur(12px)" }}
            onClick={close}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="glass-strong relative w-full max-w-md rounded-t-[2rem] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">{editing ? "Edit task" : "New task"}</h3>
              <button onClick={close} aria-label="Close" className="text-muted-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {todayLocked && (
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted-foreground">
                  Day timeline is locked. Task library is read-only until tomorrow.
                </div>
              )}

              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Morning workout"
                  disabled={todayLocked}
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    disabled={todayLocked}
                  />
                </div>
                <div>
                  <Label htmlFor="dur">Duration (min)</Label>
                  <Input
                    id="dur"
                    type="number"
                    min={5}
                    max={480}
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value) || 30)}
                    disabled={todayLocked}
                  />
                </div>
              </div>

              <div>
                <Label>Difficulty</Label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {(["easy", "medium", "hard"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      disabled={todayLocked}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                        difficulty === d
                          ? "border-transparent text-background"
                          : "border-white/10 text-muted-foreground"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                      style={
                        difficulty === d
                          ? {
                              background:
                                d === "easy"
                                  ? "var(--neon-emerald)"
                                  : d === "medium"
                                    ? "var(--neon-cyan)"
                                    : "var(--neon-magenta)",
                            }
                          : undefined
                      }
                    >
                      {d} · +{d === "easy" ? 10 : d === "medium" ? 20 : 40}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Notification</Label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {(["strict", "smart", "off"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setNotify(m)}
                      disabled={todayLocked}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                        notify === m
                          ? "border-primary bg-primary/20 text-foreground"
                          : "border-white/10 text-muted-foreground"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="prompt">Custom prompt (optional)</Label>
                <Input
                  id="prompt"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder='e.g. "Did you eat junk food?"'
                  disabled={todayLocked}
                />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                <div className="text-xs">
                  <div className="font-medium">Reverse logic</div>
                  <div className="text-muted-foreground">YES becomes the penalty</div>
                </div>
                <Switch checked={reverse} onCheckedChange={setReverse} disabled={todayLocked} />
              </div>

              <div className="flex items-center gap-2 pt-2">
                {editing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={remove}
                    disabled={todayLocked}
                    className="text-[var(--neon-magenta)]"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                )}
                <Button
                  onClick={save}
                  disabled={todayLocked}
                  className="flex-1 rounded-xl"
                  style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
                >
                  {todayLocked ? "Locked until tomorrow" : editing ? "Save changes" : "Create task"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
