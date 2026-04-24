/**
 * Notification service abstraction.
 *
 * Web build: browser Notification API + in-app popups.
 * Native build: Capacitor Local Notifications + Haptics + action buttons.
 */

import { Capacitor, type PluginListenerHandle } from "@capacitor/core";
import type { ActionPerformed } from "@capacitor/local-notifications";
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
  const { LocalNotifications } = await import("@capacitor/local-notifications");
  if (!nativeActionsReady) {
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
        if (!taskId || !actionId) return;
        if (actionId !== "yes" && actionId !== "no") return;
        if (!actionHandler) return;
        void actionHandler({ id: taskId, action: actionId });
      },
    );
  }
}

export const notifications = {
  async ensurePermission(): Promise<boolean> {
    if (isNativePlatform()) {
      const { LocalNotifications } = await import("@capacitor/local-notifications");
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
      const { LocalNotifications } = await import("@capacitor/local-notifications");
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
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    await LocalNotifications.cancel({ notifications: [{ id: hashId(id) }] });
  },

  async scheduleDayTasks(tasks: ScheduledTaskNotification[]) {
    if (!isNativePlatform()) return;
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    await ensureNativeActions();

    const pending = await LocalNotifications.getPending();
    if (pending.notifications.length > 0) {
      await LocalNotifications.cancel({ notifications: pending.notifications });
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
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (notificationsToSchedule.length > 0) {
      await LocalNotifications.schedule({ notifications: notificationsToSchedule });
    }
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

  vibrate(pattern: number | number[]) {
    if (isNativePlatform()) {
      void import("@capacitor/haptics")
        .then(({ Haptics, ImpactStyle }) => {
          const heavy = Array.isArray(pattern) ? pattern.length > 2 : pattern > 40;
          return Haptics.impact({ style: heavy ? ImpactStyle.Heavy : ImpactStyle.Medium });
        })
        .catch(() => {
          // ignore
        });
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
