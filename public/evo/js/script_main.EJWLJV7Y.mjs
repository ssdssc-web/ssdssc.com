import { a as Qe } from "./chunk-JPQXC4RY.mjs";
import {
  a as De,
  b as Ne,
  c as Ae,
  d as jt,
  e as qt,
  f as Ht,
} from "./chunk-UZ3FZ54A.mjs";
import { d as xe } from "./chunk-4CZSOIUK.mjs";
import {
  a as Mt,
  b as Xt,
  c as Ot,
  n as Ue,
  o as Ye,
} from "./chunk-GP5ZN2VK.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as pe,
  B as Ge,
  Ba as Bt,
  C as Ft,
  D as h,
  E as Vt,
  G as N,
  H as kt,
  I as Lt,
  J as C,
  K as _t,
  M as E,
  N as be,
  P as zt,
  T as _e,
  U as $,
  V,
  W as he,
  X as q,
  Y as Dt,
  Z as Nt,
  b as D,
  ba as At,
  c as j,
  ca as ge,
  d as m,
  ea as Ut,
  fa as we,
  ia as fe,
  j as vt,
  ja as Et,
  k as bt,
  ka as Pt,
  l as We,
  m as ae,
  n as Le,
  o as wt,
  oa as ee,
  r as It,
  s as St,
  t as U,
  ta as ze,
  ua as oe,
  v as Tt,
  w as Ct,
  xa as ye,
  y as Rt,
  ya as H,
  z as Ze,
  za as A,
} from "./chunk-7MML5CJN.mjs";
import {
  B as r,
  C as z,
  d as F,
  e as ut,
  h as ie,
  i as M,
  k as ht,
  l as gt,
  m as He,
  n as yt,
  o as J,
  p as me,
  q as X,
  t as O,
  v as _,
  w as xt,
} from "./chunk-UEJNNABJ.mjs";
import "./chunk-HZL4YIMB.mjs";
import { b as Q, c as f } from "./chunk-A3IIQ6X3.mjs";
var rr = "default" in We ? vt : We,
  Ee = {},
  Wt = rr;
Ee.createRoot = Wt.createRoot;
Ee.hydrateRoot = Wt.hydrateRoot;
var Zt = Ee.createRoot,
  Ke = Ee.hydrateRoot;
