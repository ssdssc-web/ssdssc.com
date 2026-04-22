import {
  Aa as X,
  D as s,
  G as R,
  J as u,
  M as A,
  U as k,
  b as p,
  c as V,
  ca as M,
  d as l,
  ia as B,
  oa as P,
  qa as W,
  t as I,
  ua as N,
  ya as T,
} from "./chunk-7MML5CJN.mjs";
import {
  B as e,
  d as f,
  i as F,
  o as U,
  q as D,
  t as C,
  v as S,
} from "./chunk-UEJNNABJ.mjs";
W.loadFonts([
  "GF;DM Sans-500",
  "GF;DM Sans-700",
  "GF;DM Sans-700italic",
  "GF;DM Sans-500italic",
]);
var J = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2",
          weight: "700",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2",
          weight: "700",
        },
        {
          family: "DM Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW32RmYJpso5.woff2",
          weight: "500",
        },
      ],
    },
  ],
  L = [
    '.framer-u628B .framer-styles-preset-2mfvz6:not(.rich-text-wrapper), .framer-u628B .framer-styles-preset-2mfvz6.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.5px; --framer-line-height: 26px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  E = "framer-u628B";
var le = {
    GXXGb1Hah: { hover: !0 },
    vf6JWDf13: { hover: !0 },
    xQAMtyuwR: { hover: !0 },
  },
  de = ["vf6JWDf13", "GXXGb1Hah", "xQAMtyuwR"],
  fe = "framer-Il1td",
  ce = {
    GXXGb1Hah: "framer-v-304yr8",
    vf6JWDf13: "framer-v-1nvacmp",
    xQAMtyuwR: "framer-v-1iyno3s",
  };
function Z(t, ...a) {
  let i = {};
  return (a?.forEach((n) => n && Object.assign(i, t[n])), i);
}
var me = { damping: 60, delay: 0, mass: 1, stiffness: 200, type: "spring" },
  pe = ({ value: t, children: a }) => {
    let i = U(p),
      n = t ?? i.transition,
      d = C(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(p.Provider, { value: d, children: a });
  },
  ue = l.create(f),
  he = { Grey: "xQAMtyuwR", Purple: "vf6JWDf13", White: "GXXGb1Hah" },
  be = ({
    border: t,
    click: a,
    height: i,
    id: n,
    link: d,
    newTab: h,
    smoothScroll: b,
    title: g,
    width: y,
    ...r
  }) => ({
    ...r,
    AL_NU982V: h ?? r.AL_NU982V,
    dlVBgpKLv: g ?? r.dlVBgpKLv ?? "Get In Touch",
    GT109pdEG: d ?? r.GT109pdEG,
    ovJ6T1ZPP: a ?? r.ovJ6T1ZPP,
    SD1BGlGhK: b ?? r.SD1BGlGhK,
    variant: he[r.variant] ?? r.variant ?? "vf6JWDf13",
    YVFZiszrG: t ??
      r.YVFZiszrG ?? {
        borderColor:
          'var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) /* {"name":"White 15%"} */',
        borderStyle: "solid",
        borderWidth: 3,
      },
  }),
  ge = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  ye = F(function (t, a) {
    let i = S(null),
      n = a ?? i,
      d = D(),
      { activeLocale: h, setLocale: b } = I(),
      g = k(),
      {
        style: y,
        className: r,
        layoutId: _,
        variant: H,
        dlVBgpKLv: Q,
        YVFZiszrG: o,
        GT109pdEG: z,
        AL_NU982V: Y,
        SD1BGlGhK: K,
        ovJ6T1ZPP: v,
        ...O
      } = be(t),
      {
        baseVariant: m,
        classNames: q,
        clearLoadingGesture: xe,
        gestureHandlers: j,
        gestureVariant: x,
        isLoading: we,
        setGestureState: $,
        setVariant: Ge,
        variants: w,
      } = P({
        cycleOrder: de,
        defaultVariant: "vf6JWDf13",
        enabledGestures: le,
        ref: n,
        variant: H,
        variantClassNames: ce,
      }),
      G = ge(t, w),
      { activeVariantCallback: ee, delay: Fe } = B(m),
      te = ee(async (...ae) => {
        if (($({ isPressed: !1 }), v && (await v(...ae)) === !1)) return !1;
      }),
      re = u(fe, ...[E]);
    return e(V, {
      id: _ ?? d,
      children: e(ue, {
        animate: w,
        initial: !1,
        children: e(pe, {
          value: me,
          children: e(M, {
            href: z,
            motionChild: !0,
            nodeId: "vf6JWDf13",
            openInNewTab: Y,
            scopeId: "GNvaONxX6",
            smoothScroll: K,
            children: e(l.a, {
              ...O,
              ...j,
              className: `${u(re, "framer-1nvacmp", r, q)} framer-dd37wi`,
              "data-border": !0,
              "data-framer-name": "Purple",
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: G,
              layoutId: "vf6JWDf13",
              onTap: te,
              ref: n,
              style: {
                "--border-bottom-width":
                  (o.borderBottomWidth ?? o.borderWidth) + "px",
                "--border-color": o.borderColor,
                "--border-left-width":
                  (o.borderLeftWidth ?? o.borderWidth) + "px",
                "--border-right-width":
                  (o.borderRightWidth ?? o.borderWidth) + "px",
                "--border-style": o.borderStyle,
                "--border-top-width":
                  (o.borderTopWidth ?? o.borderWidth) + "px",
                background:
                  'linear-gradient(180deg, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Purple"} */ 0%, rgb(128, 89, 227) 100%)',
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxShadow: "0px 0px 0px 0px rgba(79, 26, 214, 0.3)",
                opacity: 1,
                ...y,
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
              ...Z(
                {
                  "GXXGb1Hah-hover": { "data-framer-name": void 0 },
                  "vf6JWDf13-hover": { "data-framer-name": void 0 },
                  "xQAMtyuwR-hover": { "data-framer-name": void 0 },
                  GXXGb1Hah: { "data-framer-name": "White" },
                  xQAMtyuwR: { "data-framer-name": "Grey" },
                },
                m,
                x,
              ),
              children: e(N, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.p, {
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
                layoutDependency: G,
                layoutId: "gCwS649Ft",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: Q,
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
                ...Z(
                  {
                    "vf6JWDf13-hover": {
                      children: e(f, {
                        children: e(l.p, {
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
                      children: e(f, {
                        children: e(l.p, {
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
                  m,
                  x,
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ve = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Il1td.framer-dd37wi, .framer-Il1td .framer-dd37wi { display: block; }",
    ".framer-Il1td.framer-1nvacmp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 18px 10px 18px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Il1td .framer-16xb1fn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Il1td.framer-1nvacmp { gap: 0px; } .framer-Il1td.framer-1nvacmp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Il1td.framer-1nvacmp > :first-child { margin-left: 0px; } .framer-Il1td.framer-1nvacmp > :last-child { margin-right: 0px; } }",
    ...L,
    '.framer-Il1td[data-border="true"]::after, .framer-Il1td [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  c = A(ye, ve, "framer-Il1td"),
  Me = c;
c.displayName = "Button/Primary Button";
c.defaultProps = { height: 46, width: 124.5 };
R(c, {
  variant: {
    options: ["vf6JWDf13", "GXXGb1Hah", "xQAMtyuwR"],
    optionTitles: ["Purple", "White", "Grey"],
    title: "Variant",
    type: s.Enum,
  },
  dlVBgpKLv: {
    defaultValue: "Get In Touch",
    displayTextArea: !0,
    title: "Title",
    type: s.String,
  },
  YVFZiszrG: {
    defaultValue: {
      borderColor:
        'var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)) /* {"name":"White 15%"} */',
      borderStyle: "solid",
      borderWidth: 3,
    },
    title: "Border",
    type: s.Border,
  },
  GT109pdEG: { title: "Link", type: s.Link },
  AL_NU982V: { defaultValue: !1, title: "New Tab", type: s.Boolean },
  SD1BGlGhK: { defaultValue: !1, title: "Smooth Scroll", type: s.Boolean },
  ovJ6T1ZPP: { title: "Click", type: s.EventHandler },
});
T(
  c,
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
    ...X(J),
  ],
  { supportsExplicitInterCodegen: !0 },
);
export { J as a, L as b, E as c, Me as d };
//# sourceMappingURL=chunk-4CZSOIUK.mjs.map
