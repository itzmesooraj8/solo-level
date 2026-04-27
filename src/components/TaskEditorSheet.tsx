import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePromptStore } from "@/stores/promptStore";
import { upsertTask, deleteTask } from "@/lib/engine";
import type { Difficulty, NotifyMode, Task } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Trash2, X, Archive, ArchiveRestore, CalendarIcon } from "lucide-react";
import { format, parseISO, addDays, startOfToday } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function uid() {
  return `t_${Math.random().toString(36).slice(2, 10)}`;
}

export function TaskEditorSheet() {
  const open = usePromptStore((s) => s.addOpen);
  const editing = usePromptStore((s) => s.editingTask);
  const close = usePromptStore((s) => s.closeAdd);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("08:00");
  const [duration, setDuration] = useState(30);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [notify, setNotify] = useState<NotifyMode>("smart");
  const [promptText, setPromptText] = useState("");
  const [reverse, setReverse] = useState(false);
  const [archived, setArchived] = useState(false);
  const [targetDate, setTargetDate] = useState("");
  const [recurrence, setRecurrence] = useState<"none" | "daily" | "weekly">("none");
  const [calOpen, setCalOpen] = useState(false);

  const today = startOfToday();
  const todayKey = format(today, "yyyy-MM-dd");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setTime(editing.time);
      setDuration(editing.durationMin);
      setDifficulty(editing.difficulty);
      setNotify(editing.notify);
      setPromptText(editing.promptText ?? "");
      setReverse(!!editing.reverse);
      setArchived(!!editing.archived);
      const nextRecurrence = editing.recurrence ?? (editing.targetDate ? "none" : "daily");
      setRecurrence(nextRecurrence);
      if (nextRecurrence === "none") {
        setTargetDate(editing.targetDate ?? todayKey);
      } else {
        setTargetDate("");
      }
    } else if (open) {
      setTitle("");
      setTime("08:00");
      setDuration(30);
      setDifficulty("medium");
      setNotify("smart");
      setPromptText("");
      setReverse(false);
      setArchived(false);
      setRecurrence("none");
      setTargetDate(todayKey);
    }
  }, [editing, open, todayKey]);

  const save = async () => {
    if (!title.trim()) return;
    const normalizedTargetDate = recurrence === "none" ? targetDate || todayKey : undefined;

    const t: Task = {
      id: editing?.id ?? uid(),
      title: title.trim(),
      time,
      durationMin: duration,
      difficulty,
      notify,
      promptText: promptText.trim() || undefined,
      reverse,
      archived,
      createdAt: editing?.createdAt ?? Date.now(),
      targetDate: normalizedTargetDate,
      recurrence,
    };
    await upsertTask(t);
    close();
  };

  const remove = async () => {
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
          className="fixed inset-0 z-80 flex items-end justify-center"
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
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Morning workout"
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
                  />
                </div>
              </div>

              <div>
                <Label>Repeat</Label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {([
                    ["none", "One-time"],
                    ["daily", "Daily"],
                    ["weekly", "Weekly"],
                  ] as const).map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => {
                        setRecurrence(value);
                        if (value === "none") {
                          if (!targetDate) {
                            setTargetDate(todayKey);
                          }
                        } else {
                          setTargetDate("");
                        }
                      }}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                        recurrence === value
                          ? "border-primary bg-primary/20 text-foreground"
                          : "border-white/10 text-muted-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">
                  One-time quests run once on the selected date. Daily/weekly quests generate
                  fresh instances automatically.
                </div>
              </div>

              <div>
                <Label htmlFor="date">Scheduled Date (Optional)</Label>
                <div className="mt-1 flex gap-2">
                  <Popover open={calOpen} onOpenChange={setCalOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        disabled={recurrence !== "none"}
                        className={cn(
                          "w-full justify-start text-left font-normal border-white/10 bg-white/5",
                          !targetDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {targetDate ? format(parseISO(targetDate), "PPP") : <span>No date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 z-60 bg-background border-white/10"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={targetDate ? parseISO(targetDate) : undefined}
                        onSelect={(date) => {
                          setTargetDate(date ? format(date, "yyyy-MM-dd") : "");
                          setCalOpen(false);
                        }}
                        disabled={(date) => date < today}
                        initialFocus
                      />
                      <div className="flex gap-2 p-3 border-t border-white/10">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setTargetDate(format(today, "yyyy-MM-dd"));
                            setCalOpen(false);
                          }}
                          className="text-xs h-7"
                        >
                          Today
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setTargetDate(format(addDays(today, 1), "yyyy-MM-dd"));
                            setCalOpen(false);
                          }}
                          className="text-xs h-7"
                        >
                          Tmrw
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setTargetDate("");
                            setCalOpen(false);
                          }}
                          className="text-xs h-7 text-neon-magenta"
                        >
                          No date
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">
                  Date is only used for one-time quests.
                </div>
              </div>

              <div>
                <Label>Difficulty</Label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {(["easy", "medium", "hard"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
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
                />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                <div className="text-xs">
                  <div className="font-medium">Reverse logic</div>
                  <div className="text-muted-foreground">YES becomes the penalty</div>
                </div>
                <Switch checked={reverse} onCheckedChange={setReverse} />
              </div>

              {editing && (
                <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                  <div className="text-xs">
                    <div className="font-medium">Archive task</div>
                    <div className="text-muted-foreground">
                      Hide from library and active rotation
                    </div>
                  </div>
                  <Switch checked={archived} onCheckedChange={setArchived} />
                </div>
              )}

              <div className="flex items-center gap-2 pt-2">
                {editing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={remove}
                    className="text-neon-magenta"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                )}
                <Button
                  onClick={save}
                  className="flex-1 rounded-xl"
                  style={{ background: "var(--gradient-primary)", color: "var(--background)" }}
                >
                  {editing ? "Save changes" : "Create task"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
