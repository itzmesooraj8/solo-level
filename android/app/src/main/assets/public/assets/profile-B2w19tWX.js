import {
  e as ea,
  b as D,
  j as q,
  h as Fx,
  i as Wn,
  k as le,
  l as ee,
  R as E,
  n as kr,
  m as Ux,
  C as Wx,
  o as rh,
  Z as zx,
  T as Hx,
  F as Gx,
  X as Kx,
  p as Xx,
  S as Vx,
  q as Yx,
  t as Zx,
  v as nh,
  u as Jx,
  d as fe,
} from "./index-hw91NASo.js";
import { R as Qx, X as ew, s as tw } from "./RankBadge-CNhvVOag.js";
import { T as rw } from "./target-gMJVO84X.js";
const nw = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Dg = ea("download", nw);
const iw = [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
  ],
  aw = ea("monitor", iw);
const ow = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  uw = ea("pen", ow);
const sw = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  cw = ea("upload", sw);
function ih() {
  if (typeof window > "u") return !1;
  const e = window.navigator;
  return window.matchMedia("(display-mode: standalone)").matches || e.standalone === !0;
}
function lw() {
  const [e, t] = D.useState(!1),
    [r, n] = D.useState(null),
    [i, a] = D.useState(!1);
  D.useEffect(() => {
    t(ih());
    const s = (f) => {
        const l = f;
        (l.preventDefault(), n(l));
      },
      c = () => {
        (t(!0), n(null));
      };
    return (
      window.addEventListener("beforeinstallprompt", s),
      window.addEventListener("appinstalled", c),
      () => {
        (window.removeEventListener("beforeinstallprompt", s),
          window.removeEventListener("appinstalled", c));
      }
    );
  }, []);
  const o = D.useMemo(() => !e && !!r, [e, r]),
    u = async () => {
      if (r) {
        a(!0);
        try {
          (await r.prompt(), await r.userChoice, n(null), t(ih()));
        } finally {
          a(!1);
        }
      }
    };
  return q.jsxs("div", {
    className: "glass rounded-3xl p-4",
    children: [
      q.jsxs("div", {
        className: "mb-2 flex items-center gap-2 text-sm font-bold",
        children: [
          q.jsx(aw, { className: "h-4 w-4 text-[var(--neon-cyan)]" }),
          "Install System Interface",
        ],
      }),
      q.jsx("p", {
        className: "mb-3 text-xs text-muted-foreground",
        children:
          "Install this app to your laptop taskbar or mobile home screen for a native-like fullscreen experience.",
      }),
      e
        ? q.jsxs("div", {
            className:
              "inline-flex items-center gap-2 rounded-xl border border-[var(--neon-emerald)]/30 bg-[var(--neon-emerald)]/10 px-3 py-2 text-xs font-semibold text-[var(--neon-emerald)]",
            children: [q.jsx(Fx, { className: "h-4 w-4" }), " Already installed"],
          })
        : o
          ? q.jsxs("button", {
              onClick: u,
              disabled: i,
              className:
                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-background disabled:opacity-60",
              style: { background: "var(--gradient-primary)" },
              children: [
                q.jsx(Dg, { className: "h-4 w-4" }),
                i ? "Preparing..." : "Install System Interface",
              ],
            })
          : q.jsx("div", {
              className: "text-xs text-muted-foreground",
              children:
                "Open this app in a supported browser and use browser install, or keep using the PWA in tab mode.",
            }),
    ],
  });
}
var Da, ah;
function ke() {
  if (ah) return Da;
  ah = 1;
  var e = Array.isArray;
  return ((Da = e), Da);
}
var qa, oh;
function qg() {
  if (oh) return qa;
  oh = 1;
  var e = typeof Wn == "object" && Wn && Wn.Object === Object && Wn;
  return ((qa = e), qa);
}
var La, uh;
function at() {
  if (uh) return La;
  uh = 1;
  var e = qg(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return ((La = r), La);
}
var Ba, sh;
function Nn() {
  if (sh) return Ba;
  sh = 1;
  var e = at(),
    t = e.Symbol;
  return ((Ba = t), Ba);
}
var Fa, ch;
function fw() {
  if (ch) return Fa;
  ch = 1;
  var e = Nn(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i),
      s = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {}
    var f = n.call(o);
    return (c && (u ? (o[i] = s) : delete o[i]), f);
  }
  return ((Fa = a), Fa);
}
var Ua, lh;
function hw() {
  if (lh) return Ua;
  lh = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ((Ua = r), Ua);
}
var Wa, fh;
function dt() {
  if (fh) return Wa;
  fh = 1;
  var e = Nn(),
    t = fw(),
    r = hw(),
    n = "[object Null]",
    i = "[object Undefined]",
    a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? (u === void 0 ? i : n) : a && a in Object(u) ? t(u) : r(u);
  }
  return ((Wa = o), Wa);
}
var za, hh;
function vt() {
  if (hh) return za;
  hh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ((za = e), za);
}
var Ha, ph;
function jr() {
  if (ph) return Ha;
  ph = 1;
  var e = dt(),
    t = vt(),
    r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || (t(i) && e(i) == r);
  }
  return ((Ha = n), Ha);
}
var Ga, dh;
function Ql() {
  if (dh) return Ga;
  dh = 1;
  var e = ke(),
    t = jr(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(a, o) {
    if (e(a)) return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a)
      ? !0
      : n.test(a) || !r.test(a) || (o != null && a in Object(o));
  }
  return ((Ga = i), Ga);
}
var Ka, vh;
function _t() {
  if (vh) return Ka;
  vh = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ((Ka = e), Ka);
}
var Xa, yh;
function ef() {
  if (yh) return Xa;
  yh = 1;
  var e = dt(),
    t = _t(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    i = "[object GeneratorFunction]",
    a = "[object Proxy]";
  function o(u) {
    if (!t(u)) return !1;
    var s = e(u);
    return s == n || s == i || s == r || s == a;
  }
  return ((Xa = o), Xa);
}
var Va, mh;
function pw() {
  if (mh) return Va;
  mh = 1;
  var e = at(),
    t = e["__core-js_shared__"];
  return ((Va = t), Va);
}
var Ya, gh;
function dw() {
  if (gh) return Ya;
  gh = 1;
  var e = pw(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return ((Ya = r), Ya);
}
var Za, bh;
function Lg() {
  if (bh) return Za;
  bh = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return ((Za = r), Za);
}
var Ja, xh;
function vw() {
  if (xh) return Ja;
  xh = 1;
  var e = ef(),
    t = dw(),
    r = _t(),
    n = Lg(),
    i = /[\\^$.*+?()[\]{}|]/g,
    a = /^\[object .+?Constructor\]$/,
    o = Function.prototype,
    u = Object.prototype,
    s = o.toString,
    c = u.hasOwnProperty,
    f = RegExp(
      "^" +
        s
          .call(c)
          .replace(i, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function l(h) {
    if (!r(h) || t(h)) return !1;
    var d = e(h) ? f : a;
    return d.test(n(h));
  }
  return ((Ja = l), Ja);
}
var Qa, wh;
function yw() {
  if (wh) return Qa;
  wh = 1;
  function e(t, r) {
    return t?.[r];
  }
  return ((Qa = e), Qa);
}
var eo, _h;
function Ht() {
  if (_h) return eo;
  _h = 1;
  var e = vw(),
    t = yw();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return ((eo = r), eo);
}
var to, Oh;
function ta() {
  if (Oh) return to;
  Oh = 1;
  var e = Ht(),
    t = e(Object, "create");
  return ((to = t), to);
}
var ro, Sh;
function mw() {
  if (Sh) return ro;
  Sh = 1;
  var e = ta();
  function t() {
    ((this.__data__ = e ? e(null) : {}), (this.size = 0));
  }
  return ((ro = t), ro);
}
var no, Ah;
function gw() {
  if (Ah) return no;
  Ah = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return ((this.size -= r ? 1 : 0), r);
  }
  return ((no = e), no);
}
var io, Ph;
function bw() {
  if (Ph) return io;
  Ph = 1;
  var e = ta(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return ((io = i), io);
}
var ao, Th;
function xw() {
  if (Th) return ao;
  Th = 1;
  var e = ta(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return ((ao = n), ao);
}
var oo, Eh;
function ww() {
  if (Eh) return oo;
  Eh = 1;
  var e = ta(),
    t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return ((this.size += this.has(n) ? 0 : 1), (a[n] = e && i === void 0 ? t : i), this);
  }
  return ((oo = r), oo);
}
var uo, jh;
function _w() {
  if (jh) return uo;
  jh = 1;
  var e = mw(),
    t = gw(),
    r = bw(),
    n = xw(),
    i = ww();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (uo = a),
    uo
  );
}
var so, Mh;
function Ow() {
  if (Mh) return so;
  Mh = 1;
  function e() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((so = e), so);
}
var co, Ch;
function tf() {
  if (Ch) return co;
  Ch = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return ((co = e), co);
}
var lo, Ih;
function ra() {
  if (Ih) return lo;
  Ih = 1;
  var e = tf();
  function t(r, n) {
    for (var i = r.length; i--; ) if (e(r[i][0], n)) return i;
    return -1;
  }
  return ((lo = t), lo);
}
var fo, $h;
function Sw() {
  if ($h) return fo;
  $h = 1;
  var e = ra(),
    t = Array.prototype,
    r = t.splice;
  function n(i) {
    var a = this.__data__,
      o = e(a, i);
    if (o < 0) return !1;
    var u = a.length - 1;
    return (o == u ? a.pop() : r.call(a, o, 1), --this.size, !0);
  }
  return ((fo = n), fo);
}
var ho, Nh;
function Aw() {
  if (Nh) return ho;
  Nh = 1;
  var e = ra();
  function t(r) {
    var n = this.__data__,
      i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return ((ho = t), ho);
}
var po, kh;
function Pw() {
  if (kh) return po;
  kh = 1;
  var e = ra();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return ((po = t), po);
}
var vo, Rh;
function Tw() {
  if (Rh) return vo;
  Rh = 1;
  var e = ra();
  function t(r, n) {
    var i = this.__data__,
      a = e(i, r);
    return (a < 0 ? (++this.size, i.push([r, n])) : (i[a][1] = n), this);
  }
  return ((vo = t), vo);
}
var yo, Dh;
function na() {
  if (Dh) return yo;
  Dh = 1;
  var e = Ow(),
    t = Sw(),
    r = Aw(),
    n = Pw(),
    i = Tw();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (yo = a),
    yo
  );
}
var mo, qh;
function rf() {
  if (qh) return mo;
  qh = 1;
  var e = Ht(),
    t = at(),
    r = e(t, "Map");
  return ((mo = r), mo);
}
var go, Lh;
function Ew() {
  if (Lh) return go;
  Lh = 1;
  var e = _w(),
    t = na(),
    r = rf();
  function n() {
    ((this.size = 0), (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() }));
  }
  return ((go = n), go);
}
var bo, Bh;
function jw() {
  if (Bh) return bo;
  Bh = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return ((bo = e), bo);
}
var xo, Fh;
function ia() {
  if (Fh) return xo;
  Fh = 1;
  var e = jw();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return ((xo = t), xo);
}
var wo, Uh;
function Mw() {
  if (Uh) return wo;
  Uh = 1;
  var e = ia();
  function t(r) {
    var n = e(this, r).delete(r);
    return ((this.size -= n ? 1 : 0), n);
  }
  return ((wo = t), wo);
}
var _o, Wh;
function Cw() {
  if (Wh) return _o;
  Wh = 1;
  var e = ia();
  function t(r) {
    return e(this, r).get(r);
  }
  return ((_o = t), _o);
}
var Oo, zh;
function Iw() {
  if (zh) return Oo;
  zh = 1;
  var e = ia();
  function t(r) {
    return e(this, r).has(r);
  }
  return ((Oo = t), Oo);
}
var So, Hh;
function $w() {
  if (Hh) return So;
  Hh = 1;
  var e = ia();
  function t(r, n) {
    var i = e(this, r),
      a = i.size;
    return (i.set(r, n), (this.size += i.size == a ? 0 : 1), this);
  }
  return ((So = t), So);
}
var Ao, Gh;
function nf() {
  if (Gh) return Ao;
  Gh = 1;
  var e = Ew(),
    t = Mw(),
    r = Cw(),
    n = Iw(),
    i = $w();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Ao = a),
    Ao
  );
}
var Po, Kh;
function Bg() {
  if (Kh) return Po;
  Kh = 1;
  var e = nf(),
    t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || (i != null && typeof i != "function")) throw new TypeError(t);
    var a = function () {
      var o = arguments,
        u = i ? i.apply(this, o) : o[0],
        s = a.cache;
      if (s.has(u)) return s.get(u);
      var c = n.apply(this, o);
      return ((a.cache = s.set(u, c) || s), c);
    };
    return ((a.cache = new (r.Cache || e)()), a);
  }
  return ((r.Cache = e), (Po = r), Po);
}
var To, Xh;
function Nw() {
  if (Xh) return To;
  Xh = 1;
  var e = Bg(),
    t = 500;
  function r(n) {
    var i = e(n, function (o) {
        return (a.size === t && a.clear(), o);
      }),
      a = i.cache;
    return i;
  }
  return ((To = r), To);
}
var Eo, Vh;
function kw() {
  if (Vh) return Eo;
  Vh = 1;
  var e = Nw(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (i) {
      var a = [];
      return (
        i.charCodeAt(0) === 46 && a.push(""),
        i.replace(t, function (o, u, s, c) {
          a.push(s ? c.replace(r, "$1") : u || o);
        }),
        a
      );
    });
  return ((Eo = n), Eo);
}
var jo, Yh;
function af() {
  if (Yh) return jo;
  Yh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; ) a[n] = r(t[n], n, t);
    return a;
  }
  return ((jo = e), jo);
}
var Mo, Zh;
function Rw() {
  if (Zh) return Mo;
  Zh = 1;
  var e = Nn(),
    t = af(),
    r = ke(),
    n = jr(),
    i = e ? e.prototype : void 0,
    a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string") return u;
    if (r(u)) return t(u, o) + "";
    if (n(u)) return a ? a.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return ((Mo = o), Mo);
}
var Co, Jh;
function Fg() {
  if (Jh) return Co;
  Jh = 1;
  var e = Rw();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ((Co = t), Co);
}
var Io, Qh;
function Ug() {
  if (Qh) return Io;
  Qh = 1;
  var e = ke(),
    t = Ql(),
    r = kw(),
    n = Fg();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return ((Io = i), Io);
}
var $o, ep;
function aa() {
  if (ep) return $o;
  ep = 1;
  var e = jr();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return (($o = t), $o);
}
var No, tp;
function of() {
  if (tp) return No;
  tp = 1;
  var e = Ug(),
    t = aa();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; ) n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return ((No = r), No);
}
var ko, rp;
function Wg() {
  if (rp) return ko;
  rp = 1;
  var e = of();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return ((ko = t), ko);
}
var Dw = Wg();
const ze = le(Dw);
var Ro, np;
function qw() {
  if (np) return Ro;
  np = 1;
  function e(t) {
    return t == null;
  }
  return ((Ro = e), Ro);
}
var Lw = qw();
const te = le(Lw);
var Do, ip;
function Bw() {
  if (ip) return Do;
  ip = 1;
  var e = dt(),
    t = ke(),
    r = vt(),
    n = "[object String]";
  function i(a) {
    return typeof a == "string" || (!t(a) && r(a) && e(a) == n);
  }
  return ((Do = i), Do);
}
var Fw = Bw();
const Ft = le(Fw);
var Uw = ef();
const Z = le(Uw);
var Ww = _t();
const Mr = le(Ww);
var qo = { exports: {} },
  re = {};
var ap;
function zw() {
  if (ap) return re;
  ap = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    o = Symbol.for("react.context"),
    u = Symbol.for("react.server_context"),
    s = Symbol.for("react.forward_ref"),
    c = Symbol.for("react.suspense"),
    f = Symbol.for("react.suspense_list"),
    l = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy"),
    d = Symbol.for("react.offscreen"),
    y;
  y = Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case e:
          switch (((p = p.type), p)) {
            case r:
            case i:
            case n:
            case c:
            case f:
              return p;
            default:
              switch (((p = p && p.$$typeof), p)) {
                case u:
                case o:
                case s:
                case h:
                case l:
                case a:
                  return p;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return (
    (re.ContextConsumer = o),
    (re.ContextProvider = a),
    (re.Element = e),
    (re.ForwardRef = s),
    (re.Fragment = r),
    (re.Lazy = h),
    (re.Memo = l),
    (re.Portal = t),
    (re.Profiler = i),
    (re.StrictMode = n),
    (re.Suspense = c),
    (re.SuspenseList = f),
    (re.isAsyncMode = function () {
      return !1;
    }),
    (re.isConcurrentMode = function () {
      return !1;
    }),
    (re.isContextConsumer = function (p) {
      return v(p) === o;
    }),
    (re.isContextProvider = function (p) {
      return v(p) === a;
    }),
    (re.isElement = function (p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }),
    (re.isForwardRef = function (p) {
      return v(p) === s;
    }),
    (re.isFragment = function (p) {
      return v(p) === r;
    }),
    (re.isLazy = function (p) {
      return v(p) === h;
    }),
    (re.isMemo = function (p) {
      return v(p) === l;
    }),
    (re.isPortal = function (p) {
      return v(p) === t;
    }),
    (re.isProfiler = function (p) {
      return v(p) === i;
    }),
    (re.isStrictMode = function (p) {
      return v(p) === n;
    }),
    (re.isSuspense = function (p) {
      return v(p) === c;
    }),
    (re.isSuspenseList = function (p) {
      return v(p) === f;
    }),
    (re.isValidElementType = function (p) {
      return (
        typeof p == "string" ||
        typeof p == "function" ||
        p === r ||
        p === i ||
        p === n ||
        p === c ||
        p === f ||
        p === d ||
        (typeof p == "object" &&
          p !== null &&
          (p.$$typeof === h ||
            p.$$typeof === l ||
            p.$$typeof === a ||
            p.$$typeof === o ||
            p.$$typeof === s ||
            p.$$typeof === y ||
            p.getModuleId !== void 0))
      );
    }),
    (re.typeOf = v),
    re
  );
}
var op;
function Hw() {
  return (op || ((op = 1), (qo.exports = zw())), qo.exports);
}
var Gw = Hw(),
  Lo,
  up;
function zg() {
  if (up) return Lo;
  up = 1;
  var e = dt(),
    t = vt(),
    r = "[object Number]";
  function n(i) {
    return typeof i == "number" || (t(i) && e(i) == r);
  }
  return ((Lo = n), Lo);
}
var Bo, sp;
function Kw() {
  if (sp) return Bo;
  sp = 1;
  var e = zg();
  function t(r) {
    return e(r) && r != +r;
  }
  return ((Bo = t), Bo);
}
var Xw = Kw();
const kn = le(Xw);
var Vw = zg();
const Yw = le(Vw);
var Ye = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  $t = function (t) {
    return Ft(t) && t.indexOf("%") === t.length - 1;
  },
  B = function (t) {
    return Yw(t) && !kn(t);
  },
  Zw = function (t) {
    return te(t);
  },
  _e = function (t) {
    return B(t) || Ft(t);
  },
  Jw = 0,
  oa = function (t) {
    var r = ++Jw;
    return "".concat(t || "").concat(r);
  },
  Ut = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!B(t) && !Ft(t)) return n;
    var a;
    if ($t(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return (kn(a) && (a = n), i && a > r && (a = r), a);
  },
  er = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  Qw = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  Zt = function (t, r) {
    return B(t) && B(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function qc(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : ze(n, t)) === r;
      });
}
var e1 = function (t, r) {
  return B(t) && B(r)
    ? t - r
    : Ft(t) && Ft(r)
      ? t.localeCompare(r)
      : t instanceof Date && r instanceof Date
        ? t.getTime() - r.getTime()
        : String(t).localeCompare(String(r));
};
function ir(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
  return !0;
}
function Lc(e) {
  "@babel/helpers - typeof";
  return (
    (Lc =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lc(e)
  );
}
var t1 = ["viewBox", "children"],
  r1 = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  cp = ["points", "pathLength"],
  Fo = { svg: t1, polygon: cp, polyline: cp },
  uf = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  ii = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((D.isValidElement(t) && (n = t.props), !Mr(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        uf.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  n1 = function (t, r, n) {
    return function (i) {
      return (t(r, n, i), null);
    };
  },
  ai = function (t, r, n) {
    if (!Mr(t) || Lc(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        uf.includes(a) && typeof o == "function" && (i || (i = {}), (i[a] = n1(o, r, n)));
      }),
      i
    );
  },
  i1 = ["children"],
  a1 = ["children"];
function lp(e, t) {
  if (e == null) return {};
  var r = o1(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function o1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var fp = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  ct = function (t) {
    return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
  },
  hp = null,
  Uo = null,
  sf = function e(t) {
    if (t === hp && Array.isArray(Uo)) return Uo;
    var r = [];
    return (
      D.Children.forEach(t, function (n) {
        te(n) || (Gw.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (Uo = r),
      (hp = t),
      r
    );
  };
function Ze(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return ct(i);
        }))
      : (n = [ct(t)]),
    sf(e).forEach(function (i) {
      var a = ze(i, "type.displayName") || ze(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function qe(e, t) {
  var r = Ze(e, t);
  return r && r[0];
}
var pp = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!B(n) || n <= 0 || !B(i) || i <= 0);
  },
  u1 = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  s1 = function (t) {
    return t && t.type && Ft(t.type) && u1.indexOf(t.type) >= 0;
  },
  c1 = function (t, r, n, i) {
    var a,
      o = (a = Fo?.[i]) !== null && a !== void 0 ? a : [];
    return (
      r.startsWith("data-") ||
      (!Z(t) && ((i && o.includes(r)) || r1.includes(r))) ||
      (n && uf.includes(r))
    );
  },
  ie = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((D.isValidElement(t) && (i = t.props), !Mr(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        c1((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
      }),
      a
    );
  },
  Bc = function e(t, r) {
    if (t === r) return !0;
    var n = D.Children.count(t);
    if (n !== D.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return dp(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!dp(a, o)) return !1;
    }
    return !0;
  },
  dp = function (t, r) {
    if (te(t) && te(r)) return !0;
    if (!te(t) && !te(r)) {
      var n = t.props || {},
        i = n.children,
        a = lp(n, i1),
        o = r.props || {},
        u = o.children,
        s = lp(o, a1);
      return i && u ? ir(a, s) && Bc(i, u) : !i && !u ? ir(a, s) : !1;
    }
    return !1;
  },
  vp = function (t, r) {
    var n = [],
      i = {};
    return (
      sf(t).forEach(function (a, o) {
        if (s1(a)) n.push(a);
        else if (a) {
          var u = ct(a.type),
            s = r[u] || {},
            c = s.handler,
            f = s.once;
          if (c && (!f || !i[u])) {
            var l = c(a, u, o);
            (n.push(l), (i[u] = !0));
          }
        }
      }),
      n
    );
  },
  l1 = function (t) {
    var r = t && t.type;
    return r && fp[r] ? fp[r] : null;
  },
  f1 = function (t, r) {
    return sf(r).indexOf(t);
  },
  h1 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Fc() {
  return (
    (Fc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fc.apply(this, arguments)
  );
}
function p1(e, t) {
  if (e == null) return {};
  var r = d1(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function d1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Uc(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    s = e.desc,
    c = p1(e, h1),
    f = i || { width: r, height: n, x: 0, y: 0 },
    l = ee("recharts-surface", a);
  return E.createElement(
    "svg",
    Fc({}, ie(c, !0, "svg"), {
      className: l,
      width: r,
      height: n,
      style: o,
      viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    }),
    E.createElement("title", null, u),
    E.createElement("desc", null, s),
    t,
  );
}
var v1 = ["children", "className"];
function Wc() {
  return (
    (Wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wc.apply(this, arguments)
  );
}
function y1(e, t) {
  if (e == null) return {};
  var r = m1(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function m1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ae = E.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = y1(e, v1),
      a = ee("recharts-layer", n);
    return E.createElement("g", Wc({ className: a }, ie(i, !0), { ref: t }), r);
  }),
  Dt = function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
  },
  Wo,
  yp;
function g1() {
  if (yp) return Wo;
  yp = 1;
  function e(t, r, n) {
    var i = -1,
      a = t.length;
    (r < 0 && (r = -r > a ? 0 : a + r),
      (n = n > a ? a : n),
      n < 0 && (n += a),
      (a = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0));
    for (var o = Array(a); ++i < a; ) o[i] = t[i + r];
    return o;
  }
  return ((Wo = e), Wo);
}
var zo, mp;
function b1() {
  if (mp) return zo;
  mp = 1;
  var e = g1();
  function t(r, n, i) {
    var a = r.length;
    return ((i = i === void 0 ? a : i), !n && i >= a ? r : e(r, n, i));
  }
  return ((zo = t), zo);
}
var Ho, gp;
function Hg() {
  if (gp) return Ho;
  gp = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "\\u200d",
    u = RegExp("[" + o + e + i + a + "]");
  function s(c) {
    return u.test(c);
  }
  return ((Ho = s), Ho);
}
var Go, bp;
function x1() {
  if (bp) return Go;
  bp = 1;
  function e(t) {
    return t.split("");
  }
  return ((Go = e), Go);
}
var Ko, xp;
function w1() {
  if (xp) return Ko;
  xp = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "[" + e + "]",
    u = "[" + i + "]",
    s = "\\ud83c[\\udffb-\\udfff]",
    c = "(?:" + u + "|" + s + ")",
    f = "[^" + e + "]",
    l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    d = "\\u200d",
    y = c + "?",
    v = "[" + a + "]?",
    p = "(?:" + d + "(?:" + [f, l, h].join("|") + ")" + v + y + ")*",
    g = v + y + p,
    x = "(?:" + [f + u + "?", u, l, h, o].join("|") + ")",
    w = RegExp(s + "(?=" + s + ")|" + x + g, "g");
  function _(m) {
    return m.match(w) || [];
  }
  return ((Ko = _), Ko);
}
var Xo, wp;
function _1() {
  if (wp) return Xo;
  wp = 1;
  var e = x1(),
    t = Hg(),
    r = w1();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return ((Xo = n), Xo);
}
var Vo, _p;
function O1() {
  if (_p) return Vo;
  _p = 1;
  var e = b1(),
    t = Hg(),
    r = _1(),
    n = Fg();
  function i(a) {
    return function (o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0,
        s = u ? u[0] : o.charAt(0),
        c = u ? e(u, 1).join("") : o.slice(1);
      return s[a]() + c;
    };
  }
  return ((Vo = i), Vo);
}
var Yo, Op;
function S1() {
  if (Op) return Yo;
  Op = 1;
  var e = O1(),
    t = e("toUpperCase");
  return ((Yo = t), Yo);
}
var A1 = S1();
const ua = le(A1);
function ue(e) {
  return function () {
    return e;
  };
}
const Gg = Math.cos,
  oi = Math.sin,
  Je = Math.sqrt,
  ui = Math.PI,
  sa = 2 * ui,
  zc = Math.PI,
  Hc = 2 * zc,
  Ct = 1e-6,
  P1 = Hc - Ct;
function Kg(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function T1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Kg;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class E1 {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? Kg : T1(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      s = n - t,
      c = i - r,
      f = o - t,
      l = u - r,
      h = f * f + l * l;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (h > Ct)
      if (!(Math.abs(l * s - c * f) > Ct) || !a) this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let d = n - o,
          y = i - u,
          v = s * s + c * c,
          p = d * d + y * y,
          g = Math.sqrt(v),
          x = Math.sqrt(h),
          w = a * Math.tan((zc - Math.acos((v + h - p) / (2 * g * x))) / 2),
          _ = w / x,
          m = w / g;
        (Math.abs(_ - 1) > Ct && this._append`L${t + _ * f},${r + _ * l}`,
          this
            ._append`A${a},${a},0,0,${+(l * d > f * y)},${(this._x1 = t + m * s)},${(this._y1 = r + m * c)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0)) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      s = n * Math.sin(i),
      c = t + u,
      f = r + s,
      l = 1 ^ o,
      h = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${c},${f}`
      : (Math.abs(this._x1 - c) > Ct || Math.abs(this._y1 - f) > Ct) && this._append`L${c},${f}`,
      n &&
        (h < 0 && (h = (h % Hc) + Hc),
        h > P1
          ? this
              ._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${(this._x1 = c)},${(this._y1 = f)}`
          : h > Ct &&
            this
              ._append`A${n},${n},0,${+(h >= zc)},${l},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function cf(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new E1(t)
  );
}
function lf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xg(e) {
  this._context = e;
}
Xg.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function ca(e) {
  return new Xg(e);
}
function Vg(e) {
  return e[0];
}
function Yg(e) {
  return e[1];
}
function Zg(e, t) {
  var r = ue(!0),
    n = null,
    i = ca,
    a = null,
    o = cf(u);
  ((e = typeof e == "function" ? e : e === void 0 ? Vg : ue(e)),
    (t = typeof t == "function" ? t : t === void 0 ? Yg : ue(t)));
  function u(s) {
    var c,
      f = (s = lf(s)).length,
      l,
      h = !1,
      d;
    for (n == null && (a = i((d = o()))), c = 0; c <= f; ++c)
      (!(c < f && r((l = s[c]), c, s)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()),
        h && a.point(+e(l, c, s), +t(l, c, s)));
    if (d) return ((a = null), d + "" || null);
  }
  return (
    (u.x = function (s) {
      return arguments.length ? ((e = typeof s == "function" ? s : ue(+s)), u) : e;
    }),
    (u.y = function (s) {
      return arguments.length ? ((t = typeof s == "function" ? s : ue(+s)), u) : t;
    }),
    (u.defined = function (s) {
      return arguments.length ? ((r = typeof s == "function" ? s : ue(!!s)), u) : r;
    }),
    (u.curve = function (s) {
      return arguments.length ? ((i = s), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (s) {
      return arguments.length ? (s == null ? (n = a = null) : (a = i((n = s))), u) : n;
    }),
    u
  );
}
function zn(e, t, r) {
  var n = null,
    i = ue(!0),
    a = null,
    o = ca,
    u = null,
    s = cf(c);
  ((e = typeof e == "function" ? e : e === void 0 ? Vg : ue(+e)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? Yg : ue(+r)));
  function c(l) {
    var h,
      d,
      y,
      v = (l = lf(l)).length,
      p,
      g = !1,
      x,
      w = new Array(v),
      _ = new Array(v);
    for (a == null && (u = o((x = s()))), h = 0; h <= v; ++h) {
      if (!(h < v && i((p = l[h]), h, l)) === g)
        if ((g = !g)) ((d = h), u.areaStart(), u.lineStart());
        else {
          for (u.lineEnd(), u.lineStart(), y = h - 1; y >= d; --y) u.point(w[y], _[y]);
          (u.lineEnd(), u.areaEnd());
        }
      g &&
        ((w[h] = +e(p, h, l)),
        (_[h] = +t(p, h, l)),
        u.point(n ? +n(p, h, l) : w[h], r ? +r(p, h, l) : _[h]));
    }
    if (x) return ((u = null), x + "" || null);
  }
  function f() {
    return Zg().defined(i).curve(o).context(a);
  }
  return (
    (c.x = function (l) {
      return arguments.length ? ((e = typeof l == "function" ? l : ue(+l)), (n = null), c) : e;
    }),
    (c.x0 = function (l) {
      return arguments.length ? ((e = typeof l == "function" ? l : ue(+l)), c) : e;
    }),
    (c.x1 = function (l) {
      return arguments.length
        ? ((n = l == null ? null : typeof l == "function" ? l : ue(+l)), c)
        : n;
    }),
    (c.y = function (l) {
      return arguments.length ? ((t = typeof l == "function" ? l : ue(+l)), (r = null), c) : t;
    }),
    (c.y0 = function (l) {
      return arguments.length ? ((t = typeof l == "function" ? l : ue(+l)), c) : t;
    }),
    (c.y1 = function (l) {
      return arguments.length
        ? ((r = l == null ? null : typeof l == "function" ? l : ue(+l)), c)
        : r;
    }),
    (c.lineX0 = c.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (c.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (c.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (c.defined = function (l) {
      return arguments.length ? ((i = typeof l == "function" ? l : ue(!!l)), c) : i;
    }),
    (c.curve = function (l) {
      return arguments.length ? ((o = l), a != null && (u = o(a)), c) : o;
    }),
    (c.context = function (l) {
      return arguments.length ? (l == null ? (a = u = null) : (u = o((a = l))), c) : a;
    }),
    c
  );
}
class Jg {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1), this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function j1(e) {
  return new Jg(e, !0);
}
function M1(e) {
  return new Jg(e, !1);
}
const ff = {
    draw(e, t) {
      const r = Je(t / ui);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, sa));
    },
  },
  C1 = {
    draw(e, t) {
      const r = Je(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  Qg = Je(1 / 3),
  I1 = Qg * 2,
  $1 = {
    draw(e, t) {
      const r = Je(t / I1),
        n = r * Qg;
      (e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath());
    },
  },
  N1 = {
    draw(e, t) {
      const r = Je(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  k1 = 0.8908130915292852,
  eb = oi(ui / 10) / oi((7 * ui) / 10),
  R1 = oi(sa / 10) * eb,
  D1 = -Gg(sa / 10) * eb,
  q1 = {
    draw(e, t) {
      const r = Je(t * k1),
        n = R1 * r,
        i = D1 * r;
      (e.moveTo(0, -r), e.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (sa * a) / 5,
          u = Gg(o),
          s = oi(o);
        (e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i));
      }
      e.closePath();
    },
  },
  Zo = Je(3),
  L1 = {
    draw(e, t) {
      const r = -Je(t / (Zo * 3));
      (e.moveTo(0, r * 2), e.lineTo(-Zo * r, -r), e.lineTo(Zo * r, -r), e.closePath());
    },
  },
  Be = -0.5,
  Fe = Je(3) / 2,
  Gc = 1 / Je(12),
  B1 = (Gc / 2 + 1) * 3,
  F1 = {
    draw(e, t) {
      const r = Je(t / B1),
        n = r / 2,
        i = r * Gc,
        a = n,
        o = r * Gc + r,
        u = -a,
        s = o;
      (e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, s),
        e.lineTo(Be * n - Fe * i, Fe * n + Be * i),
        e.lineTo(Be * a - Fe * o, Fe * a + Be * o),
        e.lineTo(Be * u - Fe * s, Fe * u + Be * s),
        e.lineTo(Be * n + Fe * i, Be * i - Fe * n),
        e.lineTo(Be * a + Fe * o, Be * o - Fe * a),
        e.lineTo(Be * u + Fe * s, Be * s - Fe * u),
        e.closePath());
    },
  };
function U1(e, t) {
  let r = null,
    n = cf(i);
  ((e = typeof e == "function" ? e : ue(e || ff)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t)));
  function i() {
    let a;
    if ((r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a))
      return ((r = null), a + "" || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length ? ((e = typeof a == "function" ? a : ue(a)), i) : e;
    }),
    (i.size = function (a) {
      return arguments.length ? ((t = typeof a == "function" ? a : ue(+a)), i) : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function si() {}
function ci(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function tb(e) {
  this._context = e;
}
tb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        ci(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
      default:
        ci(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function W1(e) {
  return new tb(e);
}
function rb(e) {
  this._context = e;
}
rb.prototype = {
  areaStart: si,
  areaEnd: si,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        ci(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function z1(e) {
  return new rb(e);
}
function nb(e) {
  this._context = e;
}
nb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        ci(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function H1(e) {
  return new nb(e);
}
function ib(e) {
  this._context = e;
}
ib.prototype = {
  areaStart: si,
  areaEnd: si,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function G1(e) {
  return new ib(e);
}
function Sp(e) {
  return e < 0 ? -1 : 1;
}
function Ap(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (Sp(a) + Sp(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Pp(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Jo(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function li(e) {
  this._context = e;
}
li.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Jo(this, this._t0, Pp(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Jo(this, Pp(this, (r = Ap(this, e, t))), r));
          break;
        default:
          Jo(this, this._t0, (r = Ap(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function ab(e) {
  this._context = new ob(e);
}
(ab.prototype = Object.create(li.prototype)).point = function (e, t) {
  li.prototype.point.call(this, t, e);
};
function ob(e) {
  this._context = e;
}
ob.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function K1(e) {
  return new li(e);
}
function X1(e) {
  return new ab(e);
}
function ub(e) {
  this._context = e;
}
ub.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Tp(e), i = Tp(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function Tp(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function V1(e) {
  return new ub(e);
}
function la(e, t) {
  ((this._context = e), (this._t = t));
}
la.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function Y1(e) {
  return new la(e, 0.5);
}
function Z1(e) {
  return new la(e, 0);
}
function J1(e) {
  return new la(e, 1);
}
function sr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Kc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Q1(e, t) {
  return e[t];
}
function e_(e) {
  const t = [];
  return ((t.key = e), t);
}
function t_() {
  var e = ue([]),
    t = Kc,
    r = sr,
    n = Q1;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), e_),
      u,
      s = o.length,
      c = -1,
      f;
    for (const l of a) for (u = 0, ++c; u < s; ++u) (o[u][c] = [0, +n(l, o[u].key, c, a)]).data = l;
    for (u = 0, f = lf(t(o)); u < s; ++u) o[f[u]].index = u;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length ? ((e = typeof a == "function" ? a : ue(Array.from(a))), i) : e;
    }),
    (i.value = function (a) {
      return arguments.length ? ((n = typeof a == "function" ? a : ue(+a)), i) : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t = a == null ? Kc : typeof a == "function" ? a : ue(Array.from(a))), i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? sr), i) : r;
    }),
    i
  );
}
function r_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    sr(e, t);
  }
}
function n_(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    sr(e, t);
  }
}
function i_(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (
          var f = e[t[u]], l = f[n][1] || 0, h = f[n - 1][1] || 0, d = (l - h) / 2, y = 0;
          y < u;
          ++y
        ) {
          var v = e[t[y]],
            p = v[n][1] || 0,
            g = v[n - 1][1] || 0;
          d += p - g;
        }
        ((s += l), (c += d * l));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), s && (r -= c / s));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), sr(e, t));
  }
}
function Jr(e) {
  "@babel/helpers - typeof";
  return (
    (Jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jr(e)
  );
}
var a_ = ["type", "size", "sizeType"];
function Xc() {
  return (
    (Xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xc.apply(this, arguments)
  );
}
function Ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function jp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ep(Object(r), !0).forEach(function (n) {
          o_(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ep(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function o_(e, t, r) {
  return (
    (t = u_(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function u_(e) {
  var t = s_(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function s_(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c_(e, t) {
  if (e == null) return {};
  var r = l_(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function l_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var sb = {
    symbolCircle: ff,
    symbolCross: C1,
    symbolDiamond: $1,
    symbolSquare: N1,
    symbolStar: q1,
    symbolTriangle: L1,
    symbolWye: F1,
  },
  f_ = Math.PI / 180,
  h_ = function (t) {
    var r = "symbol".concat(ua(t));
    return sb[r] || ff;
  },
  p_ = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * f_;
        return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  d_ = function (t, r) {
    sb["symbol".concat(ua(t))] = r;
  },
  hf = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      s = c_(t, a_),
      c = jp(jp({}, s), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var p = h_(n),
          g = U1()
            .type(p)
            .size(p_(a, u, n));
        return g();
      },
      l = c.className,
      h = c.cx,
      d = c.cy,
      y = ie(c, !0);
    return h === +h && d === +d && a === +a
      ? E.createElement(
          "path",
          Xc({}, y, {
            className: ee("recharts-symbols", l),
            transform: "translate(".concat(h, ", ").concat(d, ")"),
            d: f(),
          }),
        )
      : null;
  };
hf.registerSymbol = d_;
function cr(e) {
  "@babel/helpers - typeof";
  return (
    (cr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cr(e)
  );
}
function Vc() {
  return (
    (Vc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vc.apply(this, arguments)
  );
}
function Mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function v_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mp(Object(r), !0).forEach(function (n) {
          Qr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function y_(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function m_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, lb(n.key), n));
  }
}
function g_(e, t, r) {
  return (t && m_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function b_(e, t, r) {
  return (
    (t = fi(t)),
    x_(e, cb() ? Reflect.construct(t, r || [], fi(e).constructor) : t.apply(e, r))
  );
}
function x_(e, t) {
  if (t && (cr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return w_(e);
}
function w_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cb = function () {
    return !!e;
  })();
}
function fi(e) {
  return (
    (fi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fi(e)
  );
}
function __(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yc(e, t));
}
function Yc(e, t) {
  return (
    (Yc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Yc(e, t)
  );
}
function Qr(e, t, r) {
  return (
    (t = lb(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function lb(e) {
  var t = O_(e, "string");
  return cr(t) == "symbol" ? t : t + "";
}
function O_(e, t) {
  if (cr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ue = 32,
  pf = (function (e) {
    function t() {
      return (y_(this, t), b_(this, t, arguments));
    }
    return (
      __(t, e),
      g_(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = Ue / 2,
              o = Ue / 6,
              u = Ue / 3,
              s = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return E.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: Ue,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return E.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(Ue, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return E.createElement("path", {
                stroke: "none",
                fill: s,
                d: "M0,"
                  .concat(Ue / 8, "h")
                  .concat(Ue, "v")
                  .concat((Ue * 3) / 4, "h")
                  .concat(-Ue, "z"),
                className: "recharts-legend-icon",
              });
            if (E.isValidElement(n.legendIcon)) {
              var c = v_({}, n);
              return (delete c.legendIcon, E.cloneElement(n.legendIcon, c));
            }
            return E.createElement(hf, {
              fill: s,
              cx: a,
              cy: a,
              size: Ue,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              s = i.formatter,
              c = i.inactiveColor,
              f = { x: 0, y: 0, width: Ue, height: Ue },
              l = { display: u === "horizontal" ? "inline-block" : "block", marginRight: 10 },
              h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
            return a.map(function (d, y) {
              var v = d.formatter || s,
                p = ee(
                  Qr(
                    Qr({ "recharts-legend-item": !0 }, "legend-item-".concat(y), !0),
                    "inactive",
                    d.inactive,
                  ),
                );
              if (d.type === "none") return null;
              var g = Z(d.value) ? null : d.value;
              Dt(
                !Z(d.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var x = d.inactive ? c : d.color;
              return E.createElement(
                "li",
                Vc({ className: p, style: l, key: "legend-item-".concat(y) }, ai(n.props, d, y)),
                E.createElement(Uc, { width: o, height: o, viewBox: f, style: h }, n.renderIcon(d)),
                E.createElement(
                  "span",
                  { className: "recharts-legend-item-text", style: { color: x } },
                  v ? v(g, d, y) : g,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
            return E.createElement(
              "ul",
              { className: "recharts-default-legend", style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(D.PureComponent);
Qr(pf, "displayName", "Legend");
Qr(pf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var Qo, Cp;
function S_() {
  if (Cp) return Qo;
  Cp = 1;
  var e = na();
  function t() {
    ((this.__data__ = new e()), (this.size = 0));
  }
  return ((Qo = t), Qo);
}
var eu, Ip;
function A_() {
  if (Ip) return eu;
  Ip = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return ((this.size = r.size), n);
  }
  return ((eu = e), eu);
}
var tu, $p;
function P_() {
  if ($p) return tu;
  $p = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ((tu = e), tu);
}
var ru, Np;
function T_() {
  if (Np) return ru;
  Np = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ((ru = e), ru);
}
var nu, kp;
function E_() {
  if (kp) return nu;
  kp = 1;
  var e = na(),
    t = rf(),
    r = nf(),
    n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1) return (s.push([a, o]), (this.size = ++u.size), this);
      u = this.__data__ = new r(s);
    }
    return (u.set(a, o), (this.size = u.size), this);
  }
  return ((nu = i), nu);
}
var iu, Rp;
function fb() {
  if (Rp) return iu;
  Rp = 1;
  var e = na(),
    t = S_(),
    r = A_(),
    n = P_(),
    i = T_(),
    a = E_();
  function o(u) {
    var s = (this.__data__ = new e(u));
    this.size = s.size;
  }
  return (
    (o.prototype.clear = t),
    (o.prototype.delete = r),
    (o.prototype.get = n),
    (o.prototype.has = i),
    (o.prototype.set = a),
    (iu = o),
    iu
  );
}
var au, Dp;
function j_() {
  if (Dp) return au;
  Dp = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return (this.__data__.set(r, e), this);
  }
  return ((au = t), au);
}
var ou, qp;
function M_() {
  if (qp) return ou;
  qp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ((ou = e), ou);
}
var uu, Lp;
function hb() {
  if (Lp) return uu;
  Lp = 1;
  var e = nf(),
    t = j_(),
    r = M_();
  function n(i) {
    var a = -1,
      o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; ) this.add(i[a]);
  }
  return ((n.prototype.add = n.prototype.push = t), (n.prototype.has = r), (uu = n), uu);
}
var su, Bp;
function pb() {
  if (Bp) return su;
  Bp = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; ) if (r(t[n], n, t)) return !0;
    return !1;
  }
  return ((su = e), su);
}
var cu, Fp;
function db() {
  if (Fp) return cu;
  Fp = 1;
  function e(t, r) {
    return t.has(r);
  }
  return ((cu = e), cu);
}
var lu, Up;
function vb() {
  if (Up) return lu;
  Up = 1;
  var e = hb(),
    t = pb(),
    r = db(),
    n = 1,
    i = 2;
  function a(o, u, s, c, f, l) {
    var h = s & n,
      d = o.length,
      y = u.length;
    if (d != y && !(h && y > d)) return !1;
    var v = l.get(o),
      p = l.get(u);
    if (v && p) return v == u && p == o;
    var g = -1,
      x = !0,
      w = s & i ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++g < d; ) {
      var _ = o[g],
        m = u[g];
      if (c) var b = h ? c(m, _, g, u, o, l) : c(_, m, g, o, u, l);
      if (b !== void 0) {
        if (b) continue;
        x = !1;
        break;
      }
      if (w) {
        if (
          !t(u, function (O, S) {
            if (!r(w, S) && (_ === O || f(_, O, s, c, l))) return w.push(S);
          })
        ) {
          x = !1;
          break;
        }
      } else if (!(_ === m || f(_, m, s, c, l))) {
        x = !1;
        break;
      }
    }
    return (l.delete(o), l.delete(u), x);
  }
  return ((lu = a), lu);
}
var fu, Wp;
function C_() {
  if (Wp) return fu;
  Wp = 1;
  var e = at(),
    t = e.Uint8Array;
  return ((fu = t), fu);
}
var hu, zp;
function I_() {
  if (zp) return hu;
  zp = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i, a) {
        n[++r] = [a, i];
      }),
      n
    );
  }
  return ((hu = e), hu);
}
var pu, Hp;
function df() {
  if (Hp) return pu;
  Hp = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i) {
        n[++r] = i;
      }),
      n
    );
  }
  return ((pu = e), pu);
}
var du, Gp;
function $_() {
  if (Gp) return du;
  Gp = 1;
  var e = Nn(),
    t = C_(),
    r = tf(),
    n = vb(),
    i = I_(),
    a = df(),
    o = 1,
    u = 2,
    s = "[object Boolean]",
    c = "[object Date]",
    f = "[object Error]",
    l = "[object Map]",
    h = "[object Number]",
    d = "[object RegExp]",
    y = "[object Set]",
    v = "[object String]",
    p = "[object Symbol]",
    g = "[object ArrayBuffer]",
    x = "[object DataView]",
    w = e ? e.prototype : void 0,
    _ = w ? w.valueOf : void 0;
  function m(b, O, S, A, $, T, P) {
    switch (S) {
      case x:
        if (b.byteLength != O.byteLength || b.byteOffset != O.byteOffset) return !1;
        ((b = b.buffer), (O = O.buffer));
      case g:
        return !(b.byteLength != O.byteLength || !T(new t(b), new t(O)));
      case s:
      case c:
      case h:
        return r(+b, +O);
      case f:
        return b.name == O.name && b.message == O.message;
      case d:
      case v:
        return b == O + "";
      case l:
        var j = i;
      case y:
        var C = A & o;
        if ((j || (j = a), b.size != O.size && !C)) return !1;
        var M = P.get(b);
        if (M) return M == O;
        ((A |= u), P.set(b, O));
        var N = n(j(b), j(O), A, $, T, P);
        return (P.delete(b), N);
      case p:
        if (_) return _.call(b) == _.call(O);
    }
    return !1;
  }
  return ((du = m), du);
}
var vu, Kp;
function yb() {
  if (Kp) return vu;
  Kp = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; ) t[a + n] = r[n];
    return t;
  }
  return ((vu = e), vu);
}
var yu, Xp;
function N_() {
  if (Xp) return yu;
  Xp = 1;
  var e = yb(),
    t = ke();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return ((yu = r), yu);
}
var mu, Vp;
function k_() {
  if (Vp) return mu;
  Vp = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return ((mu = e), mu);
}
var gu, Yp;
function R_() {
  if (Yp) return gu;
  Yp = 1;
  function e() {
    return [];
  }
  return ((gu = e), gu);
}
var bu, Zp;
function D_() {
  if (Zp) return bu;
  Zp = 1;
  var e = k_(),
    t = R_(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    i = Object.getOwnPropertySymbols,
    a = i
      ? function (o) {
          return o == null
            ? []
            : ((o = Object(o)),
              e(i(o), function (u) {
                return n.call(o, u);
              }));
        }
      : t;
  return ((bu = a), bu);
}
var xu, Jp;
function q_() {
  if (Jp) return xu;
  Jp = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n);
    return i;
  }
  return ((xu = e), xu);
}
var wu, Qp;
function L_() {
  if (Qp) return wu;
  Qp = 1;
  var e = dt(),
    t = vt(),
    r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return ((wu = n), wu);
}
var _u, ed;
function vf() {
  if (ed) return _u;
  ed = 1;
  var e = L_(),
    t = vt(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    i = r.propertyIsEnumerable,
    a = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (o) {
          return t(o) && n.call(o, "callee") && !i.call(o, "callee");
        };
  return ((_u = a), _u);
}
var Hr = { exports: {} },
  Ou,
  td;
function B_() {
  if (td) return Ou;
  td = 1;
  function e() {
    return !1;
  }
  return ((Ou = e), Ou);
}
Hr.exports;
var rd;
function mb() {
  return (
    rd ||
      ((rd = 1),
      (function (e, t) {
        var r = at(),
          n = B_(),
          i = t && !t.nodeType && t,
          a = i && !0 && e && !e.nodeType && e,
          o = a && a.exports === i,
          u = o ? r.Buffer : void 0,
          s = u ? u.isBuffer : void 0,
          c = s || n;
        e.exports = c;
      })(Hr, Hr.exports)),
    Hr.exports
  );
}
var Su, nd;
function yf() {
  if (nd) return Su;
  nd = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return (
      (i = i ?? e),
      !!i && (a == "number" || (a != "symbol" && t.test(n))) && n > -1 && n % 1 == 0 && n < i
    );
  }
  return ((Su = r), Su);
}
var Au, id;
function mf() {
  if (id) return Au;
  id = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return ((Au = t), Au);
}
var Pu, ad;
function F_() {
  if (ad) return Pu;
  ad = 1;
  var e = dt(),
    t = mf(),
    r = vt(),
    n = "[object Arguments]",
    i = "[object Array]",
    a = "[object Boolean]",
    o = "[object Date]",
    u = "[object Error]",
    s = "[object Function]",
    c = "[object Map]",
    f = "[object Number]",
    l = "[object Object]",
    h = "[object RegExp]",
    d = "[object Set]",
    y = "[object String]",
    v = "[object WeakMap]",
    p = "[object ArrayBuffer]",
    g = "[object DataView]",
    x = "[object Float32Array]",
    w = "[object Float64Array]",
    _ = "[object Int8Array]",
    m = "[object Int16Array]",
    b = "[object Int32Array]",
    O = "[object Uint8Array]",
    S = "[object Uint8ClampedArray]",
    A = "[object Uint16Array]",
    $ = "[object Uint32Array]",
    T = {};
  ((T[x] = T[w] = T[_] = T[m] = T[b] = T[O] = T[S] = T[A] = T[$] = !0),
    (T[n] =
      T[i] =
      T[p] =
      T[a] =
      T[g] =
      T[o] =
      T[u] =
      T[s] =
      T[c] =
      T[f] =
      T[l] =
      T[h] =
      T[d] =
      T[y] =
      T[v] =
        !1));
  function P(j) {
    return r(j) && t(j.length) && !!T[e(j)];
  }
  return ((Pu = P), Pu);
}
var Tu, od;
function gb() {
  if (od) return Tu;
  od = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return ((Tu = e), Tu);
}
var Gr = { exports: {} };
Gr.exports;
var ud;
function U_() {
  return (
    ud ||
      ((ud = 1),
      (function (e, t) {
        var r = qg(),
          n = t && !t.nodeType && t,
          i = n && !0 && e && !e.nodeType && e,
          a = i && i.exports === n,
          o = a && r.process,
          u = (function () {
            try {
              var s = i && i.require && i.require("util").types;
              return s || (o && o.binding && o.binding("util"));
            } catch {}
          })();
        e.exports = u;
      })(Gr, Gr.exports)),
    Gr.exports
  );
}
var Eu, sd;
function bb() {
  if (sd) return Eu;
  sd = 1;
  var e = F_(),
    t = gb(),
    r = U_(),
    n = r && r.isTypedArray,
    i = n ? t(n) : e;
  return ((Eu = i), Eu);
}
var ju, cd;
function W_() {
  if (cd) return ju;
  cd = 1;
  var e = q_(),
    t = vf(),
    r = ke(),
    n = mb(),
    i = yf(),
    a = bb(),
    o = Object.prototype,
    u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c),
      h = !l && t(c),
      d = !l && !h && n(c),
      y = !l && !h && !d && a(c),
      v = l || h || d || y,
      p = v ? e(c.length, String) : [],
      g = p.length;
    for (var x in c)
      (f || u.call(c, x)) &&
        !(
          v &&
          (x == "length" ||
            (d && (x == "offset" || x == "parent")) ||
            (y && (x == "buffer" || x == "byteLength" || x == "byteOffset")) ||
            i(x, g))
        ) &&
        p.push(x);
    return p;
  }
  return ((ju = s), ju);
}
var Mu, ld;
function z_() {
  if (ld) return Mu;
  ld = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      i = (typeof n == "function" && n.prototype) || e;
    return r === i;
  }
  return ((Mu = t), Mu);
}
var Cu, fd;
function xb() {
  if (fd) return Cu;
  fd = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return ((Cu = e), Cu);
}
var Iu, hd;
function H_() {
  if (hd) return Iu;
  hd = 1;
  var e = xb(),
    t = e(Object.keys, Object);
  return ((Iu = t), Iu);
}
var $u, pd;
function G_() {
  if (pd) return $u;
  pd = 1;
  var e = z_(),
    t = H_(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    if (!e(a)) return t(a);
    var o = [];
    for (var u in Object(a)) n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return (($u = i), $u);
}
var Nu, dd;
function Rn() {
  if (dd) return Nu;
  dd = 1;
  var e = ef(),
    t = mf();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return ((Nu = r), Nu);
}
var ku, vd;
function fa() {
  if (vd) return ku;
  vd = 1;
  var e = W_(),
    t = G_(),
    r = Rn();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return ((ku = n), ku);
}
var Ru, yd;
function K_() {
  if (yd) return Ru;
  yd = 1;
  var e = N_(),
    t = D_(),
    r = fa();
  function n(i) {
    return e(i, r, t);
  }
  return ((Ru = n), Ru);
}
var Du, md;
function X_() {
  if (md) return Du;
  md = 1;
  var e = K_(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a, o, u, s, c, f) {
    var l = u & t,
      h = e(a),
      d = h.length,
      y = e(o),
      v = y.length;
    if (d != v && !l) return !1;
    for (var p = d; p--; ) {
      var g = h[p];
      if (!(l ? g in o : n.call(o, g))) return !1;
    }
    var x = f.get(a),
      w = f.get(o);
    if (x && w) return x == o && w == a;
    var _ = !0;
    (f.set(a, o), f.set(o, a));
    for (var m = l; ++p < d; ) {
      g = h[p];
      var b = a[g],
        O = o[g];
      if (s) var S = l ? s(O, b, g, o, a, f) : s(b, O, g, a, o, f);
      if (!(S === void 0 ? b === O || c(b, O, u, s, f) : S)) {
        _ = !1;
        break;
      }
      m || (m = g == "constructor");
    }
    if (_ && !m) {
      var A = a.constructor,
        $ = o.constructor;
      A != $ &&
        "constructor" in a &&
        "constructor" in o &&
        !(typeof A == "function" && A instanceof A && typeof $ == "function" && $ instanceof $) &&
        (_ = !1);
    }
    return (f.delete(a), f.delete(o), _);
  }
  return ((Du = i), Du);
}
var qu, gd;
function V_() {
  if (gd) return qu;
  gd = 1;
  var e = Ht(),
    t = at(),
    r = e(t, "DataView");
  return ((qu = r), qu);
}
var Lu, bd;
function Y_() {
  if (bd) return Lu;
  bd = 1;
  var e = Ht(),
    t = at(),
    r = e(t, "Promise");
  return ((Lu = r), Lu);
}
var Bu, xd;
function wb() {
  if (xd) return Bu;
  xd = 1;
  var e = Ht(),
    t = at(),
    r = e(t, "Set");
  return ((Bu = r), Bu);
}
var Fu, wd;
function Z_() {
  if (wd) return Fu;
  wd = 1;
  var e = Ht(),
    t = at(),
    r = e(t, "WeakMap");
  return ((Fu = r), Fu);
}
var Uu, _d;
function J_() {
  if (_d) return Uu;
  _d = 1;
  var e = V_(),
    t = rf(),
    r = Y_(),
    n = wb(),
    i = Z_(),
    a = dt(),
    o = Lg(),
    u = "[object Map]",
    s = "[object Object]",
    c = "[object Promise]",
    f = "[object Set]",
    l = "[object WeakMap]",
    h = "[object DataView]",
    d = o(e),
    y = o(t),
    v = o(r),
    p = o(n),
    g = o(i),
    x = a;
  return (
    ((e && x(new e(new ArrayBuffer(1))) != h) ||
      (t && x(new t()) != u) ||
      (r && x(r.resolve()) != c) ||
      (n && x(new n()) != f) ||
      (i && x(new i()) != l)) &&
      (x = function (w) {
        var _ = a(w),
          m = _ == s ? w.constructor : void 0,
          b = m ? o(m) : "";
        if (b)
          switch (b) {
            case d:
              return h;
            case y:
              return u;
            case v:
              return c;
            case p:
              return f;
            case g:
              return l;
          }
        return _;
      }),
    (Uu = x),
    Uu
  );
}
var Wu, Od;
function Q_() {
  if (Od) return Wu;
  Od = 1;
  var e = fb(),
    t = vb(),
    r = $_(),
    n = X_(),
    i = J_(),
    a = ke(),
    o = mb(),
    u = bb(),
    s = 1,
    c = "[object Arguments]",
    f = "[object Array]",
    l = "[object Object]",
    h = Object.prototype,
    d = h.hasOwnProperty;
  function y(v, p, g, x, w, _) {
    var m = a(v),
      b = a(p),
      O = m ? f : i(v),
      S = b ? f : i(p);
    ((O = O == c ? l : O), (S = S == c ? l : S));
    var A = O == l,
      $ = S == l,
      T = O == S;
    if (T && o(v)) {
      if (!o(p)) return !1;
      ((m = !0), (A = !1));
    }
    if (T && !A)
      return (_ || (_ = new e()), m || u(v) ? t(v, p, g, x, w, _) : r(v, p, O, g, x, w, _));
    if (!(g & s)) {
      var P = A && d.call(v, "__wrapped__"),
        j = $ && d.call(p, "__wrapped__");
      if (P || j) {
        var C = P ? v.value() : v,
          M = j ? p.value() : p;
        return (_ || (_ = new e()), w(C, M, g, x, _));
      }
    }
    return T ? (_ || (_ = new e()), n(v, p, g, x, w, _)) : !1;
  }
  return ((Wu = y), Wu);
}
var zu, Sd;
function gf() {
  if (Sd) return zu;
  Sd = 1;
  var e = Q_(),
    t = vt();
  function r(n, i, a, o, u) {
    return n === i
      ? !0
      : n == null || i == null || (!t(n) && !t(i))
        ? n !== n && i !== i
        : e(n, i, a, o, r, u);
  }
  return ((zu = r), zu);
}
var Hu, Ad;
function eO() {
  if (Ad) return Hu;
  Ad = 1;
  var e = fb(),
    t = gf(),
    r = 1,
    n = 2;
  function i(a, o, u, s) {
    var c = u.length,
      f = c,
      l = !s;
    if (a == null) return !f;
    for (a = Object(a); c--; ) {
      var h = u[c];
      if (l && h[2] ? h[1] !== a[h[0]] : !(h[0] in a)) return !1;
    }
    for (; ++c < f; ) {
      h = u[c];
      var d = h[0],
        y = a[d],
        v = h[1];
      if (l && h[2]) {
        if (y === void 0 && !(d in a)) return !1;
      } else {
        var p = new e();
        if (s) var g = s(y, v, d, a, o, p);
        if (!(g === void 0 ? t(v, y, r | n, s, p) : g)) return !1;
      }
    }
    return !0;
  }
  return ((Hu = i), Hu);
}
var Gu, Pd;
function _b() {
  if (Pd) return Gu;
  Pd = 1;
  var e = _t();
  function t(r) {
    return r === r && !e(r);
  }
  return ((Gu = t), Gu);
}
var Ku, Td;
function tO() {
  if (Td) return Ku;
  Td = 1;
  var e = _b(),
    t = fa();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a],
        u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return ((Ku = r), Ku);
}
var Xu, Ed;
function Ob() {
  if (Ed) return Xu;
  Ed = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return ((Xu = e), Xu);
}
var Vu, jd;
function rO() {
  if (jd) return Vu;
  jd = 1;
  var e = eO(),
    t = tO(),
    r = Ob();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2]
      ? r(a[0][0], a[0][1])
      : function (o) {
          return o === i || e(o, i, a);
        };
  }
  return ((Vu = n), Vu);
}
var Yu, Md;
function nO() {
  if (Md) return Yu;
  Md = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return ((Yu = e), Yu);
}
var Zu, Cd;
function iO() {
  if (Cd) return Zu;
  Cd = 1;
  var e = Ug(),
    t = vf(),
    r = ke(),
    n = yf(),
    i = mf(),
    a = aa();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, h = !1; ++f < l; ) {
      var d = a(s[f]);
      if (!(h = u != null && c(u, d))) break;
      u = u[d];
    }
    return h || ++f != l
      ? h
      : ((l = u == null ? 0 : u.length), !!l && i(l) && n(d, l) && (r(u) || t(u)));
  }
  return ((Zu = o), Zu);
}
var Ju, Id;
function aO() {
  if (Id) return Ju;
  Id = 1;
  var e = nO(),
    t = iO();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return ((Ju = r), Ju);
}
var Qu, $d;
function oO() {
  if ($d) return Qu;
  $d = 1;
  var e = gf(),
    t = Wg(),
    r = aO(),
    n = Ql(),
    i = _b(),
    a = Ob(),
    o = aa(),
    u = 1,
    s = 2;
  function c(f, l) {
    return n(f) && i(l)
      ? a(o(f), l)
      : function (h) {
          var d = t(h, f);
          return d === void 0 && d === l ? r(h, f) : e(l, d, u | s);
        };
  }
  return ((Qu = c), Qu);
}
var es, Nd;
function Cr() {
  if (Nd) return es;
  Nd = 1;
  function e(t) {
    return t;
  }
  return ((es = e), es);
}
var ts, kd;
function uO() {
  if (kd) return ts;
  kd = 1;
  function e(t) {
    return function (r) {
      return r?.[t];
    };
  }
  return ((ts = e), ts);
}
var rs, Rd;
function sO() {
  if (Rd) return rs;
  Rd = 1;
  var e = of();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return ((rs = t), rs);
}
var ns, Dd;
function cO() {
  if (Dd) return ns;
  Dd = 1;
  var e = uO(),
    t = sO(),
    r = Ql(),
    n = aa();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return ((ns = i), ns);
}
var is, qd;
function Ot() {
  if (qd) return is;
  qd = 1;
  var e = rO(),
    t = oO(),
    r = Cr(),
    n = ke(),
    i = cO();
  function a(o) {
    return typeof o == "function"
      ? o
      : o == null
        ? r
        : typeof o == "object"
          ? n(o)
            ? t(o[0], o[1])
            : e(o)
          : i(o);
  }
  return ((is = a), is);
}
var as, Ld;
function Sb() {
  if (Ld) return as;
  Ld = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; ) if (r(t[o], o, t)) return o;
    return -1;
  }
  return ((as = e), as);
}
var os, Bd;
function lO() {
  if (Bd) return os;
  Bd = 1;
  function e(t) {
    return t !== t;
  }
  return ((os = e), os);
}
var us, Fd;
function fO() {
  if (Fd) return us;
  Fd = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; ) if (t[i] === r) return i;
    return -1;
  }
  return ((us = e), us);
}
var ss, Ud;
function hO() {
  if (Ud) return ss;
  Ud = 1;
  var e = Sb(),
    t = lO(),
    r = fO();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return ((ss = n), ss);
}
var cs, Wd;
function pO() {
  if (Wd) return cs;
  Wd = 1;
  var e = hO();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return ((cs = t), cs);
}
var ls, zd;
function dO() {
  if (zd) return ls;
  zd = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; ) if (n(r, t[i])) return !0;
    return !1;
  }
  return ((ls = e), ls);
}
var fs, Hd;
function vO() {
  if (Hd) return fs;
  Hd = 1;
  function e() {}
  return ((fs = e), fs);
}
var hs, Gd;
function yO() {
  if (Gd) return hs;
  Gd = 1;
  var e = wb(),
    t = vO(),
    r = df(),
    n = 1 / 0,
    i =
      e && 1 / r(new e([, -0]))[1] == n
        ? function (a) {
            return new e(a);
          }
        : t;
  return ((hs = i), hs);
}
var ps, Kd;
function mO() {
  if (Kd) return ps;
  Kd = 1;
  var e = hb(),
    t = pO(),
    r = dO(),
    n = db(),
    i = yO(),
    a = df(),
    o = 200;
  function u(s, c, f) {
    var l = -1,
      h = t,
      d = s.length,
      y = !0,
      v = [],
      p = v;
    if (f) ((y = !1), (h = r));
    else if (d >= o) {
      var g = c ? null : i(s);
      if (g) return a(g);
      ((y = !1), (h = n), (p = new e()));
    } else p = c ? [] : v;
    e: for (; ++l < d; ) {
      var x = s[l],
        w = c ? c(x) : x;
      if (((x = f || x !== 0 ? x : 0), y && w === w)) {
        for (var _ = p.length; _--; ) if (p[_] === w) continue e;
        (c && p.push(w), v.push(x));
      } else h(p, w, f) || (p !== v && p.push(w), v.push(x));
    }
    return v;
  }
  return ((ps = u), ps);
}
var ds, Xd;
function gO() {
  if (Xd) return ds;
  Xd = 1;
  var e = Ot(),
    t = mO();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return ((ds = r), ds);
}
var bO = gO();
const Vd = le(bO);
function Ab(e, t, r) {
  return t === !0 ? Vd(e, r) : Z(t) ? Vd(e, t) : e;
}
function lr(e) {
  "@babel/helpers - typeof";
  return (
    (lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    lr(e)
  );
}
var xO = ["ref"];
function Yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yd(Object(r), !0).forEach(function (n) {
          ha(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wO(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Zd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Tb(n.key), n));
  }
}
function _O(e, t, r) {
  return (
    t && Zd(e.prototype, t),
    r && Zd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function OO(e, t, r) {
  return (
    (t = hi(t)),
    SO(e, Pb() ? Reflect.construct(t, r || [], hi(e).constructor) : t.apply(e, r))
  );
}
function SO(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AO(e);
}
function AO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pb = function () {
    return !!e;
  })();
}
function hi(e) {
  return (
    (hi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    hi(e)
  );
}
function PO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Zc(e, t));
}
function Zc(e, t) {
  return (
    (Zc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Zc(e, t)
  );
}
function ha(e, t, r) {
  return (
    (t = Tb(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Tb(e) {
  var t = TO(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function TO(e, t) {
  if (lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function EO(e, t) {
  if (e == null) return {};
  var r = jO(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function jO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function MO(e) {
  return e.value;
}
function CO(e, t) {
  if (E.isValidElement(e)) return E.cloneElement(e, t);
  if (typeof e == "function") return E.createElement(e, t);
  t.ref;
  var r = EO(t, xO);
  return E.createElement(pf, r);
}
var Jd = 1,
  ar = (function (e) {
    function t() {
      var r;
      wO(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = OO(this, t, [].concat(i))),
        ha(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      PO(t, e),
      _O(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Jd ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Jd) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0
                ? ot({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                s = i.margin,
                c = i.chartWidth,
                f = i.chartHeight,
                l,
                h;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var d = this.getBBoxSnapshot();
                  l = { left: ((c || 0) - d.width) / 2 };
                } else
                  l = o === "right" ? { right: (s && s.right) || 0 } : { left: (s && s.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var y = this.getBBoxSnapshot();
                  h = { top: ((f || 0) - y.height) / 2 };
                } else
                  h =
                    u === "bottom" ? { bottom: (s && s.bottom) || 0 } : { top: (s && s.top) || 0 };
              return ot(ot({}, l), h);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                s = i.wrapperStyle,
                c = i.payloadUniqBy,
                f = i.payload,
                l = ot(
                  ot(
                    { position: "absolute", width: o || "auto", height: u || "auto" },
                    this.getDefaultPosition(s),
                  ),
                  s,
                );
              return E.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: l,
                  ref: function (d) {
                    n.wrapperNode = d;
                  },
                },
                CO(a, ot(ot({}, this.props), {}, { payload: Ab(f, c, MO) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = ot(ot({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && B(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(D.PureComponent);
ha(ar, "displayName", "Legend");
ha(ar, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var vs, Qd;
function IO() {
  if (Qd) return vs;
  Qd = 1;
  var e = Nn(),
    t = vf(),
    r = ke(),
    n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return ((vs = i), vs);
}
var ys, ev;
function Eb() {
  if (ev) return ys;
  ev = 1;
  var e = yb(),
    t = IO();
  function r(n, i, a, o, u) {
    var s = -1,
      c = n.length;
    for (a || (a = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      i > 0 && a(f) ? (i > 1 ? r(f, i - 1, a, o, u) : e(u, f)) : o || (u[u.length] = f);
    }
    return u;
  }
  return ((ys = r), ys);
}
var ms, tv;
function $O() {
  if (tv) return ms;
  tv = 1;
  function e(t) {
    return function (r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), s = u.length; s--; ) {
        var c = u[t ? s : ++a];
        if (n(o[c], c, o) === !1) break;
      }
      return r;
    };
  }
  return ((ms = e), ms);
}
var gs, rv;
function NO() {
  if (rv) return gs;
  rv = 1;
  var e = $O(),
    t = e();
  return ((gs = t), gs);
}
var bs, nv;
function jb() {
  if (nv) return bs;
  nv = 1;
  var e = NO(),
    t = fa();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return ((bs = r), bs);
}
var xs, iv;
function kO() {
  if (iv) return xs;
  iv = 1;
  var e = Rn();
  function t(r, n) {
    return function (i, a) {
      if (i == null) return i;
      if (!e(i)) return r(i, a);
      for (
        var o = i.length, u = n ? o : -1, s = Object(i);
        (n ? u-- : ++u < o) && a(s[u], u, s) !== !1;
      );
      return i;
    };
  }
  return ((xs = t), xs);
}
var ws, av;
function bf() {
  if (av) return ws;
  av = 1;
  var e = jb(),
    t = kO(),
    r = t(e);
  return ((ws = r), ws);
}
var _s, ov;
function Mb() {
  if (ov) return _s;
  ov = 1;
  var e = bf(),
    t = Rn();
  function r(n, i) {
    var a = -1,
      o = t(n) ? Array(n.length) : [];
    return (
      e(n, function (u, s, c) {
        o[++a] = i(u, s, c);
      }),
      o
    );
  }
  return ((_s = r), _s);
}
var Os, uv;
function RO() {
  if (uv) return Os;
  uv = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; ) t[n] = t[n].value;
    return t;
  }
  return ((Os = e), Os);
}
var Ss, sv;
function DO() {
  if (sv) return Ss;
  sv = 1;
  var e = jr();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0,
        a = r === null,
        o = r === r,
        u = e(r),
        s = n !== void 0,
        c = n === null,
        f = n === n,
        l = e(n);
      if (
        (!c && !l && !u && r > n) ||
        (u && s && f && !c && !l) ||
        (a && s && f) ||
        (!i && f) ||
        !o
      )
        return 1;
      if (
        (!a && !u && !l && r < n) ||
        (l && i && o && !a && !u) ||
        (c && i && o) ||
        (!s && o) ||
        !f
      )
        return -1;
    }
    return 0;
  }
  return ((Ss = t), Ss);
}
var As, cv;
function qO() {
  if (cv) return As;
  cv = 1;
  var e = DO();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, s = o.length, c = i.length; ++a < s; ) {
      var f = e(o[a], u[a]);
      if (f) {
        if (a >= c) return f;
        var l = i[a];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return ((As = t), As);
}
var Ps, lv;
function LO() {
  if (lv) return Ps;
  lv = 1;
  var e = af(),
    t = of(),
    r = Ot(),
    n = Mb(),
    i = RO(),
    a = gb(),
    o = qO(),
    u = Cr(),
    s = ke();
  function c(f, l, h) {
    l.length
      ? (l = e(l, function (v) {
          return s(v)
            ? function (p) {
                return t(p, v.length === 1 ? v[0] : v);
              }
            : v;
        }))
      : (l = [u]);
    var d = -1;
    l = e(l, a(r));
    var y = n(f, function (v, p, g) {
      var x = e(l, function (w) {
        return w(v);
      });
      return { criteria: x, index: ++d, value: v };
    });
    return i(y, function (v, p) {
      return o(v, p, h);
    });
  }
  return ((Ps = c), Ps);
}
var Ts, fv;
function BO() {
  if (fv) return Ts;
  fv = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return ((Ts = e), Ts);
}
var Es, hv;
function FO() {
  if (hv) return Es;
  hv = 1;
  var e = BO(),
    t = Math.max;
  function r(n, i, a) {
    return (
      (i = t(i === void 0 ? n.length - 1 : i, 0)),
      function () {
        for (var o = arguments, u = -1, s = t(o.length - i, 0), c = Array(s); ++u < s; )
          c[u] = o[i + u];
        u = -1;
        for (var f = Array(i + 1); ++u < i; ) f[u] = o[u];
        return ((f[i] = a(c)), e(n, this, f));
      }
    );
  }
  return ((Es = r), Es);
}
var js, pv;
function UO() {
  if (pv) return js;
  pv = 1;
  function e(t) {
    return function () {
      return t;
    };
  }
  return ((js = e), js);
}
var Ms, dv;
function Cb() {
  if (dv) return Ms;
  dv = 1;
  var e = Ht(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return (r({}, "", {}), r);
      } catch {}
    })();
  return ((Ms = t), Ms);
}
var Cs, vv;
function WO() {
  if (vv) return Cs;
  vv = 1;
  var e = UO(),
    t = Cb(),
    r = Cr(),
    n = t
      ? function (i, a) {
          return t(i, "toString", { configurable: !0, enumerable: !1, value: e(a), writable: !0 });
        }
      : r;
  return ((Cs = n), Cs);
}
var Is, yv;
function zO() {
  if (yv) return Is;
  yv = 1;
  var e = 800,
    t = 16,
    r = Date.now;
  function n(i) {
    var a = 0,
      o = 0;
    return function () {
      var u = r(),
        s = t - (u - o);
      if (((o = u), s > 0)) {
        if (++a >= e) return arguments[0];
      } else a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return ((Is = n), Is);
}
var $s, mv;
function HO() {
  if (mv) return $s;
  mv = 1;
  var e = WO(),
    t = zO(),
    r = t(e);
  return (($s = r), $s);
}
var Ns, gv;
function GO() {
  if (gv) return Ns;
  gv = 1;
  var e = Cr(),
    t = FO(),
    r = HO();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return ((Ns = n), Ns);
}
var ks, bv;
function pa() {
  if (bv) return ks;
  bv = 1;
  var e = tf(),
    t = Rn(),
    r = yf(),
    n = _t();
  function i(a, o, u) {
    if (!n(u)) return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], a) : !1;
  }
  return ((ks = i), ks);
}
var Rs, xv;
function KO() {
  if (xv) return Rs;
  xv = 1;
  var e = Eb(),
    t = LO(),
    r = GO(),
    n = pa(),
    i = r(function (a, o) {
      if (a == null) return [];
      var u = o.length;
      return (
        u > 1 && n(a, o[0], o[1]) ? (o = []) : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]),
        t(a, e(o, 1), [])
      );
    });
  return ((Rs = i), Rs);
}
var XO = KO();
const xf = le(XO);
function en(e) {
  "@babel/helpers - typeof";
  return (
    (en =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    en(e)
  );
}
function Jc() {
  return (
    (Jc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jc.apply(this, arguments)
  );
}
function VO(e, t) {
  return QO(e) || JO(e, t) || ZO(e, t) || YO();
}
function YO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZO(e, t) {
  if (e) {
    if (typeof e == "string") return wv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wv(e, t);
  }
}
function wv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JO(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function QO(e) {
  if (Array.isArray(e)) return e;
}
function _v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _v(Object(r), !0).forEach(function (n) {
          eS(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _v(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function eS(e, t, r) {
  return (
    (t = tS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function tS(e) {
  var t = rS(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function rS(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nS(e) {
  return Array.isArray(e) && _e(e[0]) && _e(e[1]) ? e.join(" ~ ") : e;
}
var iS = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    s = t.labelStyle,
    c = s === void 0 ? {} : s,
    f = t.payload,
    l = t.formatter,
    h = t.itemSorter,
    d = t.wrapperClassName,
    y = t.labelClassName,
    v = t.label,
    p = t.labelFormatter,
    g = t.accessibilityLayer,
    x = g === void 0 ? !1 : g,
    w = function () {
      if (f && f.length) {
        var P = { padding: 0, margin: 0 },
          j = (h ? xf(f, h) : f).map(function (C, M) {
            if (C.type === "none") return null;
            var N = Ds(
                { display: "block", paddingTop: 4, paddingBottom: 4, color: C.color || "#000" },
                u,
              ),
              R = C.formatter || l || nS,
              L = C.value,
              F = C.name,
              H = L,
              K = F;
            if (R && H != null && K != null) {
              var W = R(L, F, C, M, f);
              if (Array.isArray(W)) {
                var X = VO(W, 2);
                ((H = X[0]), (K = X[1]));
              } else H = W;
            }
            return E.createElement(
              "li",
              { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: N },
              _e(K)
                ? E.createElement("span", { className: "recharts-tooltip-item-name" }, K)
                : null,
              _e(K)
                ? E.createElement("span", { className: "recharts-tooltip-item-separator" }, n)
                : null,
              E.createElement("span", { className: "recharts-tooltip-item-value" }, H),
              E.createElement("span", { className: "recharts-tooltip-item-unit" }, C.unit || ""),
            );
          });
        return E.createElement("ul", { className: "recharts-tooltip-item-list", style: P }, j);
      }
      return null;
    },
    _ = Ds(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    m = Ds({ margin: 0 }, c),
    b = !te(v),
    O = b ? v : "",
    S = ee("recharts-default-tooltip", d),
    A = ee("recharts-tooltip-label", y);
  b && p && f !== void 0 && f !== null && (O = p(v, f));
  var $ = x ? { role: "status", "aria-live": "assertive" } : {};
  return E.createElement(
    "div",
    Jc({ className: S, style: _ }, $),
    E.createElement("p", { className: A, style: m }, E.isValidElement(O) ? O : "".concat(O)),
    w(),
  );
};
function tn(e) {
  "@babel/helpers - typeof";
  return (
    (tn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tn(e)
  );
}
function Hn(e, t, r) {
  return (
    (t = aS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function aS(e) {
  var t = oS(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function oS(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rr = "recharts-tooltip-wrapper",
  uS = { visibility: "hidden" };
function sS(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return ee(
    Rr,
    Hn(
      Hn(
        Hn(
          Hn({}, "".concat(Rr, "-right"), B(r) && t && B(t.x) && r >= t.x),
          "".concat(Rr, "-left"),
          B(r) && t && B(t.x) && r < t.x,
        ),
        "".concat(Rr, "-bottom"),
        B(n) && t && B(t.y) && n >= t.y,
      ),
      "".concat(Rr, "-top"),
      B(n) && t && B(t.y) && n < t.y,
    ),
  );
}
function Ov(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    s = e.viewBox,
    c = e.viewBoxDimension;
  if (a && B(a[n])) return a[n];
  var f = r[n] - u - i,
    l = r[n] + i;
  if (t[n]) return o[n] ? f : l;
  if (o[n]) {
    var h = f,
      d = s[n];
    return h < d ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var y = l + u,
    v = s[n] + c;
  return y > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function cS(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function lS(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    s = e.viewBox,
    c,
    f,
    l;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = Ov({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: s,
          viewBoxDimension: s.width,
        })),
        (l = Ov({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: s,
          viewBoxDimension: s.height,
        })),
        (c = cS({ translateX: f, translateY: l, useTranslate3d: u })))
      : (c = uS),
    { cssProperties: c, cssClasses: sS({ translateX: f, translateY: l, coordinate: r }) }
  );
}
function fr(e) {
  "@babel/helpers - typeof";
  return (
    (fr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fr(e)
  );
}
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Av(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sv(Object(r), !0).forEach(function (n) {
          el(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function fS(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function hS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $b(n.key), n));
  }
}
function pS(e, t, r) {
  return (t && hS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function dS(e, t, r) {
  return (
    (t = pi(t)),
    vS(e, Ib() ? Reflect.construct(t, r || [], pi(e).constructor) : t.apply(e, r))
  );
}
function vS(e, t) {
  if (t && (fr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yS(e);
}
function yS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ib() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ib = function () {
    return !!e;
  })();
}
function pi(e) {
  return (
    (pi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    pi(e)
  );
}
function mS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Qc(e, t));
}
function Qc(e, t) {
  return (
    (Qc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Qc(e, t)
  );
}
function el(e, t, r) {
  return (
    (t = $b(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function $b(e) {
  var t = gS(e, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function gS(e, t) {
  if (fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pv = 1,
  bS = (function (e) {
    function t() {
      var r;
      fS(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = dS(this, t, [].concat(i))),
        el(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        el(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, s, c, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null &&
                  u !== void 0
                    ? u
                    : 0,
                y:
                  (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null &&
                  c !== void 0
                    ? c
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      mS(t, e),
      pS(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > Pv ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > Pv) &&
                this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (document.addEventListener("keydown", this.handleKeyDown), this.updateBBox());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !==
                  this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !==
                    this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              s = i.animationEasing,
              c = i.children,
              f = i.coordinate,
              l = i.hasPayload,
              h = i.isAnimationActive,
              d = i.offset,
              y = i.position,
              v = i.reverseDirection,
              p = i.useTranslate3d,
              g = i.viewBox,
              x = i.wrapperStyle,
              w = lS({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: d,
                position: y,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: p,
                viewBox: g,
              }),
              _ = w.cssClasses,
              m = w.cssProperties,
              b = Av(
                Av({ transition: h && a ? "transform ".concat(u, "ms ").concat(s) : void 0 }, m),
                {},
                {
                  pointerEvents: "none",
                  visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                x,
              );
            return E.createElement(
              "div",
              {
                tabIndex: -1,
                className: _,
                style: b,
                ref: function (S) {
                  n.wrapperNode = S;
                },
              },
              c,
            );
          },
        },
      ])
    );
  })(D.PureComponent),
  xS = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  Dn = { isSsr: xS() };
function hr(e) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hr(e)
  );
}
function Tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tv(Object(r), !0).forEach(function (n) {
          wf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wS(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _S(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, kb(n.key), n));
  }
}
function OS(e, t, r) {
  return (t && _S(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function SS(e, t, r) {
  return (
    (t = di(t)),
    AS(e, Nb() ? Reflect.construct(t, r || [], di(e).constructor) : t.apply(e, r))
  );
}
function AS(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return PS(e);
}
function PS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Nb = function () {
    return !!e;
  })();
}
function di(e) {
  return (
    (di = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    di(e)
  );
}
function TS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && tl(e, t));
}
function tl(e, t) {
  return (
    (tl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    tl(e, t)
  );
}
function wf(e, t, r) {
  return (
    (t = kb(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function kb(e) {
  var t = ES(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function ES(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function jS(e) {
  return e.dataKey;
}
function MS(e, t) {
  return E.isValidElement(e)
    ? E.cloneElement(e, t)
    : typeof e == "function"
      ? E.createElement(e, t)
      : E.createElement(iS, t);
}
var Qe = (function (e) {
  function t() {
    return (wS(this, t), SS(this, t, arguments));
  }
  return (
    TS(t, e),
    OS(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            s = i.animationEasing,
            c = i.content,
            f = i.coordinate,
            l = i.filterNull,
            h = i.isAnimationActive,
            d = i.offset,
            y = i.payload,
            v = i.payloadUniqBy,
            p = i.position,
            g = i.reverseDirection,
            x = i.useTranslate3d,
            w = i.viewBox,
            _ = i.wrapperStyle,
            m = y ?? [];
          l &&
            m.length &&
            (m = Ab(
              y.filter(function (O) {
                return O.value != null && (O.hide !== !0 || n.props.includeHidden);
              }),
              v,
              jS,
            ));
          var b = m.length > 0;
          return E.createElement(
            bS,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: s,
              isAnimationActive: h,
              active: a,
              coordinate: f,
              hasPayload: b,
              offset: d,
              position: p,
              reverseDirection: g,
              useTranslate3d: x,
              viewBox: w,
              wrapperStyle: _,
            },
            MS(c, Ev(Ev({}, this.props), {}, { payload: m })),
          );
        },
      },
    ])
  );
})(D.PureComponent);
wf(Qe, "displayName", "Tooltip");
wf(Qe, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Dn.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var qs, jv;
function CS() {
  if (jv) return qs;
  jv = 1;
  var e = at(),
    t = function () {
      return e.Date.now();
    };
  return ((qs = t), qs);
}
var Ls, Mv;
function IS() {
  if (Mv) return Ls;
  Mv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return ((Ls = t), Ls);
}
var Bs, Cv;
function $S() {
  if (Cv) return Bs;
  Cv = 1;
  var e = IS(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return ((Bs = r), Bs);
}
var Fs, Iv;
function Rb() {
  if (Iv) return Fs;
  Iv = 1;
  var e = $S(),
    t = _t(),
    r = jr(),
    n = NaN,
    i = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    u = parseInt;
  function s(c) {
    if (typeof c == "number") return c;
    if (r(c)) return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string") return c === 0 ? c : +c;
    c = e(c);
    var l = a.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : i.test(c) ? n : +c;
  }
  return ((Fs = s), Fs);
}
var Us, $v;
function NS() {
  if ($v) return Us;
  $v = 1;
  var e = _t(),
    t = CS(),
    r = Rb(),
    n = "Expected a function",
    i = Math.max,
    a = Math.min;
  function o(u, s, c) {
    var f,
      l,
      h,
      d,
      y,
      v,
      p = 0,
      g = !1,
      x = !1,
      w = !0;
    if (typeof u != "function") throw new TypeError(n);
    ((s = r(s) || 0),
      e(c) &&
        ((g = !!c.leading),
        (x = "maxWait" in c),
        (h = x ? i(r(c.maxWait) || 0, s) : h),
        (w = "trailing" in c ? !!c.trailing : w)));
    function _(j) {
      var C = f,
        M = l;
      return ((f = l = void 0), (p = j), (d = u.apply(M, C)), d);
    }
    function m(j) {
      return ((p = j), (y = setTimeout(S, s)), g ? _(j) : d);
    }
    function b(j) {
      var C = j - v,
        M = j - p,
        N = s - C;
      return x ? a(N, h - M) : N;
    }
    function O(j) {
      var C = j - v,
        M = j - p;
      return v === void 0 || C >= s || C < 0 || (x && M >= h);
    }
    function S() {
      var j = t();
      if (O(j)) return A(j);
      y = setTimeout(S, b(j));
    }
    function A(j) {
      return ((y = void 0), w && f ? _(j) : ((f = l = void 0), d));
    }
    function $() {
      (y !== void 0 && clearTimeout(y), (p = 0), (f = v = l = y = void 0));
    }
    function T() {
      return y === void 0 ? d : A(t());
    }
    function P() {
      var j = t(),
        C = O(j);
      if (((f = arguments), (l = this), (v = j), C)) {
        if (y === void 0) return m(v);
        if (x) return (clearTimeout(y), (y = setTimeout(S, s)), _(v));
      }
      return (y === void 0 && (y = setTimeout(S, s)), d);
    }
    return ((P.cancel = $), (P.flush = T), P);
  }
  return ((Us = o), Us);
}
var Ws, Nv;
function kS() {
  if (Nv) return Ws;
  Nv = 1;
  var e = NS(),
    t = _t(),
    r = "Expected a function";
  function n(i, a, o) {
    var u = !0,
      s = !0;
    if (typeof i != "function") throw new TypeError(r);
    return (
      t(o) && ((u = "leading" in o ? !!o.leading : u), (s = "trailing" in o ? !!o.trailing : s)),
      e(i, a, { leading: u, maxWait: a, trailing: s })
    );
  }
  return ((Ws = n), Ws);
}
var RS = kS();
const Db = le(RS);
function rn(e) {
  "@babel/helpers - typeof";
  return (
    (rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    rn(e)
  );
}
function kv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kv(Object(r), !0).forEach(function (n) {
          DS(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function DS(e, t, r) {
  return (
    (t = qS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function qS(e) {
  var t = LS(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function LS(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BS(e, t) {
  return zS(e) || WS(e, t) || US(e, t) || FS();
}
function FS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function US(e, t) {
  if (e) {
    if (typeof e == "string") return Rv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rv(e, t);
  }
}
function Rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WS(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function zS(e) {
  if (Array.isArray(e)) return e;
}
var HS = D.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      u = e.height,
      s = u === void 0 ? "100%" : u,
      c = e.minWidth,
      f = c === void 0 ? 0 : c,
      l = e.minHeight,
      h = e.maxHeight,
      d = e.children,
      y = e.debounce,
      v = y === void 0 ? 0 : y,
      p = e.id,
      g = e.className,
      x = e.onResize,
      w = e.style,
      _ = w === void 0 ? {} : w,
      m = D.useRef(null),
      b = D.useRef();
    ((b.current = x),
      D.useImperativeHandle(t, function () {
        return Object.defineProperty(m.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              m.current
            );
          },
          configurable: !0,
        });
      }));
    var O = D.useState({ containerWidth: i.width, containerHeight: i.height }),
      S = BS(O, 2),
      A = S[0],
      $ = S[1],
      T = D.useCallback(function (j, C) {
        $(function (M) {
          var N = Math.round(j),
            R = Math.round(C);
          return M.containerWidth === N && M.containerHeight === R
            ? M
            : { containerWidth: N, containerHeight: R };
        });
      }, []);
    D.useEffect(
      function () {
        var j = function (F) {
          var H,
            K = F[0].contentRect,
            W = K.width,
            X = K.height;
          (T(W, X), (H = b.current) === null || H === void 0 || H.call(b, W, X));
        };
        v > 0 && (j = Db(j, v, { trailing: !0, leading: !1 }));
        var C = new ResizeObserver(j),
          M = m.current.getBoundingClientRect(),
          N = M.width,
          R = M.height;
        return (
          T(N, R),
          C.observe(m.current),
          function () {
            C.disconnect();
          }
        );
      },
      [T, v],
    );
    var P = D.useMemo(
      function () {
        var j = A.containerWidth,
          C = A.containerHeight;
        if (j < 0 || C < 0) return null;
        (Dt(
          $t(o) || $t(s),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          s,
        ),
          Dt(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
        var M = $t(o) ? j : o,
          N = $t(s) ? C : s;
        (r && r > 0 && (M ? (N = M / r) : N && (M = N * r), h && N > h && (N = h)),
          Dt(
            M > 0 || N > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            M,
            N,
            o,
            s,
            f,
            l,
            r,
          ));
        var R = !Array.isArray(d) && ct(d.type).endsWith("Chart");
        return E.Children.map(d, function (L) {
          return E.isValidElement(L)
            ? D.cloneElement(
                L,
                Gn(
                  { width: M, height: N },
                  R
                    ? {
                        style: Gn(
                          { height: "100%", width: "100%", maxHeight: N, maxWidth: M },
                          L.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : L;
        });
      },
      [r, d, s, h, l, f, A, o],
    );
    return E.createElement(
      "div",
      {
        id: p ? "".concat(p) : void 0,
        className: ee("recharts-responsive-container", g),
        style: Gn(Gn({}, _), {}, { width: o, height: s, minWidth: f, minHeight: l, maxHeight: h }),
        ref: m,
      },
      P,
    );
  }),
  _f = function (t) {
    return null;
  };
_f.displayName = "Cell";
function nn(e) {
  "@babel/helpers - typeof";
  return (
    (nn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nn(e)
  );
}
function Dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dv(Object(r), !0).forEach(function (n) {
          GS(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function GS(e, t, r) {
  return (
    (t = KS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function KS(e) {
  var t = XS(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function XS(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jt = { widthCache: {}, cacheCount: 0 },
  VS = 2e3,
  YS = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  qv = "recharts_measurement_span";
function ZS(e) {
  var t = rl({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var Xr = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || Dn.isSsr) return { width: 0, height: 0 };
    var n = ZS(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (Jt.widthCache[i]) return Jt.widthCache[i];
    try {
      var a = document.getElementById(qv);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", qv),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = rl(rl({}, YS), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var u = a.getBoundingClientRect(),
        s = { width: u.width, height: u.height };
      return (
        (Jt.widthCache[i] = s),
        ++Jt.cacheCount > VS && ((Jt.cacheCount = 0), (Jt.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  JS = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function an(e) {
  "@babel/helpers - typeof";
  return (
    (an =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    an(e)
  );
}
function vi(e, t) {
  return rA(e) || tA(e, t) || eA(e, t) || QS();
}
function QS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eA(e, t) {
  if (e) {
    if (typeof e == "string") return Lv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lv(e, t);
  }
}
function Lv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tA(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function rA(e) {
  if (Array.isArray(e)) return e;
}
function nA(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Bv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, aA(n.key), n));
  }
}
function iA(e, t, r) {
  return (
    t && Bv(e.prototype, t),
    r && Bv(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function aA(e) {
  var t = oA(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function oA(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Fv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Uv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  uA = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  sA = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  qb = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  cA = Object.keys(qb),
  tr = "NaN";
function lA(e, t) {
  return e * qb[t];
}
var Kn = (function () {
  function e(t, r) {
    (nA(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !uA.test(r) && ((this.num = NaN), (this.unit = "")),
      cA.includes(r) && ((this.num = lA(t, r)), (this.unit = "px")));
  }
  return iA(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = sA.exec(r)) !== null && n !== void 0 ? n : [],
            a = vi(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();
function Lb(e) {
  if (e.includes(tr)) return tr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = Fv.exec(t)) !== null && r !== void 0 ? r : [],
      i = vi(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      s = Kn.parse(a ?? ""),
      c = Kn.parse(u ?? ""),
      f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN()) return tr;
    t = t.replace(Fv, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l,
      h = (l = Uv.exec(t)) !== null && l !== void 0 ? l : [],
      d = vi(h, 4),
      y = d[1],
      v = d[2],
      p = d[3],
      g = Kn.parse(y ?? ""),
      x = Kn.parse(p ?? ""),
      w = v === "+" ? g.add(x) : g.subtract(x);
    if (w.isNaN()) return tr;
    t = t.replace(Uv, w.toString());
  }
  return t;
}
var Wv = /\(([^()]*)\)/;
function fA(e) {
  for (var t = e; t.includes("("); ) {
    var r = Wv.exec(t),
      n = vi(r, 2),
      i = n[1];
    t = t.replace(Wv, Lb(i));
  }
  return t;
}
function hA(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = fA(t)), (t = Lb(t)), t);
}
function pA(e) {
  try {
    return hA(e);
  } catch {
    return tr;
  }
}
function zs(e) {
  var t = pA(e.slice(5, -1));
  return t === tr ? "" : t;
}
var dA = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  vA = ["dx", "dy", "angle", "className", "breakAll"];
function nl() {
  return (
    (nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nl.apply(this, arguments)
  );
}
function zv(e, t) {
  if (e == null) return {};
  var r = yA(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function yA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hv(e, t) {
  return xA(e) || bA(e, t) || gA(e, t) || mA();
}
function mA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gA(e, t) {
  if (e) {
    if (typeof e == "string") return Gv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gv(e, t);
  }
}
function Gv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bA(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function xA(e) {
  if (Array.isArray(e)) return e;
}
var Bb = /[ \f\n\r\t\v\u2028\u2029]+/,
  Fb = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      te(r) || (n ? (a = r.toString().split("")) : (a = r.toString().split(Bb)));
      var o = a.map(function (s) {
          return { word: s, width: Xr(s, i).width };
        }),
        u = n ? 0 : Xr(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  wA = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      s = t.style,
      c = t.breakAll,
      f = B(o),
      l = u,
      h = function () {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return M.reduce(function (N, R) {
          var L = R.word,
            F = R.width,
            H = N[N.length - 1];
          if (H && (i == null || a || H.width + F + n < Number(i)))
            (H.words.push(L), (H.width += F + n));
          else {
            var K = { words: [L], width: F };
            N.push(K);
          }
          return N;
        }, []);
      },
      d = h(r),
      y = function (M) {
        return M.reduce(function (N, R) {
          return N.width > R.width ? N : R;
        });
      };
    if (!f) return d;
    for (
      var v = "…",
        p = function (M) {
          var N = l.slice(0, M),
            R = Fb({ breakAll: c, style: s, children: N + v }).wordsWithComputedWidth,
            L = h(R),
            F = L.length > o || y(L).width > Number(i);
          return [F, L];
        },
        g = 0,
        x = l.length - 1,
        w = 0,
        _;
      g <= x && w <= l.length - 1;
    ) {
      var m = Math.floor((g + x) / 2),
        b = m - 1,
        O = p(b),
        S = Hv(O, 2),
        A = S[0],
        $ = S[1],
        T = p(m),
        P = Hv(T, 1),
        j = P[0];
      if ((!A && !j && (g = m + 1), A && j && (x = m - 1), !A && j)) {
        _ = $;
        break;
      }
      w++;
    }
    return _ || d;
  },
  Kv = function (t) {
    var r = te(t) ? [] : t.toString().split(Bb);
    return [{ words: r }];
  },
  _A = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !Dn.isSsr) {
      var s,
        c,
        f = Fb({ breakAll: o, children: i, style: a });
      if (f) {
        var l = f.wordsWithComputedWidth,
          h = f.spaceWidth;
        ((s = l), (c = h));
      } else return Kv(i);
      return wA({ breakAll: o, children: i, maxLines: u, style: a }, s, c, r, n);
    }
    return Kv(i);
  },
  Xv = "#808080",
  yi = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      s = t.capHeight,
      c = s === void 0 ? "0.71em" : s,
      f = t.scaleToFit,
      l = f === void 0 ? !1 : f,
      h = t.textAnchor,
      d = h === void 0 ? "start" : h,
      y = t.verticalAnchor,
      v = y === void 0 ? "end" : y,
      p = t.fill,
      g = p === void 0 ? Xv : p,
      x = zv(t, dA),
      w = D.useMemo(
        function () {
          return _A({
            breakAll: x.breakAll,
            children: x.children,
            maxLines: x.maxLines,
            scaleToFit: l,
            style: x.style,
            width: x.width,
          });
        },
        [x.breakAll, x.children, x.maxLines, l, x.style, x.width],
      ),
      _ = x.dx,
      m = x.dy,
      b = x.angle,
      O = x.className,
      S = x.breakAll,
      A = zv(x, vA);
    if (!_e(n) || !_e(a)) return null;
    var $ = n + (B(_) ? _ : 0),
      T = a + (B(m) ? m : 0),
      P;
    switch (v) {
      case "start":
        P = zs("calc(".concat(c, ")"));
        break;
      case "middle":
        P = zs(
          "calc("
            .concat((w.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(c, " / 2))"),
        );
        break;
      default:
        P = zs("calc(".concat(w.length - 1, " * -").concat(u, ")"));
        break;
    }
    var j = [];
    if (l) {
      var C = w[0].width,
        M = x.width;
      j.push("scale(".concat((B(M) ? M / C : 1) / C, ")"));
    }
    return (
      b && j.push("rotate(".concat(b, ", ").concat($, ", ").concat(T, ")")),
      j.length && (A.transform = j.join(" ")),
      E.createElement(
        "text",
        nl({}, ie(A, !0), {
          x: $,
          y: T,
          className: ee("recharts-text", O),
          textAnchor: d,
          fill: g.includes("url") ? Xv : g,
        }),
        w.map(function (N, R) {
          var L = N.words.join(S ? "" : " ");
          return E.createElement(
            "tspan",
            { x: $, dy: R === 0 ? P : u, key: "".concat(L, "-").concat(R) },
            L,
          );
        }),
      )
    );
  };
function xt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function OA(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Of(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = xt), (r = (u, s) => xt(e(u), s)), (n = (u, s) => e(u) - s))
    : ((t = e === xt || e === OA ? e : SA), (r = e), (n = e));
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = (c + f) >>> 1;
        r(u[l], s) < 0 ? (c = l + 1) : (f = l);
      } while (c < f);
    }
    return c;
  }
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = (c + f) >>> 1;
        r(u[l], s) <= 0 ? (c = l + 1) : (f = l);
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = i(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function SA() {
  return 0;
}
function Ub(e) {
  return e === null ? NaN : +e;
}
function* AA(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const PA = Of(xt),
  qn = PA.right;
Of(Ub).center;
class Vv extends Map {
  constructor(t, r = jA) {
    if (
      (super(),
      Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: r } }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Yv(this, t));
  }
  has(t) {
    return super.has(Yv(this, t));
  }
  set(t, r) {
    return super.set(TA(this, t), r);
  }
  delete(t) {
    return super.delete(EA(this, t));
  }
}
function Yv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function TA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function EA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function jA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function MA(e = xt) {
  if (e === xt) return Wb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Wb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const CA = Math.sqrt(50),
  IA = Math.sqrt(10),
  $A = Math.sqrt(2);
function mi(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= CA ? 10 : a >= IA ? 5 : a >= $A ? 2 : 1;
  let u, s, c;
  return (
    i < 0
      ? ((c = Math.pow(10, -i) / o),
        (u = Math.round(e * c)),
        (s = Math.round(t * c)),
        u / c < e && ++u,
        s / c > t && --s,
        (c = -c))
      : ((c = Math.pow(10, i) * o),
        (u = Math.round(e / c)),
        (s = Math.round(t / c)),
        u * c < e && ++u,
        s * c > t && --s),
    s < u && 0.5 <= r && r < 2 ? mi(e, t, r * 2) : [u, s, c]
  );
}
function il(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? mi(t, e, r) : mi(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function al(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), mi(e, t, r)[2]);
}
function ol(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? al(t, e, r) : al(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zv(e, t) {
  let r;
  for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function Jv(e, t) {
  let r;
  for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function zb(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? Wb : MA(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1,
        c = t - r + 1,
        f = Math.log(s),
        l = 0.5 * Math.exp((2 * f) / 3),
        h = 0.5 * Math.sqrt((f * l * (s - l)) / s) * (c - s / 2 < 0 ? -1 : 1),
        d = Math.max(r, Math.floor(t - (c * l) / s + h)),
        y = Math.min(n, Math.floor(t + ((s - c) * l) / s + h));
      zb(e, t, d, y, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (Dr(e, r, t), i(e[n], a) > 0 && Dr(e, r, n); o < u; ) {
      for (Dr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    (i(e[r], a) === 0 ? Dr(e, r, u) : (++u, Dr(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1));
  }
  return e;
}
function Dr(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function NA(e, t, r) {
  if (((e = Float64Array.from(AA(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return Jv(e);
    if (t >= 1) return Zv(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Zv(zb(e, a).subarray(0, a + 1)),
      u = Jv(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function kA(e, t, r = Ub) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function RA(e, t, r) {
  ((e = +e), (t = +t), (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Ge(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function yt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const ul = Symbol("implicit");
function Sf() {
  var e = new Vv(),
    t = [],
    r = [],
    n = ul;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== ul) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Vv()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Sf(t, r).unknown(n);
    }),
    Ge.apply(i, arguments),
    i
  );
}
function on() {
  var e = Sf().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    s = 0,
    c = 0,
    f = 0.5;
  delete e.unknown;
  function l() {
    var h = t().length,
      d = i < n,
      y = d ? i : n,
      v = d ? n : i;
    ((a = (v - y) / Math.max(1, h - s + c * 2)),
      u && (a = Math.floor(a)),
      (y += (v - y - a * (h - s)) * f),
      (o = a * (1 - s)),
      u && ((y = Math.round(y)), (o = Math.round(o))));
    var p = RA(h).map(function (g) {
      return y + a * g;
    });
    return r(d ? p.reverse() : p);
  }
  return (
    (e.domain = function (h) {
      return arguments.length ? (t(h), l()) : t();
    }),
    (e.range = function (h) {
      return arguments.length ? (([n, i] = h), (n = +n), (i = +i), l()) : [n, i];
    }),
    (e.rangeRound = function (h) {
      return (([n, i] = h), (n = +n), (i = +i), (u = !0), l());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (h) {
      return arguments.length ? ((u = !!h), l()) : u;
    }),
    (e.padding = function (h) {
      return arguments.length ? ((s = Math.min(1, (c = +h))), l()) : s;
    }),
    (e.paddingInner = function (h) {
      return arguments.length ? ((s = Math.min(1, h)), l()) : s;
    }),
    (e.paddingOuter = function (h) {
      return arguments.length ? ((c = +h), l()) : c;
    }),
    (e.align = function (h) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, h))), l()) : f;
    }),
    (e.copy = function () {
      return on(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(f);
    }),
    Ge.apply(l(), arguments)
  );
}
function Hb(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Hb(t());
    }),
    e
  );
}
function Vr() {
  return Hb(on.apply(null, arguments).paddingInner(1));
}
function Af(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function Gb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ln() {}
var un = 0.7,
  gi = 1 / un,
  or = "\\s*([+-]?\\d+)\\s*",
  sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  DA = /^#([0-9a-f]{3,8})$/,
  qA = new RegExp(`^rgb\\(${or},${or},${or}\\)$`),
  LA = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`),
  BA = new RegExp(`^rgba\\(${or},${or},${or},${sn}\\)$`),
  FA = new RegExp(`^rgba\\(${tt},${tt},${tt},${sn}\\)$`),
  UA = new RegExp(`^hsl\\(${sn},${tt},${tt}\\)$`),
  WA = new RegExp(`^hsla\\(${sn},${tt},${tt},${sn}\\)$`),
  Qv = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Af(Ln, cn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ey,
  formatHex: ey,
  formatHex8: zA,
  formatHsl: HA,
  formatRgb: ty,
  toString: ty,
});
function ey() {
  return this.rgb().formatHex();
}
function zA() {
  return this.rgb().formatHex8();
}
function HA() {
  return Kb(this).formatHsl();
}
function ty() {
  return this.rgb().formatRgb();
}
function cn(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = DA.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? ry(t)
          : r === 3
            ? new Ne(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? Xn((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : r === 4
                ? Xn(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = qA.exec(e))
        ? new Ne(t[1], t[2], t[3], 1)
        : (t = LA.exec(e))
          ? new Ne((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = BA.exec(e))
            ? Xn(t[1], t[2], t[3], t[4])
            : (t = FA.exec(e))
              ? Xn((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = UA.exec(e))
                ? ay(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = WA.exec(e))
                  ? ay(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Qv.hasOwnProperty(e)
                    ? ry(Qv[e])
                    : e === "transparent"
                      ? new Ne(NaN, NaN, NaN, 0)
                      : null
  );
}
function ry(e) {
  return new Ne((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Xn(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new Ne(e, t, r, n));
}
function GA(e) {
  return (
    e instanceof Ln || (e = cn(e)),
    e ? ((e = e.rgb()), new Ne(e.r, e.g, e.b, e.opacity)) : new Ne()
  );
}
function sl(e, t, r, n) {
  return arguments.length === 1 ? GA(e) : new Ne(e, t, r, n ?? 1);
}
function Ne(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
Af(
  Ne,
  sl,
  Gb(Ln, {
    brighter(e) {
      return (
        (e = e == null ? gi : Math.pow(gi, e)),
        new Ne(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? un : Math.pow(un, e)),
        new Ne(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ne(qt(this.r), qt(this.g), qt(this.b), bi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: ny,
    formatHex: ny,
    formatHex8: KA,
    formatRgb: iy,
    toString: iy,
  }),
);
function ny() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`;
}
function KA() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function iy() {
  const e = bi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qt(this.r)}, ${qt(this.g)}, ${qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function bi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nt(e) {
  return ((e = qt(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function ay(e, t, r, n) {
  return (
    n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new Ve(e, t, r, n)
  );
}
function Kb(e) {
  if (e instanceof Ve) return new Ve(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Ln || (e = cn(e)), !e)) return new Ve();
  if (e instanceof Ve) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    s = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= s < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = s > 0 && s < 1 ? 0 : o),
    new Ve(o, u, s, e.opacity)
  );
}
function XA(e, t, r, n) {
  return arguments.length === 1 ? Kb(e) : new Ve(e, t, r, n ?? 1);
}
function Ve(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
Af(
  Ve,
  XA,
  Gb(Ln, {
    brighter(e) {
      return (
        (e = e == null ? gi : Math.pow(gi, e)),
        new Ve(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? un : Math.pow(un, e)),
        new Ve(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Ne(
        Hs(e >= 240 ? e - 240 : e + 120, i, n),
        Hs(e, i, n),
        Hs(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new Ve(oy(this.h), Vn(this.s), Vn(this.l), bi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = bi(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${oy(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function oy(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function Vn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hs(e, t, r) {
  return (
    (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) *
    255
  );
}
const Pf = (e) => () => e;
function VA(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function YA(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function ZA(e) {
  return (e = +e) == 1
    ? Xb
    : function (t, r) {
        return r - t ? YA(t, r, e) : Pf(isNaN(t) ? r : t);
      };
}
function Xb(e, t) {
  var r = t - e;
  return r ? VA(e, r) : Pf(isNaN(e) ? t : e);
}
const uy = (function e(t) {
  var r = ZA(t);
  function n(i, a) {
    var o = r((i = sl(i)).r, (a = sl(a)).r),
      u = r(i.g, a.g),
      s = r(i.b, a.b),
      c = Xb(i.opacity, a.opacity);
    return function (f) {
      return ((i.r = o(f)), (i.g = u(f)), (i.b = s(f)), (i.opacity = c(f)), i + "");
    };
  }
  return ((n.gamma = e), n);
})(1);
function JA(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function QA(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function eP(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Ir(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function tP(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function xi(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function rP(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = Ir(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var cl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Gs = new RegExp(cl.source, "g");
function nP(e) {
  return function () {
    return e;
  };
}
function iP(e) {
  return function (t) {
    return e(t) + "";
  };
}
function aP(e, t) {
  var r = (cl.lastIndex = Gs.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    s = [];
  for (e = e + "", t = t + ""; (n = cl.exec(e)) && (i = Gs.exec(t)); )
    ((a = i.index) > r && ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), s.push({ i: o, x: xi(n, i) })),
      (r = Gs.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? s[0]
        ? iP(s[0].x)
        : nP(t)
      : ((t = s.length),
        function (c) {
          for (var f = 0, l; f < t; ++f) u[(l = s[f]).i] = l.x(c);
          return u.join("");
        })
  );
}
function Ir(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Pf(t)
    : (r === "number"
        ? xi
        : r === "string"
          ? (n = cn(t))
            ? ((t = n), uy)
            : aP
          : t instanceof cn
            ? uy
            : t instanceof Date
              ? tP
              : QA(t)
                ? JA
                : Array.isArray(t)
                  ? eP
                  : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
                    ? rP
                    : xi)(e, t);
}
function Tf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function oP(e, t) {
  t === void 0 && ((t = e), (e = Ir));
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function uP(e) {
  return function () {
    return e;
  };
}
function wi(e) {
  return +e;
}
var sy = [0, 1];
function Ce(e) {
  return e;
}
function ll(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : uP(isNaN(t) ? NaN : 0.5);
}
function sP(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function cP(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = ll(i, n)), (a = r(o, a))) : ((n = ll(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function lP(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < n; )
    ((i[o] = ll(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (u) {
    var s = qn(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function Bn(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function da() {
  var e = sy,
    t = sy,
    r = Ir,
    n,
    i,
    a,
    o = Ce,
    u,
    s,
    c;
  function f() {
    var h = Math.min(e.length, t.length);
    return (o !== Ce && (o = sP(e[0], e[h - 1])), (u = h > 2 ? lP : cP), (s = c = null), l);
  }
  function l(h) {
    return h == null || isNaN((h = +h)) ? a : (s || (s = u(e.map(n), t, r)))(n(o(h)));
  }
  return (
    (l.invert = function (h) {
      return o(i((c || (c = u(t, e.map(n), xi)))(h)));
    }),
    (l.domain = function (h) {
      return arguments.length ? ((e = Array.from(h, wi)), f()) : e.slice();
    }),
    (l.range = function (h) {
      return arguments.length ? ((t = Array.from(h)), f()) : t.slice();
    }),
    (l.rangeRound = function (h) {
      return ((t = Array.from(h)), (r = Tf), f());
    }),
    (l.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : Ce), f()) : o !== Ce;
    }),
    (l.interpolate = function (h) {
      return arguments.length ? ((r = h), f()) : r;
    }),
    (l.unknown = function (h) {
      return arguments.length ? ((a = h), l) : a;
    }),
    function (h, d) {
      return ((n = h), (i = d), f());
    }
  );
}
function Ef() {
  return da()(Ce, Ce);
}
function fP(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function _i(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function pr(e) {
  return ((e = _i(Math.abs(e))), e ? e[1] : NaN);
}
function hP(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], s = 0;
      i > 0 &&
      u > 0 &&
      (s + u + 1 > n && (u = Math.max(1, n - s)),
      a.push(r.substring((i -= u), i + u)),
      !((s += u + 1) > n));
    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function pP(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var dP = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ln(e) {
  if (!(t = dP.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new jf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
ln.prototype = jf.prototype;
function jf(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
jf.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function vP(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Oi;
function yP(e, t) {
  var r = _i(e, t);
  if (!r) return ((Oi = void 0), e.toPrecision(t));
  var n = r[0],
    i = r[1],
    a = i - (Oi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + _i(e, Math.max(0, t + a - 1))[0];
}
function cy(e, t) {
  var r = _i(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const ly = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: fP,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => cy(e * 100, t),
  r: cy,
  s: yP,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function fy(e) {
  return e;
}
var hy = Array.prototype.map,
  py = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function mP(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? fy
        : hP(hy.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? fy : pP(hy.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, h) {
    l = ln(l);
    var d = l.fill,
      y = l.align,
      v = l.sign,
      p = l.symbol,
      g = l.zero,
      x = l.width,
      w = l.comma,
      _ = l.precision,
      m = l.trim,
      b = l.type;
    (b === "n" ? ((w = !0), (b = "g")) : ly[b] || (_ === void 0 && (_ = 12), (m = !0), (b = "g")),
      (g || (d === "0" && y === "=")) && ((g = !0), (d = "0"), (y = "=")));
    var O =
        (h && h.prefix !== void 0 ? h.prefix : "") +
        (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""),
      S = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""),
      A = ly[b],
      $ = /[defgprs%]/.test(b);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(b)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function T(P) {
      var j = O,
        C = S,
        M,
        N,
        R;
      if (b === "c") ((C = A(P) + C), (P = ""));
      else {
        P = +P;
        var L = P < 0 || 1 / P < 0;
        if (
          ((P = isNaN(P) ? s : A(Math.abs(P), _)),
          m && (P = vP(P)),
          L && +P == 0 && v !== "+" && (L = !1),
          (j = (L ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + j),
          (C =
            (b === "s" && !isNaN(P) && Oi !== void 0 ? py[8 + Oi / 3] : "") +
            C +
            (L && v === "(" ? ")" : "")),
          $)
        ) {
          for (M = -1, N = P.length; ++M < N; )
            if (((R = P.charCodeAt(M)), 48 > R || R > 57)) {
              ((C = (R === 46 ? i + P.slice(M + 1) : P.slice(M)) + C), (P = P.slice(0, M)));
              break;
            }
        }
      }
      w && !g && (P = t(P, 1 / 0));
      var F = j.length + P.length + C.length,
        H = F < x ? new Array(x - F + 1).join(d) : "";
      switch ((w && g && ((P = t(H + P, H.length ? x - C.length : 1 / 0)), (H = "")), y)) {
        case "<":
          P = j + P + C + H;
          break;
        case "=":
          P = j + H + P + C;
          break;
        case "^":
          P = H.slice(0, (F = H.length >> 1)) + j + P + C + H.slice(F);
          break;
        default:
          P = H + j + P + C;
          break;
      }
      return a(P);
    }
    return (
      (T.toString = function () {
        return l + "";
      }),
      T
    );
  }
  function f(l, h) {
    var d = Math.max(-8, Math.min(8, Math.floor(pr(h) / 3))) * 3,
      y = Math.pow(10, -d),
      v = c(((l = ln(l)), (l.type = "f"), l), { suffix: py[8 + d / 3] });
    return function (p) {
      return v(y * p);
    };
  }
  return { format: c, formatPrefix: f };
}
var Yn, Mf, Vb;
gP({ thousands: ",", grouping: [3], currency: ["$", ""] });
function gP(e) {
  return ((Yn = mP(e)), (Mf = Yn.format), (Vb = Yn.formatPrefix), Yn);
}
function bP(e) {
  return Math.max(0, -pr(Math.abs(e)));
}
function xP(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(pr(t) / 3))) * 3 - pr(Math.abs(e)));
}
function wP(e, t) {
  return ((e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, pr(t) - pr(e)) + 1);
}
function Yb(e, t, r, n) {
  var i = ol(e, t, r),
    a;
  switch (((n = ln(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (n.precision == null && !isNaN((a = xP(i, o))) && (n.precision = a), Vb(n, o));
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = wP(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN((a = bP(i))) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Mf(n);
}
function St(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return il(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return Yb(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        s,
        c,
        f = 10;
      for (u < o && ((c = o), (o = u), (u = c), (c = i), (i = a), (a = c)); f-- > 0; ) {
        if (((c = al(o, u, r)), c === s)) return ((n[i] = o), (n[a] = u), t(n));
        if (c > 0) ((o = Math.floor(o / c) * c), (u = Math.ceil(u / c) * c));
        else if (c < 0) ((o = Math.ceil(o * c) / c), (u = Math.floor(u * c) / c));
        else break;
        s = c;
      }
      return e;
    }),
    e
  );
}
function Si() {
  var e = Ef();
  return (
    (e.copy = function () {
      return Bn(e, Si());
    }),
    Ge.apply(e, arguments),
    St(e)
  );
}
function Zb(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, wi)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Zb(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, wi) : [0, 1]),
    St(r)
  );
}
function Jb(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function dy(e) {
  return Math.log(e);
}
function vy(e) {
  return Math.exp(e);
}
function _P(e) {
  return -Math.log(-e);
}
function OP(e) {
  return -Math.exp(-e);
}
function SP(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function AP(e) {
  return e === 10 ? SP : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function PP(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function yy(e) {
  return (t, r) => -e(-t, r);
}
function Cf(e) {
  const t = e(dy, vy),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = PP(n)),
      (a = AP(n)),
      r()[0] < 0 ? ((i = yy(i)), (a = yy(a)), e(_P, OP)) : e(dy, vy),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const s = r();
      let c = s[0],
        f = s[s.length - 1];
      const l = f < c;
      l && ([c, f] = [f, c]);
      let h = i(c),
        d = i(f),
        y,
        v;
      const p = u == null ? 10 : +u;
      let g = [];
      if (!(n % 1) && d - h < p) {
        if (((h = Math.floor(h)), (d = Math.ceil(d)), c > 0)) {
          for (; h <= d; ++h)
            for (y = 1; y < n; ++y)
              if (((v = h < 0 ? y / a(-h) : y * a(h)), !(v < c))) {
                if (v > f) break;
                g.push(v);
              }
        } else
          for (; h <= d; ++h)
            for (y = n - 1; y >= 1; --y)
              if (((v = h > 0 ? y / a(-h) : y * a(h)), !(v < c))) {
                if (v > f) break;
                g.push(v);
              }
        g.length * 2 < p && (g = il(c, f, p));
      } else g = il(h, d, Math.min(d - h, p)).map(a);
      return l ? g.reverse() : g;
    }),
    (t.tickFormat = (u, s) => {
      if (
        (u == null && (u = 10),
        s == null && (s = n === 10 ? "s" : ","),
        typeof s != "function" &&
          (!(n % 1) && (s = ln(s)).precision == null && (s.trim = !0), (s = Mf(s))),
        u === 1 / 0)
      )
        return s;
      const c = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let l = f / a(Math.round(i(f)));
        return (l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "");
      };
    }),
    (t.nice = () =>
      r(Jb(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) }))),
    t
  );
}
function Qb() {
  const e = Cf(da()).domain([1, 10]);
  return ((e.copy = () => Bn(e, Qb()).base(e.base())), Ge.apply(e, arguments), e);
}
function my(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function gy(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function If(e) {
  var t = 1,
    r = e(my(t), gy(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(my((t = +n)), gy(t)) : t;
    }),
    St(r)
  );
}
function e0() {
  var e = If(da());
  return (
    (e.copy = function () {
      return Bn(e, e0()).constant(e.constant());
    }),
    Ge.apply(e, arguments)
  );
}
function by(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function TP(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function EP(e) {
  return e < 0 ? -e * e : e * e;
}
function $f(e) {
  var t = e(Ce, Ce),
    r = 1;
  function n() {
    return r === 1 ? e(Ce, Ce) : r === 0.5 ? e(TP, EP) : e(by(r), by(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    St(t)
  );
}
function Nf() {
  var e = $f(da());
  return (
    (e.copy = function () {
      return Bn(e, Nf()).exponent(e.exponent());
    }),
    Ge.apply(e, arguments),
    e
  );
}
function jP() {
  return Nf.apply(null, arguments).exponent(0.5);
}
function xy(e) {
  return Math.sign(e) * e * e;
}
function MP(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function t0() {
  var e = Ef(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = MP(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(xy(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length ? (e.range((t = Array.from(a, wi)).map(xy)), i) : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return t0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Ge.apply(i, arguments),
    St(i)
  );
}
function r0() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = kA(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[qn(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return (e.sort(xt), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return r0().domain(e).range(t).unknown(n);
    }),
    Ge.apply(a, arguments)
  );
}
function n0() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(s) {
    return s != null && s <= s ? i[qn(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (s) {
      return arguments.length ? (([e, t] = s), (e = +e), (t = +t), u()) : [e, t];
    }),
    (o.range = function (s) {
      return arguments.length ? ((r = (i = Array.from(s)).length - 1), u()) : i.slice();
    }),
    (o.invertExtent = function (s) {
      var c = i.indexOf(s);
      return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
    }),
    (o.unknown = function (s) {
      return (arguments.length && (a = s), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return n0().domain([e, t]).range(i).unknown(a);
    }),
    Ge.apply(St(o), arguments)
  );
}
function i0() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[qn(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return i0().domain(e).range(t).unknown(r);
    }),
    Ge.apply(i, arguments)
  );
}
const Ks = new Date(),
  Xs = new Date();
function Oe(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a)),
    (i.range = (a, o, u) => {
      const s = [];
      if (((a = i.ceil(a)), (u = u == null ? 1 : Math.floor(u)), !(a < o) || !(u > 0))) return s;
      let c;
      do (s.push((c = new Date(+a))), t(a, u), e(a));
      while (c < a && a < o);
      return s;
    }),
    (i.filter = (a) =>
      Oe(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (Ks.setTime(+a), Xs.setTime(+o), e(Ks), e(Xs), Math.floor(r(Ks, Xs)))),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0)
            : i
      ))),
    i
  );
}
const Ai = Oe(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Ai.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Oe(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Ai
);
Ai.range;
const ut = 1e3,
  We = ut * 60,
  st = We * 60,
  ft = st * 24,
  kf = ft * 7,
  wy = ft * 30,
  Vs = ft * 365,
  kt = Oe(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * ut);
    },
    (e, t) => (t - e) / ut,
    (e) => e.getUTCSeconds(),
  );
kt.range;
const Rf = Oe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * ut);
  },
  (e, t) => {
    e.setTime(+e + t * We);
  },
  (e, t) => (t - e) / We,
  (e) => e.getMinutes(),
);
Rf.range;
const Df = Oe(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * We);
  },
  (e, t) => (t - e) / We,
  (e) => e.getUTCMinutes(),
);
Df.range;
const qf = Oe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * ut - e.getMinutes() * We);
  },
  (e, t) => {
    e.setTime(+e + t * st);
  },
  (e, t) => (t - e) / st,
  (e) => e.getHours(),
);
qf.range;
const Lf = Oe(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * st);
  },
  (e, t) => (t - e) / st,
  (e) => e.getUTCHours(),
);
Lf.range;
const Fn = Oe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * We) / ft,
  (e) => e.getDate() - 1,
);
Fn.range;
const va = Oe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / ft,
  (e) => e.getUTCDate() - 1,
);
va.range;
const a0 = Oe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / ft,
  (e) => Math.floor(e / ft),
);
a0.range;
function Gt(e) {
  return Oe(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * We) / kf,
  );
}
const ya = Gt(0),
  Pi = Gt(1),
  CP = Gt(2),
  IP = Gt(3),
  dr = Gt(4),
  $P = Gt(5),
  NP = Gt(6);
ya.range;
Pi.range;
CP.range;
IP.range;
dr.range;
$P.range;
NP.range;
function Kt(e) {
  return Oe(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / kf,
  );
}
const ma = Kt(0),
  Ti = Kt(1),
  kP = Kt(2),
  RP = Kt(3),
  vr = Kt(4),
  DP = Kt(5),
  qP = Kt(6);
ma.range;
Ti.range;
kP.range;
RP.range;
vr.range;
DP.range;
qP.range;
const Bf = Oe(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Bf.range;
const Ff = Oe(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Ff.range;
const ht = Oe(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
ht.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Oe(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
ht.range;
const pt = Oe(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
pt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Oe(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
pt.range;
function o0(e, t, r, n, i, a) {
  const o = [
    [kt, 1, ut],
    [kt, 5, 5 * ut],
    [kt, 15, 15 * ut],
    [kt, 30, 30 * ut],
    [a, 1, We],
    [a, 5, 5 * We],
    [a, 15, 15 * We],
    [a, 30, 30 * We],
    [i, 1, st],
    [i, 3, 3 * st],
    [i, 6, 6 * st],
    [i, 12, 12 * st],
    [n, 1, ft],
    [n, 2, 2 * ft],
    [r, 1, kf],
    [t, 1, wy],
    [t, 3, 3 * wy],
    [e, 1, Vs],
  ];
  function u(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const d = l && typeof l.range == "function" ? l : s(c, f, l),
      y = d ? d.range(c, +f + 1) : [];
    return h ? y.reverse() : y;
  }
  function s(c, f, l) {
    const h = Math.abs(f - c) / l,
      d = Of(([, , p]) => p).right(o, h);
    if (d === o.length) return e.every(ol(c / Vs, f / Vs, l));
    if (d === 0) return Ai.every(Math.max(ol(c, f, l), 1));
    const [y, v] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(v);
  }
  return [u, s];
}
const [LP, BP] = o0(pt, Ff, ma, a0, Lf, Df),
  [FP, UP] = o0(ht, Bf, ya, Fn, qf, Rf);
function Ys(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Zs(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function qr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function WP(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    s = e.shortMonths,
    c = Lr(i),
    f = Br(i),
    l = Lr(a),
    h = Br(a),
    d = Lr(o),
    y = Br(o),
    v = Lr(u),
    p = Br(u),
    g = Lr(s),
    x = Br(s),
    w = {
      a: R,
      A: L,
      b: F,
      B: H,
      c: null,
      d: Ty,
      e: Ty,
      f: hT,
      g: _T,
      G: ST,
      H: cT,
      I: lT,
      j: fT,
      L: u0,
      m: pT,
      M: dT,
      p: K,
      q: W,
      Q: My,
      s: Cy,
      S: vT,
      u: yT,
      U: mT,
      V: gT,
      w: bT,
      W: xT,
      x: null,
      X: null,
      y: wT,
      Y: OT,
      Z: AT,
      "%": jy,
    },
    _ = {
      a: X,
      A: se,
      b: ve,
      B: Re,
      c: null,
      d: Ey,
      e: Ey,
      f: jT,
      g: LT,
      G: FT,
      H: PT,
      I: TT,
      j: ET,
      L: c0,
      m: MT,
      M: CT,
      p: Tt,
      q: Ie,
      Q: My,
      s: Cy,
      S: IT,
      u: $T,
      U: NT,
      V: kT,
      w: RT,
      W: DT,
      x: null,
      X: null,
      y: qT,
      Y: BT,
      Z: UT,
      "%": jy,
    },
    m = {
      a: $,
      A: T,
      b: P,
      B: j,
      c: C,
      d: Ay,
      e: Ay,
      f: aT,
      g: Sy,
      G: Oy,
      H: Py,
      I: Py,
      j: tT,
      L: iT,
      m: eT,
      M: rT,
      p: A,
      q: QP,
      Q: uT,
      s: sT,
      S: nT,
      u: XP,
      U: VP,
      V: YP,
      w: KP,
      W: ZP,
      x: M,
      X: N,
      y: Sy,
      Y: Oy,
      Z: JP,
      "%": oT,
    };
  ((w.x = b(r, w)),
    (w.X = b(n, w)),
    (w.c = b(t, w)),
    (_.x = b(r, _)),
    (_.X = b(n, _)),
    (_.c = b(t, _)));
  function b(U, V) {
    return function (Y) {
      var k = [],
        pe = -1,
        J = 0,
        ge = U.length,
        be,
        $e,
        mt;
      for (Y instanceof Date || (Y = new Date(+Y)); ++pe < ge; )
        U.charCodeAt(pe) === 37 &&
          (k.push(U.slice(J, pe)),
          ($e = _y[(be = U.charAt(++pe))]) != null
            ? (be = U.charAt(++pe))
            : ($e = be === "e" ? " " : "0"),
          (mt = V[be]) && (be = mt(Y, $e)),
          k.push(be),
          (J = pe + 1));
      return (k.push(U.slice(J, pe)), k.join(""));
    };
  }
  function O(U, V) {
    return function (Y) {
      var k = qr(1900, void 0, 1),
        pe = S(k, U, (Y += ""), 0),
        J,
        ge;
      if (pe != Y.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (
        (V && !("Z" in k) && (k.Z = 0),
        "p" in k && (k.H = (k.H % 12) + k.p * 12),
        k.m === void 0 && (k.m = "q" in k ? k.q : 0),
        "V" in k)
      ) {
        if (k.V < 1 || k.V > 53) return null;
        ("w" in k || (k.w = 1),
          "Z" in k
            ? ((J = Zs(qr(k.y, 0, 1))),
              (ge = J.getUTCDay()),
              (J = ge > 4 || ge === 0 ? Ti.ceil(J) : Ti(J)),
              (J = va.offset(J, (k.V - 1) * 7)),
              (k.y = J.getUTCFullYear()),
              (k.m = J.getUTCMonth()),
              (k.d = J.getUTCDate() + ((k.w + 6) % 7)))
            : ((J = Ys(qr(k.y, 0, 1))),
              (ge = J.getDay()),
              (J = ge > 4 || ge === 0 ? Pi.ceil(J) : Pi(J)),
              (J = Fn.offset(J, (k.V - 1) * 7)),
              (k.y = J.getFullYear()),
              (k.m = J.getMonth()),
              (k.d = J.getDate() + ((k.w + 6) % 7))));
      } else
        ("W" in k || "U" in k) &&
          ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0),
          (ge = "Z" in k ? Zs(qr(k.y, 0, 1)).getUTCDay() : Ys(qr(k.y, 0, 1)).getDay()),
          (k.m = 0),
          (k.d =
            "W" in k
              ? ((k.w + 6) % 7) + k.W * 7 - ((ge + 5) % 7)
              : k.w + k.U * 7 - ((ge + 6) % 7)));
      return "Z" in k ? ((k.H += (k.Z / 100) | 0), (k.M += k.Z % 100), Zs(k)) : Ys(k);
    };
  }
  function S(U, V, Y, k) {
    for (var pe = 0, J = V.length, ge = Y.length, be, $e; pe < J; ) {
      if (k >= ge) return -1;
      if (((be = V.charCodeAt(pe++)), be === 37)) {
        if (
          ((be = V.charAt(pe++)),
          ($e = m[be in _y ? V.charAt(pe++) : be]),
          !$e || (k = $e(U, Y, k)) < 0)
        )
          return -1;
      } else if (be != Y.charCodeAt(k++)) return -1;
    }
    return k;
  }
  function A(U, V, Y) {
    var k = c.exec(V.slice(Y));
    return k ? ((U.p = f.get(k[0].toLowerCase())), Y + k[0].length) : -1;
  }
  function $(U, V, Y) {
    var k = d.exec(V.slice(Y));
    return k ? ((U.w = y.get(k[0].toLowerCase())), Y + k[0].length) : -1;
  }
  function T(U, V, Y) {
    var k = l.exec(V.slice(Y));
    return k ? ((U.w = h.get(k[0].toLowerCase())), Y + k[0].length) : -1;
  }
  function P(U, V, Y) {
    var k = g.exec(V.slice(Y));
    return k ? ((U.m = x.get(k[0].toLowerCase())), Y + k[0].length) : -1;
  }
  function j(U, V, Y) {
    var k = v.exec(V.slice(Y));
    return k ? ((U.m = p.get(k[0].toLowerCase())), Y + k[0].length) : -1;
  }
  function C(U, V, Y) {
    return S(U, t, V, Y);
  }
  function M(U, V, Y) {
    return S(U, r, V, Y);
  }
  function N(U, V, Y) {
    return S(U, n, V, Y);
  }
  function R(U) {
    return o[U.getDay()];
  }
  function L(U) {
    return a[U.getDay()];
  }
  function F(U) {
    return s[U.getMonth()];
  }
  function H(U) {
    return u[U.getMonth()];
  }
  function K(U) {
    return i[+(U.getHours() >= 12)];
  }
  function W(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function X(U) {
    return o[U.getUTCDay()];
  }
  function se(U) {
    return a[U.getUTCDay()];
  }
  function ve(U) {
    return s[U.getUTCMonth()];
  }
  function Re(U) {
    return u[U.getUTCMonth()];
  }
  function Tt(U) {
    return i[+(U.getUTCHours() >= 12)];
  }
  function Ie(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function (U) {
      var V = b((U += ""), w);
      return (
        (V.toString = function () {
          return U;
        }),
        V
      );
    },
    parse: function (U) {
      var V = O((U += ""), !1);
      return (
        (V.toString = function () {
          return U;
        }),
        V
      );
    },
    utcFormat: function (U) {
      var V = b((U += ""), _);
      return (
        (V.toString = function () {
          return U;
        }),
        V
      );
    },
    utcParse: function (U) {
      var V = O((U += ""), !0);
      return (
        (V.toString = function () {
          return U;
        }),
        V
      );
    },
  };
}
var _y = { "-": "", _: " ", 0: "0" },
  Pe = /^\s*\d+/,
  zP = /^%/,
  HP = /[\\^$*+?|[\]().{}]/g;
function Q(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function GP(e) {
  return e.replace(HP, "\\$&");
}
function Lr(e) {
  return new RegExp("^(?:" + e.map(GP).join("|") + ")", "i");
}
function Br(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function KP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function XP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function VP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function YP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function ZP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function Oy(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function Sy(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function JP(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
}
function QP(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function eT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function Ay(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function tT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function Py(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function rT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function nT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function iT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function aT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function oT(e, t, r) {
  var n = zP.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function uT(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function sT(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function Ty(e, t) {
  return Q(e.getDate(), t, 2);
}
function cT(e, t) {
  return Q(e.getHours(), t, 2);
}
function lT(e, t) {
  return Q(e.getHours() % 12 || 12, t, 2);
}
function fT(e, t) {
  return Q(1 + Fn.count(ht(e), e), t, 3);
}
function u0(e, t) {
  return Q(e.getMilliseconds(), t, 3);
}
function hT(e, t) {
  return u0(e, t) + "000";
}
function pT(e, t) {
  return Q(e.getMonth() + 1, t, 2);
}
function dT(e, t) {
  return Q(e.getMinutes(), t, 2);
}
function vT(e, t) {
  return Q(e.getSeconds(), t, 2);
}
function yT(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function mT(e, t) {
  return Q(ya.count(ht(e) - 1, e), t, 2);
}
function s0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dr(e) : dr.ceil(e);
}
function gT(e, t) {
  return ((e = s0(e)), Q(dr.count(ht(e), e) + (ht(e).getDay() === 4), t, 2));
}
function bT(e) {
  return e.getDay();
}
function xT(e, t) {
  return Q(Pi.count(ht(e) - 1, e), t, 2);
}
function wT(e, t) {
  return Q(e.getFullYear() % 100, t, 2);
}
function _T(e, t) {
  return ((e = s0(e)), Q(e.getFullYear() % 100, t, 2));
}
function OT(e, t) {
  return Q(e.getFullYear() % 1e4, t, 4);
}
function ST(e, t) {
  var r = e.getDay();
  return ((e = r >= 4 || r === 0 ? dr(e) : dr.ceil(e)), Q(e.getFullYear() % 1e4, t, 4));
}
function AT(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : ((t *= -1), "+")) + Q((t / 60) | 0, "0", 2) + Q(t % 60, "0", 2);
}
function Ey(e, t) {
  return Q(e.getUTCDate(), t, 2);
}
function PT(e, t) {
  return Q(e.getUTCHours(), t, 2);
}
function TT(e, t) {
  return Q(e.getUTCHours() % 12 || 12, t, 2);
}
function ET(e, t) {
  return Q(1 + va.count(pt(e), e), t, 3);
}
function c0(e, t) {
  return Q(e.getUTCMilliseconds(), t, 3);
}
function jT(e, t) {
  return c0(e, t) + "000";
}
function MT(e, t) {
  return Q(e.getUTCMonth() + 1, t, 2);
}
function CT(e, t) {
  return Q(e.getUTCMinutes(), t, 2);
}
function IT(e, t) {
  return Q(e.getUTCSeconds(), t, 2);
}
function $T(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function NT(e, t) {
  return Q(ma.count(pt(e) - 1, e), t, 2);
}
function l0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? vr(e) : vr.ceil(e);
}
function kT(e, t) {
  return ((e = l0(e)), Q(vr.count(pt(e), e) + (pt(e).getUTCDay() === 4), t, 2));
}
function RT(e) {
  return e.getUTCDay();
}
function DT(e, t) {
  return Q(Ti.count(pt(e) - 1, e), t, 2);
}
function qT(e, t) {
  return Q(e.getUTCFullYear() % 100, t, 2);
}
function LT(e, t) {
  return ((e = l0(e)), Q(e.getUTCFullYear() % 100, t, 2));
}
function BT(e, t) {
  return Q(e.getUTCFullYear() % 1e4, t, 4);
}
function FT(e, t) {
  var r = e.getUTCDay();
  return ((e = r >= 4 || r === 0 ? vr(e) : vr.ceil(e)), Q(e.getUTCFullYear() % 1e4, t, 4));
}
function UT() {
  return "+0000";
}
function jy() {
  return "%";
}
function My(e) {
  return +e;
}
function Cy(e) {
  return Math.floor(+e / 1e3);
}
var Qt, f0, h0;
WT({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});
function WT(e) {
  return ((Qt = WP(e)), (f0 = Qt.format), Qt.parse, (h0 = Qt.utcFormat), Qt.utcParse, Qt);
}
function zT(e) {
  return new Date(e);
}
function HT(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Uf(e, t, r, n, i, a, o, u, s, c) {
  var f = Ef(),
    l = f.invert,
    h = f.domain,
    d = c(".%L"),
    y = c(":%S"),
    v = c("%I:%M"),
    p = c("%I %p"),
    g = c("%a %d"),
    x = c("%b %d"),
    w = c("%B"),
    _ = c("%Y");
  function m(b) {
    return (
      s(b) < b
        ? d
        : u(b) < b
          ? y
          : o(b) < b
            ? v
            : a(b) < b
              ? p
              : n(b) < b
                ? i(b) < b
                  ? g
                  : x
                : r(b) < b
                  ? w
                  : _
    )(b);
  }
  return (
    (f.invert = function (b) {
      return new Date(l(b));
    }),
    (f.domain = function (b) {
      return arguments.length ? h(Array.from(b, HT)) : h().map(zT);
    }),
    (f.ticks = function (b) {
      var O = h();
      return e(O[0], O[O.length - 1], b ?? 10);
    }),
    (f.tickFormat = function (b, O) {
      return O == null ? m : c(O);
    }),
    (f.nice = function (b) {
      var O = h();
      return (
        (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)),
        b ? h(Jb(O, b)) : f
      );
    }),
    (f.copy = function () {
      return Bn(f, Uf(e, t, r, n, i, a, o, u, s, c));
    }),
    f
  );
}
function GT() {
  return Ge.apply(
    Uf(FP, UP, ht, Bf, ya, Fn, qf, Rf, kt, f0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
function KT() {
  return Ge.apply(
    Uf(LP, BP, pt, Ff, ma, va, Lf, Df, kt, h0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
function ga() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Ce,
    u = !1,
    s;
  function c(l) {
    return l == null || isNaN((l = +l))
      ? s
      : o(i === 0 ? 0.5 : ((l = (a(l) - r) * i), u ? Math.max(0, Math.min(1, l)) : l));
  }
  ((c.domain = function (l) {
    return arguments.length
      ? (([e, t] = l), (r = a((e = +e))), (n = a((t = +t))), (i = r === n ? 0 : 1 / (n - r)), c)
      : [e, t];
  }),
    (c.clamp = function (l) {
      return arguments.length ? ((u = !!l), c) : u;
    }),
    (c.interpolator = function (l) {
      return arguments.length ? ((o = l), c) : o;
    }));
  function f(l) {
    return function (h) {
      var d, y;
      return arguments.length ? (([d, y] = h), (o = l(d, y)), c) : [o(0), o(1)];
    };
  }
  return (
    (c.range = f(Ir)),
    (c.rangeRound = f(Tf)),
    (c.unknown = function (l) {
      return arguments.length ? ((s = l), c) : s;
    }),
    function (l) {
      return ((a = l), (r = l(e)), (n = l(t)), (i = r === n ? 0 : 1 / (n - r)), c);
    }
  );
}
function At(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function p0() {
  var e = St(ga()(Ce));
  return (
    (e.copy = function () {
      return At(e, p0());
    }),
    yt.apply(e, arguments)
  );
}
function d0() {
  var e = Cf(ga()).domain([1, 10]);
  return (
    (e.copy = function () {
      return At(e, d0()).base(e.base());
    }),
    yt.apply(e, arguments)
  );
}
function v0() {
  var e = If(ga());
  return (
    (e.copy = function () {
      return At(e, v0()).constant(e.constant());
    }),
    yt.apply(e, arguments)
  );
}
function Wf() {
  var e = $f(ga());
  return (
    (e.copy = function () {
      return At(e, Wf()).exponent(e.exponent());
    }),
    yt.apply(e, arguments)
  );
}
function XT() {
  return Wf.apply(null, arguments).exponent(0.5);
}
function y0() {
  var e = [],
    t = Ce;
  function r(n) {
    if (n != null && !isNaN((n = +n))) return t((qn(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(xt), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => NA(e, a / n));
    }),
    (r.copy = function () {
      return y0(t).domain(e);
    }),
    yt.apply(r, arguments)
  );
}
function ba() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    s,
    c = Ce,
    f,
    l = !1,
    h;
  function d(v) {
    return isNaN((v = +v))
      ? h
      : ((v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : s)),
        c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  ((d.domain = function (v) {
    return arguments.length
      ? (([e, t, r] = v),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d)
      : [e, t, r];
  }),
    (d.clamp = function (v) {
      return arguments.length ? ((l = !!v), d) : l;
    }),
    (d.interpolator = function (v) {
      return arguments.length ? ((c = v), d) : c;
    }));
  function y(v) {
    return function (p) {
      var g, x, w;
      return arguments.length ? (([g, x, w] = p), (c = oP(v, [g, x, w])), d) : [c(0), c(0.5), c(1)];
    };
  }
  return (
    (d.range = y(Ir)),
    (d.rangeRound = y(Tf)),
    (d.unknown = function (v) {
      return arguments.length ? ((h = v), d) : h;
    }),
    function (v) {
      return (
        (f = v),
        (i = v(e)),
        (a = v(t)),
        (o = v(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d
      );
    }
  );
}
function m0() {
  var e = St(ba()(Ce));
  return (
    (e.copy = function () {
      return At(e, m0());
    }),
    yt.apply(e, arguments)
  );
}
function g0() {
  var e = Cf(ba()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return At(e, g0()).base(e.base());
    }),
    yt.apply(e, arguments)
  );
}
function b0() {
  var e = If(ba());
  return (
    (e.copy = function () {
      return At(e, b0()).constant(e.constant());
    }),
    yt.apply(e, arguments)
  );
}
function zf() {
  var e = $f(ba());
  return (
    (e.copy = function () {
      return At(e, zf()).exponent(e.exponent());
    }),
    yt.apply(e, arguments)
  );
}
function VT() {
  return zf.apply(null, arguments).exponent(0.5);
}
const Iy = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: on,
      scaleDiverging: m0,
      scaleDivergingLog: g0,
      scaleDivergingPow: zf,
      scaleDivergingSqrt: VT,
      scaleDivergingSymlog: b0,
      scaleIdentity: Zb,
      scaleImplicit: ul,
      scaleLinear: Si,
      scaleLog: Qb,
      scaleOrdinal: Sf,
      scalePoint: Vr,
      scalePow: Nf,
      scaleQuantile: r0,
      scaleQuantize: n0,
      scaleRadial: t0,
      scaleSequential: p0,
      scaleSequentialLog: d0,
      scaleSequentialPow: Wf,
      scaleSequentialQuantile: y0,
      scaleSequentialSqrt: XT,
      scaleSequentialSymlog: v0,
      scaleSqrt: jP,
      scaleSymlog: e0,
      scaleThreshold: i0,
      scaleTime: GT,
      scaleUtc: KT,
      tickFormat: Yb,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Js, $y;
function x0() {
  if ($y) return Js;
  $y = 1;
  var e = jr();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a],
        s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : i(s, c)))
        var c = s,
          f = u;
    }
    return f;
  }
  return ((Js = t), Js);
}
var Qs, Ny;
function YT() {
  if (Ny) return Qs;
  Ny = 1;
  function e(t, r) {
    return t > r;
  }
  return ((Qs = e), Qs);
}
var ec, ky;
function ZT() {
  if (ky) return ec;
  ky = 1;
  var e = x0(),
    t = YT(),
    r = Cr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return ((ec = n), ec);
}
var JT = ZT();
const xa = le(JT);
var tc, Ry;
function QT() {
  if (Ry) return tc;
  Ry = 1;
  function e(t, r) {
    return t < r;
  }
  return ((tc = e), tc);
}
var rc, Dy;
function eE() {
  if (Dy) return rc;
  Dy = 1;
  var e = x0(),
    t = QT(),
    r = Cr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return ((rc = n), rc);
}
var tE = eE();
const wa = le(tE);
var nc, qy;
function rE() {
  if (qy) return nc;
  qy = 1;
  var e = af(),
    t = Ot(),
    r = Mb(),
    n = ke();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return ((nc = i), nc);
}
var ic, Ly;
function nE() {
  if (Ly) return ic;
  Ly = 1;
  var e = Eb(),
    t = rE();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return ((ic = r), ic);
}
var iE = nE();
const aE = le(iE);
var ac, By;
function oE() {
  if (By) return ac;
  By = 1;
  var e = gf();
  function t(r, n) {
    return e(r, n);
  }
  return ((ac = t), ac);
}
var uE = oE();
const Hf = le(uE);
var $r = 1e9,
  sE = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Kf,
  he = !0,
  He = "[DecimalError] ",
  Lt = He + "Invalid argument: ",
  Gf = He + "Exponent out of range: ",
  Nr = Math.floor,
  It = Math.pow,
  cE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Le,
  Se = 1e7,
  ce = 7,
  w0 = 9007199254740991,
  Ei = Nr(w0 / ce),
  z = {};
z.absoluteValue = z.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
z.comparedTo = z.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
z.decimalPlaces = z.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * ce;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
z.dividedBy = z.div = function (e) {
  return lt(this, new this.constructor(e));
};
z.dividedToIntegerBy = z.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return oe(lt(t, new r(e), 0, 1), r.precision);
};
z.equals = z.eq = function (e) {
  return !this.cmp(e);
};
z.exponent = function () {
  return me(this);
};
z.greaterThan = z.gt = function (e) {
  return this.cmp(e) > 0;
};
z.greaterThanOrEqualTo = z.gte = function (e) {
  return this.cmp(e) >= 0;
};
z.isInteger = z.isint = function () {
  return this.e > this.d.length - 2;
};
z.isNegative = z.isneg = function () {
  return this.s < 0;
};
z.isPositive = z.ispos = function () {
  return this.s > 0;
};
z.isZero = function () {
  return this.s === 0;
};
z.lessThan = z.lt = function (e) {
  return this.cmp(e) < 0;
};
z.lessThanOrEqualTo = z.lte = function (e) {
  return this.cmp(e) < 1;
};
z.logarithm = z.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Le))) throw Error(He + "NaN");
  if (r.s < 1) throw Error(He + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Le) ? new n(0) : ((he = !1), (t = lt(fn(r, a), fn(e, a), a)), (he = !0), oe(t, i));
};
z.minus = z.sub = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? S0(t, e) : _0(t, ((e.s = -e.s), e)));
};
z.modulo = z.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(He + "NaN");
  return r.s ? ((he = !1), (t = lt(r, e, 0, 1).times(e)), (he = !0), r.minus(t)) : oe(new n(r), i);
};
z.naturalExponential = z.exp = function () {
  return O0(this);
};
z.naturalLogarithm = z.ln = function () {
  return fn(this);
};
z.negated = z.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
z.plus = z.add = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? _0(t, e) : S0(t, ((e.s = -e.s), e)));
};
z.precision = z.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Lt + e);
  if (((t = me(i) + 1), (n = i.d.length - 1), (r = n * ce + 1), (n = i.d[n]), n)) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
z.squareRoot = z.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(He + "NaN");
  }
  for (
    e = me(u),
      he = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = et(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = Nr((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()), (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new s(t)))
        : (n = new s(i.toString())),
      r = s.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(lt(u, a, o + 2)).times(0.5)),
      et(a.d).slice(0, o) === (t = et(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((oe(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((he = !0), oe(n, r));
};
z.times = z.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f = this,
    l = f.constructor,
    h = f.d,
    d = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      s = h.length,
      c = d.length,
      s < c && ((a = h), (h = d), (d = a), (o = s), (s = c), (c = o)),
      a = [],
      o = s + c,
      n = o;
    n--;
  )
    a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      ((u = a[i] + d[n] * h[i - n - 1] + t), (a[i--] = (u % Se) | 0), (t = (u / Se) | 0));
    a[i] = ((a[i] + t) % Se) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (t ? ++r : a.shift(), (e.d = a), (e.e = r), he ? oe(e, l.precision) : e);
};
z.toDecimalPlaces = z.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (nt(e, 0, $r), t === void 0 ? (t = n.rounding) : nt(t, 0, 8), oe(r, e + me(r) + 1, t))
  );
};
z.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Wt(n, !0))
      : (nt(e, 0, $r),
        t === void 0 ? (t = i.rounding) : nt(t, 0, 8),
        (n = oe(new i(n), e + 1, t)),
        (r = Wt(n, !0, e + 1))),
    r
  );
};
z.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Wt(i)
    : (nt(e, 0, $r),
      t === void 0 ? (t = a.rounding) : nt(t, 0, 8),
      (n = oe(new a(i), e + me(i) + 1, t)),
      (r = Wt(n.abs(), !1, e + me(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
z.toInteger = z.toint = function () {
  var e = this,
    t = e.constructor;
  return oe(new t(e), me(e) + 1, t.rounding);
};
z.toNumber = function () {
  return +this;
};
z.toPower = z.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor,
    c = 12,
    f = +(e = new s(e));
  if (!e.s) return new s(Le);
  if (((u = new s(u)), !u.s)) {
    if (e.s < 1) throw Error(He + "Infinity");
    return u;
  }
  if (u.eq(Le)) return u;
  if (((n = s.precision), e.eq(Le))) return oe(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= w0) {
      for (
        i = new s(Le), t = Math.ceil(n / ce + 4), he = !1;
        r % 2 && ((i = i.times(u)), Uy(i.d, t)), (r = Nr(r / 2)), r !== 0;
      )
        ((u = u.times(u)), Uy(u.d, t));
      return ((he = !0), e.s < 0 ? new s(Le).div(i) : oe(i, n));
    }
  } else if (a < 0) throw Error(He + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (he = !1),
    (i = e.times(fn(u, n + c))),
    (he = !0),
    (i = O0(i)),
    (i.s = a),
    i
  );
};
z.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = me(i)), (n = Wt(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (nt(e, 1, $r),
        t === void 0 ? (t = a.rounding) : nt(t, 0, 8),
        (i = oe(new a(i), e, t)),
        (r = me(i)),
        (n = Wt(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
z.toSignificantDigits = z.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (nt(e, 1, $r), t === void 0 ? (t = n.rounding) : nt(t, 0, 8)),
    oe(new n(r), e, t)
  );
};
z.toString =
  z.valueOf =
  z.val =
  z.toJSON =
  z[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = me(e),
        r = e.constructor;
      return Wt(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function _0(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f = e.constructor,
    l = f.precision;
  if (!e.s || !t.s) return (t.s || (t = new f(e)), he ? oe(t, l) : t);
  if (((s = e.d), (c = t.d), (o = e.e), (i = t.e), (s = s.slice()), (a = o - i), a)) {
    for (
      a < 0 ? ((n = s), (a = -a), (u = c.length)) : ((n = c), (i = o), (u = s.length)),
        o = Math.ceil(l / ce),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && ((a = u), (n = c), (c = s), (s = n)), r = 0; a; )
    ((r = ((s[--a] = s[a] + c[a] + r) / Se) | 0), (s[a] %= Se));
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return ((t.d = s), (t.e = i), he ? oe(t, l) : t);
}
function nt(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Lt + e);
}
function et(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = ce - n.length), r && (a += gt(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = ce - n.length), r && (a += gt(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var lt = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; ) ((a = n[u] * i + o), (n[u] = (a % Se) | 0), (o = (a / Se) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o) s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Se + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      s,
      c,
      f,
      l,
      h,
      d,
      y,
      v,
      p,
      g,
      x,
      w,
      _,
      m,
      b,
      O,
      S,
      A = n.constructor,
      $ = n.s == i.s ? 1 : -1,
      T = n.d,
      P = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(He + "Division by zero");
    for (
      s = n.e - i.e, O = P.length, m = T.length, d = new A($), y = d.d = [], c = 0;
      P[c] == (T[c] || 0);
    )
      ++c;
    if (
      (P[c] > (T[c] || 0) && --s,
      a == null ? (x = a = A.precision) : o ? (x = a + (me(n) - me(i)) + 1) : (x = a),
      x < 0)
    )
      return new A(0);
    if (((x = (x / ce + 2) | 0), (c = 0), O == 1))
      for (f = 0, P = P[0], x++; (c < m || f) && x--; c++)
        ((w = f * Se + (T[c] || 0)), (y[c] = (w / P) | 0), (f = (w % P) | 0));
    else {
      for (
        f = (Se / (P[0] + 1)) | 0,
          f > 1 && ((P = e(P, f)), (T = e(T, f)), (O = P.length), (m = T.length)),
          _ = O,
          v = T.slice(0, O),
          p = v.length;
        p < O;
      )
        v[p++] = 0;
      ((S = P.slice()), S.unshift(0), (b = P[0]), P[1] >= Se / 2 && ++b);
      do
        ((f = 0),
          (u = t(P, v, O, p)),
          u < 0
            ? ((g = v[0]),
              O != p && (g = g * Se + (v[1] || 0)),
              (f = (g / b) | 0),
              f > 1
                ? (f >= Se && (f = Se - 1),
                  (l = e(P, f)),
                  (h = l.length),
                  (p = v.length),
                  (u = t(l, v, h, p)),
                  u == 1 && (f--, r(l, O < h ? S : P, h)))
                : (f == 0 && (u = f = 1), (l = P.slice())),
              (h = l.length),
              h < p && l.unshift(0),
              r(v, l, p),
              u == -1 &&
                ((p = v.length), (u = t(P, v, O, p)), u < 1 && (f++, r(v, O < p ? S : P, p))),
              (p = v.length))
            : u === 0 && (f++, (v = [0])),
          (y[c++] = f),
          u && v[0] ? (v[p++] = T[_] || 0) : ((v = [T[_]]), (p = 1)));
      while ((_++ < m || v[0] !== void 0) && x--);
    }
    return (y[0] || y.shift(), (d.e = s), oe(d, o ? a + me(d) + 1 : a));
  };
})();
function O0(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s = 0,
    c = 0,
    f = e.constructor,
    l = f.precision;
  if (me(e) > 16) throw Error(Gf + me(e));
  if (!e.s) return new f(Le);
  for (he = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); ) ((e = e.times(o)), (c += 5));
  for (
    n = ((Math.log(It(2, c)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(Le),
      f.precision = u;
    ;
  ) {
    if (
      ((i = oe(i.times(e), u)),
      (r = r.times(++s)),
      (o = a.plus(lt(i, r, u))),
      et(o.d).slice(0, u) === et(a.d).slice(0, u))
    ) {
      for (; c--; ) a = oe(a.times(a), u);
      return ((f.precision = l), t == null ? ((he = !0), oe(a, l)) : a);
    }
    a = o;
  }
}
function me(e) {
  for (var t = e.e * ce, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function oc(e, t, r) {
  if (t > e.LN10.sd())
    throw ((he = !0), r && (e.precision = r), Error(He + "LN10 precision limit exceeded"));
  return oe(new e(e.LN10), t);
}
function gt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function fn(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l = 1,
    h = 10,
    d = e,
    y = d.d,
    v = d.constructor,
    p = v.precision;
  if (d.s < 1) throw Error(He + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Le)) return new v(0);
  if ((t == null ? ((he = !1), (c = p)) : (c = t), d.eq(10)))
    return (t == null && (he = !0), oc(v, c));
  if (
    ((c += h), (v.precision = c), (r = et(y)), (n = r.charAt(0)), (a = me(d)), Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((d = d.times(e)), (r = et(d.d)), (n = r.charAt(0)), l++);
    ((a = me(d)), n > 1 ? ((d = new v("0." + r)), a++) : (d = new v(n + "." + r.slice(1))));
  } else
    return (
      (s = oc(v, c + 2, p).times(a + "")),
      (d = fn(new v(n + "." + r.slice(1)), c - h).plus(s)),
      (v.precision = p),
      t == null ? ((he = !0), oe(d, p)) : d
    );
  for (u = o = d = lt(d.minus(Le), d.plus(Le), c), f = oe(d.times(d), c), i = 3; ; ) {
    if (
      ((o = oe(o.times(f), c)),
      (s = u.plus(lt(o, new v(i), c))),
      et(s.d).slice(0, c) === et(u.d).slice(0, c))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(oc(v, c + 2, p).times(a + ""))),
        (u = lt(u, new v(l), c)),
        (v.precision = p),
        t == null ? ((he = !0), oe(u, p)) : u
      );
    ((u = s), (i += 2));
  }
}
function Fy(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = Nr(r / ce)),
      (e.d = []),
      (n = (r + 1) % ce),
      r < 0 && (n += ce),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= ce; n < i; ) e.d.push(+t.slice(n, (n += ce)));
      ((t = t.slice(n)), (n = ce - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), he && (e.e > Ei || e.e < -Ei))) throw Error(Gf + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function oe(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += ce), (i = t), (c = l[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / ce)), (a = l.length), f >= a)) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= ce), (i = n - ce + o));
  }
  if (
    (r !== void 0 &&
      ((a = It(10, o - i - 1)),
      (u = ((c / a) % 10) | 0),
      (s = t < 0 || l[f + 1] !== void 0 || c % a),
      (s =
        r < 4
          ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                s ||
                (r == 6 && ((n > 0 ? (i > 0 ? c / It(10, o - i) : 0) : l[f - 1]) % 10) & 1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !l[0])
  )
    return (
      s
        ? ((a = me(e)),
          (l.length = 1),
          (t = t - a - 1),
          (l[0] = It(10, (ce - (t % ce)) % ce)),
          (e.e = Nr(-t / ce) || 0))
        : ((l.length = 1), (l[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((l.length = f), (a = 1), f--)
      : ((l.length = f + 1),
        (a = It(10, ce - n)),
        (l[f] = i > 0 ? (((c / It(10, o - i)) % It(10, i)) | 0) * a : 0)),
    s)
  )
    for (;;)
      if (f == 0) {
        (l[0] += a) == Se && ((l[0] = 1), ++e.e);
        break;
      } else {
        if (((l[f] += a), l[f] != Se)) break;
        ((l[f--] = 0), (a = 1));
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (he && (e.e > Ei || e.e < -Ei)) throw Error(Gf + me(e));
  return e;
}
function S0(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l,
    h = e.constructor,
    d = h.precision;
  if (!e.s || !t.s) return (t.s ? (t.s = -t.s) : (t = new h(e)), he ? oe(t, d) : t);
  if (((s = e.d), (l = t.d), (n = t.e), (c = e.e), (s = s.slice()), (o = c - n), o)) {
    for (
      f = o < 0,
        f ? ((r = s), (o = -o), (u = l.length)) : ((r = l), (n = c), (u = s.length)),
        i = Math.max(Math.ceil(d / ce), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != l[i]) {
        f = s[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && ((r = s), (s = l), (l = r), (t.s = -t.s)), u = s.length, i = l.length - u; i > 0; --i)
    s[u++] = 0;
  for (i = l.length; i > o; ) {
    if (s[--i] < l[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Se - 1;
      (--s[a], (s[i] += Se));
    }
    s[i] -= l[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? ((t.d = s), (t.e = n), he ? oe(t, d) : t) : new h(0);
}
function Wt(e, t, r) {
  var n,
    i = me(e),
    a = et(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + gt(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + gt(-i - 1) + a), r && (n = r - o) > 0 && (a += gt(n)))
        : i >= o
          ? ((a += gt(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + "." + gt(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += gt(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Uy(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function A0(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Lt + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return Fy(o, a.toString());
    } else if (typeof a != "string") throw Error(Lt + a);
    if ((a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1), cE.test(a))) Fy(o, a);
    else throw Error(Lt + a);
  }
  if (
    ((i.prototype = z),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = A0),
    (i.config = i.set = lE),
    e === void 0 && (e = {}),
    e)
  )
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function lE(e) {
  if (!e || typeof e != "object") throw Error(He + "Object expected");
  var t,
    r,
    n,
    i = ["precision", 1, $r, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (Nr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Lt + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Lt + r + ": " + n);
  return this;
}
var Kf = A0(sE);
Le = new Kf(1);
const ae = Kf;
function fE(e) {
  return vE(e) || dE(e) || pE(e) || hE();
}
function hE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pE(e, t) {
  if (e) {
    if (typeof e == "string") return fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fl(e, t);
  }
}
function dE(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function vE(e) {
  if (Array.isArray(e)) return fl(e);
}
function fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var yE = function (t) {
    return t;
  },
  P0 = {},
  T0 = function (t) {
    return t === P0;
  },
  Wy = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 && T0(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  mE = function e(t, r) {
    return t === 1
      ? r
      : Wy(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== P0;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Wy(function () {
                  for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
                    s[c] = arguments[c];
                  var f = i.map(function (l) {
                    return T0(l) ? s.shift() : l;
                  });
                  return r.apply(void 0, fE(f).concat(s));
                }),
              );
        });
  },
  _a = function (t) {
    return mE(t.length, t);
  },
  hl = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  gE = _a(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  bE = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    if (!r.length) return yE;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, s) {
          return s(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  pl = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  E0 = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, s) {
            return u === r[s];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function xE(e) {
  var t;
  return (e === 0 ? (t = 1) : (t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1), t);
}
function wE(e, t, r) {
  for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var _E = _a(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  OE = _a(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), (r - e) / n);
  }),
  SE = _a(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
  });
const Oa = {
  rangeStep: wE,
  getDigitCount: xE,
  interpolateNumber: _E,
  uninterpolateNumber: OE,
  uninterpolateTruncation: SE,
};
function dl(e) {
  return TE(e) || PE(e) || j0(e) || AE();
}
function AE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PE(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function TE(e) {
  if (Array.isArray(e)) return vl(e);
}
function hn(e, t) {
  return ME(e) || jE(e, t) || j0(e, t) || EE();
}
function EE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j0(e, t) {
  if (e) {
    if (typeof e == "string") return vl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vl(e, t);
  }
}
function vl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jE(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      ((i = !0), (a = s));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function ME(e) {
  if (Array.isArray(e)) return e;
}
function M0(e) {
  var t = hn(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function C0(e, t, r) {
  if (e.lte(0)) return new ae(0);
  var n = Oa.getDigitCount(e.toNumber()),
    i = new ae(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    s = u.mul(i);
  return t ? s : new ae(Math.ceil(s));
}
function CE(e, t, r) {
  var n = 1,
    i = new ae(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new ae(10).pow(Oa.getDigitCount(e) - 1)),
        (i = new ae(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new ae(Math.floor(e)));
  } else e === 0 ? (i = new ae(Math.floor((t - 1) / 2))) : r || (i = new ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = bE(
      gE(function (s) {
        return i.add(new ae(s - o).mul(n)).toNumber();
      }),
      hl,
    );
  return u(0, t);
}
function I0(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new ae(0), tickMin: new ae(0), tickMax: new ae(0) };
  var a = C0(new ae(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new ae(0))
    : ((o = new ae(e).add(t).div(2)), (o = o.sub(new ae(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    s = Math.ceil(new ae(t).sub(o).div(a).toNumber()),
    c = u + s + 1;
  return c > r
    ? I0(e, t, r, n, i + 1)
    : (c < r && ((s = t > 0 ? s + (r - c) : s), (u = t > 0 ? u : u + (r - c))),
      { step: a, tickMin: o.sub(new ae(u).mul(a)), tickMax: o.add(new ae(s).mul(a)) });
}
function IE(e) {
  var t = hn(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = M0([r, n]),
    s = hn(u, 2),
    c = s[0],
    f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l =
      f === 1 / 0
        ? [c].concat(
            dl(
              hl(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            dl(
              hl(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? pl(l) : l;
  }
  if (c === f) return CE(c, i, a);
  var h = I0(c, f, o, a),
    d = h.step,
    y = h.tickMin,
    v = h.tickMax,
    p = Oa.rangeStep(y, v.add(new ae(0.1).mul(d)), d);
  return r > n ? pl(p) : p;
}
function $E(e, t) {
  var r = hn(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = M0([n, i]),
    u = hn(o, 2),
    s = u[0],
    c = u[1];
  if (s === -1 / 0 || c === 1 / 0) return [n, i];
  if (s === c) return [s];
  var f = Math.max(t, 2),
    l = C0(new ae(c).sub(s).div(f - 1), a, 0),
    h = [].concat(dl(Oa.rangeStep(new ae(s), new ae(c).sub(new ae(0.99).mul(l)), l)), [c]);
  return n > i ? pl(h) : h;
}
var NE = E0(IE),
  kE = E0($E),
  RE = "Invariant failed";
function zt(e, t) {
  throw new Error(RE);
}
var DE = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function yr(e) {
  "@babel/helpers - typeof";
  return (
    (yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yr(e)
  );
}
function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ji.apply(this, arguments)
  );
}
function qE(e, t) {
  return UE(e) || FE(e, t) || BE(e, t) || LE();
}
function LE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BE(e, t) {
  if (e) {
    if (typeof e == "string") return zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zy(e, t);
  }
}
function zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FE(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function UE(e) {
  if (Array.isArray(e)) return e;
}
function WE(e, t) {
  if (e == null) return {};
  var r = zE(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function zE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function HE(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function GE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, k0(n.key), n));
  }
}
function KE(e, t, r) {
  return (t && GE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function XE(e, t, r) {
  return (
    (t = Mi(t)),
    VE(e, $0() ? Reflect.construct(t, r || [], Mi(e).constructor) : t.apply(e, r))
  );
}
function VE(e, t) {
  if (t && (yr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return YE(e);
}
function YE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($0 = function () {
    return !!e;
  })();
}
function Mi(e) {
  return (
    (Mi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Mi(e)
  );
}
function ZE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && yl(e, t));
}
function yl(e, t) {
  return (
    (yl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    yl(e, t)
  );
}
function N0(e, t, r) {
  return (
    (t = k0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function k0(e) {
  var t = JE(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function JE(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Sa = (function (e) {
  function t() {
    return (HE(this, t), XE(this, t, arguments));
  }
  return (
    ZE(t, e),
    KE(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            s = n.data,
            c = n.dataPointFormatter,
            f = n.xAxis,
            l = n.yAxis,
            h = WE(n, DE),
            d = ie(h, !1);
          this.props.direction === "x" && f.type !== "number" && zt();
          var y = s.map(function (v) {
            var p = c(v, u),
              g = p.x,
              x = p.y,
              w = p.value,
              _ = p.errorVal;
            if (!_) return null;
            var m = [],
              b,
              O;
            if (Array.isArray(_)) {
              var S = qE(_, 2);
              ((b = S[0]), (O = S[1]));
            } else b = O = _;
            if (a === "vertical") {
              var A = f.scale,
                $ = x + i,
                T = $ + o,
                P = $ - o,
                j = A(w - b),
                C = A(w + O);
              (m.push({ x1: C, y1: T, x2: C, y2: P }),
                m.push({ x1: j, y1: $, x2: C, y2: $ }),
                m.push({ x1: j, y1: T, x2: j, y2: P }));
            } else if (a === "horizontal") {
              var M = l.scale,
                N = g + i,
                R = N - o,
                L = N + o,
                F = M(w - b),
                H = M(w + O);
              (m.push({ x1: R, y1: H, x2: L, y2: H }),
                m.push({ x1: N, y1: F, x2: N, y2: H }),
                m.push({ x1: R, y1: F, x2: L, y2: F }));
            }
            return E.createElement(
              Ae,
              ji(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    m.map(function (K) {
                      return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
                    }),
                  ),
                },
                d,
              ),
              m.map(function (K) {
                return E.createElement(
                  "line",
                  ji({}, K, {
                    key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2),
                  }),
                );
              }),
            );
          });
          return E.createElement(Ae, { className: "recharts-errorBars" }, y);
        },
      },
    ])
  );
})(E.Component);
N0(Sa, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
N0(Sa, "displayName", "ErrorBar");
function pn(e) {
  "@babel/helpers - typeof";
  return (
    (pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pn(e)
  );
}
function Hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hy(Object(r), !0).forEach(function (n) {
          QE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function QE(e, t, r) {
  return (
    (t = ej(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ej(e) {
  var t = tj(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function tj(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var R0 = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = qe(r, ar);
  if (!o) return null;
  var u = ar.defaultProps,
    s = u !== void 0 ? Mt(Mt({}, u), o.props) : {},
    c;
  return (
    o.props && o.props.payload
      ? (c = o.props && o.props.payload)
      : a === "children"
        ? (c = (n || []).reduce(function (f, l) {
            var h = l.item,
              d = l.props,
              y = d.sectors || d.data || [];
            return f.concat(
              y.map(function (v) {
                return {
                  type: o.props.iconType || h.props.legendType,
                  value: v.name,
                  color: v.fill,
                  payload: v,
                };
              }),
            );
          }, []))
        : (c = (n || []).map(function (f) {
            var l = f.item,
              h = l.type.defaultProps,
              d = h !== void 0 ? Mt(Mt({}, h), l.props) : {},
              y = d.dataKey,
              v = d.name,
              p = d.legendType,
              g = d.hide;
            return {
              inactive: g,
              dataKey: y,
              type: s.iconType || p || "square",
              color: Xf(l),
              value: v || y,
              payload: d,
            };
          })),
    Mt(Mt(Mt({}, s), ar.getWithHeight(o, i)), {}, { payload: c, item: o })
  );
};
function dn(e) {
  "@babel/helpers - typeof";
  return (
    (dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dn(e)
  );
}
function Gy(e) {
  return aj(e) || ij(e) || nj(e) || rj();
}
function rj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nj(e, t) {
  if (e) {
    if (typeof e == "string") return ml(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ml(e, t);
  }
}
function ij(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function aj(e) {
  if (Array.isArray(e)) return ml(e);
}
function ml(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ky(Object(r), !0).forEach(function (n) {
          ur(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ky(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ur(e, t, r) {
  return (
    (t = oj(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function oj(e) {
  var t = uj(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function uj(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function it(e, t, r) {
  return te(e) || te(t) ? r : _e(t) ? ze(e, t, r) : Z(t) ? t(e) : r;
}
function Yr(e, t, r, n) {
  var i = aE(e, function (u) {
    return it(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return B(u) || parseFloat(u);
    });
    return a.length ? [wa(a), xa(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !te(u);
      })
    : i;
  return o.map(function (u) {
    return _e(u) || u instanceof Date ? u : "";
  });
}
var sj = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n?.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var s = a.range, c = 0; c < u; c++) {
        var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate,
          l = i[c].coordinate,
          h = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate,
          d = void 0;
        if (Ye(l - f) !== Ye(h - l)) {
          var y = [];
          if (Ye(h - l) === Ye(s[1] - s[0])) {
            d = h;
            var v = l + s[1] - s[0];
            ((y[0] = Math.min(v, (v + f) / 2)), (y[1] = Math.max(v, (v + f) / 2)));
          } else {
            d = f;
            var p = h + s[1] - s[0];
            ((y[0] = Math.min(l, (p + l) / 2)), (y[1] = Math.max(l, (p + l) / 2)));
          }
          var g = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
          if ((t > g[0] && t <= g[1]) || (t >= y[0] && t <= y[1])) {
            o = i[c].index;
            break;
          }
        } else {
          var x = Math.min(f, h),
            w = Math.max(f, h);
          if (t > (x + l) / 2 && t <= (w + l) / 2) {
            o = i[c].index;
            break;
          }
        }
      }
    else
      for (var _ = 0; _ < u; _++)
        if (
          (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2) ||
          (_ > 0 &&
            _ < u - 1 &&
            t > (n[_].coordinate + n[_ - 1].coordinate) / 2 &&
            t <= (n[_].coordinate + n[_ + 1].coordinate) / 2) ||
          (_ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2)
        ) {
          o = n[_].index;
          break;
        }
    return o;
  },
  Xf = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      s;
    switch (i) {
      case "Line":
        s = o;
        break;
      case "Area":
      case "Radar":
        s = o && o !== "none" ? o : u;
        break;
      default:
        s = u;
        break;
    }
    return s;
  },
  cj = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
      for (var f = a[u[s]].stackGroups, l = Object.keys(f), h = 0, d = l.length; h < d; h++) {
        var y = f[l[h]],
          v = y.items,
          p = y.cateAxisId,
          g = v.filter(function (O) {
            return ct(O.type).indexOf("Bar") >= 0;
          });
        if (g && g.length) {
          var x = g[0].type.defaultProps,
            w = x !== void 0 ? de(de({}, x), g[0].props) : g[0].props,
            _ = w.barSize,
            m = w[p];
          o[m] || (o[m] = []);
          var b = te(_) ? r : _;
          o[m].push({ item: g[0], stackList: g.slice(1), barSize: te(b) ? void 0 : Ut(b, n, 0) });
        }
      }
    return o;
  },
  lj = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      s = o.length;
    if (s < 1) return null;
    var c = Ut(r, i, 0, !0),
      f,
      l = [];
    if (o[0].barSize === +o[0].barSize) {
      var h = !1,
        d = i / s,
        y = o.reduce(function (_, m) {
          return _ + m.barSize || 0;
        }, 0);
      ((y += (s - 1) * c),
        y >= i && ((y -= (s - 1) * c), (c = 0)),
        y >= i && d > 0 && ((h = !0), (d *= 0.9), (y = s * d)));
      var v = ((i - y) / 2) >> 0,
        p = { offset: v - c, size: 0 };
      f = o.reduce(function (_, m) {
        var b = {
            item: m.item,
            position: { offset: p.offset + p.size + c, size: h ? d : m.barSize },
          },
          O = [].concat(Gy(_), [b]);
        return (
          (p = O[O.length - 1].position),
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              O.push({ item: S, position: p });
            }),
          O
        );
      }, l);
    } else {
      var g = Ut(n, i, 0, !0);
      i - 2 * g - (s - 1) * c <= 0 && (c = 0);
      var x = (i - 2 * g - (s - 1) * c) / s;
      x > 1 && (x >>= 0);
      var w = u === +u ? Math.min(x, u) : x;
      f = o.reduce(function (_, m, b) {
        var O = [].concat(Gy(_), [
          { item: m.item, position: { offset: g + (x + c) * b + (x - w) / 2, size: w } },
        ]);
        return (
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              O.push({ item: S, position: O[O.length - 1].position });
            }),
          O
        );
      }, l);
    }
    return f;
  },
  fj = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      s = o - (u.left || 0) - (u.right || 0),
      c = R0({ children: a, legendWidth: s });
    if (c) {
      var f = i || {},
        l = f.width,
        h = f.height,
        d = c.align,
        y = c.verticalAlign,
        v = c.layout;
      if ((v === "vertical" || (v === "horizontal" && y === "middle")) && d !== "center" && B(t[d]))
        return de(de({}, t), {}, ur({}, d, t[d] + (l || 0)));
      if ((v === "horizontal" || (v === "vertical" && d === "center")) && y !== "middle" && B(t[y]))
        return de(de({}, t), {}, ur({}, y, t[y] + (h || 0)));
    }
    return t;
  },
  hj = function (t, r, n) {
    return te(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  D0 = function (t, r, n, i, a) {
    var o = r.props.children,
      u = Ze(o, Sa).filter(function (c) {
        return hj(i, a, c.props.direction);
      });
    if (u && u.length) {
      var s = u.map(function (c) {
        return c.props.dataKey;
      });
      return t.reduce(
        function (c, f) {
          var l = it(f, n);
          if (te(l)) return c;
          var h = Array.isArray(l) ? [wa(l), xa(l)] : [l, l],
            d = s.reduce(
              function (y, v) {
                var p = it(f, v, 0),
                  g = h[0] - Math.abs(Array.isArray(p) ? p[0] : p),
                  x = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
                return [Math.min(g, y[0]), Math.max(x, y[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(d[0], c[0]), Math.max(d[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  pj = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return D0(t, u, n, a, i);
      })
      .filter(function (u) {
        return !te(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, s) {
            return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  q0 = function (t, r, n, i, a) {
    var o = r.map(function (s) {
      var c = s.props.dataKey;
      return (n === "number" && c && D0(t, s, c, i)) || Yr(t, c, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (s, c) {
          return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (s, c) {
      for (var f = 0, l = c.length; f < l; f++) u[c[f]] || ((u[c[f]] = !0), s.push(c[f]));
      return s;
    }, []);
  },
  L0 = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  Rt = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
    if (
      ((c = t.axisType === "angleAxis" && u?.length >= 2 ? Ye(u[0] - u[1]) * 2 * c : c),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (l) {
        var h = a ? a.indexOf(l) : l;
        return { coordinate: i(h) + c, value: l, offset: c };
      });
      return f.filter(function (l) {
        return !kn(l.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (l, h) {
          return { coordinate: i(l) + c, value: l, index: h, offset: c };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (l) {
            return { coordinate: i(l) + c, value: l, offset: c };
          })
        : i.domain().map(function (l, h) {
            return { coordinate: i(l) + c, value: a ? a[l] : l, index: h, offset: c };
          });
  },
  uc = new WeakMap(),
  Zn = function (t, r) {
    if (typeof r != "function") return t;
    uc.has(t) || uc.set(t, new WeakMap());
    var n = uc.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (t.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  dj = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: on(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
          ? { scale: Si(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: Vr(), realScaleType: "point" }
            : a === "category"
              ? { scale: on(), realScaleType: "band" }
              : { scale: Si(), realScaleType: "linear" };
    if (Ft(i)) {
      var s = "scale".concat(ua(i));
      return { scale: (Iy[s] || Vr)(), realScaleType: Iy[s] ? s : "point" };
    }
    return Z(i) ? { scale: i } : { scale: Vr(), realScaleType: "point" };
  },
  Xy = 1e-4,
  vj = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - Xy,
        o = Math.max(i[0], i[1]) + Xy,
        u = t(r[0]),
        s = t(r[n - 1]);
      (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  yj = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
    return null;
  },
  mj = function (t, r) {
    if (!r || r.length !== 2 || !B(r[0]) || !B(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!B(t[0]) || t[0] < n) && (a[0] = n),
      (!B(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  gj = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var s = kn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          s >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + s), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + s), (o = t[u][n][1]));
        }
  },
  bj = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = kn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  xj = { sign: gj, expand: r_, none: sr, silhouette: n_, wiggle: i_, positive: bj },
  wj = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = xj[n],
      o = t_()
        .keys(i)
        .value(function (u, s) {
          return +it(u, s, 0);
        })
        .order(Kc)
        .offset(a);
    return o(t);
  },
  _j = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      s = {},
      c = u.reduce(function (l, h) {
        var d,
          y =
            (d = h.type) !== null && d !== void 0 && d.defaultProps
              ? de(de({}, h.type.defaultProps), h.props)
              : h.props,
          v = y.stackId,
          p = y.hide;
        if (p) return l;
        var g = y[n],
          x = l[g] || { hasStack: !1, stackGroups: {} };
        if (_e(v)) {
          var w = x.stackGroups[v] || { numericAxisId: n, cateAxisId: i, items: [] };
          (w.items.push(h), (x.hasStack = !0), (x.stackGroups[v] = w));
        } else x.stackGroups[oa("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
        return de(de({}, l), {}, ur({}, g, x));
      }, s),
      f = {};
    return Object.keys(c).reduce(function (l, h) {
      var d = c[h];
      if (d.hasStack) {
        var y = {};
        d.stackGroups = Object.keys(d.stackGroups).reduce(function (v, p) {
          var g = d.stackGroups[p];
          return de(
            de({}, v),
            {},
            ur({}, p, {
              numericAxisId: n,
              cateAxisId: i,
              items: g.items,
              stackedData: wj(t, g.items, a),
            }),
          );
        }, y);
      }
      return de(de({}, l), {}, ur({}, h, d));
    }, f);
  },
  Oj = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      s = n || r.scale;
    if (s !== "auto" && s !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var c = t.domain();
      if (!c.length) return null;
      var f = NE(c, a, u);
      return (t.domain([wa(f), xa(f)]), { niceTicks: f });
    }
    if (a && i === "number") {
      var l = t.domain(),
        h = kE(l, a, u);
      return { niceTicks: h };
    }
    return null;
  },
  Vy = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var s = it(o, r.dataKey, r.domain[u]);
    return te(s) ? null : r.scale(s) - a / 2 + i;
  },
  Sj = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  Aj = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (_e(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  Pj = function (t) {
    return t.reduce(
      function (r, n) {
        return [wa(n.concat([r[0]]).filter(B)), xa(n.concat([r[1]]).filter(B))];
      },
      [1 / 0, -1 / 0],
    );
  },
  B0 = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            s = u.reduce(
              function (c, f) {
                var l = Pj(f.slice(r, n + 1));
                return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  Yy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Zy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  gl = function (t, r, n) {
    if (Z(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (B(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (Yy.test(t[0])) {
      var a = +Yy.exec(t[0])[1];
      i[0] = r[0] - a;
    } else Z(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (B(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (Zy.test(t[1])) {
      var o = +Zy.exec(t[1])[1];
      i[1] = r[1] + o;
    } else Z(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  Ci = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = xf(r, function (l) {
            return l.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          s = a.length;
        u < s;
        u++
      ) {
        var c = a[u],
          f = a[u - 1];
        o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  Jy = function (t, r, n) {
    return !t || !t.length || Hf(t, ze(n, "type.defaultProps.domain")) ? r : t;
  },
  F0 = function (t, r) {
    var n = t.type.defaultProps ? de(de({}, t.type.defaultProps), t.props) : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      s = n.tooltipType,
      c = n.chartType,
      f = n.hide;
    return de(
      de({}, ie(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Xf(t),
        value: it(r, i),
        type: s,
        payload: r,
        chartType: c,
        hide: f,
      },
    );
  };
function vn(e) {
  "@babel/helpers - typeof";
  return (
    (vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vn(e)
  );
}
function Qy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qy(Object(r), !0).forEach(function (n) {
          Tj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Tj(e, t, r) {
  return (
    (t = Ej(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ej(e) {
  var t = jj(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function jj(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ii = Math.PI / 180,
  Mj = function (t) {
    return (t * 180) / Math.PI;
  },
  Ee = function (t, r, n, i) {
    return { x: t + Math.cos(-Ii * i) * n, y: r + Math.sin(-Ii * i) * n };
  },
  Cj = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  Ij = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = Cj({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var s = (n - a) / u,
      c = Math.acos(s);
    return (i > o && (c = 2 * Math.PI - c), { radius: u, angle: Mj(c), angleInRadian: c });
  },
  $j = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  Nj = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  tm = function (t, r) {
    var n = t.x,
      i = t.y,
      a = Ij({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      s = r.innerRadius,
      c = r.outerRadius;
    if (o < s || o > c) return !1;
    if (o === 0) return !0;
    var f = $j(r),
      l = f.startAngle,
      h = f.endAngle,
      d = u,
      y;
    if (l <= h) {
      for (; d > h; ) d -= 360;
      for (; d < l; ) d += 360;
      y = d >= l && d <= h;
    } else {
      for (; d > l; ) d -= 360;
      for (; d < h; ) d += 360;
      y = d >= h && d <= l;
    }
    return y ? em(em({}, r), {}, { radius: o, angle: Nj(d, r) }) : null;
  };
function yn(e) {
  "@babel/helpers - typeof";
  return (
    (yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yn(e)
  );
}
var kj = ["offset"];
function Rj(e) {
  return Bj(e) || Lj(e) || qj(e) || Dj();
}
function Dj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qj(e, t) {
  if (e) {
    if (typeof e == "string") return bl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bl(e, t);
  }
}
function Lj(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Bj(e) {
  if (Array.isArray(e)) return bl(e);
}
function bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fj(e, t) {
  if (e == null) return {};
  var r = Uj(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function Uj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rm(Object(r), !0).forEach(function (n) {
          Wj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Wj(e, t, r) {
  return (
    (t = zj(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function zj(e) {
  var t = Hj(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function Hj(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mn() {
  return (
    (mn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    mn.apply(this, arguments)
  );
}
var Gj = function (t) {
    var r = t.value,
      n = t.formatter,
      i = te(t.children) ? r : t.children;
    return Z(n) ? n(i) : i;
  },
  Kj = function (t, r) {
    var n = Ye(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  Xj = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      s = a,
      c = s.cx,
      f = s.cy,
      l = s.innerRadius,
      h = s.outerRadius,
      d = s.startAngle,
      y = s.endAngle,
      v = s.clockWise,
      p = (l + h) / 2,
      g = Kj(d, y),
      x = g >= 0 ? 1 : -1,
      w,
      _;
    (i === "insideStart"
      ? ((w = d + x * o), (_ = v))
      : i === "insideEnd"
        ? ((w = y - x * o), (_ = !v))
        : i === "end" && ((w = y + x * o), (_ = v)),
      (_ = g <= 0 ? _ : !_));
    var m = Ee(c, f, p, w),
      b = Ee(c, f, p, w + (_ ? 1 : -1) * 359),
      O = "M"
        .concat(m.x, ",")
        .concat(
          m.y,
          `
    A`,
        )
        .concat(p, ",")
        .concat(p, ",0,1,")
        .concat(
          _ ? 0 : 1,
          `,
    `,
        )
        .concat(b.x, ",")
        .concat(b.y),
      S = te(t.id) ? oa("recharts-radial-line-") : t.id;
    return E.createElement(
      "text",
      mn({}, n, { dominantBaseline: "central", className: ee("recharts-radial-bar-label", u) }),
      E.createElement("defs", null, E.createElement("path", { id: S, d: O })),
      E.createElement("textPath", { xlinkHref: "#".concat(S) }, r),
    );
  },
  Vj = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      s = a.innerRadius,
      c = a.outerRadius,
      f = a.startAngle,
      l = a.endAngle,
      h = (f + l) / 2;
    if (i === "outside") {
      var d = Ee(o, u, c + n, h),
        y = d.x,
        v = d.y;
      return { x: y, y: v, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
    }
    if (i === "center") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var p = (s + c) / 2,
      g = Ee(o, u, p, h),
      x = g.x,
      w = g.y;
    return { x, y: w, textAnchor: "middle", verticalAnchor: "middle" };
  },
  Yj = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      s = o.y,
      c = o.width,
      f = o.height,
      l = f >= 0 ? 1 : -1,
      h = l * i,
      d = l > 0 ? "end" : "start",
      y = l > 0 ? "start" : "end",
      v = c >= 0 ? 1 : -1,
      p = v * i,
      g = v > 0 ? "end" : "start",
      x = v > 0 ? "start" : "end";
    if (a === "top") {
      var w = { x: u + c / 2, y: s - l * i, textAnchor: "middle", verticalAnchor: d };
      return we(we({}, w), n ? { height: Math.max(s - n.y, 0), width: c } : {});
    }
    if (a === "bottom") {
      var _ = { x: u + c / 2, y: s + f + h, textAnchor: "middle", verticalAnchor: y };
      return we(we({}, _), n ? { height: Math.max(n.y + n.height - (s + f), 0), width: c } : {});
    }
    if (a === "left") {
      var m = { x: u - p, y: s + f / 2, textAnchor: g, verticalAnchor: "middle" };
      return we(we({}, m), n ? { width: Math.max(m.x - n.x, 0), height: f } : {});
    }
    if (a === "right") {
      var b = { x: u + c + p, y: s + f / 2, textAnchor: x, verticalAnchor: "middle" };
      return we(we({}, b), n ? { width: Math.max(n.x + n.width - b.x, 0), height: f } : {});
    }
    var O = n ? { width: c, height: f } : {};
    return a === "insideLeft"
      ? we({ x: u + p, y: s + f / 2, textAnchor: x, verticalAnchor: "middle" }, O)
      : a === "insideRight"
        ? we({ x: u + c - p, y: s + f / 2, textAnchor: g, verticalAnchor: "middle" }, O)
        : a === "insideTop"
          ? we({ x: u + c / 2, y: s + h, textAnchor: "middle", verticalAnchor: y }, O)
          : a === "insideBottom"
            ? we({ x: u + c / 2, y: s + f - h, textAnchor: "middle", verticalAnchor: d }, O)
            : a === "insideTopLeft"
              ? we({ x: u + p, y: s + h, textAnchor: x, verticalAnchor: y }, O)
              : a === "insideTopRight"
                ? we({ x: u + c - p, y: s + h, textAnchor: g, verticalAnchor: y }, O)
                : a === "insideBottomLeft"
                  ? we({ x: u + p, y: s + f - h, textAnchor: x, verticalAnchor: d }, O)
                  : a === "insideBottomRight"
                    ? we({ x: u + c - p, y: s + f - h, textAnchor: g, verticalAnchor: d }, O)
                    : Mr(a) && (B(a.x) || $t(a.x)) && (B(a.y) || $t(a.y))
                      ? we(
                          {
                            x: u + Ut(a.x, c),
                            y: s + Ut(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          O,
                        )
                      : we(
                          {
                            x: u + c / 2,
                            y: s + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          O,
                        );
  },
  Zj = function (t) {
    return "cx" in t && B(t.cx);
  };
function Me(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = Fj(e, kj),
    i = we({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    s = i.children,
    c = i.content,
    f = i.className,
    l = f === void 0 ? "" : f,
    h = i.textBreakAll;
  if (!a || (te(u) && te(s) && !D.isValidElement(c) && !Z(c))) return null;
  if (D.isValidElement(c)) return D.cloneElement(c, i);
  var d;
  if (Z(c)) {
    if (((d = D.createElement(c, i)), D.isValidElement(d))) return d;
  } else d = Gj(i);
  var y = Zj(a),
    v = ie(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return Xj(i, d, v);
  var p = y ? Vj(i) : Yj(i);
  return E.createElement(yi, mn({ className: ee("recharts-label", l) }, v, p, { breakAll: h }), d);
}
Me.displayName = "Label";
var U0 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      s = t.radius,
      c = t.innerRadius,
      f = t.outerRadius,
      l = t.x,
      h = t.y,
      d = t.top,
      y = t.left,
      v = t.width,
      p = t.height,
      g = t.clockWise,
      x = t.labelViewBox;
    if (x) return x;
    if (B(v) && B(p)) {
      if (B(l) && B(h)) return { x: l, y: h, width: v, height: p };
      if (B(d) && B(y)) return { x: d, y, width: v, height: p };
    }
    return B(l) && B(h)
      ? { x: l, y: h, width: 0, height: 0 }
      : B(r) && B(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: c || 0,
            outerRadius: f || s || u || 0,
            clockWise: g,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  Jj = function (t, r) {
    return t
      ? t === !0
        ? E.createElement(Me, { key: "label-implicit", viewBox: r })
        : _e(t)
          ? E.createElement(Me, { key: "label-implicit", viewBox: r, value: t })
          : D.isValidElement(t)
            ? t.type === Me
              ? D.cloneElement(t, { key: "label-implicit", viewBox: r })
              : E.createElement(Me, { key: "label-implicit", content: t, viewBox: r })
            : Z(t)
              ? E.createElement(Me, { key: "label-implicit", content: t, viewBox: r })
              : Mr(t)
                ? E.createElement(Me, mn({ viewBox: r }, t, { key: "label-implicit" }))
                : null
      : null;
  },
  Qj = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = U0(t),
      o = Ze(i, Me).map(function (s, c) {
        return D.cloneElement(s, { viewBox: r || a, key: "label-".concat(c) });
      });
    if (!n) return o;
    var u = Jj(t.label, r || a);
    return [u].concat(Rj(o));
  };
Me.parseViewBox = U0;
Me.renderCallByParent = Qj;
var sc, nm;
function eM() {
  if (nm) return sc;
  nm = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return ((sc = e), sc);
}
var tM = eM();
const rM = le(tM);
function gn(e) {
  "@babel/helpers - typeof";
  return (
    (gn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gn(e)
  );
}
var nM = ["valueAccessor"],
  iM = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function aM(e) {
  return cM(e) || sM(e) || uM(e) || oM();
}
function oM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uM(e, t) {
  if (e) {
    if (typeof e == "string") return xl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xl(e, t);
  }
}
function sM(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function cM(e) {
  if (Array.isArray(e)) return xl(e);
}
function xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $i() {
  return (
    ($i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $i.apply(this, arguments)
  );
}
function im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function am(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? im(Object(r), !0).forEach(function (n) {
          lM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : im(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function lM(e, t, r) {
  return (
    (t = fM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function fM(e) {
  var t = hM(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function hM(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function om(e, t) {
  if (e == null) return {};
  var r = pM(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function pM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var dM = function (t) {
  return Array.isArray(t.value) ? rM(t.value) : t.value;
};
function Bt(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? dM : t,
    n = om(e, nM),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    s = n.textBreakAll,
    c = om(n, iM);
  return !i || !i.length
    ? null
    : E.createElement(
        Ae,
        { className: "recharts-label-list" },
        i.map(function (f, l) {
          var h = te(a) ? r(f, l) : it(f && f.payload, a),
            d = te(u) ? {} : { id: "".concat(u, "-").concat(l) };
          return E.createElement(
            Me,
            $i({}, ie(f, !0), c, d, {
              parentViewBox: f.parentViewBox,
              value: h,
              textBreakAll: s,
              viewBox: Me.parseViewBox(te(o) ? f : am(am({}, f), {}, { clockWise: o })),
              key: "label-".concat(l),
              index: l,
            }),
          );
        }),
      );
}
Bt.displayName = "LabelList";
function vM(e, t) {
  return e
    ? e === !0
      ? E.createElement(Bt, { key: "labelList-implicit", data: t })
      : E.isValidElement(e) || Z(e)
        ? E.createElement(Bt, { key: "labelList-implicit", data: t, content: e })
        : Mr(e)
          ? E.createElement(Bt, $i({ data: t }, e, { key: "labelList-implicit" }))
          : null
    : null;
}
function yM(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = Ze(n, Bt).map(function (o, u) {
      return D.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = vM(e.label, t);
  return [a].concat(aM(i));
}
Bt.renderCallByParent = yM;
function bn(e) {
  "@babel/helpers - typeof";
  return (
    (bn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    bn(e)
  );
}
function wl() {
  return (
    (wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    wl.apply(this, arguments)
  );
}
function um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? um(Object(r), !0).forEach(function (n) {
          mM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : um(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function mM(e, t, r) {
  return (
    (t = gM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function gM(e) {
  var t = bM(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function bM(e, t) {
  if (bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xM = function (t, r) {
    var n = Ye(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  Jn = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      s = t.cornerRadius,
      c = t.cornerIsExternal,
      f = s * (u ? 1 : -1) + i,
      l = Math.asin(s / f) / Ii,
      h = c ? a : a + o * l,
      d = Ee(r, n, f, h),
      y = Ee(r, n, i, h),
      v = c ? a - o * l : a,
      p = Ee(r, n, f * Math.cos(l * Ii), v);
    return { center: d, circleTangency: y, lineTangency: p, theta: l };
  },
  W0 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      s = xM(o, u),
      c = o + s,
      f = Ee(r, n, a, o),
      l = Ee(r, n, a, c),
      h = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o > c),
          `,
    `,
        )
        .concat(l.x, ",")
        .concat(
          l.y,
          `
  `,
        );
    if (i > 0) {
      var d = Ee(r, n, i, o),
        y = Ee(r, n, i, c);
      h += "L "
        .concat(y.x, ",")
        .concat(
          y.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o <= c),
          `,
            `,
        )
        .concat(d.x, ",")
        .concat(d.y, " Z");
    } else h += "L ".concat(r, ",").concat(n, " Z");
    return h;
  },
  wM = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      s = t.cornerIsExternal,
      c = t.startAngle,
      f = t.endAngle,
      l = Ye(f - c),
      h = Jn({ cx: r, cy: n, radius: a, angle: c, sign: l, cornerRadius: o, cornerIsExternal: s }),
      d = h.circleTangency,
      y = h.lineTangency,
      v = h.theta,
      p = Jn({ cx: r, cy: n, radius: a, angle: f, sign: -l, cornerRadius: o, cornerIsExternal: s }),
      g = p.circleTangency,
      x = p.lineTangency,
      w = p.theta,
      _ = s ? Math.abs(c - f) : Math.abs(c - f) - v - w;
    if (_ < 0)
      return u
        ? "M "
            .concat(y.x, ",")
            .concat(
              y.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : W0({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: c, endAngle: f });
    var m = "M "
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(d.x, ",")
      .concat(
        d.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(_ > 180), ",")
      .concat(+(l < 0), ",")
      .concat(g.x, ",")
      .concat(
        g.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(x.x, ",")
      .concat(
        x.y,
        `
  `,
      );
    if (i > 0) {
      var b = Jn({
          cx: r,
          cy: n,
          radius: i,
          angle: c,
          sign: l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        O = b.circleTangency,
        S = b.lineTangency,
        A = b.theta,
        $ = Jn({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        T = $.circleTangency,
        P = $.lineTangency,
        j = $.theta,
        C = s ? Math.abs(c - f) : Math.abs(c - f) - A - j;
      if (C < 0 && o === 0) return "".concat(m, "L").concat(r, ",").concat(n, "Z");
      m += "L"
        .concat(P.x, ",")
        .concat(
          P.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(T.x, ",")
        .concat(
          T.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(C > 180), ",")
        .concat(+(l > 0), ",")
        .concat(O.x, ",")
        .concat(
          O.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(S.x, ",")
        .concat(S.y, "Z");
    } else m += "L".concat(r, ",").concat(n, "Z");
    return m;
  },
  _M = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  z0 = function (t) {
    var r = sm(sm({}, _M), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      s = r.forceCornerRadius,
      c = r.cornerIsExternal,
      f = r.startAngle,
      l = r.endAngle,
      h = r.className;
    if (o < a || f === l) return null;
    var d = ee("recharts-sector", h),
      y = o - a,
      v = Ut(u, y, 0, !0),
      p;
    return (
      v > 0 && Math.abs(f - l) < 360
        ? (p = wM({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, y / 2),
            forceCornerRadius: s,
            cornerIsExternal: c,
            startAngle: f,
            endAngle: l,
          }))
        : (p = W0({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: l })),
      E.createElement("path", wl({}, ie(r, !0), { className: d, d: p, role: "img" }))
    );
  };
function xn(e) {
  "@babel/helpers - typeof";
  return (
    (xn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xn(e)
  );
}
function _l() {
  return (
    (_l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _l.apply(this, arguments)
  );
}
function cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function lm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cm(Object(r), !0).forEach(function (n) {
          OM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function OM(e, t, r) {
  return (
    (t = SM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function SM(e) {
  var t = AM(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function AM(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fm = {
    curveBasisClosed: z1,
    curveBasisOpen: H1,
    curveBasis: W1,
    curveBumpX: j1,
    curveBumpY: M1,
    curveLinearClosed: G1,
    curveLinear: ca,
    curveMonotoneX: K1,
    curveMonotoneY: X1,
    curveNatural: V1,
    curveStep: Y1,
    curveStepAfter: J1,
    curveStepBefore: Z1,
  },
  Qn = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Fr = function (t) {
    return t.x;
  },
  Ur = function (t) {
    return t.y;
  },
  PM = function (t, r) {
    if (Z(t)) return t;
    var n = "curve".concat(ua(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? fm["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : fm[n] || ca;
  },
  TM = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      s = t.connectNulls,
      c = s === void 0 ? !1 : s,
      f = PM(n, u),
      l = c
        ? a.filter(function (v) {
            return Qn(v);
          })
        : a,
      h;
    if (Array.isArray(o)) {
      var d = c
          ? o.filter(function (v) {
              return Qn(v);
            })
          : o,
        y = l.map(function (v, p) {
          return lm(lm({}, v), {}, { base: d[p] });
        });
      return (
        u === "vertical"
          ? (h = zn()
              .y(Ur)
              .x1(Fr)
              .x0(function (v) {
                return v.base.x;
              }))
          : (h = zn()
              .x(Fr)
              .y1(Ur)
              .y0(function (v) {
                return v.base.y;
              })),
        h.defined(Qn).curve(f),
        h(y)
      );
    }
    return (
      u === "vertical" && B(o)
        ? (h = zn().y(Ur).x1(Fr).x0(o))
        : B(o)
          ? (h = zn().x(Fr).y1(Ur).y0(o))
          : (h = Zg().x(Fr).y(Ur)),
      h.defined(Qn).curve(f),
      h(l)
    );
  },
  hm = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? TM(t) : i;
    return D.createElement(
      "path",
      _l({}, ie(t, !1), ii(t), { className: ee("recharts-curve", r), d: o, ref: a }),
    );
  },
  cc = { exports: {} },
  lc,
  pm;
function EM() {
  if (pm) return lc;
  pm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((lc = e), lc);
}
var fc, dm;
function jM() {
  if (dm) return fc;
  dm = 1;
  var e = EM();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (fc = function () {
      function n(o, u, s, c, f, l) {
        if (l !== e) {
          var h = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((h.name = "Invariant Violation"), h);
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var a = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return ((a.PropTypes = a), a);
    }),
    fc
  );
}
var vm;
function MM() {
  return (vm || ((vm = 1), (cc.exports = jM()())), cc.exports);
}
var CM = MM();
const ne = le(CM),
  { getOwnPropertyNames: IM, getOwnPropertySymbols: $M } = Object,
  { hasOwnProperty: NM } = Object.prototype;
function hc(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function ei(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e(r, n, i);
    const { cache: a } = i,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    (a.set(r, n), a.set(n, r));
    const s = e(r, n, i);
    return (a.delete(r), a.delete(n), s);
  };
}
function kM(e) {
  return e?.[Symbol.toStringTag];
}
function ym(e) {
  return IM(e).concat($M(e));
}
const RM = Object.hasOwn || ((e, t) => NM.call(e, t));
function Xt(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
const DM = "__v",
  qM = "__o",
  LM = "_owner",
  { getOwnPropertyDescriptor: mm, keys: gm } = Object;
function BM(e, t) {
  return e.byteLength === t.byteLength && Ni(new Uint8Array(e), new Uint8Array(t));
}
function FM(e, t, r) {
  let n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function UM(e, t) {
  return (
    e.byteLength === t.byteLength &&
    Ni(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function WM(e, t) {
  return Xt(e.getTime(), t.getTime());
}
function zM(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function HM(e, t) {
  return e === t;
}
function bm(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.entries();
  let o,
    u,
    s = 0;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1,
      l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      const h = o.value,
        d = u.value;
      if (r.equals(h[0], d[0], s, l, e, t, r) && r.equals(h[1], d[1], h[0], d[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f) return !1;
    s++;
  }
  return !0;
}
const GM = Xt;
function KM(e, t, r) {
  const n = gm(e);
  let i = n.length;
  if (gm(t).length !== i) return !1;
  for (; i-- > 0; ) if (!H0(e, t, r, n[i])) return !1;
  return !0;
}
function Wr(e, t, r) {
  const n = ym(e);
  let i = n.length;
  if (ym(t).length !== i) return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (
      ((a = n[i]),
      !H0(e, t, r, a) ||
        ((o = mm(e, a)),
        (u = mm(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function XM(e, t) {
  return Xt(e.valueOf(), t.valueOf());
}
function VM(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function xm(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.values();
    let c = !1,
      f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c) return !1;
  }
  return !0;
}
function Ni(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function YM(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function H0(e, t, r, n) {
  return (n === LM || n === qM || n === DM) && (e.$$typeof || t.$$typeof)
    ? !0
    : RM(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const ZM = "[object ArrayBuffer]",
  JM = "[object Arguments]",
  QM = "[object Boolean]",
  eC = "[object DataView]",
  tC = "[object Date]",
  rC = "[object Error]",
  nC = "[object Map]",
  iC = "[object Number]",
  aC = "[object Object]",
  oC = "[object RegExp]",
  uC = "[object Set]",
  sC = "[object String]",
  cC = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  lC = "[object URL]",
  fC = Object.prototype.toString;
function hC({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: u,
  areObjectsEqual: s,
  arePrimitiveWrappersEqual: c,
  areRegExpsEqual: f,
  areSetsEqual: l,
  areTypedArraysEqual: h,
  areUrlsEqual: d,
  unknownTagComparators: y,
}) {
  return function (p, g, x) {
    if (p === g) return !0;
    if (p == null || g == null) return !1;
    const w = typeof p;
    if (w !== typeof g) return !1;
    if (w !== "object") return w === "number" ? u(p, g, x) : w === "function" ? a(p, g, x) : !1;
    const _ = p.constructor;
    if (_ !== g.constructor) return !1;
    if (_ === Object) return s(p, g, x);
    if (Array.isArray(p)) return t(p, g, x);
    if (_ === Date) return n(p, g, x);
    if (_ === RegExp) return f(p, g, x);
    if (_ === Map) return o(p, g, x);
    if (_ === Set) return l(p, g, x);
    const m = fC.call(p);
    if (m === tC) return n(p, g, x);
    if (m === oC) return f(p, g, x);
    if (m === nC) return o(p, g, x);
    if (m === uC) return l(p, g, x);
    if (m === aC) return typeof p.then != "function" && typeof g.then != "function" && s(p, g, x);
    if (m === lC) return d(p, g, x);
    if (m === rC) return i(p, g, x);
    if (m === JM) return s(p, g, x);
    if (cC[m]) return h(p, g, x);
    if (m === ZM) return e(p, g, x);
    if (m === eC) return r(p, g, x);
    if (m === QM || m === iC || m === sC) return c(p, g, x);
    if (y) {
      let b = y[m];
      if (!b) {
        const O = kM(p);
        O && (b = y[O]);
      }
      if (b) return b(p, g, x);
    }
    return !1;
  };
}
function pC({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: BM,
    areArraysEqual: r ? Wr : FM,
    areDataViewsEqual: UM,
    areDatesEqual: WM,
    areErrorsEqual: zM,
    areFunctionsEqual: HM,
    areMapsEqual: r ? hc(bm, Wr) : bm,
    areNumbersEqual: GM,
    areObjectsEqual: r ? Wr : KM,
    arePrimitiveWrappersEqual: XM,
    areRegExpsEqual: VM,
    areSetsEqual: r ? hc(xm, Wr) : xm,
    areTypedArraysEqual: r ? hc(Ni, Wr) : Ni,
    areUrlsEqual: YM,
    unknownTagComparators: void 0,
  };
  if ((t && (n = Object.assign({}, n, t(n))), e)) {
    const i = ei(n.areArraysEqual),
      a = ei(n.areMapsEqual),
      o = ei(n.areObjectsEqual),
      u = ei(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u,
    });
  }
  return n;
}
function dC(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function vC({ circular: e, comparator: t, createState: r, equals: n, strict: i }) {
  if (r)
    return function (u, s) {
      const { cache: c = e ? new WeakMap() : void 0, meta: f } = r();
      return t(u, s, { cache: c, equals: n, meta: f, strict: i });
    };
  if (e)
    return function (u, s) {
      return t(u, s, { cache: new WeakMap(), equals: n, meta: void 0, strict: i });
    };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function (u, s) {
    return t(u, s, a);
  };
}
const yC = Pt();
Pt({ strict: !0 });
Pt({ circular: !0 });
Pt({ circular: !0, strict: !0 });
Pt({ createInternalComparator: () => Xt });
Pt({ strict: !0, createInternalComparator: () => Xt });
Pt({ circular: !0, createInternalComparator: () => Xt });
Pt({ circular: !0, createInternalComparator: () => Xt, strict: !0 });
function Pt(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: i = !1 } = e,
    a = pC(e),
    o = hC(a),
    u = r ? r(o) : dC(o);
  return vC({ circular: t, comparator: o, createState: n, equals: u, strict: i });
}
function mC(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : mC(i));
    };
  requestAnimationFrame(n);
}
function Ol(e) {
  "@babel/helpers - typeof";
  return (
    (Ol =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ol(e)
  );
}
function gC(e) {
  return _C(e) || wC(e) || xC(e) || bC();
}
function bC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xC(e, t) {
  if (e) {
    if (typeof e == "string") return _m(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _m(e, t);
  }
}
function _m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function _C(e) {
  if (Array.isArray(e)) return e;
}
function OC() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = gC(o),
            s = u[0],
            c = u.slice(1);
          if (typeof s == "number") {
            wm(i.bind(null, c), s);
            return;
          }
          (i(s), wm(i.bind(null, c)));
          return;
        }
        (Ol(a) === "object" && ((e = a), t(e)), typeof a == "function" && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function wn(e) {
  "@babel/helpers - typeof";
  return (
    (wn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wn(e)
  );
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Sm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Om(Object(r), !0).forEach(function (n) {
          G0(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Om(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G0(e, t, r) {
  return (
    (t = SC(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function SC(e) {
  var t = AC(e, "string");
  return wn(t) === "symbol" ? t : String(t);
}
function AC(e, t) {
  if (wn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var PC = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  TC = function (t) {
    return t;
  },
  EC = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  Zr = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Sm(Sm({}, n), {}, G0({}, i, t(i, r[i])));
    }, {});
  },
  Am = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(EC(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function jC(e, t) {
  return IC(e) || CC(e, t) || K0(e, t) || MC();
}
function MC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CC(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function IC(e) {
  if (Array.isArray(e)) return e;
}
function $C(e) {
  return RC(e) || kC(e) || K0(e) || NC();
}
function NC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K0(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sl(e, t);
  }
}
function kC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function RC(e) {
  if (Array.isArray(e)) return Sl(e);
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ki = 1e-4,
  X0 = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  V0 = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  Pm = function (t, r) {
    return function (n) {
      var i = X0(t, r);
      return V0(i, n);
    };
  },
  DC = function (t, r) {
    return function (n) {
      var i = X0(t, r),
        a = [].concat(
          $C(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return V0(a, n);
    };
  },
  Tm = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          ((i = 0), (a = 0), (o = 1), (u = 1));
          break;
        case "ease":
          ((i = 0.25), (a = 0.1), (o = 0.25), (u = 1));
          break;
        case "ease-in":
          ((i = 0.42), (a = 0), (o = 1), (u = 1));
          break;
        case "ease-out":
          ((i = 0.42), (a = 0), (o = 0.58), (u = 1));
          break;
        case "ease-in-out":
          ((i = 0), (a = 0), (o = 0.58), (u = 1));
          break;
        default: {
          var s = r[0].split("(");
          if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
            var c = s[1]
                .split(")")[0]
                .split(",")
                .map(function (p) {
                  return parseFloat(p);
                }),
              f = jC(c, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]));
          }
        }
      }
    var l = Pm(i, o),
      h = Pm(a, u),
      d = DC(i, o),
      y = function (g) {
        return g > 1 ? 1 : g < 0 ? 0 : g;
      },
      v = function (g) {
        for (var x = g > 1 ? 1 : g, w = x, _ = 0; _ < 8; ++_) {
          var m = l(w) - x,
            b = d(w);
          if (Math.abs(m - x) < ki || b < ki) return h(w);
          w = y(w - m / b);
        }
        return h(w);
      };
    return ((v.isStepper = !1), v);
  },
  qC = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      s = function (f, l, h) {
        var d = -(f - l) * n,
          y = h * a,
          v = h + ((d - y) * u) / 1e3,
          p = (h * u) / 1e3 + f;
        return Math.abs(p - l) < ki && Math.abs(v) < ki ? [l, 0] : [p, v];
      };
    return ((s.isStepper = !0), (s.dt = u), s);
  },
  LC = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Tm(i);
        case "spring":
          return qC();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Tm(i);
      }
    return typeof i == "function" ? i : null;
  };
function _n(e) {
  "@babel/helpers - typeof";
  return (
    (_n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _n(e)
  );
}
function Em(e) {
  return UC(e) || FC(e) || Y0(e) || BC();
}
function BC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function UC(e) {
  if (Array.isArray(e)) return Pl(e);
}
function jm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jm(Object(r), !0).forEach(function (n) {
          Al(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Al(e, t, r) {
  return (
    (t = WC(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function WC(e) {
  var t = zC(e, "string");
  return _n(t) === "symbol" ? t : String(t);
}
function zC(e, t) {
  if (_n(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function HC(e, t) {
  return XC(e) || KC(e, t) || Y0(e, t) || GC();
}
function GC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y0(e, t) {
  if (e) {
    if (typeof e == "string") return Pl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pl(e, t);
  }
}
function Pl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KC(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function XC(e) {
  if (Array.isArray(e)) return e;
}
var Ri = function (t, r, n) {
    return t + (r - t) * n;
  },
  Tl = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  VC = function e(t, r, n) {
    var i = Zr(function (a, o) {
      if (Tl(o)) {
        var u = t(o.from, o.to, o.velocity),
          s = HC(u, 2),
          c = s[0],
          f = s[1];
        return Te(Te({}, o), {}, { from: c, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? Zr(function (a, o) {
          return Tl(o)
            ? Te(
                Te({}, o),
                {},
                { velocity: Ri(o.velocity, i[a].velocity, n), from: Ri(o.from, i[a].from, n) },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const YC = function (e, t, r, n, i) {
  var a = PC(e, t),
    o = a.reduce(function (p, g) {
      return Te(Te({}, p), {}, Al({}, g, [e[g], t[g]]));
    }, {}),
    u = a.reduce(function (p, g) {
      return Te(Te({}, p), {}, Al({}, g, { from: e[g], velocity: 0, to: t[g] }));
    }, {}),
    s = -1,
    c,
    f,
    l = function () {
      return null;
    },
    h = function () {
      return Zr(function (g, x) {
        return x.from;
      }, u);
    },
    d = function () {
      return !Object.values(u).filter(Tl).length;
    },
    y = function (g) {
      c || (c = g);
      var x = g - c,
        w = x / r.dt;
      ((u = VC(r, u, w)),
        i(Te(Te(Te({}, e), t), h())),
        (c = g),
        d() || (s = requestAnimationFrame(l)));
    },
    v = function (g) {
      f || (f = g);
      var x = (g - f) / n,
        w = Zr(function (m, b) {
          return Ri.apply(void 0, Em(b).concat([r(x)]));
        }, o);
      if ((i(Te(Te(Te({}, e), t), w)), x < 1)) s = requestAnimationFrame(l);
      else {
        var _ = Zr(function (m, b) {
          return Ri.apply(void 0, Em(b).concat([r(1)]));
        }, o);
        i(Te(Te(Te({}, e), t), _));
      }
    };
  return (
    (l = r.isStepper ? y : v),
    function () {
      return (
        requestAnimationFrame(l),
        function () {
          cancelAnimationFrame(s);
        }
      );
    }
  );
};
function mr(e) {
  "@babel/helpers - typeof";
  return (
    (mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    mr(e)
  );
}
var ZC = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function JC(e, t) {
  if (e == null) return {};
  var r = QC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function QC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
function pc(e) {
  return nI(e) || rI(e) || tI(e) || eI();
}
function eI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tI(e, t) {
  if (e) {
    if (typeof e == "string") return El(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return El(e, t);
  }
}
function rI(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function nI(e) {
  if (Array.isArray(e)) return El(e);
}
function El(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mm(Object(r), !0).forEach(function (n) {
          Kr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Kr(e, t, r) {
  return (
    (t = Z0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function iI(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function aI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Z0(n.key), n));
  }
}
function oI(e, t, r) {
  return (t && aI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Z0(e) {
  var t = uI(e, "string");
  return mr(t) === "symbol" ? t : String(t);
}
function uI(e, t) {
  if (mr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && jl(e, t));
}
function jl(e, t) {
  return (
    (jl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    jl(e, t)
  );
}
function cI(e) {
  var t = lI();
  return function () {
    var n = Di(e),
      i;
    if (t) {
      var a = Di(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Ml(this, i);
  };
}
function Ml(e, t) {
  if (t && (mr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Cl(e);
}
function Cl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lI() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function Di(e) {
  return (
    (Di = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Di(e)
  );
}
var wt = (function (e) {
  sI(r, e);
  var t = cI(r);
  function r(n, i) {
    var a;
    (iI(this, r), (a = t.call(this, n, i)));
    var o = a.props,
      u = o.isActive,
      s = o.attributeName,
      c = o.from,
      f = o.to,
      l = o.steps,
      h = o.children,
      d = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Cl(a))),
      (a.changeStyle = a.changeStyle.bind(Cl(a))),
      !u || d <= 0)
    )
      return ((a.state = { style: {} }), typeof h == "function" && (a.state = { style: f }), Ml(a));
    if (l && l.length) a.state = { style: l[0].style };
    else if (c) {
      if (typeof h == "function") return ((a.state = { style: c }), Ml(a));
      a.state = { style: s ? Kr({}, s, c) : c };
    } else a.state = { style: {} };
    return a;
  }
  return (
    oI(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            s = a.attributeName,
            c = a.shouldReAnimate,
            f = a.to,
            l = a.from,
            h = this.state.style;
          if (u) {
            if (!o) {
              var d = { style: s ? Kr({}, s, f) : f };
              this.state && h && ((s && h[s] !== f) || (!s && h !== f)) && this.setState(d);
              return;
            }
            if (!(yC(i.to, f) && i.canBegin && i.isActive)) {
              var y = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation());
              var v = y || c ? l : i.to;
              if (this.state && h) {
                var p = { style: s ? Kr({}, s, v) : v };
                ((s && h[s] !== v) || (!s && h !== v)) && this.setState(p);
              }
              this.runAnimation(Ke(Ke({}, this.props), {}, { from: v, begin: 0 }));
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            s = i.duration,
            c = i.easing,
            f = i.begin,
            l = i.onAnimationEnd,
            h = i.onAnimationStart,
            d = YC(o, u, LC(c), s, this.changeStyle),
            y = function () {
              a.stopJSAnimation = d();
            };
          this.manager.start([h, f, y, s, l]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            s = i.onAnimationStart,
            c = o[0],
            f = c.style,
            l = c.duration,
            h = l === void 0 ? 0 : l,
            d = function (v, p, g) {
              if (g === 0) return v;
              var x = p.duration,
                w = p.easing,
                _ = w === void 0 ? "ease" : w,
                m = p.style,
                b = p.properties,
                O = p.onAnimationEnd,
                S = g > 0 ? o[g - 1] : p,
                A = b || Object.keys(m);
              if (typeof _ == "function" || _ === "spring")
                return [].concat(pc(v), [
                  a.runJSAnimation.bind(a, { from: S.style, to: m, duration: x, easing: _ }),
                  x,
                ]);
              var $ = Am(A, x, _),
                T = Ke(Ke(Ke({}, S.style), m), {}, { transition: $ });
              return [].concat(pc(v), [T, x, O]).filter(TC);
            };
          return this.manager.start(
            [s].concat(pc(o.reduce(d, [f, Math.max(h, u)])), [i.onAnimationEnd]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = OC());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            s = i.to,
            c = i.easing,
            f = i.onAnimationStart,
            l = i.onAnimationEnd,
            h = i.steps,
            d = i.children,
            y = this.manager;
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof c == "function" || typeof d == "function" || c === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (h.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var v = u ? Kr({}, u, s) : s,
            p = Am(Object.keys(v), o, c);
          y.start([f, a, Ke(Ke({}, v), {}, { transition: p }), o, l]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var u = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var s = JC(i, ZC),
            c = D.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || c === 0 || o <= 0) return a;
          var l = function (d) {
            var y = d.props,
              v = y.style,
              p = v === void 0 ? {} : v,
              g = y.className,
              x = D.cloneElement(d, Ke(Ke({}, s), {}, { style: Ke(Ke({}, p), f), className: g }));
            return x;
          };
          return c === 1
            ? l(D.Children.only(a))
            : E.createElement(
                "div",
                null,
                D.Children.map(a, function (h) {
                  return l(h);
                }),
              );
        },
      },
    ]),
    r
  );
})(D.PureComponent);
wt.displayName = "Animate";
wt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
wt.propTypes = {
  from: ne.oneOfType([ne.object, ne.string]),
  to: ne.oneOfType([ne.object, ne.string]),
  attributeName: ne.string,
  duration: ne.number,
  begin: ne.number,
  easing: ne.oneOfType([ne.string, ne.func]),
  steps: ne.arrayOf(
    ne.shape({
      duration: ne.number.isRequired,
      style: ne.object.isRequired,
      easing: ne.oneOfType([
        ne.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        ne.func,
      ]),
      properties: ne.arrayOf("string"),
      onAnimationEnd: ne.func,
    }),
  ),
  children: ne.oneOfType([ne.node, ne.func]),
  isActive: ne.bool,
  canBegin: ne.bool,
  onAnimationEnd: ne.func,
  shouldReAnimate: ne.bool,
  onAnimationStart: ne.func,
  onAnimationReStart: ne.func,
};
function On(e) {
  "@babel/helpers - typeof";
  return (
    (On =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    On(e)
  );
}
function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qi.apply(this, arguments)
  );
}
function fI(e, t) {
  return vI(e) || dI(e, t) || pI(e, t) || hI();
}
function hI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pI(e, t) {
  if (e) {
    if (typeof e == "string") return Cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cm(e, t);
  }
}
function Cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dI(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function vI(e) {
  if (Array.isArray(e)) return e;
}
function Im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function $m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Im(Object(r), !0).forEach(function (n) {
          yI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Im(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function yI(e, t, r) {
  return (
    (t = mI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function mI(e) {
  var t = gI(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function gI(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nm = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var l = [0, 0, 0, 0], h = 0, d = 4; h < d; h++) l[h] = a[h] > o ? o : a[h];
      ((f = "M".concat(t, ",").concat(r + u * l[0])),
        l[0] > 0 &&
          (f += "A "
            .concat(l[0], ",")
            .concat(l[0], ",0,0,")
            .concat(c, ",")
            .concat(t + s * l[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - s * l[1], ",").concat(r)),
        l[1] > 0 &&
          (f += "A "
            .concat(l[1], ",")
            .concat(l[1], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * l[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * l[2])),
        l[2] > 0 &&
          (f += "A "
            .concat(l[2], ",")
            .concat(l[2], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t + n - s * l[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + s * l[3], ",").concat(r + i)),
        l[3] > 0 &&
          (f += "A "
            .concat(l[3], ",")
            .concat(l[3], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * l[3])),
        (f += "Z"));
    } else if (o > 0 && a === +a && a > 0) {
      var y = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + s * y, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - s * y, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + n, ",")
        .concat(
          r + u * y,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + n - s * y, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + s * y, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t, ",")
        .concat(r + i - u * y, " Z");
    } else
      f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
    return f;
  },
  bI = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      s = r.height;
    if (Math.abs(u) > 0 && Math.abs(s) > 0) {
      var c = Math.min(a, a + u),
        f = Math.max(a, a + u),
        l = Math.min(o, o + s),
        h = Math.max(o, o + s);
      return n >= c && n <= f && i >= l && i <= h;
    }
    return !1;
  },
  xI = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Vf = function (t) {
    var r = $m($m({}, xI), t),
      n = D.useRef(),
      i = D.useState(-1),
      a = fI(i, 2),
      o = a[0],
      u = a[1];
    D.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var _ = n.current.getTotalLength();
          _ && u(_);
        } catch {}
    }, []);
    var s = r.x,
      c = r.y,
      f = r.width,
      l = r.height,
      h = r.radius,
      d = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      p = r.animationBegin,
      g = r.isAnimationActive,
      x = r.isUpdateAnimationActive;
    if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0) return null;
    var w = ee("recharts-rectangle", d);
    return x
      ? E.createElement(
          wt,
          {
            canBegin: o > 0,
            from: { width: f, height: l, x: s, y: c },
            to: { width: f, height: l, x: s, y: c },
            duration: v,
            animationEasing: y,
            isActive: x,
          },
          function (_) {
            var m = _.width,
              b = _.height,
              O = _.x,
              S = _.y;
            return E.createElement(
              wt,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: p,
                duration: v,
                isActive: g,
                easing: y,
              },
              E.createElement(
                "path",
                qi({}, ie(r, !0), { className: w, d: Nm(O, S, m, b, h), ref: n }),
              ),
            );
          },
        )
      : E.createElement("path", qi({}, ie(r, !0), { className: w, d: Nm(s, c, f, l, h) }));
  };
function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Il.apply(this, arguments)
  );
}
var J0 = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? D.createElement("circle", Il({}, ie(t, !1), ii(t), { className: o, cx: r, cy: n, r: i }))
    : null;
};
function Sn(e) {
  "@babel/helpers - typeof";
  return (
    (Sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sn(e)
  );
}
var wI = ["x", "y", "top", "left", "width", "height", "className"];
function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $l.apply(this, arguments)
  );
}
function km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function _I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? km(Object(r), !0).forEach(function (n) {
          OI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : km(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function OI(e, t, r) {
  return (
    (t = SI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function SI(e) {
  var t = AI(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function AI(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PI(e, t) {
  if (e == null) return {};
  var r = TI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function TI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var EI = function (t, r, n, i, a, o) {
    return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
  },
  jI = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      s = t.left,
      c = s === void 0 ? 0 : s,
      f = t.width,
      l = f === void 0 ? 0 : f,
      h = t.height,
      d = h === void 0 ? 0 : h,
      y = t.className,
      v = PI(t, wI),
      p = _I({ x: n, y: a, top: u, left: c, width: l, height: d }, v);
    return !B(n) || !B(a) || !B(l) || !B(d) || !B(u) || !B(c)
      ? null
      : E.createElement(
          "path",
          $l({}, ie(p, !0), { className: ee("recharts-cross", y), d: EI(n, a, l, d, u, c) }),
        );
  },
  dc,
  Rm;
function MI() {
  if (Rm) return dc;
  Rm = 1;
  var e = xb(),
    t = e(Object.getPrototypeOf, Object);
  return ((dc = t), dc);
}
var vc, Dm;
function CI() {
  if (Dm) return vc;
  Dm = 1;
  var e = dt(),
    t = MI(),
    r = vt(),
    n = "[object Object]",
    i = Function.prototype,
    a = Object.prototype,
    o = i.toString,
    u = a.hasOwnProperty,
    s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n) return !1;
    var l = t(f);
    if (l === null) return !0;
    var h = u.call(l, "constructor") && l.constructor;
    return typeof h == "function" && h instanceof h && o.call(h) == s;
  }
  return ((vc = c), vc);
}
var II = CI();
const $I = le(II);
var yc, qm;
function NI() {
  if (qm) return yc;
  qm = 1;
  var e = dt(),
    t = vt(),
    r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || (t(i) && e(i) == r);
  }
  return ((yc = n), yc);
}
var kI = NI();
const RI = le(kI);
function An(e) {
  "@babel/helpers - typeof";
  return (
    (An =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    An(e)
  );
}
function Li() {
  return (
    (Li = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Li.apply(this, arguments)
  );
}
function DI(e, t) {
  return FI(e) || BI(e, t) || LI(e, t) || qI();
}
function qI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LI(e, t) {
  if (e) {
    if (typeof e == "string") return Lm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lm(e, t);
  }
}
function Lm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BI(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function FI(e) {
  if (Array.isArray(e)) return e;
}
function Bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bm(Object(r), !0).forEach(function (n) {
          UI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function UI(e, t, r) {
  return (
    (t = WI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function WI(e) {
  var t = zI(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function zI(e, t) {
  if (An(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Um = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  HI = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  GI = function (t) {
    var r = Fm(Fm({}, HI), t),
      n = D.useRef(),
      i = D.useState(-1),
      a = DI(i, 2),
      o = a[0],
      u = a[1];
    D.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var w = n.current.getTotalLength();
          w && u(w);
        } catch {}
    }, []);
    var s = r.x,
      c = r.y,
      f = r.upperWidth,
      l = r.lowerWidth,
      h = r.height,
      d = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      p = r.animationBegin,
      g = r.isUpdateAnimationActive;
    if (s !== +s || c !== +c || f !== +f || l !== +l || h !== +h || (f === 0 && l === 0) || h === 0)
      return null;
    var x = ee("recharts-trapezoid", d);
    return g
      ? E.createElement(
          wt,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: h, x: s, y: c },
            to: { upperWidth: f, lowerWidth: l, height: h, x: s, y: c },
            duration: v,
            animationEasing: y,
            isActive: g,
          },
          function (w) {
            var _ = w.upperWidth,
              m = w.lowerWidth,
              b = w.height,
              O = w.x,
              S = w.y;
            return E.createElement(
              wt,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: p,
                duration: v,
                easing: y,
              },
              E.createElement(
                "path",
                Li({}, ie(r, !0), { className: x, d: Um(O, S, _, m, b), ref: n }),
              ),
            );
          },
        )
      : E.createElement(
          "g",
          null,
          E.createElement("path", Li({}, ie(r, !0), { className: x, d: Um(s, c, f, l, h) })),
        );
  },
  KI = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Pn(e) {
  "@babel/helpers - typeof";
  return (
    (Pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pn(e)
  );
}
function XI(e, t) {
  if (e == null) return {};
  var r = VI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function VI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wm(Object(r), !0).forEach(function (n) {
          YI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function YI(e, t, r) {
  return (
    (t = ZI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ZI(e) {
  var t = JI(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function JI(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QI(e, t) {
  return Bi(Bi({}, t), e);
}
function e$(e, t) {
  return e === "symbols";
}
function zm(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return E.createElement(Vf, r);
    case "trapezoid":
      return E.createElement(GI, r);
    case "sector":
      return E.createElement(z0, r);
    case "symbols":
      if (e$(t)) return E.createElement(hf, r);
      break;
    default:
      return null;
  }
}
function t$(e) {
  return D.isValidElement(e) ? e.props : e;
}
function r$(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? QI : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    s = XI(e, KI),
    c;
  if (D.isValidElement(t)) c = D.cloneElement(t, Bi(Bi({}, s), t$(t)));
  else if (Z(t)) c = t(s);
  else if ($I(t) && !RI(t)) {
    var f = i(t, s);
    c = E.createElement(zm, { shapeType: r, elementProps: f });
  } else {
    var l = s;
    c = E.createElement(zm, { shapeType: r, elementProps: l });
  }
  return u ? E.createElement(Ae, { className: o }, c) : c;
}
function Aa(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Pa(e, t) {
  return t != null && "sectors" in e.props;
}
function Tn(e, t) {
  return t != null && "points" in e.props;
}
function n$(e, t) {
  var r,
    n,
    i =
      e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) ||
      e.x === t.x,
    a =
      e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) ||
      e.y === t.y;
  return i && a;
}
function i$(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function a$(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function o$(e, t) {
  var r;
  return (Aa(e, t) ? (r = n$) : Pa(e, t) ? (r = i$) : Tn(e, t) && (r = a$), r);
}
function u$(e, t) {
  var r;
  return (
    Aa(e, t) ? (r = "trapezoids") : Pa(e, t) ? (r = "sectors") : Tn(e, t) && (r = "points"),
    r
  );
}
function s$(e, t) {
  if (Aa(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Pa(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Tn(e, t) ? t.payload : {};
}
function c$(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = u$(r, t),
    a = s$(r, t),
    o = n.filter(function (s, c) {
      var f = Hf(a, s),
        l = r.props[i].filter(function (y) {
          var v = o$(r, t);
          return v(y, t);
        }),
        h = r.props[i].indexOf(l[l.length - 1]),
        d = c === h;
      return f && d;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var mc, Hm;
function l$() {
  if (Hm) return mc;
  Hm = 1;
  var e = Math.ceil,
    t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, s = t(e((i - n) / (a || 1)), 0), c = Array(s); s--; )
      ((c[o ? s : ++u] = n), (n += a));
    return c;
  }
  return ((mc = r), mc);
}
var gc, Gm;
function Q0() {
  if (Gm) return gc;
  Gm = 1;
  var e = Rb(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(i) {
    if (!i) return i === 0 ? i : 0;
    if (((i = e(i)), i === t || i === -t)) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return ((gc = n), gc);
}
var bc, Km;
function f$() {
  if (Km) return bc;
  Km = 1;
  var e = l$(),
    t = pa(),
    r = Q0();
  function n(i) {
    return function (a, o, u) {
      return (
        u && typeof u != "number" && t(a, o, u) && (o = u = void 0),
        (a = r(a)),
        o === void 0 ? ((o = a), (a = 0)) : (o = r(o)),
        (u = u === void 0 ? (a < o ? 1 : -1) : r(u)),
        e(a, o, u, i)
      );
    };
  }
  return ((bc = n), bc);
}
var xc, Xm;
function h$() {
  if (Xm) return xc;
  Xm = 1;
  var e = f$(),
    t = e();
  return ((xc = t), xc);
}
var p$ = h$();
const Fi = le(p$);
function En(e) {
  "@babel/helpers - typeof";
  return (
    (En =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    En(e)
  );
}
function Vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ym(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vm(Object(r), !0).forEach(function (n) {
          ex(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ex(e, t, r) {
  return (
    (t = d$(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function d$(e) {
  var t = v$(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function v$(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var y$ = ["Webkit", "Moz", "O", "ms"],
  m$ = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = y$.reduce(function (a, o) {
        return Ym(Ym({}, a), {}, ex({}, o + n, r));
      }, {});
    return ((i[t] = r), i);
  };
function gr(e) {
  "@babel/helpers - typeof";
  return (
    (gr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gr(e)
  );
}
function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
function Zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zm(Object(r), !0).forEach(function (n) {
          De(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function g$(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Jm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, rx(n.key), n));
  }
}
function b$(e, t, r) {
  return (
    t && Jm(e.prototype, t),
    r && Jm(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function x$(e, t, r) {
  return (
    (t = Wi(t)),
    w$(e, tx() ? Reflect.construct(t, r || [], Wi(e).constructor) : t.apply(e, r))
  );
}
function w$(e, t) {
  if (t && (gr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _$(e);
}
function _$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tx = function () {
    return !!e;
  })();
}
function Wi(e) {
  return (
    (Wi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Wi(e)
  );
}
function O$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Nl(e, t));
}
function Nl(e, t) {
  return (
    (Nl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Nl(e, t)
  );
}
function De(e, t, r) {
  return (
    (t = rx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function rx(e) {
  var t = S$(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function S$(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var A$ = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var s = r.length,
      c = Vr()
        .domain(Fi(0, s))
        .range([a, a + o - u]),
      f = c.domain().map(function (l) {
        return c(l);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: c(n),
      endX: c(i),
      scale: c,
      scaleValues: f,
    };
  },
  Qm = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  br = (function (e) {
    function t(r) {
      var n;
      return (
        g$(this, t),
        (n = x$(this, t, [r])),
        De(n, "handleDrag", function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        De(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        De(n, "handleDragEnd", function () {
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = n.props,
              a = i.endIndex,
              o = i.onDragEnd,
              u = i.startIndex;
            o?.({ endIndex: a, startIndex: u });
          }),
            n.detachDragEndListener());
        }),
        De(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
        }),
        De(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        De(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        De(n, "handleSlideDragStart", function (i) {
          var a = Qm(i) ? i.changedTouches[0] : i;
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: a.pageX }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      O$(t, e),
      b$(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              (this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                s = u.gap,
                c = u.data,
                f = c.length - 1,
                l = Math.min(i, a),
                h = Math.max(i, a),
                d = t.getIndexInRange(o, l),
                y = t.getIndexInRange(o, h);
              return { startIndex: d - (d % s), endIndex: y === f ? f : y - (y % s) };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                s = it(a[n], u, n);
              return Z(o) ? o(s, n) : s;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              (window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                s = this.props,
                c = s.x,
                f = s.width,
                l = s.travellerWidth,
                h = s.startIndex,
                d = s.endIndex,
                y = s.onChange,
                v = n.pageX - a;
              v > 0
                ? (v = Math.min(v, c + f - l - u, c + f - l - o))
                : v < 0 && (v = Math.max(v, c - o, c - u));
              var p = this.getIndex({ startX: o + v, endX: u + v });
              ((p.startIndex !== h || p.endIndex !== d) && y && y(p),
                this.setState({ startX: o + v, endX: u + v, slideMoveStartX: n.pageX }));
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = Qm(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                s = i.startX,
                c = this.state[o],
                f = this.props,
                l = f.x,
                h = f.width,
                d = f.travellerWidth,
                y = f.onChange,
                v = f.gap,
                p = f.data,
                g = { startX: this.state.startX, endX: this.state.endX },
                x = n.pageX - a;
              (x > 0 ? (x = Math.min(x, l + h - d - c)) : x < 0 && (x = Math.max(x, l - c)),
                (g[o] = c + x));
              var w = this.getIndex(g),
                _ = w.startIndex,
                m = w.endIndex,
                b = function () {
                  var S = p.length - 1;
                  return (
                    (o === "startX" && (u > s ? _ % v === 0 : m % v === 0)) ||
                    (u < s && m === S) ||
                    (o === "endX" && (u > s ? m % v === 0 : _ % v === 0)) ||
                    (u > s && m === S)
                  );
                };
              this.setState(De(De({}, o, c + x), "brushMoveStartX", n.pageX), function () {
                y && b() && y(w);
              });
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                s = o.startX,
                c = o.endX,
                f = this.state[i],
                l = u.indexOf(f);
              if (l !== -1) {
                var h = l + n;
                if (!(h === -1 || h >= u.length)) {
                  var d = u[h];
                  (i === "startX" && d >= c) ||
                    (i === "endX" && d <= s) ||
                    this.setState(De({}, i, d), function () {
                      a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.fill,
                c = n.stroke;
              return E.createElement("rect", {
                stroke: c,
                fill: s,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.data,
                c = n.children,
                f = n.padding,
                l = D.Children.only(c);
              return l
                ? E.cloneElement(l, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: s,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                s = this.props,
                c = s.y,
                f = s.travellerWidth,
                l = s.height,
                h = s.traveller,
                d = s.ariaLabel,
                y = s.data,
                v = s.startIndex,
                p = s.endIndex,
                g = Math.max(n, this.props.x),
                x = wc(wc({}, ie(this.props, !1)), {}, { x: g, y: c, width: f, height: l }),
                w =
                  d ||
                  "Min value: "
                    .concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ")
                    .concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
              return E.createElement(
                Ae,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": w,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (m) {
                    ["ArrowLeft", "ArrowRight"].includes(m.key) &&
                      (m.preventDefault(),
                      m.stopPropagation(),
                      u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(h, x),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                s = a.stroke,
                c = a.travellerWidth,
                f = Math.min(n, i) + c,
                l = Math.max(Math.abs(i - n) - c, 0);
              return E.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: s,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: l,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                s = n.travellerWidth,
                c = n.stroke,
                f = this.state,
                l = f.startX,
                h = f.endX,
                d = 5,
                y = { pointerEvents: "none", fill: c };
              return E.createElement(
                Ae,
                { className: "recharts-brush-texts" },
                E.createElement(
                  yi,
                  Ui(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(l, h) - d,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(i),
                ),
                E.createElement(
                  yi,
                  Ui(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(l, h) + s + d,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                s = n.y,
                c = n.width,
                f = n.height,
                l = n.alwaysShowText,
                h = this.state,
                d = h.startX,
                y = h.endX,
                v = h.isTextActive,
                p = h.isSlideMoving,
                g = h.isTravellerMoving,
                x = h.isTravellerFocused;
              if (!i || !i.length || !B(u) || !B(s) || !B(c) || !B(f) || c <= 0 || f <= 0)
                return null;
              var w = ee("recharts-brush", a),
                _ = E.Children.count(o) === 1,
                m = m$("userSelect", "none");
              return E.createElement(
                Ae,
                {
                  className: w,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: m,
                },
                this.renderBackground(),
                _ && this.renderPanorama(),
                this.renderSlide(d, y),
                this.renderTravellerLayer(d, "startX"),
                this.renderTravellerLayer(y, "endX"),
                (v || p || g || x || l) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.stroke,
                c = Math.floor(a + u / 2) - 1;
              return E.createElement(
                E.Fragment,
                null,
                E.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: s,
                  stroke: "none",
                }),
                E.createElement("line", {
                  x1: i + 1,
                  y1: c,
                  x2: i + o - 1,
                  y2: c,
                  fill: "none",
                  stroke: "#fff",
                }),
                E.createElement("line", {
                  x1: i + 1,
                  y1: c + 2,
                  x2: i + o - 1,
                  y2: c + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                E.isValidElement(n)
                  ? (a = E.cloneElement(n, i))
                  : Z(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                s = n.travellerWidth,
                c = n.updateId,
                f = n.startIndex,
                l = n.endIndex;
              if (a !== i.prevData || c !== i.prevUpdateId)
                return wc(
                  { prevData: a, prevTravellerWidth: s, prevUpdateId: c, prevX: u, prevWidth: o },
                  a && a.length
                    ? A$({ data: a, width: o, x: u, travellerWidth: s, startIndex: f, endIndex: l })
                    : { scale: null, scaleValues: null },
                );
              if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
                i.scale.range([u, u + o - s]);
                var h = i.scale.domain().map(function (d) {
                  return i.scale(d);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: s,
                  prevUpdateId: c,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: h,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var s = Math.floor((o + u) / 2);
                n[s] > i ? (u = s) : (o = s);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(D.PureComponent);
De(br, "displayName", "Brush");
De(br, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var _c, eg;
function P$() {
  if (eg) return _c;
  eg = 1;
  var e = bf();
  function t(r, n) {
    var i;
    return (
      e(r, function (a, o, u) {
        return ((i = n(a, o, u)), !i);
      }),
      !!i
    );
  }
  return ((_c = t), _c);
}
var Oc, tg;
function T$() {
  if (tg) return Oc;
  tg = 1;
  var e = pb(),
    t = Ot(),
    r = P$(),
    n = ke(),
    i = pa();
  function a(o, u, s) {
    var c = n(o) ? e : r;
    return (s && i(o, u, s) && (u = void 0), c(o, t(u, 3)));
  }
  return ((Oc = a), Oc);
}
var E$ = T$();
const j$ = le(E$);
var rt = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return (n && (i = "extendDomain"), i === r);
  },
  Sc,
  rg;
function M$() {
  if (rg) return Sc;
  rg = 1;
  var e = Cb();
  function t(r, n, i) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (r[n] = i);
  }
  return ((Sc = t), Sc);
}
var Ac, ng;
function C$() {
  if (ng) return Ac;
  ng = 1;
  var e = M$(),
    t = jb(),
    r = Ot();
  function n(i, a) {
    var o = {};
    return (
      (a = r(a, 3)),
      t(i, function (u, s, c) {
        e(o, s, a(u, s, c));
      }),
      o
    );
  }
  return ((Ac = n), Ac);
}
var I$ = C$();
const $$ = le(I$);
var Pc, ig;
function N$() {
  if (ig) return Pc;
  ig = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; ) if (!r(t[n], n, t)) return !1;
    return !0;
  }
  return ((Pc = e), Pc);
}
var Tc, ag;
function k$() {
  if (ag) return Tc;
  ag = 1;
  var e = bf();
  function t(r, n) {
    var i = !0;
    return (
      e(r, function (a, o, u) {
        return ((i = !!n(a, o, u)), i);
      }),
      i
    );
  }
  return ((Tc = t), Tc);
}
var Ec, og;
function R$() {
  if (og) return Ec;
  og = 1;
  var e = N$(),
    t = k$(),
    r = Ot(),
    n = ke(),
    i = pa();
  function a(o, u, s) {
    var c = n(o) ? e : t;
    return (s && i(o, u, s) && (u = void 0), c(o, r(u, 3)));
  }
  return ((Ec = a), Ec);
}
var D$ = R$();
const q$ = le(D$);
var L$ = ["x", "y"];
function jn(e) {
  "@babel/helpers - typeof";
  return (
    (jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jn(e)
  );
}
function kl() {
  return (
    (kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    kl.apply(this, arguments)
  );
}
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ug(Object(r), !0).forEach(function (n) {
          B$(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ug(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function B$(e, t, r) {
  return (
    (t = F$(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function F$(e) {
  var t = U$(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function U$(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W$(e, t) {
  if (e == null) return {};
  var r = z$(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function z$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function H$(e, t) {
  var r = e.x,
    n = e.y,
    i = W$(e, L$),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    s = parseInt(u, 10),
    c = "".concat(t.height || i.height),
    f = parseInt(c, 10),
    l = "".concat(t.width || i.width),
    h = parseInt(l, 10);
  return zr(
    zr(zr(zr(zr({}, t), i), o ? { x: o } : {}), s ? { y: s } : {}),
    {},
    { height: f, width: h, name: t.name, radius: t.radius },
  );
}
function sg(e) {
  return E.createElement(
    r$,
    kl({ shapeType: "rectangle", propTransformer: H$, activeClassName: "recharts-active-bar" }, e),
  );
}
var G$ = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = B(n) || Zw(n);
      return a ? t(n, i) : (a || zt(), r);
    };
  },
  K$ = ["value", "background"],
  nx;
function xr(e) {
  "@babel/helpers - typeof";
  return (
    (xr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xr(e)
  );
}
function X$(e, t) {
  if (e == null) return {};
  var r = V$(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function V$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zi() {
  return (
    (zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zi.apply(this, arguments)
  );
}
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cg(Object(r), !0).forEach(function (n) {
          bt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Y$(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function lg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ax(n.key), n));
  }
}
function Z$(e, t, r) {
  return (
    t && lg(e.prototype, t),
    r && lg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function J$(e, t, r) {
  return (
    (t = Hi(t)),
    Q$(e, ix() ? Reflect.construct(t, r || [], Hi(e).constructor) : t.apply(e, r))
  );
}
function Q$(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return eN(e);
}
function eN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ix() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ix = function () {
    return !!e;
  })();
}
function Hi(e) {
  return (
    (Hi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Hi(e)
  );
}
function tN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Rl(e, t));
}
function Rl(e, t) {
  return (
    (Rl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Rl(e, t)
  );
}
function bt(e, t, r) {
  return (
    (t = ax(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ax(e) {
  var t = rN(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function rN(e, t) {
  if (xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vt = (function (e) {
  function t() {
    var r;
    Y$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = J$(this, t, [].concat(i))),
      bt(r, "state", { isAnimationFinished: !1 }),
      bt(r, "id", oa("recharts-bar-")),
      bt(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      bt(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    tN(t, e),
    Z$(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              s = a.activeIndex,
              c = a.activeBar,
              f = ie(this.props, !1);
            return (
              n &&
              n.map(function (l, h) {
                var d = h === s,
                  y = d ? c : o,
                  v = ye(
                    ye(ye({}, f), l),
                    {},
                    {
                      isActive: d,
                      option: y,
                      index: h,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return E.createElement(
                  Ae,
                  zi({ className: "recharts-bar-rectangle" }, ai(i.props, l, h), {
                    key: "rectangle-"
                      .concat(l?.x, "-")
                      .concat(l?.y, "-")
                      .concat(l?.value, "-")
                      .concat(h),
                  }),
                  E.createElement(sg, v),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              s = i.animationBegin,
              c = i.animationDuration,
              f = i.animationEasing,
              l = i.animationId,
              h = this.state.prevData;
            return E.createElement(
              wt,
              {
                begin: s,
                duration: c,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (d) {
                var y = d.t,
                  v = a.map(function (p, g) {
                    var x = h && h[g];
                    if (x) {
                      var w = Zt(x.x, p.x),
                        _ = Zt(x.y, p.y),
                        m = Zt(x.width, p.width),
                        b = Zt(x.height, p.height);
                      return ye(ye({}, p), {}, { x: w(y), y: _(y), width: m(y), height: b(y) });
                    }
                    if (o === "horizontal") {
                      var O = Zt(0, p.height),
                        S = O(y);
                      return ye(ye({}, p), {}, { y: p.y + p.height - S, height: S });
                    }
                    var A = Zt(0, p.width),
                      $ = A(y);
                    return ye(ye({}, p), {}, { width: $ });
                  });
                return E.createElement(Ae, null, n.renderRectanglesStatically(v));
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Hf(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              s = ie(this.props.background, !1);
            return a.map(function (c, f) {
              c.value;
              var l = c.background,
                h = X$(c, K$);
              if (!l) return null;
              var d = ye(
                ye(ye(ye(ye({}, h), {}, { fill: "#eee" }, l), s), ai(n.props, c, f)),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return E.createElement(
                sg,
                zi(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  d,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              s = a.yAxis,
              c = a.layout,
              f = a.children,
              l = Ze(f, Sa);
            if (!l) return null;
            var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2,
              d = function (p, g) {
                var x = Array.isArray(p.value) ? p.value[1] : p.value;
                return { x: p.x, y: p.y, value: x, errorVal: it(p, g) };
              },
              y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return E.createElement(
              Ae,
              y,
              l.map(function (v) {
                return E.cloneElement(v, {
                  key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: s,
                  layout: c,
                  offset: h,
                  dataPointFormatter: d,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              s = n.yAxis,
              c = n.left,
              f = n.top,
              l = n.width,
              h = n.height,
              d = n.isAnimationActive,
              y = n.background,
              v = n.id;
            if (i || !a || !a.length) return null;
            var p = this.state.isAnimationFinished,
              g = ee("recharts-bar", o),
              x = u && u.allowDataOverflow,
              w = s && s.allowDataOverflow,
              _ = x || w,
              m = te(v) ? this.id : v;
            return E.createElement(
              Ae,
              { className: g },
              x || w
                ? E.createElement(
                    "defs",
                    null,
                    E.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(m) },
                      E.createElement("rect", {
                        x: x ? c : c - l / 2,
                        y: w ? f : f - h / 2,
                        width: x ? l : l * 2,
                        height: w ? h : h * 2,
                      }),
                    ),
                  )
                : null,
              E.createElement(
                Ae,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: _ ? "url(#clipPath-".concat(m, ")") : null,
                },
                y ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(_, m),
              (!d || p) && Bt.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(D.PureComponent);
nx = Vt;
bt(Vt, "displayName", "Bar");
bt(Vt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Dn.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
bt(Vt, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    s = e.yAxisTicks,
    c = e.stackedData,
    f = e.dataStartIndex,
    l = e.displayedData,
    h = e.offset,
    d = yj(n, r);
  if (!d) return null;
  var y = t.layout,
    v = r.type.defaultProps,
    p = v !== void 0 ? ye(ye({}, v), r.props) : r.props,
    g = p.dataKey,
    x = p.children,
    w = p.minPointSize,
    _ = y === "horizontal" ? o : a,
    m = c ? _.scale.domain() : null,
    b = Sj({ numericAxis: _ }),
    O = Ze(x, _f),
    S = l.map(function (A, $) {
      var T, P, j, C, M, N;
      c ? (T = mj(c[f + $], m)) : ((T = it(A, g)), Array.isArray(T) || (T = [b, T]));
      var R = G$(w, nx.defaultProps.minPointSize)(T[1], $);
      if (y === "horizontal") {
        var L,
          F = [o.scale(T[0]), o.scale(T[1])],
          H = F[0],
          K = F[1];
        ((P = Vy({ axis: a, ticks: u, bandSize: i, offset: d.offset, entry: A, index: $ })),
          (j = (L = K ?? H) !== null && L !== void 0 ? L : void 0),
          (C = d.size));
        var W = H - K;
        if (
          ((M = Number.isNaN(W) ? 0 : W),
          (N = { x: P, y: o.y, width: C, height: o.height }),
          Math.abs(R) > 0 && Math.abs(M) < Math.abs(R))
        ) {
          var X = Ye(M || R) * (Math.abs(R) - Math.abs(M));
          ((j -= X), (M += X));
        }
      } else {
        var se = [a.scale(T[0]), a.scale(T[1])],
          ve = se[0],
          Re = se[1];
        if (
          ((P = ve),
          (j = Vy({ axis: o, ticks: s, bandSize: i, offset: d.offset, entry: A, index: $ })),
          (C = Re - ve),
          (M = d.size),
          (N = { x: a.x, y: j, width: a.width, height: M }),
          Math.abs(R) > 0 && Math.abs(C) < Math.abs(R))
        ) {
          var Tt = Ye(C || R) * (Math.abs(R) - Math.abs(C));
          C += Tt;
        }
      }
      return ye(
        ye(
          ye({}, A),
          {},
          { x: P, y: j, width: C, height: M, value: c ? T : T[1], payload: A, background: N },
          O && O[$] && O[$].props,
        ),
        {},
        { tooltipPayload: [F0(r, A)], tooltipPosition: { x: P + C / 2, y: j + M / 2 } },
      );
    });
  return ye({ data: S, layout: y }, h);
});
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
function nN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function fg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ox(n.key), n));
  }
}
function iN(e, t, r) {
  return (
    t && fg(e.prototype, t),
    r && fg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hg(Object(r), !0).forEach(function (n) {
          Ta(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ta(e, t, r) {
  return (
    (t = ox(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ox(e) {
  var t = aN(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function aN(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oN = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      s = t.layout,
      c = t.children,
      f = Object.keys(r),
      l = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      h = !!qe(c, Vt);
    return f.reduce(function (d, y) {
      var v = r[y],
        p = v.orientation,
        g = v.domain,
        x = v.padding,
        w = x === void 0 ? {} : x,
        _ = v.mirror,
        m = v.reversed,
        b = "".concat(p).concat(_ ? "Mirror" : ""),
        O,
        S,
        A,
        $,
        T;
      if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
        var P = g[1] - g[0],
          j = 1 / 0,
          C = v.categoricalDomain.sort(e1);
        if (
          (C.forEach(function (se, ve) {
            ve > 0 && (j = Math.min((se || 0) - (C[ve - 1] || 0), j));
          }),
          Number.isFinite(j))
        ) {
          var M = j / P,
            N = v.layout === "vertical" ? n.height : n.width;
          if ((v.padding === "gap" && (O = (M * N) / 2), v.padding === "no-gap")) {
            var R = Ut(t.barCategoryGap, M * N),
              L = (M * N) / 2;
            O = L - R - ((L - R) / N) * R;
          }
        }
      }
      (i === "xAxis"
        ? (S = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)])
        : i === "yAxis"
          ? (S =
              s === "horizontal"
                ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)]
                : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)])
          : (S = v.range),
        m && (S = [S[1], S[0]]));
      var F = dj(v, a, h),
        H = F.scale,
        K = F.realScaleType;
      (H.domain(g).range(S), vj(H));
      var W = Oj(H, Xe(Xe({}, v), {}, { realScaleType: K }));
      i === "xAxis"
        ? ((T = (p === "top" && !_) || (p === "bottom" && _)),
          (A = n.left),
          ($ = l[b] - T * v.height))
        : i === "yAxis" &&
          ((T = (p === "left" && !_) || (p === "right" && _)),
          (A = l[b] - T * v.width),
          ($ = n.top));
      var X = Xe(
        Xe(Xe({}, v), W),
        {},
        {
          realScaleType: K,
          x: A,
          y: $,
          scale: H,
          width: i === "xAxis" ? n.width : v.width,
          height: i === "yAxis" ? n.height : v.height,
        },
      );
      return (
        (X.bandSize = Ci(X, W)),
        !v.hide && i === "xAxis"
          ? (l[b] += (T ? -1 : 1) * X.height)
          : v.hide || (l[b] += (T ? -1 : 1) * X.width),
        Xe(Xe({}, d), {}, Ta({}, y, X))
      );
    }, {});
  },
  ux = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  uN = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return ux({ x: r, y: n }, { x: i, y: a });
  },
  sx = (function () {
    function e(t) {
      (nN(this, e), (this.scale = t));
    }
    return iN(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var s = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + s;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Ta(sx, "EPS", 1e-4);
var Yf = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return Xe(Xe({}, n), {}, Ta({}, i, sx.create(t[i])));
  }, {});
  return Xe(
    Xe({}, r),
    {},
    {
      apply: function (i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return $$(i, function (s, c) {
          return r[c].apply(s, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return q$(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function sN(e) {
  return ((e % 180) + 180) % 180;
}
var cN = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = sN(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(s);
  },
  jc,
  pg;
function lN() {
  if (pg) return jc;
  pg = 1;
  var e = Ot(),
    t = Rn(),
    r = fa();
  function n(i) {
    return function (a, o, u) {
      var s = Object(a);
      if (!t(a)) {
        var c = e(o, 3);
        ((a = r(a)),
          (o = function (l) {
            return c(s[l], l, s);
          }));
      }
      var f = i(a, o, u);
      return f > -1 ? s[c ? a[f] : f] : void 0;
    };
  }
  return ((jc = n), jc);
}
var Mc, dg;
function fN() {
  if (dg) return Mc;
  dg = 1;
  var e = Q0();
  function t(r) {
    var n = e(r),
      i = n % 1;
    return n === n ? (i ? n - i : n) : 0;
  }
  return ((Mc = t), Mc);
}
var Cc, vg;
function hN() {
  if (vg) return Cc;
  vg = 1;
  var e = Sb(),
    t = Ot(),
    r = fN(),
    n = Math.max;
  function i(a, o, u) {
    var s = a == null ? 0 : a.length;
    if (!s) return -1;
    var c = u == null ? 0 : r(u);
    return (c < 0 && (c = n(s + c, 0)), e(a, t(o, 3), c));
  }
  return ((Cc = i), Cc);
}
var Ic, yg;
function pN() {
  if (yg) return Ic;
  yg = 1;
  var e = lN(),
    t = hN(),
    r = e(t);
  return ((Ic = r), Ic);
}
pN();
var dN = Bg();
const vN = le(dN);
var yN = vN(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  cx = D.createContext(void 0),
  lx = D.createContext(void 0),
  fx = D.createContext(void 0),
  mN = D.createContext({}),
  hx = D.createContext(void 0),
  px = D.createContext(0),
  dx = D.createContext(0),
  mg = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      s = t.width,
      c = t.height,
      f = yN(a);
    return E.createElement(
      cx.Provider,
      { value: n },
      E.createElement(
        lx.Provider,
        { value: i },
        E.createElement(
          mN.Provider,
          { value: a },
          E.createElement(
            fx.Provider,
            { value: f },
            E.createElement(
              hx.Provider,
              { value: o },
              E.createElement(
                px.Provider,
                { value: c },
                E.createElement(dx.Provider, { value: s }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  gN = function () {
    return D.useContext(hx);
  },
  vx = function (t) {
    var r = D.useContext(cx);
    r == null && zt();
    var n = r[t];
    return (n == null && zt(), n);
  },
  yx = function (t) {
    var r = D.useContext(lx);
    r == null && zt();
    var n = r[t];
    return (n == null && zt(), n);
  },
  bN = function () {
    var t = D.useContext(fx);
    return t;
  },
  mx = function () {
    return D.useContext(dx);
  },
  gx = function () {
    return D.useContext(px);
  };
function wr(e) {
  "@babel/helpers - typeof";
  return (
    (wr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wr(e)
  );
}
function xN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xx(n.key), n));
  }
}
function _N(e, t, r) {
  return (t && wN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function ON(e, t, r) {
  return (
    (t = Gi(t)),
    SN(e, bx() ? Reflect.construct(t, r || [], Gi(e).constructor) : t.apply(e, r))
  );
}
function SN(e, t) {
  if (t && (wr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AN(e);
}
function AN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bx = function () {
    return !!e;
  })();
}
function Gi(e) {
  return (
    (Gi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Gi(e)
  );
}
function PN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Dl(e, t));
}
function Dl(e, t) {
  return (
    (Dl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Dl(e, t)
  );
}
function gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gg(Object(r), !0).forEach(function (n) {
          Zf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zf(e, t, r) {
  return (
    (t = xx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xx(e) {
  var t = TN(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function TN(e, t) {
  if (wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function EN(e, t) {
  return IN(e) || CN(e, t) || MN(e, t) || jN();
}
function jN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MN(e, t) {
  if (e) {
    if (typeof e == "string") return xg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xg(e, t);
  }
}
function xg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CN(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function IN(e) {
  if (Array.isArray(e)) return e;
}
function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ql.apply(this, arguments)
  );
}
var $N = function (t, r) {
    var n;
    return (
      E.isValidElement(t)
        ? (n = E.cloneElement(t, r))
        : Z(t)
          ? (n = t(r))
          : (n = E.createElement("line", ql({}, r, { className: "recharts-reference-line-line" }))),
      n
    );
  },
  NN = function (t, r, n, i, a, o, u, s, c) {
    var f = a.x,
      l = a.y,
      h = a.width,
      d = a.height;
    if (n) {
      var y = c.y,
        v = t.y.apply(y, { position: o });
      if (rt(c, "discard") && !t.y.isInRange(v)) return null;
      var p = [
        { x: f + h, y: v },
        { x: f, y: v },
      ];
      return s === "left" ? p.reverse() : p;
    }
    if (r) {
      var g = c.x,
        x = t.x.apply(g, { position: o });
      if (rt(c, "discard") && !t.x.isInRange(x)) return null;
      var w = [
        { x, y: l + d },
        { x, y: l },
      ];
      return u === "top" ? w.reverse() : w;
    }
    if (i) {
      var _ = c.segment,
        m = _.map(function (b) {
          return t.apply(b, { position: o });
        });
      return rt(c, "discard") &&
        j$(m, function (b) {
          return !t.isInRange(b);
        })
        ? null
        : m;
    }
    return null;
  };
function kN(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    s = e.alwaysShow,
    c = gN(),
    f = vx(i),
    l = yx(a),
    h = bN();
  if (!c || !h) return null;
  Dt(
    s === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var d = Yf({ x: f.scale, y: l.scale }),
    y = _e(t),
    v = _e(r),
    p = n && n.length === 2,
    g = NN(d, y, v, p, h, e.position, f.orientation, l.orientation, e);
  if (!g) return null;
  var x = EN(g, 2),
    w = x[0],
    _ = w.x,
    m = w.y,
    b = x[1],
    O = b.x,
    S = b.y,
    A = rt(e, "hidden") ? "url(#".concat(c, ")") : void 0,
    $ = bg(bg({ clipPath: A }, ie(e, !0)), {}, { x1: _, y1: m, x2: O, y2: S });
  return E.createElement(
    Ae,
    { className: ee("recharts-reference-line", u) },
    $N(o, $),
    Me.renderCallByParent(e, uN({ x1: _, y1: m, x2: O, y2: S })),
  );
}
var Jf = (function (e) {
  function t() {
    return (xN(this, t), ON(this, t, arguments));
  }
  return (
    PN(t, e),
    _N(t, [
      {
        key: "render",
        value: function () {
          return E.createElement(kN, this.props);
        },
      },
    ])
  );
})(E.Component);
Zf(Jf, "displayName", "ReferenceLine");
Zf(Jf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
function _r(e) {
  "@babel/helpers - typeof";
  return (
    (_r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _r(e)
  );
}
function wg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function _g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wg(Object(r), !0).forEach(function (n) {
          Ea(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function RN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function DN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, _x(n.key), n));
  }
}
function qN(e, t, r) {
  return (t && DN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function LN(e, t, r) {
  return (
    (t = Ki(t)),
    BN(e, wx() ? Reflect.construct(t, r || [], Ki(e).constructor) : t.apply(e, r))
  );
}
function BN(e, t) {
  if (t && (_r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return FN(e);
}
function FN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wx = function () {
    return !!e;
  })();
}
function Ki(e) {
  return (
    (Ki = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ki(e)
  );
}
function UN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Bl(e, t));
}
function Bl(e, t) {
  return (
    (Bl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Bl(e, t)
  );
}
function Ea(e, t, r) {
  return (
    (t = _x(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function _x(e) {
  var t = WN(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function WN(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zN = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = Yf({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return rt(t, "discard") && !o.isInRange(u) ? null : u;
  },
  ja = (function (e) {
    function t() {
      return (RN(this, t), LN(this, t, arguments));
    }
    return (
      UN(t, e),
      qN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              s = n.clipPathId,
              c = _e(i),
              f = _e(a);
            if (
              (Dt(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !c || !f)
            )
              return null;
            var l = zN(this.props);
            if (!l) return null;
            var h = l.x,
              d = l.y,
              y = this.props,
              v = y.shape,
              p = y.className,
              g = rt(this.props, "hidden") ? "url(#".concat(s, ")") : void 0,
              x = _g(_g({ clipPath: g }, ie(this.props, !0)), {}, { cx: h, cy: d });
            return E.createElement(
              Ae,
              { className: ee("recharts-reference-dot", p) },
              t.renderDot(v, x),
              Me.renderCallByParent(this.props, {
                x: h - o,
                y: d - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(E.Component);
Ea(ja, "displayName", "ReferenceDot");
Ea(ja, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
Ea(ja, "renderDot", function (e, t) {
  var r;
  return (
    E.isValidElement(e)
      ? (r = E.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = E.createElement(
            J0,
            Ll({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" }),
          )),
    r
  );
});
function Fl() {
  return (
    (Fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fl.apply(this, arguments)
  );
}
function Or(e) {
  "@babel/helpers - typeof";
  return (
    (Or =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Or(e)
  );
}
function Og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Og(Object(r), !0).forEach(function (n) {
          Ma(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Og(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function HN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function GN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Sx(n.key), n));
  }
}
function KN(e, t, r) {
  return (t && GN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function XN(e, t, r) {
  return (
    (t = Xi(t)),
    VN(e, Ox() ? Reflect.construct(t, r || [], Xi(e).constructor) : t.apply(e, r))
  );
}
function VN(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return YN(e);
}
function YN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ox() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ox = function () {
    return !!e;
  })();
}
function Xi(e) {
  return (
    (Xi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Xi(e)
  );
}
function ZN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ul(e, t));
}
function Ul(e, t) {
  return (
    (Ul = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ul(e, t)
  );
}
function Ma(e, t, r) {
  return (
    (t = Sx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Sx(e) {
  var t = JN(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function JN(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var QN = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      s = a.y1,
      c = a.y2,
      f = a.xAxis,
      l = a.yAxis;
    if (!f || !l) return null;
    var h = Yf({ x: f.scale, y: l.scale }),
      d = {
        x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin,
        y: n ? h.y.apply(s, { position: "start" }) : h.y.rangeMin,
      },
      y = {
        x: r ? h.x.apply(u, { position: "end" }) : h.x.rangeMax,
        y: i ? h.y.apply(c, { position: "end" }) : h.y.rangeMax,
      };
    return rt(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : ux(d, y);
  },
  Ca = (function (e) {
    function t() {
      return (HN(this, t), XN(this, t, arguments));
    }
    return (
      ZN(t, e),
      KN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              s = n.className,
              c = n.alwaysShow,
              f = n.clipPathId;
            Dt(
              c === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var l = _e(i),
              h = _e(a),
              d = _e(o),
              y = _e(u),
              v = this.props.shape;
            if (!l && !h && !d && !y && !v) return null;
            var p = QN(l, h, d, y, this.props);
            if (!p && !v) return null;
            var g = rt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return E.createElement(
              Ae,
              { className: ee("recharts-reference-area", s) },
              t.renderRect(v, Sg(Sg({ clipPath: g }, ie(this.props, !0)), p)),
              Me.renderCallByParent(this.props, p),
            );
          },
        },
      ])
    );
  })(E.Component);
Ma(Ca, "displayName", "ReferenceArea");
Ma(Ca, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
Ma(Ca, "renderRect", function (e, t) {
  var r;
  return (
    E.isValidElement(e)
      ? (r = E.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = E.createElement(Vf, Fl({}, t, { className: "recharts-reference-area-rect" }))),
    r
  );
});
function Ax(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function ek(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return cN(n, r);
}
function tk(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + u }
    : { start: n ? i + o : a + u, end: n ? i : a };
}
function Vi(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function rk(e, t) {
  return Ax(e, t + 1);
}
function nk(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      s = 0,
      c = 1,
      f = o,
      l = function () {
        var y = n?.[s];
        if (y === void 0) return { v: Ax(n, c) };
        var v = s,
          p,
          g = function () {
            return (p === void 0 && (p = r(y, v)), p);
          },
          x = y.coordinate,
          w = s === 0 || Vi(e, x, g, f, u);
        (w || ((s = 0), (f = o), (c += 1)), w && ((f = x + e * (g() / 2 + i)), (s += c)));
      },
      h;
    c <= a.length;
  )
    if (((h = l()), h)) return h.v;
  return [];
}
function Cn(e) {
  "@babel/helpers - typeof";
  return (
    (Cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cn(e)
  );
}
function Ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ag(Object(r), !0).forEach(function (n) {
          ik(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ag(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ik(e, t, r) {
  return (
    (t = ak(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ak(e) {
  var t = ok(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function ok(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uk(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      s = t.end,
      c = function (h) {
        var d = a[h],
          y,
          v = function () {
            return (y === void 0 && (y = r(d, h)), y);
          };
        if (h === o - 1) {
          var p = e * (d.coordinate + (e * v()) / 2 - s);
          a[h] = d = je(je({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e : d.coordinate });
        } else a[h] = d = je(je({}, d), {}, { tickCoord: d.coordinate });
        var g = Vi(e, d.tickCoord, v, u, s);
        g && ((s = d.tickCoord - e * (v() / 2 + i)), (a[h] = je(je({}, d), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    c(f);
  return a;
}
function sk(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    s = t.start,
    c = t.end;
  if (a) {
    var f = n[u - 1],
      l = r(f, u - 1),
      h = e * (f.coordinate + (e * l) / 2 - c);
    o[u - 1] = f = je(je({}, f), {}, { tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate });
    var d = Vi(
      e,
      f.tickCoord,
      function () {
        return l;
      },
      s,
      c,
    );
    d && ((c = f.tickCoord - e * (l / 2 + i)), (o[u - 1] = je(je({}, f), {}, { isShow: !0 })));
  }
  for (
    var y = a ? u - 1 : u,
      v = function (x) {
        var w = o[x],
          _,
          m = function () {
            return (_ === void 0 && (_ = r(w, x)), _);
          };
        if (x === 0) {
          var b = e * (w.coordinate - (e * m()) / 2 - s);
          o[x] = w = je(je({}, w), {}, { tickCoord: b < 0 ? w.coordinate - b * e : w.coordinate });
        } else o[x] = w = je(je({}, w), {}, { tickCoord: w.coordinate });
        var O = Vi(e, w.tickCoord, m, s, c);
        O && ((s = w.tickCoord + e * (m() / 2 + i)), (o[x] = je(je({}, w), {}, { isShow: !0 })));
      },
      p = 0;
    p < y;
    p++
  )
    v(p);
  return o;
}
function ck(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    s = e.interval,
    c = e.tickFormatter,
    f = e.unit,
    l = e.angle;
  if (!i || !i.length || !n) return [];
  if (B(s) || Dn.isSsr) return rk(i, typeof s == "number" && B(s) ? s : 0);
  var h = [],
    d = u === "top" || u === "bottom" ? "width" : "height",
    y = f && d === "width" ? Xr(f, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 },
    v = function (w, _) {
      var m = Z(c) ? c(w.value, _) : w.value;
      return d === "width"
        ? ek(Xr(m, { fontSize: t, letterSpacing: r }), y, l)
        : Xr(m, { fontSize: t, letterSpacing: r })[d];
    },
    p = i.length >= 2 ? Ye(i[1].coordinate - i[0].coordinate) : 1,
    g = tk(a, p, d);
  return s === "equidistantPreserveStart"
    ? nk(p, g, v, i, o)
    : (s === "preserveStart" || s === "preserveStartEnd"
        ? (h = sk(p, g, v, i, o, s === "preserveStartEnd"))
        : (h = uk(p, g, v, i, o)),
      h.filter(function (x) {
        return x.isShow;
      }));
}
var lk = ["viewBox"],
  fk = ["viewBox"],
  hk = ["ticks"];
function Sr(e) {
  "@babel/helpers - typeof";
  return (
    (Sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sr(e)
  );
}
function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
function Pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pg(Object(r), !0).forEach(function (n) {
          Qf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function $c(e, t) {
  if (e == null) return {};
  var r = pk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function pk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Tg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Tx(n.key), n));
  }
}
function vk(e, t, r) {
  return (
    t && Tg(e.prototype, t),
    r && Tg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yk(e, t, r) {
  return (
    (t = Yi(t)),
    mk(e, Px() ? Reflect.construct(t, r || [], Yi(e).constructor) : t.apply(e, r))
  );
}
function mk(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return gk(e);
}
function gk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Px() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Px = function () {
    return !!e;
  })();
}
function Yi(e) {
  return (
    (Yi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Yi(e)
  );
}
function bk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wl(e, t));
}
function Wl(e, t) {
  return (
    (Wl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Wl(e, t)
  );
}
function Qf(e, t, r) {
  return (
    (t = Tx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Tx(e) {
  var t = xk(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function xk(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ia = (function (e) {
  function t(r) {
    var n;
    return (
      dk(this, t),
      (n = yk(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    bk(t, e),
    vk(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = $c(n, lk),
              u = this.props,
              s = u.viewBox,
              c = $c(u, fk);
            return !ir(a, s) || !ir(o, c) || !ir(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              s = i.height,
              c = i.orientation,
              f = i.tickSize,
              l = i.mirror,
              h = i.tickMargin,
              d,
              y,
              v,
              p,
              g,
              x,
              w = l ? -1 : 1,
              _ = n.tickSize || f,
              m = B(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (c) {
              case "top":
                ((d = y = n.coordinate),
                  (p = o + +!l * s),
                  (v = p - w * _),
                  (x = v - w * h),
                  (g = m));
                break;
              case "left":
                ((v = p = n.coordinate),
                  (y = a + +!l * u),
                  (d = y - w * _),
                  (g = d - w * h),
                  (x = m));
                break;
              case "right":
                ((v = p = n.coordinate),
                  (y = a + +l * u),
                  (d = y + w * _),
                  (g = d + w * h),
                  (x = m));
                break;
              default:
                ((d = y = n.coordinate),
                  (p = o + +l * s),
                  (v = p + w * _),
                  (x = v + w * h),
                  (g = m));
                break;
            }
            return { line: { x1: d, y1: v, x2: y, y2: p }, tick: { x: g, y: x } };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              s = n.orientation,
              c = n.mirror,
              f = n.axisLine,
              l = xe(xe(xe({}, ie(this.props, !1)), ie(f, !1)), {}, { fill: "none" });
            if (s === "top" || s === "bottom") {
              var h = +((s === "top" && !c) || (s === "bottom" && c));
              l = xe(xe({}, l), {}, { x1: i, y1: a + h * u, x2: i + o, y2: a + h * u });
            } else {
              var d = +((s === "left" && !c) || (s === "right" && c));
              l = xe(xe({}, l), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + u });
            }
            return E.createElement(
              "line",
              rr({}, l, { className: ee("recharts-cartesian-axis-line", ze(f, "className")) }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              s = u.tickLine,
              c = u.stroke,
              f = u.tick,
              l = u.tickFormatter,
              h = u.unit,
              d = ck(xe(xe({}, this.props), {}, { ticks: n }), i, a),
              y = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              p = ie(this.props, !1),
              g = ie(f, !1),
              x = xe(xe({}, p), {}, { fill: "none" }, ie(s, !1)),
              w = d.map(function (_, m) {
                var b = o.getTickLineCoord(_),
                  O = b.line,
                  S = b.tick,
                  A = xe(
                    xe(
                      xe(
                        xe({ textAnchor: y, verticalAnchor: v }, p),
                        {},
                        { stroke: "none", fill: c },
                        g,
                      ),
                      S,
                    ),
                    {},
                    { index: m, payload: _, visibleTicksCount: d.length, tickFormatter: l },
                  );
                return E.createElement(
                  Ae,
                  rr(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(_.value, "-")
                        .concat(_.coordinate, "-")
                        .concat(_.tickCoord),
                    },
                    ai(o.props, _, m),
                  ),
                  s &&
                    E.createElement(
                      "line",
                      rr({}, x, O, {
                        className: ee("recharts-cartesian-axis-tick-line", ze(s, "className")),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      A,
                      "".concat(Z(l) ? l(_.value, m) : _.value).concat(h || ""),
                    ),
                );
              });
            return E.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              s = i.ticksGenerator,
              c = i.className,
              f = i.hide;
            if (f) return null;
            var l = this.props,
              h = l.ticks,
              d = $c(l, hk),
              y = h;
            return (
              Z(s) && (y = h && h.length > 0 ? s(this.props) : s(d)),
              o <= 0 || u <= 0 || !y || !y.length
                ? null
                : E.createElement(
                    Ae,
                    {
                      className: ee("recharts-cartesian-axis", c),
                      ref: function (p) {
                        n.layerReference = p;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(y, this.state.fontSize, this.state.letterSpacing),
                    Me.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o,
              u = ee(i.className, "recharts-cartesian-axis-tick-value");
            return (
              E.isValidElement(n)
                ? (o = E.cloneElement(n, xe(xe({}, i), {}, { className: u })))
                : Z(n)
                  ? (o = n(xe(xe({}, i), {}, { className: u })))
                  : (o = E.createElement(
                      yi,
                      rr({}, i, { className: "recharts-cartesian-axis-tick-value" }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(D.Component);
Qf(Ia, "displayName", "CartesianAxis");
Qf(Ia, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
function Ar(e) {
  "@babel/helpers - typeof";
  return (
    (Ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ar(e)
  );
}
function wk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _k(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Mx(n.key), n));
  }
}
function Ok(e, t, r) {
  return (t && _k(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Sk(e, t, r) {
  return (
    (t = Zi(t)),
    Ak(e, Ex() ? Reflect.construct(t, r || [], Zi(e).constructor) : t.apply(e, r))
  );
}
function Ak(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Pk(e);
}
function Pk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ex() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ex = function () {
    return !!e;
  })();
}
function Zi(e) {
  return (
    (Zi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Zi(e)
  );
}
function Tk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zl(e, t));
}
function zl(e, t) {
  return (
    (zl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    zl(e, t)
  );
}
function jx(e, t, r) {
  return (
    (t = Mx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Mx(e) {
  var t = Ek(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function Ek(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Hl() {
  return (
    (Hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hl.apply(this, arguments)
  );
}
function jk(e) {
  var t = e.xAxisId,
    r = mx(),
    n = gx(),
    i = vx(t);
  return i == null
    ? null
    : D.createElement(
        Ia,
        Hl({}, i, {
          className: ee("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return Rt(o, !0);
          },
        }),
      );
}
var $a = (function (e) {
  function t() {
    return (wk(this, t), Sk(this, t, arguments));
  }
  return (
    Tk(t, e),
    Ok(t, [
      {
        key: "render",
        value: function () {
          return D.createElement(jk, this.props);
        },
      },
    ])
  );
})(D.Component);
jx($a, "displayName", "XAxis");
jx($a, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function Pr(e) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pr(e)
  );
}
function Mk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ck(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $x(n.key), n));
  }
}
function Ik(e, t, r) {
  return (t && Ck(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function $k(e, t, r) {
  return (
    (t = Ji(t)),
    Nk(e, Cx() ? Reflect.construct(t, r || [], Ji(e).constructor) : t.apply(e, r))
  );
}
function Nk(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return kk(e);
}
function kk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Cx = function () {
    return !!e;
  })();
}
function Ji(e) {
  return (
    (Ji = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ji(e)
  );
}
function Rk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Gl(e, t));
}
function Gl(e, t) {
  return (
    (Gl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Gl(e, t)
  );
}
function Ix(e, t, r) {
  return (
    (t = $x(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function $x(e) {
  var t = Dk(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Dk(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Kl() {
  return (
    (Kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Kl.apply(this, arguments)
  );
}
var qk = function (t) {
    var r = t.yAxisId,
      n = mx(),
      i = gx(),
      a = yx(r);
    return a == null
      ? null
      : D.createElement(
          Ia,
          Kl({}, a, {
            className: ee("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (u) {
              return Rt(u, !0);
            },
          }),
        );
  },
  Na = (function (e) {
    function t() {
      return (Mk(this, t), $k(this, t, arguments));
    }
    return (
      Rk(t, e),
      Ik(t, [
        {
          key: "render",
          value: function () {
            return D.createElement(qk, this.props);
          },
        },
      ])
    );
  })(D.Component);
Ix(Na, "displayName", "YAxis");
Ix(Na, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function Eg(e) {
  return Uk(e) || Fk(e) || Bk(e) || Lk();
}
function Lk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bk(e, t) {
  if (e) {
    if (typeof e == "string") return Xl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xl(e, t);
  }
}
function Fk(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Uk(e) {
  if (Array.isArray(e)) return Xl(e);
}
function Xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Vl = function (t, r, n, i, a) {
    var o = Ze(t, Jf),
      u = Ze(t, ja),
      s = [].concat(Eg(o), Eg(u)),
      c = Ze(t, Ca),
      f = "".concat(i, "Id"),
      l = i[0],
      h = r;
    if (
      (s.length &&
        (h = s.reduce(function (v, p) {
          if (p.props[f] === n && rt(p.props, "extendDomain") && B(p.props[l])) {
            var g = p.props[l];
            return [Math.min(v[0], g), Math.max(v[1], g)];
          }
          return v;
        }, h)),
      c.length)
    ) {
      var d = "".concat(l, "1"),
        y = "".concat(l, "2");
      h = c.reduce(function (v, p) {
        if (p.props[f] === n && rt(p.props, "extendDomain") && B(p.props[d]) && B(p.props[y])) {
          var g = p.props[d],
            x = p.props[y];
          return [Math.min(v[0], g, x), Math.max(v[1], g, x)];
        }
        return v;
      }, h);
    }
    return (
      a &&
        a.length &&
        (h = a.reduce(function (v, p) {
          return B(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
        }, h)),
      h
    );
  },
  Nc = { exports: {} },
  jg;
function Wk() {
  return (
    jg ||
      ((jg = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, c, f) {
          ((this.fn = s), (this.context = c), (this.once = f || !1));
        }
        function a(s, c, f, l, h) {
          if (typeof f != "function") throw new TypeError("The listener must be a function");
          var d = new i(f, l || s, h),
            y = r ? r + c : c;
          return (
            s._events[y]
              ? s._events[y].fn
                ? (s._events[y] = [s._events[y], d])
                : s._events[y].push(d)
              : ((s._events[y] = d), s._eventsCount++),
            s
          );
        }
        function o(s, c) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[c];
        }
        function u() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((u.prototype.eventNames = function () {
          var c = [],
            f,
            l;
          if (this._eventsCount === 0) return c;
          for (l in (f = this._events)) t.call(f, l) && c.push(r ? l.slice(1) : l);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
        }),
          (u.prototype.listeners = function (c) {
            var f = r ? r + c : c,
              l = this._events[f];
            if (!l) return [];
            if (l.fn) return [l.fn];
            for (var h = 0, d = l.length, y = new Array(d); h < d; h++) y[h] = l[h].fn;
            return y;
          }),
          (u.prototype.listenerCount = function (c) {
            var f = r ? r + c : c,
              l = this._events[f];
            return l ? (l.fn ? 1 : l.length) : 0;
          }),
          (u.prototype.emit = function (c, f, l, h, d, y) {
            var v = r ? r + c : c;
            if (!this._events[v]) return !1;
            var p = this._events[v],
              g = arguments.length,
              x,
              w;
            if (p.fn) {
              switch ((p.once && this.removeListener(c, p.fn, void 0, !0), g)) {
                case 1:
                  return (p.fn.call(p.context), !0);
                case 2:
                  return (p.fn.call(p.context, f), !0);
                case 3:
                  return (p.fn.call(p.context, f, l), !0);
                case 4:
                  return (p.fn.call(p.context, f, l, h), !0);
                case 5:
                  return (p.fn.call(p.context, f, l, h, d), !0);
                case 6:
                  return (p.fn.call(p.context, f, l, h, d, y), !0);
              }
              for (w = 1, x = new Array(g - 1); w < g; w++) x[w - 1] = arguments[w];
              p.fn.apply(p.context, x);
            } else {
              var _ = p.length,
                m;
              for (w = 0; w < _; w++)
                switch ((p[w].once && this.removeListener(c, p[w].fn, void 0, !0), g)) {
                  case 1:
                    p[w].fn.call(p[w].context);
                    break;
                  case 2:
                    p[w].fn.call(p[w].context, f);
                    break;
                  case 3:
                    p[w].fn.call(p[w].context, f, l);
                    break;
                  case 4:
                    p[w].fn.call(p[w].context, f, l, h);
                    break;
                  default:
                    if (!x) for (m = 1, x = new Array(g - 1); m < g; m++) x[m - 1] = arguments[m];
                    p[w].fn.apply(p[w].context, x);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, f, l) {
            return a(this, c, f, l, !1);
          }),
          (u.prototype.once = function (c, f, l) {
            return a(this, c, f, l, !0);
          }),
          (u.prototype.removeListener = function (c, f, l, h) {
            var d = r ? r + c : c;
            if (!this._events[d]) return this;
            if (!f) return (o(this, d), this);
            var y = this._events[d];
            if (y.fn) y.fn === f && (!h || y.once) && (!l || y.context === l) && o(this, d);
            else {
              for (var v = 0, p = [], g = y.length; v < g; v++)
                (y[v].fn !== f || (h && !y[v].once) || (l && y[v].context !== l)) && p.push(y[v]);
              p.length ? (this._events[d] = p.length === 1 ? p[0] : p) : o(this, d);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (c) {
            var f;
            return (
              c
                ? ((f = r ? r + c : c), this._events[f] && o(this, f))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (e.exports = u));
      })(Nc)),
    Nc.exports
  );
}
var zk = Wk();
const Hk = le(zk);
var kc = new Hk(),
  Rc = "recharts.syncMouseEvents";
function In(e) {
  "@babel/helpers - typeof";
  return (
    (In =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    In(e)
  );
}
function Gk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Kk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Nx(n.key), n));
  }
}
function Xk(e, t, r) {
  return (t && Kk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Dc(e, t, r) {
  return (
    (t = Nx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Nx(e) {
  var t = Vk(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function Vk(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yk = (function () {
  function e() {
    (Gk(this, e),
      Dc(this, "activeIndex", 0),
      Dc(this, "coordinateList", []),
      Dc(this, "layout", "horizontal"));
  }
  return Xk(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          s = r.layout,
          c = s === void 0 ? null : s,
          f = r.offset,
          l = f === void 0 ? null : f,
          h = r.mouseHandlerCallback,
          d = h === void 0 ? null : h;
        ((this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = c ?? this.layout),
          (this.offset = l ?? this.offset),
          (this.mouseHandlerCallback = d ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)),
                this.spoofMouse());
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            s = this.coordinateList[this.activeIndex].coordinate,
            c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            l = a + s + c,
            h = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: l, pageY: h });
        }
      },
    },
  ]);
})();
function Zk(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0],
      i = e?.[1];
    if (n && i && B(n) && B(i)) return !0;
  }
  return !1;
}
function Jk(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function kx(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = Ee(t, r, n, i),
    u = Ee(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function Qk(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal") ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical") ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        s = t.cy,
        c = t.innerRadius,
        f = t.outerRadius,
        l = t.angle,
        h = Ee(u, s, c, l),
        d = Ee(u, s, f, l);
      ((n = h.x), (i = h.y), (a = d.x), (o = d.y));
    } else return kx(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function $n(e) {
  "@babel/helpers - typeof";
  return (
    ($n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $n(e)
  );
}
function Mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mg(Object(r), !0).forEach(function (n) {
          eR(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function eR(e, t, r) {
  return (
    (t = tR(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function tR(e) {
  var t = rR(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function rR(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nR(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    s = e.offset,
    c = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    l = e.layout,
    h = e.chartName,
    d =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !d || !a || !o || (h !== "ScatterChart" && i !== "axis")) return null;
  var y,
    v = hm;
  if (h === "ScatterChart") ((y = o), (v = jI));
  else if (h === "BarChart") ((y = Jk(l, o, s, f)), (v = Vf));
  else if (l === "radial") {
    var p = kx(o),
      g = p.cx,
      x = p.cy,
      w = p.radius,
      _ = p.startAngle,
      m = p.endAngle;
    ((y = { cx: g, cy: x, startAngle: _, endAngle: m, innerRadius: w, outerRadius: w }), (v = z0));
  } else ((y = { points: Qk(l, o, s) }), (v = hm));
  var b = ti(
    ti(ti(ti({ stroke: "#ccc", pointerEvents: "none" }, s), y), ie(d, !1)),
    {},
    { payload: u, payloadIndex: c, className: ee("recharts-tooltip-cursor", d.className) },
  );
  return D.isValidElement(d) ? D.cloneElement(d, b) : D.createElement(v, b);
}
var iR = ["item"],
  aR = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Tr(e) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
function Cg(e, t) {
  return sR(e) || uR(e, t) || Dx(e, t) || oR();
}
function oR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uR(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function sR(e) {
  if (Array.isArray(e)) return e;
}
function Ig(e, t) {
  if (e == null) return {};
  var r = cR(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function cR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lR(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function fR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, qx(n.key), n));
  }
}
function hR(e, t, r) {
  return (t && fR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function pR(e, t, r) {
  return (
    (t = Qi(t)),
    dR(e, Rx() ? Reflect.construct(t, r || [], Qi(e).constructor) : t.apply(e, r))
  );
}
function dR(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vR(e);
}
function vR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rx = function () {
    return !!e;
  })();
}
function Qi(e) {
  return (
    (Qi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Qi(e)
  );
}
function yR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yl(e, t));
}
function Yl(e, t) {
  return (
    (Yl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Yl(e, t)
  );
}
function Er(e) {
  return bR(e) || gR(e) || Dx(e) || mR();
}
function mR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dx(e, t) {
  if (e) {
    if (typeof e == "string") return Zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zl(e, t);
  }
}
function gR(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function bR(e) {
  if (Array.isArray(e)) return Zl(e);
}
function Zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $g(Object(r), !0).forEach(function (n) {
          G(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $g(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G(e, t, r) {
  return (
    (t = qx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function qx(e) {
  var t = xR(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function xR(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wR = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  _R = { width: "100%", height: "100%" },
  Lx = { x: 0, y: 0 };
function ri(e) {
  return e;
}
var OR = function (t, r) {
    return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
  },
  SR = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return I(I(I({}, i), Ee(i.cx, i.cy, u, o)), {}, { angle: o, radius: u });
      }
      var s = a.coordinate,
        c = i.angle;
      return I(I(I({}, i), Ee(i.cx, i.cy, s, c)), {}, { angle: c, radius: s });
    }
    return Lx;
  },
  ka = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, s) {
        var c = s.props.data;
        return c && c.length ? [].concat(Er(u), Er(c)) : u;
      }, []);
    return o.length > 0 ? o : t && t.length && B(i) && B(a) ? t.slice(i, a + 1) : [];
  };
function Bx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Jl = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = ka(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (s, c) {
          var f,
            l = (f = c.props.data) !== null && f !== void 0 ? f : r;
          l &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var h;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var d = l === void 0 ? u : l;
            h = qc(d, o.dataKey, i);
          } else h = (l && l[n]) || u[n];
          return h ? [].concat(Er(s), [F0(c, h)]) : s;
        }, []);
  },
  Ng = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = OR(a, n),
      u = t.orderedTooltipTicks,
      s = t.tooltipAxis,
      c = t.tooltipTicks,
      f = sj(o, u, c, s);
    if (f >= 0 && c) {
      var l = c[f] && c[f].value,
        h = Jl(t, r, f, l),
        d = SR(n, u, f, a);
      return { activeTooltipIndex: f, activeLabel: l, activePayload: h, activeCoordinate: d };
    }
    return null;
  },
  AR = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = t.stackOffset,
      d = L0(f, a);
    return n.reduce(function (y, v) {
      var p,
        g = v.type.defaultProps !== void 0 ? I(I({}, v.type.defaultProps), v.props) : v.props,
        x = g.type,
        w = g.dataKey,
        _ = g.allowDataOverflow,
        m = g.allowDuplicatedCategory,
        b = g.scale,
        O = g.ticks,
        S = g.includeHidden,
        A = g[o];
      if (y[A]) return y;
      var $ = ka(t.data, {
          graphicalItems: i.filter(function (W) {
            var X,
              se =
                o in W.props
                  ? W.props[o]
                  : (X = W.type.defaultProps) === null || X === void 0
                    ? void 0
                    : X[o];
            return se === A;
          }),
          dataStartIndex: s,
          dataEndIndex: c,
        }),
        T = $.length,
        P,
        j,
        C;
      Zk(g.domain, _, x) &&
        ((P = gl(g.domain, null, _)),
        d && (x === "number" || b !== "auto") && (C = Yr($, w, "category")));
      var M = Bx(x);
      if (!P || P.length === 0) {
        var N,
          R = (N = g.domain) !== null && N !== void 0 ? N : M;
        if (w) {
          if (((P = Yr($, w, x)), x === "category" && d)) {
            var L = Qw(P);
            m && L
              ? ((j = P), (P = Fi(0, T)))
              : m ||
                (P = Jy(R, P, v).reduce(function (W, X) {
                  return W.indexOf(X) >= 0 ? W : [].concat(Er(W), [X]);
                }, []));
          } else if (x === "category")
            m
              ? (P = P.filter(function (W) {
                  return W !== "" && !te(W);
                }))
              : (P = Jy(R, P, v).reduce(function (W, X) {
                  return W.indexOf(X) >= 0 || X === "" || te(X) ? W : [].concat(Er(W), [X]);
                }, []));
          else if (x === "number") {
            var F = pj(
              $,
              i.filter(function (W) {
                var X,
                  se,
                  ve =
                    o in W.props
                      ? W.props[o]
                      : (X = W.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X[o],
                  Re =
                    "hide" in W.props
                      ? W.props.hide
                      : (se = W.type.defaultProps) === null || se === void 0
                        ? void 0
                        : se.hide;
                return ve === A && (S || !Re);
              }),
              w,
              a,
              f,
            );
            F && (P = F);
          }
          d && (x === "number" || b !== "auto") && (C = Yr($, w, "category"));
        } else
          d
            ? (P = Fi(0, T))
            : u && u[A] && u[A].hasStack && x === "number"
              ? (P = h === "expand" ? [0, 1] : B0(u[A].stackGroups, s, c))
              : (P = q0(
                  $,
                  i.filter(function (W) {
                    var X = o in W.props ? W.props[o] : W.type.defaultProps[o],
                      se = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
                    return X === A && (S || !se);
                  }),
                  x,
                  f,
                  !0,
                ));
        if (x === "number") ((P = Vl(l, P, A, a, O)), R && (P = gl(R, P, _)));
        else if (x === "category" && R) {
          var H = R,
            K = P.every(function (W) {
              return H.indexOf(W) >= 0;
            });
          K && (P = H);
        }
      }
      return I(
        I({}, y),
        {},
        G(
          {},
          A,
          I(
            I({}, g),
            {},
            {
              axisType: a,
              domain: P,
              categoricalDomain: C,
              duplicateDomain: j,
              originalDomain: (p = g.domain) !== null && p !== void 0 ? p : M,
              isCategorical: d,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  PR = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = ka(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: c }),
      d = h.length,
      y = L0(f, a),
      v = -1;
    return n.reduce(function (p, g) {
      var x = g.type.defaultProps !== void 0 ? I(I({}, g.type.defaultProps), g.props) : g.props,
        w = x[o],
        _ = Bx("number");
      if (!p[w]) {
        v++;
        var m;
        return (
          y
            ? (m = Fi(0, d))
            : u && u[w] && u[w].hasStack
              ? ((m = B0(u[w].stackGroups, s, c)), (m = Vl(l, m, w, a)))
              : ((m = gl(
                  _,
                  q0(
                    h,
                    n.filter(function (b) {
                      var O,
                        S,
                        A =
                          o in b.props
                            ? b.props[o]
                            : (O = b.type.defaultProps) === null || O === void 0
                              ? void 0
                              : O[o],
                        $ =
                          "hide" in b.props
                            ? b.props.hide
                            : (S = b.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S.hide;
                      return A === w && !$;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (m = Vl(l, m, w, a))),
          I(
            I({}, p),
            {},
            G(
              {},
              w,
              I(
                I({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: ze(wR, "".concat(a, ".").concat(v % 2), null),
                  domain: m,
                  originalDomain: _,
                  isCategorical: y,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return p;
    }, {});
  },
  TR = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.children,
      l = "".concat(i, "Id"),
      h = Ze(f, a),
      d = {};
    return (
      h && h.length
        ? (d = AR(t, {
            axes: h,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: c,
          }))
        : o &&
          o.length &&
          (d = PR(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: c,
          })),
      d
    );
  },
  ER = function (t) {
    var r = er(t),
      n = Rt(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: xf(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Ci(r, n),
    };
  },
  kg = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = qe(r, br),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  jR = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = ct(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  Rg = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  MR = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      s = u === void 0 ? {} : u,
      c = n.width,
      f = n.height,
      l = n.children,
      h = n.margin || {},
      d = qe(l, br),
      y = qe(l, ar),
      v = Object.keys(s).reduce(
        function (m, b) {
          var O = s[b],
            S = O.orientation;
          return !O.mirror && !O.hide ? I(I({}, m), {}, G({}, S, m[S] + O.width)) : m;
        },
        { left: h.left || 0, right: h.right || 0 },
      ),
      p = Object.keys(o).reduce(
        function (m, b) {
          var O = o[b],
            S = O.orientation;
          return !O.mirror && !O.hide
            ? I(I({}, m), {}, G({}, S, ze(m, "".concat(S)) + O.height))
            : m;
        },
        { top: h.top || 0, bottom: h.bottom || 0 },
      ),
      g = I(I({}, p), v),
      x = g.bottom;
    (d && (g.bottom += d.props.height || br.defaultProps.height), y && r && (g = fj(g, i, n, r)));
    var w = c - g.left - g.right,
      _ = f - g.top - g.bottom;
    return I(I({ brushBottom: x }, g), {}, { width: Math.max(w, 0), height: Math.max(_, 0) });
  },
  CR = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  IR = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      s = t.axisComponents,
      c = t.legendContent,
      f = t.formatAxisMap,
      l = t.defaultProps,
      h = function (g, x) {
        var w = x.graphicalItems,
          _ = x.stackGroups,
          m = x.offset,
          b = x.updateId,
          O = x.dataStartIndex,
          S = x.dataEndIndex,
          A = g.barSize,
          $ = g.layout,
          T = g.barGap,
          P = g.barCategoryGap,
          j = g.maxBarSize,
          C = Rg($),
          M = C.numericAxisName,
          N = C.cateAxisName,
          R = jR(w),
          L = [];
        return (
          w.forEach(function (F, H) {
            var K = ka(g.data, { graphicalItems: [F], dataStartIndex: O, dataEndIndex: S }),
              W = F.type.defaultProps !== void 0 ? I(I({}, F.type.defaultProps), F.props) : F.props,
              X = W.dataKey,
              se = W.maxBarSize,
              ve = W["".concat(M, "Id")],
              Re = W["".concat(N, "Id")],
              Tt = {},
              Ie = s.reduce(function (Et, jt) {
                var Ra = x["".concat(jt.axisType, "Map")],
                  eh = W["".concat(jt.axisType, "Id")];
                (Ra && Ra[eh]) || jt.axisType === "zAxis" || zt();
                var th = Ra[eh];
                return I(
                  I({}, Et),
                  {},
                  G(G({}, jt.axisType, th), "".concat(jt.axisType, "Ticks"), Rt(th)),
                );
              }, Tt),
              U = Ie[N],
              V = Ie["".concat(N, "Ticks")],
              Y = _ && _[ve] && _[ve].hasStack && Aj(F, _[ve].stackGroups),
              k = ct(F.type).indexOf("Bar") >= 0,
              pe = Ci(U, V),
              J = [],
              ge = R && cj({ barSize: A, stackGroups: _, totalSize: CR(Ie, N) });
            if (k) {
              var be,
                $e,
                mt = te(se) ? j : se,
                Yt =
                  (be = ($e = Ci(U, V, !0)) !== null && $e !== void 0 ? $e : mt) !== null &&
                  be !== void 0
                    ? be
                    : 0;
              ((J = lj({
                barGap: T,
                barCategoryGap: P,
                bandSize: Yt !== pe ? Yt : pe,
                sizeList: ge[Re],
                maxBarSize: mt,
              })),
                Yt !== pe &&
                  (J = J.map(function (Et) {
                    return I(
                      I({}, Et),
                      {},
                      {
                        position: I(
                          I({}, Et.position),
                          {},
                          { offset: Et.position.offset - Yt / 2 },
                        ),
                      },
                    );
                  })));
            }
            var Un = F && F.type && F.type.getComposedData;
            Un &&
              L.push({
                props: I(
                  I(
                    {},
                    Un(
                      I(
                        I({}, Ie),
                        {},
                        {
                          displayedData: K,
                          props: g,
                          dataKey: X,
                          item: F,
                          bandSize: pe,
                          barPosition: J,
                          offset: m,
                          stackedData: Y,
                          layout: $,
                          dataStartIndex: O,
                          dataEndIndex: S,
                        },
                      ),
                    ),
                  ),
                  {},
                  G(
                    G(G({ key: F.key || "item-".concat(H) }, M, Ie[M]), N, Ie[N]),
                    "animationId",
                    b,
                  ),
                ),
                childIndex: f1(F, g.children),
                item: F,
              });
          }),
          L
        );
      },
      d = function (g, x) {
        var w = g.props,
          _ = g.dataStartIndex,
          m = g.dataEndIndex,
          b = g.updateId;
        if (!pp({ props: w })) return null;
        var O = w.children,
          S = w.layout,
          A = w.stackOffset,
          $ = w.data,
          T = w.reverseStackOrder,
          P = Rg(S),
          j = P.numericAxisName,
          C = P.cateAxisName,
          M = Ze(O, n),
          N = _j($, M, "".concat(j, "Id"), "".concat(C, "Id"), A, T),
          R = s.reduce(function (W, X) {
            var se = "".concat(X.axisType, "Map");
            return I(
              I({}, W),
              {},
              G(
                {},
                se,
                TR(
                  w,
                  I(
                    I({}, X),
                    {},
                    {
                      graphicalItems: M,
                      stackGroups: X.axisType === j && N,
                      dataStartIndex: _,
                      dataEndIndex: m,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          L = MR(I(I({}, R), {}, { props: w, graphicalItems: M }), x?.legendBBox);
        Object.keys(R).forEach(function (W) {
          R[W] = f(w, R[W], L, W.replace("Map", ""), r);
        });
        var F = R["".concat(C, "Map")],
          H = ER(F),
          K = h(
            w,
            I(
              I({}, R),
              {},
              {
                dataStartIndex: _,
                dataEndIndex: m,
                updateId: b,
                graphicalItems: M,
                stackGroups: N,
                offset: L,
              },
            ),
          );
        return I(
          I({ formattedGraphicalItems: K, graphicalItems: M, offset: L, stackGroups: N }, H),
          R,
        );
      },
      y = (function (p) {
        function g(x) {
          var w, _, m;
          return (
            lR(this, g),
            (m = pR(this, g, [x])),
            G(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            G(m, "accessibilityManager", new Yk()),
            G(m, "handleLegendBBoxUpdate", function (b) {
              if (b) {
                var O = m.state,
                  S = O.dataStartIndex,
                  A = O.dataEndIndex,
                  $ = O.updateId;
                m.setState(
                  I(
                    { legendBBox: b },
                    d(
                      { props: m.props, dataStartIndex: S, dataEndIndex: A, updateId: $ },
                      I(I({}, m.state), {}, { legendBBox: b }),
                    ),
                  ),
                );
              }
            }),
            G(m, "handleReceiveSyncEvent", function (b, O, S) {
              if (m.props.syncId === b) {
                if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function") return;
                m.applySyncEvent(O);
              }
            }),
            G(m, "handleBrushChange", function (b) {
              var O = b.startIndex,
                S = b.endIndex;
              if (O !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
                var A = m.state.updateId;
                (m.setState(function () {
                  return I(
                    { dataStartIndex: O, dataEndIndex: S },
                    d({ props: m.props, dataStartIndex: O, dataEndIndex: S, updateId: A }, m.state),
                  );
                }),
                  m.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: S }));
              }
            }),
            G(m, "handleMouseEnter", function (b) {
              var O = m.getMouseInfo(b);
              if (O) {
                var S = I(I({}, O), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var A = m.props.onMouseEnter;
                Z(A) && A(S, b);
              }
            }),
            G(m, "triggeredAfterMouseMove", function (b) {
              var O = m.getMouseInfo(b),
                S = O ? I(I({}, O), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
              (m.setState(S), m.triggerSyncEvent(S));
              var A = m.props.onMouseMove;
              Z(A) && A(S, b);
            }),
            G(m, "handleItemMouseEnter", function (b) {
              m.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: b,
                  activePayload: b.tooltipPayload,
                  activeCoordinate: b.tooltipPosition || { x: b.cx, y: b.cy },
                };
              });
            }),
            G(m, "handleItemMouseLeave", function () {
              m.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            G(m, "handleMouseMove", function (b) {
              (b.persist(), m.throttleTriggeredAfterMouseMove(b));
            }),
            G(m, "handleMouseLeave", function (b) {
              m.throttleTriggeredAfterMouseMove.cancel();
              var O = { isTooltipActive: !1 };
              (m.setState(O), m.triggerSyncEvent(O));
              var S = m.props.onMouseLeave;
              Z(S) && S(O, b);
            }),
            G(m, "handleOuterEvent", function (b) {
              var O = l1(b),
                S = ze(m.props, "".concat(O));
              if (O && Z(S)) {
                var A, $;
                (/.*touch.*/i.test(O)
                  ? ($ = m.getMouseInfo(b.changedTouches[0]))
                  : ($ = m.getMouseInfo(b)),
                  S((A = $) !== null && A !== void 0 ? A : {}, b));
              }
            }),
            G(m, "handleClick", function (b) {
              var O = m.getMouseInfo(b);
              if (O) {
                var S = I(I({}, O), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var A = m.props.onClick;
                Z(A) && A(S, b);
              }
            }),
            G(m, "handleMouseDown", function (b) {
              var O = m.props.onMouseDown;
              if (Z(O)) {
                var S = m.getMouseInfo(b);
                O(S, b);
              }
            }),
            G(m, "handleMouseUp", function (b) {
              var O = m.props.onMouseUp;
              if (Z(O)) {
                var S = m.getMouseInfo(b);
                O(S, b);
              }
            }),
            G(m, "handleTouchMove", function (b) {
              b.changedTouches != null &&
                b.changedTouches.length > 0 &&
                m.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
            }),
            G(m, "handleTouchStart", function (b) {
              b.changedTouches != null &&
                b.changedTouches.length > 0 &&
                m.handleMouseDown(b.changedTouches[0]);
            }),
            G(m, "handleTouchEnd", function (b) {
              b.changedTouches != null &&
                b.changedTouches.length > 0 &&
                m.handleMouseUp(b.changedTouches[0]);
            }),
            G(m, "handleDoubleClick", function (b) {
              var O = m.props.onDoubleClick;
              if (Z(O)) {
                var S = m.getMouseInfo(b);
                O(S, b);
              }
            }),
            G(m, "handleContextMenu", function (b) {
              var O = m.props.onContextMenu;
              if (Z(O)) {
                var S = m.getMouseInfo(b);
                O(S, b);
              }
            }),
            G(m, "triggerSyncEvent", function (b) {
              m.props.syncId !== void 0 && kc.emit(Rc, m.props.syncId, b, m.eventEmitterSymbol);
            }),
            G(m, "applySyncEvent", function (b) {
              var O = m.props,
                S = O.layout,
                A = O.syncMethod,
                $ = m.state.updateId,
                T = b.dataStartIndex,
                P = b.dataEndIndex;
              if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
                m.setState(
                  I(
                    { dataStartIndex: T, dataEndIndex: P },
                    d({ props: m.props, dataStartIndex: T, dataEndIndex: P, updateId: $ }, m.state),
                  ),
                );
              else if (b.activeTooltipIndex !== void 0) {
                var j = b.chartX,
                  C = b.chartY,
                  M = b.activeTooltipIndex,
                  N = m.state,
                  R = N.offset,
                  L = N.tooltipTicks;
                if (!R) return;
                if (typeof A == "function") M = A(L, b);
                else if (A === "value") {
                  M = -1;
                  for (var F = 0; F < L.length; F++)
                    if (L[F].value === b.activeLabel) {
                      M = F;
                      break;
                    }
                }
                var H = I(I({}, R), {}, { x: R.left, y: R.top }),
                  K = Math.min(j, H.x + H.width),
                  W = Math.min(C, H.y + H.height),
                  X = L[M] && L[M].value,
                  se = Jl(m.state, m.props.data, M),
                  ve = L[M]
                    ? {
                        x: S === "horizontal" ? L[M].coordinate : K,
                        y: S === "horizontal" ? W : L[M].coordinate,
                      }
                    : Lx;
                m.setState(
                  I(
                    I({}, b),
                    {},
                    {
                      activeLabel: X,
                      activeCoordinate: ve,
                      activePayload: se,
                      activeTooltipIndex: M,
                    },
                  ),
                );
              } else m.setState(b);
            }),
            G(m, "renderCursor", function (b) {
              var O,
                S = m.state,
                A = S.isTooltipActive,
                $ = S.activeCoordinate,
                T = S.activePayload,
                P = S.offset,
                j = S.activeTooltipIndex,
                C = S.tooltipAxisBandSize,
                M = m.getTooltipEventType(),
                N = (O = b.props.active) !== null && O !== void 0 ? O : A,
                R = m.props.layout,
                L = b.key || "_recharts-cursor";
              return E.createElement(nR, {
                key: L,
                activeCoordinate: $,
                activePayload: T,
                activeTooltipIndex: j,
                chartName: r,
                element: b,
                isActive: N,
                layout: R,
                offset: P,
                tooltipAxisBandSize: C,
                tooltipEventType: M,
              });
            }),
            G(m, "renderPolarAxis", function (b, O, S) {
              var A = ze(b, "type.axisType"),
                $ = ze(m.state, "".concat(A, "Map")),
                T = b.type.defaultProps,
                P = T !== void 0 ? I(I({}, T), b.props) : b.props,
                j = $ && $[P["".concat(A, "Id")]];
              return D.cloneElement(
                b,
                I(
                  I({}, j),
                  {},
                  {
                    className: ee(A, j.className),
                    key: b.key || "".concat(O, "-").concat(S),
                    ticks: Rt(j, !0),
                  },
                ),
              );
            }),
            G(m, "renderPolarGrid", function (b) {
              var O = b.props,
                S = O.radialLines,
                A = O.polarAngles,
                $ = O.polarRadius,
                T = m.state,
                P = T.radiusAxisMap,
                j = T.angleAxisMap,
                C = er(P),
                M = er(j),
                N = M.cx,
                R = M.cy,
                L = M.innerRadius,
                F = M.outerRadius;
              return D.cloneElement(b, {
                polarAngles: Array.isArray(A)
                  ? A
                  : Rt(M, !0).map(function (H) {
                      return H.coordinate;
                    }),
                polarRadius: Array.isArray($)
                  ? $
                  : Rt(C, !0).map(function (H) {
                      return H.coordinate;
                    }),
                cx: N,
                cy: R,
                innerRadius: L,
                outerRadius: F,
                key: b.key || "polar-grid",
                radialLines: S,
              });
            }),
            G(m, "renderLegend", function () {
              var b = m.state.formattedGraphicalItems,
                O = m.props,
                S = O.children,
                A = O.width,
                $ = O.height,
                T = m.props.margin || {},
                P = A - (T.left || 0) - (T.right || 0),
                j = R0({
                  children: S,
                  formattedGraphicalItems: b,
                  legendWidth: P,
                  legendContent: c,
                });
              if (!j) return null;
              var C = j.item,
                M = Ig(j, iR);
              return D.cloneElement(
                C,
                I(
                  I({}, M),
                  {},
                  {
                    chartWidth: A,
                    chartHeight: $,
                    margin: T,
                    onBBoxUpdate: m.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            G(m, "renderTooltip", function () {
              var b,
                O = m.props,
                S = O.children,
                A = O.accessibilityLayer,
                $ = qe(S, Qe);
              if (!$) return null;
              var T = m.state,
                P = T.isTooltipActive,
                j = T.activeCoordinate,
                C = T.activePayload,
                M = T.activeLabel,
                N = T.offset,
                R = (b = $.props.active) !== null && b !== void 0 ? b : P;
              return D.cloneElement($, {
                viewBox: I(I({}, N), {}, { x: N.left, y: N.top }),
                active: R,
                label: M,
                payload: R ? C : [],
                coordinate: j,
                accessibilityLayer: A,
              });
            }),
            G(m, "renderBrush", function (b) {
              var O = m.props,
                S = O.margin,
                A = O.data,
                $ = m.state,
                T = $.offset,
                P = $.dataStartIndex,
                j = $.dataEndIndex,
                C = $.updateId;
              return D.cloneElement(b, {
                key: b.key || "_recharts-brush",
                onChange: Zn(m.handleBrushChange, b.props.onChange),
                data: A,
                x: B(b.props.x) ? b.props.x : T.left,
                y: B(b.props.y) ? b.props.y : T.top + T.height + T.brushBottom - (S.bottom || 0),
                width: B(b.props.width) ? b.props.width : T.width,
                startIndex: P,
                endIndex: j,
                updateId: "brush-".concat(C),
              });
            }),
            G(m, "renderReferenceElement", function (b, O, S) {
              if (!b) return null;
              var A = m,
                $ = A.clipPathId,
                T = m.state,
                P = T.xAxisMap,
                j = T.yAxisMap,
                C = T.offset,
                M = b.type.defaultProps || {},
                N = b.props,
                R = N.xAxisId,
                L = R === void 0 ? M.xAxisId : R,
                F = N.yAxisId,
                H = F === void 0 ? M.yAxisId : F;
              return D.cloneElement(b, {
                key: b.key || "".concat(O, "-").concat(S),
                xAxis: P[L],
                yAxis: j[H],
                viewBox: { x: C.left, y: C.top, width: C.width, height: C.height },
                clipPathId: $,
              });
            }),
            G(m, "renderActivePoints", function (b) {
              var O = b.item,
                S = b.activePoint,
                A = b.basePoint,
                $ = b.childIndex,
                T = b.isRange,
                P = [],
                j = O.props.key,
                C =
                  O.item.type.defaultProps !== void 0
                    ? I(I({}, O.item.type.defaultProps), O.item.props)
                    : O.item.props,
                M = C.activeDot,
                N = C.dataKey,
                R = I(
                  I(
                    {
                      index: $,
                      dataKey: N,
                      cx: S.x,
                      cy: S.y,
                      r: 4,
                      fill: Xf(O.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: S.payload,
                      value: S.value,
                    },
                    ie(M, !1),
                  ),
                  ii(M),
                );
              return (
                P.push(g.renderActiveDot(M, R, "".concat(j, "-activePoint-").concat($))),
                A
                  ? P.push(
                      g.renderActiveDot(
                        M,
                        I(I({}, R), {}, { cx: A.x, cy: A.y }),
                        "".concat(j, "-basePoint-").concat($),
                      ),
                    )
                  : T && P.push(null),
                P
              );
            }),
            G(m, "renderGraphicChild", function (b, O, S) {
              var A = m.filterFormatItem(b, O, S);
              if (!A) return null;
              var $ = m.getTooltipEventType(),
                T = m.state,
                P = T.isTooltipActive,
                j = T.tooltipAxis,
                C = T.activeTooltipIndex,
                M = T.activeLabel,
                N = m.props.children,
                R = qe(N, Qe),
                L = A.props,
                F = L.points,
                H = L.isRange,
                K = L.baseLine,
                W =
                  A.item.type.defaultProps !== void 0
                    ? I(I({}, A.item.type.defaultProps), A.item.props)
                    : A.item.props,
                X = W.activeDot,
                se = W.hide,
                ve = W.activeBar,
                Re = W.activeShape,
                Tt = !!(!se && P && R && (X || ve || Re)),
                Ie = {};
              $ !== "axis" && R && R.props.trigger === "click"
                ? (Ie = { onClick: Zn(m.handleItemMouseEnter, b.props.onClick) })
                : $ !== "axis" &&
                  (Ie = {
                    onMouseLeave: Zn(m.handleItemMouseLeave, b.props.onMouseLeave),
                    onMouseEnter: Zn(m.handleItemMouseEnter, b.props.onMouseEnter),
                  });
              var U = D.cloneElement(b, I(I({}, A.props), Ie));
              function V(jt) {
                return typeof j.dataKey == "function" ? j.dataKey(jt.payload) : null;
              }
              if (Tt)
                if (C >= 0) {
                  var Y, k;
                  if (j.dataKey && !j.allowDuplicatedCategory) {
                    var pe =
                      typeof j.dataKey == "function" ? V : "payload.".concat(j.dataKey.toString());
                    ((Y = qc(F, pe, M)), (k = H && K && qc(K, pe, M)));
                  } else ((Y = F?.[C]), (k = H && K && K[C]));
                  if (Re || ve) {
                    var J = b.props.activeIndex !== void 0 ? b.props.activeIndex : C;
                    return [
                      D.cloneElement(b, I(I(I({}, A.props), Ie), {}, { activeIndex: J })),
                      null,
                      null,
                    ];
                  }
                  if (!te(Y))
                    return [U].concat(
                      Er(
                        m.renderActivePoints({
                          item: A,
                          activePoint: Y,
                          basePoint: k,
                          childIndex: C,
                          isRange: H,
                        }),
                      ),
                    );
                } else {
                  var ge,
                    be =
                      (ge = m.getItemByXY(m.state.activeCoordinate)) !== null && ge !== void 0
                        ? ge
                        : { graphicalItem: U },
                    $e = be.graphicalItem,
                    mt = $e.item,
                    Yt = mt === void 0 ? b : mt,
                    Un = $e.childIndex,
                    Et = I(I(I({}, A.props), Ie), {}, { activeIndex: Un });
                  return [D.cloneElement(Yt, Et), null, null];
                }
              return H ? [U, null, null] : [U, null];
            }),
            G(m, "renderCustomized", function (b, O, S) {
              return D.cloneElement(
                b,
                I(I({ key: "recharts-customized-".concat(S) }, m.props), m.state),
              );
            }),
            G(m, "renderMap", {
              CartesianGrid: { handler: ri, once: !0 },
              ReferenceArea: { handler: m.renderReferenceElement },
              ReferenceLine: { handler: ri },
              ReferenceDot: { handler: m.renderReferenceElement },
              XAxis: { handler: ri },
              YAxis: { handler: ri },
              Brush: { handler: m.renderBrush, once: !0 },
              Bar: { handler: m.renderGraphicChild },
              Line: { handler: m.renderGraphicChild },
              Area: { handler: m.renderGraphicChild },
              Radar: { handler: m.renderGraphicChild },
              RadialBar: { handler: m.renderGraphicChild },
              Scatter: { handler: m.renderGraphicChild },
              Pie: { handler: m.renderGraphicChild },
              Funnel: { handler: m.renderGraphicChild },
              Tooltip: { handler: m.renderCursor, once: !0 },
              PolarGrid: { handler: m.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: m.renderPolarAxis },
              PolarRadiusAxis: { handler: m.renderPolarAxis },
              Customized: { handler: m.renderCustomized },
            }),
            (m.clipPathId = "".concat(
              (w = x.id) !== null && w !== void 0 ? w : oa("recharts"),
              "-clip",
            )),
            (m.throttleTriggeredAfterMouseMove = Db(
              m.triggeredAfterMouseMove,
              (_ = x.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60,
            )),
            (m.state = {}),
            m
          );
        }
        return (
          yR(g, p),
          hR(g, [
            {
              key: "componentDidMount",
              value: function () {
                var w, _;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
                      top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var w = this.props,
                  _ = w.children,
                  m = w.data,
                  b = w.height,
                  O = w.layout,
                  S = qe(_, Qe);
                if (S) {
                  var A = S.props.defaultIndex;
                  if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
                    var $ = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value,
                      T = Jl(this.state, m, A, $),
                      P = this.state.tooltipTicks[A].coordinate,
                      j = (this.state.offset.top + b) / 2,
                      C = O === "horizontal",
                      M = C ? { x: P, y: j } : { y: P, x: j },
                      N = this.state.formattedGraphicalItems.find(function (L) {
                        var F = L.item;
                        return F.type.name === "Scatter";
                      });
                    N &&
                      ((M = I(I({}, M), N.props.points[A].tooltipPosition)),
                      (T = N.props.points[A].tooltipPayload));
                    var R = {
                      activeTooltipIndex: A,
                      isTooltipActive: !0,
                      activeLabel: $,
                      activePayload: T,
                      activeCoordinate: M,
                    };
                    (this.setState(R), this.renderCursor(S), this.accessibilityManager.setIndex(A));
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (w, _) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== _.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== w.layout &&
                    this.accessibilityManager.setDetails({ layout: this.props.layout }),
                  this.props.margin !== w.margin)
                ) {
                  var m, b;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
                      top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (w) {
                Bc([qe(w.children, Qe)], [qe(this.props.children, Qe)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var w = qe(this.props.children, Qe);
                if (w && typeof w.props.shared == "boolean") {
                  var _ = w.props.shared ? "axis" : "item";
                  return u.indexOf(_) >= 0 ? _ : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (w) {
                if (!this.container) return null;
                var _ = this.container,
                  m = _.getBoundingClientRect(),
                  b = JS(m),
                  O = { chartX: Math.round(w.pageX - b.left), chartY: Math.round(w.pageY - b.top) },
                  S = m.width / _.offsetWidth || 1,
                  A = this.inRange(O.chartX, O.chartY, S);
                if (!A) return null;
                var $ = this.state,
                  T = $.xAxisMap,
                  P = $.yAxisMap,
                  j = this.getTooltipEventType(),
                  C = Ng(this.state, this.props.data, this.props.layout, A);
                if (j !== "axis" && T && P) {
                  var M = er(T).scale,
                    N = er(P).scale,
                    R = M && M.invert ? M.invert(O.chartX) : null,
                    L = N && N.invert ? N.invert(O.chartY) : null;
                  return I(I({}, O), {}, { xValue: R, yValue: L }, C);
                }
                return C ? I(I({}, O), C) : null;
              },
            },
            {
              key: "inRange",
              value: function (w, _) {
                var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                  b = this.props.layout,
                  O = w / m,
                  S = _ / m;
                if (b === "horizontal" || b === "vertical") {
                  var A = this.state.offset,
                    $ = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height;
                  return $ ? { x: O, y: S } : null;
                }
                var T = this.state,
                  P = T.angleAxisMap,
                  j = T.radiusAxisMap;
                if (P && j) {
                  var C = er(P);
                  return tm({ x: O, y: S }, C);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var w = this.props.children,
                  _ = this.getTooltipEventType(),
                  m = qe(w, Qe),
                  b = {};
                m &&
                  _ === "axis" &&
                  (m.props.trigger === "click"
                    ? (b = { onClick: this.handleClick })
                    : (b = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var O = ii(this.props, this.handleOuterEvent);
                return I(I({}, O), b);
              },
            },
            {
              key: "addListener",
              value: function () {
                kc.on(Rc, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                kc.removeListener(Rc, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (w, _, m) {
                for (var b = this.state.formattedGraphicalItems, O = 0, S = b.length; O < S; O++) {
                  var A = b[O];
                  if (
                    A.item === w ||
                    A.props.key === w.key ||
                    (_ === ct(A.item.type) && m === A.childIndex)
                  )
                    return A;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var w = this.clipPathId,
                  _ = this.state.offset,
                  m = _.left,
                  b = _.top,
                  O = _.height,
                  S = _.width;
                return E.createElement(
                  "defs",
                  null,
                  E.createElement(
                    "clipPath",
                    { id: w },
                    E.createElement("rect", { x: m, y: b, height: O, width: S }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var w = this.state.xAxisMap;
                return w
                  ? Object.entries(w).reduce(function (_, m) {
                      var b = Cg(m, 2),
                        O = b[0],
                        S = b[1];
                      return I(I({}, _), {}, G({}, O, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var w = this.state.yAxisMap;
                return w
                  ? Object.entries(w).reduce(function (_, m) {
                      var b = Cg(m, 2),
                        O = b[0],
                        S = b[1];
                      return I(I({}, _), {}, G({}, O, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (w) {
                var _;
                return (_ = this.state.xAxisMap) === null ||
                  _ === void 0 ||
                  (_ = _[w]) === null ||
                  _ === void 0
                  ? void 0
                  : _.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (w) {
                var _;
                return (_ = this.state.yAxisMap) === null ||
                  _ === void 0 ||
                  (_ = _[w]) === null ||
                  _ === void 0
                  ? void 0
                  : _.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (w) {
                var _ = this.state,
                  m = _.formattedGraphicalItems,
                  b = _.activeItem;
                if (m && m.length)
                  for (var O = 0, S = m.length; O < S; O++) {
                    var A = m[O],
                      $ = A.props,
                      T = A.item,
                      P =
                        T.type.defaultProps !== void 0
                          ? I(I({}, T.type.defaultProps), T.props)
                          : T.props,
                      j = ct(T.type);
                    if (j === "Bar") {
                      var C = ($.data || []).find(function (L) {
                        return bI(w, L);
                      });
                      if (C) return { graphicalItem: A, payload: C };
                    } else if (j === "RadialBar") {
                      var M = ($.data || []).find(function (L) {
                        return tm(w, L);
                      });
                      if (M) return { graphicalItem: A, payload: M };
                    } else if (Aa(A, b) || Pa(A, b) || Tn(A, b)) {
                      var N = c$({ graphicalItem: A, activeTooltipItem: b, itemData: P.data }),
                        R = P.activeIndex === void 0 ? N : P.activeIndex;
                      return {
                        graphicalItem: I(I({}, A), {}, { childIndex: R }),
                        payload: Tn(A, b) ? P.data[N] : A.props.data[N],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var w = this;
                if (!pp(this)) return null;
                var _ = this.props,
                  m = _.children,
                  b = _.className,
                  O = _.width,
                  S = _.height,
                  A = _.style,
                  $ = _.compact,
                  T = _.title,
                  P = _.desc,
                  j = Ig(_, aR),
                  C = ie(j, !1);
                if ($)
                  return E.createElement(
                    mg,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    E.createElement(
                      Uc,
                      nr({}, C, { width: O, height: S, title: T, desc: P }),
                      this.renderClipPath(),
                      vp(m, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var M, N;
                  ((C.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0),
                    (C.role = (N = this.props.role) !== null && N !== void 0 ? N : "application"),
                    (C.onKeyDown = function (L) {
                      w.accessibilityManager.keyboardEvent(L);
                    }),
                    (C.onFocus = function () {
                      w.accessibilityManager.focus();
                    }));
                }
                var R = this.parseEventsOfWrapper();
                return E.createElement(
                  mg,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  E.createElement(
                    "div",
                    nr(
                      {
                        className: ee("recharts-wrapper", b),
                        style: I(
                          { position: "relative", cursor: "default", width: O, height: S },
                          A,
                        ),
                      },
                      R,
                      {
                        ref: function (F) {
                          w.container = F;
                        },
                      },
                    ),
                    E.createElement(
                      Uc,
                      nr({}, C, { width: O, height: S, title: T, desc: P, style: _R }),
                      this.renderClipPath(),
                      vp(m, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(D.Component);
    (G(y, "displayName", r),
      G(
        y,
        "defaultProps",
        I(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          l,
        ),
      ),
      G(y, "getDerivedStateFromProps", function (p, g) {
        var x = p.dataKey,
          w = p.data,
          _ = p.children,
          m = p.width,
          b = p.height,
          O = p.layout,
          S = p.stackOffset,
          A = p.margin,
          $ = g.dataStartIndex,
          T = g.dataEndIndex;
        if (g.updateId === void 0) {
          var P = kg(p);
          return I(
            I(I({}, P), {}, { updateId: 0 }, d(I(I({ props: p }, P), {}, { updateId: 0 }), g)),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: m,
              prevHeight: b,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: A,
              prevChildren: _,
            },
          );
        }
        if (
          x !== g.prevDataKey ||
          w !== g.prevData ||
          m !== g.prevWidth ||
          b !== g.prevHeight ||
          O !== g.prevLayout ||
          S !== g.prevStackOffset ||
          !ir(A, g.prevMargin)
        ) {
          var j = kg(p),
            C = { chartX: g.chartX, chartY: g.chartY, isTooltipActive: g.isTooltipActive },
            M = I(I({}, Ng(g, w, O)), {}, { updateId: g.updateId + 1 }),
            N = I(I(I({}, j), C), M);
          return I(
            I(I({}, N), d(I({ props: p }, N), g)),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: m,
              prevHeight: b,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: A,
              prevChildren: _,
            },
          );
        }
        if (!Bc(_, g.prevChildren)) {
          var R,
            L,
            F,
            H,
            K = qe(_, br),
            W =
              K &&
              (R = (L = K.props) === null || L === void 0 ? void 0 : L.startIndex) !== null &&
              R !== void 0
                ? R
                : $,
            X =
              K &&
              (F = (H = K.props) === null || H === void 0 ? void 0 : H.endIndex) !== null &&
              F !== void 0
                ? F
                : T,
            se = W !== $ || X !== T,
            ve = !te(w),
            Re = ve && !se ? g.updateId : g.updateId + 1;
          return I(
            I(
              { updateId: Re },
              d(I(I({ props: p }, g), {}, { updateId: Re, dataStartIndex: W, dataEndIndex: X }), g),
            ),
            {},
            { prevChildren: _, dataStartIndex: W, dataEndIndex: X },
          );
        }
        return null;
      }),
      G(y, "renderActiveDot", function (p, g, x) {
        var w;
        return (
          D.isValidElement(p)
            ? (w = D.cloneElement(p, g))
            : Z(p)
              ? (w = p(g))
              : (w = E.createElement(J0, g)),
          E.createElement(Ae, { className: "recharts-active-dot", key: x }, w)
        );
      }));
    var v = D.forwardRef(function (g, x) {
      return E.createElement(y, nr({}, g, { ref: x }));
    });
    return ((v.displayName = y.displayName), v);
  },
  $R = IR({
    chartName: "BarChart",
    GraphicalChild: Vt,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: $a },
      { axisType: "yAxis", AxisComp: Na },
    ],
    formatAxisMap: oN,
  });
function qR() {
  const e = kr((d) => d.player),
    t = kr((d) => d.setMode),
    r = kr((d) => d.wipeAll),
    n = kr((d) => d.setHunterName),
    i = kr((d) => d.load),
    [a, o] = D.useState(!1),
    [u, s] = D.useState(e?.hunterName || "");
  if ((D.useRef(null), !e)) return null;
  const c = async () => {
      (u.trim() && (await n(u.trim())), o(!1));
    },
    f = async () => {
      const d = {
          player: e,
          tasks: await fe.tasks.toArray(),
          dayTasks: await fe.dayTasks.toArray(),
          dayLogs: await fe.dayLogs.toArray(),
          weeklyQuests: await fe.weeklyQuests.toArray(),
          promptFires: await fe.promptFires.toArray(),
          exportedAt: new Date().toISOString(),
        },
        y = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }),
        v = URL.createObjectURL(y),
        p = document.createElement("a");
      ((p.href = v),
        (p.download = `hunter-export-${Date.now()}.json`),
        p.click(),
        URL.revokeObjectURL(v));
    },
    l = (d) => {
      const y = d.target.files?.[0];
      if (!y) return;
      const v = new FileReader();
      ((v.onload = async (p) => {
        try {
          const g = JSON.parse(p.target?.result);
          confirm("Importing data will OVERWRITE your current progress. Continue?") &&
            (await fe.transaction(
              "rw",
              [fe.player, fe.tasks, fe.dayTasks, fe.dayLogs, fe.weeklyQuests, fe.promptFires],
              async () => {
                (g.player && (await fe.player.put(g.player)),
                  g.tasks && (await fe.tasks.clear(), await fe.tasks.bulkPut(g.tasks)),
                  g.dayTasks && (await fe.dayTasks.clear(), await fe.dayTasks.bulkPut(g.dayTasks)),
                  g.dayLogs && (await fe.dayLogs.clear(), await fe.dayLogs.bulkPut(g.dayLogs)),
                  g.weeklyQuests &&
                    (await fe.weeklyQuests.clear(), await fe.weeklyQuests.bulkPut(g.weeklyQuests)),
                  g.promptFires &&
                    (await fe.promptFires.clear(), await fe.promptFires.bulkPut(g.promptFires)));
              },
            ),
            await i(),
            alert("Data imported successfully."));
        } catch (g) {
          (console.error(g), alert("Failed to import data. Invalid file format."));
        }
      }),
        v.readAsText(y));
    },
    h = async () => {
      confirm("Wipe ALL Hunter data? This cannot be undone.") && (await r());
    };
  return q.jsxs("div", {
    className: "space-y-4",
    children: [
      q.jsxs(Ux.div, {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "glass-strong relative overflow-hidden rounded-[2rem] p-6",
        style: { boxShadow: "var(--shadow-glow-violet)" },
        children: [
          q.jsx("div", {
            "aria-hidden": !0,
            className: "absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl",
            style: { background: "var(--neon-violet)" },
          }),
          q.jsxs("div", {
            className: "relative flex items-center gap-4",
            children: [
              q.jsx("div", {
                className:
                  "flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-black text-background",
                style: { background: "var(--gradient-primary)" },
                children: e.level,
              }),
              q.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [
                  q.jsx("div", {
                    className: "flex items-center gap-2",
                    children: a
                      ? q.jsxs("div", {
                          className: "flex flex-1 items-center gap-2",
                          children: [
                            q.jsx("input", {
                              autoFocus: !0,
                              value: u,
                              onChange: (d) => s(d.target.value),
                              onBlur: c,
                              onKeyDown: (d) => d.key === "Enter" && c(),
                              className: "w-full bg-transparent text-2xl font-black outline-none",
                            }),
                            q.jsx("button", {
                              onClick: c,
                              className: "shrink-0",
                              children: q.jsx(Wx, { className: "h-5 w-5 text-neon-emerald" }),
                            }),
                          ],
                        })
                      : q.jsxs("div", {
                          className: "group flex cursor-pointer items-center gap-2",
                          onClick: () => {
                            (s(e.hunterName || ""), o(!0));
                          },
                          children: [
                            q.jsx("div", {
                              className: "truncate text-2xl font-black neon-text-violet",
                              children: e.hunterName || "Unnamed Hunter",
                            }),
                            q.jsx(Qx, { totalXp: e.xp, className: "h-6 w-6 text-[10px]" }),
                            q.jsx(uw, {
                              className:
                                "h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100",
                            }),
                          ],
                        }),
                  }),
                  q.jsx("div", {
                    className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
                    children: rh(e.level),
                  }),
                  q.jsxs("div", {
                    className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground",
                    children: [q.jsx(zx, { className: "h-3 w-3" }), " ", e.xp, " XP total"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      q.jsx(ew, { xp: e.xp, level: e.level, compact: !0 }),
      q.jsxs("div", {
        className: "glass rounded-3xl p-4 overflow-hidden",
        children: [
          q.jsxs("div", {
            className: "mb-4 flex items-center justify-between",
            children: [
              q.jsx("div", {
                className:
                  "text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
                children: "30-Day Activity",
              }),
              q.jsx("div", {
                className: "text-[10px] font-bold text-neon-cyan",
                children: "Last 30 Days",
              }),
            ],
          }),
          q.jsx("div", { className: "h-32 w-full", children: q.jsx(NR, {}) }),
        ],
      }),
      q.jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [
          q.jsx(ni, {
            icon: q.jsx(Hx, { className: "h-5 w-5 text-neon-cyan" }),
            label: "Best streak",
            value: e.bestStreak,
          }),
          q.jsx(ni, {
            icon: q.jsx(Gx, { className: "h-5 w-5 text-neon-amber" }),
            label: "Current streak",
            value: e.currentStreak,
          }),
          q.jsx(ni, {
            icon: q.jsx(rw, { className: "h-5 w-5 text-neon-emerald" }),
            label: "Completed",
            value: e.tasksCompleted,
          }),
          q.jsx(ni, {
            icon: q.jsx(Kx, { className: "h-5 w-5 text-neon-magenta" }),
            label: "Missed",
            value: e.tasksMissed,
          }),
        ],
      }),
      q.jsx("div", {
        className: "glass rounded-3xl p-4",
        children: q.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            q.jsx(Xx, {
              className: `h-6 w-6 ${e.mode === "strict" ? "text-neon-magenta" : "text-neon-cyan"}`,
            }),
            q.jsxs("div", {
              className: "flex-1",
              children: [
                q.jsx("div", {
                  className: "text-sm font-bold",
                  children: e.mode === "strict" ? "Strict mode" : "Flex mode",
                }),
                q.jsx("div", {
                  className: "text-xs text-muted-foreground",
                  children:
                    e.mode === "strict"
                      ? "−15 XP per miss · streak resets at 2 misses"
                      : "−5 XP per miss · streak resets at 3 misses",
                }),
              ],
            }),
            q.jsx(Vx, {
              checked: e.mode === "strict",
              onCheckedChange: (d) => t(d ? "strict" : "flex"),
              "aria-label": "Toggle strict mode",
            }),
          ],
        }),
      }),
      q.jsxs("div", {
        className: "glass rounded-3xl p-4",
        children: [
          q.jsx("div", {
            className:
              "mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
            children: "Rank ladder",
          }),
          q.jsx("ul", {
            className: "space-y-1.5",
            children: Yx.map((d, y) => {
              const v = y + 1,
                p = e.level >= v;
              return q.jsxs(
                "li",
                {
                  className: `flex items-center justify-between rounded-xl px-3 py-1.5 text-xs ${p ? "bg-white/5" : ""}`,
                  children: [
                    q.jsxs("span", {
                      className: `font-bold ${p ? "neon-text-violet" : "text-muted-foreground"}`,
                      children: ["LV ", v],
                    }),
                    q.jsx("span", {
                      className: p ? "text-foreground" : "text-muted-foreground",
                      children: rh(v),
                    }),
                    q.jsxs("span", {
                      className: "tabular-nums text-muted-foreground",
                      children: [d, " XP"],
                    }),
                  ],
                },
                v,
              );
            }),
          }),
        ],
      }),
      q.jsxs("div", {
        className: "glass rounded-3xl p-4",
        children: [
          q.jsx("div", {
            className:
              "mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
            children: "Data",
          }),
          q.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              q.jsxs("button", {
                onClick: f,
                className:
                  "flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-white/15",
                children: [
                  q.jsx(Dg, { className: "h-4 w-4 text-neon-cyan" }),
                  " Export local data",
                ],
              }),
              q.jsxs("label", {
                className:
                  "flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neon-emerald/20 border border-neon-emerald/30 px-3 py-2.5 text-sm font-bold text-neon-emerald transition hover:bg-neon-emerald/30",
                children: [
                  q.jsx(cw, { className: "h-4 w-4" }),
                  " Import local data",
                  q.jsx("input", {
                    type: "file",
                    onChange: l,
                    accept: ".json",
                    className: "hidden",
                  }),
                ],
              }),
              q.jsxs("button", {
                onClick: h,
                className:
                  "flex items-center gap-2 rounded-xl border border-(--neon-magenta)/30 bg-(--neon-magenta)/10 px-3 py-2 text-sm font-medium text-neon-magenta",
                children: [q.jsx(Zx, { className: "h-4 w-4" }), " Wipe everything"],
              }),
            ],
          }),
        ],
      }),
      q.jsx(lw, {}),
    ],
  });
}
function NR() {
  const e = D.useMemo(
      () =>
        Array.from({ length: 30 }, (i, a) => {
          const o = tw(new Date(), 29 - a);
          return nh(o, "yyyy-MM-dd");
        }),
      [],
    ),
    t = Jx(() => fe.dayLogs.where("dateKey").between(e[0], e[29], !0, !0).toArray(), []),
    r = D.useMemo(() => {
      const i = new Map(t?.map((a) => [a.dateKey, a]));
      return e.map((a) => ({
        date: a,
        xp: i.get(a)?.xpEarned ?? 0,
        status: i.get(a)?.status ?? "none",
      }));
    }, [t, e]),
    n = {
      perfect: "var(--neon-emerald)",
      partial: "var(--neon-amber)",
      failed: "var(--neon-magenta)",
      "in-progress": "var(--neon-cyan)",
      none: "rgba(255,255,255,0.05)",
    };
  return q.jsx(HS, {
    width: "100%",
    height: "100%",
    children: q.jsxs($R, {
      data: r,
      margin: { top: 0, right: 0, left: -20, bottom: 0 },
      children: [
        q.jsx($a, { dataKey: "date", hide: !0 }),
        q.jsx(Na, { hide: !0, domain: [0, "auto"] }),
        q.jsx(Qe, {
          content: ({ active: i, payload: a }) =>
            i && a && a.length
              ? q.jsxs("div", {
                  className: "glass-strong rounded-xl p-2 text-[10px] border-white/10",
                  children: [
                    q.jsx("div", {
                      className: "font-bold",
                      children: nh(parseISO(a[0].payload.date), "MMM d"),
                    }),
                    q.jsxs("div", { className: "neon-text-cyan", children: [a[0].value, " XP"] }),
                  ],
                })
              : null,
          cursor: { fill: "rgba(255,255,255,0.05)" },
        }),
        q.jsx(Vt, {
          dataKey: "xp",
          radius: [2, 2, 0, 0],
          children: r.map((i, a) => q.jsx(_f, { fill: n[i.status] }, `cell-${a}`)),
        }),
      ],
    }),
  });
}
function ni({ icon: e, label: t, value: r }) {
  return q.jsxs("div", {
    className: "glass flex items-center gap-3 rounded-2xl p-3",
    children: [
      q.jsx("div", {
        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/4",
        children: e,
      }),
      q.jsxs("div", {
        children: [
          q.jsx("div", { className: "text-xl font-black tabular-nums", children: r }),
          q.jsx("div", {
            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
            children: t,
          }),
        ],
      }),
    ],
  });
}
export { qR as component };
