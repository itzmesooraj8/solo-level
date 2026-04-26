import {
  e as Y,
  x as c,
  y as w,
  b as y,
  s as H,
  z as q,
  u,
  d as h,
  v as d,
  B as A,
  j as e,
  m as k,
  E as I,
  G as R,
  X as $,
  H as z,
  Z as W,
  h as M,
} from "./index-hw91NASo.js";
import { S as D, a as O, b as E, c as T } from "./sheet-Bgn1Hque.js";
import { T as G } from "./target-gMJVO84X.js";
import { C as S } from "./clock-JLHohYcZ.js";
const Q = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  C = Y("circle-x", Q);
function F(a, s) {
  const r = c(a);
  if (isNaN(s)) return w(a, NaN);
  if (!s) return r;
  const n = r.getDate(),
    o = w(a, r.getTime());
  o.setMonth(r.getMonth() + s + 1, 0);
  const l = o.getDate();
  return n >= l ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), n), r);
}
function Z(a) {
  const s = c(a),
    r = s.getMonth();
  return (s.setFullYear(s.getFullYear(), r + 1, 0), s.setHours(23, 59, 59, 999), s);
}
function B(a) {
  const s = c(a);
  return (s.setDate(1), s.setHours(0, 0, 0, 0), s);
}
function U(a, s) {
  const r = s?.weekStartsOn,
    n = c(a),
    o = n.getDay(),
    l = (o < r ? -7 : 0) + 6 - (o - r);
  return (n.setDate(n.getDate() + l), n.setHours(23, 59, 59, 999), n);
}
function J(a, s) {
  const r = c(a),
    n = c(s);
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth();
}
function V(a, s) {
  return F(a, -1);
}
const g = {
  perfect: "var(--neon-emerald)",
  partial: "var(--neon-amber)",
  failed: "var(--neon-magenta)",
  "in-progress": "var(--neon-cyan)",
};
function K({ onDayClick: a }) {
  const [s, r] = y.useState(new Date()),
    [n, o] = y.useState(null),
    l = H(B(s), { weekStartsOn: 0 }),
    j = U(Z(s), { weekStartsOn: 0 }),
    b = [];
  for (let t = l; t <= j; t = q(t, 1)) b.push(t);
  const v = u(
      () =>
        h.dayLogs
          .where("dateKey")
          .between(d(l, "yyyy-MM-dd"), d(j, "yyyy-MM-dd"), !0, !0)
          .toArray(),
      [s.getMonth(), s.getFullYear()],
    ),
    N = new Map((v ?? []).map((t) => [t.dateKey, t])),
    i = n ? N.get(n) : void 0,
    p = u(() => (n ? h.dayTasks.where("dateKey").equals(n).toArray() : Promise.resolve([])), [n]),
    _ = A();
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs(k.section, {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "glass-strong rounded-[2rem] p-4",
        children: [
          e.jsxs("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className:
                      "text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground",
                    children: "History",
                  }),
                  e.jsx("h1", {
                    className: "mt-1 text-3xl font-black",
                    children: d(s, "MMMM yyyy"),
                  }),
                  e.jsx("p", {
                    className: "mt-2 text-sm text-muted-foreground",
                    children: "Color-coded day outcomes with task detail and XP history.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-1",
                children: [
                  e.jsx("button", {
                    onClick: () => r((t) => V(t)),
                    "aria-label": "Previous month",
                    className: "glass flex h-9 w-9 items-center justify-center rounded-full",
                    children: e.jsx(I, { className: "h-4 w-4" }),
                  }),
                  e.jsx("button", {
                    onClick: () => r((t) => F(t, 1)),
                    "aria-label": "Next month",
                    className: "glass flex h-9 w-9 items-center justify-center rounded-full",
                    children: e.jsx(R, { className: "h-4 w-4" }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "mt-4 grid grid-cols-4 gap-2 text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
            children: (v ?? [])
              .slice(0, 4)
              .map((t) =>
                e.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/5 bg-white/3 px-2 py-2",
                    children: [
                      e.jsx("div", {
                        className: "text-base font-black tabular-nums text-foreground",
                        children: t.xpEarned,
                      }),
                      e.jsx("div", { className: "mt-1", children: "XP" }),
                    ],
                  },
                  t.dateKey,
                ),
              ),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "glass rounded-3xl p-3",
        children: [
          e.jsx("div", {
            className:
              "grid grid-cols-7 gap-1 px-1 pb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
            children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((t) =>
              e.jsx("div", { children: t }, t),
            ),
          }),
          e.jsx("div", {
            className: "grid grid-cols-7 gap-1",
            children: b.map((t, L) => {
              const x = d(t, "yyyy-MM-dd"),
                m = N.get(x),
                P = J(t, s),
                X = x === _;
              return e.jsxs(
                k.button,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: L * 0.01 },
                  onClick: () => {
                    (o(x), a?.(t));
                  },
                  className: `relative flex aspect-square flex-col items-center justify-center rounded-2xl text-xs transition ${P ? "" : "opacity-30"}`,
                  style: {
                    background: m
                      ? `color-mix(in oklch, ${g[m.status]} 22%, transparent)`
                      : "rgba(255,255,255,0.03)",
                    boxShadow: X ? "0 0 0 1px var(--neon-violet)" : void 0,
                  },
                  children: [
                    e.jsx("span", { className: "font-semibold tabular-nums", children: d(t, "d") }),
                    m &&
                      e.jsx("span", {
                        className: "mt-0.5 h-1 w-1 rounded-full",
                        style: { background: g[m.status] },
                      }),
                  ],
                },
                x,
              );
            }),
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap gap-2 px-1 text-[10px] uppercase tracking-wider text-muted-foreground",
        children: ["perfect", "partial", "failed", "in-progress"].map((t) =>
          e.jsxs(
            "span",
            {
              className: "flex items-center gap-1",
              children: [
                e.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: g[t] } }),
                t.replace("-", " "),
              ],
            },
            t,
          ),
        ),
      }),
      e.jsx(D, {
        open: !!n,
        onOpenChange: (t) => !t && o(null),
        children: e.jsx(O, {
          side: "bottom",
          className:
            "glass-strong h-fit max-h-[85vh] overflow-y-auto rounded-t-[2rem] border-none p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          children:
            n &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", { className: "mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" }),
                e.jsxs(E, {
                  className: "mb-4 flex flex-row items-center justify-between space-y-0 text-left",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-xs uppercase tracking-wider text-muted-foreground",
                          children: d(new Date(n), "EEEE"),
                        }),
                        e.jsx(T, {
                          className: "text-lg font-bold text-foreground",
                          children: d(new Date(n), "MMMM d, yyyy"),
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: () => o(null),
                      "aria-label": "Close",
                      className: "text-muted-foreground",
                      children: e.jsx($, { className: "h-5 w-5" }),
                    }),
                  ],
                }),
                i &&
                  e.jsxs("div", {
                    className: "mb-3 grid grid-cols-3 gap-2 text-center",
                    children: [
                      e.jsx(f, { label: "Done", value: i.completed, color: "emerald" }),
                      e.jsx(f, { label: "Missed", value: i.skipped + i.missed, color: "magenta" }),
                      e.jsx(f, { label: "XP", value: i.xpEarned, color: "cyan" }),
                    ],
                  }),
                e.jsx("h4", {
                  className:
                    "mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
                  children: "Tasks",
                }),
                !p || p.length === 0
                  ? e.jsx("div", {
                      className: "text-xs text-muted-foreground",
                      children: "No tasks recorded.",
                    })
                  : e.jsx("ul", {
                      className: "space-y-2",
                      children: p.map((t) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex items-center justify-between rounded-xl border border-white/5 bg-white/3 px-3 py-2",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className: "text-sm font-medium",
                                    children: t.title,
                                  }),
                                  e.jsxs("div", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: [t.time, " · ", t.difficulty],
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
                                style: {
                                  color:
                                    t.status === "completed"
                                      ? "var(--neon-emerald)"
                                      : t.status === "pending"
                                        ? "var(--neon-cyan)"
                                        : "var(--neon-magenta)",
                                  background: "rgba(255,255,255,0.05)",
                                },
                                children: t.status,
                              }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    }),
              ],
            }),
        }),
      }),
    ],
  });
}
function f({ label: a, value: s, color: r }) {
  const n =
    r === "emerald"
      ? "var(--neon-emerald)"
      : r === "magenta"
        ? "var(--neon-magenta)"
        : "var(--neon-cyan)";
  return e.jsxs("div", {
    className: "rounded-2xl border border-white/5 bg-white/3 py-2",
    children: [
      e.jsx("div", {
        className: "text-lg font-bold tabular-nums",
        style: { color: n },
        children: s,
      }),
      e.jsx("div", {
        className: "text-[10px] uppercase tracking-wider text-muted-foreground",
        children: a,
      }),
    ],
  });
}
function ee({ dateKey: a, onClose: s }) {
  const r = u(() => (a ? h.dayLogs.get(a) : void 0), [a]),
    n = u(() => (a ? h.dayTasks.where("dateKey").equals(a).toArray() : []), [a]);
  if (!a) return null;
  const o = {
    completed: e.jsx(M, { className: "w-4 h-4 text-emerald-400" }),
    skipped: e.jsx(C, { className: "w-4 h-4 text-rose-400" }),
    missed: e.jsx(C, { className: "w-4 h-4 text-rose-600" }),
    pending: e.jsx(S, { className: "w-4 h-4 text-muted-foreground" }),
    skipped_archived: e.jsx(S, { className: "w-4 h-4 text-muted-foreground opacity-50" }),
  };
  return e.jsx(D, {
    open: !!a,
    onOpenChange: (l) => !l && s(),
    children: e.jsxs(O, {
      side: "bottom",
      className: "rounded-t-[2rem] max-h-[80vh] overflow-y-auto border-none glass-strong",
      children: [
        e.jsxs(E, {
          className: "mb-4",
          children: [
            e.jsx("div", { className: "mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" }),
            e.jsx(T, { className: "text-xl font-bold", children: d(z(a), "EEEE, MMMM d") }),
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-3 gap-3 mb-6",
          children: [
            {
              label: "XP Total",
              value: r?.xpEarned ?? 0,
              color: "text-violet-400",
              icon: e.jsx(W, { className: "w-3 h-3" }),
            },
            {
              label: "Cleared",
              value: r?.completed ?? 0,
              color: "text-emerald-400",
              icon: e.jsx(M, { className: "w-3 h-3" }),
            },
            {
              label: "Failed",
              value: (r?.missed ?? 0) + (r?.skipped ?? 0),
              color: "text-rose-400",
              icon: e.jsx(G, { className: "w-3 h-3" }),
            },
          ].map((l) =>
            e.jsxs(
              "div",
              {
                className: "glass rounded-2xl p-3 text-center border border-white/5",
                children: [
                  e.jsx("div", { className: `text-xl font-black ${l.color}`, children: l.value }),
                  e.jsxs("div", {
                    className:
                      "text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter flex items-center justify-center gap-1",
                    children: [l.icon, l.label],
                  }),
                ],
              },
              l.label,
            ),
          ),
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            e.jsx("div", {
              className:
                "text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1 px-1",
              children: "Quest Log",
            }),
            (n ?? []).length === 0 &&
              e.jsx("div", {
                className:
                  "glass rounded-2xl py-8 text-center border border-dashed border-white/10",
                children: e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "No tasks recorded for this day",
                }),
              }),
            (n ?? []).map((l) =>
              e.jsxs(
                "div",
                {
                  className:
                    "flex items-center gap-3 glass rounded-2xl p-4 border border-white/5 transition hover:bg-white/5",
                  children: [
                    e.jsx("div", { className: "shrink-0", children: o[l.status] ?? o.pending }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx("div", {
                          className: "text-sm font-bold truncate text-foreground",
                          children: l.title,
                        }),
                        e.jsxs("div", {
                          className: "text-[10px] text-muted-foreground uppercase tracking-wide",
                          children: [l.time, " · ", l.difficulty],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-right",
                      children: [
                        e.jsxs("div", {
                          className: `text-xs font-black ${l.xpDelta >= 0 ? "text-neon-emerald" : "text-neon-magenta"}`,
                          children: [l.xpDelta > 0 ? "+" : "", l.xpDelta, " XP"],
                        }),
                        e.jsx("div", {
                          className: "text-[9px] text-muted-foreground uppercase font-semibold",
                          children: l.status,
                        }),
                      ],
                    }),
                  ],
                },
                l.id,
              ),
            ),
          ],
        }),
      ],
    }),
  });
}
function ne() {
  const [a, s] = y.useState(null);
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsx(K, { onDayClick: (r) => s(d(r, "yyyy-MM-dd")) }),
      e.jsx(ee, { dateKey: a, onClose: () => s(null) }),
    ],
  });
}
export { ne as component };
