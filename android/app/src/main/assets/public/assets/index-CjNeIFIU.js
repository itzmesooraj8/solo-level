import {
  e as N,
  B as w,
  u as y,
  a as T,
  b as c,
  j as e,
  A as k,
  m as d,
  I as M,
  d as p,
  X as C,
  J as $,
  n as v,
  K as D,
  M as P,
  N as j,
  v as _,
  O as q,
  F as B,
  T as H,
} from "./index-hw91NASo.js";
import { T as L, L as X } from "./TaskCard-XSWkdKNf.js";
import { S as O, a as I } from "./sheet-Bgn1Hque.js";
import { s as A, R as G, X as K } from "./RankBadge-CNhvVOag.js";
import { T as R } from "./target-gMJVO84X.js";
import { P as F } from "./plus-Bt5Sl_tm.js";
import "./clock-JLHohYcZ.js";
const W = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
        key: "178tsu",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
    ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", key: "1hqiys" }],
  ],
  Q = N("bell-off", W);
const Y = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  E = N("bell", Y);
const U = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  z = N("circle-alert", U);
function J(t) {
  const [r, n] = t.split(":").map(Number),
    l = new Date(),
    a = new Date();
  a.setHours(r, n, 0, 0);
  const s = a.getTime() - l.getTime();
  if (s < -6e4) return "missed window";
  if (s < 6e4) return "now";
  const i = Math.floor(s / 6e4);
  return i < 60 ? `in ${i}m` : `in ${Math.floor(i / 60)}h ${i % 60}m`;
}
function V() {
  const t = w(),
    r = y(() => p.dayTasks.where("dateKey").equals(t).sortBy("time"), [t]),
    n = T((s) => s.openAdd),
    [l, a] = c.useState(0);
  return (
    c.useEffect(() => {
      const s = setInterval(() => a((i) => i + 1), 3e4);
      return () => clearInterval(s);
    }, []),
    r
      ? r.length === 0
        ? e.jsxs("div", {
            className: "glass-strong rounded-[2rem] p-6 text-center",
            children: [
              e.jsx("div", {
                className:
                  "mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/3 text-3xl",
                children: "⚔️",
              }),
              e.jsx("div", {
                className: "text-base font-bold",
                children: "No quests today, Hunter.",
              }),
              e.jsx("div", {
                className: "mt-1 text-sm text-muted-foreground",
                children: "Forge a task to keep the streak pressure alive.",
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => n(),
                className:
                  "mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-background",
                style: { background: "var(--gradient-primary)" },
                children: "Create first quest",
              }),
            ],
          })
        : e.jsx("div", {
            className: "grid grid-cols-1 gap-3 xl:grid-cols-2",
            children: e.jsx(k, {
              initial: !1,
              children: r.map((s) =>
                e.jsx(
                  d.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.96 },
                    transition: { type: "spring", stiffness: 300, damping: 26 },
                    children: e.jsx(L, {
                      task: s,
                      mode: "today",
                      relativeTime: J(s.time),
                      onComplete: () => M(s, "yes"),
                      onSkip: () => M(s, "no"),
                    }),
                  },
                  s.id,
                ),
              ),
            }),
          })
      : e.jsx("div", { className: "h-32 animate-pulse rounded-3xl bg-white/5" })
  );
}
function Z() {
  const [t, r] = c.useState(!1),
    [n, l] = c.useState(
      typeof window < "u" && "Notification" in window ? Notification.permission : "granted",
    );
  c.useEffect(() => {
    typeof window < "u" &&
      "Notification" in window &&
      Notification.permission === "default" &&
      r(!0);
  }, []);
  const a = async () => {
    (await $.ensurePermission()) ? (l("granted"), r(!1)) : l("denied");
  };
  return !t || n === "granted"
    ? null
    : e.jsx(k, {
        children: e.jsx(d.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95 },
          className:
            "glass relative overflow-hidden rounded-3xl p-4 border-(--neon-cyan)/30 bg-(--neon-cyan)/5",
          children: e.jsxs("div", {
            className: "flex items-start gap-4",
            children: [
              e.jsx("div", {
                className:
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--neon-cyan)/20",
                children:
                  n === "denied"
                    ? e.jsx(Q, { className: "h-6 w-6 text-neon-magenta" })
                    : e.jsx(E, { className: "h-6 w-6 text-neon-cyan" }),
              }),
              e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsx("h3", {
                    className: "text-sm font-bold",
                    children: n === "denied" ? "Notifications Blocked" : "Enable System Alerts",
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-xs text-muted-foreground",
                    children:
                      n === "denied"
                        ? "You've blocked notifications. Enable them in browser settings to receive task prompts."
                        : "Receive real-time YES/NO prompts on your device when a quest begins.",
                  }),
                  n !== "denied" &&
                    e.jsx("button", {
                      onClick: a,
                      className:
                        "mt-3 rounded-xl bg-neon-cyan px-4 py-1.5 text-xs font-bold text-background transition hover:opacity-90",
                      children: "Allow Notifications",
                    }),
                ],
              }),
              e.jsx("button", {
                onClick: () => r(!1),
                className: "rounded-lg p-1 text-muted-foreground hover:bg-white/5",
                children: e.jsx(C, { className: "h-4 w-4" }),
              }),
            ],
          }),
        }),
      });
}
const ee = ["identity", "mode", "notifications"];
function te({ open: t, onComplete: r }) {
  const [n, l] = c.useState(0),
    [a, s] = c.useState(""),
    [i, h] = c.useState("flex"),
    g = v((o) => o.setHunterName),
    m = v((o) => o.setMode);
  async function f() {
    (await g(a || "Hunter"),
      await m(i),
      await $.ensurePermission(),
      await p.tasks.bulkAdd([
        {
          id: `seed_${Math.random().toString(36).slice(2, 6)}`,
          title: "Morning routine",
          time: "07:00",
          durationMin: 30,
          difficulty: "easy",
          notify: "smart",
          recurrence: "daily",
          createdAt: Date.now(),
        },
        {
          id: `seed_${Math.random().toString(36).slice(2, 6)}`,
          title: "Daily exercise",
          time: "18:00",
          durationMin: 45,
          difficulty: "medium",
          notify: "strict",
          recurrence: "daily",
          createdAt: Date.now(),
        },
        {
          id: `seed_${Math.random().toString(36).slice(2, 6)}`,
          title: "Read / study",
          time: "21:00",
          durationMin: 30,
          difficulty: "easy",
          notify: "smart",
          recurrence: "daily",
          createdAt: Date.now(),
        },
      ]),
      r());
  }
  const b = [
    e.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-6 py-4",
        children: [
          e.jsx("div", {
            className:
              "w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center",
            children: e.jsx(D, { className: "w-8 h-8 text-violet-400" }),
          }),
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-black neon-text-violet",
                children: "Arise, Hunter",
              }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground mt-1",
                children: "The System has chosen you. What is your name?",
              }),
            ],
          }),
          e.jsx(P, {
            placeholder: "Enter your hunter name",
            value: a,
            onChange: (o) => s(o.target.value),
            className: "text-center text-lg font-medium border-white/10 bg-white/5",
            maxLength: 20,
          }),
          e.jsx(j, {
            className: "w-full rounded-xl h-12 text-sm font-bold",
            style: { background: "var(--gradient-primary)", color: "var(--background)" },
            onClick: () => l(1),
            disabled: !a.trim(),
            children: "Accept the Call →",
          }),
        ],
      },
      "identity",
    ),
    e.jsxs(
      "div",
      {
        className: "flex flex-col gap-4 py-4",
        children: [
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsx("h2", { className: "text-xl font-black", children: "Choose your path" }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground mt-1",
                children: "This affects penalties for missed tasks",
              }),
            ],
          }),
          [
            {
              id: "flex",
              label: "Flex Mode",
              sub: "–5 XP penalty · 3-miss streak reset · Good for beginners",
              icon: "🌙",
            },
            {
              id: "strict",
              label: "Strict Mode",
              sub: "–15 XP penalty · 2-miss streak reset · For disciplined hunters",
              icon: "⚔️",
            },
          ].map((o) =>
            e.jsxs(
              "button",
              {
                onClick: () => h(o.id),
                className: `w-full text-left p-4 rounded-2xl border transition-all ${i === o.id ? "border-violet-500/60 bg-violet-500/10" : "border-white/10 bg-white/3 hover:bg-white/5"}`,
                children: [
                  e.jsxs("div", {
                    className: "text-lg mb-0.5",
                    children: [
                      o.icon,
                      " ",
                      e.jsx("span", { className: "font-semibold", children: o.label }),
                    ],
                  }),
                  e.jsx("div", { className: "text-xs text-muted-foreground", children: o.sub }),
                ],
              },
              o.id,
            ),
          ),
          e.jsx(j, {
            className: "w-full mt-2 rounded-xl h-12 text-sm font-bold",
            style: { background: "var(--gradient-primary)", color: "var(--background)" },
            onClick: () => l(2),
            children: "Continue →",
          }),
        ],
      },
      "mode",
    ),
    e.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-6 py-4",
        children: [
          e.jsx("div", {
            className:
              "w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center",
            children: e.jsx(E, { className: "w-8 h-8 text-cyan-400" }),
          }),
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsx("h2", { className: "text-xl font-black", children: "Quest Alerts" }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground mt-1",
                children: "The System will notify you when quests begin. Never miss a task again.",
              }),
            ],
          }),
          e.jsx(j, {
            className: "w-full rounded-xl h-12 text-sm font-bold",
            style: { background: "var(--gradient-primary)", color: "var(--background)" },
            onClick: f,
            children: "Enable Notifications & Begin →",
          }),
          e.jsx("button", {
            className: "text-xs text-muted-foreground underline",
            onClick: f,
            children: "Skip for now",
          }),
        ],
      },
      "notifs",
    ),
  ];
  return e.jsx(O, {
    open: t,
    children: e.jsxs(I, {
      side: "bottom",
      className: "rounded-t-[2rem] pb-8 max-h-[85vh] overflow-y-auto border-none glass-strong",
      children: [
        e.jsx("div", {
          className: "flex gap-1.5 justify-center mb-6 mt-2",
          children: ee.map((o, x) =>
            e.jsx(
              "div",
              {
                className: `h-1 rounded-full transition-all ${x <= n ? "w-8 bg-violet-500" : "w-4 bg-white/10"}`,
              },
              x,
            ),
          ),
        }),
        e.jsx(k, {
          mode: "wait",
          children: e.jsx(
            d.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              transition: { duration: 0.2 },
              children: b[n],
            },
            n,
          ),
        }),
      ],
    }),
  });
}
const se = {
  perfect: "var(--neon-emerald)",
  partial: "var(--neon-amber)",
  failed: "var(--neon-magenta)",
  "in-progress": "var(--neon-cyan)",
};
function ae() {
  const t = Array.from({ length: 7 }, (a, s) => {
      const i = A(new Date(), 6 - s);
      return w(i);
    }),
    r = y(() => p.dayLogs.where("dateKey").between(t[0], t[6], !0, !0).toArray(), []),
    n = new Map(r?.map((a) => [a.dateKey, a])),
    l = Math.max(...(r?.map((a) => a.xpEarned) ?? [100]), 100);
  return e.jsxs(d.div, {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    className: "glass rounded-3xl p-4",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          e.jsx("div", {
            className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
            children: "7-Day XP Trend",
          }),
          e.jsxs("div", {
            className: "text-xs font-bold neon-text-cyan",
            children: [r?.reduce((a, s) => a + s.xpEarned, 0) ?? 0, " XP this week"],
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex items-end justify-between h-20 gap-2 px-1",
        children: t.map((a, s) => {
          const i = n.get(a),
            h = i?.xpEarned ?? 0,
            g = Math.max(10, (h / l) * 100),
            m = i ? se[i.status] : "rgba(255,255,255,0.05)";
          return e.jsxs(
            "div",
            {
              className: "flex-1 flex flex-col items-center gap-2",
              children: [
                e.jsx("div", {
                  className: "relative w-full flex-1 flex items-end justify-center",
                  children: e.jsx(d.div, {
                    initial: { height: 0 },
                    animate: { height: `${g}%` },
                    className: "w-full rounded-t-lg transition-colors",
                    style: {
                      background: i
                        ? `linear-gradient(to top, color-mix(in oklch, ${m} 40%, transparent), ${m})`
                        : "rgba(255,255,255,0.05)",
                      boxShadow: i ? `0 0 15px -5px ${m}` : "none",
                    },
                  }),
                }),
                e.jsx("div", {
                  className: "text-[8px] uppercase tracking-tighter text-muted-foreground",
                  children: _(A(new Date(), 6 - s), "EEE").charAt(0),
                }),
              ],
            },
            a,
          );
        }),
      }),
    ],
  });
}
function ne() {
  const t = y(
      () =>
        p.dayTasks
          .where("status")
          .equals("missed")
          .filter((l) => (l.resolvedAt ? Date.now() - l.resolvedAt < 864e5 : !1))
          .toArray(),
      [],
    ),
    [r, n] = c.useState(!1);
  return !t || t.length === 0 || r
    ? null
    : e.jsx(d.div, {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "glass overflow-hidden rounded-2xl border-none bg-neon-magenta/10",
        children: e.jsxs("div", {
          className: "flex items-center justify-between p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx("div", {
                  className:
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-magenta/20",
                  children: e.jsx(z, { className: "h-5 w-5 text-neon-magenta" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className: "text-sm font-bold text-foreground",
                      children: ["You missed ", t.length, " tasks"],
                    }),
                    e.jsx("div", {
                      className: "text-xs text-muted-foreground",
                      children: "Surface these as missed in history.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => n(!0),
              className: "rounded-lg p-2 transition hover:bg-white/5",
              children: e.jsx(C, { className: "h-4 w-4 text-muted-foreground" }),
            }),
          ],
        }),
      });
}
function ie() {
  const t = new Date().getHours();
  return t < 5
    ? "The world sleeps"
    : t < 12
      ? "Good morning"
      : t < 18
        ? "Good afternoon"
        : "Good evening";
}
function ue() {
  const t = v((u) => u.player),
    r = T((u) => u.openAdd),
    n = w(),
    [l, a] = c.useState(!1),
    s = y(() => p.tasks.count(), []);
  c.useEffect(() => {
    s === 0 && a(!0);
  }, [s]);
  const i = y(() => p.dayTasks.where("dateKey").equals(n).toArray(), [n]),
    [h, g] = c.useState(() => Date.now());
  if (
    (c.useEffect(() => {
      const u = setInterval(() => g(Date.now()), 6e4);
      return () => clearInterval(u);
    }, []),
    !t)
  )
    return null;
  const m = i?.filter((u) => u.status === "completed").length ?? 0,
    f = i?.length ?? 0,
    b = f > 0 ? m / f : 0,
    o = new Date();
  o.setHours(24, 0, 0, 0);
  const x = Math.max(0, Math.floor((o.getTime() - h) / 6e4)),
    S = x < 60 ? `Tasks lock in ${x}m` : `Tasks lock in ${Math.floor(x / 60)}h ${x % 60}m`;
  return e.jsxs("div", {
    className:
      "space-y-4 lg:grid lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)] lg:gap-4 lg:space-y-0",
    children: [
      e.jsx(te, { open: l, onComplete: () => a(!1) }),
      e.jsxs("section", {
        className: "space-y-4",
        children: [
          e.jsx(Z, {}),
          e.jsx(ne, {}),
          e.jsxs(d.div, {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            className: "px-1 pt-2",
            children: [
              e.jsx("div", {
                className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
                children: ie(),
              }),
              e.jsxs("h1", {
                className: "mt-1 flex items-center gap-3 text-3xl font-black leading-tight",
                children: [
                  "Welcome, ",
                  e.jsx("span", {
                    className: "neon-text-violet",
                    children: t.hunterName || "Hunter",
                  }),
                  e.jsx(G, { totalXp: t.xp, className: "h-8 w-8 text-sm" }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground",
                children: [e.jsx(q, { className: "h-3.5 w-3.5 text-neon-cyan" }), S],
              }),
            ],
          }),
          e.jsx(K, { xp: t.xp, level: t.level }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx("div", {
                className: "flex items-center justify-between px-1",
                children: e.jsx("h2", {
                  className:
                    "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
                  children: "Quest log · today",
                }),
              }),
              e.jsx(V, {}),
            ],
          }),
        ],
      }),
      e.jsxs("aside", {
        className: "space-y-3",
        children: [
          e.jsx(ae, {}),
          e.jsxs(d.div, {
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            className: "glass flex flex-col justify-between rounded-3xl p-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("div", {
                    className:
                      "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                    children: "Today's gate",
                  }),
                  e.jsx(R, { className: "h-4 w-4 text-neon-cyan" }),
                ],
              }),
              e.jsxs("div", {
                className: "my-2",
                children: [
                  e.jsxs("div", {
                    className: "text-4xl font-black tabular-nums",
                    children: [
                      m,
                      e.jsxs("span", {
                        className: "text-xl text-muted-foreground",
                        children: ["/", f],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "text-xs text-muted-foreground",
                    children: "quests cleared",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "relative h-2 overflow-hidden rounded-full bg-white/10",
                children: e.jsx(d.div, {
                  className: "absolute inset-y-0 left-0 rounded-full",
                  style: { background: "var(--gradient-primary)" },
                  animate: { width: `${b * 100}%` },
                  transition: { type: "spring", stiffness: 80, damping: 20 },
                }),
              }),
              e.jsxs("div", {
                className:
                  "mt-3 flex items-center gap-2 rounded-2xl border border-white/5 bg-white/3 px-3 py-2 text-xs text-muted-foreground",
                children: [e.jsx(X, { className: "h-3.5 w-3.5 text-neon-amber" }), S],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              e.jsxs(d.div, {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.05 },
                className: "glass flex flex-col items-center justify-center rounded-3xl p-3",
                children: [
                  e.jsx(B, {
                    className: `h-8 w-8 ${t.currentStreak > 0 ? "text-neon-amber pulse-glow" : "text-muted-foreground"}`,
                  }),
                  e.jsx("div", {
                    className: "mt-1 text-2xl font-black tabular-nums",
                    children: t.currentStreak,
                  }),
                  e.jsx("div", {
                    className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                    children: "streak",
                  }),
                ],
              }),
              e.jsxs(d.div, {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.1 },
                className: "glass flex flex-col items-center justify-center rounded-3xl p-3",
                children: [
                  e.jsx(H, { className: "h-8 w-8 text-neon-cyan" }),
                  e.jsx("div", {
                    className: "mt-1 text-2xl font-black tabular-nums",
                    children: t.bestStreak,
                  }),
                  e.jsx("div", {
                    className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                    children: "best",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(d.button, {
        whileTap: { scale: 0.92 },
        onClick: () => {
          r();
        },
        className:
          "fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full text-background disabled:cursor-not-allowed disabled:opacity-50 md:bottom-6 md:right-6",
        style: { background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-violet)" },
        "aria-label": "Add task",
        children: e.jsx(F, { className: "h-6 w-6", strokeWidth: 3 }),
      }),
    ],
  });
}
export { ue as component };
