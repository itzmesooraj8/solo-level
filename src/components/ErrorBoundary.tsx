import { Component, type ReactNode } from "react";
import { db } from "@/lib/db";

interface State {
  hasError: boolean;
  error: string;
}

export class HunterErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false, error: "" };

  static getDerivedStateFromError(err: Error): State {
    return { hasError: true, error: err.message };
  }

  async handleReset() {
    // Try to recover without wiping — just reload
    window.location.reload();
  }

  async handleWipe() {
    try {
      // Last resort: delete database and reload
      if (confirm("This will PERMANENTLY wipe all your Hunter data to fix the system. Proceed?")) {
        await db.delete();
        window.location.reload();
      }
    } catch {
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-foreground">
          <div className="glass-strong rounded-[2.5rem] p-8 max-w-sm w-full text-center border border-rose-500/20 shadow-glow-magenta">
            <div className="text-5xl mb-4 animate-pulse">💀</div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500 mb-2">
              System Error
            </div>
            <h1 className="text-xl font-black mb-2">The System Has Crashed</h1>
            <p className="text-xs text-muted-foreground mb-4 font-mono break-all line-clamp-3 opacity-60">
              {this.state.error}
            </p>
            <p className="text-xs text-muted-foreground mb-8">
              Your quest data is likely safe. Restart the System to resume your journey.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => this.handleReset()}
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 font-black text-sm shadow-lg hover:opacity-90 transition-opacity"
              >
                ⚔️ Restart System
              </button>
              <button
                onClick={() => this.handleWipe()}
                className="w-full py-2 text-[10px] text-muted-foreground uppercase font-black tracking-widest hover:text-rose-500 transition-colors"
              >
                Emergency Protocol: Wipe & Reset
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
