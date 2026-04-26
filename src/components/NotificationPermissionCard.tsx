import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, BellOff, X } from "lucide-react";
import { notifications } from "@/services/notifications";

export function NotificationPermissionCard() {
  const [show, setShow] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission | "default">(
    typeof window !== "undefined" && "Notification" in window ? Notification.permission : "granted",
  );

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "default") {
        setShow(true);
      }
    }
  }, []);

  const request = async () => {
    const granted = await notifications.ensurePermission();
    if (granted) {
      setPermission("granted");
      setShow(false);
    } else {
      setPermission("denied");
    }
  };

  if (!show || permission === "granted") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass relative overflow-hidden rounded-3xl p-4 border-(--neon-cyan)/30 bg-(--neon-cyan)/5"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--neon-cyan)/20">
            {permission === "denied" ? (
              <BellOff className="h-6 w-6 text-neon-magenta" />
            ) : (
              <Bell className="h-6 w-6 text-neon-cyan" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold">
              {permission === "denied" ? "Notifications Blocked" : "Enable System Alerts"}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {permission === "denied"
                ? "You've blocked notifications. Enable them in browser settings to receive task prompts."
                : "Receive real-time YES/NO prompts on your device when a quest begins."}
            </p>
            {permission !== "denied" && (
              <button
                onClick={request}
                className="mt-3 rounded-xl bg-neon-cyan px-4 py-1.5 text-xs font-bold text-background transition hover:opacity-90"
              >
                Allow Notifications
              </button>
            )}
          </div>
          <button
            onClick={() => setShow(false)}
            className="rounded-lg p-1 text-muted-foreground hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
