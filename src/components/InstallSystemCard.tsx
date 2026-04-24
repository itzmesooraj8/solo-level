import { useEffect, useMemo, useState } from "react";
import { Download, CheckCircle2, Monitor } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

function isStandaloneDisplay() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || nav.standalone === true;
}

export function InstallSystemCard() {
  const [installed, setInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    setInstalled(isStandaloneDisplay());

    const onBeforeInstallPrompt = (event: Event) => {
      const promptEvent = event as BeforeInstallPromptEvent;
      promptEvent.preventDefault();
      setDeferredPrompt(promptEvent);
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const canInstall = useMemo(() => !installed && !!deferredPrompt, [installed, deferredPrompt]);

  const install = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setInstalled(isStandaloneDisplay());
    } finally {
      setInstalling(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold">
        <Monitor className="h-4 w-4 text-[var(--neon-cyan)]" />
        Install System Interface
      </div>
      <p className="mb-3 text-xs text-muted-foreground">
        Install this app to your laptop taskbar or mobile home screen for a native-like fullscreen
        experience.
      </p>

      {installed ? (
        <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--neon-emerald)]/30 bg-[var(--neon-emerald)]/10 px-3 py-2 text-xs font-semibold text-[var(--neon-emerald)]">
          <CheckCircle2 className="h-4 w-4" /> Already installed
        </div>
      ) : canInstall ? (
        <button
          onClick={install}
          disabled={installing}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-background disabled:opacity-60"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Download className="h-4 w-4" />
          {installing ? "Preparing..." : "Install System Interface"}
        </button>
      ) : (
        <div className="text-xs text-muted-foreground">
          Open this app in a supported browser and use browser install, or keep using the PWA in tab
          mode.
        </div>
      )}
    </div>
  );
}
