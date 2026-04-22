import { a as Jr } from "./chunk-EN26E4LI.mjs";
import { a as Yr, b as zr, c as Gr, d as M } from "./chunk-5H6VPJUI.mjs";
import { a as Or, b as qr, c as Er } from "./chunk-KH3IMKDI.mjs";
import { a as Ke } from "./chunk-JPQXC4RY.mjs";
import { d as $e } from "./chunk-IKSTMBXY.mjs";
import {
  a as Be,
  b as Xe,
  c as Qe,
  d as _r,
  e as Tr,
  f as Pr,
} from "./chunk-UZ3FZ54A.mjs";
import { a as Mr, b as Dr, c as Vr, d as We } from "./chunk-4CZSOIUK.mjs";
import {
  a as Ue,
  b as je,
  c as Oe,
  g as j,
  h as Lr,
  i as Br,
  j as Xr,
  k as Qr,
  l as Ur,
  m as jr,
  n as de,
  o as Ze,
} from "./chunk-GP5ZN2VK.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as Ir,
  Aa as se,
  B as Le,
  D as l,
  G as $,
  H as le,
  J as F,
  K as Cr,
  M as ee,
  N as G,
  P as Ar,
  T as ve,
  U as re,
  V as p,
  W as he,
  X as x,
  Y as kr,
  b as P,
  ba as Sr,
  c as W,
  ca as Nr,
  d as t,
  ia as Fr,
  ja as Rr,
  oa as oe,
  p as Ve,
  t as Z,
  ta as xe,
  ua as y,
  wa as ye,
  xa as ge,
  ya as te,
  za as v,
} from "./chunk-7MML5CJN.mjs";
import {
  A as vr,
  B as e,
  C as d,
  d as u,
  i as H,
  o as ne,
  q as K,
  t as Q,
  u as He,
  v as B,
  w as De,
} from "./chunk-UEJNNABJ.mjs";
import "./chunk-HZL4YIMB.mjs";
import "./chunk-JHH6BJ7G.mjs";
import "./chunk-A3IIQ6X3.mjs";
var st = {
    GXXGb1Hah: { hover: !0 },
    vf6JWDf13: { hover: !0 },
    xQAMtyuwR: { hover: !0 },
  },
  lt = ["vf6JWDf13", "GXXGb1Hah", "xQAMtyuwR"],
  dt = "framer-Il1td",
  mt = {
    GXXGb1Hah: "framer-v-304yr8",
    vf6JWDf13: "framer-v-1nvacmp",
    xQAMtyuwR: "framer-v-1iyno3s",
  };
