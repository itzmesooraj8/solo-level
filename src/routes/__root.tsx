import { useEffect } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Capacitor } from "@capacitor/core";

import appCss from "../styles.css?url";
import { BottomNav } from "@/components/BottomNav";
import { DynamicIsland } from "@/components/DynamicIsland";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopStatusBar } from "@/components/DesktopStatusBar";
import { PopupOverlay } from "@/components/PopupOverlay";
import { LevelUpOverlay } from "@/components/LevelUpOverlay";
import { RankUpOverlay } from "@/components/RankUpOverlay";
import { TaskEditorSheet } from "@/components/TaskEditorSheet";
import { XpToast } from "@/components/XpToast";
import { StreakBrokenOverlay } from "@/components/StreakBrokenOverlay";
import { StreakMilestoneOverlay } from "@/components/StreakMilestoneOverlay";
import { OnboardingWizard } from "@/components/OnboardingWizard";
import { HunterErrorBoundary } from "@/components/ErrorBoundary";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGameStore } from "@/stores/gameStore";
import {
  evaluatePastDays,
  materializeToday,
  resolveTask,
  startScheduler,
  stopScheduler,
} from "@/lib/engine";
import { db } from "@/lib/db";
import { usePromptStore } from "@/stores/promptStore";
import { notifications } from "@/services/notifications";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass max-w-md rounded-3xl p-8 text-center">
        <h1 className="text-7xl font-bold neon-text-violet">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Dungeon not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That gate doesn't exist. Return to the lobby.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-background"
            style={{ background: "var(--gradient-primary)" }}
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=no",
      },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { title: "Hunter System — Solo Leveling Life" },
      {
        name: "description",
        content:
          "A neon Hunter-style life RPG. Track tasks, earn XP, level up, and build daily streaks — fully offline-first.",
      },
      { property: "og:title", content: "Hunter System — Solo Leveling Life" },
      {
        property: "og:description",
        content:
          "Mobile-first life RPG with XP, levels, streaks, and a glowing Hunter UI. Offline-first PWA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/icons/hunter-icon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/icons/hunter-icon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const load = useGameStore((s) => s.load);
  const milestone = useGameStore((s) => s.pendingMilestone);
  const clearMilestone = useGameStore((s) => s.clearPendingMilestone);
  const rankUp = useGameStore((s) => s.pendingRankUp);
  const clearRankUp = useGameStore((s) => s.setPendingRankUp);
  const isMobile = useIsMobile();
  const router = useRouter();
  const openPrompt = usePromptStore((s) => s.openForTask);

  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    // Database version change listener (e.g. from another tab)
    db.on("versionchange", () => {
      window.location.reload();
    });

    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    let mounted = true;
    let removeBackButton: (() => void) | null = null;

    (async () => {
      await load();
      if (!mounted) return;

      // Handle custom events from notifications service
      const handleComplete = async (e: any) => {
        const taskId = e.detail.taskId;
        const dt = await db.dayTasks.get(taskId);
        if (dt) await resolveTask(dt, "yes");
      };
      const handleSkip = async (e: any) => {
        const taskId = e.detail.taskId;
        const dt = await db.dayTasks.get(taskId);
        if (dt) await resolveTask(dt, "no");
      };
      const handleOpen = async (e: any) => {
        const taskId = e.detail.taskId;
        // Navigate to home first
        router.navigate({ to: "/" });
        // Tiny delay for animation/render
        setTimeout(() => openPrompt(taskId), 350);
      };

      window.addEventListener('hunter:complete', handleComplete);
      window.addEventListener('hunter:skip', handleSkip);
      window.addEventListener('hunter:open', handleOpen);

      await notifications.setActionHandler(async ({ id, action }) => {
        const dt = await db.dayTasks.get(id);
        if (!dt || dt.status !== "pending") return;
        await resolveTask(dt, action);
        const prompt = usePromptStore.getState();
        if (prompt.active?.id === id) prompt.dismiss();
      });

      await materializeToday();
      await evaluatePastDays();
      await materializeToday();
      startScheduler();

      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      }

      if (typeof window !== "undefined" && Capacitor.isNativePlatform()) {
        const { App } = await import("@capacitor/app");

        App.addListener("appStateChange", async ({ isActive }) => {
          if (isActive) {
            await evaluatePastDays();
            await materializeToday();
          }
        });

        const backButtonHandle = await App.addListener("backButton", ({ canGoBack }) => {
          const prompt = usePromptStore.getState();
          if (prompt.active) {
            prompt.dismiss();
            return;
          }
          if (prompt.addOpen) {
            prompt.closeAdd();
            return;
          }
          if (canGoBack) {
            window.history.back();
            return;
          }
          App.exitApp();
        });
        removeBackButton = () => {
          void backButtonHandle.remove();
        };
      }

      // Soft permission ask, non-blocking.
      notifications.ensurePermission().catch(() => {});
    })();

    return () => {
      mounted = false;
      stopScheduler();
      if (removeBackButton) removeBackButton();
      void notifications.clearActionHandler();
    };
  }, [load]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Aurora blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="aurora-blob absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{ background: "var(--neon-violet)" }}
        />
        <div
          className="aurora-blob absolute right-[-20%] top-1/3 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--neon-cyan)", animationDelay: "-6s" }}
        />
        <div
          className="aurora-blob absolute bottom-[-10%] left-1/3 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--neon-magenta)", animationDelay: "-12s" }}
        />
      </div>

      <div className="relative flex h-full w-full overflow-hidden">
        {!isMobile && <DesktopSidebar />}

        <div className="flex min-w-0 flex-1 flex-col">
          {isMobile ? <DynamicIsland /> : <DesktopStatusBar />}

          <main
            className={`flex-1 overflow-y-auto px-3 pt-3 ${isMobile ? "pb-32" : "pb-6 md:px-5 lg:px-8"}`}
          >
            <div className={isMobile ? "" : "mx-auto w-full max-w-350"}>
              <HunterErrorBoundary>
                <Outlet />
              </HunterErrorBoundary>
            </div>
          </main>
        </div>
      </div>

      {isMobile && <BottomNav />}

      <XpToast />
      <PopupOverlay />
      <TaskEditorSheet />
      <LevelUpOverlay />
      <StreakBrokenOverlay />
      <StreakMilestoneOverlay streak={milestone} onDismiss={clearMilestone} />
      <RankUpOverlay rank={rankUp} onDismiss={() => clearRankUp(null)} />
      <OnboardingWizard />
      <PWAInstallBanner prompt={installPrompt} onDismiss={() => setInstallPrompt(null)} />
    </div>
  );
}

function PWAInstallBanner({ prompt, onDismiss }: { prompt: any; onDismiss: () => void }) {
  if (!prompt) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-24 left-4 right-4 z-[60] md:bottom-6 md:left-auto md:right-6 md:w-80"
    >
      <div className="glass-strong rounded-3xl p-4 border border-neon-cyan/30 flex items-center gap-4 shadow-glow-cyan">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neon-cyan/20">
          <Sparkles className="h-6 w-6 text-neon-cyan" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-foreground">Install System</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Add to Home Screen</div>
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              prompt.prompt();
              onDismiss();
            }}
            className="rounded-lg bg-neon-cyan px-3 py-1.5 text-[10px] font-black text-background uppercase"
          >
            Install
          </button>
          <button
            onClick={onDismiss}
            className="text-[9px] text-muted-foreground uppercase font-bold text-center"
          >
            Dismiss
          </button>
        </div>
      </div>
    </motion.div>
  );
}
