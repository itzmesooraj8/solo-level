import { format, startOfWeek, addDays } from "date-fns";

export function dateKey(d: Date = new Date()): string {
  return format(d, "yyyy-MM-dd");
}

export function weekKey(d: Date = new Date()): string {
  // Sunday start
  return format(startOfWeek(d, { weekStartsOn: 0 }), "yyyy-MM-dd");
}

export function weekDays(weekStart: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
}

export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