function Hr(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var ft = { damping: 60, delay: 0, mass: 1, stiffness: 200, type: "spring" },
  ct = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  pt = t.create(u),
  ut = { Grey: "xQAMtyuwR", Purple: "vf6JWDf13", White: "GXXGb1Hah" },
  ht = ({
    border: r,
    click: a,
    height: o,
    id: n,
    link: f,
    newTab: g,
    smoothScroll: b,
    title: i,
    width: I,
    ...h
  }) => ({
    ...h,
    AL_NU982V: g ?? h.AL_NU982V,
    dlVBgpKLv: i ?? h.dlVBgpKLv ?? "Get In Touch",
    GT109pdEG: f ?? h.GT109pdEG,
    ovJ6T1ZPP: a ?? h.ovJ6T1ZPP,
    SD1BGlGhK: b ?? h.SD1BGlGhK,
    variant: ut[h.variant] ?? h.variant ?? "vf6JWDf13",
    YVFZiszrG: r ??
      h.YVFZiszrG ?? {
        borderColor:
          'var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) /* {"name":"White 15%"} */',
        borderStyle: "solid",
        borderWidth: 3,
      },
  }),
  gt = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  xt = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        dlVBgpKLv: X,
        YVFZiszrG: A,
        GT109pdEG: c,
        AL_NU982V: J,
        SD1BGlGhK: O,
        ovJ6T1ZPP: S,
        ...q
      } = ht(r),
      {
        baseVariant: z,
        classNames: _,
        clearLoadingGesture: U,
        gestureHandlers: ie,
        gestureVariant: Y,
        isLoading: w,
        setGestureState: ae,
        setVariant: E,
        variants: T,
      } = oe({
        cycleOrder: lt,
        defaultVariant: "vf6JWDf13",
        enabledGestures: st,
        ref: n,
        variant: C,
        variantClassNames: mt,
      }),
      R = gt(r, T),
      { activeVariantCallback: s, delay: N } = Fr(z),
      me = s(async (...Me) => {
        if ((ae({ isPressed: !1 }), S && (await S(...Me)) === !1)) return !1;
      }),
      k = F(dt, ...[Vr]);
    return e(W, {
      id: m ?? f,
      children: e(pt, {
        animate: T,
        initial: !1,
        children: e(ct, {
          value: ft,
          children: e(Nr, {
            href: c,
            motionChild: !0,
            nodeId: "vf6JWDf13",
            openInNewTab: J,
            scopeId: "GNvaONxX6",
            smoothScroll: O,
            children: e(t.a, {
              ...q,
              ...ie,
              className: `${F(k, "framer-1nvacmp", h, _)} framer-dd37wi`,
              "data-border": !0,
              "data-framer-name": "Purple",
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: R,
              layoutId: "vf6JWDf13",
              onTap: me,
              ref: n,
              style: {
                "--border-bottom-width":
                  (A.borderBottomWidth ?? A.borderWidth) + "px",
                "--border-color": A.borderColor,
                "--border-left-width":
                  (A.borderLeftWidth ?? A.borderWidth) + "px",
                "--border-right-width":
                  (A.borderRightWidth ?? A.borderWidth) + "px",
                "--border-style": A.borderStyle,
                "--border-top-width":
                  (A.borderTopWidth ?? A.borderWidth) + "px",
                background:
                  'linear-gradient(180deg, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Purple"} */ 0%, rgb(128, 89, 227) 100%)',
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxShadow: "0px 0px 0px 0px rgba(79, 26, 214, 0.3)",
                opacity: 1,
                ...I,
              },
              variants: {
                "GXXGb1Hah-hover": { opacity: 0.6 },
                "vf6JWDf13-hover": {
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  boxShadow: "0px 0px 0px 5px rgba(79, 26, 214, 0.3)",
                },
                "xQAMtyuwR-hover": { opacity: 0.6 },
                GXXGb1Hah: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  background:
                    "linear-gradient(180deg, var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236)) 0%, var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236)) 100%)",
                  backgroundColor:
                    "var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236))",
                  boxShadow: "none",
                },
                xQAMtyuwR: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  background:
                    "linear-gradient(180deg, var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) 0%, var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) 100%)",
                  backgroundColor:
                    "var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15))",
                  boxShadow: "none",
                },
              },
              ...Hr(
                {
                  "GXXGb1Hah-hover": { "data-framer-name": void 0 },
                  "vf6JWDf13-hover": { "data-framer-name": void 0 },
                  "xQAMtyuwR-hover": { "data-framer-name": void 0 },
                  GXXGb1Hah: { "data-framer-name": "White" },
                  xQAMtyuwR: { "data-framer-name": "Grey" },
                },
                z,
                Y,
              ),
              children: e(y, {
                __fromCanvasComponent: !0,
                children: e(u, {
                  children: e(t.p, {
                    className: "framer-styles-preset-2mfvz6",
                    "data-styles-preset": "VqRaec8fA",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))",
                    },
                    children: "Get In Touch",
                  }),
                }),
                className: "framer-16xb1fn",
                "data-framer-name": "Text",
                fonts: ["Inter"],
                layoutDependency: R,
                layoutId: "gCwS649Ft",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: X,
                variants: {
                  "vf6JWDf13-hover": {
                    "--extracted-r6o4lv": "rgb(196, 196, 196)",
                  },
                  GXXGb1Hah: {
                    "--extracted-r6o4lv":
                      "var(--token-561b3d91-c258-4609-94c9-3cc008fdd628, rgb(19, 19, 19))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Hr(
                  {
                    "vf6JWDf13-hover": {
                      children: e(u, {
                        children: e(t.p, {
                          className: "framer-styles-preset-2mfvz6",
                          "data-styles-preset": "VqRaec8fA",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(196, 196, 196))",
                          },
                          children: "Get In Touch",
                        }),
                      }),
                    },
                    GXXGb1Hah: {
                      children: e(u, {
                        children: e(t.p, {
                          className: "framer-styles-preset-2mfvz6",
                          "data-styles-preset": "VqRaec8fA",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-561b3d91-c258-4609-94c9-3cc008fdd628, rgb(19, 19, 19)))",
                          },
                          children: "Get In Touch",
                        }),
                      }),
                    },
                  },
                  z,
                  Y,
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  yt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Il1td.framer-dd37wi, .framer-Il1td .framer-dd37wi { display: block; }",
    ".framer-Il1td.framer-1nvacmp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 18px 10px 18px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Il1td .framer-16xb1fn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Il1td.framer-1nvacmp { gap: 0px; } .framer-Il1td.framer-1nvacmp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Il1td.framer-1nvacmp > :first-child { margin-left: 0px; } .framer-Il1td.framer-1nvacmp > :last-child { margin-right: 0px; } }",
    ...Dr,
    '.framer-Il1td[data-border="true"]::after, .framer-Il1td [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ie = ee(xt, yt, "framer-Il1td"),
  we = Ie;
Ie.displayName = "Button/Primary Button";
Ie.defaultProps = { height: 46, width: 124.5 };
$(Ie, {
  variant: {
    options: ["vf6JWDf13", "GXXGb1Hah", "xQAMtyuwR"],
    optionTitles: ["Purple", "White", "Grey"],
    title: "Variant",
    type: l.Enum,
  },
  dlVBgpKLv: {
    defaultValue: "Get In Touch",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  YVFZiszrG: {
    defaultValue: {
      borderColor:
        'var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) /* {"name":"White 15%"} */',
      borderStyle: "solid",
      borderWidth: 3,
    },
    title: "Border",
    type: l.Border,
  },
  GT109pdEG: { title: "Link", type: l.Link },
  AL_NU982V: { defaultValue: !1, title: "New Tab", type: l.Boolean },
  SD1BGlGhK: { defaultValue: !1, title: "Smooth Scroll", type: l.Boolean },
  ovJ6T1ZPP: { title: "Click", type: l.EventHandler },
});
te(
  Ie,
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
    ...se(Mr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var bt = v(j),
  vt = v(M),
  It = v(we),
  Kr = le(j),
  Ct = ["CeXTt6Kst", "mH3pBjkav"],
  At = "framer-AB48j",
  kt = { CeXTt6Kst: "framer-v-dmu07m", mH3pBjkav: "framer-v-vkrs58" };
function St(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var Nt = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Ft = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  Rt = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  _t = t.create(u),
  Tt = { Primary: "CeXTt6Kst", Secondary: "mH3pBjkav" },
  Pt = ({
    bodyText: r,
    height: a,
    icon: o,
    id: n,
    link: f,
    padding: g,
    phase: b,
    tag1: i,
    tag2: I,
    title: h,
    width: m,
    ...C
  }) => ({
    ...C,
    bw8wnPVJ6: g ?? C.bw8wnPVJ6 ?? "30px",
    lmd98drVR: f ?? C.lmd98drVR,
    lpNYR5mgd: h ?? C.lpNYR5mgd ?? "Innovate Smarter Lead Faster",
    pgcwfQDhU: b ?? C.pgcwfQDhU ?? "Discovery",
    QiBV5Bs5w: I ?? C.QiBV5Bs5w ?? "Discovery",
    sq6e4rlJt:
      r ??
      C.sq6e4rlJt ??
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    TP1crxvPO: i ?? C.TP1crxvPO ?? "Discovery",
    tuSNNK56X: o ?? C.tuSNNK56X ?? "Carrot",
    variant: Tt[C.variant] ?? C.variant ?? "CeXTt6Kst",
  }),
  Mt = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Dt = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        tuSNNK56X: X,
        pgcwfQDhU: A,
        lpNYR5mgd: c,
        sq6e4rlJt: J,
        TP1crxvPO: O,
        QiBV5Bs5w: S,
        lmd98drVR: q,
        bw8wnPVJ6: z,
        ..._
      } = Pt(r),
      {
        baseVariant: U,
        classNames: ie,
        clearLoadingGesture: Y,
        gestureHandlers: w,
        gestureVariant: ae,
        isLoading: E,
        setGestureState: T,
        setVariant: R,
        variants: s,
      } = oe({
        cycleOrder: Ct,
        defaultVariant: "CeXTt6Kst",
        ref: n,
        variant: C,
        variantClassNames: kt,
      }),
      N = Mt(r, s),
      fe = F(At, ...[Gr, Qe]),
      k = () => U === "mH3pBjkav",
      Me = () => U !== "mH3pBjkav";
    return e(W, {
      id: m ?? f,
      children: e(_t, {
        animate: s,
        initial: !1,
        children: e(Rt, {
          value: Nt,
          children: e(t.div, {
            ..._,
            ...w,
            className: F(fe, "framer-dmu07m", h, ie),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: N,
            layoutId: "CeXTt6Kst",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow:
                "0px 0.6021873017743928px 1.3248120639036642px -0.5833333333333333px rgba(0, 0, 0, 0.09), 0px 2.288533303243457px 5.034773267135606px -1.1666666666666665px rgba(0, 0, 0, 0.1), 0px 10px 22px -1.75px rgba(0, 0, 0, 0.16)",
              ...I,
            },
            ...St({ mH3pBjkav: { "data-framer-name": "Secondary" } }, U, ae),
            children: d(t.div, {
              className: "framer-1aiu57p",
              "data-border": !0,
              "data-framer-name": "Container",
              layoutDependency: N,
              layoutId: "uNbnWJmhg",
              style: {
                "--1hiqksj": Ft(z),
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              },
              children: [
                e(t.div, {
                  className: "framer-1vfqga4",
                  "data-framer-name": "Shadow",
                  layoutDependency: N,
                  layoutId: "pcbAzB9ki",
                  style: {
                    background:
                      "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 5px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                  },
                }),
                d(t.div, {
                  className: "framer-1gg1egh",
                  "data-framer-name": "Icon/Tag",
                  layoutDependency: N,
                  layoutId: "Ge_0vwroU",
                  children: [
                    d(t.div, {
                      className: "framer-1a0dsmx",
                      "data-border": !0,
                      "data-framer-name": "Icon",
                      layoutDependency: N,
                      layoutId: "DGeLkKEbT",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow:
                          "0px 0.3613123810646357px 1.083937143193907px -0.5px rgba(79, 26, 214, 0.08), 0px 1.3731199819460742px 4.119359945838223px -1px rgba(79, 26, 214, 0.1), 0px 6px 18px -1.5px rgba(79, 26, 214, 0.18), inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08)",
                      },
                      children: [
                        e(t.div, {
                          className: "framer-18rddva",
                          "data-framer-name": "Shadow",
                          layoutDependency: N,
                          layoutId: "QOxniejb7",
                          style: {
                            background:
                              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                            boxShadow:
                              "inset 0px 10px 10px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                          },
                        }),
                        e(p, {
                          children: e(x, {
                            className: "framer-p4mmvm-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: N,
                            layoutId: "SMMV5iXIf-container",
                            nodeId: "SMMV5iXIf",
                            rendersWithMotion: !0,
                            scopeId: "boOGllWYo",
                            children: e(j, {
                              color:
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              height: "100%",
                              iconSearch: "House",
                              iconSelection: X,
                              id: "SMMV5iXIf",
                              layoutId: "SMMV5iXIf",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(p, {
                      height: 40,
                      children: e(x, {
                        className: "framer-5yvqhd-container",
                        layoutDependency: N,
                        layoutId: "olSfPQ5L2-container",
                        nodeId: "olSfPQ5L2",
                        rendersWithMotion: !0,
                        scopeId: "boOGllWYo",
                        children: e(M, {
                          aZ7GvMqIl: "Acorn",
                          height: "100%",
                          id: "olSfPQ5L2",
                          KS7KLFqN8: A,
                          layoutId: "olSfPQ5L2",
                          rQKAY6456: "NEW",
                          variant: "gNstPdAkh",
                          width: "100%",
                          xAPRy8bad: 0,
                        }),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-193uo25",
                  "data-framer-name": "Content",
                  layoutDependency: N,
                  layoutId: "InRaFoZwQ",
                  children: d(t.div, {
                    className: "framer-o593e4",
                    "data-framer-name": "Inner Content",
                    layoutDependency: N,
                    layoutId: "wT3xNceLv",
                    children: [
                      e(t.div, {
                        className: "framer-axuw1g",
                        "data-framer-name": "Title",
                        layoutDependency: N,
                        layoutId: "D0iTLlPzI",
                        children: e(y, {
                          __fromCanvasComponent: !0,
                          children: e(u, {
                            children: e(t.h4, {
                              className: "framer-styles-preset-1ing3ma",
                              "data-styles-preset": "VnmEZ_3BZ",
                              children: "Innovate Smarter Lead Faster",
                            }),
                          }),
                          className: "framer-1b4uj1g",
                          "data-framer-name": "Text",
                          fonts: ["Inter"],
                          layoutDependency: N,
                          layoutId: "Y0av6ptEk",
                          style: { "--framer-paragraph-spacing": "0px" },
                          text: c,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(t.div, {
                        className: "framer-njpuky",
                        "data-framer-name": "Seperator",
                        layoutDependency: N,
                        layoutId: "pn4_ZZJLf",
                        style: {
                          background:
                            "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                        },
                      }),
                      e(y, {
                        __fromCanvasComponent: !0,
                        children: e(u, {
                          children: e(t.p, {
                            className: "framer-styles-preset-x0s9r5",
                            "data-styles-preset": "QhK6qqT5U",
                            style: {
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                            },
                            children:
                              "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
                          }),
                        }),
                        className: "framer-1yjrya7",
                        "data-framer-name": "Body Text",
                        fonts: ["Inter"],
                        layoutDependency: N,
                        layoutId: "KpuObr9FL",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: J,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                k() &&
                  e(t.div, {
                    className: "framer-pvbif0",
                    "data-framer-name": "Button",
                    layoutDependency: N,
                    layoutId: "uq75QqLa1",
                    children: e(p, {
                      height: 46,
                      children: e(x, {
                        className: "framer-1t69t4g-container",
                        layoutDependency: N,
                        layoutId: "QqAwkWACz-container",
                        nodeId: "QqAwkWACz",
                        rendersWithMotion: !0,
                        scopeId: "boOGllWYo",
                        children: e(we, {
                          AL_NU982V: !1,
                          dlVBgpKLv: "Book an Appointment",
                          GT109pdEG: q,
                          height: "100%",
                          id: "QqAwkWACz",
                          layoutId: "QqAwkWACz",
                          SD1BGlGhK: !1,
                          variant: "vf6JWDf13",
                          width: "100%",
                          YVFZiszrG: {
                            borderColor:
                              'var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) /* {"name":"White 15%"} */',
                            borderStyle: "solid",
                            borderWidth: 3,
                          },
                        }),
                      }),
                    }),
                  }),
                Me() &&
                  d(t.div, {
                    className: "framer-f0m91e",
                    "data-framer-name": "Tags",
                    layoutDependency: N,
                    layoutId: "wI1G8wgvC",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-k3de6y-container",
                          layoutDependency: N,
                          layoutId: "p03Si1lN7-container",
                          nodeId: "p03Si1lN7",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "p03Si1lN7",
                            KS7KLFqN8: O,
                            layoutId: "p03Si1lN7",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-4ecag3-container",
                          layoutDependency: N,
                          layoutId: "dywyIr48H-container",
                          nodeId: "dywyIr48H",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "dywyIr48H",
                            KS7KLFqN8: S,
                            layoutId: "dywyIr48H",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
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
  Vt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-AB48j.framer-1rs9er1, .framer-AB48j .framer-1rs9er1 { display: block; }",
    ".framer-AB48j.framer-dmu07m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px; position: relative; width: 478px; }",
    ".framer-AB48j .framer-1aiu57p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1hiqksj); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-AB48j .framer-1vfqga4 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-AB48j .framer-1gg1egh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-AB48j .framer-1a0dsmx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-AB48j .framer-18rddva { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-AB48j .framer-p4mmvm-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-AB48j .framer-5yvqhd-container, .framer-AB48j .framer-k3de6y-container, .framer-AB48j .framer-4ecag3-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-AB48j .framer-193uo25 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-AB48j .framer-o593e4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-AB48j .framer-axuw1g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-AB48j .framer-1b4uj1g { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-AB48j .framer-njpuky { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-AB48j .framer-1yjrya7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-AB48j .framer-pvbif0, .framer-AB48j .framer-f0m91e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-AB48j .framer-1t69t4g-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AB48j.framer-dmu07m, .framer-AB48j .framer-1aiu57p, .framer-AB48j .framer-1a0dsmx, .framer-AB48j .framer-193uo25, .framer-AB48j .framer-o593e4, .framer-AB48j .framer-axuw1g, .framer-AB48j .framer-pvbif0, .framer-AB48j .framer-f0m91e { gap: 0px; } .framer-AB48j.framer-dmu07m > *, .framer-AB48j .framer-1a0dsmx > *, .framer-AB48j .framer-axuw1g > *, .framer-AB48j .framer-pvbif0 > *, .framer-AB48j .framer-f0m91e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AB48j.framer-dmu07m > :first-child, .framer-AB48j .framer-1a0dsmx > :first-child, .framer-AB48j .framer-axuw1g > :first-child, .framer-AB48j .framer-pvbif0 > :first-child, .framer-AB48j .framer-f0m91e > :first-child { margin-left: 0px; } .framer-AB48j.framer-dmu07m > :last-child, .framer-AB48j .framer-1a0dsmx > :last-child, .framer-AB48j .framer-axuw1g > :last-child, .framer-AB48j .framer-pvbif0 > :last-child, .framer-AB48j .framer-f0m91e > :last-child { margin-right: 0px; } .framer-AB48j .framer-1aiu57p > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-AB48j .framer-1aiu57p > :first-child, .framer-AB48j .framer-193uo25 > :first-child, .framer-AB48j .framer-o593e4 > :first-child { margin-top: 0px; } .framer-AB48j .framer-1aiu57p > :last-child, .framer-AB48j .framer-193uo25 > :last-child, .framer-AB48j .framer-o593e4 > :last-child { margin-bottom: 0px; } .framer-AB48j .framer-193uo25 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-AB48j .framer-o593e4 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } }",
    ".framer-AB48j.framer-v-vkrs58 .framer-1vfqga4 { order: 0; }",
    ".framer-AB48j.framer-v-vkrs58 .framer-1gg1egh { order: 1; }",
    ".framer-AB48j.framer-v-vkrs58 .framer-193uo25 { order: 2; }",
    ".framer-AB48j.framer-v-vkrs58 .framer-pvbif0 { order: 4; }",
    ...zr,
    ...Xe,
    '.framer-AB48j[data-border="true"]::after, .framer-AB48j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ce = ee(Dt, Vt, "framer-AB48j"),
  er = Ce;
Ce.displayName = "About Card";
Ce.defaultProps = { height: 363, width: 478 };
$(Ce, {
  variant: {
    options: ["CeXTt6Kst", "mH3pBjkav"],
    optionTitles: ["Primary", "Secondary"],
    title: "Variant",
    type: l.Enum,
  },
  tuSNNK56X: Kr?.iconSelection && {
    ...Kr.iconSelection,
    defaultValue: "Carrot",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  pgcwfQDhU: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Phase",
    type: l.String,
  },
  lpNYR5mgd: {
    defaultValue: "Innovate Smarter Lead Faster",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  sq6e4rlJt: {
    defaultValue:
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  TP1crxvPO: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 1",
    type: l.String,
  },
  QiBV5Bs5w: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 2",
    type: l.String,
  },
  lmd98drVR: { title: "Link", type: l.Link },
  bw8wnPVJ6: { defaultValue: "30px", title: "Padding", type: l.Padding },
});
te(
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
    ...bt,
    ...vt,
    ...It,
    ...se(Yr),
    ...se(Be),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Lt = v(j),
  Bt = ve(t.div),
  Wr = le(j),
  Xt = ["AksRoqhcS", "axDSKQZXP", "gNstPdAkh", "KsCSAInQk", "WXhecYaG5"],
  Qt = "framer-JAedJ",
  Ut = {
    AksRoqhcS: "framer-v-9xh6r2",
    axDSKQZXP: "framer-v-1neujbl",
    gNstPdAkh: "framer-v-1j9m4ta",
    KsCSAInQk: "framer-v-17087j1",
    WXhecYaG5: "framer-v-1az82xx",
  };
function Zr(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var jt = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Ot = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  qt = t.create(u),
  Et = {
    "Dotted Highlight Tag": "axDSKQZXP",
    "Grey Linear Tag": "gNstPdAkh",
    "Highlight Tag": "AksRoqhcS",
    "Purple Tag": "KsCSAInQk",
    Dark: "WXhecYaG5",
  },
  Yt = ({
    backgroundBlur: r,
    height: a,
    highlight: o,
    icon: n,
    id: f,
    title: g,
    width: b,
    ...i
  }) => ({
    ...i,
    aZ7GvMqIl: n ?? i.aZ7GvMqIl ?? "Acorn",
    KS7KLFqN8: g ?? i.KS7KLFqN8 ?? "About Landin",
    rQKAY6456: o ?? i.rQKAY6456 ?? "NEW",
    variant: Et[i.variant] ?? i.variant ?? "AksRoqhcS",
    xAPRy8bad: r ?? i.xAPRy8bad,
  }),
  zt = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Gt = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        aZ7GvMqIl: X,
        rQKAY6456: A,
        KS7KLFqN8: c,
        xAPRy8bad: J,
        ...O
      } = Yt(r),
      {
        baseVariant: S,
        classNames: q,
        clearLoadingGesture: z,
        gestureHandlers: _,
        gestureVariant: U,
        isLoading: ie,
        setGestureState: Y,
        setVariant: w,
        variants: ae,
      } = oe({
        cycleOrder: Xt,
        defaultVariant: "AksRoqhcS",
        ref: n,
        variant: C,
        variantClassNames: Ut,
      }),
      E = zt(r, ae),
      R = F(Qt, ...[jr, Xr]),
      s = () =>
        !["axDSKQZXP", "gNstPdAkh", "KsCSAInQk", "WXhecYaG5"].includes(S),
      N = () => S === "axDSKQZXP",
      me = () => S === "WXhecYaG5";
    return e(W, {
      id: m ?? f,
      children: e(qt, {
        animate: ae,
        initial: !1,
        children: e(Ot, {
          value: jt,
          children: d(t.div, {
            ...O,
            ..._,
            className: F(R, "framer-9xh6r2", h, q),
            "data-border": !0,
            "data-framer-name": "Highlight Tag",
            layoutDependency: E,
            layoutId: "AksRoqhcS",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: `blur(${J}px)`,
              background:
                'linear-gradient(180deg, var(--token-082d630a-c036-4f77-8c8d-5d7b4650e064, rgba(255, 255, 255, 0.08)) /* {"name":"White 8%"} */ -100%, var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05)) /* {"name":"White 5%"} */ 100%)',
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              ...I,
            },
            variants: {
              axDSKQZXP: {
                background:
                  'linear-gradient(0.07383128568086761deg, var(--token-64bf095d-9ad7-4fc0-9f3c-f96ec87f9b9b, rgba(0, 85, 255, 0.08)) /* {"name":"Blue 8%"} */ 0%, var(--token-b6113dae-1252-48c9-8fac-f8a781d683c0, rgba(153, 153, 153, 0.1)) /* {"name":"Dark Grey 10%"} */ 100%)',
              },
              gNstPdAkh: {
                background:
                  'linear-gradient(-7.642439925348299e-8deg, var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05)) /* {"name":"White 5%"} */ 0%, var(--token-b456af2e-fd88-41ae-8686-ad7692875dfd, rgba(97, 97, 97, 0.09)) /* {"name":"Transparent Grey"} */ 100%)',
              },
              KsCSAInQk: {
                background:
                  'linear-gradient(0.07383128568086761deg, var(--token-ad10564e-4158-40a7-94e1-51af1b841a47, rgba(0, 85, 255, 0.2)) /* {"name":"Blue 20%"} */ 0%, var(--token-b6113dae-1252-48c9-8fac-f8a781d683c0, rgba(153, 153, 153, 0.1)) /* {"name":"Dark Grey 10%"} */ 100%)',
              },
              WXhecYaG5: {
                background:
                  "linear-gradient(180deg, var(--token-91acd6b3-0466-4512-bfe0-548e2faebf76, rgba(0, 0, 0, 0.3)) 0%, var(--token-91acd6b3-0466-4512-bfe0-548e2faebf76, rgba(0, 0, 0, 0.3)) 100%)",
                backgroundColor:
                  "var(--token-91acd6b3-0466-4512-bfe0-548e2faebf76, rgba(0, 0, 0, 0.3))",
              },
            },
            ...Zr(
              {
                axDSKQZXP: { "data-framer-name": "Dotted Highlight Tag" },
                gNstPdAkh: { "data-framer-name": "Grey Linear Tag" },
                KsCSAInQk: { "data-framer-name": "Purple Tag" },
                WXhecYaG5: { "data-framer-name": "Dark" },
              },
              S,
              U,
            ),
            children: [
              e(t.div, {
                className: "framer-zg4psl",
                "data-framer-name": "Gradient Overlay",
                layoutDependency: E,
                layoutId: "qwNeQyBdz",
                style: {
                  background:
                    "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(79, 26, 214, 0.2) 171.8918918918919deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)",
                  opacity: 0.2,
                },
              }),
              s() &&
                e(t.div, {
                  className: "framer-12lke1p",
                  "data-border": !0,
                  "data-framer-name": "Highlighter",
                  layoutDependency: E,
                  layoutId: "V5TlajtKS",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      "var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15))",
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    background:
                      'linear-gradient(180deg, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Purple"} */ 0%, rgb(128, 89, 227) 100%)',
                    borderBottomLeftRadius: 26,
                    borderBottomRightRadius: 26,
                    borderTopLeftRadius: 26,
                    borderTopRightRadius: 26,
                  },
                  children: e(y, {
                    __fromCanvasComponent: !0,
                    children: e(u, {
                      children: e(t.p, {
                        className: "framer-styles-preset-1mywhy3",
                        "data-styles-preset": "sQbLphIaJ",
                        children: "NEW",
                      }),
                    }),
                    className: "framer-ualbtz",
                    "data-framer-name": "Text",
                    fonts: ["Inter"],
                    layoutDependency: E,
                    layoutId: "E925uELmf",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: A,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
              e(y, {
                __fromCanvasComponent: !0,
                children: e(u, {
                  children: e(t.p, {
                    className: "framer-styles-preset-m6m3zm",
                    "data-styles-preset": "qScbNYtt3",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: e(t.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage:
                          "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)",
                      },
                      children: "About Landin",
                    }),
                  }),
                }),
                className: "framer-1pw8fxn",
                "data-framer-name": "Title",
                fonts: ["Inter"],
                layoutDependency: E,
                layoutId: "W4kfTr1gT",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: c,
                variants: {
                  gNstPdAkh: {
                    "--extracted-r6o4lv":
                      "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Zr(
                  {
                    gNstPdAkh: {
                      children: e(u, {
                        children: e(t.p, {
                          className: "framer-styles-preset-m6m3zm",
                          "data-styles-preset": "qScbNYtt3",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))",
                          },
                          children: e(t.span, {
                            "data-text-fill": "true",
                            style: {
                              backgroundImage:
                                "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)",
                            },
                            children: "About Landin",
                          }),
                        }),
                      }),
                    },
                  },
                  S,
                  U,
                ),
              }),
              N() &&
                e(t.div, {
                  className: "framer-5n0mfo",
                  "data-border": !0,
                  "data-framer-name": "Icon",
                  layoutDependency: E,
                  layoutId: "x_AWTo2fK",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      "var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15))",
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    background:
                      'linear-gradient(180deg, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Purple"} */ 0%, rgb(128, 89, 227) 100%)',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  },
                  children: e(p, {
                    children: e(x, {
                      className: "framer-1i1ck70-container",
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: "PJodwANK0-container",
                      nodeId: "PJodwANK0",
                      rendersWithMotion: !0,
                      scopeId: "IHYC0Q7Lw",
                      children: e(j, {
                        color:
                          "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: X,
                        id: "PJodwANK0",
                        layoutId: "PJodwANK0",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "duotone",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              N() &&
                e(Bt, {
                  __framer__spring: {
                    bounce: 0.2,
                    damping: 60,
                    delay: 0,
                    duration: 0.3,
                    durationBasedSpring: !1,
                    ease: [0.44, 0, 0.56, 1],
                    mass: 1,
                    stiffness: 300,
                    type: "spring",
                  },
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 0,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 0.3,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onInView",
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: "framer-1ahrcnp",
                  "data-framer-name": "Blue Line",
                  layoutDependency: E,
                  layoutId: "u9huyaQK_",
                  style: {
                    background:
                      'linear-gradient(90.00000000000155deg, rgba(79, 26, 214, 0) 0%, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Blue"} */ 50%, rgba(0, 85, 255, 0) 100%)',
                  },
                }),
              me() &&
                e(t.div, {
                  className: "framer-1ovphbv",
                  "data-framer-name": "Shadow",
                  layoutDependency: E,
                  layoutId: "rgcJEQNal",
                  style: {
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgba(79, 26, 214, 0.15) 0%, rgb(15, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 10px -1px rgba(79, 26, 214, 0.1)",
                  },
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Jt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-JAedJ.framer-nyuva8, .framer-JAedJ .framer-nyuva8 { display: block; }",
    ".framer-JAedJ.framer-9xh6r2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 16px 6px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JAedJ .framer-zg4psl { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 100% / 2); }",
    ".framer-JAedJ .framer-12lke1p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 9px 10px 9px 10px; position: relative; width: min-content; }",
    ".framer-JAedJ .framer-ualbtz, .framer-JAedJ .framer-1pw8fxn { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-JAedJ .framer-5n0mfo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 8px; position: relative; width: min-content; }",
    ".framer-JAedJ .framer-1i1ck70-container { flex: none; height: 13px; position: relative; width: 13px; }",
    ".framer-JAedJ .framer-1ahrcnp { flex: none; height: 1px; left: calc(50.3937007874016% - 60px / 2); position: absolute; top: 0px; width: 60px; z-index: 1; }",
    ".framer-JAedJ .framer-1ovphbv { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JAedJ.framer-9xh6r2, .framer-JAedJ .framer-12lke1p, .framer-JAedJ .framer-5n0mfo { gap: 0px; } .framer-JAedJ.framer-9xh6r2 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-JAedJ.framer-9xh6r2 > :first-child, .framer-JAedJ .framer-12lke1p > :first-child, .framer-JAedJ .framer-5n0mfo > :first-child { margin-left: 0px; } .framer-JAedJ.framer-9xh6r2 > :last-child, .framer-JAedJ .framer-12lke1p > :last-child, .framer-JAedJ .framer-5n0mfo > :last-child { margin-right: 0px; } .framer-JAedJ .framer-12lke1p > *, .framer-JAedJ .framer-5n0mfo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-JAedJ.framer-v-1neujbl.framer-9xh6r2 { gap: 10px; }",
    ".framer-JAedJ.framer-v-1neujbl .framer-zg4psl, .framer-JAedJ.framer-v-1j9m4ta .framer-zg4psl, .framer-JAedJ.framer-v-17087j1 .framer-zg4psl, .framer-JAedJ.framer-v-1az82xx .framer-zg4psl { order: 4; }",
    ".framer-JAedJ.framer-v-1neujbl .framer-1pw8fxn, .framer-JAedJ.framer-v-1j9m4ta .framer-1pw8fxn, .framer-JAedJ.framer-v-17087j1 .framer-1pw8fxn, .framer-JAedJ.framer-v-1az82xx .framer-1pw8fxn { order: 2; }",
    ".framer-JAedJ.framer-v-1neujbl .framer-5n0mfo { order: 1; }",
    ".framer-JAedJ.framer-v-1neujbl .framer-1ahrcnp { left: calc(50.3937007874016% - 62% / 2); order: 3; width: 62%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JAedJ.framer-v-1neujbl.framer-9xh6r2 { gap: 0px; } .framer-JAedJ.framer-v-1neujbl.framer-9xh6r2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JAedJ.framer-v-1neujbl.framer-9xh6r2 > :first-child { margin-left: 0px; } .framer-JAedJ.framer-v-1neujbl.framer-9xh6r2 > :last-child { margin-right: 0px; } }",
    ".framer-JAedJ.framer-v-1j9m4ta.framer-9xh6r2, .framer-JAedJ.framer-v-17087j1.framer-9xh6r2, .framer-JAedJ.framer-v-1az82xx.framer-9xh6r2 { gap: 10px; padding: 6px 16px 6px 16px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JAedJ.framer-v-1j9m4ta.framer-9xh6r2 { gap: 0px; } .framer-JAedJ.framer-v-1j9m4ta.framer-9xh6r2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JAedJ.framer-v-1j9m4ta.framer-9xh6r2 > :first-child { margin-left: 0px; } .framer-JAedJ.framer-v-1j9m4ta.framer-9xh6r2 > :last-child { margin-right: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JAedJ.framer-v-17087j1.framer-9xh6r2 { gap: 0px; } .framer-JAedJ.framer-v-17087j1.framer-9xh6r2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JAedJ.framer-v-17087j1.framer-9xh6r2 > :first-child { margin-left: 0px; } .framer-JAedJ.framer-v-17087j1.framer-9xh6r2 > :last-child { margin-right: 0px; } }",
    ".framer-JAedJ.framer-v-1az82xx .framer-1ovphbv { order: 5; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JAedJ.framer-v-1az82xx.framer-9xh6r2 { gap: 0px; } .framer-JAedJ.framer-v-1az82xx.framer-9xh6r2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JAedJ.framer-v-1az82xx.framer-9xh6r2 > :first-child { margin-left: 0px; } .framer-JAedJ.framer-v-1az82xx.framer-9xh6r2 > :last-child { margin-right: 0px; } }",
    ...Ur,
    ...Br,
    '.framer-JAedJ[data-border="true"]::after, .framer-JAedJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ae = ee(Gt, Jt, "framer-JAedJ"),
  rr = Ae;
Ae.displayName = "Tag/Primary Tag";
Ae.defaultProps = { height: 40, width: 173.5 };
$(Ae, {
  variant: {
    options: ["AksRoqhcS", "axDSKQZXP", "gNstPdAkh", "KsCSAInQk", "WXhecYaG5"],
    optionTitles: [
      "Highlight Tag",
      "Dotted Highlight Tag",
      "Grey Linear Tag",
      "Purple Tag",
      "Dark",
    ],
    title: "Variant",
    type: l.Enum,
  },
  aZ7GvMqIl: Wr?.iconSelection && {
    ...Wr.iconSelection,
    defaultValue: "Acorn",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  rQKAY6456: {
    defaultValue: "NEW",
    description:
      "If the tag contains a mini tag, enter this text. Use All Uppercase.",
    displayTextArea: !1,
    placeholder: "",
    title: "Highlight",
    type: l.String,
  },
  KS7KLFqN8: {
    defaultValue: "About Landin",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  xAPRy8bad: { defaultValue: 0, title: "Background Blur", type: l.Number },
});
te(
  Ae,
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
    ...Lt,
    ...se(Qr),
    ...se(Lr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Kt = v(j),
  Wt = v(de),
  $r = le(j),
  Zt = ["CeXTt6Kst", "mH3pBjkav"],
  $t = "framer-I4iqh",
  ea = { CeXTt6Kst: "framer-v-dmu07m", mH3pBjkav: "framer-v-vkrs58" };
function ra(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var ta = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  aa = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  na = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  oa = t.create(u),
  ia = { Primary: "CeXTt6Kst", Secondary: "mH3pBjkav" },
  sa = ({
    bodyText: r,
    height: a,
    icon: o,
    id: n,
    padding: f,
    phase: g,
    tag1: b,
    tag2: i,
    title: I,
    width: h,
    ...m
  }) => ({
    ...m,
    bw8wnPVJ6: f ?? m.bw8wnPVJ6 ?? "30px",
    lpNYR5mgd: I ?? m.lpNYR5mgd ?? "Innovate Smarter Lead Faster",
    pgcwfQDhU: g ?? m.pgcwfQDhU ?? "Discovery",
    QiBV5Bs5w: i ?? m.QiBV5Bs5w ?? "Discovery",
    sq6e4rlJt:
      r ??
      m.sq6e4rlJt ??
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    TP1crxvPO: b ?? m.TP1crxvPO ?? "Discovery",
    tuSNNK56X: o ?? m.tuSNNK56X ?? "Carrot",
    variant: ia[m.variant] ?? m.variant ?? "CeXTt6Kst",
  }),
  la = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  da = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        tuSNNK56X: X,
        pgcwfQDhU: A,
        lpNYR5mgd: c,
        sq6e4rlJt: J,
        TP1crxvPO: O,
        QiBV5Bs5w: S,
        bw8wnPVJ6: q,
        ...z
      } = sa(r),
      {
        baseVariant: _,
        classNames: U,
        clearLoadingGesture: ie,
        gestureHandlers: Y,
        gestureVariant: w,
        isLoading: ae,
        setGestureState: E,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: Zt,
        defaultVariant: "CeXTt6Kst",
        ref: n,
        variant: C,
        variantClassNames: ea,
      }),
      s = la(r, R),
      me = F($t, ...[Er, Oe]),
      fe = () => _ !== "mH3pBjkav",
      k = () => _ === "mH3pBjkav";
    return e(W, {
      id: m ?? f,
      children: e(oa, {
        animate: R,
        initial: !1,
        children: e(na, {
          value: ta,
          children: e(t.div, {
            ...z,
            ...Y,
            className: F(me, "framer-dmu07m", h, U),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: s,
            layoutId: "CeXTt6Kst",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow:
                "0px 0.6021873017743928px 1.3248120639036642px -0.5833333333333333px rgba(0, 0, 0, 0.09), 0px 2.288533303243457px 5.034773267135606px -1.1666666666666665px rgba(0, 0, 0, 0.1), 0px 10px 22px -1.75px rgba(0, 0, 0, 0.16)",
              ...I,
            },
            ...ra({ mH3pBjkav: { "data-framer-name": "Secondary" } }, _, w),
            children: d(t.div, {
              className: "framer-1aiu57p",
              "data-border": !0,
              "data-framer-name": "Container",
              layoutDependency: s,
              layoutId: "uNbnWJmhg",
              style: {
                "--1hiqksj": aa(q),
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              },
              children: [
                e(t.div, {
                  className: "framer-1vfqga4",
                  "data-framer-name": "Shadow",
                  layoutDependency: s,
                  layoutId: "pcbAzB9ki",
                  style: {
                    background:
                      "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 5px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                  },
                }),
                d(t.div, {
                  className: "framer-1gg1egh",
                  "data-framer-name": "Icon/Tag",
                  layoutDependency: s,
                  layoutId: "Ge_0vwroU",
                  children: [
                    d(t.div, {
                      className: "framer-1a0dsmx",
                      "data-border": !0,
                      "data-framer-name": "Icon",
                      layoutDependency: s,
                      layoutId: "DGeLkKEbT",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow:
                          "0px 0.3613123810646357px 1.083937143193907px -0.5px rgba(79, 26, 214, 0.08), 0px 1.3731199819460742px 4.119359945838223px -1px rgba(79, 26, 214, 0.1), 0px 6px 18px -1.5px rgba(79, 26, 214, 0.18), inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08)",
                      },
                      children: [
                        e(t.div, {
                          className: "framer-18rddva",
                          "data-framer-name": "Shadow",
                          layoutDependency: s,
                          layoutId: "QOxniejb7",
                          style: {
                            background:
                              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                            boxShadow:
                              "inset 0px 10px 10px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                          },
                        }),
                        e(p, {
                          children: e(x, {
                            className: "framer-p4mmvm-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: s,
                            layoutId: "SMMV5iXIf-container",
                            nodeId: "SMMV5iXIf",
                            rendersWithMotion: !0,
                            scopeId: "boOGllWYo",
                            children: e(j, {
                              color:
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              height: "100%",
                              iconSearch: "House",
                              iconSelection: X,
                              id: "SMMV5iXIf",
                              layoutId: "SMMV5iXIf",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(p, {
                      height: 40,
                      children: e(x, {
                        className: "framer-5yvqhd-container",
                        layoutDependency: s,
                        layoutId: "olSfPQ5L2-container",
                        nodeId: "olSfPQ5L2",
                        rendersWithMotion: !0,
                        scopeId: "boOGllWYo",
                        children: e(de, {
                          aZ7GvMqIl: "Acorn",
                          height: "100%",
                          id: "olSfPQ5L2",
                          KS7KLFqN8: A,
                          layoutId: "olSfPQ5L2",
                          rQKAY6456: "NEW",
                          variant: "gNstPdAkh",
                          width: "100%",
                          xAPRy8bad: 0,
                        }),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-193uo25",
                  "data-framer-name": "Content",
                  layoutDependency: s,
                  layoutId: "InRaFoZwQ",
                  children: d(t.div, {
                    className: "framer-o593e4",
                    "data-framer-name": "Inner Content",
                    layoutDependency: s,
                    layoutId: "wT3xNceLv",
                    children: [
                      e(t.div, {
                        className: "framer-axuw1g",
                        "data-framer-name": "Title",
                        layoutDependency: s,
                        layoutId: "D0iTLlPzI",
                        children: e(y, {
                          __fromCanvasComponent: !0,
                          children: e(u, {
                            children: e(t.h4, {
                              className: "framer-styles-preset-1ing3ma",
                              "data-styles-preset": "VnmEZ_3BZ",
                              children: "Innovate Smarter Lead Faster",
                            }),
                          }),
                          className: "framer-1b4uj1g",
                          "data-framer-name": "Text",
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "Y0av6ptEk",
                          style: { "--framer-paragraph-spacing": "0px" },
                          text: c,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(t.div, {
                        className: "framer-njpuky",
                        "data-framer-name": "Seperator",
                        layoutDependency: s,
                        layoutId: "pn4_ZZJLf",
                        style: {
                          background:
                            "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                        },
                      }),
                      e(y, {
                        __fromCanvasComponent: !0,
                        children: e(u, {
                          children: e(t.p, {
                            className: "framer-styles-preset-x0s9r5",
                            "data-styles-preset": "QhK6qqT5U",
                            style: {
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                            },
                            children:
                              "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
                          }),
                        }),
                        className: "framer-1yjrya7",
                        "data-framer-name": "Body Text",
                        fonts: ["Inter"],
                        layoutDependency: s,
                        layoutId: "KpuObr9FL",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: J,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                fe() &&
                  d(t.div, {
                    className: "framer-f0m91e",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "wI1G8wgvC",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-k3de6y-container",
                          layoutDependency: s,
                          layoutId: "p03Si1lN7-container",
                          nodeId: "p03Si1lN7",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(de, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "p03Si1lN7",
                            KS7KLFqN8: O,
                            layoutId: "p03Si1lN7",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-4ecag3-container",
                          layoutDependency: s,
                          layoutId: "dywyIr48H-container",
                          nodeId: "dywyIr48H",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(de, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "dywyIr48H",
                            KS7KLFqN8: S,
                            layoutId: "dywyIr48H",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                k() &&
                  d(t.div, {
                    className: "framer-t75ctw",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "pVTLB8YI6",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-1jwns9e-container",
                          layoutDependency: s,
                          layoutId: "ZKMqj6Kpb-container",
                          nodeId: "ZKMqj6Kpb",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(de, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "ZKMqj6Kpb",
                            KS7KLFqN8: O,
                            layoutId: "ZKMqj6Kpb",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-apvq0s-container",
                          layoutDependency: s,
                          layoutId: "fw8VTEI34-container",
                          nodeId: "fw8VTEI34",
                          rendersWithMotion: !0,
                          scopeId: "boOGllWYo",
                          children: e(de, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "fw8VTEI34",
                            KS7KLFqN8: S,
                            layoutId: "fw8VTEI34",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
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
  ma = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-I4iqh.framer-1rs9er1, .framer-I4iqh .framer-1rs9er1 { display: block; }",
    ".framer-I4iqh.framer-dmu07m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px; position: relative; width: 478px; }",
    ".framer-I4iqh .framer-1aiu57p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1hiqksj); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-I4iqh .framer-1vfqga4 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-I4iqh .framer-1gg1egh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-I4iqh .framer-1a0dsmx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-I4iqh .framer-18rddva { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-I4iqh .framer-p4mmvm-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-I4iqh .framer-5yvqhd-container, .framer-I4iqh .framer-k3de6y-container, .framer-I4iqh .framer-4ecag3-container, .framer-I4iqh .framer-1jwns9e-container, .framer-I4iqh .framer-apvq0s-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-I4iqh .framer-193uo25 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-I4iqh .framer-o593e4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-I4iqh .framer-axuw1g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-I4iqh .framer-1b4uj1g { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-I4iqh .framer-njpuky { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-I4iqh .framer-1yjrya7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-I4iqh .framer-f0m91e, .framer-I4iqh .framer-t75ctw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-I4iqh.framer-v-vkrs58 .framer-1vfqga4 { order: 0; }",
    ".framer-I4iqh.framer-v-vkrs58 .framer-1gg1egh { order: 1; }",
    ".framer-I4iqh.framer-v-vkrs58 .framer-193uo25 { order: 2; }",
    ".framer-I4iqh.framer-v-vkrs58 .framer-t75ctw { order: 4; }",
    ...qr,
    ...je,
    '.framer-I4iqh[data-border="true"]::after, .framer-I4iqh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ke = ee(da, ma, "framer-I4iqh"),
  ue = ke;
ke.displayName = "About Card";
ke.defaultProps = { height: 363, width: 478 };
$(ke, {
  variant: {
    options: ["CeXTt6Kst", "mH3pBjkav"],
    optionTitles: ["Primary", "Secondary"],
    title: "Variant",
    type: l.Enum,
  },
  tuSNNK56X: $r?.iconSelection && {
    ...$r.iconSelection,
    defaultValue: "Carrot",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  pgcwfQDhU: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Phase",
    type: l.String,
  },
  lpNYR5mgd: {
    defaultValue: "Innovate Smarter Lead Faster",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  sq6e4rlJt: {
    defaultValue:
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  TP1crxvPO: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 1",
    type: l.String,
  },
  QiBV5Bs5w: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 2",
    type: l.String,
  },
  bw8wnPVJ6: { defaultValue: "30px", title: "Padding", type: l.Padding },
});
te(
  ke,
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
    ...Kt,
    ...Wt,
    ...se(Or),
    ...se(Ue),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var fa = v(j),
  ca = v(M),
  et = le(j),
  pa = ["a1YYSmVjT", "kU0CY1NOY"],
  ua = "framer-X534a",
  ha = { a1YYSmVjT: "framer-v-o33sf", kU0CY1NOY: "framer-v-a3fbdr" };
function ga(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var xa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ya = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  wa = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  ba = t.create(u),
  va = { Primary: "a1YYSmVjT", Secondary: "kU0CY1NOY" },
  Ia = ({
    bodyText: r,
    height: a,
    icon: o,
    id: n,
    padding: f,
    phase: g,
    tag1: b,
    tag2: i,
    title: I,
    width: h,
    ...m
  }) => ({
    ...m,
    bw8wnPVJ6: f ?? m.bw8wnPVJ6 ?? "30px",
    lpNYR5mgd: I ?? m.lpNYR5mgd ?? "Innovate Smarter Lead Faster",
    pgcwfQDhU: g ?? m.pgcwfQDhU ?? "Discovery",
    QiBV5Bs5w: i ?? m.QiBV5Bs5w ?? "Discovery",
    sq6e4rlJt:
      r ??
      m.sq6e4rlJt ??
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    TP1crxvPO: b ?? m.TP1crxvPO ?? "Discovery",
    tuSNNK56X: o ?? m.tuSNNK56X ?? "Carrot",
    variant: va[m.variant] ?? m.variant ?? "a1YYSmVjT",
  }),
  Ca = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Aa = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        tuSNNK56X: X,
        pgcwfQDhU: A,
        lpNYR5mgd: c,
        sq6e4rlJt: J,
        TP1crxvPO: O,
        QiBV5Bs5w: S,
        bw8wnPVJ6: q,
        ...z
      } = Ia(r),
      {
        baseVariant: _,
        classNames: U,
        clearLoadingGesture: ie,
        gestureHandlers: Y,
        gestureVariant: w,
        isLoading: ae,
        setGestureState: E,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: pa,
        defaultVariant: "a1YYSmVjT",
        ref: n,
        variant: C,
        variantClassNames: ha,
      }),
      s = Ca(r, R),
      me = F(ua, ...[]),
      fe = () => _ !== "kU0CY1NOY",
      k = () => _ === "kU0CY1NOY";
    return e(W, {
      id: m ?? f,
      children: e(ba, {
        animate: R,
        initial: !1,
        children: e(wa, {
          value: xa,
          children: e(t.div, {
            ...z,
            ...Y,
            className: F(me, "framer-o33sf", h, U),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: s,
            layoutId: "a1YYSmVjT",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow:
                "0px 0.6021873017743928px 1.3248120639036642px -0.5833333333333333px rgba(0, 0, 0, 0.09), 0px 2.288533303243457px 5.034773267135606px -1.1666666666666665px rgba(0, 0, 0, 0.1), 0px 10px 22px -1.75px rgba(0, 0, 0, 0.16)",
              ...I,
            },
            ...ga({ kU0CY1NOY: { "data-framer-name": "Secondary" } }, _, w),
            children: d(t.div, {
              className: "framer-uo93aw",
              "data-border": !0,
              "data-framer-name": "Container",
              layoutDependency: s,
              layoutId: "ECLuNfnAu",
              style: {
                "--1hiqksj": ya(q),
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              },
              children: [
                e(t.div, {
                  className: "framer-x3kpmy",
                  "data-framer-name": "Shadow",
                  layoutDependency: s,
                  layoutId: "HJgblTa3v",
                  style: {
                    background:
                      "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 5px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                  },
                }),
                d(t.div, {
                  className: "framer-eqx8n7",
                  "data-framer-name": "Icon/Tag",
                  layoutDependency: s,
                  layoutId: "DKjYkaqdM",
                  children: [
                    d(t.div, {
                      className: "framer-1aq7wrj",
                      "data-border": !0,
                      "data-framer-name": "Icon",
                      layoutDependency: s,
                      layoutId: "nhZJzJJMP",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow:
                          "0px 0.3613123810646357px 1.083937143193907px -0.5px rgba(79, 26, 214, 0.08), 0px 1.3731199819460742px 4.119359945838223px -1px rgba(79, 26, 214, 0.1), 0px 6px 18px -1.5px rgba(79, 26, 214, 0.18), inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08)",
                      },
                      children: [
                        e(t.div, {
                          className: "framer-gcu6mh",
                          "data-framer-name": "Shadow",
                          layoutDependency: s,
                          layoutId: "OfyQXqKTh",
                          style: {
                            background:
                              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                            boxShadow:
                              "inset 0px 10px 10px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                          },
                        }),
                        e(p, {
                          children: e(x, {
                            className: "framer-i46aw1-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: s,
                            layoutId: "JqFj6Nqxh-container",
                            nodeId: "JqFj6Nqxh",
                            rendersWithMotion: !0,
                            scopeId: "MXNUjCyJN",
                            children: e(j, {
                              color:
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              height: "100%",
                              iconSearch: "House",
                              iconSelection: X,
                              id: "JqFj6Nqxh",
                              layoutId: "JqFj6Nqxh",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(p, {
                      height: 40,
                      children: e(x, {
                        className: "framer-wqu1t3-container",
                        isModuleExternal: !0,
                        layoutDependency: s,
                        layoutId: "w6ThF73zQ-container",
                        nodeId: "w6ThF73zQ",
                        rendersWithMotion: !0,
                        scopeId: "MXNUjCyJN",
                        children: e(M, {
                          aZ7GvMqIl: "Acorn",
                          height: "100%",
                          id: "w6ThF73zQ",
                          KS7KLFqN8: A,
                          layoutId: "w6ThF73zQ",
                          rQKAY6456: "NEW",
                          variant: "gNstPdAkh",
                          width: "100%",
                          xAPRy8bad: 0,
                        }),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-rtlg2r",
                  "data-framer-name": "Content",
                  layoutDependency: s,
                  layoutId: "olLg8wS27",
                  children: d(t.div, {
                    className: "framer-899ojq",
                    "data-framer-name": "Inner Content",
                    layoutDependency: s,
                    layoutId: "I3sOL33z6",
                    children: [
                      e(t.div, {
                        className: "framer-p4yl9i",
                        "data-framer-name": "Title",
                        layoutDependency: s,
                        layoutId: "M6Uj9qR1j",
                        children: e(y, {
                          __fromCanvasComponent: !0,
                          children: e(u, {
                            children: e(t.h4, {
                              style: {
                                "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                                "--framer-font-family":
                                  '"DM Sans", "DM Sans Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.5px",
                                "--framer-line-height": "26px",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))",
                              },
                              children: "Innovate Smarter Lead Faster",
                            }),
                          }),
                          className: "framer-16ml8hv",
                          "data-framer-name": "Text",
                          fonts: ["GF;DM Sans-500"],
                          layoutDependency: s,
                          layoutId: "IpcQl_SmR",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: c,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(t.div, {
                        className: "framer-ibdjvn",
                        "data-framer-name": "Seperator",
                        layoutDependency: s,
                        layoutId: "PUrTLhIuO",
                        style: {
                          background:
                            "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                        },
                      }),
                      e(y, {
                        __fromCanvasComponent: !0,
                        children: e(u, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-letter-spacing": "-0.2px",
                              "--framer-line-height": "26px",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                            },
                            children:
                              "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
                          }),
                        }),
                        className: "framer-17iq36",
                        "data-framer-name": "Body Text",
                        fonts: ["GF;DM Sans-regular"],
                        layoutDependency: s,
                        layoutId: "jRBtEnICi",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: J,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                fe() &&
                  d(t.div, {
                    className: "framer-1sh37ev",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "mawmM4ieP",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-1ivqpiz-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "uJssiFvnf-container",
                          nodeId: "uJssiFvnf",
                          rendersWithMotion: !0,
                          scopeId: "MXNUjCyJN",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "uJssiFvnf",
                            KS7KLFqN8: O,
                            layoutId: "uJssiFvnf",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-drwm47-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "es_jxOi_y-container",
                          nodeId: "es_jxOi_y",
                          rendersWithMotion: !0,
                          scopeId: "MXNUjCyJN",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "es_jxOi_y",
                            KS7KLFqN8: S,
                            layoutId: "es_jxOi_y",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                k() &&
                  d(t.div, {
                    className: "framer-1vqt2k0",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "UZiv7vW6x",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-ufw7kl-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "rPo8YfTw7-container",
                          nodeId: "rPo8YfTw7",
                          rendersWithMotion: !0,
                          scopeId: "MXNUjCyJN",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "rPo8YfTw7",
                            KS7KLFqN8: O,
                            layoutId: "rPo8YfTw7",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-rp20iz-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "xTSnyjbIF-container",
                          nodeId: "xTSnyjbIF",
                          rendersWithMotion: !0,
                          scopeId: "MXNUjCyJN",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "xTSnyjbIF",
                            KS7KLFqN8: S,
                            layoutId: "xTSnyjbIF",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
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
  ka = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-X534a.framer-1aazlyg, .framer-X534a .framer-1aazlyg { display: block; }",
    ".framer-X534a.framer-o33sf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px; position: relative; width: 478px; }",
    ".framer-X534a .framer-uo93aw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1hiqksj); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-X534a .framer-x3kpmy { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-X534a .framer-eqx8n7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-X534a .framer-1aq7wrj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-X534a .framer-gcu6mh { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-X534a .framer-i46aw1-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-X534a .framer-wqu1t3-container, .framer-X534a .framer-1ivqpiz-container, .framer-X534a .framer-drwm47-container, .framer-X534a .framer-ufw7kl-container, .framer-X534a .framer-rp20iz-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-X534a .framer-rtlg2r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-X534a .framer-899ojq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-X534a .framer-p4yl9i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-X534a .framer-16ml8hv { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-X534a .framer-ibdjvn { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-X534a .framer-17iq36 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-X534a .framer-1sh37ev, .framer-X534a .framer-1vqt2k0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-X534a.framer-v-a3fbdr .framer-x3kpmy { order: 0; }",
    ".framer-X534a.framer-v-a3fbdr .framer-eqx8n7 { order: 1; }",
    ".framer-X534a.framer-v-a3fbdr .framer-rtlg2r { order: 2; }",
    ".framer-X534a.framer-v-a3fbdr .framer-1vqt2k0 { order: 4; }",
    '.framer-X534a[data-border="true"]::after, .framer-X534a [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Se = ee(Aa, ka, "framer-X534a"),
  tr = Se;
Se.displayName = "About Card 4";
Se.defaultProps = { height: 363, width: 478 };
$(Se, {
  variant: {
    options: ["a1YYSmVjT", "kU0CY1NOY"],
    optionTitles: ["Primary", "Secondary"],
    title: "Variant",
    type: l.Enum,
  },
  tuSNNK56X: et?.iconSelection && {
    ...et.iconSelection,
    defaultValue: "Carrot",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  pgcwfQDhU: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Phase",
    type: l.String,
  },
  lpNYR5mgd: {
    defaultValue: "Innovate Smarter Lead Faster",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  sq6e4rlJt: {
    defaultValue:
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  TP1crxvPO: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 1",
    type: l.String,
  },
  QiBV5Bs5w: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 2",
    type: l.String,
  },
  bw8wnPVJ6: { defaultValue: "30px", title: "Padding", type: l.Padding },
});
te(
  Se,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
    ...fa,
    ...ca,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Sa = v(j),
  Na = v(M),
  rt = le(j),
  Fa = ["Ha7bHulz3", "AmOvbayPx"],
  Ra = "framer-XUb4g",
  _a = { AmOvbayPx: "framer-v-xqeb9u", Ha7bHulz3: "framer-v-1y7d3cz" };
function Ta(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var Pa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Ma = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  Da = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  Va = t.create(u),
  La = { Primary: "Ha7bHulz3", Secondary: "AmOvbayPx" },
  Ba = ({
    bodyText: r,
    height: a,
    icon: o,
    id: n,
    padding: f,
    phase: g,
    tag1: b,
    tag2: i,
    title: I,
    width: h,
    ...m
  }) => ({
    ...m,
    bw8wnPVJ6: f ?? m.bw8wnPVJ6 ?? "30px",
    lpNYR5mgd: I ?? m.lpNYR5mgd ?? "Innovate Smarter Lead Faster",
    pgcwfQDhU: g ?? m.pgcwfQDhU ?? "Discovery",
    QiBV5Bs5w: i ?? m.QiBV5Bs5w ?? "Discovery",
    sq6e4rlJt:
      r ??
      m.sq6e4rlJt ??
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    TP1crxvPO: b ?? m.TP1crxvPO ?? "Discovery",
    tuSNNK56X: o ?? m.tuSNNK56X ?? "Carrot",
    variant: La[m.variant] ?? m.variant ?? "Ha7bHulz3",
  }),
  Xa = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Qa = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        tuSNNK56X: X,
        pgcwfQDhU: A,
        lpNYR5mgd: c,
        sq6e4rlJt: J,
        TP1crxvPO: O,
        QiBV5Bs5w: S,
        bw8wnPVJ6: q,
        ...z
      } = Ba(r),
      {
        baseVariant: _,
        classNames: U,
        clearLoadingGesture: ie,
        gestureHandlers: Y,
        gestureVariant: w,
        isLoading: ae,
        setGestureState: E,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: Fa,
        defaultVariant: "Ha7bHulz3",
        ref: n,
        variant: C,
        variantClassNames: _a,
      }),
      s = Xa(r, R),
      me = F(Ra, ...[]),
      fe = () => _ !== "AmOvbayPx";
    return e(W, {
      id: m ?? f,
      children: e(Va, {
        animate: R,
        initial: !1,
        children: e(Da, {
          value: Pa,
          children: e(t.div, {
            ...z,
            ...Y,
            className: F(me, "framer-1y7d3cz", h, U),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: s,
            layoutId: "Ha7bHulz3",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow:
                "0px 0.6021873017743928px 1.3248120639036642px -0.5833333333333333px rgba(0, 0, 0, 0.09), 0px 2.288533303243457px 5.034773267135606px -1.1666666666666665px rgba(0, 0, 0, 0.1), 0px 10px 22px -1.75px rgba(0, 0, 0, 0.16)",
              ...I,
            },
            ...Ta({ AmOvbayPx: { "data-framer-name": "Secondary" } }, _, w),
            children: d(t.div, {
              className: "framer-ykmj2n",
              "data-border": !0,
              "data-framer-name": "Container",
              layoutDependency: s,
              layoutId: "UHrYwGRPv",
              style: {
                "--1hiqksj": Ma(q),
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              },
              children: [
                e(t.div, {
                  className: "framer-xbttef",
                  "data-framer-name": "Shadow",
                  layoutDependency: s,
                  layoutId: "uAPFMHXgZ",
                  style: {
                    background:
                      "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 5px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                  },
                }),
                d(t.div, {
                  className: "framer-1pywfvl",
                  "data-framer-name": "Icon/Tag",
                  layoutDependency: s,
                  layoutId: "wPHuoeWyN",
                  children: [
                    d(t.div, {
                      className: "framer-10xlezq",
                      "data-border": !0,
                      "data-framer-name": "Icon",
                      layoutDependency: s,
                      layoutId: "aom9xmrJB",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow:
                          "0px 0.3613123810646357px 1.083937143193907px -0.5px rgba(79, 26, 214, 0.08), 0px 1.3731199819460742px 4.119359945838223px -1px rgba(79, 26, 214, 0.1), 0px 6px 18px -1.5px rgba(79, 26, 214, 0.18), inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08)",
                      },
                      children: [
                        e(t.div, {
                          className: "framer-1iq0nzf",
                          "data-framer-name": "Shadow",
                          layoutDependency: s,
                          layoutId: "kkhweBbKn",
                          style: {
                            background:
                              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                            boxShadow:
                              "inset 0px 10px 10px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                          },
                        }),
                        e(p, {
                          children: e(x, {
                            className: "framer-84nv8c-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: s,
                            layoutId: "EwQpPhrNa-container",
                            nodeId: "EwQpPhrNa",
                            rendersWithMotion: !0,
                            scopeId: "NVQ4bOXWY",
                            children: e(j, {
                              color:
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              height: "100%",
                              iconSearch: "House",
                              iconSelection: X,
                              id: "EwQpPhrNa",
                              layoutId: "EwQpPhrNa",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(p, {
                      height: 40,
                      children: e(x, {
                        className: "framer-h1d0o7-container",
                        isModuleExternal: !0,
                        layoutDependency: s,
                        layoutId: "SpjJ0mXZu-container",
                        nodeId: "SpjJ0mXZu",
                        rendersWithMotion: !0,
                        scopeId: "NVQ4bOXWY",
                        children: e(M, {
                          aZ7GvMqIl: "Acorn",
                          height: "100%",
                          id: "SpjJ0mXZu",
                          KS7KLFqN8: A,
                          layoutId: "SpjJ0mXZu",
                          rQKAY6456: "NEW",
                          variant: "gNstPdAkh",
                          width: "100%",
                          xAPRy8bad: 0,
                        }),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-u4nnry",
                  "data-framer-name": "Content",
                  layoutDependency: s,
                  layoutId: "LwaUGMEwJ",
                  children: d(t.div, {
                    className: "framer-1xjqlrq",
                    "data-framer-name": "Inner Content",
                    layoutDependency: s,
                    layoutId: "bSueSyddf",
                    children: [
                      e(t.div, {
                        className: "framer-36xfoi",
                        "data-framer-name": "Title",
                        layoutDependency: s,
                        layoutId: "ryN40SEIP",
                        children: e(y, {
                          __fromCanvasComponent: !0,
                          children: e(u, {
                            children: e(t.h4, {
                              style: {
                                "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                                "--framer-font-family":
                                  '"DM Sans", "DM Sans Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.5px",
                                "--framer-line-height": "26px",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))",
                              },
                              children: "Innovate Smarter Lead Faster",
                            }),
                          }),
                          className: "framer-1fdo8kk",
                          "data-framer-name": "Text",
                          fonts: ["GF;DM Sans-500"],
                          layoutDependency: s,
                          layoutId: "FVN6tuhZE",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: c,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(t.div, {
                        className: "framer-c46zgz",
                        "data-framer-name": "Seperator",
                        layoutDependency: s,
                        layoutId: "WCf0FIpoi",
                        style: {
                          background:
                            "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                        },
                      }),
                      e(y, {
                        __fromCanvasComponent: !0,
                        children: e(u, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-letter-spacing": "-0.2px",
                              "--framer-line-height": "26px",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                            },
                            children:
                              "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
                          }),
                        }),
                        className: "framer-6sa3bd",
                        "data-framer-name": "Body Text",
                        fonts: ["GF;DM Sans-regular"],
                        layoutDependency: s,
                        layoutId: "L7s2EFEfB",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: J,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                fe() &&
                  d(t.div, {
                    className: "framer-rovmp3",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "j8WFhYVkE",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-gu4rv4-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "rqQkpOKUs-container",
                          nodeId: "rqQkpOKUs",
                          rendersWithMotion: !0,
                          scopeId: "NVQ4bOXWY",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "rqQkpOKUs",
                            KS7KLFqN8: O,
                            layoutId: "rqQkpOKUs",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-pk6ycs-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "wtGVOCviX-container",
                          nodeId: "wtGVOCviX",
                          rendersWithMotion: !0,
                          scopeId: "NVQ4bOXWY",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "wtGVOCviX",
                            KS7KLFqN8: S,
                            layoutId: "wtGVOCviX",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
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
  Ua = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XUb4g.framer-1emkiiy, .framer-XUb4g .framer-1emkiiy { display: block; }",
    ".framer-XUb4g.framer-1y7d3cz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px; position: relative; width: 478px; }",
    ".framer-XUb4g .framer-ykmj2n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1hiqksj); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-XUb4g .framer-xbttef { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-XUb4g .framer-1pywfvl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-XUb4g .framer-10xlezq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-XUb4g .framer-1iq0nzf { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-XUb4g .framer-84nv8c-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-XUb4g .framer-h1d0o7-container, .framer-XUb4g .framer-gu4rv4-container, .framer-XUb4g .framer-pk6ycs-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-XUb4g .framer-u4nnry { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XUb4g .framer-1xjqlrq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XUb4g .framer-36xfoi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XUb4g .framer-1fdo8kk { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-XUb4g .framer-c46zgz { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-XUb4g .framer-6sa3bd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-XUb4g .framer-rovmp3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-XUb4g.framer-v-xqeb9u .framer-xbttef { order: 0; }",
    ".framer-XUb4g.framer-v-xqeb9u .framer-1pywfvl { order: 1; }",
    ".framer-XUb4g.framer-v-xqeb9u .framer-u4nnry { order: 2; }",
    '.framer-XUb4g[data-border="true"]::after, .framer-XUb4g [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ne = ee(Qa, Ua, "framer-XUb4g"),
  ar = Ne;
Ne.displayName = "About Card 2";
Ne.defaultProps = { height: 363, width: 478 };
$(Ne, {
  variant: {
    options: ["Ha7bHulz3", "AmOvbayPx"],
    optionTitles: ["Primary", "Secondary"],
    title: "Variant",
    type: l.Enum,
  },
  tuSNNK56X: rt?.iconSelection && {
    ...rt.iconSelection,
    defaultValue: "Carrot",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  pgcwfQDhU: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Phase",
    type: l.String,
  },
  lpNYR5mgd: {
    defaultValue: "Innovate Smarter Lead Faster",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  sq6e4rlJt: {
    defaultValue:
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  TP1crxvPO: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 1",
    type: l.String,
  },
  QiBV5Bs5w: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 2",
    type: l.String,
  },
  bw8wnPVJ6: { defaultValue: "30px", title: "Padding", type: l.Padding },
});
te(
  Ne,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
    ...Sa,
    ...Na,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var qe = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nr = {
    ...qe,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  or = {
    onClick: { type: l.EventHandler },
    onMouseEnter: { type: l.EventHandler },
    onMouseLeave: { type: l.EventHandler },
  },
  ja = {
    type: l.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Oa = {
    font: {
      type: l.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: l.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: r }) => !r,
    },
    fontWeight: {
      type: l.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: r }) => !r,
    },
  };
function ir() {
  return Q(() => Le.current() === Le.canvas, []);
}
function sr(r) {
  let {
    borderRadius: a,
    isMixedBorderRadius: o,
    topLeftRadius: n,
    topRightRadius: f,
    bottomRightRadius: g,
    bottomLeftRadius: b,
  } = r;
  return Q(
    () => (o ? `${n}px ${f}px ${g}px ${b}px` : `${a}px`),
    [a, o, n, f, g, b],
  );
}
var lr = {
  borderRadius: {
    title: "Radius",
    type: l.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var Ya = {
  padding: {
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var mr;
(function (r) {
  ((r.Normal = "Off"), (r.Auto = "On"), (r.Loop = "Loop"));
})(mr || (mr = {}));
var fr;
(function (r) {
  ((r.High = "High Quality"),
    (r.Medium = "Medium Quality"),
    (r.Low = "Low Quality"),
    (r.Off = "Off"));
})(fr || (fr = {}));
function be({
  url: r,
  play: a,
  shouldMute: o,
  thumbnail: n,
  isRed: f,
  onClick: g,
  onMouseEnter: b,
  onMouseLeave: i,
  onMouseDown: I,
  onMouseUp: h,
  title: m,
  ...C
}) {
  let X = ir(),
    A = a !== "Off",
    c = X || (n !== "Off" && !A),
    [J, O] = He(() => !0, !1),
    [S, q] = He(() => !0, !c),
    [z, _] = De(!1),
    U = sr(C),
    ie = U !== "0px 0px 0px 0px" && U !== "0px";
  if (r === "") return e(Ha, {});
  let Y = Ga(r);
  if (Y === void 0) return e(Ka, { message: "Invalid Youtube URL." });
  let [w, ae, E] = Y,
    T = ae.searchParams;
  if (E) for (let [s, N] of E) (T.set(s, N), s === "t" && T.set("start", N));
  (T.set("iv_load_policy", "3"),
    T.set("rel", "0"),
    T.set("modestbranding", "1"),
    T.set("playsinline", "1"),
    S ? (A || (c && S)) && T.set("autoplay", "1") : T.set("autoplay", "0"),
    A && o && T.set("mute", "1"),
    a === "Loop" && (T.set("loop", "1"), T.set("playlist", w)),
    f || T.set("color", "white"));
  let R = {
    title: m || "Youtube Video",
    allow:
      "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    src: ae.href,
    frameBorder: "0",
    onClick: g,
    onMouseEnter: b,
    onMouseLeave: i,
    onMouseDown: I,
    onMouseUp: h,
  };
  return d("article", {
    onPointerEnter: () => _(!0),
    onPointerLeave: () => _(!1),
    onPointerOver: O,
    onKeyDown: q,
    onClick: q,
    style: {
      ...$a,
      borderRadius: U,
      transform: ie && (S || X) ? "translateZ(0.000001px)" : "unset",
      cursor: "pointer",
      overflow: "hidden",
    },
    role: "presentation",
    children: [
      J && e("link", { rel: "preconnect", href: "https://www.youtube.com" }),
      J && e("link", { rel: "preconnect", href: "https://www.google.com" }),
      c &&
        d(vr, {
          children: [
            e("link", { rel: "preconnect", href: "https://i.ytimg.com" }),
            e("img", {
              decoding: "async",
              src: Ja(w, n),
              style: { ...dr, objectFit: "cover" },
            }),
          ],
        }),
      X
        ? null
        : e("iframe", {
            loading: S ? void 0 : "lazy",
            style: S ? dr : { ...dr, display: "none" },
            ...R,
          }),
      S ? null : e(Wa, { onClick: q, isHovered: z, isRed: f }),
    ],
  });
}
be.displayName = "YouTube";
$(be, {
  url: { type: l.String, title: "Video" },
  play: { type: l.Enum, title: "Autoplay", options: Object.values(mr) },
  shouldMute: {
    title: "Mute",
    type: l.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden(r) {
      return r.play === "Off";
    },
  },
  thumbnail: {
    title: "Thumbnail",
    description: "Showing a thumbnail improves performance.",
    type: l.Enum,
    options: Object.values(fr),
    hidden(r) {
      return r.play !== "Off";
    },
  },
  isRed: {
    title: "Color",
    type: l.Boolean,
    enabledTitle: "Red",
    disabledTitle: "White",
  },
  ...lr,
  ...or,
});
var za = {
  url: "https://youtu.be/8AHPXm9Y6mI",
  play: "Off",
  shouldMute: !0,
  thumbnail: "Medium Quality",
  isRed: !0,
};
be.defaultProps = za;
function Ga(r) {
  let a;
  try {
    a = new URL(r);
  } catch {
    let n = Ee(r);
    return [r, n, null];
  }
  let o = a.searchParams;
  if (
    a.hostname === "youtube.com" ||
    a.hostname === "www.youtube.com" ||
    a.hostname === "youtube-nocookie.com" ||
    a.hostname === "www.youtube-nocookie.com"
  ) {
    let n = a.pathname.slice(1).split("/"),
      f = n[0];
    if (f === "watch") {
      let g = a.searchParams.get("v"),
        b = Ee(g);
      return [g, b, o];
    }
    if (f === "embed") return [n[1], a, o];
    if (f === "shorts" || f === "live") {
      let g = n[1],
        b = Ee(g);
      return [g, b, o];
    }
  }
  if (a.hostname === "youtu.be") {
    let n = a.pathname.slice(1),
      f = Ee(n);
    return [n, f, o];
  }
}
function Ee(r) {
  return new URL(`https://www.youtube.com/embed/${r}`);
}
function Ja(r, a) {
  let o = "https://i.ytimg.com/vi_webp/",
    n = "webp";
  switch (a) {
    case "Low Quality":
      return `${o}${r}/hqdefault.${n}`;
    case "Medium Quality":
      return `${o}${r}/sddefault.${n}`;
    case "High Quality":
      return `${o}${r}/maxresdefault.${n}`;
    default:
      return `${o}${r}/0.${n}`;
  }
}
function Ha() {
  return e("div", {
    style: { ...nr, overflow: "hidden" },
    children: e("div", {
      style: at,
      children:
        "To embed a Youtube video, add the URL to the properties\xA0panel.",
    }),
  });
}
function Ka({ message: r }) {
  return e("div", {
    className: "framerInternalUI-errorPlaceholder",
    style: { ...qe, overflow: "hidden" },
    children: d("div", { style: at, children: ["Error: ", r] }),
  });
}
function Wa({ onClick: r, isHovered: a, isRed: o }) {
  return e("button", {
    onClick: r,
    "aria-label": "Play",
    style: Za,
    children: d("svg", {
      height: "100%",
      version: "1.1",
      viewBox: "0 0 68 48",
      width: "100%",
      children: [
        e("path", {
          d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
          fill: a ? (o ? "#f00" : "#000") : "#212121",
          fillOpacity: a && o ? 1 : 0.8,
          style: {
            transition:
              "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)",
          },
        }),
        e("path", { d: "M 45,24 27,14 27,34", fill: "#fff" }),
      ],
    }),
  });
}
var Za = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 68,
    height: 48,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  $a = { position: "relative", width: "100%", height: "100%" },
  at = { textAlign: "center", minWidth: 140 },
  dr = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
var en = "framer-lH2ML",
  rn = { ACX9bYcuD: "framer-v-1tsfb5f" };
var tn = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  an = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  nn = t.create(u),
  on = ({
    height: r,
    id: a,
    star1: o,
    star2: n,
    star3: f,
    star4: g,
    star5: b,
    text: i,
    width: I,
    ...h
  }) => ({
    ...h,
    D3LBMPMda: n ?? h.D3LBMPMda ?? !0,
    EL6OHVjhu: i ?? h.EL6OHVjhu ?? "200+ Agencies Rated",
    M3Dyd2AtH: o ?? h.M3Dyd2AtH ?? !0,
    N76rLfG8r: g ?? h.N76rLfG8r ?? !0,
    OHbpr7lSd: b ?? h.OHbpr7lSd ?? !0,
    OijM7rrfw: f ?? h.OijM7rrfw ?? !0,
  }),
  sn = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  ln = H(function (r, a) {
    let { activeLocale: o, setLocale: n } = Z(),
      {
        style: f,
        className: g,
        layoutId: b,
        variant: i,
        M3Dyd2AtH: I,
        D3LBMPMda: h,
        OijM7rrfw: m,
        N76rLfG8r: C,
        OHbpr7lSd: X,
        EL6OHVjhu: A,
        ...c
      } = on(r),
      {
        baseVariant: J,
        classNames: O,
        clearLoadingGesture: S,
        gestureHandlers: q,
        gestureVariant: z,
        isLoading: _,
        setGestureState: U,
        setVariant: ie,
        variants: Y,
      } = oe({
        defaultVariant: "ACX9bYcuD",
        variant: i,
        variantClassNames: rn,
      }),
      w = sn(r, Y),
      E = F(en, ...[Qe]),
      T = B(null),
      R = K(),
      s = re();
    return e(W, {
      id: b ?? R,
      children: e(nn, {
        animate: Y,
        initial: !1,
        children: e(an, {
          value: tn,
          children: d(t.div, {
            ...c,
            ...q,
            className: F(E, "framer-1tsfb5f", g, O),
            "data-framer-name": "Primary",
            layoutDependency: w,
            layoutId: "ACX9bYcuD",
            ref: a ?? T,
            style: { ...f },
            children: [
              d(t.div, {
                className: "framer-xcgqdb",
                "data-framer-name": "Stars",
                layoutDependency: w,
                layoutId: "CngMYaquH",
                children: [
                  I &&
                    e(t.div, {
                      className: "framer-1pfwmg0",
                      "data-framer-name": "1",
                      layoutDependency: w,
                      layoutId: "x4nHbRyBY",
                      children: e(ye, {
                        className: "framer-pcws0",
                        "data-framer-name": "Star",
                        layout: "position",
                        layoutDependency: w,
                        layoutId: "JSyGRZXjc",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.049 2.927 C 9.348 2.006 10.652 2.006 10.951 2.927 L 12.021 6.219 C 12.155 6.631 12.539 6.91 12.972 6.91 L 16.433 6.91 C 17.402 6.91 17.804 8.149 17.021 8.719 L 14.22 10.753 C 13.87 11.008 13.723 11.459 13.857 11.871 L 14.927 15.163 C 15.226 16.084 14.172 16.851 13.388 16.281 L 10.588 14.247 C 10.237 13.992 9.763 13.992 9.412 14.247 L 6.612 16.281 C 5.828 16.851 4.774 16.084 5.073 15.163 L 6.143 11.871 C 6.277 11.459 6.13 11.008 5.779 10.753 L 2.979 8.719 C 2.196 8.149 2.598 6.91 3.567 6.91 L 7.028 6.91 C 7.462 6.91 7.845 6.631 7.979 6.219 Z" fill="var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))"></path></svg>',
                        svgContentId: 8874811582,
                        withExternalLayout: !0,
                      }),
                    }),
                  h &&
                    e(t.div, {
                      className: "framer-154no10",
                      "data-framer-name": "2",
                      layoutDependency: w,
                      layoutId: "Gxu0fC9Zd",
                      children: e(ye, {
                        className: "framer-1c0rwqw",
                        "data-framer-name": "Star",
                        layout: "position",
                        layoutDependency: w,
                        layoutId: "bguF4Up1S",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.049 2.927 C 9.348 2.006 10.652 2.006 10.951 2.927 L 12.021 6.219 C 12.155 6.631 12.539 6.91 12.972 6.91 L 16.433 6.91 C 17.402 6.91 17.804 8.149 17.021 8.719 L 14.22 10.753 C 13.87 11.008 13.723 11.459 13.857 11.871 L 14.927 15.163 C 15.226 16.084 14.172 16.851 13.388 16.281 L 10.588 14.247 C 10.237 13.992 9.763 13.992 9.412 14.247 L 6.612 16.281 C 5.828 16.851 4.774 16.084 5.073 15.163 L 6.143 11.871 C 6.277 11.459 6.13 11.008 5.779 10.753 L 2.979 8.719 C 2.196 8.149 2.598 6.91 3.567 6.91 L 7.028 6.91 C 7.462 6.91 7.845 6.631 7.979 6.219 Z" fill="var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))"></path></svg>',
                        svgContentId: 8874811582,
                        withExternalLayout: !0,
                      }),
                    }),
                  m &&
                    e(t.div, {
                      className: "framer-1xpr9o3",
                      "data-framer-name": "3",
                      layoutDependency: w,
                      layoutId: "DFnaXOZ9G",
                      children: e(ye, {
                        className: "framer-13i38ma",
                        "data-framer-name": "Star",
                        layout: "position",
                        layoutDependency: w,
                        layoutId: "R_JpHOekP",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.049 2.927 C 9.348 2.006 10.652 2.006 10.951 2.927 L 12.021 6.219 C 12.155 6.631 12.539 6.91 12.972 6.91 L 16.433 6.91 C 17.402 6.91 17.804 8.149 17.021 8.719 L 14.22 10.753 C 13.87 11.008 13.723 11.459 13.857 11.871 L 14.927 15.163 C 15.226 16.084 14.172 16.851 13.388 16.281 L 10.588 14.247 C 10.237 13.992 9.763 13.992 9.412 14.247 L 6.612 16.281 C 5.828 16.851 4.774 16.084 5.073 15.163 L 6.143 11.871 C 6.277 11.459 6.13 11.008 5.779 10.753 L 2.979 8.719 C 2.196 8.149 2.598 6.91 3.567 6.91 L 7.028 6.91 C 7.462 6.91 7.845 6.631 7.979 6.219 Z" fill="var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))"></path></svg>',
                        svgContentId: 8874811582,
                        withExternalLayout: !0,
                      }),
                    }),
                  C &&
                    e(t.div, {
                      className: "framer-1ljkkj1",
                      "data-framer-name": "4",
                      layoutDependency: w,
                      layoutId: "KcjPDNOon",
                      children: e(ye, {
                        className: "framer-bo5w6t",
                        "data-framer-name": "Star",
                        layout: "position",
                        layoutDependency: w,
                        layoutId: "ghAU3fP4C",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.049 2.927 C 9.348 2.006 10.652 2.006 10.951 2.927 L 12.021 6.219 C 12.155 6.631 12.539 6.91 12.972 6.91 L 16.433 6.91 C 17.402 6.91 17.804 8.149 17.021 8.719 L 14.22 10.753 C 13.87 11.008 13.723 11.459 13.857 11.871 L 14.927 15.163 C 15.226 16.084 14.172 16.851 13.388 16.281 L 10.588 14.247 C 10.237 13.992 9.763 13.992 9.412 14.247 L 6.612 16.281 C 5.828 16.851 4.774 16.084 5.073 15.163 L 6.143 11.871 C 6.277 11.459 6.13 11.008 5.779 10.753 L 2.979 8.719 C 2.196 8.149 2.598 6.91 3.567 6.91 L 7.028 6.91 C 7.462 6.91 7.845 6.631 7.979 6.219 Z" fill="var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))"></path></svg>',
                        svgContentId: 8874811582,
                        withExternalLayout: !0,
                      }),
                    }),
                  X &&
                    e(t.div, {
                      className: "framer-106sp8v",
                      "data-framer-name": "5",
                      layoutDependency: w,
                      layoutId: "uNqflDddi",
                      children: e(ye, {
                        className: "framer-12txoz1",
                        "data-framer-name": "Star",
                        layout: "position",
                        layoutDependency: w,
                        layoutId: "s6IuJ6X5D",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.049 2.927 C 9.348 2.006 10.652 2.006 10.951 2.927 L 12.021 6.219 C 12.155 6.631 12.539 6.91 12.972 6.91 L 16.433 6.91 C 17.402 6.91 17.804 8.149 17.021 8.719 L 14.22 10.753 C 13.87 11.008 13.723 11.459 13.857 11.871 L 14.927 15.163 C 15.226 16.084 14.172 16.851 13.388 16.281 L 10.588 14.247 C 10.237 13.992 9.763 13.992 9.412 14.247 L 6.612 16.281 C 5.828 16.851 4.774 16.084 5.073 15.163 L 6.143 11.871 C 6.277 11.459 6.13 11.008 5.779 10.753 L 2.979 8.719 C 2.196 8.149 2.598 6.91 3.567 6.91 L 7.028 6.91 C 7.462 6.91 7.845 6.631 7.979 6.219 Z" fill="var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))"></path></svg>',
                        svgContentId: 8874811582,
                        withExternalLayout: !0,
                      }),
                    }),
                ],
              }),
              e(t.div, {
                className: "framer-ligrzs",
                "data-framer-name": "Text",
                layoutDependency: w,
                layoutId: "j_3b2PJvc",
                children: e(y, {
                  __fromCanvasComponent: !0,
                  children: e(u, {
                    children: e(t.p, {
                      className: "framer-styles-preset-x0s9r5",
                      "data-styles-preset": "QhK6qqT5U",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))",
                      },
                      children: "200+ Agencies Rated",
                    }),
                  }),
                  className: "framer-1676tla",
                  "data-framer-name": "Text",
                  fonts: ["Inter"],
                  layoutDependency: w,
                  layoutId: "XMN21Txwn",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: A,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  dn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-lH2ML.framer-19dxl8i, .framer-lH2ML .framer-19dxl8i { display: block; }",
    ".framer-lH2ML.framer-1tsfb5f { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 180px; }",
    ".framer-lH2ML .framer-xcgqdb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-lH2ML .framer-1pfwmg0, .framer-lH2ML .framer-154no10, .framer-lH2ML .framer-1xpr9o3, .framer-lH2ML .framer-1ljkkj1, .framer-lH2ML .framer-106sp8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lH2ML .framer-pcws0, .framer-lH2ML .framer-1c0rwqw, .framer-lH2ML .framer-13i38ma, .framer-lH2ML .framer-bo5w6t, .framer-lH2ML .framer-12txoz1 { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-lH2ML .framer-ligrzs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-lH2ML .framer-1676tla { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lH2ML.framer-1tsfb5f, .framer-lH2ML .framer-xcgqdb, .framer-lH2ML .framer-1pfwmg0, .framer-lH2ML .framer-154no10, .framer-lH2ML .framer-1xpr9o3, .framer-lH2ML .framer-1ljkkj1, .framer-lH2ML .framer-106sp8v, .framer-lH2ML .framer-ligrzs { gap: 0px; } .framer-lH2ML.framer-1tsfb5f > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-lH2ML.framer-1tsfb5f > :first-child { margin-top: 0px; } .framer-lH2ML.framer-1tsfb5f > :last-child { margin-bottom: 0px; } .framer-lH2ML .framer-xcgqdb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-lH2ML .framer-xcgqdb > :first-child, .framer-lH2ML .framer-1pfwmg0 > :first-child, .framer-lH2ML .framer-154no10 > :first-child, .framer-lH2ML .framer-1xpr9o3 > :first-child, .framer-lH2ML .framer-1ljkkj1 > :first-child, .framer-lH2ML .framer-106sp8v > :first-child, .framer-lH2ML .framer-ligrzs > :first-child { margin-left: 0px; } .framer-lH2ML .framer-xcgqdb > :last-child, .framer-lH2ML .framer-1pfwmg0 > :last-child, .framer-lH2ML .framer-154no10 > :last-child, .framer-lH2ML .framer-1xpr9o3 > :last-child, .framer-lH2ML .framer-1ljkkj1 > :last-child, .framer-lH2ML .framer-106sp8v > :last-child, .framer-lH2ML .framer-ligrzs > :last-child { margin-right: 0px; } .framer-lH2ML .framer-1pfwmg0 > *, .framer-lH2ML .framer-154no10 > *, .framer-lH2ML .framer-1xpr9o3 > *, .framer-lH2ML .framer-1ljkkj1 > *, .framer-lH2ML .framer-106sp8v > *, .framer-lH2ML .framer-ligrzs > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ...Xe,
  ],
  Re = ee(ln, dn, "framer-lH2ML"),
  cr = Re;
Re.displayName = "Interactive Components/Star Rating";
Re.defaultProps = { height: 49, width: 180 };
$(Re, {
  M3Dyd2AtH: { defaultValue: !0, title: "Star 1", type: l.Boolean },
  D3LBMPMda: { defaultValue: !0, title: "Star 2", type: l.Boolean },
  OijM7rrfw: { defaultValue: !0, title: "Star 3", type: l.Boolean },
  N76rLfG8r: { defaultValue: !0, title: "Star 4", type: l.Boolean },
  OHbpr7lSd: { defaultValue: !0, title: "Star 5", type: l.Boolean },
  EL6OHVjhu: {
    defaultValue: "200+ Agencies Rated",
    displayTextArea: !0,
    title: "Text",
    type: l.String,
  },
});
te(
  Re,
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
    ...se(Be),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var mn = v(Ke),
  fn = v(be),
  cn = v(M),
  pn = v(we),
  un = v(cr),
  nt = le(de),
  hn = ["MnhhcZMrC", "loCCDxohM", "HUnPy0Idi"],
  gn = "framer-OXZlF",
  xn = {
    HUnPy0Idi: "framer-v-t3rulq",
    loCCDxohM: "framer-v-1lq7swg",
    MnhhcZMrC: "framer-v-14qodfi",
  };
function _e(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var yn = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  wn = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  bn = t.create(u),
  vn = { L: "loCCDxohM", S: "HUnPy0Idi", XL: "MnhhcZMrC" },
  In = ({
    bodyText: r,
    heading: a,
    height: o,
    icon: n,
    id: f,
    ratingText: g,
    star1: b,
    star2: i,
    star3: I,
    star4: h,
    star5: m,
    title1: C,
    title2: X,
    width: A,
    ...c
  }) => ({
    ...c,
    agE9mmcaW: a ?? c.agE9mmcaW ?? "Launch Your Site",
    CNdayUvFh: n ?? c.CNdayUvFh ?? "Acorn",
    Co6pGhn1O: C ?? c.Co6pGhn1O ?? "Launch Your Site with Reboot",
    h1srq6JYt: X ?? c.h1srq6JYt ?? "In a Minutes of Time!",
    hTxjvUcch: h ?? c.hTxjvUcch ?? !0,
    LXEGAPoN5: I ?? c.LXEGAPoN5 ?? !0,
    QkrRFggia: i ?? c.QkrRFggia ?? !0,
    tkAspsVhh: g ?? c.tkAspsVhh ?? "200+ Agencies Rated",
    variant: vn[c.variant] ?? c.variant ?? "MnhhcZMrC",
    yF5rJHa4O: m ?? c.yF5rJHa4O ?? !0,
    YNrMQMsXa: b ?? c.YNrMQMsXa ?? !0,
    ziygI5AJR:
      r ??
      c.ziygI5AJR ??
      "Build your site effortlessly and showcase your work with confidence. Ready to stand out? Get started today!",
  }),
  Cn = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  An = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        CNdayUvFh: X,
        agE9mmcaW: A,
        Co6pGhn1O: c,
        h1srq6JYt: J,
        ziygI5AJR: O,
        YNrMQMsXa: S,
        QkrRFggia: q,
        LXEGAPoN5: z,
        hTxjvUcch: _,
        yF5rJHa4O: U,
        tkAspsVhh: ie,
        ...Y
      } = In(r),
      {
        baseVariant: w,
        classNames: ae,
        clearLoadingGesture: E,
        gestureHandlers: T,
        gestureVariant: R,
        isLoading: s,
        setGestureState: N,
        setVariant: me,
        variants: fe,
      } = oe({
        cycleOrder: hn,
        defaultVariant: "MnhhcZMrC",
        ref: n,
        variant: C,
        variantClassNames: xn,
      }),
      k = Cn(r, fe),
      wr = F(gn, ...[]),
      br = () => !["loCCDxohM", "HUnPy0Idi"].includes(w);
    return e(W, {
      id: m ?? f,
      children: e(bn, {
        animate: fe,
        initial: !1,
        children: e(wn, {
          value: yn,
          children: d(t.div, {
            ...Y,
            ...T,
            className: F(wr, "framer-14qodfi", h, ae),
            "data-border": !0,
            "data-framer-name": "XL",
            layoutDependency: k,
            layoutId: "MnhhcZMrC",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-d86f1591-0c16-44cd-be10-19334dfa9293, rgba(255, 255, 255, 0.1))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...I,
            },
            variants: {
              loCCDxohM: {
                "--border-color":
                  "var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05))",
              },
            },
            ..._e(
              {
                HUnPy0Idi: { "data-framer-name": "S" },
                loCCDxohM: { "data-framer-name": "L" },
              },
              w,
              R,
            ),
            children: [
              d(t.div, {
                className: "framer-1qjr55e",
                "data-framer-name": "Light Ray",
                layoutDependency: k,
                layoutId: "wEwafaGH0",
                children: [
                  e(p, {
                    children: e(x, {
                      className: "framer-aoms6s-container",
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: "kMzLw4jOo-container",
                      nodeId: "kMzLw4jOo",
                      rendersWithMotion: !0,
                      scopeId: "W8qunUBWL",
                      style: { opacity: 0.8 },
                      children: e(Ke, {
                        animation: { animate: !0, speed: 10 },
                        height: "100%",
                        id: "kMzLw4jOo",
                        intensity: 20,
                        layoutId: "kMzLw4jOo",
                        position: 100,
                        radius: "0px",
                        rays: 30,
                        raysColor: {
                          color:
                            "var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214))",
                          color1: "rgb(255, 255, 255)",
                          color2: "rgb(255, 203, 71)",
                          mode: "single",
                        },
                        reach: 0,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1e0b3e6",
                    "data-framer-name": "Gradient Right",
                    layoutDependency: k,
                    layoutId: "mEG0MSJyw",
                    style: {
                      background:
                        "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, rgb(8, 8, 8) 100%)",
                      rotate: 90,
                    },
                  }),
                ],
              }),
              e(xe, {
                as: "figure",
                background: {
                  alt: "",
                  fit: "fill",
                  loading: ge(
                    (i?.y || 0) +
                      ((i?.height || 399) * 0.5000000000000002 -
                        ((i?.height || 399) * 1) / 2),
                  ),
                  pixelHeight: 3425,
                  pixelWidth: 5071,
                  sizes: i?.width || "100vw",
                  src: "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png",
                  srcSet:
                    "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=512 512w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=1024 1024w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=2048 2048w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=4096 4096w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png 5071w",
                },
                className: "framer-u4sob5",
                "data-framer-name": "Abstract Dots",
                layoutDependency: k,
                layoutId: "yKWq7HZuf",
                style: {
                  borderBottomLeftRadius: "100%",
                  borderBottomRightRadius: "100%",
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  opacity: 0.5,
                },
                ..._e(
                  {
                    HUnPy0Idi: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: ge(
                          (i?.y || 0) +
                            ((i?.height || 200) * 0.5000000000000002 - 390.5),
                        ),
                        pixelHeight: 3425,
                        pixelWidth: 5071,
                        sizes: i?.width || "100vw",
                        src: "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png",
                        srcSet:
                          "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=512 512w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=1024 1024w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=2048 2048w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=4096 4096w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png 5071w",
                      },
                    },
                    loCCDxohM: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: ge(
                          (i?.y || 0) +
                            ((i?.height || 779) * 0.5000000000000002 - 390.5),
                        ),
                        pixelHeight: 3425,
                        pixelWidth: 5071,
                        sizes: i?.width || "100vw",
                        src: "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png",
                        srcSet:
                          "/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=512 512w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=1024 1024w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=2048 2048w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=4096 4096w,/evo/images/1xOqMa4sAAwBCrdkiSJfIXups.png 5071w",
                      },
                    },
                  },
                  w,
                  R,
                ),
              }),
              d(t.div, {
                className: "framer-1ha2rv2",
                "data-framer-name": "Video",
                layoutDependency: k,
                layoutId: "wK_MljS7w",
                style: {
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 0,
                },
                variants: {
                  HUnPy0Idi: {
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 20,
                  },
                  loCCDxohM: {
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 20,
                  },
                },
                children: [
                  e(p, {
                    children: e(x, {
                      className: "framer-w5r4xu-container",
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: "DdredM9QN-container",
                      nodeId: "DdredM9QN",
                      rendersWithMotion: !0,
                      scopeId: "W8qunUBWL",
                      children: e(be, {
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        height: "100%",
                        id: "DdredM9QN",
                        isMixedBorderRadius: !1,
                        isRed: !0,
                        layoutId: "DdredM9QN",
                        play: "Off",
                        shouldMute: !1,
                        style: { height: "100%", width: "100%" },
                        thumbnail: "Medium Quality",
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        url: "https://www.youtube.com/shorts/TtOx87u75kY",
                        width: "100%",
                      }),
                    }),
                  }),
                  br() &&
                    e(t.div, {
                      className: "framer-14il7gh",
                      "data-framer-name": "Gradient Right",
                      layoutDependency: k,
                      layoutId: "iWKY1PTGS",
                      style: {
                        background:
                          "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, rgb(8, 8, 8) 100%)",
                        rotate: -90,
                      },
                    }),
                ],
              }),
              d(t.div, {
                className: "framer-1ffyhm",
                "data-framer-name": "Content",
                layoutDependency: k,
                layoutId: "hnlLrRPCr",
                children: [
                  d(t.div, {
                    className: "framer-dvat0b",
                    "data-framer-name": "Top",
                    layoutDependency: k,
                    layoutId: "G23G6MAt_",
                    children: [
                      e(p, {
                        height: 40,
                        y:
                          (i?.y || 0) +
                          (0 + ((i?.height || 399) - 0 - 476) / 2) +
                          30 +
                          0 +
                          0 +
                          0,
                        ..._e(
                          {
                            HUnPy0Idi: {
                              y:
                                (i?.y || 0) +
                                0 +
                                (((i?.height || 200) - 0 - 856) / 2 +
                                  300 +
                                  10) +
                                30 +
                                0 +
                                0 +
                                0,
                            },
                            loCCDxohM: {
                              y:
                                (i?.y || 0) +
                                0 +
                                (((i?.height || 779) - 0 - 856) / 2 +
                                  300 +
                                  10) +
                                30 +
                                0 +
                                0 +
                                0,
                            },
                          },
                          w,
                          R,
                        ),
                        children: e(x, {
                          className: "framer-1e8f8gc-container",
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: "Lepop0mDK-container",
                          nodeId: "Lepop0mDK",
                          rendersWithMotion: !0,
                          scopeId: "W8qunUBWL",
                          children: e(M, {
                            aZ7GvMqIl: X,
                            height: "100%",
                            id: "Lepop0mDK",
                            KS7KLFqN8: A,
                            layoutId: "Lepop0mDK",
                            rQKAY6456: "NEW",
                            variant: "axDSKQZXP",
                            width: "100%",
                            xAPRy8bad: 5,
                          }),
                        }),
                      }),
                      d(t.div, {
                        className: "framer-1dzis58",
                        "data-framer-name": "Title",
                        layoutDependency: k,
                        layoutId: "mXF9RMg57",
                        children: [
                          e(y, {
                            __fromCanvasComponent: !0,
                            children: e(u, {
                              children: e(t.h3, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "34px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-1px",
                                  "--framer-line-height": "36px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))",
                                },
                                children: "Launch Your Site with Reboot",
                              }),
                            }),
                            className: "framer-4oagc4",
                            "data-framer-name": "Text 1",
                            fonts: ["GF;DM Sans-500"],
                            layoutDependency: k,
                            layoutId: "qNuyjKBnt",
                            style: {
                              "--extracted-a0htzi":
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: c,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(y, {
                            __fromCanvasComponent: !0,
                            children: e(u, {
                              children: e(t.h3, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "34px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-1px",
                                  "--framer-line-height": "36px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))",
                                },
                                children: "In a Minutes of Time!",
                              }),
                            }),
                            className: "framer-118husp",
                            "data-framer-name": "Text 2",
                            fonts: ["GF;DM Sans-500"],
                            layoutDependency: k,
                            layoutId: "QvDzIBjh9",
                            style: {
                              "--extracted-a0htzi":
                                "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: J,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  d(t.div, {
                    className: "framer-1ky995v",
                    "data-framer-name": "Bottom",
                    layoutDependency: k,
                    layoutId: "E8AREqDX4",
                    children: [
                      d(t.div, {
                        className: "framer-1tt29zi",
                        "data-framer-name": "Points",
                        layoutDependency: k,
                        layoutId: "LCvoL4YQw",
                        children: [
                          e(t.div, {
                            className: "framer-f6v8iq",
                            "data-framer-name": "Seperator",
                            layoutDependency: k,
                            layoutId: "mpC9wKES_",
                            style: {
                              background:
                                "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                          e(t.div, {
                            className: "framer-ifmt9u",
                            "data-framer-name": "Body",
                            layoutDependency: k,
                            layoutId: "k3DNkzQ4G",
                            children: e(y, {
                              __fromCanvasComponent: !0,
                              children: e(u, {
                                children: e(t.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    "--framer-letter-spacing": "-0.2px",
                                    "--framer-line-height": "26px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                                  },
                                  children:
                                    "Build your site effortlessly and showcase your work with confidence. Ready to stand out? Get started today!",
                                }),
                              }),
                              className: "framer-yu243m",
                              "data-framer-name": "Body Text",
                              fonts: ["GF;DM Sans-regular"],
                              layoutDependency: k,
                              layoutId: "lgWRCiAyd",
                              style: {
                                "--extracted-r6o4lv":
                                  "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              text: O,
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      d(t.div, {
                        className: "framer-10zy4rf",
                        "data-framer-name": "Button/Rating",
                        layoutDependency: k,
                        layoutId: "j3sA4kjCR",
                        children: [
                          e(p, {
                            height: 46,
                            y:
                              (i?.y || 0) +
                              (0 + ((i?.height || 399) - 0 - 476) / 2) +
                              30 +
                              162 +
                              0 +
                              195 +
                              1.5,
                            ..._e(
                              {
                                HUnPy0Idi: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    (((i?.height || 200) - 0 - 856) / 2 +
                                      300 +
                                      10) +
                                    30 +
                                    162 +
                                    0 +
                                    195 +
                                    0 +
                                    0,
                                },
                                loCCDxohM: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    (((i?.height || 779) - 0 - 856) / 2 +
                                      300 +
                                      10) +
                                    30 +
                                    162 +
                                    0 +
                                    195 +
                                    0 +
                                    0,
                                },
                              },
                              w,
                              R,
                            ),
                            children: e(x, {
                              className: "framer-jd8bdq-container",
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: "KQMWKP6ta-container",
                              nodeId: "KQMWKP6ta",
                              rendersWithMotion: !0,
                              scopeId: "W8qunUBWL",
                              children: e(we, {
                                AL_NU982V: !1,
                                dlVBgpKLv: "Visit Ocular Web",
                                GT109pdEG: "https://ssdssc.com/ocular",
                                height: "100%",
                                id: "KQMWKP6ta",
                                layoutId: "KQMWKP6ta",
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
                          br() &&
                            e(t.div, {
                              className: "framer-1lhc9wc",
                              "data-framer-name": "Seperator",
                              layoutDependency: k,
                              layoutId: "TrxV_fGZV",
                              style: {
                                background:
                                  "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                                rotate: -90,
                              },
                            }),
                          e(p, {
                            height: 49,
                            y:
                              (i?.y || 0) +
                              (0 + ((i?.height || 399) - 0 - 476) / 2) +
                              30 +
                              162 +
                              0 +
                              195 +
                              0,
                            ..._e(
                              {
                                HUnPy0Idi: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    (((i?.height || 200) - 0 - 856) / 2 +
                                      300 +
                                      10) +
                                    30 +
                                    162 +
                                    0 +
                                    195 +
                                    0 +
                                    70,
                                },
                                loCCDxohM: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    (((i?.height || 779) - 0 - 856) / 2 +
                                      300 +
                                      10) +
                                    30 +
                                    162 +
                                    0 +
                                    195 +
                                    0 +
                                    70,
                                },
                              },
                              w,
                              R,
                            ),
                            children: e(x, {
                              className: "framer-6g6av0-container",
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: "EJJZqsN_w-container",
                              nodeId: "EJJZqsN_w",
                              rendersWithMotion: !0,
                              scopeId: "W8qunUBWL",
                              children: e(cr, {
                                D3LBMPMda: q,
                                EL6OHVjhu: ie,
                                height: "100%",
                                id: "EJJZqsN_w",
                                layoutId: "EJJZqsN_w",
                                M3Dyd2AtH: S,
                                N76rLfG8r: _,
                                OHbpr7lSd: U,
                                OijM7rrfw: z,
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  kn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-OXZlF.framer-16i3ul7, .framer-OXZlF .framer-16i3ul7 { display: block; }",
    ".framer-OXZlF.framer-14qodfi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 0px; position: relative; width: 1200px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-OXZlF .framer-1qjr55e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: -66px; width: min-content; }",
    ".framer-OXZlF .framer-aoms6s-container { flex: none; height: 464px; position: relative; width: 653px; }",
    ".framer-OXZlF .framer-1e0b3e6 { flex: none; height: 38%; left: -203px; overflow: hidden; position: absolute; top: 111px; width: 89%; }",
    ".framer-OXZlF .framer-u4sob5 { flex: none; height: 100%; left: calc(77.50000000000003% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }",
    ".framer-OXZlF .framer-1ha2rv2 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-OXZlF .framer-w5r4xu-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-14il7gh { flex: none; height: 44%; overflow: hidden; position: absolute; right: -186px; top: calc(49.73958333333336% - 44.01041666666667% / 2); width: 100%; }",
    ".framer-OXZlF .framer-1ffyhm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 30px 0px 40px 0px; position: relative; width: 1px; }",
    ".framer-OXZlF .framer-dvat0b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-1e8f8gc-container, .framer-OXZlF .framer-jd8bdq-container, .framer-OXZlF .framer-6g6av0-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-OXZlF .framer-1dzis58 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-4oagc4, .framer-OXZlF .framer-118husp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-OXZlF .framer-1ky995v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-1tt29zi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-f6v8iq { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-OXZlF .framer-ifmt9u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-yu243m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OXZlF .framer-10zy4rf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-OXZlF .framer-1lhc9wc { flex: none; height: 1px; position: relative; width: 40px; }",
    ".framer-OXZlF.framer-v-1lq7swg.framer-14qodfi { flex-direction: column; gap: 10px; padding: 0px; width: 810px; }",
    ".framer-OXZlF.framer-v-1lq7swg .framer-1qjr55e { top: 300px; }",
    ".framer-OXZlF.framer-v-1lq7swg .framer-u4sob5 { height: 781px; top: calc(50.00000000000002% - 781px / 2); }",
    ".framer-OXZlF.framer-v-1lq7swg .framer-1ha2rv2 { align-self: unset; flex: none; height: 300px; width: 100%; }",
    ".framer-OXZlF.framer-v-1lq7swg .framer-1ffyhm { flex: none; max-width: unset; padding: 30px 40px 40px 40px; width: 100%; }",
    ".framer-OXZlF.framer-v-1lq7swg .framer-10zy4rf, .framer-OXZlF.framer-v-t3rulq .framer-10zy4rf { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; }",
    ".framer-OXZlF.framer-v-t3rulq.framer-14qodfi { flex-direction: column; gap: 10px; padding: 0px; width: 390px; }",
    ".framer-OXZlF.framer-v-t3rulq .framer-1qjr55e { order: 0; top: 301px; width: 100%; }",
    ".framer-OXZlF.framer-v-t3rulq .framer-aoms6s-container { flex: 1 0 0px; width: 1px; }",
    ".framer-OXZlF.framer-v-t3rulq .framer-u4sob5 { height: 781px; order: 1; top: calc(50.00000000000002% - 781px / 2); }",
    ".framer-OXZlF.framer-v-t3rulq .framer-1ha2rv2 { align-self: unset; flex: none; height: 300px; order: 2; overflow: visible; width: 100%; will-change: unset; }",
    ".framer-OXZlF.framer-v-t3rulq .framer-1ffyhm { flex: none; order: 3; padding: 30px 20px 40px 20px; width: 100%; }",
    '.framer-OXZlF[data-border="true"]::after, .framer-OXZlF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Te = ee(An, kn, "framer-OXZlF"),
  pr = Te;
Te.displayName = "Video Card 2";
Te.defaultProps = { height: 399, width: 1200 };
$(Te, {
  variant: {
    options: ["MnhhcZMrC", "loCCDxohM", "HUnPy0Idi"],
    optionTitles: ["XL", "L", "S"],
    title: "Variant",
    type: l.Enum,
  },
  CNdayUvFh: nt?.aZ7GvMqIl && {
    ...nt.aZ7GvMqIl,
    defaultValue: "Acorn",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  agE9mmcaW: {
    defaultValue: "Launch Your Site",
    displayTextArea: !0,
    title: "Heading",
    type: l.String,
  },
  Co6pGhn1O: {
    defaultValue: "Launch Your Site with Reboot",
    displayTextArea: !1,
    title: "Title 1",
    type: l.String,
  },
  h1srq6JYt: {
    defaultValue: "In a Minutes of Time!",
    displayTextArea: !1,
    title: "Title 2",
    type: l.String,
  },
  ziygI5AJR: {
    defaultValue:
      "Build your site effortlessly and showcase your work with confidence. Ready to stand out? Get started today!",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  YNrMQMsXa: { defaultValue: !0, title: "Star 1", type: l.Boolean },
  QkrRFggia: { defaultValue: !0, title: "Star 2", type: l.Boolean },
  LXEGAPoN5: { defaultValue: !0, title: "Star 3", type: l.Boolean },
  hTxjvUcch: { defaultValue: !0, title: "Star 4", type: l.Boolean },
  yF5rJHa4O: { defaultValue: !0, title: "Star 5", type: l.Boolean },
  tkAspsVhh: {
    defaultValue: "200+ Agencies Rated",
    displayTextArea: !0,
    title: "Rating Text",
    type: l.String,
  },
});
te(
  Te,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
    ...mn,
    ...fn,
    ...cn,
    ...pn,
    ...un,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Sn = v(j),
  Nn = v(M),
  ot = le(j),
  Fn = ["K_cBXGIGO", "RzKcg4sYR"],
  Rn = "framer-XhQuD",
  _n = { K_cBXGIGO: "framer-v-kgxp61", RzKcg4sYR: "framer-v-1mgirb9" };
function Tn(r, ...a) {
  let o = {};
  return (a?.forEach((n) => n && Object.assign(o, r[n])), o);
}
var Pn = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Mn = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  Dn = ({ value: r, children: a }) => {
    let o = ne(P),
      n = r ?? o.transition,
      f = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: f, children: a });
  },
  Vn = t.create(u),
  Ln = { Primary: "K_cBXGIGO", Secondary: "RzKcg4sYR" },
  Bn = ({
    bodyText: r,
    height: a,
    icon: o,
    id: n,
    padding: f,
    phase: g,
    tag1: b,
    tag2: i,
    title: I,
    width: h,
    ...m
  }) => ({
    ...m,
    bw8wnPVJ6: f ?? m.bw8wnPVJ6 ?? "30px",
    lpNYR5mgd: I ?? m.lpNYR5mgd ?? "Innovate Smarter Lead Faster",
    pgcwfQDhU: g ?? m.pgcwfQDhU ?? "Discovery",
    QiBV5Bs5w: i ?? m.QiBV5Bs5w ?? "Discovery",
    sq6e4rlJt:
      r ??
      m.sq6e4rlJt ??
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    TP1crxvPO: b ?? m.TP1crxvPO ?? "Discovery",
    tuSNNK56X: o ?? m.tuSNNK56X ?? "Carrot",
    variant: Ln[m.variant] ?? m.variant ?? "K_cBXGIGO",
  }),
  Xn = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Qn = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      {
        style: I,
        className: h,
        layoutId: m,
        variant: C,
        tuSNNK56X: X,
        pgcwfQDhU: A,
        lpNYR5mgd: c,
        sq6e4rlJt: J,
        TP1crxvPO: O,
        QiBV5Bs5w: S,
        bw8wnPVJ6: q,
        ...z
      } = Bn(r),
      {
        baseVariant: _,
        classNames: U,
        clearLoadingGesture: ie,
        gestureHandlers: Y,
        gestureVariant: w,
        isLoading: ae,
        setGestureState: E,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: Fn,
        defaultVariant: "K_cBXGIGO",
        ref: n,
        variant: C,
        variantClassNames: _n,
      }),
      s = Xn(r, R),
      me = F(Rn, ...[]),
      fe = () => _ !== "RzKcg4sYR",
      k = () => _ === "RzKcg4sYR";
    return e(W, {
      id: m ?? f,
      children: e(Vn, {
        animate: R,
        initial: !1,
        children: e(Dn, {
          value: Pn,
          children: e(t.div, {
            ...z,
            ...Y,
            className: F(me, "framer-kgxp61", h, U),
            "data-border": !0,
            "data-framer-name": "Primary",
            layoutDependency: s,
            layoutId: "K_cBXGIGO",
            ref: n,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow:
                "0px 0.6021873017743928px 1.3248120639036642px -0.5833333333333333px rgba(0, 0, 0, 0.09), 0px 2.288533303243457px 5.034773267135606px -1.1666666666666665px rgba(0, 0, 0, 0.1), 0px 10px 22px -1.75px rgba(0, 0, 0, 0.16)",
              ...I,
            },
            ...Tn({ RzKcg4sYR: { "data-framer-name": "Secondary" } }, _, w),
            children: d(t.div, {
              className: "framer-1787lp7",
              "data-border": !0,
              "data-framer-name": "Container",
              layoutDependency: s,
              layoutId: "BQV1oFCMT",
              style: {
                "--1hiqksj": Mn(q),
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              },
              children: [
                e(t.div, {
                  className: "framer-tdggpd",
                  "data-framer-name": "Shadow",
                  layoutDependency: s,
                  layoutId: "nbBoqrFMo",
                  style: {
                    background:
                      "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                    boxShadow:
                      "inset 0px 10px 5px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                  },
                }),
                d(t.div, {
                  className: "framer-4tlx9m",
                  "data-framer-name": "Icon/Tag",
                  layoutDependency: s,
                  layoutId: "bumvfEFkM",
                  children: [
                    d(t.div, {
                      className: "framer-1oeweig",
                      "data-border": !0,
                      "data-framer-name": "Icon",
                      layoutDependency: s,
                      layoutId: "pWFQFT9xH",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(0, 85, 255, 0.15))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow:
                          "0px 0.3613123810646357px 1.083937143193907px -0.5px rgba(79, 26, 214, 0.08), 0px 1.3731199819460742px 4.119359945838223px -1px rgba(79, 26, 214, 0.1), 0px 6px 18px -1.5px rgba(79, 26, 214, 0.18), inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08)",
                      },
                      children: [
                        e(t.div, {
                          className: "framer-1ljk1vf",
                          "data-framer-name": "Shadow",
                          layoutDependency: s,
                          layoutId: "eDmthDk9w",
                          style: {
                            background:
                              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
                            boxShadow:
                              "inset 0px 10px 10px -1px var(--token-f5219c3a-5ee2-4639-9e23-4bdcf5509ebd, rgba(79, 26, 214, 0.15))",
                          },
                        }),
                        e(p, {
                          children: e(x, {
                            className: "framer-1q6cgti-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: s,
                            layoutId: "SGd4_T7l7-container",
                            nodeId: "SGd4_T7l7",
                            rendersWithMotion: !0,
                            scopeId: "zxPP2KSkv",
                            children: e(j, {
                              color:
                                "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                              height: "100%",
                              iconSearch: "House",
                              iconSelection: X,
                              id: "SGd4_T7l7",
                              layoutId: "SGd4_T7l7",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(p, {
                      height: 40,
                      children: e(x, {
                        className: "framer-1n7kpkz-container",
                        isModuleExternal: !0,
                        layoutDependency: s,
                        layoutId: "iSbn_cwZG-container",
                        nodeId: "iSbn_cwZG",
                        rendersWithMotion: !0,
                        scopeId: "zxPP2KSkv",
                        children: e(M, {
                          aZ7GvMqIl: "Acorn",
                          height: "100%",
                          id: "iSbn_cwZG",
                          KS7KLFqN8: A,
                          layoutId: "iSbn_cwZG",
                          rQKAY6456: "NEW",
                          variant: "gNstPdAkh",
                          width: "100%",
                          xAPRy8bad: 0,
                        }),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-b9ivs4",
                  "data-framer-name": "Content",
                  layoutDependency: s,
                  layoutId: "mxuRWPn1y",
                  children: d(t.div, {
                    className: "framer-6svqte",
                    "data-framer-name": "Inner Content",
                    layoutDependency: s,
                    layoutId: "YDqpwFix4",
                    children: [
                      e(t.div, {
                        className: "framer-1uv83v1",
                        "data-framer-name": "Title",
                        layoutDependency: s,
                        layoutId: "xzhaFDLYr",
                        children: e(y, {
                          __fromCanvasComponent: !0,
                          children: e(u, {
                            children: e(t.h4, {
                              style: {
                                "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                                "--framer-font-family":
                                  '"DM Sans", "DM Sans Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.5px",
                                "--framer-line-height": "26px",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))",
                              },
                              children: "Innovate Smarter Lead Faster",
                            }),
                          }),
                          className: "framer-55gdhm",
                          "data-framer-name": "Text",
                          fonts: ["GF;DM Sans-500"],
                          layoutDependency: s,
                          layoutId: "jqEY3Mtgg",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          text: c,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(t.div, {
                        className: "framer-1qabeqi",
                        "data-framer-name": "Seperator",
                        layoutDependency: s,
                        layoutId: "rmXwMBfeb",
                        style: {
                          background:
                            "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
                        },
                      }),
                      e(y, {
                        __fromCanvasComponent: !0,
                        children: e(u, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-letter-spacing": "-0.2px",
                              "--framer-line-height": "26px",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5)))",
                            },
                            children:
                              "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
                          }),
                        }),
                        className: "framer-16asxl2",
                        "data-framer-name": "Body Text",
                        fonts: ["GF;DM Sans-regular"],
                        layoutDependency: s,
                        layoutId: "fwqwEYkBt",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-d2ee1de5-88f8-41d7-8642-338767096a94, rgba(255, 255, 255, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: J,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                fe() &&
                  d(t.div, {
                    className: "framer-2wut8g",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "FB0j3ymK0",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-12p0p0x-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "DuGijiJHp-container",
                          nodeId: "DuGijiJHp",
                          rendersWithMotion: !0,
                          scopeId: "zxPP2KSkv",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "DuGijiJHp",
                            KS7KLFqN8: O,
                            layoutId: "DuGijiJHp",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-11eyr7m-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "NmFXE_A2E-container",
                          nodeId: "NmFXE_A2E",
                          rendersWithMotion: !0,
                          scopeId: "zxPP2KSkv",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "NmFXE_A2E",
                            KS7KLFqN8: S,
                            layoutId: "NmFXE_A2E",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                k() &&
                  d(t.div, {
                    className: "framer-1jvm2yh",
                    "data-framer-name": "Tags",
                    layoutDependency: s,
                    layoutId: "pOAgR8DPv",
                    children: [
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-gbvjk-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "XivwA48oT-container",
                          nodeId: "XivwA48oT",
                          rendersWithMotion: !0,
                          scopeId: "zxPP2KSkv",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "XivwA48oT",
                            KS7KLFqN8: O,
                            layoutId: "XivwA48oT",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
                      }),
                      e(p, {
                        height: 40,
                        children: e(x, {
                          className: "framer-1unxzd2-container",
                          isModuleExternal: !0,
                          layoutDependency: s,
                          layoutId: "iyXuHYjSf-container",
                          nodeId: "iyXuHYjSf",
                          rendersWithMotion: !0,
                          scopeId: "zxPP2KSkv",
                          children: e(M, {
                            aZ7GvMqIl: "Acorn",
                            height: "100%",
                            id: "iyXuHYjSf",
                            KS7KLFqN8: S,
                            layoutId: "iyXuHYjSf",
                            rQKAY6456: "NEW",
                            variant: "KsCSAInQk",
                            width: "100%",
                            xAPRy8bad: 0,
                          }),
                        }),
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
  Un = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XhQuD.framer-j7ruef, .framer-XhQuD .framer-j7ruef { display: block; }",
    ".framer-XhQuD.framer-kgxp61 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px; position: relative; width: 478px; }",
    ".framer-XhQuD .framer-1787lp7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1hiqksj); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-XhQuD .framer-tdggpd { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-XhQuD .framer-4tlx9m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-XhQuD .framer-1oeweig { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-XhQuD .framer-1ljk1vf { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-XhQuD .framer-1q6cgti-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-XhQuD .framer-1n7kpkz-container, .framer-XhQuD .framer-12p0p0x-container, .framer-XhQuD .framer-11eyr7m-container, .framer-XhQuD .framer-gbvjk-container, .framer-XhQuD .framer-1unxzd2-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-XhQuD .framer-b9ivs4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XhQuD .framer-6svqte { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; max-width: 520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XhQuD .framer-1uv83v1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-XhQuD .framer-55gdhm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-XhQuD .framer-1qabeqi { flex: none; height: 1px; position: relative; width: 230px; }",
    ".framer-XhQuD .framer-16asxl2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-XhQuD .framer-2wut8g, .framer-XhQuD .framer-1jvm2yh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-XhQuD.framer-v-1mgirb9 .framer-tdggpd { order: 0; }",
    ".framer-XhQuD.framer-v-1mgirb9 .framer-4tlx9m { order: 1; }",
    ".framer-XhQuD.framer-v-1mgirb9 .framer-b9ivs4 { order: 2; }",
    ".framer-XhQuD.framer-v-1mgirb9 .framer-1jvm2yh { order: 4; }",
    '.framer-XhQuD[data-border="true"]::after, .framer-XhQuD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Pe = ee(Qn, Un, "framer-XhQuD"),
  ur = Pe;
Pe.displayName = "About Card 3";
Pe.defaultProps = { height: 363, width: 478 };
$(Pe, {
  variant: {
    options: ["K_cBXGIGO", "RzKcg4sYR"],
    optionTitles: ["Primary", "Secondary"],
    title: "Variant",
    type: l.Enum,
  },
  tuSNNK56X: ot?.iconSelection && {
    ...ot.iconSelection,
    defaultValue: "Carrot",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  pgcwfQDhU: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Phase",
    type: l.String,
  },
  lpNYR5mgd: {
    defaultValue: "Innovate Smarter Lead Faster",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  sq6e4rlJt: {
    defaultValue:
      "We believe in innovation that drives real impact. Our AI-powered solutions help businesses evolve, and stay ahead in a world.",
    displayTextArea: !0,
    title: "Body Text",
    type: l.String,
  },
  TP1crxvPO: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 1",
    type: l.String,
  },
  QiBV5Bs5w: {
    defaultValue: "Discovery",
    displayTextArea: !0,
    title: "Tag 2",
    type: l.String,
  },
  bw8wnPVJ6: { defaultValue: "30px", title: "Padding", type: l.Padding },
});
te(
  Pe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
    ...Sn,
    ...Nn,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var jn = v(We),
  On = Ar(t.div),
  hr = ve(xe),
  qn = v(de),
  En = v(ue),
  ce = ve(he),
  Yn = v(rr),
  zn = v(er),
  Gn = v(ar),
  Jn = v(ur),
  Hn = v(tr),
  Kn = v(pr),
  Wn = v($e),
  Zn = v(Ze),
  $n = {
    CWwXHLaFa: "(min-width: 1083px) and (max-width: 1271px)",
    Pk4GYtNgH: "(min-width: 1272px)",
    VGLbQoXBe: "(max-width: 1082px)",
  },
  Ye = () => typeof document < "u",
  eo = "framer-IAxQr",
  ro = {
    CWwXHLaFa: "framer-v-1w55g6r",
    Pk4GYtNgH: "framer-v-1c1wts4",
    VGLbQoXBe: "framer-v-1u2oqt1",
  },
  xr = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  yr = { damping: 50, delay: 0.05, mass: 1, stiffness: 300, type: "spring" },
  to = {
    effect: xr,
    repeat: !1,
    startDelay: 0.9,
    tokenization: "word",
    transition: yr,
    trigger: "onMount",
    type: "appear",
  },
  ao = { damping: 60, delay: 1.1, mass: 1, stiffness: 200, type: "spring" },
  no = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ao,
    x: 0,
    y: 0,
  },
  oo = {
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
  it = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  gr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -25,
  },
  io = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: "tween" },
  ze = {
    effect: xr,
    repeat: !1,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "word",
    transition: yr,
    trigger: "onInView",
    type: "appear",
  },
  Ge = {
    effect: xr,
    repeat: !1,
    startDelay: 0.2,
    threshold: 0.5,
    tokenization: "word",
    transition: yr,
    trigger: "onInView",
    type: "appear",
  },
  so = ({ value: r }) =>
    Sr()
      ? null
      : e("style", {
          dangerouslySetInnerHTML: { __html: r },
          "data-framer-html-style": "",
        }),
  lo = { L: "Pk4GYtNgH", M: "CWwXHLaFa", S: "VGLbQoXBe" },
  mo = ({ height: r, id: a, width: o, ...n }) => ({
    ...n,
    variant: lo[n.variant] ?? n.variant ?? "Pk4GYtNgH",
  }),
  fo = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  co = {
    alignment: "center",
    component: Ze,
    offset: { x: 0, y: 0 },
    placement: "bottom",
    transition: fo,
    variant: "VKeZmVTKZ",
  },
  po = H(function (r, a) {
    let o = B(null),
      n = a ?? o,
      f = K(),
      { activeLocale: g, setLocale: b } = Z(),
      i = re(),
      { style: I, className: h, layoutId: m, variant: C, ...X } = mo(r),
      A = Q(() => Jr(void 0, g), [void 0, g]);
    Ir(A);
    let [c, J] = Rr(C, $n, !1),
      O = void 0,
      q = F(eo, ...[Oe, Pr]),
      z = () => (Ye() ? c !== "CWwXHLaFa" : !0),
      _ = Ve("xgC_85XdF"),
      U = B(null),
      ie = () => !Ye() || c === "VGLbQoXBe",
      Y = () => (Ye() ? c !== "VGLbQoXBe" : !0),
      w = () => !Ye() || c === "CWwXHLaFa",
      ae = Ve("Am5BXkLGW"),
      E = B(null),
      T = Ve("CIlLf4V3d"),
      R = B(null);
    return (
      kr({ "1bf4dyq": co }),
      e(Cr.Provider, {
        value: { primaryVariantId: "Pk4GYtNgH", variantClassNames: ro },
        children: d(W, {
          id: m ?? f,
          children: [
            e(so, {
              value:
                "html body { background: var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, rgb(0, 0, 0)); }",
            }),
            d(t.div, {
              ...X,
              className: F(q, "framer-1c1wts4", h),
              "data-framer-cursor": "1bf4dyq",
              ref: n,
              style: { ...I },
              children: [
                d("section", {
                  className: "framer-1rsusfa",
                  "data-framer-name": "Hero",
                  children: [
                    e("div", {
                      className: "framer-rphf9s",
                      "data-framer-name": "Spacer",
                    }),
                    d("div", {
                      className: "framer-1kga82q",
                      "data-framer-name": "Container",
                      children: [
                        e("div", {
                          className: "framer-163cnt8",
                          "data-framer-name": "Gradient Bottom",
                        }),
                        e("div", {
                          className: "framer-zz34dl",
                          "data-framer-name": "Particles ",
                          children: e("div", {
                            className: "framer-1jt0gku",
                            "data-framer-name": "Vignette",
                          }),
                        }),
                        d("div", {
                          className: "framer-1ghkv7v",
                          "data-framer-name": "Top",
                          children: [
                            d("div", {
                              className: "framer-rpcq1d",
                              "data-framer-name": "Text/Tag",
                              children: [
                                e("div", {
                                  className: "framer-u3q236",
                                  "data-framer-name": "Tag & Title",
                                  children: e("div", {
                                    className: "framer-7ta2jd",
                                    "data-framer-name": "Title",
                                    children: e(G, {
                                      breakpoint: c,
                                      overrides: {
                                        CWwXHLaFa: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            pixelHeight: 2e3,
                                            pixelWidth: 3e3,
                                            sizes: "713px",
                                            src: "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png",
                                            srcSet:
                                              "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=512 512w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=1024 1024w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=2048 2048w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png 3000w",
                                          },
                                        },
                                        VGLbQoXBe: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: ge(
                                              (i?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                110 +
                                                8 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 2e3,
                                            pixelWidth: 3e3,
                                            sizes: `min(min(${i?.width || "100vw"}, 1440px) - 60px, 900px)`,
                                            src: "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png",
                                            srcSet:
                                              "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=512 512w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=1024 1024w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=2048 2048w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png 3000w",
                                          },
                                        },
                                      },
                                      children: e(xe, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 2e3,
                                          pixelWidth: 3e3,
                                          sizes: "978px",
                                          src: "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png",
                                          srcSet:
                                            "/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=512 512w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=1024 1024w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png?scale-down-to=2048 2048w,/evo/images/eXbutMgBG09OZHb5YAXrP74mho.png 3000w",
                                        },
                                        className: "framer-yaqurt",
                                      }),
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-yivnwz",
                                  "data-framer-name": "Body",
                                  children: e(G, {
                                    breakpoint: c,
                                    overrides: {
                                      VGLbQoXBe: {
                                        children: e(u, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-x0s9r5",
                                            "data-styles-preset": "QhK6qqT5U",
                                            style: {
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                            },
                                            children:
                                              "Srilankas'  First ever Inter School Fully Tech Powerd Quiz Showdown Brought You By The SCIENCE SOCIETY OF D.S Senanayake College",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(y, {
                                      __fromCanvasComponent: !0,
                                      children: e(u, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-x0s9r5",
                                          "data-styles-preset": "QhK6qqT5U",
                                          style: {
                                            "--framer-text-alignment": "center",
                                          },
                                          children:
                                            "Srilankas'  First ever Inter School Fully Tech Powerd Quiz Showdown Brought You By The SCIENCE SOCIETY OF D.S Senanayake College",
                                        }),
                                      }),
                                      className: "framer-1vrh7ia",
                                      "data-framer-name": "Text",
                                      effect: to,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            e(On, {
                              animate: no,
                              className: "framer-2g87xj",
                              "data-framer-appear-id": "2g87xj",
                              "data-framer-name": "Buttons",
                              initial: oo,
                              optimized: !0,
                              children: e(G, {
                                breakpoint: c,
                                overrides: {
                                  VGLbQoXBe: {
                                    y:
                                      (i?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      110 +
                                      8 +
                                      0 +
                                      0 +
                                      308 +
                                      0,
                                  },
                                },
                                children: e(p, {
                                  height: 46,
                                  children: e(he, {
                                    className: "framer-58hlra-container",
                                    nodeId: "HIAb4YD9n",
                                    scopeId: "hetOMwTYW",
                                    children: e(We, {
                                      AL_NU982V: !1,
                                      dlVBgpKLv: "Register your School",
                                      GT109pdEG: "https://ssdssc.com/register",
                                      height: "100%",
                                      id: "HIAb4YD9n",
                                      layoutId: "HIAb4YD9n",
                                      SD1BGlGhK: !0,
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
                            z() &&
                              d("section", {
                                className: "framer-acizr8 hidden-1w55g6r",
                                "data-framer-name": "About 1",
                                id: _,
                                ref: U,
                                children: [
                                  e("div", {
                                    className: "framer-73ra7e",
                                    "data-framer-name": "Line",
                                  }),
                                  ie() &&
                                    e(G, {
                                      breakpoint: c,
                                      overrides: {
                                        VGLbQoXBe: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: ge(
                                              (i?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                110 +
                                                8 +
                                                0 +
                                                0 +
                                                404 +
                                                51 +
                                                0,
                                            ),
                                            pixelHeight: 616,
                                            pixelWidth: 485,
                                            sizes: "240px",
                                            src: "/evo/images/mUXzmipa6FSedtlQJI0v2ohDvE.png",
                                            srcSet:
                                              "/evo/images/mUXzmipa6FSedtlQJI0v2ohDvE.png 485w",
                                          },
                                        },
                                      },
                                      children: e(hr, {
                                        __framer__loop: gr,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !1,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "mirror",
                                        __framer__loopTransition: it,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 616,
                                          pixelWidth: 485,
                                          src: "/evo/images/mUXzmipa6FSedtlQJI0v2ohDvE.png",
                                          srcSet:
                                            "/evo/images/mUXzmipa6FSedtlQJI0v2ohDvE.png 485w",
                                        },
                                        className:
                                          "framer-176tsza hidden-1c1wts4",
                                      }),
                                    }),
                                  Y() &&
                                    d("div", {
                                      className:
                                        "framer-1yqb5w4 hidden-1u2oqt1",
                                      "data-framer-name": "Container",
                                      children: [
                                        e(hr, {
                                          __framer__loop: gr,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: "mirror",
                                          __framer__loopTransition: io,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: "",
                                            fit: "fit",
                                            pixelHeight: 616,
                                            pixelWidth: 463,
                                            positionX: "center",
                                            positionY: "top",
                                            sizes: `min(max((min(min(min(min(${i?.width || "100vw"}, 1440px) - 160px, 980px) * 1.3, 1440px) - 160px, 1200px) - 36px) / 2, 1px), 440px)`,
                                            src: "/evo/images/D2Dx5MiGs4RJlRrYE8cPIlUer1g.png?lossless=1",
                                            srcSet:
                                              "/evo/images/D2Dx5MiGs4RJlRrYE8cPIlUer1g.png?lossless=1 463w",
                                          },
                                          className: "framer-1yggd6c",
                                          "data-framer-name": "Mockup Image",
                                        }),
                                        d("div", {
                                          className: "framer-1k6no6z",
                                          "data-framer-name": "Left",
                                          children: [
                                            d("div", {
                                              className: "framer-gc6e5w",
                                              "data-framer-name": "Top",
                                              children: [
                                                e(p, {
                                                  height: 40,
                                                  children: e(he, {
                                                    className:
                                                      "framer-1it9htr-container",
                                                    nodeId: "d8OJ2om2J",
                                                    scopeId: "hetOMwTYW",
                                                    children: e(de, {
                                                      aZ7GvMqIl:
                                                        "FingerprintSimple",
                                                      height: "100%",
                                                      id: "d8OJ2om2J",
                                                      KS7KLFqN8:
                                                        "Event Timeline ",
                                                      layoutId: "d8OJ2om2J",
                                                      rQKAY6456: "NEW",
                                                      variant: "axDSKQZXP",
                                                      width: "100%",
                                                      xAPRy8bad: 0,
                                                    }),
                                                  }),
                                                }),
                                                d("div", {
                                                  className: "framer-zh7hcm",
                                                  "data-framer-name": "Title",
                                                  children: [
                                                    e(y, {
                                                      __fromCanvasComponent: !0,
                                                      children: e(u, {
                                                        children: e("h2", {
                                                          className:
                                                            "framer-styles-preset-190xti5",
                                                          "data-styles-preset":
                                                            "QuTNz53Yy",
                                                          children:
                                                            "Evolvion Event map",
                                                        }),
                                                      }),
                                                      className:
                                                        "framer-1rkmnc5",
                                                      "data-framer-name":
                                                        "Text 1",
                                                      effect: ze,
                                                      fonts: ["Inter"],
                                                      verticalAlignment: "top",
                                                      withExternalLayout: !0,
                                                    }),
                                                    e(y, {
                                                      __fromCanvasComponent: !0,
                                                      children: e(u, {
                                                        children: e("h2", {
                                                          className:
                                                            "framer-styles-preset-190xti5",
                                                          "data-styles-preset":
                                                            "QuTNz53Yy",
                                                          style: {
                                                            "--framer-text-color":
                                                              "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                                          },
                                                          children:
                                                            "With Four Stages ",
                                                        }),
                                                      }),
                                                      className:
                                                        "framer-26upl3",
                                                      "data-framer-name":
                                                        "Text 2",
                                                      effect: Ge,
                                                      fonts: ["Inter"],
                                                      verticalAlignment: "top",
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                e(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(u, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-x0s9r5",
                                                      "data-styles-preset":
                                                        "QhK6qqT5U",
                                                      style: {
                                                        "--framer-text-alignment":
                                                          "left",
                                                      },
                                                      children:
                                                        "Navigate Evolvion \u201925 with ease \u2014 your map to the ultimate tech-powered quiz showdown, from first buzz to grand finale.",
                                                    }),
                                                  }),
                                                  className: "framer-t86one",
                                                  "data-framer-name": "Text",
                                                  fonts: ["Inter"],
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            d("div", {
                                              className: "framer-19pjarz",
                                              "data-framer-name": "Bottom",
                                              children: [
                                                e(p, {
                                                  height: 363,
                                                  width: `min(max((min(min(min(min(${i?.width || "100vw"}, 1440px) - 160px, 980px) * 1.3, 1440px) - 160px, 1200px) - 36px) / 2, 1px), 700px)`,
                                                  children: e(ce, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stiffness: 300,
                                                      type: "spring",
                                                    },
                                                    __framer__styleTransformEffectEnabled:
                                                      !0,
                                                    __framer__transformTargets:
                                                      [
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 0.9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                      ],
                                                    __framer__transformTrigger:
                                                      "onInView",
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className:
                                                      "framer-1qzyqcj-container",
                                                    nodeId: "hVuN3k36H",
                                                    rendersWithMotion: !0,
                                                    scopeId: "hetOMwTYW",
                                                    children: e(ue, {
                                                      bw8wnPVJ6: "30px",
                                                      height: "100%",
                                                      id: "hVuN3k36H",
                                                      layoutId: "hVuN3k36H",
                                                      lpNYR5mgd:
                                                        "Moment | Online Quiz Round",
                                                      pgcwfQDhU: "PHASE 01",
                                                      QiBV5Bs5w: "50+ teams",
                                                      sq6e4rlJt: `Phase One of Evolvian kicks off with Moment \u2014 a fully online inter-school battle of intellect.
Over 30 schools connect through SSDSSC\u2019s custom-built quiz platform, competing live in real time to secure a place among the Top 10 teams.`,
                                                      style: { width: "100%" },
                                                      TP1crxvPO:
                                                        "powerd with quiz app",
                                                      tuSNNK56X: "Star",
                                                      variant: "CeXTt6Kst",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(p, {
                                                  height: 363,
                                                  width: `min(max((min(min(min(min(${i?.width || "100vw"}, 1440px) - 160px, 980px) * 1.3, 1440px) - 160px, 1200px) - 36px) / 2, 1px), 700px)`,
                                                  children: e(ce, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stiffness: 300,
                                                      type: "spring",
                                                    },
                                                    __framer__styleTransformEffectEnabled:
                                                      !0,
                                                    __framer__transformTargets:
                                                      [
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 0.9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                      ],
                                                    __framer__transformTrigger:
                                                      "onInView",
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className:
                                                      "framer-9od5ha-container",
                                                    nodeId: "H0w49BUps",
                                                    rendersWithMotion: !0,
                                                    scopeId: "hetOMwTYW",
                                                    children: e(ue, {
                                                      bw8wnPVJ6: "30px",
                                                      height: "100%",
                                                      id: "H0w49BUps",
                                                      layoutId: "H0w49BUps",
                                                      lpNYR5mgd:
                                                        "Knockouts | On-Site Quiz Showdown",
                                                      pgcwfQDhU: "PHASE 02",
                                                      QiBV5Bs5w: "Rapid app",
                                                      sq6e4rlJt: `Held at our school premises, this on-ground round features the Top 10 teams from Moment, battling head-to-head in a high-stakes tech-powered setup.
Each team is equipped with an interconnected device linked to the Evolvian network, with real-time scores flashing on video walls.
Only the Top 4 will advance.`,
                                                      style: { width: "100%" },
                                                      TP1crxvPO: "10 teams",
                                                      tuSNNK56X: "Path",
                                                      variant: "CeXTt6Kst",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(p, {
                                                  height: 363,
                                                  width: `min(max((min(min(min(min(${i?.width || "100vw"}, 1440px) - 160px, 980px) * 1.3, 1440px) - 160px, 1200px) - 36px) / 2, 1px), 700px)`,
                                                  children: e(ce, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stiffness: 300,
                                                      type: "spring",
                                                    },
                                                    __framer__styleTransformEffectEnabled:
                                                      !0,
                                                    __framer__transformTargets:
                                                      [
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 0.9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                      ],
                                                    __framer__transformTrigger:
                                                      "onInView",
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className:
                                                      "framer-qbv5o-container",
                                                    nodeId: "qFiN0aiSs",
                                                    rendersWithMotion: !0,
                                                    scopeId: "hetOMwTYW",
                                                    children: e(ue, {
                                                      bw8wnPVJ6: "30px",
                                                      height: "100%",
                                                      id: "qFiN0aiSs",
                                                      layoutId: "qFiN0aiSs",
                                                      lpNYR5mgd:
                                                        "Hazard | Semi-Finals",
                                                      pgcwfQDhU: "PHASE 03",
                                                      QiBV5Bs5w: "50/50",
                                                      sq6e4rlJt: `The tension rises in Hazzard, where 4 teams face off in intense one-on-one matchups.
This round introduces interactive lifelines like Ask the Audience and 50:50, with the audience plugged into the Evolvian network and influencing the outcome in real time.
Only 2 teams survive.`,
                                                      style: { width: "100%" },
                                                      TP1crxvPO:
                                                        "Ask The Audience",
                                                      tuSNNK56X: "Flame",
                                                      variant: "CeXTt6Kst",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(p, {
                                                  height: 363,
                                                  width: `min(max((min(min(min(min(${i?.width || "100vw"}, 1440px) - 160px, 980px) * 1.3, 1440px) - 160px, 1200px) - 36px) / 2, 1px), 700px)`,
                                                  children: e(ce, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stiffness: 300,
                                                      type: "spring",
                                                    },
                                                    __framer__styleTransformEffectEnabled:
                                                      !0,
                                                    __framer__transformTargets:
                                                      [
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 0.9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                        {
                                                          target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                        },
                                                      ],
                                                    __framer__transformTrigger:
                                                      "onInView",
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className:
                                                      "framer-109d31l-container",
                                                    nodeId: "dTxGxPh5G",
                                                    rendersWithMotion: !0,
                                                    scopeId: "hetOMwTYW",
                                                    children: e(ue, {
                                                      bw8wnPVJ6: "30px",
                                                      height: "100%",
                                                      id: "dTxGxPh5G",
                                                      layoutId: "dTxGxPh5G",
                                                      lpNYR5mgd:
                                                        "EVO GRND | Grand Finale",
                                                      pgcwfQDhU: "FINAL PHASE",
                                                      QiBV5Bs5w:
                                                        "negative marks",
                                                      sq6e4rlJt: `The ultimate stage.
The Top 2 super teams collide in a fast-paced buzzer round where time and precision rule.
This finale features 2x golden questions and negative marking\u2014making every decision matter.
The true champions of Evolvian will rise here.`,
                                                      style: { width: "100%" },
                                                      TP1crxvPO: "buzzer",
                                                      tuSNNK56X: "Fire",
                                                      variant: "CeXTt6Kst",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ie() &&
                                    d("div", {
                                      className: "framer-x76a6l hidden-1c1wts4",
                                      "data-framer-name": "Left",
                                      children: [
                                        d("div", {
                                          className: "framer-3th29m",
                                          "data-framer-name": "Top",
                                          children: [
                                            e(G, {
                                              breakpoint: c,
                                              overrides: {
                                                VGLbQoXBe: {
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    110 +
                                                    8 +
                                                    0 +
                                                    0 +
                                                    404 +
                                                    51 +
                                                    437 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: e(p, {
                                                height: 40,
                                                children: e(he, {
                                                  className:
                                                    "framer-1axcngw-container",
                                                  isModuleExternal: !0,
                                                  nodeId: "G_pHJeHyz",
                                                  scopeId: "hetOMwTYW",
                                                  children: e(rr, {
                                                    aZ7GvMqIl:
                                                      "FingerprintSimple",
                                                    height: "100%",
                                                    id: "G_pHJeHyz",
                                                    KS7KLFqN8:
                                                      "Event Timeline ",
                                                    layoutId: "G_pHJeHyz",
                                                    rQKAY6456: "NEW",
                                                    variant: "axDSKQZXP",
                                                    width: "100%",
                                                    xAPRy8bad: 0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            d("div", {
                                              className: "framer-2oeupl",
                                              "data-framer-name": "Title",
                                              children: [
                                                e(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(u, {
                                                    children: e("h2", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "35px",
                                                        "--framer-letter-spacing":
                                                          "-2px",
                                                        "--framer-line-height":
                                                          "32px",
                                                        "--framer-text-color":
                                                          "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                                                      },
                                                      children:
                                                        "Evolvion Event map",
                                                    }),
                                                  }),
                                                  className: "framer-auifo7",
                                                  "data-framer-name": "Text 1",
                                                  effect: ze,
                                                  fonts: ["GF;DM Sans-regular"],
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                                e(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(u, {
                                                    children: e("h2", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "35px",
                                                        "--framer-letter-spacing":
                                                          "-2px",
                                                        "--framer-line-height":
                                                          "32px",
                                                        "--framer-text-color":
                                                          "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                                      },
                                                      children:
                                                        "With Four Stages ",
                                                    }),
                                                  }),
                                                  className: "framer-12y0ypk",
                                                  "data-framer-name": "Text 2",
                                                  effect: Ge,
                                                  fonts: ["GF;DM Sans-regular"],
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            e(y, {
                                              __fromCanvasComponent: !0,
                                              children: e(u, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                    "--framer-letter-spacing":
                                                      "-0.2px",
                                                    "--framer-line-height":
                                                      "26px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                                  },
                                                  children:
                                                    "Navigate Evolvion \u201925 with ease \u2014 your map to the ultimate tech-powered quiz showdown, from first buzz to grand finale.",
                                                }),
                                              }),
                                              className: "framer-50i6x3",
                                              "data-framer-name": "Text",
                                              fonts: ["GF;DM Sans-regular"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        d("div", {
                                          className: "framer-ct09ot",
                                          "data-framer-name": "Bottom",
                                          children: [
                                            e(G, {
                                              breakpoint: c,
                                              overrides: {
                                                VGLbQoXBe: {
                                                  width: `calc((min(min(min(${i?.width || "100vw"}, 1440px) - 60px, 900px), 1440px) - 60px) * 1.1)`,
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    110 +
                                                    8 +
                                                    0 +
                                                    0 +
                                                    404 +
                                                    51 +
                                                    437 +
                                                    0 +
                                                    347 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: e(p, {
                                                height: 363,
                                                children: e(ce, {
                                                  __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring",
                                                  },
                                                  __framer__styleTransformEffectEnabled:
                                                    !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 0.9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger:
                                                    "onInView",
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-17n9gd9-container",
                                                  isModuleExternal: !0,
                                                  nodeId: "vwdqiK_43",
                                                  rendersWithMotion: !0,
                                                  scopeId: "hetOMwTYW",
                                                  children: e(er, {
                                                    bw8wnPVJ6: "20px",
                                                    height: "100%",
                                                    id: "vwdqiK_43",
                                                    layoutId: "vwdqiK_43",
                                                    lpNYR5mgd:
                                                      "Moment | Online Quiz Round",
                                                    pgcwfQDhU: "PHASE 01",
                                                    QiBV5Bs5w: "30+ teams",
                                                    sq6e4rlJt: `Phase One of Evolvian kicks off with Moment \u2014 a fully online inter-school battle of intellect.
Over 30 schools connect through SSDSSC\u2019s custom-built quiz platform, competing live in real time to secure a place among the Top 10 teams.`,
                                                    style: { width: "100%" },
                                                    TP1crxvPO:
                                                      "powerd with quiz app",
                                                    tuSNNK56X: "Star",
                                                    variant: "CeXTt6Kst",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(G, {
                                              breakpoint: c,
                                              overrides: {
                                                VGLbQoXBe: {
                                                  width: `calc((min(min(min(${i?.width || "100vw"}, 1440px) - 60px, 900px), 1440px) - 60px) * 1.1)`,
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    110 +
                                                    8 +
                                                    0 +
                                                    0 +
                                                    404 +
                                                    51 +
                                                    437 +
                                                    0 +
                                                    347 +
                                                    0 +
                                                    387,
                                                },
                                              },
                                              children: e(p, {
                                                height: 363,
                                                children: e(ce, {
                                                  __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring",
                                                  },
                                                  __framer__styleTransformEffectEnabled:
                                                    !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 0.9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger:
                                                    "onInView",
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1wpgu91-container",
                                                  nodeId: "ciuJV2cJe",
                                                  rendersWithMotion: !0,
                                                  scopeId: "hetOMwTYW",
                                                  children: e(ar, {
                                                    bw8wnPVJ6: "20px",
                                                    height: "100%",
                                                    id: "ciuJV2cJe",
                                                    layoutId: "ciuJV2cJe",
                                                    lpNYR5mgd:
                                                      "Knockouts | On-Site Quiz Showdown",
                                                    pgcwfQDhU: "PHASE 02",
                                                    QiBV5Bs5w: "Rapid app",
                                                    sq6e4rlJt: `Held at our school premises, this on-ground round features the Top 10 teams from Moment, battling head-to-head in a high-stakes tech-powered setup.
Each team is equipped with an interconnected device linked to the Evolvian network, with real-time scores flashing on video walls.
Only the Top 4 will advance.`,
                                                    style: { width: "100%" },
                                                    TP1crxvPO: "10 teams",
                                                    tuSNNK56X: "Path",
                                                    variant: "Ha7bHulz3",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(G, {
                                              breakpoint: c,
                                              overrides: {
                                                VGLbQoXBe: {
                                                  width: `calc((min(min(min(${i?.width || "100vw"}, 1440px) - 60px, 900px), 1440px) - 60px) * 1.1)`,
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    110 +
                                                    8 +
                                                    0 +
                                                    0 +
                                                    404 +
                                                    51 +
                                                    437 +
                                                    0 +
                                                    347 +
                                                    0 +
                                                    774,
                                                },
                                              },
                                              children: e(p, {
                                                height: 363,
                                                children: e(ce, {
                                                  __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring",
                                                  },
                                                  __framer__styleTransformEffectEnabled:
                                                    !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 0.9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger:
                                                    "onInView",
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1yfqvfl-container",
                                                  nodeId: "LrPwxO1vr",
                                                  rendersWithMotion: !0,
                                                  scopeId: "hetOMwTYW",
                                                  children: e(ur, {
                                                    bw8wnPVJ6: "20px",
                                                    height: "100%",
                                                    id: "LrPwxO1vr",
                                                    layoutId: "LrPwxO1vr",
                                                    lpNYR5mgd:
                                                      "Hazard | Semi-Finals",
                                                    pgcwfQDhU: "PHASE 03",
                                                    QiBV5Bs5w: "Discovery",
                                                    sq6e4rlJt: `The tension rises in Hazzard, where 4 teams face off in intense one-on-one matchups.
This round introduces interactive lifelines like Ask the Audience and 50:50, with the audience plugged into the Evolvian network and influencing the outcome in real time.
Only 2 teams survive.`,
                                                    style: { width: "100%" },
                                                    TP1crxvPO:
                                                      "Ask The Audience",
                                                    tuSNNK56X: "Flame",
                                                    variant: "RzKcg4sYR",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(G, {
                                              breakpoint: c,
                                              overrides: {
                                                VGLbQoXBe: {
                                                  width: `calc((min(min(min(${i?.width || "100vw"}, 1440px) - 60px, 900px), 1440px) - 60px) * 1.1)`,
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    110 +
                                                    8 +
                                                    0 +
                                                    0 +
                                                    404 +
                                                    51 +
                                                    437 +
                                                    0 +
                                                    347 +
                                                    0 +
                                                    1161,
                                                },
                                              },
                                              children: e(p, {
                                                height: 363,
                                                children: e(ce, {
                                                  __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring",
                                                  },
                                                  __framer__styleTransformEffectEnabled:
                                                    !0,
                                                  __framer__transformTargets: [
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 0.9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                    {
                                                      target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                      },
                                                    },
                                                  ],
                                                  __framer__transformTrigger:
                                                    "onInView",
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-3bdep2-container",
                                                  nodeId: "gJriz6Cqf",
                                                  rendersWithMotion: !0,
                                                  scopeId: "hetOMwTYW",
                                                  children: e(tr, {
                                                    bw8wnPVJ6: "20px",
                                                    height: "100%",
                                                    id: "gJriz6Cqf",
                                                    layoutId: "gJriz6Cqf",
                                                    lpNYR5mgd:
                                                      "EVO GRND | Grand Finale",
                                                    pgcwfQDhU: "FINAL PHASE",
                                                    QiBV5Bs5w: "negative marks",
                                                    sq6e4rlJt: `The ultimate stage.
The Top 2 super teams collide in a fast-paced buzzer round where time and precision rule.
This finale features 2x golden questions and negative marking\u2014making every decision matter.
The true champions of Evolvian will rise here.`,
                                                    style: { width: "100%" },
                                                    TP1crxvPO: "buzzer",
                                                    tuSNNK56X: "Fire",
                                                    variant: "kU0CY1NOY",
                                                    width: "100%",
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
                          ],
                        }),
                        w() &&
                          d("section", {
                            className:
                              "framer-mf471s hidden-1c1wts4 hidden-1u2oqt1",
                            "data-framer-name": "About 1",
                            id: ae,
                            ref: E,
                            children: [
                              e("div", {
                                className: "framer-1lkpwol",
                                "data-framer-name": "Line",
                              }),
                              e(hr, {
                                __framer__loop: gr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopPauseOffscreen: !1,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: it,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  pixelHeight: 621,
                                  pixelWidth: 485,
                                  sizes: "350px",
                                  src: "/evo/images/JiOUlLZKCdICRk3E6RwQ0Juag.png",
                                  srcSet:
                                    "/evo/images/JiOUlLZKCdICRk3E6RwQ0Juag.png 485w",
                                },
                                className: "framer-bslnuc",
                              }),
                              e("div", {
                                className: "framer-1fbllq5",
                                "data-framer-name": "Container",
                                children: d("div", {
                                  className: "framer-10ewznz",
                                  "data-framer-name": "Left",
                                  children: [
                                    d("div", {
                                      className: "framer-1y86qx0",
                                      "data-framer-name": "Top",
                                      children: [
                                        e(p, {
                                          height: 40,
                                          children: e(he, {
                                            className:
                                              "framer-df8s5n-container",
                                            nodeId: "dVW9QK2Vj",
                                            scopeId: "hetOMwTYW",
                                            children: e(de, {
                                              aZ7GvMqIl: "FingerprintSimple",
                                              height: "100%",
                                              id: "dVW9QK2Vj",
                                              KS7KLFqN8: "Event Timeline ",
                                              layoutId: "dVW9QK2Vj",
                                              rQKAY6456: "Event Timeline ",
                                              variant: "axDSKQZXP",
                                              width: "100%",
                                              xAPRy8bad: 0,
                                            }),
                                          }),
                                        }),
                                        d("div", {
                                          className: "framer-gtt9wl",
                                          "data-framer-name": "Title",
                                          children: [
                                            e(y, {
                                              __fromCanvasComponent: !0,
                                              children: e(u, {
                                                children: e("h2", {
                                                  className:
                                                    "framer-styles-preset-190xti5",
                                                  "data-styles-preset":
                                                    "QuTNz53Yy",
                                                  children:
                                                    "Evolvion Event map",
                                                }),
                                              }),
                                              className: "framer-ijdcs6",
                                              "data-framer-name": "Text 1",
                                              effect: ze,
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(y, {
                                              __fromCanvasComponent: !0,
                                              children: e(u, {
                                                children: e("h2", {
                                                  className:
                                                    "framer-styles-preset-190xti5",
                                                  "data-styles-preset":
                                                    "QuTNz53Yy",
                                                  style: {
                                                    "--framer-text-color":
                                                      "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                                  },
                                                  children: "With Four Stages ",
                                                }),
                                              }),
                                              className: "framer-j0azy0",
                                              "data-framer-name": "Text 2",
                                              effect: Ge,
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        e(y, {
                                          __fromCanvasComponent: !0,
                                          children: e(u, {
                                            children: e("p", {
                                              className:
                                                "framer-styles-preset-x0s9r5",
                                              "data-styles-preset": "QhK6qqT5U",
                                              style: {
                                                "--framer-text-alignment":
                                                  "left",
                                              },
                                              children:
                                                "Navigate Evolvion \u201925 with ease \u2014 your map to the ultimate tech-powered quiz showdown, from first buzz to grand finale.",
                                            }),
                                          }),
                                          className: "framer-zjx29n",
                                          "data-framer-name": "Text",
                                          fonts: ["Inter"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d("div", {
                                      className: "framer-1yvyf9j",
                                      "data-framer-name": "Bottom",
                                      children: [
                                        e(G, {
                                          breakpoint: c,
                                          overrides: {
                                            CWwXHLaFa: {
                                              width: `min(min(min(min(${i?.width || "100vw"}, 1440px) - 100px, (min(${i?.width || "100vw"}, 1440px) - 100px) * 9) - 100px, 1385px), 1292px)`,
                                            },
                                          },
                                          children: e(p, {
                                            height: 363,
                                            children: e(ce, {
                                              __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stiffness: 300,
                                                type: "spring",
                                              },
                                              __framer__styleTransformEffectEnabled:
                                                !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0.9,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger:
                                                "onInView",
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-3kreh7-container",
                                              nodeId: "G0k6Xbs7x",
                                              rendersWithMotion: !0,
                                              scopeId: "hetOMwTYW",
                                              children: e(ue, {
                                                bw8wnPVJ6: "30px",
                                                height: "100%",
                                                id: "G0k6Xbs7x",
                                                layoutId: "G0k6Xbs7x",
                                                lpNYR5mgd:
                                                  "Moment | Online Quiz Round",
                                                pgcwfQDhU: "PHASE 01",
                                                QiBV5Bs5w: "30+ teams",
                                                sq6e4rlJt: `Phase One of Evolvian kicks off with Moment \u2014 a fully online inter-school battle of intellect.
Over 30 schools connect through SSDSSC\u2019s custom-built quiz platform, competing live in real time to secure a place among the Top 10 teams.`,
                                                style: { width: "100%" },
                                                TP1crxvPO:
                                                  "powerd with quiz app",
                                                tuSNNK56X: "Star",
                                                variant: "CeXTt6Kst",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                        e(G, {
                                          breakpoint: c,
                                          overrides: {
                                            CWwXHLaFa: {
                                              width: `min(min(min(min(${i?.width || "100vw"}, 1440px) - 100px, (min(${i?.width || "100vw"}, 1440px) - 100px) * 9) - 100px, 1385px), 1292px)`,
                                            },
                                          },
                                          children: e(p, {
                                            height: 363,
                                            children: e(ce, {
                                              __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stiffness: 300,
                                                type: "spring",
                                              },
                                              __framer__styleTransformEffectEnabled:
                                                !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0.9,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger:
                                                "onInView",
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-tkgepj-container",
                                              nodeId: "IUGeXATRM",
                                              rendersWithMotion: !0,
                                              scopeId: "hetOMwTYW",
                                              children: e(ue, {
                                                bw8wnPVJ6: "30px",
                                                height: "100%",
                                                id: "IUGeXATRM",
                                                layoutId: "IUGeXATRM",
                                                lpNYR5mgd:
                                                  "Knockouts | On-Site Quiz Showdown",
                                                pgcwfQDhU: "PHASE 02",
                                                QiBV5Bs5w: "Rapid app",
                                                sq6e4rlJt: `Held at our school premises, this on-ground round features the Top 10 teams from Moment, battling head-to-head in a high-stakes tech-powered setup.
Each team is equipped with an interconnected device linked to the Evolvian network, with real-time scores flashing on video walls.
Only the Top 4 will advance.`,
                                                style: { width: "100%" },
                                                TP1crxvPO: "10 teams",
                                                tuSNNK56X: "Path",
                                                variant: "CeXTt6Kst",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                        e(G, {
                                          breakpoint: c,
                                          overrides: {
                                            CWwXHLaFa: {
                                              width: `min(min(min(min(${i?.width || "100vw"}, 1440px) - 100px, (min(${i?.width || "100vw"}, 1440px) - 100px) * 9) - 100px, 1385px), 1292px)`,
                                            },
                                          },
                                          children: e(p, {
                                            height: 363,
                                            children: e(ce, {
                                              __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stiffness: 300,
                                                type: "spring",
                                              },
                                              __framer__styleTransformEffectEnabled:
                                                !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0.9,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger:
                                                "onInView",
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-1p2whs3-container",
                                              nodeId: "jQBOMHDOf",
                                              rendersWithMotion: !0,
                                              scopeId: "hetOMwTYW",
                                              children: e(ue, {
                                                bw8wnPVJ6: "30px",
                                                height: "100%",
                                                id: "jQBOMHDOf",
                                                layoutId: "jQBOMHDOf",
                                                lpNYR5mgd:
                                                  "Hazard | Semi-Finals",
                                                pgcwfQDhU: "PHASE 03",
                                                QiBV5Bs5w: "50/50",
                                                sq6e4rlJt: `The tension rises in Hazzard, where 4 teams face off in intense one-on-one matchups.
This round introduces interactive lifelines like Ask the Audience and 50:50, with the audience plugged into the Evolvian network and influencing the outcome in real time.
Only 2 teams survive.`,
                                                style: { width: "100%" },
                                                TP1crxvPO: "Ask The Audience",
                                                tuSNNK56X: "Flame",
                                                variant: "mH3pBjkav",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                        e(G, {
                                          breakpoint: c,
                                          overrides: {
                                            CWwXHLaFa: {
                                              width: `min(min(min(min(${i?.width || "100vw"}, 1440px) - 100px, (min(${i?.width || "100vw"}, 1440px) - 100px) * 9) - 100px, 1385px), 1292px)`,
                                            },
                                          },
                                          children: e(p, {
                                            height: 363,
                                            children: e(ce, {
                                              __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stiffness: 300,
                                                type: "spring",
                                              },
                                              __framer__styleTransformEffectEnabled:
                                                !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0.9,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger:
                                                "onInView",
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-1rh0e22-container",
                                              nodeId: "ppMmxquDq",
                                              rendersWithMotion: !0,
                                              scopeId: "hetOMwTYW",
                                              children: e(ue, {
                                                bw8wnPVJ6: "30px",
                                                height: "100%",
                                                id: "ppMmxquDq",
                                                layoutId: "ppMmxquDq",
                                                lpNYR5mgd:
                                                  "EVO GRND | Grand Finale",
                                                pgcwfQDhU: "FINAL PHASE",
                                                QiBV5Bs5w: "negative marks",
                                                sq6e4rlJt: `The ultimate stage.
The Top 2 super teams collide in a fast-paced buzzer round where time and precision rule.
This finale features 2x golden questions and negative marking\u2014making every decision matter.
The true champions of Evolvian will rise here.`,
                                                style: { width: "100%" },
                                                TP1crxvPO: "buzzer",
                                                tuSNNK56X: "Fire",
                                                variant: "mH3pBjkav",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                e("section", {
                  className: "framer-18vmjd3",
                  "data-framer-name": "CTA",
                  children: e(G, {
                    breakpoint: c,
                    overrides: {
                      CWwXHLaFa: {
                        width: `min(min(${i?.width || "100vw"}, 1440px) - 100px, 1200px)`,
                      },
                      VGLbQoXBe: {
                        width: `min(min(${i?.width || "100vw"}, 1440px) - 60px, 1200px)`,
                        y: (i?.y || 0) + 0 + 2889 + 70 + 0,
                      },
                    },
                    children: e(p, {
                      height: 399,
                      width: `min(min(${i?.width || "100vw"}, 1440px) - 160px, 1200px)`,
                      children: e(he, {
                        className: "framer-1b32sda-container",
                        nodeId: "m4DeBo6A9",
                        scopeId: "hetOMwTYW",
                        children: e(G, {
                          breakpoint: c,
                          overrides: {
                            CWwXHLaFa: { variant: "loCCDxohM" },
                            VGLbQoXBe: { variant: "HUnPy0Idi" },
                          },
                          children: e(pr, {
                            agE9mmcaW: "Rapid Quiz App First Run",
                            CNdayUvFh: "RocketLaunch",
                            Co6pGhn1O: "Ocular Rapid Quiz App triumphed with",
                            h1srq6JYt: "200+ live participants.",
                            height: "100%",
                            hTxjvUcch: !0,
                            id: "m4DeBo6A9",
                            layoutId: "m4DeBo6A9",
                            LXEGAPoN5: !0,
                            QkrRFggia: !0,
                            style: { maxWidth: "100%", width: "100%" },
                            tkAspsVhh: "success rate ",
                            variant: "MnhhcZMrC",
                            width: "100%",
                            yF5rJHa4O: !0,
                            YNrMQMsXa: !0,
                            ziygI5AJR:
                              "Team Ocular, envisioned with Vinura Senadeera, set a new milestone in the interschool quizzing industry with seamless integration",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                d("section", {
                  className: "framer-tryr41",
                  "data-framer-name": "FAQ",
                  id: T,
                  ref: R,
                  children: [
                    e(G, {
                      breakpoint: c,
                      overrides: {
                        VGLbQoXBe: {
                          background: {
                            alt: "Rays",
                            fit: "fill",
                            intrinsicHeight: 779,
                            intrinsicWidth: 1199,
                            loading: ge((i?.y || 0) + 0 + 3438 + 0),
                            pixelHeight: 1558,
                            pixelWidth: 2398,
                            sizes: `min(${i?.width || "100vw"}, 1480px)`,
                            src: "/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=2048",
                            srcSet:
                              "/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=512 512w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=1024 1024w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=2048 2048w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png 2398w",
                          },
                        },
                      },
                      children: e(xe, {
                        background: {
                          alt: "Rays",
                          fit: "fill",
                          intrinsicHeight: 779,
                          intrinsicWidth: 1199,
                          pixelHeight: 1558,
                          pixelWidth: 2398,
                          sizes: `min(${i?.width || "100vw"}, 1480px)`,
                          src: "/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=2048",
                          srcSet:
                            "/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=512 512w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=1024 1024w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png?scale-down-to=2048 2048w,/evo/images/HQiQT243MN1itZOX771FxR6euwI.png 2398w",
                        },
                        className: "framer-1xzosjh",
                        "data-framer-name": "Light Rays",
                      }),
                    }),
                    d("div", {
                      className: "framer-tdwgiu",
                      "data-framer-name": "Container",
                      children: [
                        e("div", {
                          className: "framer-3iu0g3",
                          "data-framer-name": "Left",
                          children: d("div", {
                            className: "framer-fvuhpk",
                            "data-framer-name": "Content",
                            children: [
                              d("div", {
                                className: "framer-148tp01",
                                "data-framer-name": "Top",
                                children: [
                                  d("div", {
                                    className: "framer-iwucs8",
                                    "data-framer-name": "Title",
                                    children: [
                                      e(y, {
                                        __fromCanvasComponent: !0,
                                        children: e(u, {
                                          children: e("h2", {
                                            className:
                                              "framer-styles-preset-190xti5",
                                            "data-styles-preset": "QuTNz53Yy",
                                            children: "Frequently",
                                          }),
                                        }),
                                        className: "framer-tg2ytc",
                                        "data-framer-name": "Text 1",
                                        effect: ze,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(y, {
                                        __fromCanvasComponent: !0,
                                        children: e(u, {
                                          children: e("h2", {
                                            className:
                                              "framer-styles-preset-190xti5",
                                            "data-styles-preset": "QuTNz53Yy",
                                            style: {
                                              "--framer-text-color":
                                                "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                            },
                                            children: "Asked Questions",
                                          }),
                                        }),
                                        className: "framer-127qkvb",
                                        "data-framer-name": "Text 2",
                                        effect: Ge,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  e(G, {
                                    breakpoint: c,
                                    overrides: {
                                      VGLbQoXBe: {
                                        y:
                                          (i?.y || 0) +
                                          0 +
                                          3438 +
                                          0 +
                                          0 +
                                          67 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          133,
                                      },
                                    },
                                    children: e(p, {
                                      height: 40,
                                      children: e(he, {
                                        className: "framer-1mqiwau-container",
                                        nodeId: "Xy1tyERKy",
                                        scopeId: "hetOMwTYW",
                                        children: e(de, {
                                          aZ7GvMqIl: "Question",
                                          height: "100%",
                                          id: "Xy1tyERKy",
                                          KS7KLFqN8: "FAQ",
                                          layoutId: "Xy1tyERKy",
                                          rQKAY6456: "NEW",
                                          variant: "axDSKQZXP",
                                          width: "100%",
                                          xAPRy8bad: 0,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-ou3f88",
                                "data-framer-name": "Bottom",
                                children: e(G, {
                                  breakpoint: c,
                                  overrides: {
                                    VGLbQoXBe: {
                                      children: e(u, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-x0s9r5",
                                          "data-styles-preset": "QhK6qqT5U",
                                          style: {
                                            "--framer-text-color":
                                              "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                                          },
                                          children:
                                            "Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(y, {
                                    __fromCanvasComponent: !0,
                                    children: e(u, {
                                      children: d("p", {
                                        className:
                                          "framer-styles-preset-x0s9r5",
                                        "data-styles-preset": "QhK6qqT5U",
                                        children: [
                                          "Have questions? Our FAQ section has you covered with ",
                                          e("br", {}),
                                          "quick answers to the most common inquiries.",
                                        ],
                                      }),
                                    }),
                                    className: "framer-1alau9g",
                                    "data-framer-name": "Body Text",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        e(G, {
                          breakpoint: c,
                          overrides: {
                            CWwXHLaFa: {
                              width: `calc(min(min(${i?.width || "100vw"}, 1480px) - 100px, 1200px) - 100px)`,
                            },
                            VGLbQoXBe: {
                              width: `calc(min((min(${i?.width || "100vw"}, 1480px) - 60px) * 1.15, 1200px) - 60px)`,
                              y: (i?.y || 0) + 0 + 3438 + 0 + 0 + 67 + 373,
                            },
                          },
                          children: e(p, {
                            height: 556,
                            width: `min(max((min(min(${i?.width || "100vw"}, 1480px) - 160px, 1200px) - 60px) / 2, 1px), 700px)`,
                            children: e(he, {
                              className: "framer-1b4lort-container",
                              nodeId: "zbMRcH7jH",
                              scopeId: "hetOMwTYW",
                              children: e(G, {
                                breakpoint: c,
                                overrides: {
                                  CWwXHLaFa: { style: { width: "100%" } },
                                  VGLbQoXBe: { style: { width: "100%" } },
                                },
                                children: e($e, {
                                  height: "100%",
                                  id: "zbMRcH7jH",
                                  layoutId: "zbMRcH7jH",
                                  style: { maxWidth: "100%", width: "100%" },
                                  width: "100%",
                                }),
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
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  uo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-IAxQr.framer-1jpv3m5, .framer-IAxQr .framer-1jpv3m5 { display: block; }",
    ".framer-IAxQr.framer-1c1wts4 { align-content: center; align-items: center; background-color: var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1272px; }",
    ".framer-IAxQr .framer-1rsusfa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-rphf9s { flex: none; height: 91px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-1kga82q { align-content: center; align-items: center; background: radial-gradient(60% 88% at 50% 64.2%, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, #4f1ad6) 0%, rgb(114, 59, 255) 39.99155405405405%, var(--token-123b0380-d5c1-475a-b484-6e62cac5babe, rgb(25, 13, 46)) 84.93278434684684%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-163cnt8 { background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%); bottom: 0px; flex: none; height: 224px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-zz34dl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-IAxQr .framer-1jt0gku { background: radial-gradient(54% 50% at 50% 57.199999999999996%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.67) 64.51471002252252%, rgb(0, 0, 0) 100%); flex: none; height: 101%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 101% / 2); width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-1ghkv7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 980px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-rpcq1d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 74px 0px 74px 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-u3q236 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-7ta2jd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-yaqurt { flex: none; height: 184px; position: relative; width: 978px; }",
    ".framer-IAxQr .framer-yivnwz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-1vrh7ia, .framer-IAxQr .framer-1alau9g { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-IAxQr .framer-2g87xj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px; height: min-content; justify-content: center; max-width: 600px; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-IAxQr .framer-58hlra-container, .framer-IAxQr .framer-1it9htr-container, .framer-IAxQr .framer-1axcngw-container, .framer-IAxQr .framer-df8s5n-container, .framer-IAxQr .framer-1mqiwau-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-IAxQr .framer-acizr8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 127px 80px 0px 80px; position: relative; width: 130%; z-index: 1; }",
    ".framer-IAxQr .framer-73ra7e, .framer-IAxQr .framer-1lkpwol { background: linear-gradient(90.00000000000075deg, var(--token-73242b55-57d1-4320-8897-28085a430c83, rgba(255, 255, 255, 0.02)) 0%, var(--token-d86f1591-0c16-44cd-be10-19334dfa9293, rgba(255, 255, 255, 0.1)) 50%, var(--token-73242b55-57d1-4320-8897-28085a430c83, rgba(255, 255, 255, 0.02)) 100%); flex: none; height: 1px; max-width: 1300px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-176tsza { flex: none; height: 306px; position: relative; width: 240px; }",
    ".framer-IAxQr .framer-1yqb5w4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 95px 0px 95px 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-IAxQr .framer-1yggd6c { flex: 1 0 0px; height: 406px; max-height: 444px; max-width: 440px; overflow: hidden; position: sticky; top: 100px; width: 1px; z-index: 1; }",
    ".framer-IAxQr .framer-1k6no6z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-IAxQr .framer-gc6e5w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 26px 0px 26px 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-zh7hcm, .framer-IAxQr .framer-gtt9wl, .framer-IAxQr .framer-iwucs8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-1rkmnc5, .framer-IAxQr .framer-26upl3, .framer-IAxQr .framer-auifo7, .framer-IAxQr .framer-12y0ypk, .framer-IAxQr .framer-ijdcs6, .framer-IAxQr .framer-j0azy0, .framer-IAxQr .framer-tg2ytc, .framer-IAxQr .framer-127qkvb { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-IAxQr .framer-t86one, .framer-IAxQr .framer-50i6x3, .framer-IAxQr .framer-zjx29n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-IAxQr .framer-19pjarz, .framer-IAxQr .framer-ct09ot, .framer-IAxQr .framer-1yvyf9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-1qzyqcj-container, .framer-IAxQr .framer-9od5ha-container, .framer-IAxQr .framer-qbv5o-container, .framer-IAxQr .framer-109d31l-container, .framer-IAxQr .framer-17n9gd9-container, .framer-IAxQr .framer-1wpgu91-container, .framer-IAxQr .framer-1yfqvfl-container, .framer-IAxQr .framer-3bdep2-container, .framer-IAxQr .framer-3kreh7-container, .framer-IAxQr .framer-tkgepj-container, .framer-IAxQr .framer-1p2whs3-container, .framer-IAxQr .framer-1rh0e22-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-x76a6l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 110%; }",
    ".framer-IAxQr .framer-3th29m, .framer-IAxQr .framer-1y86qx0, .framer-IAxQr .framer-148tp01 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-2oeupl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-mf471s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 900%; overflow: visible; padding: 91px 50px 0px 50px; position: relative; width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-bslnuc { flex: none; height: 452px; position: relative; width: 350px; }",
    ".framer-IAxQr .framer-1fbllq5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1385px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-IAxQr .framer-10ewznz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1292px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-18vmjd3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: hidden; padding: 0px 80px 120px 80px; position: relative; width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-1b32sda-container { flex: none; height: auto; max-width: 1200px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-tryr41 { align-content: center; align-items: center; background-color: var(--token-8e9f7de0-9fd7-44d3-bc3e-2dea20c4e4bd, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1480px; overflow: hidden; padding: 0px 80px 0px 80px; position: relative; width: 100%; z-index: 1; }",
    ".framer-IAxQr .framer-1xzosjh { bottom: 0px; flex: none; left: 0px; opacity: 0.7; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-IAxQr .framer-tdwgiu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 67px 0px 67px 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-IAxQr .framer-3iu0g3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 450px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-IAxQr .framer-fvuhpk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-ou3f88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 450px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-IAxQr .framer-1b4lort-container { flex: 1 0 0px; height: auto; max-width: 700px; position: relative; width: 1px; z-index: 1; }",
    ...je,
    ...Tr,
    "@media (min-width: 1083px) and (max-width: 1271px) { .framer-IAxQr.framer-1c1wts4 { width: 1083px; } .framer-IAxQr .framer-1kga82q { align-content: flex-start; align-items: flex-start; justify-content: flex-start; padding: 0px 50px 0px 50px; } .framer-IAxQr .framer-163cnt8 { order: 0; } .framer-IAxQr .framer-zz34dl, .framer-IAxQr .framer-2g87xj { order: 1; } .framer-IAxQr .framer-1ghkv7v { max-width: 1398px; order: 2; } .framer-IAxQr .framer-rpcq1d { height: 321px; max-width: 900%; order: 0; width: min-content; } .framer-IAxQr .framer-u3q236 { width: 755px; } .framer-IAxQr .framer-yaqurt { height: 158px; width: 713px; } .framer-IAxQr .framer-yivnwz { width: 500px; } .framer-IAxQr .framer-mf471s { order: 3; } .framer-IAxQr .framer-18vmjd3 { padding: 0px 50px 100px 50px; } .framer-IAxQr .framer-tryr41 { align-content: flex-start; align-items: flex-start; padding: 0px 50px 0px 50px; } .framer-IAxQr .framer-tdwgiu { flex-direction: column; padding: 67px 50px 67px 50px; } .framer-IAxQr .framer-3iu0g3 { flex: none; order: 0; width: 100%; } .framer-IAxQr .framer-1b4lort-container { flex: none; max-width: unset; order: 1; width: 100%; }}",
    "@media (max-width: 1082px) { .framer-IAxQr.framer-1c1wts4 { width: 417px; } .framer-IAxQr .framer-rphf9s, .framer-IAxQr .framer-163cnt8, .framer-IAxQr .framer-1vrh7ia, .framer-IAxQr .framer-176tsza, .framer-IAxQr .framer-17n9gd9-container { order: 0; } .framer-IAxQr .framer-1kga82q { order: 1; padding: 8px 30px 8px 30px; } .framer-IAxQr .framer-zz34dl, .framer-IAxQr .framer-73ra7e, .framer-IAxQr .framer-1wpgu91-container { order: 1; } .framer-IAxQr .framer-1ghkv7v { gap: 50px; max-width: 900px; order: 2; } .framer-IAxQr .framer-rpcq1d { order: 0; padding: 0px; } .framer-IAxQr .framer-u3q236 { align-content: flex-start; align-items: flex-start; } .framer-IAxQr .framer-7ta2jd { align-content: flex-start; align-items: flex-start; height: 128px; } .framer-IAxQr .framer-yaqurt { flex: 1 0 0px; height: 1px; order: 0; width: 100%; } .framer-IAxQr .framer-2g87xj { flex-direction: column; height: 46px; justify-content: flex-start; order: 1; width: 180px; } .framer-IAxQr .framer-58hlra-container { left: 50%; order: 0; position: absolute; top: 50%; transform: translate(-50%, -50%); z-index: 1; } .framer-IAxQr .framer-acizr8 { gap: 65px; justify-content: center; order: 2; padding: 51px 30px 0px 30px; width: 100%; } .framer-IAxQr .framer-x76a6l, .framer-IAxQr .framer-3bdep2-container { order: 3; } .framer-IAxQr .framer-1yfqvfl-container { order: 2; } .framer-IAxQr .framer-18vmjd3 { padding: 70px 30px 80px 30px; } .framer-IAxQr .framer-tryr41 { gap: 80px; padding: 0px 30px 0px 30px; } .framer-IAxQr .framer-tdwgiu { flex-direction: column; gap: 40px; padding: 67px 30px 67px 30px; width: 115%; } .framer-IAxQr .framer-3iu0g3 { flex: none; max-width: 460px; order: 0; width: 100%; } .framer-IAxQr .framer-iwucs8 { gap: 3px; } .framer-IAxQr .framer-1b4lort-container { flex: none; max-width: unset; order: 1; width: 100%; }}",
  ],
  Je = ee(po, uo, "framer-IAxQr"),
  Kl = Je;
Je.displayName = "Page";
Je.defaultProps = { height: 5135, width: 1272 };
te(
  Je,
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
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
          weight: "400",
        },
      ],
    },
    ...jn,
    ...qn,
    ...En,
    ...Yn,
    ...zn,
    ...Gn,
    ...Jn,
    ...Hn,
    ...Kn,
    ...Wn,
    ...Zn,
    ...se(Ue),
    ...se(_r),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Wl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerhetOMwTYW",
      slots: [],
      annotations: {
        framerAutoSizeImages: "true",
        framerComponentViewportWidth: "true",
        framerColorSyntax: "true",
        framerIntrinsicWidth: "1272",
        framerIntrinsicHeight: "5135",
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
        framerScrollSections:
          '{"xgC_85XdF":{"pattern":":xgC_85XdF","name":"about"},"Am5BXkLGW":{"pattern":":Am5BXkLGW","name":"about"},"CIlLf4V3d":{"pattern":":CIlLf4V3d","name":"faq"}}',
        framerAcceptsLayoutTemplate: "true",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CWwXHLaFa":{"layout":["fixed","auto"]},"VGLbQoXBe":{"layout":["fixed","auto"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Wl as __FramerMetadata__, Kl as default };
//# sourceMappingURL=sLlICYQQsp5BKqU7sqNLoIMNcR4sqiXC_qKYiqkoD4k.SHZNRWWV.mjs.map