function Pe({ blur: n, borderRadius: e, direction: a, transition: t }) {
  let i = O(
    () => [
      {
        blur: `${n / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%",
      },
      {
        blur: `${n / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%",
      },
      {
        blur: `${n / 2 / 2 / 2 / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%",
      },
      {
        blur: `${n / 2 / 2 / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%",
      },
      {
        blur: `${n / 2 / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%",
      },
      {
        blur: `${n / 2 / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%",
      },
      {
        blur: `${n / 2}px`,
        gradient:
          "rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%",
      },
      {
        blur: `${n}px`,
        gradient: "rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%",
      },
    ],
    [n],
  );
  return r("div", {
    style: { position: "absolute", inset: 0, overflow: "hidden" },
    children: i.map((l, s) =>
      r(
        m.div,
        {
          transition: t,
          initial: { backdropFilter: `blur(${l.blur})` },
          animate: { backdropFilter: `blur(${l.blur})` },
          style: {
            opacity: 1,
            position: "absolute",
            inset: 0,
            zIndex: s + 1,
            maskImage: `linear-gradient(${a}, ${l.gradient})`,
            WebkitMaskImage: `linear-gradient(${a}, ${l.gradient})`,
            borderRadius: e,
            pointerEvents: "none",
          },
        },
        s,
      ),
    ),
  });
}
Pe.defaultProps = {
  blur: 10,
  borderRadius: "0px",
  direction: "toBottom",
  transition: { duration: 0.3 },
};
N(Pe, {
  blur: {
    title: "Blur",
    type: h.Number,
    defaultValue: 10,
    min: 0,
    max: 100,
    step: 1,
    description: "Large blur values (10<) can impact performance.",
  },
  borderRadius: {
    title: "Radius",
    type: h.BorderRadius,
    defaultValue: "0px",
    description:
      "Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.",
  },
  direction: {
    title: "Direction",
    type: h.SegmentedEnum,
    options: ["to bottom", "to top", "to left", "to right"],
    optionTitles: ["\u2193", "\u2191", "\u2190", "\u2192"],
    defaultValue: "to bottom",
  },
  transition: {
    type: h.Transition,
    defaultValue: { duration: 0.3 },
    title: "Transition",
    description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
  },
});
Pe.displayName = "Blur Gradient";
var Je = Pe;
function Qt(n, e, a) {
  return Math.max(n, Math.min(e, a));
}
var $e = class {
    constructor() {
      ((this.isRunning = !1),
        (this.value = 0),
        (this.from = 0),
        (this.to = 0),
        (this.duration = 0),
        (this.currentTime = 0));
    }
    advance(e) {
      var a;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += e;
        let i = Qt(0, this.currentTime / this.duration, 1);
        t = i >= 1;
        let l = t ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * l;
      } else
        this.lerp
          ? ((this.value = (function (l, s, o, c) {
              return (function (x, g, v) {
                return (1 - v) * x + v * g;
              })(l, s, 1 - Math.exp(-o * c));
            })(this.value, this.to, 60 * this.lerp, e)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (t = !0)))
          : ((this.value = this.to), (t = !0));
      (t && this.stop(),
        (a = this.onUpdate) === null ||
          a === void 0 ||
          a.call(this, this.value, t));
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(e, a, { lerp: t, duration: i, easing: l, onStart: s, onUpdate: o }) {
      ((this.from = this.value = e),
        (this.to = a),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = l),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s?.(),
        (this.onUpdate = o));
    }
  },
  et = class {
    constructor({
      wrapper: e,
      content: a,
      autoResize: t = !0,
      debounce: i = 250,
    } = {}) {
      ((this.width = 0),
        (this.height = 0),
        (this.scrollWidth = 0),
        (this.scrollHeight = 0),
        (this.resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        }),
        (this.onWrapperResize = () => {
          this.wrapper === f
            ? ((this.width = f.innerWidth), (this.height = f.innerHeight))
            : this.wrapper instanceof HTMLElement &&
              ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        }),
        (this.onContentResize = () => {
          this.wrapper === f
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : this.wrapper instanceof HTMLElement &&
              ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        }),
        (this.wrapper = e),
        (this.content = a),
        t &&
          ((this.debouncedResize = (function (s, o) {
            let c;
            return function () {
              let d = arguments,
                x = this;
              (clearTimeout(c),
                (c = setTimeout(function () {
                  s.apply(x, d);
                }, o)));
            };
          })(this.resize, i)),
          this.wrapper === f
            ? f.addEventListener("resize", this.debouncedResize, !1)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize,
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      var e, a;
      ((e = this.wrapperResizeObserver) === null ||
        e === void 0 ||
        e.disconnect(),
        (a = this.contentResizeObserver) === null ||
          a === void 0 ||
          a.disconnect(),
        f.removeEventListener("resize", this.debouncedResize, !1));
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  Be = class {
    constructor() {
      this.events = {};
    }
    emit(e, ...a) {
      let t = this.events[e] || [];
      for (let i = 0, l = t.length; i < l; i++) t[i](...a);
    }
    on(e, a) {
      var t;
      return (
        (!((t = this.events[e]) === null || t === void 0) && t.push(a)) ||
          (this.events[e] = [a]),
        () => {
          var i;
          this.events[e] =
            (i = this.events[e]) === null || i === void 0
              ? void 0
              : i.filter((l) => a !== l);
        }
      );
    }
    off(e, a) {
      var t;
      this.events[e] =
        (t = this.events[e]) === null || t === void 0
          ? void 0
          : t.filter((i) => a !== i);
    }
    destroy() {
      this.events = {};
    }
  },
  Gt = 100 / 6,
  tt = class {
    constructor(e, { wheelMultiplier: a = 1, touchMultiplier: t = 1 }) {
      ((this.lastDelta = { x: 0, y: 0 }),
        (this.windowWidth = 0),
        (this.windowHeight = 0),
        (this.onTouchStart = (i) => {
          let { clientX: l, clientY: s } = i.targetTouches
            ? i.targetTouches[0]
            : i;
          ((this.touchStart.x = l),
            (this.touchStart.y = s),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: i }));
        }),
        (this.onTouchMove = (i) => {
          var l, s, o, c;
          let { clientX: d, clientY: x } = i.targetTouches
              ? i.targetTouches[0]
              : i,
            g =
              -(
                d -
                ((s =
                  (l = this.touchStart) === null || l === void 0
                    ? void 0
                    : l.x) !== null && s !== void 0
                  ? s
                  : 0)
              ) * this.touchMultiplier,
            v =
              -(
                x -
                ((c =
                  (o = this.touchStart) === null || o === void 0
                    ? void 0
                    : o.y) !== null && c !== void 0
                  ? c
                  : 0)
              ) * this.touchMultiplier;
          ((this.touchStart.x = d),
            (this.touchStart.y = x),
            (this.lastDelta = { x: g, y: v }),
            this.emitter.emit("scroll", { deltaX: g, deltaY: v, event: i }));
        }),
        (this.onTouchEnd = (i) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: i,
          });
        }),
        (this.onWheel = (i) => {
          let { deltaX: l, deltaY: s, deltaMode: o } = i;
          ((l *= o === 1 ? Gt : o === 2 ? this.windowWidth : 1),
            (s *= o === 1 ? Gt : o === 2 ? this.windowHeight : 1),
            (l *= this.wheelMultiplier),
            (s *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: l, deltaY: s, event: i }));
        }),
        (this.onWindowResize = () => {
          ((this.windowWidth = f.innerWidth),
            (this.windowHeight = f.innerHeight));
        }),
        (this.element = e),
        (this.wheelMultiplier = a),
        (this.touchMultiplier = t),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = new Be()),
        f.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        }));
    }
    on(e, a) {
      return this.emitter.on(e, a);
    }
    destroy() {
      (this.emitter.destroy(),
        f.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel),
        this.element.removeEventListener("touchstart", this.onTouchStart),
        this.element.removeEventListener("touchmove", this.onTouchMove),
        this.element.removeEventListener("touchend", this.onTouchEnd));
    }
  },
  Ie = class {
    constructor({
      wrapper: e = f,
      content: a = document.documentElement,
      wheelEventsTarget: t = e,
      eventsTarget: i = t,
      smoothWheel: l = !0,
      syncTouch: s = !1,
      syncTouchLerp: o = 0.075,
      touchInertiaMultiplier: c = 35,
      duration: d,
      easing: x = (R) => Math.min(1, 1.001 - Math.pow(2, -10 * R)),
      lerp: g = 0.1,
      infinite: v = !1,
      orientation: p = "vertical",
      gestureOrientation: b = "vertical",
      touchMultiplier: L = 1,
      wheelMultiplier: I = 1,
      autoResize: y = !0,
      prevent: P,
      virtualScroll: le,
      __experimental__naiveDimensions: Z = !1,
    } = {}) {
      ((this.__isScrolling = !1),
        (this.__isStopped = !1),
        (this.__isLocked = !1),
        (this.userData = {}),
        (this.lastVelocity = 0),
        (this.velocity = 0),
        (this.direction = 0),
        (this.onPointerDown = (R) => {
          R.button === 1 && this.reset();
        }),
        (this.onVirtualScroll = (R) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(R) === !1
          )
            return;
          let { deltaX: u, deltaY: k, event: T } = R;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: u,
              deltaY: k,
              event: T,
            }),
            T.ctrlKey)
          )
            return;
          let B = T.type.includes("touch"),
            Y = T.type.includes("wheel");
          if (
            ((this.isTouching =
              T.type === "touchstart" || T.type === "touchmove"),
            this.options.syncTouch &&
              B &&
              T.type === "touchstart" &&
              !this.isStopped &&
              !this.isLocked)
          )
            return void this.reset();
          let te = u === 0 && k === 0,
            S =
              (this.options.gestureOrientation === "vertical" && k === 0) ||
              (this.options.gestureOrientation === "horizontal" && u === 0);
          if (te || S) return;
          let K = T.composedPath();
          K = K.slice(0, K.indexOf(this.rootElement));
          let G = this.options.prevent;
          if (
            K.find((w) => {
              var Me, Xe, Oe, je, qe;
              return (
                w instanceof Element &&
                ((typeof G == "function" && G?.(w)) ||
                  ((Me = w.hasAttribute) === null || Me === void 0
                    ? void 0
                    : Me.call(w, "data-lenis-prevent")) ||
                  (B &&
                    ((Xe = w.hasAttribute) === null || Xe === void 0
                      ? void 0
                      : Xe.call(w, "data-lenis-prevent-touch"))) ||
                  (Y &&
                    ((Oe = w.hasAttribute) === null || Oe === void 0
                      ? void 0
                      : Oe.call(w, "data-lenis-prevent-wheel"))) ||
                  (((je = w.classList) === null || je === void 0
                    ? void 0
                    : je.contains("lenis")) &&
                    !(
                      !((qe = w.classList) === null || qe === void 0) &&
                      qe.contains("lenis-stopped")
                    )))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) return void T.preventDefault();
          if (
            !((this.options.syncTouch && B) || (this.options.smoothWheel && Y))
          )
            return ((this.isScrolling = "native"), void this.animate.stop());
          T.preventDefault();
          let re = k;
          this.options.gestureOrientation === "both"
            ? (re = Math.abs(k) > Math.abs(u) ? k : u)
            : this.options.gestureOrientation === "horizontal" && (re = u);
          let ce = B && this.options.syncTouch,
            de = B && T.type === "touchend" && Math.abs(re) > 5;
          (de && (re = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + re,
              Object.assign(
                { programmatic: !1 },
                ce
                  ? { lerp: de ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    },
              ),
            ));
        }),
        (this.onNativeScroll = () => {
          if (
            (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
          )
            delete this.__preventNextNativeScrollEvent;
          else if (this.isScrolling === !1 || this.isScrolling === "native") {
            let R = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - R),
              (this.direction = Math.sign(this.animatedScroll - R)),
              (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this.__resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        }),
        (f.lenisVersion = "1.1.9"),
        (e && e !== document.documentElement && e !== document.body) || (e = f),
        (this.options = {
          wrapper: e,
          content: a,
          wheelEventsTarget: t,
          eventsTarget: i,
          smoothWheel: l,
          syncTouch: s,
          syncTouchLerp: o,
          touchInertiaMultiplier: c,
          duration: d,
          easing: x,
          lerp: g,
          infinite: v,
          gestureOrientation: b,
          orientation: p,
          touchMultiplier: L,
          wheelMultiplier: I,
          autoResize: y,
          prevent: P,
          virtualScroll: le,
          __experimental__naiveDimensions: Z,
        }),
        (this.animate = new $e()),
        (this.emitter = new Be()),
        (this.dimensions = new et({ wrapper: e, content: a, autoResize: y })),
        this.updateClassName(),
        (this.userData = {}),
        (this.time = 0),
        (this.velocity = this.lastVelocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(
          "scroll",
          this.onNativeScroll,
          !1,
        ),
        this.options.wrapper.addEventListener(
          "pointerdown",
          this.onPointerDown,
          !1,
        ),
        (this.virtualScroll = new tt(i, {
          touchMultiplier: L,
          wheelMultiplier: I,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll));
    }
    destroy() {
      (this.emitter.destroy(),
        this.options.wrapper.removeEventListener(
          "scroll",
          this.onNativeScroll,
          !1,
        ),
        this.options.wrapper.removeEventListener(
          "pointerdown",
          this.onPointerDown,
          !1,
        ),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName());
    }
    on(e, a) {
      return this.emitter.on(e, a);
    }
    off(e, a) {
      return this.emitter.off(e, a);
    }
    setScroll(e) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = e)
        : (this.rootElement.scrollTop = e);
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      ((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop());
    }
    start() {
      this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
      this.isStopped ||
        ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(e) {
      let a = e - (this.time || e);
      ((this.time = e), this.animate.advance(0.001 * a));
    }
    scrollTo(
      e,
      {
        offset: a = 0,
        immediate: t = !1,
        lock: i = !1,
        duration: l = this.options.duration,
        easing: s = this.options.easing,
        lerp: o = this.options.lerp,
        onStart: c,
        onComplete: d,
        force: x = !1,
        programmatic: g = !0,
        userData: v = {},
      } = {},
    ) {
      if ((!this.isStopped && !this.isLocked) || x) {
        if (typeof e == "string" && ["top", "left", "start"].includes(e)) e = 0;
        else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
          e = this.limit;
        else {
          let p;
          if (
            (typeof e == "string"
              ? (p = document.querySelector(e))
              : e instanceof HTMLElement && e?.nodeType && (p = e),
            p)
          ) {
            if (this.options.wrapper !== f) {
              let L = this.rootElement.getBoundingClientRect();
              a -= this.isHorizontal ? L.left : L.top;
            }
            let b = p.getBoundingClientRect();
            e = (this.isHorizontal ? b.left : b.top) + this.animatedScroll;
          }
        }
        if (
          typeof e == "number" &&
          ((e += a),
          (e = Math.round(e)),
          this.options.infinite
            ? g && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = Qt(0, e, this.limit)),
          e !== this.targetScroll)
        ) {
          if (((this.userData = v), t))
            return (
              (this.animatedScroll = this.targetScroll = e),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              d?.(this),
              void (this.userData = {})
            );
          (g || (this.targetScroll = e),
            this.animate.fromTo(this.animatedScroll, e, {
              duration: l,
              easing: s,
              lerp: o,
              onStart: () => {
                (i && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  c?.(this));
              },
              onUpdate: (p, b) => {
                ((this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = p - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = p),
                  this.setScroll(this.scroll),
                  g && (this.targetScroll = p),
                  b || this.emit(),
                  b &&
                    (this.reset(),
                    this.emit(),
                    d?.(this),
                    (this.userData = {}),
                    this.preventNextNativeScrollEvent()));
              },
            }));
        }
      }
    }
    preventNextNativeScrollEvent() {
      ((this.__preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          delete this.__preventNextNativeScrollEvent;
        }));
    }
    get rootElement() {
      return this.options.wrapper === f
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (a, t) {
            return ((a % t) + t) % t;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(e) {
      this.__isScrolling !== e &&
        ((this.__isScrolling = e), this.updateClassName());
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(e) {
      this.__isStopped !== e &&
        ((this.__isStopped = e), this.updateClassName());
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(e) {
      this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let e = "lenis";
      return (
        this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isScrolling === "smooth" && (e += " lenis-smooth"),
        e
      );
    }
    updateClassName() {
      (this.cleanUpClassName(),
        (this.rootElement.className =
          `${this.rootElement.className} ${this.className}`.trim()));
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className
        .replace(/lenis(-\w+)?/g, "")
        .trim();
    }
  };
function nr(n) {
  let { intensity: e } = n,
    a = _(null);
  return (
    me(() => {
      if (a.current)
        try {
          a.current.scrollTo(0, { immediate: !0 });
        } catch (t) {
          console.error("Error scrolling to top:", t);
        }
    }, [a]),
    me(() => {
      let t = () => {
        try {
          let s = document.querySelector("[data-frameruni-stop-scroll]"),
            o = document.documentElement,
            c = o && o.style && o.style.overflow === "hidden";
          a.current && (s || c ? a.current.stop() : a.current.start());
        } catch (s) {
          console.error("Error in checkForStopScroll:", s);
        }
      };
      t();
      let i, l;
      try {
        ((i = new MutationObserver(t)),
          (l = new MutationObserver(t)),
          document &&
            document.documentElement &&
            (i.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: ["data-frameruni-stop-scroll"],
            }),
            l.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"],
            })));
      } catch (s) {
        console.error("Error setting up observers:", s);
      }
      return () => {
        try {
          (i && i.disconnect(), l && l.disconnect());
        } catch (s) {
          console.error("Error disconnecting observers:", s);
        }
      };
    }, []),
    me(() => {
      try {
        if (!document) return;
        let t = document.getElementsByTagName("*");
        for (let i = 0; i < t.length; i++) {
          let l = t[i];
          if (l)
            try {
              let s = f.getComputedStyle(l);
              s &&
                s.getPropertyValue("overflow") === "auto" &&
                l.setAttribute("data-lenis-prevent", "true");
            } catch (s) {
              console.error("Error getting computed style:", s);
            }
        }
      } catch (t) {
        console.error("Error in overflow detection:", t);
      }
    }, []),
    me(() => {
      try {
        if (typeof Ie != "function") {
          console.error("Lenis is not available");
          return;
        }
        a.current = new Ie({ duration: (e || 10) / 10 });
        let t = (l) => {
            if (a.current)
              try {
                (a.current.raf(l), requestAnimationFrame(t));
              } catch (s) {
                console.error("Error in animation frame:", s);
              }
          },
          i = requestAnimationFrame(t);
        return () => {
          if ((cancelAnimationFrame(i), a.current))
            try {
              (a.current.destroy(), (a.current = null));
            } catch (l) {
              console.error("Error destroying Lenis:", l);
            }
        };
      } catch (t) {
        return (console.error("Error initializing Lenis:", t), () => {});
      }
    }, [e]),
    me(() => {
      try {
        if (!document || !a.current) return;
        let t = Array.from(document.querySelectorAll("a[href]") || [])
            .filter((s) => {
              if (!s) return !1;
              let o = s;
              if (!o.href) return !1;
              let c =
                  o.href.startsWith(f.location.origin) ||
                  o.href.startsWith("./") ||
                  o.href.startsWith("/"),
                d = o.href.includes("#");
              return c && d;
            })
            .map((s) => {
              try {
                let o = s,
                  c = o.href.includes("#") ? `#${o.href.split("#").pop()}` : "",
                  d = c ? decodeURIComponent(c) : "",
                  x = 0;
                try {
                  if (d) {
                    let g = document.querySelector(d);
                    if (g) {
                      let v = f.getComputedStyle(g).scrollMarginTop;
                      x = (v && parseInt(v)) || 0;
                    }
                  }
                } catch (g) {
                  console.error("Error finding target element:", g);
                }
                return { href: c, scrollMargin: x, anchorElement: o };
              } catch (o) {
                return (console.error("Error processing anchor:", o), null);
              }
            })
            .filter(Boolean),
          i = (s, o, c) => {
            try {
              (s && s.preventDefault && s.preventDefault(),
                a.current && o && a.current.scrollTo(o, { offset: -(c || 0) }));
            } catch (d) {
              console.error("Error in anchor click handler:", d);
            }
          },
          l = t.map(
            ({ href: s, scrollMargin: o }) =>
              (c) =>
                i(c, s, o),
          );
        return (
          t.forEach(({ anchorElement: s }, o) => {
            s && l[o] && s.addEventListener("click", l[o]);
          }),
          () => {
            t.forEach(({ anchorElement: s }, o) => {
              s && l[o] && s.removeEventListener("click", l[o]);
            });
          }
        );
      } catch (t) {
        return (console.error("Error setting up anchor links:", t), () => {});
      }
    }, [a]),
    r("div", { style: n.style })
  );
}
var rt = E(
    nr,
    [
      "html.lenis { height: auto; }",
      ".lenis.lenis-smooth { scroll-behavior: auto !important; }",
      ".lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }",
      ".lenis.lenis-stopped { overflow: hidden; }",
      ".lenis.lenis-scrolling iframe { pointer-events: none; }",
    ],
    "",
  ),
  at = rt;
rt.displayName = "Smooth Scroll";
N(rt, {
  intensity: {
    title: "Intensity",
    type: h.Number,
    defaultValue: 10,
    min: 0,
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var or = { vbxf8HL8_: { hover: !0 } },
  sr = ["vbxf8HL8_", "dckrgQoZs"],
  lr = "framer-GPjkJ",
  cr = { dckrgQoZs: "framer-v-11z3ns5", vbxf8HL8_: "framer-v-a47mct" };
function dr(n, ...e) {
  let a = {};
  return (e?.forEach((t) => t && Object.assign(a, n[t])), a);
}
var mr = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  fr = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  pr = m.create(F),
  ur = { "In-Active": "vbxf8HL8_", Active: "dckrgQoZs" },
  hr = ({
    click: n,
    height: e,
    id: a,
    link: t,
    newTab: i,
    smoothScroll: l,
    title: s,
    width: o,
    ...c
  }) => ({
    ...c,
    aLnDlFZKR: t ?? c.aLnDlFZKR,
    Cn6fz_Vow: s ?? c.Cn6fz_Vow ?? "Home",
    gBAcWz1fh: n ?? c.gBAcWz1fh,
    TqaTpTiSx: i ?? c.TqaTpTiSx,
    variant: ur[c.variant] ?? c.variant ?? "vbxf8HL8_",
    X2yrtSssb: l ?? c.X2yrtSssb,
  }),
  gr = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  yr = M(function (n, e) {
    let { activeLocale: a, setLocale: t } = U(),
      {
        style: i,
        className: l,
        layoutId: s,
        variant: o,
        Cn6fz_Vow: c,
        aLnDlFZKR: d,
        TqaTpTiSx: x,
        X2yrtSssb: g,
        gBAcWz1fh: v,
        ...p
      } = hr(n),
      {
        baseVariant: b,
        classNames: L,
        clearLoadingGesture: I,
        gestureHandlers: y,
        gestureVariant: P,
        isLoading: le,
        setGestureState: Z,
        setVariant: R,
        variants: u,
      } = ee({
        cycleOrder: sr,
        defaultVariant: "vbxf8HL8_",
        enabledGestures: or,
        variant: o,
        variantClassNames: cr,
      }),
      k = gr(n, u),
      { activeVariantCallback: T, delay: B } = fe(b),
      Y = T(async (...ce) => {
        if ((Z({ isPressed: !1 }), v && (await v(...ce)) === !1)) return !1;
      }),
      S = C(lr, ...[Ae]),
      K = _(null),
      G = X(),
      re = $();
    return r(j, {
      id: s ?? G,
      children: r(pr, {
        animate: u,
        initial: !1,
        children: r(fr, {
          value: mr,
          children: r(ge, {
            href: d,
            motionChild: !0,
            nodeId: "vbxf8HL8_",
            openInNewTab: x,
            smoothScroll: g,
            children: r(m.a, {
              ...p,
              ...y,
              className: `${C(S, "framer-a47mct", l, L)} framer-i9k05o`,
              "data-framer-name": "In-Active",
              "data-highlight": !0,
              layoutDependency: k,
              layoutId: "vbxf8HL8_",
              onTap: Y,
              ref: e ?? K,
              style: { ...i },
              ...dr(
                {
                  "vbxf8HL8_-hover": { "data-framer-name": void 0 },
                  dckrgQoZs: { "data-framer-name": "Active" },
                },
                b,
                P,
              ),
              children: r(oe, {
                __fromCanvasComponent: !0,
                children: r(F, {
                  children: r(m.p, {
                    className: "framer-styles-preset-x0s9r5",
                    "data-styles-preset": "QhK6qqT5U",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: r(m.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage:
                          "linear-gradient(90deg, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)) 0%, var(--token-69ff14d1-f0d2-4345-baec-a0ff0f57f0ca, rgba(153, 153, 153, 0)) 409.99999999999994%)",
                      },
                      children: "Home",
                    }),
                  }),
                }),
                className: "framer-oap6fz",
                fonts: ["Inter"],
                layoutDependency: k,
                layoutId: "uuXIr8Qtv",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: 0.6,
                },
                text: c,
                variants: {
                  "vbxf8HL8_-hover": { opacity: 1 },
                  dckrgQoZs: { opacity: 1 },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  xr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-GPjkJ.framer-i9k05o, .framer-GPjkJ .framer-i9k05o { display: block; }",
    ".framer-GPjkJ.framer-a47mct { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-GPjkJ .framer-oap6fz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GPjkJ.framer-a47mct { gap: 0px; } .framer-GPjkJ.framer-a47mct > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-GPjkJ.framer-a47mct > :first-child { margin-left: 0px; } .framer-GPjkJ.framer-a47mct > :last-child { margin-right: 0px; } }",
    ...Ne,
  ],
  Se = E(yr, xr, "framer-GPjkJ"),
  nt = Se;
Se.displayName = "Navigation/Text Hover";
Se.defaultProps = { height: 26, width: 43 };
N(Se, {
  variant: {
    options: ["vbxf8HL8_", "dckrgQoZs"],
    optionTitles: ["In-Active", "Active"],
    title: "Variant",
    type: h.Enum,
  },
  Cn6fz_Vow: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  aLnDlFZKR: { title: "Link", type: h.Link },
  TqaTpTiSx: { defaultValue: !1, title: "New Tab", type: h.Boolean },
  X2yrtSssb: { defaultValue: !1, title: "Smooth Scroll", type: h.Boolean },
  gBAcWz1fh: { title: "Click", type: h.EventHandler },
});
H(
  Se,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/evo/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/evo/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/evo/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/evo/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/evo/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/evo/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/evo/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...pe(De),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var vr = { Q4qMYnPU6: { hover: !0 } },
  br = ["Q4qMYnPU6", "oPLp6MLTy"],
  wr = "framer-pRym1",
  Ir = { oPLp6MLTy: "framer-v-6yzrgt", Q4qMYnPU6: "framer-v-mshz23" };
function Sr(n, ...e) {
  let a = {};
  return (e?.forEach((t) => t && Object.assign(a, n[t])), a);
}
var Tr = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Cr = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  Rr = m.create(F),
  Fr = { "In-Active": "Q4qMYnPU6", Active: "oPLp6MLTy" },
  Vr = ({
    click: n,
    height: e,
    id: a,
    link: t,
    newTab: i,
    smoothScroll: l,
    title: s,
    width: o,
    ...c
  }) => ({
    ...c,
    aLnDlFZKR: t ?? c.aLnDlFZKR,
    Cn6fz_Vow: s ?? c.Cn6fz_Vow ?? "Home",
    gBAcWz1fh: n ?? c.gBAcWz1fh,
    TqaTpTiSx: i ?? c.TqaTpTiSx,
    variant: Fr[c.variant] ?? c.variant ?? "Q4qMYnPU6",
    X2yrtSssb: l ?? c.X2yrtSssb,
  }),
  kr = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  Lr = M(function (n, e) {
    let a = _(null),
      t = e ?? a,
      i = X(),
      { activeLocale: l, setLocale: s } = U(),
      o = $(),
      {
        style: c,
        className: d,
        layoutId: x,
        variant: g,
        Cn6fz_Vow: v,
        aLnDlFZKR: p,
        TqaTpTiSx: b,
        X2yrtSssb: L,
        gBAcWz1fh: I,
        ...y
      } = Vr(n),
      {
        baseVariant: P,
        classNames: le,
        clearLoadingGesture: Z,
        gestureHandlers: R,
        gestureVariant: u,
        isLoading: k,
        setGestureState: T,
        setVariant: B,
        variants: Y,
      } = ee({
        cycleOrder: br,
        defaultVariant: "Q4qMYnPU6",
        enabledGestures: vr,
        ref: t,
        variant: g,
        variantClassNames: Ir,
      }),
      te = kr(n, Y),
      { activeVariantCallback: S, delay: K } = fe(P),
      G = S(async (...de) => {
        if ((T({ isPressed: !1 }), I && (await I(...de)) === !1)) return !1;
      }),
      ce = C(wr, ...[]);
    return r(j, {
      id: x ?? i,
      children: r(Rr, {
        animate: Y,
        initial: !1,
        children: r(Cr, {
          value: Tr,
          children: r(ge, {
            href: p,
            motionChild: !0,
            nodeId: "Q4qMYnPU6",
            openInNewTab: b,
            scopeId: "cCGyBqOGr",
            smoothScroll: L,
            children: r(m.a, {
              ...y,
              ...R,
              className: `${C(ce, "framer-mshz23", d, le)} framer-yfxzj5`,
              "data-framer-name": "In-Active",
              "data-highlight": !0,
              layoutDependency: te,
              layoutId: "Q4qMYnPU6",
              onTap: G,
              ref: t,
              style: { ...c },
              ...Sr(
                {
                  "Q4qMYnPU6-hover": { "data-framer-name": void 0 },
                  oPLp6MLTy: { "data-framer-name": "Active" },
                },
                P,
                u,
              ),
              children: r(oe, {
                __fromCanvasComponent: !0,
                children: r(F, {
                  children: r(m.p, {
                    style: {
                      "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                      "--framer-font-family":
                        '"DM Sans", "DM Sans Placeholder", sans-serif',
                      "--framer-letter-spacing": "-0.2px",
                      "--framer-line-height": "26px",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: r(m.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage:
                          "linear-gradient(90deg, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)) 0%, var(--token-69ff14d1-f0d2-4345-baec-a0ff0f57f0ca, rgba(153, 153, 153, 0)) 409.99999999999994%)",
                      },
                      children: "Home",
                    }),
                  }),
                }),
                className: "framer-dvunvu",
                fonts: ["GF;DM Sans-regular"],
                layoutDependency: te,
                layoutId: "xT73NYyDk",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: 0.6,
                },
                text: v,
                variants: {
                  "Q4qMYnPU6-hover": { opacity: 1 },
                  oPLp6MLTy: { opacity: 1 },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  _r = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pRym1.framer-yfxzj5, .framer-pRym1 .framer-yfxzj5 { display: block; }",
    ".framer-pRym1.framer-mshz23 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-pRym1 .framer-dvunvu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  ],
  Te = E(Lr, _r, "framer-pRym1"),
  it = Te;
Te.displayName = "Navigation/Text Hover 2";
Te.defaultProps = { height: 26, width: 43 };
N(Te, {
  variant: {
    options: ["Q4qMYnPU6", "oPLp6MLTy"],
    optionTitles: ["In-Active", "Active"],
    title: "Variant",
    type: h.Enum,
  },
  Cn6fz_Vow: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  aLnDlFZKR: { title: "Link", type: h.Link },
  TqaTpTiSx: { defaultValue: !1, title: "New Tab", type: h.Boolean },
  X2yrtSssb: { defaultValue: !1, title: "Smooth Scroll", type: h.Boolean },
  gBAcWz1fh: { title: "Click", type: h.EventHandler },
});
H(
  Te,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 },
);
var zr = { vbxf8HL8_: { hover: !0 } },
  Dr = ["vbxf8HL8_", "dckrgQoZs"],
  Nr = "framer-GPjkJ",
  Ar = { dckrgQoZs: "framer-v-11z3ns5", vbxf8HL8_: "framer-v-a47mct" };
function Ur(n, ...e) {
  let a = {};
  return (e?.forEach((t) => t && Object.assign(a, n[t])), a);
}
var Er = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Pr = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  Br = m.create(F),
  Mr = { "In-Active": "vbxf8HL8_", Active: "dckrgQoZs" },
  Xr = ({
    click: n,
    height: e,
    id: a,
    link: t,
    newTab: i,
    smoothScroll: l,
    title: s,
    width: o,
    ...c
  }) => ({
    ...c,
    aLnDlFZKR: t ?? c.aLnDlFZKR,
    Cn6fz_Vow: s ?? c.Cn6fz_Vow ?? "Home",
    gBAcWz1fh: n ?? c.gBAcWz1fh,
    TqaTpTiSx: i ?? c.TqaTpTiSx,
    variant: Mr[c.variant] ?? c.variant ?? "vbxf8HL8_",
    X2yrtSssb: l ?? c.X2yrtSssb,
  }),
  Or = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  jr = M(function (n, e) {
    let { activeLocale: a, setLocale: t } = U(),
      {
        style: i,
        className: l,
        layoutId: s,
        variant: o,
        Cn6fz_Vow: c,
        aLnDlFZKR: d,
        TqaTpTiSx: x,
        X2yrtSssb: g,
        gBAcWz1fh: v,
        ...p
      } = Xr(n),
      {
        baseVariant: b,
        classNames: L,
        clearLoadingGesture: I,
        gestureHandlers: y,
        gestureVariant: P,
        isLoading: le,
        setGestureState: Z,
        setVariant: R,
        variants: u,
      } = ee({
        cycleOrder: Dr,
        defaultVariant: "vbxf8HL8_",
        enabledGestures: zr,
        variant: o,
        variantClassNames: Ar,
      }),
      k = Or(n, u),
      { activeVariantCallback: T, delay: B } = fe(b),
      Y = T(async (...ce) => {
        if ((Z({ isPressed: !1 }), v && (await v(...ce)) === !1)) return !1;
      }),
      S = C(Nr, ...[Ae]),
      K = _(null),
      G = X(),
      re = $();
    return r(j, {
      id: s ?? G,
      children: r(Br, {
        animate: u,
        initial: !1,
        children: r(Pr, {
          value: Er,
          children: r(ge, {
            href: d,
            motionChild: !0,
            nodeId: "vbxf8HL8_",
            openInNewTab: x,
            smoothScroll: g,
            children: r(m.a, {
              ...p,
              ...y,
              className: `${C(S, "framer-a47mct", l, L)} framer-i9k05o`,
              "data-framer-name": "In-Active",
              "data-highlight": !0,
              layoutDependency: k,
              layoutId: "vbxf8HL8_",
              onTap: Y,
              ref: e ?? K,
              style: { ...i },
              ...Ur(
                {
                  "vbxf8HL8_-hover": { "data-framer-name": void 0 },
                  dckrgQoZs: { "data-framer-name": "Active" },
                },
                b,
                P,
              ),
              children: r(oe, {
                __fromCanvasComponent: !0,
                children: r(F, {
                  children: r(m.p, {
                    className: "framer-styles-preset-x0s9r5",
                    "data-styles-preset": "QhK6qqT5U",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: r(m.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage:
                          "linear-gradient(90deg, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)) 0%, var(--token-69ff14d1-f0d2-4345-baec-a0ff0f57f0ca, rgba(153, 153, 153, 0)) 409.99999999999994%)",
                      },
                      children: "Home",
                    }),
                  }),
                }),
                className: "framer-oap6fz",
                fonts: ["Inter"],
                layoutDependency: k,
                layoutId: "uuXIr8Qtv",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: 0.6,
                },
                text: c,
                variants: {
                  "vbxf8HL8_-hover": { opacity: 1 },
                  dckrgQoZs: { opacity: 1 },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  qr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-GPjkJ.framer-i9k05o, .framer-GPjkJ .framer-i9k05o { display: block; }",
    ".framer-GPjkJ.framer-a47mct { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-GPjkJ .framer-oap6fz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GPjkJ.framer-a47mct { gap: 0px; } .framer-GPjkJ.framer-a47mct > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-GPjkJ.framer-a47mct > :first-child { margin-left: 0px; } .framer-GPjkJ.framer-a47mct > :last-child { margin-right: 0px; } }",
    ...Ne,
  ],
  Ce = E(jr, qr, "framer-GPjkJ"),
  se = Ce;
Ce.displayName = "Navigation/Text Hover";
Ce.defaultProps = { height: 26, width: 43 };
N(Ce, {
  variant: {
    options: ["vbxf8HL8_", "dckrgQoZs"],
    optionTitles: ["In-Active", "Active"],
    title: "Variant",
    type: h.Enum,
  },
  Cn6fz_Vow: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  aLnDlFZKR: { title: "Link", type: h.Link },
  TqaTpTiSx: { defaultValue: !1, title: "New Tab", type: h.Boolean },
  X2yrtSssb: { defaultValue: !1, title: "Smooth Scroll", type: h.Boolean },
  gBAcWz1fh: { title: "Click", type: h.EventHandler },
});
H(
  Ce,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/evo/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/evo/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/evo/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/evo/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/evo/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/evo/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/evo/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...pe(De),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Hr = A(se),
  Wr = A(it),
  Zr = A(nt),
  Gr = ["hDiagrBhX", "PpWX9Nzcf", "tAhy0cIZG"],
  Qr = "framer-maRhO",
  Yr = {
    hDiagrBhX: "framer-v-z20imy",
    PpWX9Nzcf: "framer-v-5vmnq2",
    tAhy0cIZG: "framer-v-1mpq8ij",
  };
function ot(n, ...e) {
  let a = {};
  return (e?.forEach((t) => t && Object.assign(a, n[t])), a);
}
var Kr = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Jr = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  $r = m.create(F),
  ea = { L: "hDiagrBhX", M: "PpWX9Nzcf", S: "tAhy0cIZG" },
  ta = ({ height: n, id: e, width: a, ...t }) => ({
    ...t,
    variant: ea[t.variant] ?? t.variant ?? "hDiagrBhX",
  }),
  ra = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  aa = M(function (n, e) {
    let a = _(null),
      t = e ?? a,
      i = X(),
      { activeLocale: l, setLocale: s } = U(),
      o = $(),
      { style: c, className: d, layoutId: x, variant: g, ...v } = ta(n),
      {
        baseVariant: p,
        classNames: b,
        clearLoadingGesture: L,
        gestureHandlers: I,
        gestureVariant: y,
        isLoading: P,
        setGestureState: le,
        setVariant: Z,
        variants: R,
      } = ee({
        cycleOrder: Gr,
        defaultVariant: "hDiagrBhX",
        ref: t,
        variant: g,
        variantClassNames: Yr,
      }),
      u = ra(n, R),
      T = C(Qr, ...[]),
      B = () => p !== "tAhy0cIZG";
    return r(j, {
      id: x ?? i,
      children: r($r, {
        animate: R,
        initial: !1,
        children: r(Jr, {
          value: Kr,
          children: r(m.footer, {
            ...v,
            ...I,
            className: C(T, "framer-z20imy", d, b),
            "data-border": !0,
            "data-framer-name": "L",
            layoutDependency: u,
            layoutId: "hDiagrBhX",
            ref: t,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-d86f1591-0c16-44cd-be10-19334dfa9293, rgba(255, 255, 255, 0.1))",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              background:
                "conic-gradient(from 0deg at 50% 0%, rgb(0, 0, 0) 90deg, rgba(79, 26, 214, 0.4) 181.2985641891892deg, rgb(0, 0, 0) 270deg)",
              ...c,
            },
            ...ot(
              {
                PpWX9Nzcf: { "data-framer-name": "M" },
                tAhy0cIZG: { "data-framer-name": "S" },
              },
              p,
              y,
            ),
            children: z(m.div, {
              className: "framer-g1rbiy",
              "data-framer-name": "Bottom",
              layoutDependency: u,
              layoutId: "fyZQQHDs0",
              children: [
                r(m.div, {
                  className: "framer-u157m0",
                  "data-framer-name": "Seperator",
                  layoutDependency: u,
                  layoutId: "vF95pkrWU",
                  style: {
                    background:
                      "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
                  },
                }),
                z(m.div, {
                  className: "framer-1bzffsm",
                  "data-framer-name": "Content",
                  layoutDependency: u,
                  layoutId: "iYA90OaOU",
                  children: [
                    r(m.div, {
                      className: "framer-1dc31xf",
                      "data-framer-name": "Left",
                      layoutDependency: u,
                      layoutId: "V33sNCVG4",
                      children: r(V, {
                        height: 26,
                        y: (o?.y || 0) + 100 + 0 + 0 + 25 + 0 + 0,
                        ...ot(
                          {
                            tAhy0cIZG: {
                              y: (o?.y || 0) + 50 + 0 + 0 + 25 + 0 + 0 + 0,
                            },
                          },
                          p,
                          y,
                        ),
                        children: r(q, {
                          className: "framer-1kjbmpx-container",
                          layoutDependency: u,
                          layoutId: "ZzU8PmB3m-container",
                          nodeId: "ZzU8PmB3m",
                          rendersWithMotion: !0,
                          scopeId: "LT0gX9mtu",
                          children: r(se, {
                            Cn6fz_Vow: "\xA9 2025 SSDSSC",
                            height: "100%",
                            id: "ZzU8PmB3m",
                            layoutId: "ZzU8PmB3m",
                            TqaTpTiSx: !0,
                            variant: "vbxf8HL8_",
                            width: "100%",
                            X2yrtSssb: !1,
                          }),
                        }),
                      }),
                    }),
                    z(m.div, {
                      className: "framer-h4dxqk",
                      "data-framer-name": "Right",
                      layoutDependency: u,
                      layoutId: "LastCLh5E",
                      children: [
                        r(m.div, {
                          className: "framer-1nql8wg",
                          "data-framer-name": "Left",
                          layoutDependency: u,
                          layoutId: "UBoGSgJEp",
                          children: r(V, {
                            height: 26,
                            y: (o?.y || 0) + 100 + 0 + 0 + 25 + 0 + 0 + 0,
                            ...ot(
                              {
                                tAhy0cIZG: {
                                  y:
                                    (o?.y || 0) +
                                    50 +
                                    0 +
                                    0 +
                                    25 +
                                    0 +
                                    36 +
                                    0 +
                                    0,
                                },
                              },
                              p,
                              y,
                            ),
                            children: r(q, {
                              className: "framer-es3wox-container",
                              layoutDependency: u,
                              layoutId: "hBsvnnyzu-container",
                              nodeId: "hBsvnnyzu",
                              rendersWithMotion: !0,
                              scopeId: "LT0gX9mtu",
                              children: r(it, {
                                Cn6fz_Vow: "Developed By Vinura Senadeera",
                                height: "100%",
                                id: "hBsvnnyzu",
                                layoutId: "hBsvnnyzu",
                                TqaTpTiSx: !1,
                                variant: "Q4qMYnPU6",
                                width: "100%",
                                X2yrtSssb: !1,
                              }),
                            }),
                          }),
                        }),
                        B() &&
                          r(m.div, {
                            className: "framer-1vexojs",
                            "data-framer-name": "Seperator",
                            layoutDependency: u,
                            layoutId: "O2xaCLSRf",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                        B() &&
                          r(m.div, {
                            className: "framer-1p046e1",
                            "data-framer-name": "Right",
                            layoutDependency: u,
                            layoutId: "uafx6LU3O",
                            children: r(V, {
                              height: 26,
                              y: (o?.y || 0) + 100 + 0 + 0 + 25 + 0 + 0 + 0,
                              children: r(q, {
                                className: "framer-1xrnzd-container",
                                isModuleExternal: !0,
                                layoutDependency: u,
                                layoutId: "vI8G0V4WX-container",
                                nodeId: "vI8G0V4WX",
                                rendersWithMotion: !0,
                                scopeId: "LT0gX9mtu",
                                children: r(nt, {
                                  Cn6fz_Vow: "Head of team ocular",
                                  height: "100%",
                                  id: "vI8G0V4WX",
                                  layoutId: "vI8G0V4WX",
                                  TqaTpTiSx: !1,
                                  variant: "vbxf8HL8_",
                                  width: "100%",
                                  X2yrtSssb: !1,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  na = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-maRhO.framer-1ukbytl, .framer-maRhO .framer-1ukbytl { display: block; }",
    ".framer-maRhO.framer-z20imy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px 0px 24px 0px; position: relative; width: 1200px; }",
    ".framer-maRhO .framer-g1rbiy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-maRhO .framer-u157m0 { flex: none; height: 1px; position: relative; width: 100%; }",
    ".framer-maRhO .framer-1bzffsm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 120px 0px 120px; position: relative; width: 100%; }",
    ".framer-maRhO .framer-1dc31xf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-maRhO .framer-1kjbmpx-container, .framer-maRhO .framer-es3wox-container, .framer-maRhO .framer-1xrnzd-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-maRhO .framer-h4dxqk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-maRhO .framer-1nql8wg, .framer-maRhO .framer-1p046e1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-maRhO .framer-1vexojs { flex: none; height: 26px; position: relative; width: 1px; }",
    ".framer-maRhO.framer-v-5vmnq2.framer-z20imy { width: 810px; }",
    ".framer-maRhO.framer-v-5vmnq2 .framer-1bzffsm { padding: 0px 70px 0px 70px; }",
    ".framer-maRhO.framer-v-1mpq8ij.framer-z20imy { gap: 50px; padding: 50px 0px 24px 0px; width: 390px; }",
    ".framer-maRhO.framer-v-1mpq8ij .framer-1bzffsm { flex-direction: column; gap: 10px; justify-content: flex-start; padding: 0px 30px 0px 30px; }",
    ".framer-maRhO.framer-v-1mpq8ij .framer-1dc31xf { order: 0; }",
    ".framer-maRhO.framer-v-1mpq8ij .framer-h4dxqk { order: 1; }",
    '.framer-maRhO[data-border="true"]::after, .framer-maRhO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Re = E(aa, na, "framer-maRhO"),
  st = Re;
Re.displayName = "Navigation/Footer";
Re.defaultProps = { height: 175, width: 1200 };
N(Re, {
  variant: {
    options: ["hDiagrBhX", "PpWX9Nzcf", "tAhy0cIZG"],
    optionTitles: ["L", "M", "S"],
    title: "Variant",
    type: h.Enum,
  },
});
H(Re, [{ explicitInter: !0, fonts: [] }, ...Hr, ...Wr, ...Zr], {
  supportsExplicitInterCodegen: !0,
});
var ia = A(Qe),
  oa = A(Ue),
  sa = A(xe),
  la = zt(_e(m.div)),
  Yt = kt(Ue),
  ca = "framer-bp3XZ",
  da = { lFqTDQUAs: "framer-v-1lltzzi" };
var ma = (n) => {
    if (typeof n != "number") return n;
    if (Number.isFinite(n)) return Math.max(0, n) + "px";
  },
  fa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  pa = { damping: 60, delay: 1.1, mass: 1, stiffness: 200, type: "spring" },
  ua = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pa,
    x: 0,
    y: 0,
  },
  ha = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ga = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  ya = m.create(F),
  xa = ({
    bodyText: n,
    height: e,
    icon: a,
    id: t,
    padding: i,
    tag: l,
    title1: s,
    title2: o,
    width: c,
    ...d
  }) => ({
    ...d,
    c6uK1dg38: a ?? d.c6uK1dg38 ?? "Acorn",
    cwo7DCFXO:
      n ??
      d.cwo7DCFXO ??
      "Harnessing the power of artificial intelligence to revolutionize  industries and enhance human experiences.",
    lTXT0qucV: i ?? d.lTXT0qucV ?? "50px",
    mAv2pC_4U: l ?? d.mAv2pC_4U ?? "Features",
    QVKlogXTW: s ?? d.QVKlogXTW ?? "Our Method is Simple and",
    T8OTVIL45: o ?? d.T8OTVIL45 ?? "Transparent at Every Step.",
  }),
  va = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  ba = M(function (n, e) {
    let a = _(null),
      t = e ?? a,
      i = X(),
      { activeLocale: l, setLocale: s } = U(),
      o = $(),
      {
        style: c,
        className: d,
        layoutId: x,
        variant: g,
        c6uK1dg38: v,
        mAv2pC_4U: p,
        QVKlogXTW: b,
        T8OTVIL45: L,
        cwo7DCFXO: I,
        lTXT0qucV: y,
        ...P
      } = xa(n),
      {
        baseVariant: le,
        classNames: Z,
        clearLoadingGesture: R,
        gestureHandlers: u,
        gestureVariant: k,
        isLoading: T,
        setGestureState: B,
        setVariant: Y,
        variants: te,
      } = ee({
        defaultVariant: "lFqTDQUAs",
        ref: t,
        variant: g,
        variantClassNames: da,
      }),
      S = va(n, te),
      G = C(ca, ...[Ht, Ot]);
    return r(j, {
      id: x ?? i,
      children: r(ya, {
        animate: te,
        initial: !1,
        children: r(ga, {
          value: fa,
          children: z(m.div, {
            ...P,
            ...u,
            className: C(G, "framer-1lltzzi", d, Z),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: S,
            layoutId: "lFqTDQUAs",
            ref: t,
            style: {
              "--1v1vucn": ma(y),
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(0px)",
              backgroundColor:
                "var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, rgb(0, 0, 0))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              WebkitBackdropFilter: "blur(0px)",
              ...c,
            },
            children: [
              r(ze, {
                as: "figure",
                background: {
                  alt: "",
                  fit: "fill",
                  loading: ye((o?.y || 0) + 0),
                  pixelHeight: 3425,
                  pixelWidth: 5071,
                  sizes: o?.width || "100vw",
                  src: "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png",
                  srcSet:
                    "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=512 512w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=1024 1024w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=2048 2048w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=4096 4096w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png 5071w",
                },
                className: "framer-fgxqhm",
                "data-framer-name": "Abstract Dots",
                layoutDependency: S,
                layoutId: "FHZ86Gf7d",
              }),
              r(V, {
                children: r(q, {
                  className: "framer-vu8s90-container",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: S,
                  layoutId: "eAnRRToZK-container",
                  nodeId: "eAnRRToZK",
                  rendersWithMotion: !0,
                  scopeId: "m_S0SazFM",
                  style: { opacity: 0.8 },
                  children: r(Qe, {
                    animation: { animate: !0, speed: 10 },
                    height: "100%",
                    id: "eAnRRToZK",
                    intensity: 20,
                    layoutId: "eAnRRToZK",
                    position: 50,
                    radius: "0px",
                    rays: 30,
                    raysColor: {
                      color:
                        "var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214))",
                      color1: "rgb(255, 255, 255)",
                      color2: "rgb(255, 203, 71)",
                      mode: "single",
                    },
                    reach: 30,
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              z(m.div, {
                className: "framer-1pcl7ce",
                "data-framer-name": "Content",
                layoutDependency: S,
                layoutId: "zshF23nVC",
                children: [
                  z(m.div, {
                    className: "framer-1dx6x84",
                    "data-framer-name": "Top",
                    layoutDependency: S,
                    layoutId: "MvnZDt7dB",
                    children: [
                      r(V, {
                        height: 40,
                        children: r(q, {
                          className: "framer-xdturt-container",
                          layoutDependency: S,
                          layoutId: "ey8JREzAv-container",
                          nodeId: "ey8JREzAv",
                          rendersWithMotion: !0,
                          scopeId: "m_S0SazFM",
                          children: r(Ue, {
                            aZ7GvMqIl: v,
                            height: "100%",
                            id: "ey8JREzAv",
                            KS7KLFqN8: p,
                            layoutId: "ey8JREzAv",
                            rQKAY6456: "NEW",
                            variant: "axDSKQZXP",
                            width: "100%",
                            xAPRy8bad: 5,
                          }),
                        }),
                      }),
                      z(m.div, {
                        className: "framer-alj09w",
                        "data-framer-name": "Title",
                        layoutDependency: S,
                        layoutId: "oyTU6I7wJ",
                        children: [
                          r(oe, {
                            __fromCanvasComponent: !0,
                            children: r(F, {
                              children: r(m.h2, {
                                className: "framer-styles-preset-190xti5",
                                "data-styles-preset": "QuTNz53Yy",
                                style: { "--framer-text-alignment": "center" },
                                children: "Our Method is Simple and",
                              }),
                            }),
                            className: "framer-emji9l",
                            "data-framer-name": "Text 1",
                            fonts: ["Inter"],
                            layoutDependency: S,
                            layoutId: "rFacuY85f",
                            style: { "--framer-paragraph-spacing": "0px" },
                            text: b,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          r(oe, {
                            __fromCanvasComponent: !0,
                            children: r(F, {
                              children: r(m.h2, {
                                className: "framer-styles-preset-190xti5",
                                "data-styles-preset": "QuTNz53Yy",
                                style: {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))",
                                },
                                children: "Transparent at Every Step.",
                              }),
                            }),
                            className: "framer-5b0vsd",
                            "data-framer-name": "Text 2",
                            fonts: ["Inter"],
                            layoutDependency: S,
                            layoutId: "Ne1LQo5l8",
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: L,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  r(m.div, {
                    className: "framer-1uaf3uz",
                    "data-framer-name": "Middle",
                    layoutDependency: S,
                    layoutId: "QXKaAn0rq",
                    children: r(oe, {
                      __fromCanvasComponent: !0,
                      children: r(F, {
                        children: r(m.p, {
                          className: "framer-styles-preset-x0s9r5",
                          "data-styles-preset": "QhK6qqT5U",
                          style: { "--framer-text-alignment": "center" },
                          children:
                            "Harnessing the power of artificial intelligence to revolutionize  industries and enhance human experiences.",
                        }),
                      }),
                      className: "framer-12v084n",
                      "data-framer-name": "Body Text",
                      fonts: ["Inter"],
                      layoutDependency: S,
                      layoutId: "hY1lRNNNT",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: I,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  r(m.div, {
                    className: "framer-4ual7r",
                    "data-framer-name": "Bottom",
                    layoutDependency: S,
                    layoutId: "jA7lIAm0W",
                    children: r(la, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: ua,
                      className: "framer-1vgaqbd",
                      "data-framer-appear-id": "1vgaqbd",
                      "data-framer-name": "Buttons",
                      initial: ha,
                      layoutDependency: S,
                      layoutId: "YWKzjSklm",
                      optimized: !0,
                      children: r(V, {
                        height: 46,
                        children: r(q, {
                          className: "framer-5wbums-container",
                          layoutDependency: S,
                          layoutId: "ZRpR5VODi-container",
                          nodeId: "ZRpR5VODi",
                          rendersWithMotion: !0,
                          scopeId: "m_S0SazFM",
                          children: r(xe, {
                            AL_NU982V: !1,
                            dlVBgpKLv: "Contact Us",
                            GT109pdEG: "tel:+94722788331",
                            height: "100%",
                            id: "ZRpR5VODi",
                            layoutId: "ZRpR5VODi",
                            SD1BGlGhK: !1,
                            variant: "vf6JWDf13",
                            width: "100%",
                            YVFZiszrG: {
                              borderColor:
                                "var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15))",
                              borderStyle: "solid",
                              borderWidth: 3,
                            },
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  wa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-bp3XZ.framer-17rv3f0, .framer-bp3XZ .framer-17rv3f0 { display: block; }",
    ".framer-bp3XZ.framer-1lltzzi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: var(--1v1vucn); position: relative; width: 730px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-bp3XZ .framer-fgxqhm { flex: none; height: 46%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; }",
    ".framer-bp3XZ .framer-vu8s90-container { flex: none; height: 400px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; }",
    ".framer-bp3XZ .framer-1pcl7ce { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 680px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }",
    ".framer-bp3XZ .framer-1dx6x84 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-bp3XZ .framer-xdturt-container, .framer-bp3XZ .framer-5wbums-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-bp3XZ .framer-alj09w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-bp3XZ .framer-emji9l, .framer-bp3XZ .framer-5b0vsd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-bp3XZ .framer-1uaf3uz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-bp3XZ .framer-12v084n { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-bp3XZ .framer-4ual7r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-bp3XZ .framer-1vgaqbd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px; height: min-content; justify-content: center; max-width: 600px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ...qt,
    ...Xt,
    '.framer-bp3XZ[data-border="true"]::after, .framer-bp3XZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Fe = E(ba, wa, "framer-bp3XZ"),
  lt = Fe;
Fe.displayName = "Navigation/CTA";
Fe.defaultProps = { height: 439, width: 730 };
N(Fe, {
  c6uK1dg38: Yt?.aZ7GvMqIl && {
    ...Yt.aZ7GvMqIl,
    defaultValue: "Acorn",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  mAv2pC_4U: {
    defaultValue: "Features",
    displayTextArea: !1,
    title: "Tag",
    type: h.String,
  },
  QVKlogXTW: {
    defaultValue: "Our Method is Simple and",
    displayTextArea: !0,
    title: "Title 1",
    type: h.String,
  },
  T8OTVIL45: {
    defaultValue: "Transparent at Every Step.",
    displayTextArea: !0,
    title: "Title 2",
    type: h.String,
  },
  cwo7DCFXO: {
    defaultValue:
      "Harnessing the power of artificial intelligence to revolutionize  industries and enhance human experiences.",
    displayTextArea: !0,
    title: "Body Text",
    type: h.String,
  },
  lTXT0qucV: { defaultValue: "50px", title: "Padding", type: h.Padding },
});
H(
  Fe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/evo/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/evo/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/evo/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/evo/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/evo/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/evo/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/evo/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...ia,
    ...oa,
    ...sa,
    ...pe(jt),
    ...pe(Mt),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Ia = A(se),
  Sa = A(xe),
  Ta = _e(m.header),
  Ca = ["BUzWFjjg8", "tr5pxKGkd", "A2qOxz8VD"],
  Ra = "framer-IixxI",
  Fa = {
    A2qOxz8VD: "framer-v-csul5u",
    BUzWFjjg8: "framer-v-gazge4",
    tr5pxKGkd: "framer-v-1x71hfi",
  };
function W(n, ...e) {
  let a = {};
  return (e?.forEach((t) => t && Object.assign(a, n[t])), a);
}
var Va = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: "spring" },
  ka = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -94,
  },
  La = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  _a = { duration: 0, type: "tween" },
  za = ({ value: n, children: e }) => {
    let a = J(D),
      t = n ?? a.transition,
      i = O(() => ({ ...a, transition: t }), [JSON.stringify(t)]);
    return r(D.Provider, { value: i, children: e });
  },
  Da = m.create(F),
  Na = {
    "Mobile Closed": "tr5pxKGkd",
    "Mobile Open": "A2qOxz8VD",
    Default: "BUzWFjjg8",
  },
  Aa = ({ height: n, id: e, width: a, ...t }) => ({
    ...t,
    variant: Na[t.variant] ?? t.variant ?? "BUzWFjjg8",
  }),
  Ua = (n, e) =>
    n.layoutDependency ? e.join("-") + n.layoutDependency : e.join("-"),
  Ea = M(function (n, e) {
    let a = _(null),
      t = e ?? a,
      i = X(),
      { activeLocale: l, setLocale: s } = U(),
      o = $(),
      { style: c, className: d, layoutId: x, variant: g, ...v } = Aa(n),
      {
        baseVariant: p,
        classNames: b,
        clearLoadingGesture: L,
        gestureHandlers: I,
        gestureVariant: y,
        isLoading: P,
        setGestureState: le,
        setVariant: Z,
        variants: R,
      } = ee({
        cycleOrder: Ca,
        defaultVariant: "BUzWFjjg8",
        ref: t,
        variant: g,
        variantClassNames: Fa,
      }),
      u = Ua(n, R),
      { activeVariantCallback: k, delay: T } = fe(p),
      B = k(async (...w) => {
        Z("tr5pxKGkd");
      }),
      Y = k(async (...w) => {
        Z("A2qOxz8VD");
      }),
      te = k(async (...w) => {
        Z("tr5pxKGkd");
      }),
      K = C(Ra, ...[]),
      G = () => p === "A2qOxz8VD",
      re = () => p === "tr5pxKGkd",
      ce = Le(),
      de = () => !!["tr5pxKGkd", "A2qOxz8VD"].includes(p);
    return r(j, {
      id: x ?? i,
      children: r(Da, {
        animate: R,
        initial: !1,
        children: r(za, {
          value: La,
          ...W({ tr5pxKGkd: { value: _a } }, p, y),
          children: r(Ta, {
            ...v,
            ...I,
            __framer__animate: { transition: Va },
            __framer__animateOnce: !1,
            __framer__scrollDirection: { direction: "down", target: ka },
            __framer__styleAppearEffectEnabled: !0,
            __framer__threshold: 0.5,
            __perspectiveFX: !1,
            __smartComponentFX: !0,
            __targetOpacity: 1,
            className: C(K, "framer-gazge4", d, b),
            "data-border": !0,
            "data-framer-name": "Default",
            layoutDependency: u,
            layoutId: "BUzWFjjg8",
            ref: t,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-d86f1591-0c16-44cd-be10-19334dfa9293, rgba(255, 255, 255, 0.1))",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backdropFilter: "blur(5px)",
              background:
                "linear-gradient(180deg, var(--token-f114f1e6-e38c-48e5-8f37-0b117b1ed275, rgba(0, 0, 0, 0)) 6.642384572072071%, var(--token-91acd6b3-0466-4512-bfe0-548e2faebf76, rgba(0, 0, 0, 0.3)) 100%)",
              WebkitBackdropFilter: "blur(5px)",
              ...c,
            },
            variants: {
              A2qOxz8VD: {
                backdropFilter: "blur(20px)",
                background:
                  "linear-gradient(180deg, var(--token-561b3d91-c258-4609-94c9-3cc008fdd628, rgb(19, 19, 19)) 6.642384572072071%, rgba(0, 0, 0, 0.3) 100%)",
                WebkitBackdropFilter: "blur(20px)",
              },
              tr5pxKGkd: {
                backdropFilter: "blur(20px)",
                background:
                  "linear-gradient(180deg, rgba(19, 19, 19, 0.5) 6.642384572072071%, rgba(0, 0, 0, 0.3) 100%)",
                WebkitBackdropFilter: "blur(20px)",
              },
            },
            ...W(
              {
                A2qOxz8VD: { "data-framer-name": "Mobile Open" },
                tr5pxKGkd: { "data-framer-name": "Mobile Closed" },
              },
              p,
              y,
            ),
            children: z(m.nav, {
              className: "framer-1tbjop8",
              "data-framer-name": "Menu",
              layoutDependency: u,
              layoutId: "dcUnllBWU",
              children: [
                z(m.div, {
                  className: "framer-1y9d1w4",
                  "data-framer-name": "Logo/Menu Items",
                  layoutDependency: u,
                  layoutId: "kXxTChlTV",
                  children: [
                    r(ze, {
                      background: {
                        alt: "",
                        fit: "fit",
                        loading: ye(
                          (o?.y || 0) +
                            (0 + ((o?.height || 91) - 0 - 46) / 2) +
                            3 +
                            0,
                        ),
                        pixelHeight: 396,
                        pixelWidth: 3e3,
                        positionX: "center",
                        positionY: "center",
                        sizes: "187px",
                        src: "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png",
                        srcSet:
                          "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=512 512w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=1024 1024w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=2048 2048w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png 3000w",
                      },
                      className: "framer-19b8j8q",
                      "data-framer-name": "Logo",
                      layoutDependency: u,
                      layoutId: "xUTKuinVP",
                      ...W(
                        {
                          A2qOxz8VD: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: ye(
                                (o?.y || 0) +
                                  (0 + ((o?.height || 207) - 0 - 207) / 2) +
                                  30 +
                                  0 +
                                  0,
                              ),
                              pixelHeight: 396,
                              pixelWidth: 3e3,
                              positionX: "center",
                              positionY: "center",
                              sizes: "187px",
                              src: "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png",
                              srcSet:
                                "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=512 512w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=1024 1024w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=2048 2048w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png 3000w",
                            },
                          },
                          tr5pxKGkd: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: ye((o?.y || 0) + 0 + 0 + 30 + 0 + 0),
                              pixelHeight: 396,
                              pixelWidth: 3e3,
                              positionX: "center",
                              positionY: "center",
                              sizes: "167px",
                              src: "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png",
                              srcSet:
                                "/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=512 512w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=1024 1024w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png?scale-down-to=2048 2048w,/evo/images/Xjpe9KfIwDVxZN5ugXiUnSYq6g.png 3000w",
                            },
                          },
                        },
                        p,
                        y,
                      ),
                    }),
                    G() &&
                      z(m.div, {
                        className: "framer-12regrz",
                        "data-framer-name": "Mobile Menu Icon",
                        layoutDependency: u,
                        layoutId: "eldEUGZgk",
                        style: {
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        ...W(
                          { A2qOxz8VD: { "data-highlight": !0, onTap: B } },
                          p,
                          y,
                        ),
                        children: [
                          r(m.div, {
                            className: "framer-e3vimg",
                            "data-framer-name": "Line",
                            layoutDependency: u,
                            layoutId: "SuSDhpi4p",
                            style: {
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                              rotate: 0,
                            },
                            variants: { A2qOxz8VD: { rotate: 45 } },
                          }),
                          r(m.div, {
                            className: "framer-1oohkg0",
                            "data-framer-name": "Line",
                            layoutDependency: u,
                            layoutId: "dzAqViiXy",
                            style: {
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                              rotate: 0,
                            },
                            variants: { A2qOxz8VD: { rotate: -45 } },
                          }),
                        ],
                      }),
                    re() &&
                      z(m.div, {
                        className: "framer-1i87owa",
                        "data-framer-name": "Mobile Menu Icon",
                        "data-highlight": !0,
                        layoutDependency: u,
                        layoutId: "fD1eGiaoB",
                        onTap: Y,
                        style: {
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: [
                          r(m.div, {
                            className: "framer-1n1mghp",
                            "data-framer-name": "Line",
                            layoutDependency: u,
                            layoutId: "c5fsl38hz",
                            style: {
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                          }),
                          r(m.div, {
                            className: "framer-dc4vcc",
                            "data-framer-name": "Line",
                            layoutDependency: u,
                            layoutId: "AL_nGj7fu",
                            style: {
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                          }),
                        ],
                      }),
                  ],
                }),
                re() &&
                  z(m.div, {
                    className: "framer-26qar7",
                    "data-framer-name": "Navigation/Menu Items",
                    layoutDependency: u,
                    layoutId: "bBb8X1P8O",
                    children: [
                      r(we, {
                        links: [
                          {
                            href: { webPageId: "augiA20Il" },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { webPageId: "augiA20Il" },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (w) =>
                          r(V, {
                            height: 26,
                            ...W(
                              {
                                tr5pxKGkd: {
                                  y: (o?.y || 0) + 0 + 0 + 30 + 58 + 0 + 0,
                                },
                              },
                              p,
                              y,
                            ),
                            children: r(q, {
                              className: "framer-1u25pxi-container",
                              layoutDependency: u,
                              layoutId: "O6b3wpXms-container",
                              nodeId: "O6b3wpXms",
                              rendersWithMotion: !0,
                              scopeId: "VBcFpApnc",
                              children: r(se, {
                                aLnDlFZKR: w[0],
                                Cn6fz_Vow: "Home",
                                height: "100%",
                                id: "O6b3wpXms",
                                layoutId: "O6b3wpXms",
                                TqaTpTiSx: !1,
                                variant: "dckrgQoZs",
                                width: "100%",
                                X2yrtSssb: !1,
                                ...W({ tr5pxKGkd: { aLnDlFZKR: w[1] } }, p, y),
                              }),
                            }),
                          }),
                      }),
                      r(we, {
                        links: [
                          {
                            href: { webPageId: "hetOMwTYW" },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { webPageId: "hetOMwTYW" },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (w) =>
                          r(V, {
                            height: 26,
                            ...W(
                              {
                                tr5pxKGkd: {
                                  y: (o?.y || 0) + 0 + 0 + 30 + 58 + 0 + 41,
                                },
                              },
                              p,
                              y,
                            ),
                            children: r(q, {
                              className: "framer-1usbprv-container",
                              layoutDependency: u,
                              layoutId: "fagyALQ94-container",
                              nodeId: "fagyALQ94",
                              rendersWithMotion: !0,
                              scopeId: "VBcFpApnc",
                              children: r(se, {
                                aLnDlFZKR: w[0],
                                Cn6fz_Vow: "About",
                                height: "100%",
                                id: "fagyALQ94",
                                layoutId: "fagyALQ94",
                                TqaTpTiSx: !1,
                                variant: "dckrgQoZs",
                                width: "100%",
                                X2yrtSssb: !1,
                                ...W({ tr5pxKGkd: { aLnDlFZKR: w[1] } }, p, y),
                              }),
                            }),
                          }),
                      }),
                      r(we, {
                        links: [
                          {
                            href: { webPageId: "ADJCSktRp" },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { webPageId: "ADJCSktRp" },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (w) =>
                          r(V, {
                            height: 26,
                            ...W(
                              {
                                tr5pxKGkd: {
                                  y: (o?.y || 0) + 0 + 0 + 30 + 58 + 0 + 82,
                                },
                              },
                              p,
                              y,
                            ),
                            children: r(q, {
                              className: "framer-l8ivna-container",
                              layoutDependency: u,
                              layoutId: "z7X7x7ZM0-container",
                              nodeId: "z7X7x7ZM0",
                              rendersWithMotion: !0,
                              scopeId: "VBcFpApnc",
                              children: r(se, {
                                aLnDlFZKR: w[0],
                                Cn6fz_Vow: "Portfolio",
                                height: "100%",
                                id: "z7X7x7ZM0",
                                layoutId: "z7X7x7ZM0",
                                TqaTpTiSx: !1,
                                variant: "dckrgQoZs",
                                width: "100%",
                                X2yrtSssb: !1,
                                ...W({ tr5pxKGkd: { aLnDlFZKR: w[1] } }, p, y),
                              }),
                            }),
                          }),
                      }),
                      r(we, {
                        links: [
                          {
                            href: { webPageId: "iEYhqIzLi" },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { webPageId: "iEYhqIzLi" },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (w) =>
                          r(V, {
                            height: 26,
                            ...W(
                              {
                                tr5pxKGkd: {
                                  y: (o?.y || 0) + 0 + 0 + 30 + 58 + 0 + 123,
                                },
                              },
                              p,
                              y,
                            ),
                            children: r(q, {
                              className: "framer-1ubuujp-container",
                              layoutDependency: u,
                              layoutId: "T9v9R_TIt-container",
                              nodeId: "T9v9R_TIt",
                              rendersWithMotion: !0,
                              scopeId: "VBcFpApnc",
                              children: r(se, {
                                aLnDlFZKR: w[0],
                                Cn6fz_Vow: "Contact",
                                height: "100%",
                                id: "T9v9R_TIt",
                                layoutId: "T9v9R_TIt",
                                TqaTpTiSx: !1,
                                variant: "dckrgQoZs",
                                width: "100%",
                                X2yrtSssb: !1,
                                ...W({ tr5pxKGkd: { aLnDlFZKR: w[1] } }, p, y),
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                r(V, {
                  height: 46,
                  y: (o?.y || 0) + (0 + ((o?.height || 91) - 0 - 46) / 2) + 0,
                  ...W(
                    {
                      A2qOxz8VD: {
                        width: `calc(min(max(${o?.width || "100vw"}, 1px), 1360px) - 60px)`,
                        y:
                          (o?.y || 0) +
                          (0 + ((o?.height || 207) - 0 - 207) / 2) +
                          30 +
                          101,
                      },
                      tr5pxKGkd: {
                        width: `calc(min(${o?.width || "100vw"}, 1360px) - 60px)`,
                        y: (o?.y || 0) + 0 + 0 + 30 + 268,
                      },
                    },
                    p,
                    y,
                  ),
                  children: r(q, {
                    className: "framer-1jr9gz1-container",
                    layoutDependency: u,
                    layoutId: "Z6pvfLMtI-container",
                    nodeId: "Z6pvfLMtI",
                    rendersWithMotion: !0,
                    scopeId: "VBcFpApnc",
                    children: r(xe, {
                      AL_NU982V: !1,
                      dlVBgpKLv: "Register Now",
                      GT109pdEG: "https://ssdssc.com/register",
                      height: "100%",
                      id: "Z6pvfLMtI",
                      layoutId: "Z6pvfLMtI",
                      SD1BGlGhK: !1,
                      variant: "vf6JWDf13",
                      width: "100%",
                      YVFZiszrG: {
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        borderStyle: "solid",
                        borderWidth: 1,
                      },
                      ...W(
                        {
                          A2qOxz8VD: {
                            ovJ6T1ZPP: te,
                            style: { width: "100%" },
                          },
                          tr5pxKGkd: { style: { width: "100%" } },
                        },
                        p,
                        y,
                      ),
                    }),
                  }),
                }),
                de() &&
                  r(m.div, {
                    className: "framer-16fivyq",
                    "data-framer-name": "Line",
                    layoutDependency: u,
                    layoutId: "D5461gPyc",
                    style: {
                      background:
                        "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
                    },
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Pa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-IixxI.framer-1xkdjja, .framer-IixxI .framer-1xkdjja { display: block; }",
    ".framer-IixxI.framer-gazge4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 91px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-IixxI .framer-1tbjop8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1360px; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 1px; }",
    ".framer-IixxI .framer-1y9d1w4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 202px; }",
    ".framer-IixxI .framer-19b8j8q { flex: none; height: 40px; overflow: hidden; position: relative; width: 187px; }",
    ".framer-IixxI .framer-12regrz { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: var(--framer-aspect-ratio-supported, 24px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-IixxI .framer-e3vimg, .framer-IixxI .framer-1oohkg0, .framer-IixxI .framer-1n1mghp, .framer-IixxI .framer-dc4vcc { flex: none; height: 2px; overflow: hidden; position: relative; width: 18px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-IixxI .framer-1i87owa { align-content: center; align-items: center; aspect-ratio: 1 / 1; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: var(--framer-aspect-ratio-supported, 24px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-IixxI .framer-26qar7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-IixxI .framer-1u25pxi-container, .framer-IixxI .framer-1usbprv-container, .framer-IixxI .framer-l8ivna-container, .framer-IixxI .framer-1ubuujp-container, .framer-IixxI .framer-1jr9gz1-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-IixxI .framer-16fivyq { flex: 1 0 0px; height: 1px; max-width: 1300px; position: relative; width: 1px; }",
    ".framer-IixxI.framer-v-1x71hfi.framer-gazge4 { flex-direction: column; height: 84px; justify-content: flex-start; width: 390px; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-1tbjop8 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 30px; justify-content: flex-start; padding: 30px; width: 100%; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-1y9d1w4, .framer-IixxI.framer-v-csul5u .framer-1y9d1w4 { gap: unset; justify-content: space-between; order: 0; width: 100%; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-19b8j8q { height: 28px; order: 0; width: 167px; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-1i87owa { order: 3; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-26qar7 { order: 1; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-1jr9gz1-container, .framer-IixxI.framer-v-csul5u .framer-1jr9gz1-container { order: 3; width: 100%; }",
    ".framer-IixxI.framer-v-1x71hfi .framer-16fivyq { flex: none; order: 2; width: 100%; }",
    ".framer-IixxI.framer-v-csul5u.framer-gazge4 { height: min-content; width: 390px; }",
    ".framer-IixxI.framer-v-csul5u .framer-1tbjop8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: flex-start; padding: 30px; }",
    ".framer-IixxI.framer-v-csul5u .framer-19b8j8q { order: 0; }",
    ".framer-IixxI.framer-v-csul5u .framer-12regrz { cursor: pointer; order: 2; }",
    ".framer-IixxI.framer-v-csul5u .framer-e3vimg, .framer-IixxI.framer-v-csul5u .framer-1oohkg0 { left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 2px / 2); z-index: 1; }",
    ".framer-IixxI.framer-v-csul5u .framer-16fivyq { flex: none; order: 1; width: 100%; }",
    '.framer-IixxI[data-border="true"]::after, .framer-IixxI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ve = E(Ea, Pa, "framer-IixxI"),
  ct = Ve;
Ve.displayName = "Navigation/Nav Bar";
Ve.defaultProps = { height: 91, width: 1200 };
N(Ve, {
  variant: {
    options: ["BUzWFjjg8", "tr5pxKGkd", "A2qOxz8VD"],
    optionTitles: ["Default", "Mobile Closed", "Mobile Open"],
    title: "Variant",
    type: h.Enum,
  },
});
H(Ve, [{ explicitInter: !0, fonts: [] }, ...Ia, ...Sa], {
  supportsExplicitInterCodegen: !0,
});
var Ba = A(ct),
  Ma = A(lt),
  Xa = A(st),
  Oa = A(Je),
  ja = A(at),
  qa = A(Ye),
  Ha = {
    BV8TaBJVa: "(min-width: 810px) and (max-width: 1199px)",
    ft1gUHSPV: "(max-width: 809px)",
    LQgak8gRn: "(min-width: 1200px)",
  };
var Wa = "framer-NLPbX",
  Za = {
    BV8TaBJVa: "framer-v-bt281z",
    ft1gUHSPV: "framer-v-j76z1o",
    LQgak8gRn: "framer-v-cgi17f",
  },
  dt = {
    BV8TaBJVa: [
      ".framer-NLPbX .framer-1945sa8 { padding: 100px 50px 100px 50px; }",
    ],
    ft1gUHSPV: [
      ".framer-NLPbX .framer-1945sa8 { padding: 80px 30px 80px 30px; }",
    ],
  },
  Kt = Object.keys(dt),
  Ga = {
    BV8TaBJVa: ".framer-bt281z-override",
    ft1gUHSPV: ".framer-j76z1o-override",
  },
  Jt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-NLPbX.framer-1mjnf1t, .framer-NLPbX .framer-1mjnf1t { display: block; }",
    ".framer-NLPbX.framer-cgi17f { align-content: center; align-items: center; background-color: var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-NLPbX .framer-1hltwlr-container { flex: none; height: auto; left: 50%; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-NLPbX .framer-43gxzv { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }",
    ".framer-NLPbX .framer-1945sa8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1002; overflow: hidden; padding: 120px; position: relative; width: 100%; }",
    ".framer-NLPbX .framer-j0w1lv-container { flex: 1 0 0px; height: auto; max-width: 1000px; position: relative; width: 1px; z-index: 0; }",
    ".framer-NLPbX .framer-nsybx2-container { flex: none; height: auto; order: 1003; position: relative; width: 100%; z-index: 9; }",
    ".framer-NLPbX .framer-re6eut-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 160px; left: 0px; order: 1004; pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); right: 0px; z-index: 8; }",
    ".framer-NLPbX .framer-1olgbgi-container { flex: none; height: auto; order: 1005; position: relative; width: auto; z-index: 0; }",
    '[data-layout-template="true"] > #overlay { margin-bottom: -0px; }',
  ],
  Qa = {
    BV8TaBJVa: "(min-width: 810px) and (max-width: 1199px)",
    ft1gUHSPV: "(max-width: 809px)",
    LQgak8gRn: "(min-width: 1200px)",
  },
  Ya = ({ value: n }) =>
    At()
      ? null
      : r("style", {
          dangerouslySetInnerHTML: { __html: n },
          "data-framer-html-style": "",
        }),
  Ka = { L: "LQgak8gRn", M: "BV8TaBJVa", S: "ft1gUHSPV" },
  Ja = ({ cTA: n, height: e, id: a, width: t, ...i }) => ({
    ...i,
    ECELHo9In: n ?? i.ECELHo9In ?? !0,
    variant: Ka[i.variant] ?? i.variant ?? "LQgak8gRn",
  }),
  $a = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  en = {
    alignment: "center",
    component: Ye,
    offset: { x: 0, y: 0 },
    placement: "bottom",
    transition: $a,
    variant: "VKeZmVTKZ",
  },
  tn = M(function (n, e) {
    let a = _(null),
      t = e ?? a,
      i = X(),
      { activeLocale: l, setLocale: s } = U(),
      {
        style: o,
        className: c,
        layoutId: d,
        variant: x,
        ECELHo9In: g,
        children: v,
        ...p
      } = Ja(n),
      [b, L] = Et(x, Ha, !1),
      I = void 0,
      P = C(Wa, ...[]);
    return (
      Dt({ "1bf4dyq": en }),
      r(_t.Provider, {
        value: {
          isLayoutTemplate: !0,
          primaryVariantId: "LQgak8gRn",
          variantClassNames: Za,
        },
        children: z(j, {
          id: d ?? i,
          children: [
            r(Ya, {
              value:
                ":root body { background: var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, rgb(0, 0, 0)); }",
            }),
            z(m.div, {
              ...p,
              className: C(P, "framer-cgi17f", c),
              "data-framer-cursor": "1bf4dyq",
              "data-layout-template": !0,
              ref: t,
              style: { ...o },
              children: [
                r(V, {
                  height: 91,
                  width: "100vw",
                  y: 0,
                  children: r(he, {
                    className: "framer-1hltwlr-container",
                    "data-framer-layout-hint-center-x": !0,
                    layoutScroll: !0,
                    nodeId: "zGYbORKPC",
                    scopeId: "AAeYQTSiQ",
                    children: r(be, {
                      breakpoint: b,
                      overrides: {
                        BV8TaBJVa: { variant: "tr5pxKGkd" },
                        ft1gUHSPV: { variant: "tr5pxKGkd" },
                      },
                      children: r(ct, {
                        height: "100%",
                        id: "zGYbORKPC",
                        layoutId: "zGYbORKPC",
                        style: { width: "100%" },
                        variant: "BUzWFjjg8",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                v,
                r("div", { className: "framer-43gxzv" }),
                g &&
                  r("section", {
                    className: "framer-1945sa8",
                    "data-framer-name": "CTA",
                    children: r(be, {
                      breakpoint: b,
                      overrides: {
                        BV8TaBJVa: {
                          width: "min(max(100vw - 100px, 1px), 1000px)",
                          y: 1100,
                        },
                        ft1gUHSPV: {
                          width: "min(max(100vw - 60px, 1px), 1000px)",
                          y: 1080,
                        },
                      },
                      children: r(V, {
                        height: 439,
                        width: "min(max(100vw - 240px, 1px), 1000px)",
                        y: 1120,
                        children: r(he, {
                          className: "framer-j0w1lv-container",
                          nodeId: "fFzfrcFRA",
                          scopeId: "AAeYQTSiQ",
                          children: r(be, {
                            breakpoint: b,
                            overrides: { ft1gUHSPV: { lTXT0qucV: "30px" } },
                            children: r(lt, {
                              c6uK1dg38: "SealCheck",
                              cwo7DCFXO:
                                '"Where tech meets thrill, your brand meets recognition. Evovian is the platform. You bring the power',
                              height: "100%",
                              id: "fFzfrcFRA",
                              layoutId: "fFzfrcFRA",
                              lTXT0qucV: "50px",
                              mAv2pC_4U: "Become a Part of Us",
                              QVKlogXTW: "Your brand. Our stage.",
                              style: { maxWidth: "100%", width: "100%" },
                              T8OTVIL45: " Be recognized. Be a sponsor.",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                r(V, {
                  height: 175,
                  width: "100vw",
                  y: 1e3,
                  children: r(he, {
                    className: "framer-nsybx2-container",
                    nodeId: "WqtPoVa9M",
                    scopeId: "AAeYQTSiQ",
                    children: r(be, {
                      breakpoint: b,
                      overrides: {
                        BV8TaBJVa: { variant: "PpWX9Nzcf" },
                        ft1gUHSPV: { variant: "tAhy0cIZG" },
                      },
                      children: r(st, {
                        height: "100%",
                        id: "WqtPoVa9M",
                        layoutId: "WqtPoVa9M",
                        style: { width: "100%" },
                        variant: "hDiagrBhX",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r(V, {
                  children: r(he, {
                    className: "framer-re6eut-container",
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    layoutScroll: !0,
                    nodeId: "qkfVlA_nu",
                    scopeId: "AAeYQTSiQ",
                    children: r(Je, {
                      blur: 10,
                      borderRadius: "0px",
                      direction: "to bottom",
                      height: "100%",
                      id: "qkfVlA_nu",
                      layoutId: "qkfVlA_nu",
                      style: { height: "100%", width: "100%" },
                      transition: {
                        delay: 0,
                        duration: 0.3,
                        ease: [0.44, 0, 0.56, 1],
                        type: "tween",
                      },
                      width: "100%",
                    }),
                  }),
                }),
                r(V, {
                  children: r(he, {
                    className: "framer-1olgbgi-container",
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    nodeId: "tL6f8cG8L",
                    scopeId: "AAeYQTSiQ",
                    children: r(at, {
                      height: "100%",
                      id: "tL6f8cG8L",
                      intensity: 18,
                      layoutId: "tL6f8cG8L",
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            r("div", { id: "template-overlay" }),
          ],
        }),
      })
    );
  }),
  rn = (n) =>
    n === Ge.canvas || n === Ge.export
      ? [
          ...Jt,
          ...Kt.flatMap((a) => {
            let t = Ga[a];
            return dt[a].map((i) => `${t} {${i}}`);
          }),
        ]
      : [...Jt, ...Kt.map((a) => `@media ${Qa[a]} { ${dt[a].join(" ")} }`)],
  ke = E(tn, rn, "framer-NLPbX"),
  $t = ke;
ke.displayName = "Main";
ke.defaultProps = { height: 3e3, width: 1200 };
N(ke, { ECELHo9In: { defaultValue: !0, title: "CTA", type: h.Boolean } });
H(
  ke,
  [{ explicitInter: !0, fonts: [] }, ...Ba, ...Ma, ...Xa, ...Oa, ...ja, ...qa],
  { supportsExplicitInterCodegen: !0 },
);
var ve = {
    augiA20Il: {
      elements: { iefsTIgHw: "faq" },
      page: ae(
        () =>
          import("./iv27zt2uhNKHcpyTxEPaL1Ls_B_n0dzTBYIyaPluNGQ.X7DUW4N5.mjs"),
      ),
      path: "/",
    },
    THcqoa_mS: {
      elements: {},
      page: ae(
        () =>
          import("./MYsMJC_zSe9Dnu1A2Kv0Qv-4TMiCPPaFoyY2O3AEWOU.VPVWQSSO.mjs"),
      ),
      path: "/404",
    },
    iEYhqIzLi: {
      elements: { citGtIofE: "form", S5M0vvnSS: "faq", Se3nnsU6o: "button" },
      page: ae(
        () =>
          import("./fBGBS3VUHzY0zGQAvBBfmof9Nd0a7FyGhCJyR5cT_Qo.RKFYD5F7.mjs"),
      ),
      path: "/contact",
    },
    ADJCSktRp: {
      elements: { Exp83wWLO: "faq" },
      page: ae(
        () =>
          import("./nhkE6JKXYsUwuwXnicUkYWxSVUqRdyzxP-En5pgxRMM.DZLHZCM3.mjs"),
      ),
      path: "/portfolio",
    },
    MiaczO6ls: {
      elements: {},
      page: ae(
        () =>
          import("./VxSu3pLwhfHG_aROmM815uP1vedhNOLSFDa2n33kecQ.BQTRK5XU.mjs"),
      ),
      path: "/privacy-policy",
    },
    FsIlOVO8T: {
      elements: {},
      page: ae(
        () =>
          import("./ULPVzc_aRaDArmYn0BedmiqXt5LAKItuwH7zqlxU4-4.73F2RPCQ.mjs"),
      ),
      path: "/terms-conditions",
    },
    hetOMwTYW: {
      elements: {
        Am5BXkLGW: "about-1",
        CIlLf4V3d: "faq",
        JA0YKLrqi: "faq-1",
        JXnkrsaxx: "about-2",
        xgC_85XdF: "about",
      },
      page: ae(
        () =>
          import("./sLlICYQQsp5BKqU7sqNLoIMNcR4sqiXC_qKYiqkoD4k.SHZNRWWV.mjs"),
      ),
      path: "/about",
    },
    M_l_BNXz0: {
      collectionId: "yoco0NHMS",
      elements: { mT80XnRNC: "faq" },
      page: ae(
        () =>
          import("./Y9_E3Sa0TeYGQe5zGTDfdlS6PdG8CkXv4gTbyjCovJY.3PP5A27X.mjs"),
      ),
      path: "/portfolio/:dFDcF1wOr",
    },
  },
  mt = [{ code: "en", id: "default", name: "English", slug: "" }],
  ft = {
    yoco0NHMS: async () =>
      (
        await import("./5cAFGSM_-ooSR8CNW-A7XRF5IUVIy2W3vf87svs0-Bo.YTYFZ6RI.mjs")
      )?.utils,
  },
  tr = "0baaf1ddca4e473a5ddc0736211aa45ff98571e9f8cd863b2a16997ffcee500f";
function an({ routeId: n, children: e, style: a, ...t }) {
  let i = { ECELHo9In: !0 },
    l = { ...i, ECELHo9In: !1 },
    o =
      {
        ADJCSktRp: i,
        augiA20Il: i,
        FsIlOVO8T: l,
        hetOMwTYW: i,
        iEYhqIzLi: i,
        M_l_BNXz0: i,
        MiaczO6ls: l,
        THcqoa_mS: l,
      }[n] ?? {};
  switch (n) {
    case "augiA20Il":
    case "THcqoa_mS":
    case "iEYhqIzLi":
    case "ADJCSktRp":
    case "MiaczO6ls":
    case "FsIlOVO8T":
    case "hetOMwTYW":
    case "M_l_BNXz0":
      return ie($t, { ...o, key: "Main", routeId: n, style: a }, e(!0));
    default:
      return e(!1);
  }
}
function Fi(n) {
  switch (n) {
    case "augiA20Il":
    case "THcqoa_mS":
    case "iEYhqIzLi":
    case "ADJCSktRp":
    case "MiaczO6ls":
    case "FsIlOVO8T":
    case "hetOMwTYW":
    case "M_l_BNXz0":
      return [
        { hash: "cgi17f", mediaQuery: "(min-width: 1200px)" },
        {
          hash: "bt281z",
          mediaQuery: "(min-width: 810px) and (max-width: 1199px)",
        },
        { hash: "j76z1o", mediaQuery: "(max-width: 809px)" },
      ];
    default:
      return;
  }
}
async function nn({ routeId: n, pathVariables: e, localeId: a }) {
  let t = ve[n].page.preload(),
    i = ie(Ut, {
      isWebsite: !0,
      routeId: n,
      pathVariables: e,
      routes: ve,
      collectionUtils: ft,
      framerSiteId: tr,
      notFoundPage: ae(
        () =>
          import("./MYsMJC_zSe9Dnu1A2Kv0Qv-4TMiCPPaFoyY2O3AEWOU.VPVWQSSO.mjs"),
      ),
      isReducedMotion: void 0,
      localeId: a,
      locales: mt,
      preserveQueryParams: void 0,
      siteCanonicalURL: "https://honest-designs-846144.framer.app",
      EditorBar:
        typeof f < "u"
          ? (() => {
              if (
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  Q.userAgent,
                )
              ) {
                console.log(
                  "[Framer Editor Bar] Unavailable because navigator is bot",
                );
                return;
              }
              return ae(async () => {
                let d = {
                  __version: 2,
                  framer: {
                    useCurrentRoute: wt,
                    useLocaleInfo: U,
                    useRouter: Le,
                  },
                  react: {
                    createElement: ie,
                    Fragment: F,
                    memo: gt,
                    useCallback: yt,
                    useEffect: me,
                    useRef: _,
                    useState: xt,
                  },
                  "react-dom": { createPortal: bt },
                };
                f.__framer_editorBarDependencies = d;
                let { createEditorBar: x } =
                  await import("https://framer.com/edit/init.mjs");
                return { default: x() };
              });
            })()
          : void 0,
      LayoutTemplate: an,
    }),
    l = ie(Lt, {
      children: i,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    s = ie(Nt, { children: l }),
    o = ie(St, {
      children: s,
      value: {
        global: {
          enter: {
            mask: { angle: 315, type: "wipe", width: "30%" },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.8,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: "tween",
            },
            x: "0px",
            y: "0px",
          },
        },
        routes: {},
      },
    });
  return (await t, o);
}
var pt = typeof document < "u";
if (pt) {
  ((f.__framer_importFromPackage = (e, a) => () =>
    ie(Ft, {
      error: 'Package component not supported: "' + a + '" in "' + e + '"',
    })),
    (f.process = {
      ...f.process,
      env: { ...(f.process ? f.process.env : void 0), NODE_ENV: "production" },
    }),
    (f.__framer_events = f.__framer_events || []),
    Vt());
  let n = document.getElementById("main");
  "framerHydrateV2" in n.dataset ? er(!0, n) : er(!1, n);
}
function on() {
  pt && f.__framer_events.push(arguments);
}
async function er(n, e) {
  function a(t, i, l = !0) {
    if (t.caught || f.__framer_hadFatalError) return;
    let s = i?.componentStack;
    if (l) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          t,
          s,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        t,
        s,
      );
    on(
      l ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(t),
        componentStack: s,
        stack: s
          ? void 0
          : t instanceof Error && typeof t.stack == "string"
            ? t.stack
            : null,
      },
    );
  }
  try {
    let t, i, l, s;
    if (n) {
      let d = JSON.parse(e.dataset.framerHydrateV2);
      ((t = d.routeId),
        (i = d.localeId),
        (l = d.pathVariables),
        (s = d.breakpoints),
        (t = Ze(ve, t)));
    } else {
      Ze(ve, void 0);
      let d = Rt(ve, decodeURIComponent(location.pathname), !0, mt);
      ((t = d.routeId), (i = d.localeId), (l = d.pathVariables));
    }
    let o = nn({ routeId: t, localeId: i, pathVariables: l });
    typeof f < "u" &&
      (async () => {
        let d = ve[t],
          x = "default",
          g = mt.find(({ id: I }) => (i ? I === i : I === x)).code,
          v = null;
        if (d?.collectionId && ft) {
          let I = await ft[d.collectionId]?.(),
            [y] = Object.values(l);
          I &&
            typeof y == "string" &&
            (v = (await I.getRecordIdBySlug(y, g || void 0)) ?? null);
        }
        let p = Intl.DateTimeFormat().resolvedOptions(),
          b = p.timeZone,
          L = p.locale;
        (await new Promise((I) => {
          document.prerendering
            ? document.addEventListener("prerenderingchange", I, { once: !0 })
            : I();
        }),
          f.__framer_events.push([
            "published_site_pageview",
            {
              framerSiteId: tr ?? null,
              routePath: d?.path || "/",
              collectionItemId: v,
              framerLocale: g || null,
              webPageId: d?.abTestingVariantId ?? t,
              abTestId: d?.abTestId,
              referrer: document.referrer || null,
              url: f.location.href,
              hostname: f.location.hostname || null,
              pathname: f.location.pathname || null,
              hash: f.location.hash || null,
              search: f.location.search || null,
              timezone: b,
              locale: L,
            },
            "eager",
          ]),
          await It({
            priority: "background",
            ensureContinueBeforeUnload: !0,
            continueAfter: "paint",
          }),
          document.dispatchEvent(
            new CustomEvent("framer:pageview", {
              detail: { framerLocale: g || null },
            }),
          ));
      })();
    let c = await o;
    n
      ? (Bt("framer-rewrite-breakpoints", () => {
          (Pt(s), f.__framer_onRewriteBreakpoints?.(s));
        }),
        He(() => {
          (Ct(), Tt(), Ke(e, c, { onRecoverableError: a }));
        }))
      : Zt(e, { onRecoverableError: a }).render(c);
  } catch (t) {
    throw (a(t, void 0, !1), t);
  }
}
(function () {
  pt &&
    He(() => {
      Ke(
        document.getElementById("__framer-badge-container"),
        ie(ut, {}, ie(ht(() => import("./PX9hIOIVM-ZH6OWM4X.mjs")))),
      );
    });
})();
export { Fi as getLayoutTemplateBreakpoints, nn as getPageRoot };
//# sourceMappingURL=script_main.EJWLJV7Y.mjs.map
