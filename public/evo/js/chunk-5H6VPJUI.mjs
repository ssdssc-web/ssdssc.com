import {
  g as p,
  h as E,
  i as G,
  j as V,
  k as Y,
  l as z,
  m as B,
} from "./chunk-GP5ZN2VK.mjs";
import {
  Aa as x,
  D as l,
  G as P,
  H as R,
  J as h,
  M as U,
  T as N,
  U as _,
  V as T,
  X as L,
  b as g,
  c as C,
  d as r,
  oa as K,
  qa as j,
  t as I,
  ua as u,
  ya as M,
  za as Q,
} from "./chunk-7MML5CJN.mjs";
import {
  B as e,
  C as F,
  d as f,
  i as A,
  o as w,
  q as k,
  t as S,
  v as D,
} from "./chunk-UEJNNABJ.mjs";
j.loadFonts([
  "GF;DM Sans-500",
  "GF;DM Sans-700",
  "GF;DM Sans-700italic",
  "GF;DM Sans-500italic",
]);
var Ue = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "DM Sans",
          openType: !0,
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
          weight: "500",
        },
        {
          family: "DM Sans",
          openType: !0,
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2",
          weight: "700",
        },
        {
          family: "DM Sans",
          openType: !0,
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2",
          weight: "700",
        },
        {
          family: "DM Sans",
          openType: !0,
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW32RmYJpso5.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Ne = [
    `.framer-ELOEn .framer-styles-preset-1ing3ma:not(.rich-text-wrapper), .framer-ELOEn .framer-styles-preset-1ing3ma.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.5px; --framer-line-height: 26px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  _e = "framer-ELOEn";
var pe = Q(p),
  ge = N(r.div),
  X = R(p),
  he = ["AksRoqhcS", "axDSKQZXP", "gNstPdAkh", "KsCSAInQk", "WXhecYaG5"],
  ue = "framer-JAedJ",
  xe = {
    AksRoqhcS: "framer-v-9xh6r2",
    axDSKQZXP: "framer-v-1neujbl",
    gNstPdAkh: "framer-v-1j9m4ta",
    KsCSAInQk: "framer-v-17087j1",
    WXhecYaG5: "framer-v-1az82xx",
  };
function Z(a, ...n) {
  let o = {};
  return (n?.forEach((t) => t && Object.assign(o, a[t])), o);
}
var be = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ye = ({ value: a, children: n }) => {
    let o = w(g),
      t = a ?? o.transition,
      c = S(() => ({ ...o, transition: t }), [JSON.stringify(t)]);
    return e(g.Provider, { value: c, children: n });
  },
  ve = r.create(f),
  Je = {
    "Dotted Highlight Tag": "axDSKQZXP",
    "Grey Linear Tag": "gNstPdAkh",
    "Highlight Tag": "AksRoqhcS",
    "Purple Tag": "KsCSAInQk",
    Dark: "WXhecYaG5",
  },
  Ae = ({
    backgroundBlur: a,
    height: n,
    highlight: o,
    icon: t,
    id: c,
    title: b,
    width: q,
    ...s
  }) => ({
    ...s,
    aZ7GvMqIl: t ?? s.aZ7GvMqIl ?? "Acorn",
    KS7KLFqN8: b ?? s.KS7KLFqN8 ?? "About Landin",
    rQKAY6456: o ?? s.rQKAY6456 ?? "NEW",
    variant: Je[s.variant] ?? s.variant ?? "AksRoqhcS",
    xAPRy8bad: a ?? s.xAPRy8bad,
  }),
  we = (a, n) =>
    a.layoutDependency ? n.join("-") + a.layoutDependency : n.join("-"),
  ke = A(function (a, n) {
    let o = D(null),
      t = n ?? o,
      c = k(),
      { activeLocale: b, setLocale: q } = I(),
      s = _(),
      {
        style: W,
        className: H,
        layoutId: O,
        variant: $,
        aZ7GvMqIl: ee,
        rQKAY6456: re,
        KS7KLFqN8: ae,
        xAPRy8bad: te,
        ...ne
      } = Ae(a),
      {
        baseVariant: d,
        classNames: oe,
        clearLoadingGesture: De,
        gestureHandlers: ie,
        gestureVariant: y,
        isLoading: Fe,
        setGestureState: Ce,
        setVariant: Ie,
        variants: v,
      } = K({
        cycleOrder: he,
        defaultVariant: "AksRoqhcS",
        ref: t,
        variant: $,
        variantClassNames: xe,
      }),
      i = we(a, v),
      se = h(ue, ...[B, V]),
      de = () =>
        !["axDSKQZXP", "gNstPdAkh", "KsCSAInQk", "WXhecYaG5"].includes(d),
      J = () => d === "axDSKQZXP",
      fe = () => d === "WXhecYaG5";
    return e(C, {
      id: O ?? c,
      children: e(ve, {
        animate: v,
        initial: !1,
        children: e(ye, {
          value: be,
          children: F(r.div, {
            ...ne,
            ...ie,
            className: h(se, "framer-9xh6r2", H, oe),
            "data-border": !0,
            "data-framer-name": "Highlight Tag",
            layoutDependency: i,
            layoutId: "AksRoqhcS",
            ref: t,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: `blur(${te}px)`,
              background:
                'linear-gradient(180deg, var(--token-082d630a-c036-4f77-8c8d-5d7b4650e064, rgba(255, 255, 255, 0.08)) /* {"name":"White 8%"} */ -100%, var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05)) /* {"name":"White 5%"} */ 100%)',
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              ...W,
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
            ...Z(
              {
                axDSKQZXP: { "data-framer-name": "Dotted Highlight Tag" },
                gNstPdAkh: { "data-framer-name": "Grey Linear Tag" },
                KsCSAInQk: { "data-framer-name": "Purple Tag" },
                WXhecYaG5: { "data-framer-name": "Dark" },
              },
              d,
              y,
            ),
            children: [
              e(r.div, {
                className: "framer-zg4psl",
                "data-framer-name": "Gradient Overlay",
                layoutDependency: i,
                layoutId: "qwNeQyBdz",
                style: {
                  background:
                    "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(79, 26, 214, 0.2) 171.8918918918919deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)",
                  opacity: 0.2,
                },
              }),
              de() &&
                e(r.div, {
                  className: "framer-12lke1p",
                  "data-border": !0,
                  "data-framer-name": "Highlighter",
                  layoutDependency: i,
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
                  children: e(u, {
                    __fromCanvasComponent: !0,
                    children: e(f, {
                      children: e(r.p, {
                        className: "framer-styles-preset-1mywhy3",
                        "data-styles-preset": "sQbLphIaJ",
                        children: "NEW",
                      }),
                    }),
                    className: "framer-ualbtz",
                    "data-framer-name": "Text",
                    fonts: ["Inter"],
                    layoutDependency: i,
                    layoutId: "E925uELmf",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: re,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
              e(u, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(r.p, {
                    className: "framer-styles-preset-m6m3zm",
                    "data-styles-preset": "qScbNYtt3",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: e(r.span, {
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
                layoutDependency: i,
                layoutId: "W4kfTr1gT",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: ae,
                variants: {
                  gNstPdAkh: {
                    "--extracted-r6o4lv":
                      "var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Z(
                  {
                    gNstPdAkh: {
                      children: e(f, {
                        children: e(r.p, {
                          className: "framer-styles-preset-m6m3zm",
                          "data-styles-preset": "qScbNYtt3",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))",
                          },
                          children: e(r.span, {
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
                  d,
                  y,
                ),
              }),
              J() &&
                e(r.div, {
                  className: "framer-5n0mfo",
                  "data-border": !0,
                  "data-framer-name": "Icon",
                  layoutDependency: i,
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
                  children: e(T, {
                    children: e(L, {
                      className: "framer-1i1ck70-container",
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: i,
                      layoutId: "PJodwANK0-container",
                      nodeId: "PJodwANK0",
                      rendersWithMotion: !0,
                      scopeId: "IHYC0Q7Lw",
                      children: e(p, {
                        color:
                          "var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: ee,
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
              J() &&
                e(ge, {
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
                  layoutDependency: i,
                  layoutId: "u9huyaQK_",
                  style: {
                    background:
                      'linear-gradient(90.00000000000155deg, rgba(79, 26, 214, 0) 0%, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) /* {"name":"Blue"} */ 50%, rgba(0, 85, 255, 0) 100%)',
                  },
                }),
              fe() &&
                e(r.div, {
                  className: "framer-1ovphbv",
                  "data-framer-name": "Shadow",
                  layoutDependency: i,
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
  Se = [
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
    ...z,
    ...G,
    '.framer-JAedJ[data-border="true"]::after, .framer-JAedJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  m = U(ke, Se, "framer-JAedJ"),
  ze = m;
m.displayName = "Tag/Primary Tag";
m.defaultProps = { height: 40, width: 173.5 };
P(m, {
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
  aZ7GvMqIl: X?.iconSelection && {
    ...X.iconSelection,
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
M(
  m,
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
    ...pe,
    ...x(Y),
    ...x(E),
  ],
  { supportsExplicitInterCodegen: !0 },
);
export { Ue as a, Ne as b, _e as c, ze as d };
//# sourceMappingURL=chunk-5H6VPJUI.mjs.map
