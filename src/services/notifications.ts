/**
 * Notification service abstraction.
 *
 * Web build: browser Notification API + in-app popups.
 * Native build: Capacitor Local Notifications + Haptics + action buttons.
 */

import { Capacitor, type PluginListenerHandle } from "@capacitor/core";
import { LocalNotifications, type ActionPerformed } from "@capacitor/local-notifications";
import type { NotifyMode } from "@/lib/db";

export type NotifyPayload = {
  id: string;
  title: string;
  body?: string;
  silent?: boolean;
};

export type ScheduledTaskNotification = {
  id: string;
  title: string;
  time: string;
  notify: NotifyMode;
};

export type ScheduledResetNotification = {
  id: string;
  title: string;
  body?: string;
};

export type NotifyAction = "yes" | "no";
export type NotifyActionEvent = { id: string; action: NotifyAction };

const ACTION_TYPE_ID = "TASK_PROMPT";

let actionHandler: ((event: NotifyActionEvent) => void | Promise<void>) | null = null;
let nativeActionListener: PluginListenerHandle | null = null;
let nativeActionsReady = false;

function isNativePlatform() {
  return Capacitor.isNativePlatform();
}

function hashId(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i += 1) {
    h = (h * 31 + id.charCodeAt(i)) | 0;
  }
  return Math.abs(h) || 1;
}

async function ensureNativeActions() {
  if (!isNativePlatform()) return;
  if (!nativeActionsReady) {
    try {
      await LocalNotifications.createChannel({
        id: "hunter_system",
        name: "Hunter System",
        description: "Task reminders and system alerts",
        importance: 5,
        visibility: 1,
      });
    } catch (e) {
      // ignore
    }

    await LocalNotifications.registerActionTypes({
      types: [
        {
          id: ACTION_TYPE_ID,
          actions: [
            { id: "yes", title: "YES" },
            { id: "no", title: "NO", destructive: true },
          ],
        },
      ],
    });
    nativeActionsReady = true;
  }

  if (!nativeActionListener) {
    nativeActionListener = await LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (event: ActionPerformed) => {
        const extra = event.notification.extra as { taskId?: string } | undefined;
        const taskId = extra?.taskId;
        const actionId = event.actionId;

        if (!taskId) return;

        // If it's a specific action button (YES/NO)
        if (actionId === "yes" || actionId === "no") {
          if (actionHandler) {
            void actionHandler({ id: taskId, action: actionId as NotifyAction });
          }
          return;
        }

        // Default tap behavior (actionId === "tap")
        window.dispatchEvent(new CustomEvent("hunter:open", { detail: { taskId } }));
      },
    );
  }
}

export const notifications = {
  async ensurePermission(): Promise<boolean> {
    if (isNativePlatform()) {
      const res = await LocalNotifications.requestPermissions();
      await ensureNativeActions();
      return res.display === "granted";
    }

    if (typeof window === "undefined" || !("Notification" in window)) return false;
    if (Notification.permission === "granted") return true;
    if (Notification.permission === "denied") return false;
    try {
      const res = await Notification.requestPermission();
      return res === "granted";
    } catch {
      return false;
    }
  },

  async fire({ id, title, body, silent }: NotifyPayload) {
    if (isNativePlatform()) {
      await ensureNativeActions();
      await LocalNotifications.schedule({
        notifications: [
          {
            id: hashId(id),
            title,
            body: body ?? "",
            schedule: { at: new Date(Date.now() + 250) },
            actionTypeId: ACTION_TYPE_ID,
            extra: { taskId: id },
            sound: silent ? undefined : "default",
            channelId: "hunter_system",
          },
        ],
      });
      return;
    }

    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    try {
      const instance = new Notification(title, { body, silent });
      void instance;
    } catch {
      // ignore
    }
  },

  async cancelTask(id: string) {
    if (!isNativePlatform()) return;
    await LocalNotifications.cancel({ notifications: [{ id: hashId(id) }] });
  },

  async scheduleDayTasks(tasks: ScheduledTaskNotification[]) {
    if (!isNativePlatform()) return;
    await ensureNativeActions();

    if (tasks.length > 0) {
      await LocalNotifications.cancel({
        notifications: tasks.map((task) => ({ id: hashId(task.id) })),
      });
    }

    const now = new Date();
    const notificationsToSchedule = tasks
      .filter((task) => task.notify !== "off")
      .map((task) => {
        const [hours, minutes] = task.time.split(":").map(Number);
        const at = new Date();
        at.setHours(hours, minutes, 0, 0);
        if (at <= now) return null;
        return {
          id: hashId(task.id),
          title: task.title,
          body: "Tap to respond — YES / NO",
          schedule: { at, allowWhileIdle: true },
          actionTypeId: ACTION_TYPE_ID,
          extra: { taskId: task.id },
          sound: task.notify === "strict" ? "default" : undefined,
          channelId: "hunter_system",
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (notificationsToSchedule.length > 0) {
      await LocalNotifications.schedule({ notifications: notificationsToSchedule });
    }
  },

  async scheduleDailyReset(notification: ScheduledResetNotification) {
    if (!isNativePlatform()) return;
    await ensureNativeActions();

    const resetAt = new Date();
    resetAt.setHours(24, 0, 0, 0);

    await LocalNotifications.cancel({ notifications: [{ id: hashId(notification.id) }] });
    await LocalNotifications.schedule({
      notifications: [
        {
          id: hashId(notification.id),
          title: notification.title,
          body: notification.body ?? "A fresh day of quests is ready.",
          schedule: { at: resetAt, allowWhileIdle: true },
          sound: "default",
          channelId: "hunter_system",
        },
      ],
    });
  },

  async setActionHandler(handler: ((event: NotifyActionEvent) => void | Promise<void>) | null) {
    actionHandler = handler;
    if (handler) {
      await ensureNativeActions();
    }
  },

  async clearActionHandler() {
    actionHandler = null;
    if (nativeActionListener) {
      await nativeActionListener.remove();
      nativeActionListener = null;
    }
  },

  async vibrate(pattern: number | number[]) {
    if (isNativePlatform()) {
      const { Haptics, ImpactStyle } = await import("@capacitor/haptics");
      const heavy = Array.isArray(pattern) ? pattern.length > 2 : pattern > 40;
      await Haptics.impact({ style: heavy ? ImpactStyle.Heavy : ImpactStyle.Medium });
      return;
    }

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {
        // ignore
      }
    }
  },
};
