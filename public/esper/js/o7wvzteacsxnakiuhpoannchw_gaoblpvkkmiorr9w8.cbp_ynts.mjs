import { t as e } from "./rolldown-runtime.cwr5z7jy.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  I as a,
  M as o,
  N as s,
  O as c,
  R as l,
  _ as u,
  b as d,
  c as f,
  g as p,
  h as m,
  j as h,
  k as g,
  l as _,
  o as v,
  v as y,
  w as b,
  x,
} from "./react.dmfexh9x.mjs";
import {
  I as S,
  N as C,
  R as w,
  S as T,
  U as E,
  a as D,
  b as O,
  h as ee,
  r as k,
  t as A,
} from "./motion.bafvjhfu.mjs";
import {
  A as j,
  B as M,
  C as N,
  E as P,
  K as F,
  M as I,
  R as L,
  S as R,
  T as z,
  V as te,
  a as B,
  b as ne,
  c as re,
  ct as ie,
  dt as ae,
  gt as V,
  ht as H,
  i as U,
  j as W,
  lt as G,
  nt as oe,
  o as K,
  ot as se,
  p as ce,
  pt as le,
  rt as ue,
  st as de,
  u as q,
  ut as J,
  v as Y,
  vt as fe,
  w as pe,
  yt as me,
  z as X,
} from "./framer.bcmn9luh.mjs";
import {
  b as he,
  d as ge,
  g as _e,
  h as ve,
  m as ye,
  p as be,
  v as xe,
  x as Se,
  y as Ce,
} from "./shared-lib.bbcal4fm.mjs";
import {
  a as we,
  c as Te,
  i as Ee,
  l as De,
  n as Oe,
  o as ke,
  r as Ae,
  s as je,
  t as Me,
  u as Ne,
} from "./m3aphwwzw.clbc3scn.mjs";
import {
  a as Pe,
  c as Fe,
  h as Ie,
  i as Le,
  l as Re,
  m as ze,
  n as Be,
  o as Ve,
  p as He,
  r as Ue,
  s as We,
  t as Ge,
  u as Ke,
} from "./vtmx1ujdk.d4lsrcmq.mjs";
import { n as qe, r as Je } from "./augia20il.kexl8cpf.mjs";
function Ye(e) {
  let {
      images: t = [
        { src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`, alt: `Image 1` },
        { src: `/esper/images/ansat3jcvt4zglbwcuofe33q.jpg`, alt: `Image 2` },
        {
          src: `/esper/images/bynxev1zjyb9bhwh1iwbz1zos60.jpg`,
          alt: `Image 3`,
        },
        { src: `/esper/images/2utnej5atl2k3njaefwmbnra.jpg`, alt: `Image 4` },
      ],
      gridColumns: n = 2,
      gridRows: r = 2,
      gap: i = 8,
      borderRadius: a = 24,
      borderWidth: o = 0,
      borderColor: c = `#000000`,
      backgroundColor: d = `#FFFFFF`,
      opacity: p = 1,
      overlayColor: m = `#000000`,
      overlayOpacity: v = 0.2,
      showOverlay: y = !1,
      enableLightbox: b = !1,
      animationDuration: x = 0.3,
      lightboxBackgroundColor: S = `#000000`,
      lightboxOpacity: C = 0.9,
      enableSpanning: w = !1,
      spanConfig: T = [
        { imageIndex: 0, colSpan: 2, rowSpan: 1 },
        { imageIndex: 2, colSpan: 1, rowSpan: 2 },
      ],
      grayscaleOnHover: E = !1,
      style: D,
    } = e,
    O = g(() => {
      if (!w) {
        let e = n * r;
        return Array.from({ length: e }, (e, r) => ({
          imageIndex: t.length > 0 ? r % t.length : r % 4,
          colSpan: 1,
          rowSpan: 1,
          gridColumn: (r % n) + 1,
          gridRow: Math.floor(r / n) + 1,
          cellIndex: r,
        }));
      }
      let e = Array(r)
          .fill(null)
          .map(() => Array(n).fill(!1)),
        i = [],
        a = new Set();
      T.forEach((o) => {
        if (o.imageIndex < t.length && !a.has(o.imageIndex))
          for (let t = 0; t <= r - o.rowSpan; t++)
            for (let r = 0; r <= n - o.colSpan; r++) {
              let n = !0;
              for (let i = t; i < t + o.rowSpan; i++) {
                for (let t = r; t < r + o.colSpan; t++)
                  if (e[i][t]) {
                    n = !1;
                    break;
                  }
                if (!n) break;
              }
              if (n) {
                for (let n = t; n < t + o.rowSpan; n++)
                  for (let t = r; t < r + o.colSpan; t++) e[n][t] = !0;
                (i.push({
                  imageIndex: o.imageIndex,
                  colSpan: o.colSpan,
                  rowSpan: o.rowSpan,
                  gridColumn: r + 1,
                  gridRow: t + 1,
                  cellIndex: i.length,
                }),
                  a.add(o.imageIndex));
                return;
              }
            }
      });
      let o = 0;
      for (let s = 0; s < r; s++)
        for (let r = 0; r < n; r++)
          if (!e[s][r]) {
            for (; o < t.length && a.has(o); ) o++;
            let e = o < t.length ? o : null;
            (i.push({
              imageIndex: e,
              colSpan: 1,
              rowSpan: 1,
              gridColumn: r + 1,
              gridRow: s + 1,
              cellIndex: i.length,
            }),
              e !== null && (a.add(e), o++));
          }
      return i;
    }, [w, T, n, r, t.length]),
    [ee, k] = s(!1),
    [A, j] = s(null),
    [M, N] = s(0),
    P = (e) => {
      let n = w ? O[e].imageIndex : e,
        r = t[n] || {
          src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
          alt: `Default Image`,
        };
      if (b) {
        let e =
            (typeof r == `object` && r && r.src) ||
            `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
          t = (typeof r == `object` && r && r.alt) || `Image`;
        u(() => {
          (j({ src: e, alt: t }), N(n), k(!0));
        });
      }
    },
    F = () => {
      let e = (M + 1) % t.length,
        n = t[e] || {
          src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
          alt: `Default Image`,
        },
        r =
          (typeof n == `object` && n && n.src) ||
          `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
        i = (typeof n == `object` && n && n.alt) || `Image`;
      u(() => {
        (j({ src: r, alt: i }), N(e));
      });
    },
    I = () => {
      let e = M === 0 ? t.length - 1 : M - 1,
        n = t[e] || {
          src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
          alt: `Default Image`,
        },
        r =
          (typeof n == `object` && n && n.src) ||
          `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
        i = (typeof n == `object` && n && n.alt) || `Image`;
      u(() => {
        (j({ src: r, alt: i }), N(e));
      });
    },
    L = () => {
      u(() => {
        (k(!1), j(null), N(0));
      });
    };
  return (
    h(() => {
      if (!ee) return;
      let e = (e) => {
        switch (e.key) {
          case `ArrowRight`:
          case `ArrowDown`:
            (e.preventDefault(), F());
            break;
          case `ArrowLeft`:
          case `ArrowUp`:
            (e.preventDefault(), I());
            break;
          case `Escape`:
            (e.preventDefault(), L());
            break;
        }
      };
      return (
        l !== void 0 && l.addEventListener(`keydown`, e),
        () => {
          l !== void 0 && l.removeEventListener(`keydown`, e);
        }
      );
    }, [ee, M, t.length]),
    _(`div`, {
      style: {
        ...D,
        position: `relative`,
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
        borderRadius: a,
        backgroundColor: d,
      },
      children: [
        f(`div`, {
          style: {
            position: `relative`,
            width: `100%`,
            height: `100%`,
            display: `grid`,
            gridTemplateColumns: `repeat(${n}, 1fr)`,
            gridTemplateRows: `repeat(${r}, 1fr)`,
            gap: `${i}px`,
            padding: `${i}px`,
            zIndex: 2,
          },
          children: Array.from({ length: O.length }, (e, n) => {
            let r = O[n].imageIndex;
            if (r === null) return null;
            let s = [
                {
                  src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
                  alt: `Image 1`,
                },
                {
                  src: `/esper/images/ansat3jcvt4zglbwcuofe33q.jpg`,
                  alt: `Image 2`,
                },
                {
                  src: `/esper/images/bynxev1zjyb9bhwh1iwbz1zos60.jpg`,
                  alt: `Image 3`,
                },
                {
                  src: `/esper/images/2utnej5atl2k3njaefwmbnra.jpg`,
                  alt: `Image 4`,
                },
              ],
              l = (t && t.length > 0 && t[r]) || s[r] || s[0],
              u = (typeof l == `object` && l && l.src) || s[0].src,
              d = (typeof l == `object` && l && l.alt) || `Image`,
              h = O[n];
            return f(
              `div`,
              {
                onClick: () => P(n),
                style: {
                  width: `100%`,
                  height: `100%`,
                  border: o > 0 ? `${o}px solid ${c}` : `none`,
                  borderRadius: `${Math.max(0, a - i)}px`,
                  backgroundColor: `transparent`,
                  overflow: `hidden`,
                  position: `relative`,
                  cursor: b ? `pointer` : `default`,
                  transition: `all ${x}s ease-in-out`,
                  transform: `scale(1)`,
                  gridColumn: w
                    ? `${h.gridColumn} / span ${h.colSpan}`
                    : `auto`,
                  gridRow: w ? `${h.gridRow} / span ${h.rowSpan}` : `auto`,
                },
                children: _(`div`, {
                  style: {
                    position: `absolute`,
                    top: 0,
                    left: 0,
                    width: `100%`,
                    height: `100%`,
                    transition: `transform ${x}s ease-in-out`,
                    transform: `scale(1)`,
                    overflow: `hidden`,
                  },
                  className: `bento-card-${n}`,
                  onMouseEnter: (e) => {
                    if (
                      ((e.currentTarget.style.transform = `scale(1.03)`), E)
                    ) {
                      let t = e.currentTarget.querySelector(`img`);
                      t && (t.style.filter = `grayscale(100%)`);
                    }
                  },
                  onMouseLeave: (e) => {
                    if (((e.currentTarget.style.transform = `scale(1)`), E)) {
                      let t = e.currentTarget.querySelector(`img`);
                      t && (t.style.filter = `grayscale(0%)`);
                    }
                  },
                  children: [
                    f(`img`, {
                      src: u,
                      alt: d,
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        width: `100%`,
                        height: `100%`,
                        objectFit: `cover`,
                        objectPosition: `center`,
                        opacity: p,
                        transition: `filter ${x}s ease-in-out`,
                      },
                    }),
                    y &&
                      f(`div`, {
                        style: {
                          position: `absolute`,
                          top: 0,
                          left: 0,
                          width: `100%`,
                          height: `100%`,
                          backgroundColor: m,
                          opacity: v,
                          transition: `opacity ${x}s ease-in-out`,
                          zIndex: 1,
                        },
                      }),
                  ],
                }),
              },
              n,
            );
          }),
        }),
        ee &&
          A &&
          _(`div`, {
            style: {
              position: `fixed`,
              top: 0,
              left: 0,
              width: `100vw`,
              height: `100vh`,
              backgroundColor: S,
              opacity: C,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              zIndex: 1e3,
              cursor: `pointer`,
              animation: `fadeIn ${x}s ease-in-out`,
            },
            onClick: L,
            children: [
              f(`img`, {
                src: A.src,
                alt: A.alt,
                style: {
                  width: `60vh`,
                  height: `80vh`,
                  objectFit: `cover`,
                  borderRadius: a,
                  boxShadow: `0 20px 60px rgba(0, 0, 0, 0.5)`,
                  animation: `scaleIn ${x}s ease-in-out`,
                },
                onClick: (e) => e.stopPropagation(),
                className: `lightbox-image`,
              }),
              f(`button`, {
                onClick: L,
                style: {
                  position: `absolute`,
                  top: `20px`,
                  right: `20px`,
                  width: `40px`,
                  height: `40px`,
                  borderRadius: `50%`,
                  border: `none`,
                  backgroundColor: `rgba(255, 255, 255, 0.9)`,
                  color: `#000`,
                  fontSize: `20px`,
                  cursor: `pointer`,
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  transition: `all ${x}s ease-in-out`,
                  padding: 0,
                },
                onMouseEnter: (e) => {
                  ((e.currentTarget.style.backgroundColor = `rgba(255, 255, 255, 1)`),
                    (e.currentTarget.style.transform = `scale(1.1)`));
                },
                onMouseLeave: (e) => {
                  ((e.currentTarget.style.backgroundColor = `rgba(255, 255, 255, 0.9)`),
                    (e.currentTarget.style.transform = `scale(1)`));
                },
                children: _(`svg`, {
                  width: `20`,
                  height: `20`,
                  viewBox: `0 0 20 20`,
                  fill: `none`,
                  xmlns: `http://www.w3.org/2000/svg`,
                  style: { display: `block` },
                  children: [
                    f(`line`, {
                      x1: `5`,
                      y1: `5`,
                      x2: `15`,
                      y2: `15`,
                      stroke: `#000`,
                      strokeWidth: `2`,
                      strokeLinecap: `round`,
                    }),
                    f(`line`, {
                      x1: `15`,
                      y1: `5`,
                      x2: `5`,
                      y2: `15`,
                      stroke: `#000`,
                      strokeWidth: `2`,
                      strokeLinecap: `round`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        f(`style`, {
          children: `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: ${C}; }
                }
                
                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @media (max-width: 768px) {
                    .lightbox-image {
                        width: calc(100vw - 40px) !important;
                        height: auto !important;
                        max-height: calc(100vh - 80px) !important;
                    }
                }
            `,
        }),
      ],
    })
  );
}
var Xe = e(() => {
  (a(),
    v(),
    F(),
    n(),
    P(Ye, {
      images: {
        type: K.Array,
        title: `Images`,
        control: { type: K.ResponsiveImage },
        defaultValue: [
          {
            src: `/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg`,
            alt: `Image 1`,
          },
          { src: `/esper/images/ansat3jcvt4zglbwcuofe33q.jpg`, alt: `Image 2` },
          {
            src: `/esper/images/bynxev1zjyb9bhwh1iwbz1zos60.jpg`,
            alt: `Image 3`,
          },
          { src: `/esper/images/2utnej5atl2k3njaefwmbnra.jpg`, alt: `Image 4` },
          {
            src: `/esper/images/f9riwonpmlcmqvrihz8l8wyfei.jpg`,
            alt: `Image 5`,
          },
        ],
        maxCount: 20,
      },
      gridColumns: {
        type: K.Number,
        title: `Columns`,
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        displayStepper: !0,
      },
      gridRows: {
        type: K.Number,
        title: `Rows`,
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        displayStepper: !0,
      },
      gap: {
        type: K.Number,
        title: `Gap`,
        defaultValue: 8,
        min: 0,
        max: 50,
        step: 1,
        unit: `px`,
      },
      borderRadius: {
        type: K.Number,
        title: `Border Radius`,
        defaultValue: 24,
        min: 0,
        max: 100,
        step: 1,
        unit: `px`,
      },
      borderWidth: {
        type: K.Number,
        title: `Border Width`,
        defaultValue: 0,
        min: 0,
        max: 10,
        step: 1,
        unit: `px`,
      },
      borderColor: {
        type: K.Color,
        title: `Border Color`,
        defaultValue: `#000000`,
        hidden: ({ borderWidth: e }) => e === 0,
      },
      backgroundColor: {
        type: K.Color,
        title: `Background Color`,
        defaultValue: `#FFFFFF`,
      },
      opacity: {
        type: K.Number,
        title: `Opacity`,
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.1,
      },
      grayscaleOnHover: {
        type: K.Boolean,
        title: `Grayscale on Hover`,
        description: `Apply grayscale filter to images on hover`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      showOverlay: {
        type: K.Boolean,
        title: `Overlay`,
        description: `Toggle overlay on bento cards`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      overlayColor: {
        type: K.Color,
        title: `Overlay Color`,
        defaultValue: `#000000`,
        hidden: ({ showOverlay: e }) => !e,
      },
      overlayOpacity: {
        type: K.Number,
        title: `Overlay Opacity`,
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.1,
        hidden: ({ showOverlay: e }) => !e,
      },
      enableLightbox: {
        type: K.Boolean,
        title: `Lightbox`,
        description: `Enable image lightbox modal on card click.`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      lightboxBackgroundColor: {
        type: K.Color,
        title: `Lightbox Background`,
        defaultValue: `#000000`,
        hidden: ({ enableLightbox: e }) => !e,
      },
      lightboxOpacity: {
        type: K.Number,
        title: `Lightbox Opacity`,
        defaultValue: 0.9,
        min: 0,
        max: 1,
        step: 0.1,
        hidden: ({ enableLightbox: e }) => !e,
      },
      animationDuration: {
        type: K.Number,
        title: `Animation Duration`,
        defaultValue: 0.3,
        min: 0.1,
        max: 2,
        step: 0.1,
        unit: `s`,
      },
      enableSpanning: {
        type: K.Boolean,
        title: `Spanning`,
        description: `Allow cards to span multiple columns and rows`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      spanConfig: {
        type: K.Array,
        title: `Bento Span`,
        description: `Configure which images span multiple cells. Set imageIndex to the image position (0-based), colSpan for columns, and rowSpan for rows.`,
        control: {
          type: K.Object,
          controls: {
            imageIndex: {
              type: K.Number,
              title: `Image Index`,
              defaultValue: 0,
              min: 0,
              max: 10,
              step: 1,
              displayStepper: !0,
            },
            colSpan: {
              type: K.Number,
              title: `Col Span`,
              defaultValue: 1,
              min: 1,
              max: 10,
              step: 1,
              displayStepper: !0,
            },
            rowSpan: {
              type: K.Number,
              title: `Row Span`,
              defaultValue: 1,
              min: 1,
              max: 10,
              step: 1,
              displayStepper: !0,
            },
          },
        },
        defaultValue: [
          { imageIndex: 0, colSpan: 2, rowSpan: 1 },
          { imageIndex: 2, colSpan: 1, rowSpan: 2 },
        ],
        hidden: ({ enableSpanning: e }) => !e,
      },
    }));
});
function Ze(e) {
  let { raysColor: t } = e,
    n = i(null),
    r = i(null),
    a = i(null),
    o = i(null),
    c = i(null),
    l = i(),
    u = et(),
    [d, p] = s(!1),
    m = i(e.animation);
  (h(() => (p(!0), () => p(!1)), []),
    h(() => {
      m.current = e.animation;
    }, [e.animation]));
  let [_, v] = g(() => {
      if (t.mode === `random`) {
        let e = Math.random() * 360,
          t = 60 + Math.random() * 40;
        return [tt(e, t, 50), tt(e, t, 65)];
      } else
        return [
          [1, 1, 1],
          [1, 1, 1],
        ];
    }, [t]),
    [y, b, x] = g(() => {
      if (t.mode === `random`) return [_, v, 1];
      {
        let e = ``,
          r = ``;
        switch (t.mode) {
          case `single`:
            ((e = t.color), (r = t.color));
            break;
          case `multi`:
            ((e = t.color1), (r = t.color2));
            break;
        }
        let [i, a, o, s] = at(Qe(e, n)),
          [c, l, u, d] = at(Qe(r, n));
        return [[i, a, o], [c, l, u], Math.max(s, d)];
      }
    }, [t, u, n]);
  return (
    h(() => {
      p(!0);
      let t = n.current;
      if (!t) return;
      let i = new ve(),
        s = new be(75, t.clientWidth / t.clientHeight, 0.1, 1e3);
      s.position.z = 5;
      let u = new Ce({
        preserveDrawingBuffer: !0,
        premultipliedAlpha: !0,
        alpha: !0,
        antialias: !0,
        precision: `highp`,
        powerPreference: `high-performance`,
      });
      (u.setSize(t.clientWidth, t.clientHeight),
        u.setPixelRatio(1),
        t.appendChild(u.domElement));
      let d = new ye(1024, 1024),
        f = new _e({
          fragmentShader: st,
          vertexShader: ot,
          uniforms: {
            u_colors: {
              value: [new xe(y[0], y[1], y[2], 1), new xe(b[0], b[1], b[2], 1)],
            },
            u_intensity: { value: nt(e.intensity, 0, 100, 0, 0.5) },
            u_rays: { value: nt(e.rays, 0, 100, 0, 0.3) },
            u_reach: { value: nt(e.reach, 0, 100, 0, 0.5) },
            u_time: { value: Math.random() * 1e4 },
            u_mouse: { value: [0, 0] },
            u_resolution: { value: [t.clientWidth, t.clientHeight] },
            u_rayPos1: {
              value: [(e.position / 100) * t.clientWidth, rt * t.clientHeight],
            },
            u_rayPos2: {
              value: [
                (e.position / 100 + 0.02) * t.clientWidth,
                it * t.clientHeight,
              ],
            },
          },
          wireframe: !1,
          wireframeLinewidth: 0,
          dithering: !1,
          flatShading: !0,
          side: Se,
        }),
        h = new ge(d, f);
      (i.add(h),
        (a.current = i),
        (o.current = s),
        (r.current = u),
        (c.current = h));
      let g = 0,
        _ = (e) => {
          let t = m.current;
          t.animate || (g = e);
          let n = e - g;
          ((g = e),
            h.material instanceof _e &&
              t.animate &&
              (h.material.uniforms.u_time.value += (n * t.speed) / 1e3 / 10),
            u.render(i, s),
            (l.current = requestAnimationFrame(_)));
        };
      return (
        (l.current = requestAnimationFrame(_)),
        () => {
          (l.current && cancelAnimationFrame(l.current),
            u.dispose(),
            d.dispose(),
            f.dispose(),
            t.removeChild(u.domElement));
        }
      );
    }, [d]),
    h(() => {
      if (c.current?.material instanceof _e) {
        let t = c.current.material,
          r = n.current;
        if (!r) return;
        ((t.uniforms.u_colors.value = [
          new xe(y[0], y[1], y[2], 1),
          new xe(b[0], b[1], b[2], 1),
        ]),
          (t.uniforms.u_intensity.value = nt(e.intensity, 0, 100, 0, 0.5)),
          (t.uniforms.u_rays.value = nt(e.rays, 0, 100, 0, 0.3)),
          (t.uniforms.u_reach.value = nt(e.reach, 0, 100, 0, 0.5)),
          (t.uniforms.u_rayPos1.value = [
            (e.position / 100) * r.clientWidth,
            rt * r.clientHeight,
          ]),
          (t.uniforms.u_rayPos2.value = [
            (e.position / 100 + 0.02) * r.clientWidth,
            it * r.clientHeight,
          ]));
      }
    }, [e.intensity, e.rays, e.reach, e.position, y, b]),
    f(`div`, {
      ref: n,
      style: {
        borderRadius: e.radius,
        overflow: `hidden`,
        backgroundColor: e.backgroundColor,
        ...e.style,
      },
    })
  );
}
function Qe(e, t) {
  if (e.startsWith(`var(`)) {
    let { variableName: n, defaultValue: r } = $e(e),
      i = r || ``;
    if (n && typeof document < `u`) {
      let e = getComputedStyle(t?.current || document.body);
      return (e && e.getPropertyValue(n).trim()) || i;
    }
    return i;
  } else return e;
}
function $e(e) {
  let t =
    /var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:"[^"]*"|'[^']*'|[^)]+)))?\s*\)/.exec(e);
  if (t) {
    let e = t[1],
      n = t[2] || null;
    return (
      (n &&= ((n = n.replace(/^["']|["']$/g, ``)), n.trim())),
      { variableName: e, defaultValue: n }
    );
  }
  return { variableName: ``, defaultValue: `` };
}
function et() {
  let [e, t] = s(!1);
  return (
    h(() => {
      let e = l.matchMedia(`(prefers-color-scheme: dark)`),
        n = (e) => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              t(e.matches);
            }, 80);
          });
        };
      return (t(e.matches), e.addListener(n), () => e.removeListener(n));
    }, []),
    e
  );
}
function tt(e, t, n) {
  ((t /= 100), (n /= 100));
  let r = (1 - Math.abs(2 * n - 1)) * t,
    i = r * (1 - Math.abs(((e / 60) % 2) - 1)),
    a = n - r / 2,
    o = 0,
    s = 0,
    c = 0;
  return (
    e >= 0 && e < 60
      ? ((o = r), (s = i), (c = 0))
      : e >= 60 && e < 120
        ? ((o = i), (s = r), (c = 0))
        : e >= 120 && e < 180
          ? ((o = 0), (s = r), (c = i))
          : e >= 180 && e < 240
            ? ((o = 0), (s = i), (c = r))
            : e >= 240 && e < 300
              ? ((o = i), (s = 0), (c = r))
              : e >= 300 && e < 360 && ((o = r), (s = 0), (c = i)),
    [o + a, s + a, c + a]
  );
}
function nt(e, t, n, r, i) {
  return r + ((e - t) / (n - t)) * (i - r);
}
var rt,
  it,
  at,
  ot,
  st,
  ct = e(() => {
    (a(),
      v(),
      F(),
      n(),
      he(),
      (rt = -0.4),
      (it = -0.5),
      (Ze.displayName = `Light Rays`),
      P(Ze, {
        raysColor: {
          type: K.Object,
          title: `Color`,
          controls: {
            mode: {
              type: K.Enum,
              defaultValue: `single`,
              options: [`random`, `single`, `multi`],
              optionTitles: [`Random`, `Single`, `Multi`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            color: {
              type: K.Color,
              defaultValue: `#FFF`,
              hidden: (e) => e.mode !== `single`,
            },
            color1: {
              type: K.Color,
              defaultValue: `#FFF`,
              hidden: (e) => e.mode !== `multi`,
            },
            color2: {
              type: K.Color,
              defaultValue: `#FFCB47`,
              hidden: (e) => e.mode !== `multi`,
            },
          },
        },
        backgroundColor: {
          type: K.Color,
          defaultValue: `#000`,
          optional: !0,
          title: `Background`,
        },
        animation: {
          type: K.Object,
          icon: `effect`,
          controls: {
            animate: { type: K.Boolean, defaultValue: !0 },
            speed: {
              type: K.Number,
              defaultValue: 10,
              min: 1,
              max: 100,
              step: 1,
              hidden: (e) => !e.animate,
            },
          },
        },
        intensity: {
          type: K.Number,
          defaultValue: 50,
          min: 0,
          max: 100,
          step: 1,
        },
        rays: { type: K.Number, defaultValue: 30, min: 0, max: 100, step: 1 },
        reach: { type: K.Number, defaultValue: 40, min: 0, max: 100, step: 1 },
        position: {
          type: K.Number,
          defaultValue: 80,
          min: 0,
          max: 100,
          step: 1,
          unit: `%`,
        },
        radius: {
          type: K.BorderRadius,
          defaultValue: `0px`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      d.Component,
      (at = (e) => {
        let t = 1,
          n = 1,
          r = 1,
          i = 1;
        if (e && typeof e == `string`) {
          if (e.startsWith(`rgba(`)) {
            let a = e.slice(5, -1).split(`,`);
            ((t = parseInt(a[0]) / 255),
              (n = parseInt(a[1]) / 255),
              (r = parseInt(a[2]) / 255),
              (i = parseFloat(a[3])));
          } else if (e.startsWith(`rgb(`)) {
            let i = e.slice(4, -1).split(`,`);
            ((t = parseInt(i[0]) / 255),
              (n = parseInt(i[1]) / 255),
              (r = parseInt(i[2]) / 255));
          } else if (e.startsWith(`#`)) {
            let a = e.slice(1);
            a.length === 3
              ? ((t = parseInt(a[0] + a[0], 16) / 255),
                (n = parseInt(a[1] + a[1], 16) / 255),
                (r = parseInt(a[2] + a[2], 16) / 255))
              : a.length === 6
                ? ((t = parseInt(a.slice(0, 2), 16) / 255),
                  (n = parseInt(a.slice(2, 4), 16) / 255),
                  (r = parseInt(a.slice(4, 6), 16) / 255))
                : a.length === 8 &&
                  ((t = parseInt(a.slice(0, 2), 16) / 255),
                  (n = parseInt(a.slice(2, 4), 16) / 255),
                  (r = parseInt(a.slice(4, 6), 16) / 255),
                  (i = parseInt(a.slice(6, 8), 16) / 255));
          }
        }
        return [t, n, r, i];
      }),
      (ot = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`),
      (st = `
// Uniforms

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

#endif

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif

#ifndef FNC_QUINTIC
#define FNC_QUINTIC 

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_PNOISE
#define FNC_PNOISE

float pnoise(in vec2 P, in vec2 rep) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, rep.xyxy); 
    Pi = mod289(Pi);        
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
    vec4 gy = abs(gx) - 0.5 ;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

float pnoise(in vec3 P, in vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep); 
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = quintic(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

float pnoise(in vec4 P, in vec4 rep) {
    vec4 Pi0 = mod(floor(P), rep); 
    vec4 Pi1 = mod(Pi0 + 1.0, rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec4 Pf0 = fract(P); 
    vec4 Pf1 = Pf0 - 1.0; 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = vec4(Pi0.zzzz);
    vec4 iz1 = vec4(Pi1.zzzz);
    vec4 iw0 = vec4(Pi0.wwww);
    vec4 iw1 = vec4(Pi1.wwww);

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 ixy00 = permute(ixy0 + iw0);
    vec4 ixy01 = permute(ixy0 + iw1);
    vec4 ixy10 = permute(ixy1 + iw0);
    vec4 ixy11 = permute(ixy1 + iw1);

    vec4 gx00 = ixy00 * (1.0 / 7.0);
    vec4 gy00 = floor(gx00) * (1.0 / 7.0);
    vec4 gz00 = floor(gy00) * (1.0 / 6.0);
    gx00 = fract(gx00) - 0.5;
    gy00 = fract(gy00) - 0.5;
    gz00 = fract(gz00) - 0.5;
    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
    vec4 sw00 = step(gw00, vec4(0.0));
    gx00 -= sw00 * (step(0.0, gx00) - 0.5);
    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

    vec4 gx01 = ixy01 * (1.0 / 7.0);
    vec4 gy01 = floor(gx01) * (1.0 / 7.0);
    vec4 gz01 = floor(gy01) * (1.0 / 6.0);
    gx01 = fract(gx01) - 0.5;
    gy01 = fract(gy01) - 0.5;
    gz01 = fract(gz01) - 0.5;
    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
    vec4 sw01 = step(gw01, vec4(0.0));
    gx01 -= sw01 * (step(0.0, gx01) - 0.5);
    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

    vec4 gx10 = ixy10 * (1.0 / 7.0);
    vec4 gy10 = floor(gx10) * (1.0 / 7.0);
    vec4 gz10 = floor(gy10) * (1.0 / 6.0);
    gx10 = fract(gx10) - 0.5;
    gy10 = fract(gy10) - 0.5;
    gz10 = fract(gz10) - 0.5;
    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
    vec4 sw10 = step(gw10, vec4(0.0));
    gx10 -= sw10 * (step(0.0, gx10) - 0.5);
    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

    vec4 gx11 = ixy11 * (1.0 / 7.0);
    vec4 gy11 = floor(gx11) * (1.0 / 7.0);
    vec4 gz11 = floor(gy11) * (1.0 / 6.0);
    gx11 = fract(gx11) - 0.5;
    gy11 = fract(gy11) - 0.5;
    gz11 = fract(gz11) - 0.5;
    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
    vec4 sw11 = step(gw11, vec4(0.0));
    gx11 -= sw11 * (step(0.0, gx11) - 0.5);
    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
    g0000 *= norm00.x;
    g0100 *= norm00.y;
    g1000 *= norm00.z;
    g1100 *= norm00.w;

    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
    g0001 *= norm01.x;
    g0101 *= norm01.y;
    g1001 *= norm01.z;
    g1101 *= norm01.w;

    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
    g0010 *= norm10.x;
    g0110 *= norm10.y;
    g1010 *= norm10.z;
    g1110 *= norm10.w;

    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
    g0011 *= norm11.x;
    g0111 *= norm11.y;
    g1011 *= norm11.z;
    g1111 *= norm11.w;

    float n0000 = dot(g0000, Pf0);
    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
    float n1111 = dot(g1111, Pf1);

    vec4 fade_xyzw = quintic(Pf0);
    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
    return 2.2 * n_xyzw;
}
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_SRGB2RGB
#define FNC_SRGB2RGB

float srgb2rgb(float channel) {
    return (channel < 0.04045) ? channel * 0.0773993808 : pow((channel + 0.055) * 0.947867298578199, 2.4);
}

vec3 srgb2rgb(vec3 srgb) {
    return vec3(srgb2rgb(srgb.r + SRGB_EPSILON), 
                srgb2rgb(srgb.g + SRGB_EPSILON),
                srgb2rgb(srgb.b + SRGB_EPSILON));
}

vec4 srgb2rgb(vec4 srgb) {
    return vec4(srgb2rgb(srgb.rgb), srgb.a);
}

#endif

#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_RGB2SRGB
#define FNC_RGB2SRGB

float rgb2srgb(float channel) {
    return (channel < 0.0031308) ? channel * 12.92 : 1.055 * pow(channel, 0.4166666666666667) - 0.055;
}

vec3 rgb2srgb(vec3 rgb) {
    return saturate(vec3(rgb2srgb(rgb.r - SRGB_EPSILON), rgb2srgb(rgb.g - SRGB_EPSILON), rgb2srgb(rgb.b - SRGB_EPSILON)));
}

vec4 rgb2srgb(vec4 rgb) {
    return vec4(rgb2srgb(rgb.rgb), rgb.a);
}

#endif

#ifndef FNC_MIXOKLAB
#define FNC_MIXOKLAB
vec3 mixOklab( vec3 colA, vec3 colB, float h ) {

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    colA = srgb2rgb(colA);
    colB = srgb2rgb(colB);
    #endif

    const mat3 kCONEtoLMS = mat3(                
         0.4121656120,  0.2118591070,  0.0883097947,
         0.5362752080,  0.6807189584,  0.2818474174,
         0.0514575653,  0.1074065790,  0.6302613616);
    const mat3 kLMStoCONE = mat3(
         4.0767245293, -1.2681437731, -0.0041119885,
        -3.3072168827,  2.6093323231, -0.7034763098,
         0.2307590544, -0.3411344290,  1.7068625689);

    vec3 lmsA = pow( kCONEtoLMS * colA, vec3(1.0/3.0) );
    vec3 lmsB = pow( kCONEtoLMS * colB, vec3(1.0/3.0) );
    
    vec3 lms = mix( lmsA, lmsB, h );

    vec3 rgb = kLMStoCONE*(lms*lms*lms);

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    return rgb2srgb(rgb);
    #else
    return rgb;
    #endif
}

vec4 mixOklab( vec4 colA, vec4 colB, float h ) {
    return vec4( mixOklab(colA.rgb, colB.rgb, h), mix(colA.a, colB.a, h) );
}
#endif


float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed)
{
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    
    // Calculate the diagonal length
    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;
    
    // Set the parameters of the sun rays
    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214*speed;
    float raySeedB1 = 21.11349*speed;
    float raySpeed1 = 1.5*speed;
    
    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910*speed;
    float raySeedB2 = 18.0234*speed;
    float raySpeed2 = 1.1*speed;
    
    // Calculate ray strengths
    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);
    
    // Calculate brightness attenuation
    float brightness = 1.0*u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);
    
    // Calculate alpha values while preserving color
    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;
    
    // Pre-multiply the colors with their alpha values
    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;
    
    // Blend the pre-multiplied colors
    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);
    
    // Un-premultiply the final color
    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);
    
    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}
`));
  }),
  lt,
  ut,
  dt,
  ft = e(() => {
    (F(),
      W.loadFonts([
        `GF;Instrument Sans-600`,
        `GF;Instrument Sans-700`,
        `GF;Instrument Sans-700italic`,
        `GF;Instrument Sans-600italic`,
      ]),
      (lt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Instrument Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSQb_gfwmS0v3_7Y.woff2`,
              weight: `600`,
            },
            {
              family: `Instrument Sans`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSQi_gfwmS0v3_7Y.woff2`,
              weight: `700`,
            },
            {
              family: `Instrument Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v1/pxigypc9vsFDm051Uf6KVwgkfoSbSnNPooZAN0lInHGpCWNE27lgU-XJojENugixkywN2u7YUwU.woff2`,
              weight: `700`,
            },
            {
              family: `Instrument Sans`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v1/pxigypc9vsFDm051Uf6KVwgkfoSbSnNPooZAN0lInHGpCWNE27lgU-XJojENujGxkywN2u7YUwU.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (ut = [
        `.framer-FW2c6 .framer-styles-preset-1c1t1ob:not(.rich-text-wrapper), .framer-FW2c6 .framer-styles-preset-1c1t1ob.rich-text-wrapper h5 { --framer-font-family: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a134e78b-4c94-41f6-83a6-b79426a5ee88, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-FW2c6 .framer-styles-preset-1c1t1ob:not(.rich-text-wrapper), .framer-FW2c6 .framer-styles-preset-1c1t1ob.rich-text-wrapper h5 { --framer-font-family: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a134e78b-4c94-41f6-83a6-b79426a5ee88, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-FW2c6 .framer-styles-preset-1c1t1ob:not(.rich-text-wrapper), .framer-FW2c6 .framer-styles-preset-1c1t1ob.rich-text-wrapper h5 { --framer-font-family: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-family-italic: "Instrument Sans", "Instrument Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a134e78b-4c94-41f6-83a6-b79426a5ee88, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (dt = `framer-FW2c6`));
  });
function pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    (v(),
      F(),
      A(),
      n(),
      ft(),
      (mt = { knV6KwmH_: { hover: !0 }, v_X9zGVvr: { hover: !0 } }),
      (ht = [`knV6KwmH_`, `v_X9zGVvr`]),
      (gt = `framer-3aJFl`),
      (_t = { knV6KwmH_: `framer-v-1gxryuz`, v_X9zGVvr: `framer-v-l03fk8` }),
      (vt = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (yt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (bt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (xt = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (St = T.create(o)),
      (Ct = { "Black Button": `v_X9zGVvr`, "Orange Button": `knV6KwmH_` }),
      (wt = ({
        height: e,
        icon: t,
        id: n,
        leftIconVisible: r,
        link: i,
        newTab: a,
        padding: o,
        rightIconVisible: s,
        text: c,
        width: l,
        ...u
      }) => ({
        ...u,
        AyWRicLnL: r ?? u.AyWRicLnL ?? !0,
        dnbs0gLnU: a ?? u.dnbs0gLnU,
        O2s5dHJnY: s ?? u.O2s5dHJnY ?? !0,
        variant: Ct[u.variant] ?? u.variant ?? `knV6KwmH_`,
        VhfJsbfeu: t ??
          u.VhfJsbfeu ?? {
            alt: ``,
            pixelHeight: 25,
            pixelWidth: 25,
            src: `/esper/images/48e7uwhy3tyughzcs7vxsdba.svg`,
          },
        WBHDxVlAg: o ?? u.WBHDxVlAg ?? `16px 24px 16px 24px`,
        wjO8MQqIi: c ?? u.wjO8MQqIi ?? `Start Your Project Today`,
        yRT8xCm66: i ?? u.yRT8xCm66,
      })),
      (Tt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Et = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: s, setLocale: c } = J();
          ue();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              yRT8xCm66: m,
              dnbs0gLnU: h,
              wjO8MQqIi: g,
              AyWRicLnL: v,
              O2s5dHJnY: b,
              VhfJsbfeu: x,
              WBHDxVlAg: S,
              ...C
            } = wt(e),
            {
              baseVariant: w,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: ee,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = H({
              cycleOrder: ht,
              defaultVariant: `knV6KwmH_`,
              enabledGestures: mt,
              ref: r,
              variant: p,
              variantClassNames: _t,
            }),
            F = Tt(e, P),
            I = j(gt, dt);
          return f(k, {
            id: d ?? a,
            children: f(St, {
              animate: P,
              initial: !1,
              children: f(xt, {
                value: yt,
                children: f(ce, {
                  href: m,
                  motionChild: !0,
                  nodeId: `knV6KwmH_`,
                  openInNewTab: h,
                  scopeId: `n8myxUgMD`,
                  smoothScroll: !1,
                  children: _(T.a, {
                    ...C,
                    ...O,
                    className: `${j(I, `framer-1gxryuz`, u, E)} framer-11ckt1l`,
                    "data-framer-name": `Orange Button`,
                    layoutDependency: F,
                    layoutId: `knV6KwmH_`,
                    ref: r,
                    style: {
                      "--152s37q": vt(S),
                      background: `linear-gradient(180deg, rgb(255, 119, 61) 0%, rgb(197, 57, 0) 100%)`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      boxShadow: `inset 0px 1px 5px 0px rgba(0, 0, 0, 0.25)`,
                      ...l,
                    },
                    variants: {
                      "knV6KwmH_-hover": {
                        background: `linear-gradient(180deg, rgb(255, 91, 20) 0%, rgb(158, 45, 0) 100%)`,
                      },
                      "v_X9zGVvr-hover": {
                        background: `linear-gradient(180deg, rgb(36, 36, 40) 0%, rgb(36, 36, 40) 100%)`,
                      },
                      v_X9zGVvr: {
                        background: `linear-gradient(180deg, rgb(24, 24, 27) 0%, rgb(24, 24, 27) 100%)`,
                        boxShadow: `inset 0px -2px 5px 0px rgba(255, 255, 255, 0.25)`,
                      },
                    },
                    ...pt(
                      {
                        "knV6KwmH_-hover": { "data-framer-name": void 0 },
                        "v_X9zGVvr-hover": { "data-framer-name": void 0 },
                        v_X9zGVvr: { "data-framer-name": `Black Button` },
                      },
                      w,
                      ee,
                    ),
                    children: [
                      v &&
                        f(q, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 25,
                            pixelWidth: 25,
                            sizes: `24px`,
                            ...bt(x),
                          },
                          className: `framer-1pg750a`,
                          "data-framer-name": `Left Icon`,
                          layoutDependency: F,
                          layoutId: `GiZqqS4mR`,
                        }),
                      f(R, {
                        __fromCanvasComponent: !0,
                        children: f(o, {
                          children: f(T.p, {
                            className: `framer-styles-preset-1c1t1ob`,
                            "data-styles-preset": `uykeYu81p`,
                            children: `Start Your Project Today`,
                          }),
                        }),
                        className: `framer-swkj2d`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: F,
                        layoutId: `VIzqt5LkG`,
                        style: { "--framer-paragraph-spacing": `0px` },
                        text: g,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      b &&
                        f(q, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 18,
                            pixelWidth: 18,
                            sizes: `18px`,
                            ...bt(x),
                          },
                          className: `framer-r9aeca`,
                          "data-framer-name": `Right Icon`,
                          layoutDependency: F,
                          layoutId: `gpUVku80W`,
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-3aJFl.framer-11ckt1l, .framer-3aJFl .framer-11ckt1l { display: block; }`,
          `.framer-3aJFl.framer-1gxryuz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: var(--152s37q); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3aJFl .framer-1pg750a { flex: none; height: 24px; overflow: visible; position: relative; width: 24px; }`,
          `.framer-3aJFl .framer-swkj2d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-3aJFl .framer-r9aeca { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }`,
          ...ut,
        ],
        `framer-3aJFl`,
      )),
      (Dt = Et),
      (Et.displayName = `Buttons/Primary Button`),
      (Et.defaultProps = { height: 56, width: 321 }),
      P(Et, {
        variant: {
          options: [`knV6KwmH_`, `v_X9zGVvr`],
          optionTitles: [`Orange Button`, `Black Button`],
          title: `Variant`,
          type: K.Enum,
        },
        yRT8xCm66: { title: `Link`, type: K.Link },
        dnbs0gLnU: { defaultValue: !1, title: `New Tab`, type: K.Boolean },
        wjO8MQqIi: {
          defaultValue: `Start Your Project Today`,
          displayTextArea: !1,
          title: `Text`,
          type: K.String,
        },
        AyWRicLnL: {
          defaultValue: !0,
          title: `Left Icon Visible`,
          type: K.Boolean,
        },
        O2s5dHJnY: {
          defaultValue: !0,
          title: `Right Icon Visible`,
          type: K.Boolean,
        },
        VhfJsbfeu: {
          __defaultAssetReference: `data:framer/asset-reference,48e7uwhy3tyuGhZCS7vXSdbA.svg?originalFilename=Letter.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,48e7uwhy3tyuGhZCS7vXSdbA.svg?originalFilename=Letter.svg&preferredSize=auto`,
          },
          title: `Icon`,
          type: K.ResponsiveImage,
        },
        WBHDxVlAg: {
          defaultValue: `16px 24px 16px 24px`,
          title: `Padding`,
          type: K.Padding,
        },
      }),
      z(
        Et,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/esper/font/5vvr9vy74if2i6bqbjvbw7sy1pq.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/esper/font/eor0mi4hntlgwnn9if640ezzxco.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/esper/font/y9k9qrlzaqio88klkmbd8vomqc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/esper/font/oyrd2tbibpvojxiihnlooxny9m.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/esper/font/jeywfuapfzhqheg8u5gtpdz7wq.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/esper/font/vqyevyayhtarfwpquzqgpnds.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/esper/font/b6y37fthzealdunqhicbt6futy.woff2`,
                weight: `400`,
              },
            ],
          },
          ...X(lt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  kt,
  At,
  jt,
  Mt = e(() => {
    (F(),
      W.loadFonts([
        `FR;InterDisplay-Medium`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-MediumItalic`,
      ]),
      (kt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/epun3mcjzajihnycdvkbfizkyy0.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/v3j1l0o5vpfke26sw4hcpxcfho.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/f3kdpd2n0ctowv5huazjjgm.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/0idmxkizu9gozoclqiqsv5rvetu.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/r0mv3negma0akcqsnfotg32las.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/8yov9puxqux7vd7zxlnykqmkmk.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/ii21jnsjkulbkshhxklapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/i11lrmubdqzweplj62kkvsklu5y.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/ujfzpdy3qgudktqm4q9cxhkfia8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/8exwvhjy2dhj4n5prylvmrekmq.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/uteedek21ho5jdxeuldzdscuqpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/ig8b8nzy11hziweiynkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/n9cxki3tsmcpec6mct9nzishsuq.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/qctqfojqj9aibrsip0ahcqpfxn8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/fxvvh2jezlehncehkhphh0frsl0.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/7pscaneb6m7n2hf2jkemdqzcir4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/qs4ujqyyatcvv9rodk0zx9khky8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/vfd2n20ym7v0hruebheyafsmmby.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/4oio9fb59bn3ckfwz7picj28z9s.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/tbccizr9kipkrce5i9atfpp7a4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/f5lmfd3fcau7twiybi4dlww4ks.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/a5p4nkycjllqxgxas1lzg8pnsc.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/vupfygr1n1zyxscvwggi8hrf3le.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/jplzyzqfhxreyadwk9yrkqlwq.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/ssikp2tfvpvfk7yvenpe5h87a.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/gawbeo7iejsrz4kcrh6yrru8o.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/xszma7kiwadctstax171ey3lams.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/8e92vrr3j1gdqzepmesbd2u0jxa.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (At = [
        `.framer-XmJ2D .framer-styles-preset-13p7sgr:not(.rich-text-wrapper), .framer-XmJ2D .framer-styles-preset-13p7sgr.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-XmJ2D .framer-styles-preset-13p7sgr:not(.rich-text-wrapper), .framer-XmJ2D .framer-styles-preset-13p7sgr.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-XmJ2D .framer-styles-preset-13p7sgr:not(.rich-text-wrapper), .framer-XmJ2D .framer-styles-preset-13p7sgr.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
      ]),
      (jt = `framer-XmJ2D`));
  });
function Nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Z,
  Kt = e(() => {
    (v(),
      F(),
      A(),
      n(),
      Te(),
      Mt(),
      (Pt = { AvHcalqs8: { hover: !0 } }),
      (Ft = [`AvHcalqs8`, `qoawDqr0s`]),
      (It = `framer-jQCtd`),
      (Lt = { AvHcalqs8: `framer-v-1hq3fz8`, qoawDqr0s: `framer-v-a2txb7` }),
      (Rt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (zt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Bt = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (Vt = T.create(o)),
      (Ht = { Desktop: `AvHcalqs8`, Phone: `qoawDqr0s` }),
      (Ut = ({
        height: e,
        id: t,
        image: n,
        link: r,
        name1: i,
        position: a,
        width: o,
        ...s
      }) => ({
        ...s,
        fb_jC0b_S: r ?? s.fb_jC0b_S,
        g00LJCSg8: a ?? s.g00LJCSg8 ?? `Creative Director`,
        variant: Ht[s.variant] ?? s.variant ?? `AvHcalqs8`,
        WiQAc6QPE: n ??
          s.WiQAc6QPE ?? {
            pixelHeight: 500,
            pixelWidth: 400,
            src: `/esper/images/oelospppndlbkx4lchlitv9qh5k.jpg?width=400&height=500`,
          },
        x4R5Mb5Jq: i ?? s.x4R5Mb5Jq ?? `Alex Johnson`,
      })),
      (Wt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Gt = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: s, setLocale: c } = J(),
            l = ue(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              WiQAc6QPE: h,
              x4R5Mb5Jq: g,
              g00LJCSg8: v,
              fb_jC0b_S: b,
              ...x
            } = Ut(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: ee,
              setVariant: A,
              variants: N,
            } = H({
              cycleOrder: Ft,
              defaultVariant: `AvHcalqs8`,
              enabledGestures: Pt,
              ref: r,
              variant: m,
              variantClassNames: Lt,
            }),
            P = Wt(e, N),
            F = j(It, jt, we),
            I = () => S !== `qoawDqr0s`;
          return f(k, {
            id: p ?? a,
            children: f(Vt, {
              animate: N,
              initial: !1,
              children: f(Bt, {
                value: Rt,
                children: f(T.div, {
                  ...x,
                  ...E,
                  className: j(F, `framer-1hq3fz8`, d, C),
                  "data-framer-name": `Desktop`,
                  layoutDependency: P,
                  layoutId: `AvHcalqs8`,
                  ref: r,
                  style: { ...u },
                  ...Nt(
                    {
                      "AvHcalqs8-hover": { "data-framer-name": void 0 },
                      qoawDqr0s: { "data-framer-name": `Phone` },
                    },
                    S,
                    D,
                  ),
                  children: f(ce, {
                    href: b,
                    motionChild: !0,
                    nodeId: `a6UT4ZBB7`,
                    openInNewTab: !0,
                    scopeId: `B1Ki4JSbV`,
                    children: _(T.a, {
                      className: `framer-14ovzi3 framer-y1pa43`,
                      "data-framer-name": `Card`,
                      layoutDependency: P,
                      layoutId: `a6UT4ZBB7`,
                      children: [
                        _(T.div, {
                          className: `framer-9xp6kq`,
                          "data-framer-name": `Member Image`,
                          layoutDependency: P,
                          layoutId: `qM7pB_8Ul`,
                          style: {
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: [
                            f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: M((l?.y || 0) + 0 + 0 + 0 + 27.7 + 0),
                                sizes: l?.width || `100vw`,
                                ...zt(h),
                              },
                              className: `framer-1oeo7ga`,
                              "data-framer-name": `Image`,
                              layoutDependency: P,
                              layoutId: `I9725:242;9725:230`,
                              style: {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              variants: {
                                "AvHcalqs8-hover": {
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              },
                              ...Nt(
                                {
                                  "AvHcalqs8-hover": {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (l?.y || 0) + 0 + 0 + 0 + 27.7 + -37.5,
                                      ),
                                      sizes: `calc(${l?.width || `100vw`} * 1.15)`,
                                      ...zt(h),
                                    },
                                  },
                                  qoawDqr0s: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (l?.y || 0) + 0 + 0 + 0 + 0 + 0,
                                      ),
                                      sizes: l?.width || `100vw`,
                                      ...zt(h),
                                    },
                                  },
                                },
                                S,
                                D,
                              ),
                            }),
                            I() &&
                              f(T.div, {
                                className: `framer-z9yiom`,
                                "data-framer-name": `Light Effect`,
                                layoutDependency: P,
                                layoutId: `qM7pB_8UlitcqZJ9rK`,
                                style: {
                                  background: `radial-gradient(40.2% 99.24161073825503% at 50% 50%, rgba(222, 222, 222, 0.2) 0%, rgba(68, 68, 68, 0) 100%)`,
                                  filter: `blur(15px)`,
                                  rotate: 45,
                                  WebkitFilter: `blur(15px)`,
                                },
                              }),
                          ],
                        }),
                        f(T.div, {
                          className: `framer-1sg81zm`,
                          "data-framer-name": `Text+Icon`,
                          layoutDependency: P,
                          layoutId: `I9725:242;9725:323`,
                          children: _(T.div, {
                            className: `framer-1uwndhu`,
                            "data-framer-name": `Text`,
                            layoutDependency: P,
                            layoutId: `I9725:242;9725:233`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.h3, {
                                    className: `framer-styles-preset-13p7sgr`,
                                    "data-styles-preset": `JUBZ8oPFx`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255)))`,
                                    },
                                    children: `Alex Johnson`,
                                  }),
                                }),
                                className: `framer-nsuui8`,
                                "data-framer-name": `Alex Johnson`,
                                fonts: [`Inter`],
                                layoutDependency: P,
                                layoutId: `I9725:242;9725:231`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-1ypvmaz`,
                                    "data-styles-preset": `hkyTNy7BG`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214)))`,
                                    },
                                    children: `Creative Director`,
                                  }),
                                }),
                                className: `framer-1rquw6u`,
                                "data-framer-name": `Creative Director`,
                                fonts: [`Inter`],
                                layoutDependency: P,
                                layoutId: `I9725:242;9725:232`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jQCtd.framer-y1pa43, .framer-jQCtd .framer-y1pa43 { display: block; }`,
          `.framer-jQCtd.framer-1hq3fz8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 578px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 400px; }`,
          `.framer-jQCtd .framer-14ovzi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 633px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-jQCtd .framer-9xp6kq { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 500px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jQCtd .framer-1oeo7ga { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
          `.framer-jQCtd .framer-z9yiom { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 466px); left: -450px; overflow: hidden; position: absolute; top: -450px; width: 466px; }`,
          `.framer-jQCtd .framer-1sg81zm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 100%; }`,
          `.framer-jQCtd .framer-1uwndhu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-jQCtd .framer-nsuui8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 396px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQCtd .framer-1rquw6u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-jQCtd.framer-v-a2txb7.framer-1hq3fz8 { cursor: unset; height: min-content; width: 358px; }`,
          `.framer-jQCtd.framer-v-a2txb7 .framer-14ovzi3 { height: min-content; }`,
          `.framer-jQCtd.framer-v-a2txb7 .framer-9xp6kq { height: 420px; }`,
          `.framer-jQCtd.framer-v-1hq3fz8.hover .framer-1oeo7ga { height: 115%; left: calc(50.00000000000002% - 114.99999999999999% / 2); top: calc(50.00000000000002% - 114.99999999999999% / 2); width: 115%; }`,
          `.framer-jQCtd.framer-v-1hq3fz8.hover .framer-z9yiom { left: 390px; top: 480px; }`,
          ...At,
          ...ke,
        ],
        `framer-jQCtd`,
      )),
      (Z = Gt),
      (Gt.displayName = `Team Member`),
      (Gt.defaultProps = { height: 578, width: 400 }),
      P(Gt, {
        variant: {
          options: [`AvHcalqs8`, `qoawDqr0s`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: K.Enum,
        },
        WiQAc6QPE: {
          __defaultAssetReference: `data:framer/asset-reference,OEloSpPPNdlBKx4lChLITv9qH5k.jpg?originalFilename=Member+Image+1.jpg&preferredSize=small`,
          title: `Image`,
          type: K.ResponsiveImage,
        },
        x4R5Mb5Jq: {
          defaultValue: `Alex Johnson`,
          displayTextArea: !1,
          title: `Name`,
          type: K.String,
        },
        g00LJCSg8: {
          defaultValue: `Creative Director`,
          displayTextArea: !1,
          title: `Position`,
          type: K.String,
        },
        fb_jC0b_S: { title: `Link`, type: K.Link },
      }),
      z(
        Gt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/esper/font/5vvr9vy74if2i6bqbjvbw7sy1pq.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/esper/font/eor0mi4hntlgwnn9if640ezzxco.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/esper/font/y9k9qrlzaqio88klkmbd8vomqc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/esper/font/oyrd2tbibpvojxiihnlooxny9m.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/esper/font/jeywfuapfzhqheg8u5gtpdz7wq.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/esper/font/grgckwrn6d3uz8ewclhzxwefc4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/esper/font/b6y37fthzealdunqhicbt6futy.woff2`,
                weight: `400`,
              },
            ],
          },
          ...X(kt),
          ...X(je),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function qt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on = e(() => {
    (v(),
      F(),
      A(),
      n(),
      (Jt = { HMUfcExw1: { hover: !0 } }),
      (Yt = `framer-1FWNZ`),
      (Xt = { HMUfcExw1: `framer-v-1t0cbn3` }),
      (Zt = { damping: 60, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Qt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($t = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (en = T.create(o)),
      (tn = ({
        height: e,
        id: t,
        image: n,
        link: r,
        newTab: i,
        subTitle: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        bLduUHqqh: n ??
          c.bLduUHqqh ?? {
            pixelHeight: 960,
            pixelWidth: 1200,
            src: `/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?width=1200&height=960`,
            srcSet: `/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?scale-down-to=512&width=1200&height=960 512w,/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?scale-down-to=1024&width=1200&height=960 1024w,/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?width=1200&height=960 1200w`,
          },
        l9LjRaJjB: i ?? c.l9LjRaJjB,
        mClhBAXgo: a ?? c.mClhBAXgo ?? `DIY Step`,
        oLF3cLudd: r ?? c.oLF3cLudd,
        T9gmcBtzV: o ?? c.T9gmcBtzV ?? `Design Board`,
      })),
      (nn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (rn = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: s, setLocale: c } = J(),
            l = ue(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              bLduUHqqh: h,
              T9gmcBtzV: g,
              mClhBAXgo: v,
              oLF3cLudd: b,
              l9LjRaJjB: x,
              ...S
            } = tn(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: ee,
              setGestureState: A,
              setVariant: N,
              variants: P,
            } = H({
              defaultVariant: `HMUfcExw1`,
              enabledGestures: Jt,
              ref: r,
              variant: m,
              variantClassNames: Xt,
            }),
            F = nn(e, P),
            I = j(Yt);
          return f(k, {
            id: p ?? a,
            children: f(en, {
              animate: P,
              initial: !1,
              children: f($t, {
                value: Zt,
                children: f(ce, {
                  href: b,
                  motionChild: !0,
                  nodeId: `HMUfcExw1`,
                  openInNewTab: x,
                  scopeId: `BM7gXhALO`,
                  children: _(T.a, {
                    ...S,
                    ...D,
                    className: `${j(I, `framer-1t0cbn3`, d, w)} framer-onl5t4`,
                    "data-border": !0,
                    "data-framer-name": `XL `,
                    layoutDependency: F,
                    layoutId: `HMUfcExw1`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ...u,
                    },
                    ...qt(
                      { "HMUfcExw1-hover": { "data-framer-name": void 0 } },
                      C,
                      O,
                    ),
                    children: [
                      f(T.div, {
                        className: `framer-11o0bxu`,
                        "data-framer-name": `Blue Highlighter`,
                        layoutDependency: F,
                        layoutId: `yfIHJGLk3`,
                        style: {
                          background: `linear-gradient(90deg, rgba(79, 26, 214, 0) 0%, rgb(252, 203, 25) 50%, rgba(79, 26, 214, 0) 100%)`,
                        },
                      }),
                      f(q, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 182,
                          intrinsicWidth: 752,
                          loading: M((l?.y || 0) + 6),
                          pixelHeight: 364,
                          pixelWidth: 1504,
                          sizes: `290px`,
                          src: `/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?width=1504&height=364`,
                          srcSet: `/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?scale-down-to=512&width=1504&height=364 512w,/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?scale-down-to=1024&width=1504&height=364 1024w,/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?width=1504&height=364 1504w`,
                        },
                        className: `framer-1yyv99m`,
                        "data-framer-name": `Dots`,
                        layoutDependency: F,
                        layoutId: `T7C04Eece`,
                      }),
                      f(q, {
                        as: `figure`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(
                            (l?.y || 0) +
                              ((l?.height || 481) * 0.5016611295681065 -
                                ((l?.height || 481) * 1) / 2),
                          ),
                          pixelHeight: 3425,
                          pixelWidth: 5071,
                          sizes: l?.width || `100vw`,
                          src: `/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425`,
                          srcSet: `/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=512&width=5071&height=3425 512w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=1024&width=5071&height=3425 1024w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=2048&width=5071&height=3425 2048w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=4096&width=5071&height=3425 4096w,/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425 5071w`,
                        },
                        className: `framer-1q3tzp0`,
                        "data-framer-name": `Abstract Dots`,
                        layoutDependency: F,
                        layoutId: `pW7ejwj5h`,
                        style: {
                          borderBottomLeftRadius: `100%`,
                          borderBottomRightRadius: `100%`,
                          borderTopLeftRadius: `100%`,
                          borderTopRightRadius: `100%`,
                        },
                        ...qt(
                          {
                            "HMUfcExw1-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: M(
                                  (l?.y || 0) +
                                    ((l?.height || 200) * 0.5016611295681065 -
                                      ((l?.height || 200) * 1) / 2),
                                ),
                                pixelHeight: 3425,
                                pixelWidth: 5071,
                                sizes: l?.width || `100vw`,
                                src: `/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425`,
                                srcSet: `/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=512&width=5071&height=3425 512w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=1024&width=5071&height=3425 1024w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=2048&width=5071&height=3425 2048w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=4096&width=5071&height=3425 4096w,/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425 5071w`,
                              },
                            },
                          },
                          C,
                          O,
                        ),
                      }),
                      _(T.div, {
                        className: `framer-11vaek6`,
                        "data-framer-name": `Content`,
                        layoutDependency: F,
                        layoutId: `OXjeYG2fX`,
                        children: [
                          _(T.div, {
                            className: `framer-lcufag`,
                            "data-framer-name": `Middle`,
                            layoutDependency: F,
                            layoutId: `dkz9RG8al`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.h4, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.5px`,
                                      "--framer-line-height": `26px`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                    },
                                    children: `Design Board`,
                                  }),
                                }),
                                className: `framer-pmo9aa`,
                                "data-framer-name": `Text`,
                                fonts: [`GF;DM Sans-500`],
                                layoutDependency: F,
                                layoutId: `GWGxCuTYU`,
                                style: {
                                  "--extracted-1eung3n": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.p, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-line-height": `26px`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `DIY Step`,
                                  }),
                                }),
                                className: `framer-vjfta4`,
                                "data-framer-name": `Body Text`,
                                fonts: [`GF;DM Sans-regular`],
                                layoutDependency: F,
                                layoutId: `XSG1tPqOt`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(T.div, {
                            className: `framer-dmubqo`,
                            "data-framer-name": `Seperator`,
                            layoutDependency: F,
                            layoutId: `tMRcBEBGw`,
                            style: {
                              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)`,
                            },
                          }),
                          f(q, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: M((l?.y || 0) + 30 + 0 + 0 + 201),
                              pixelHeight: 355,
                              pixelWidth: 421,
                              sizes: `calc(${l?.width || `100vw`} - 60px)`,
                              ...Qt(h),
                            },
                            className: `framer-59z790`,
                            "data-framer-name": `Image`,
                            layoutDependency: F,
                            layoutId: `lln9i2xao`,
                            style: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
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
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1FWNZ.framer-onl5t4, .framer-1FWNZ .framer-onl5t4 { display: block; }`,
          `.framer-1FWNZ.framer-1t0cbn3 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: 481px; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; text-decoration: none; width: 290px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1FWNZ .framer-11o0bxu { flex: none; height: 1px; left: calc(50.00000000000002% - 170px / 2); position: absolute; top: 0px; width: 170px; z-index: 1; }`,
          `.framer-1FWNZ .framer-1yyv99m { aspect-ratio: 4.131868131868132 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); left: -94px; overflow: visible; position: absolute; top: 6px; width: 290px; z-index: 1; }`,
          `.framer-1FWNZ .framer-1q3tzp0 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.16611295681065% - 100% / 2); width: 100%; }`,
          `.framer-1FWNZ .framer-11vaek6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1FWNZ .framer-lcufag { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1FWNZ .framer-pmo9aa { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1FWNZ .framer-vjfta4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-1FWNZ .framer-dmubqo { flex: none; height: 1px; position: relative; width: 230px; }`,
          `.framer-1FWNZ .framer-59z790 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 314px; overflow: hidden; padding: 38px 0px 38px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1FWNZ.framer-v-1t0cbn3.hover.framer-1t0cbn3 { height: min-content; width: min-content; }`,
          `.framer-1FWNZ.framer-v-1t0cbn3.hover .framer-11vaek6 { align-self: stretch; width: auto; }`,
          `.framer-1FWNZ[data-border="true"]::after, .framer-1FWNZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-1FWNZ`,
      )),
      (an = rn),
      (rn.displayName = `Service Card 2`),
      (rn.defaultProps = { height: 481, width: 290 }),
      P(rn, {
        bLduUHqqh: {
          __defaultAssetReference: `data:framer/asset-reference,deIz6CeFU4BL5iJXfJWwP2OH4.png?originalFilename=QmZdqJKU72dZEoP78HSkB7fwa3yN7Mr51QhXc88nEctJRw%3Fauto%3Dformat%26w%3D1200.png&preferredSize=auto`,
          title: `Image`,
          type: K.ResponsiveImage,
        },
        T9gmcBtzV: {
          defaultValue: `Design Board`,
          displayTextArea: !0,
          title: `Title`,
          type: K.String,
        },
        mClhBAXgo: {
          defaultValue: `DIY Step`,
          displayTextArea: !0,
          title: `Sub-Title`,
          type: K.String,
        },
        oLF3cLudd: { title: `Link`, type: K.Link },
        l9LjRaJjB: { defaultValue: !1, title: `New Tab`, type: K.Boolean },
      }),
      z(
        rn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `DM Sans`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function sn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn = e(() => {
    (v(),
      F(),
      A(),
      n(),
      (cn = { jGvQeuCcb: { hover: !0 } }),
      (ln = `framer-olCAb`),
      (un = { jGvQeuCcb: `framer-v-1gj3ieb` }),
      (dn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (fn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (pn = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (mn = T.create(o)),
      (hn = ({
        category: e,
        height: t,
        id: n,
        image: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        bz2SOKPAC: i ?? o.bz2SOKPAC ?? `Monarch Imperial`,
        FKARN3Cfk: r ??
          o.FKARN3Cfk ?? {
            pixelHeight: 1220,
            pixelWidth: 1080,
            src: `/esper/images/aqlcwcbd3o1mr54ln2stvoqpi0.png?width=1080&height=1220`,
            srcSet: `/esper/images/aqlcwcbd3o1mr54ln2stvoqpi0.png?scale-down-to=1024&width=1080&height=1220 906w,/esper/images/aqlcwcbd3o1mr54ln2stvoqpi0.png?width=1080&height=1220 1080w`,
          },
        LKJDuHAih: e ?? o.LKJDuHAih ?? `It Ignites Here`,
      })),
      (gn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (_n = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: s, setLocale: c } = J(),
            l = ue(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              FKARN3Cfk: h,
              bz2SOKPAC: g,
              LKJDuHAih: v,
              ...b
            } = hn(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: ee,
              variants: A,
            } = H({
              defaultVariant: `jGvQeuCcb`,
              enabledGestures: cn,
              ref: r,
              variant: m,
              variantClassNames: un,
            }),
            P = gn(e, A),
            F = j(ln);
          return f(k, {
            id: p ?? a,
            children: f(mn, {
              animate: A,
              initial: !1,
              children: f(pn, {
                value: dn,
                children: _(T.div, {
                  ...b,
                  ...w,
                  className: j(F, `framer-1gj3ieb`, d, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: P,
                  layoutId: `jGvQeuCcb`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  ...sn(
                    { "jGvQeuCcb-hover": { "data-framer-name": void 0 } },
                    x,
                    E,
                  ),
                  children: [
                    f(q, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: M(
                          (l?.y || 0) +
                            ((l?.height || 500) * 0.5000000000000002 -
                              (((l?.height || 500) - 0) * 1) / 2),
                        ),
                        pixelHeight: 1220,
                        pixelWidth: 1080,
                        sizes: l?.width || `100vw`,
                        ...fn(h),
                      },
                      className: `framer-1fk5wn3`,
                      "data-framer-name": `Image`,
                      layoutDependency: P,
                      layoutId: `rLZX9vd5j`,
                      ...sn(
                        {
                          "jGvQeuCcb-hover": {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: M(
                                (l?.y || 0) +
                                  ((l?.height || 500) * 0.5000000000000002 -
                                    (((l?.height || 500) - 0) * 1.15) / 2),
                              ),
                              pixelHeight: 1220,
                              pixelWidth: 1080,
                              sizes: `calc(${l?.width || `100vw`} * 1.15)`,
                              ...fn(h),
                            },
                          },
                        },
                        x,
                        E,
                      ),
                    }),
                    _(T.div, {
                      className: `framer-1xy1bwi`,
                      "data-framer-name": `Content`,
                      layoutDependency: P,
                      layoutId: `CTiahXKXq`,
                      children: [
                        _(T.div, {
                          className: `framer-knu2gh`,
                          "data-framer-name": `H3+Body Small`,
                          layoutDependency: P,
                          layoutId: `ynFgINurc`,
                          children: [
                            f(R, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(T.h3, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `28px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255)))`,
                                    "--framer-text-transform": `capitalize`,
                                  },
                                  children: `Eclipse Interactive`,
                                }),
                              }),
                              className: `framer-7r3ytq`,
                              "data-framer-name": `Eclipse Interactive`,
                              fonts: [`FR;InterDisplay-Medium`],
                              layoutDependency: P,
                              layoutId: `LCnxrJd0U`,
                              style: {
                                "--extracted-a0htzi": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(R, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(T.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214)))`,
                                  },
                                  children: `Web Design`,
                                }),
                              }),
                              className: `framer-eozvas`,
                              "data-framer-name": `Web Design`,
                              fonts: [`FR;InterDisplay`],
                              layoutDependency: P,
                              layoutId: `BONNu5tWR`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        f(T.div, {
                          className: `framer-40nbsk`,
                          "data-framer-name": `Arrow Icon`,
                          layoutDependency: P,
                          layoutId: `hSgBjDmqB`,
                          style: {
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            rotate: 0,
                          },
                          variants: { "jGvQeuCcb-hover": { rotate: 45 } },
                          children: f(N, {
                            className: `framer-17bronx`,
                            "data-framer-name": `Arrow Icon`,
                            layout: `position`,
                            layoutDependency: P,
                            layoutId: `dNL_7zL4v`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"></svg>`,
                            svgContentId: 11920437802,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    f(T.div, {
                      className: `framer-thiskh`,
                      "data-framer-name": `Light Effect`,
                      layoutDependency: P,
                      layoutId: `ZDOgbK0Y6`,
                      style: {
                        background: `radial-gradient(40.2% 99.24161073825503% at 50% 50%, rgba(222, 222, 222, 0.2) 0%, rgba(68, 68, 68, 0) 100%)`,
                        filter: `blur(15px)`,
                        rotate: 45,
                        WebkitFilter: `blur(15px)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-olCAb.framer-3f2p36, .framer-olCAb .framer-3f2p36 { display: block; }`,
          `.framer-olCAb.framer-1gj3ieb { cursor: pointer; height: 500px; overflow: hidden; position: relative; width: 612px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-olCAb .framer-1fk5wn3 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
          `.framer-olCAb .framer-1xy1bwi { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 0px; overflow: visible; padding: 24px; position: absolute; width: 100%; }`,
          `.framer-olCAb .framer-knu2gh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-olCAb .framer-7r3ytq, .framer-olCAb .framer-eozvas { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-olCAb .framer-40nbsk { flex: none; height: 32px; overflow: visible; position: relative; width: 32px; }`,
          `.framer-olCAb .framer-17bronx { flex: none; height: 32px; left: calc(50.00000000000002% - 32px / 2); position: absolute; top: calc(50.00000000000002% - 32px / 2); width: 32px; }`,
          `.framer-olCAb .framer-thiskh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 466px); left: -400px; overflow: hidden; position: absolute; top: -400px; width: 466px; }`,
          `.framer-olCAb.framer-v-1gj3ieb.hover .framer-1fk5wn3 { height: 115%; left: calc(50.00000000000002% - 114.99999999999999% / 2); top: calc(50.00000000000002% - 114.99999999999999% / 2); width: 115%; }`,
          `.framer-olCAb.framer-v-1gj3ieb.hover .framer-thiskh { bottom: -416px; left: unset; right: -384px; top: unset; }`,
        ],
        `framer-olCAb`,
      )),
      (vn = _n),
      (_n.displayName = `Project 2`),
      (_n.defaultProps = { height: 500, width: 612 }),
      P(_n, {
        FKARN3Cfk: {
          __defaultAssetReference: `data:framer/asset-reference,aqlCWCBd3o1mr54LN2StvoqPi0.png?originalFilename=date+fixed.png&width=1080&height=1220`,
          title: `Image`,
          type: K.ResponsiveImage,
        },
        bz2SOKPAC: {
          defaultValue: `Monarch Imperial`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onbz2SOKPACChange: { changes: `bz2SOKPAC`, type: K.ChangeHandler },
        LKJDuHAih: {
          defaultValue: `It Ignites Here`,
          displayTextArea: !1,
          title: `Category`,
          type: K.String,
        },
        onLKJDuHAihChange: { changes: `LKJDuHAih`, type: K.ChangeHandler },
      }),
      z(
        _n,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/esper/font/epun3mcjzajihnycdvkbfizkyy0.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/esper/font/v3j1l0o5vpfke26sw4hcpxcfho.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/esper/font/f3kdpd2n0ctowv5huazjjgm.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `/esper/font/0idmxkizu9gozoclqiqsv5rvetu.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/esper/font/r0mv3negma0akcqsnfotg32las.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/esper/font/iwwtdc49enf2tchbqlnarxw6ug.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/esper/font/ii21jnsjkulbkshhxklapi7fv9w.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/esper/font/2uibialfchvpwbhqrmzutft7giu.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/esper/font/zwfz6xbve5pmcwrjrgbdhnmkoki.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/esper/font/u9laddmbrhzx3sb8g8glty5fete.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `/esper/font/tvew2lzxj1t7qfxp1gdtidj2o0g.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/esper/font/df7bjcrmstypqsb945lalmfccvq.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/esper/font/bhynjqztyl2lqvmmirrs6y16es.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/esper/font/vebzumjgykkysfcy73iwwtzlnag.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn = e(() => {
    (v(),
      F(),
      A(),
      n(),
      (xn = { xuUgNTFk9: { hover: !0 } }),
      (Sn = `framer-pAdb0`),
      (Cn = { xuUgNTFk9: `framer-v-albknj` }),
      (wn = { damping: 60, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Tn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (En = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (Dn = T.create(o)),
      (On = ({
        height: e,
        id: t,
        image: n,
        link: r,
        newTab: i,
        subTitle: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        bLduUHqqh: n ??
          c.bLduUHqqh ?? {
            pixelHeight: 960,
            pixelWidth: 1200,
            src: `/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?width=1200&height=960`,
            srcSet: `/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?scale-down-to=512&width=1200&height=960 512w,/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?scale-down-to=1024&width=1200&height=960 1024w,/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png?width=1200&height=960 1200w`,
          },
        l9LjRaJjB: i ?? c.l9LjRaJjB,
        mClhBAXgo: a ?? c.mClhBAXgo ?? `DIY Step`,
        oLF3cLudd: r ?? c.oLF3cLudd,
        T9gmcBtzV: o ?? c.T9gmcBtzV ?? `Design Board`,
      })),
      (kn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (An = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: s, setLocale: c } = J(),
            l = ue(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              bLduUHqqh: h,
              T9gmcBtzV: g,
              mClhBAXgo: v,
              oLF3cLudd: b,
              l9LjRaJjB: x,
              ...S
            } = On(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: ee,
              setGestureState: A,
              setVariant: N,
              variants: P,
            } = H({
              defaultVariant: `xuUgNTFk9`,
              enabledGestures: xn,
              ref: r,
              variant: m,
              variantClassNames: Cn,
            }),
            F = kn(e, P),
            I = j(Sn);
          return f(k, {
            id: p ?? a,
            children: f(Dn, {
              animate: P,
              initial: !1,
              children: f(En, {
                value: wn,
                children: f(ce, {
                  href: b,
                  motionChild: !0,
                  nodeId: `xuUgNTFk9`,
                  openInNewTab: x,
                  scopeId: `omK64wdsi`,
                  children: _(T.a, {
                    ...S,
                    ...D,
                    className: `${j(I, `framer-albknj`, d, w)} framer-71xu5j`,
                    "data-border": !0,
                    "data-framer-name": `XL `,
                    layoutDependency: F,
                    layoutId: `xuUgNTFk9`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-74f48371-76c0-476a-a319-1331b3a438c2, rgb(8, 8, 8))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ...u,
                    },
                    ...bn(
                      { "xuUgNTFk9-hover": { "data-framer-name": void 0 } },
                      C,
                      O,
                    ),
                    children: [
                      f(T.div, {
                        className: `framer-1b335rn`,
                        "data-framer-name": `Blue Highlighter`,
                        layoutDependency: F,
                        layoutId: `KBg3K5egR`,
                        style: {
                          background: `linear-gradient(90deg, rgba(214, 208, 26, 0) 0%, rgb(255, 203, 48) 50%, rgba(79, 26, 214, 0) 100%)`,
                        },
                      }),
                      f(q, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 182,
                          intrinsicWidth: 752,
                          loading: M((l?.y || 0) + 6),
                          pixelHeight: 364,
                          pixelWidth: 1504,
                          sizes: `290px`,
                          src: `/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?width=1504&height=364`,
                          srcSet: `/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?scale-down-to=512&width=1504&height=364 512w,/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?scale-down-to=1024&width=1504&height=364 1024w,/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png?width=1504&height=364 1504w`,
                        },
                        className: `framer-uhwspv`,
                        "data-framer-name": `Dots`,
                        layoutDependency: F,
                        layoutId: `bCeOWGDNF`,
                      }),
                      f(q, {
                        as: `figure`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(
                            (l?.y || 0) +
                              ((l?.height || 481) * 0.5016611295681065 -
                                ((l?.height || 481) * 1) / 2),
                          ),
                          pixelHeight: 3425,
                          pixelWidth: 5071,
                          sizes: l?.width || `100vw`,
                          src: `/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425`,
                          srcSet: `/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=512&width=5071&height=3425 512w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=1024&width=5071&height=3425 1024w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=2048&width=5071&height=3425 2048w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=4096&width=5071&height=3425 4096w,/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425 5071w`,
                        },
                        className: `framer-19gpxt1`,
                        "data-framer-name": `Abstract Dots`,
                        layoutDependency: F,
                        layoutId: `rEZKJdpWm`,
                        style: {
                          borderBottomLeftRadius: `100%`,
                          borderBottomRightRadius: `100%`,
                          borderTopLeftRadius: `100%`,
                          borderTopRightRadius: `100%`,
                        },
                        ...bn(
                          {
                            "xuUgNTFk9-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: M(
                                  (l?.y || 0) +
                                    ((l?.height || 471) * 0.5016611295681065 -
                                      ((l?.height || 471) * 1) / 2),
                                ),
                                pixelHeight: 3425,
                                pixelWidth: 5071,
                                sizes: l?.width || `100vw`,
                                src: `/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425`,
                                srcSet: `/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=512&width=5071&height=3425 512w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=1024&width=5071&height=3425 1024w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=2048&width=5071&height=3425 2048w,/esper/images/1xoqma4saawbcrdkisjfixups.png?scale-down-to=4096&width=5071&height=3425 4096w,/esper/images/1xoqma4saawbcrdkisjfixups.png?width=5071&height=3425 5071w`,
                              },
                            },
                          },
                          C,
                          O,
                        ),
                      }),
                      _(T.div, {
                        className: `framer-is4ap1`,
                        "data-framer-name": `Content`,
                        layoutDependency: F,
                        layoutId: `fOfM2SFLg`,
                        children: [
                          _(T.div, {
                            className: `framer-sgs04z`,
                            "data-framer-name": `Middle`,
                            layoutDependency: F,
                            layoutId: `k2iydOh4J`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.h4, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.5px`,
                                      "--framer-line-height": `26px`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                    },
                                    children: `Design Board`,
                                  }),
                                }),
                                className: `framer-190ix5h`,
                                "data-framer-name": `Text`,
                                fonts: [`GF;DM Sans-500`],
                                layoutDependency: F,
                                layoutId: `xZF8lVSGW`,
                                style: {
                                  "--extracted-1eung3n": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(T.p, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-line-height": `26px`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `DIY Step`,
                                  }),
                                }),
                                className: `framer-14noyay`,
                                "data-framer-name": `Body Text`,
                                fonts: [`GF;DM Sans-regular`],
                                layoutDependency: F,
                                layoutId: `NMl6T9xH2`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(T.div, {
                            className: `framer-1s7yr0u`,
                            "data-framer-name": `Seperator`,
                            layoutDependency: F,
                            layoutId: `sjYY3lD00`,
                            style: {
                              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)`,
                            },
                          }),
                          f(q, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: M((l?.y || 0) + 30 + 0 + 0 + 201),
                              pixelHeight: 355,
                              pixelWidth: 421,
                              sizes: `calc(${l?.width || `100vw`} - 60px)`,
                              ...Tn(h),
                            },
                            className: `framer-djc6wp`,
                            "data-framer-name": `Image`,
                            layoutDependency: F,
                            layoutId: `buuUFlsDk`,
                            style: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
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
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pAdb0.framer-71xu5j, .framer-pAdb0 .framer-71xu5j { display: block; }`,
          `.framer-pAdb0.framer-albknj { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: 481px; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; text-decoration: none; width: 290px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pAdb0 .framer-1b335rn { flex: none; height: 1px; left: calc(50.00000000000002% - 170px / 2); position: absolute; top: 0px; width: 170px; z-index: 1; }`,
          `.framer-pAdb0 .framer-uhwspv { aspect-ratio: 4.131868131868132 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); left: -94px; overflow: visible; position: absolute; top: 6px; width: 290px; z-index: 1; }`,
          `.framer-pAdb0 .framer-19gpxt1 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.16611295681065% - 100% / 2); width: 100%; }`,
          `.framer-pAdb0 .framer-is4ap1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-pAdb0 .framer-sgs04z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-pAdb0 .framer-190ix5h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-pAdb0 .framer-14noyay { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-pAdb0 .framer-1s7yr0u { flex: none; height: 1px; position: relative; width: 230px; }`,
          `.framer-pAdb0 .framer-djc6wp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 314px; overflow: hidden; padding: 38px 0px 38px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pAdb0.framer-v-albknj.hover.framer-albknj { height: min-content; width: min-content; }`,
          `.framer-pAdb0.framer-v-albknj.hover .framer-is4ap1 { align-self: stretch; width: auto; }`,
          `.framer-pAdb0[data-border="true"]::after, .framer-pAdb0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-pAdb0`,
      )),
      (jn = An),
      (An.displayName = `Service Card`),
      (An.defaultProps = { height: 481, width: 290 }),
      P(An, {
        bLduUHqqh: {
          __defaultAssetReference: `data:framer/asset-reference,deIz6CeFU4BL5iJXfJWwP2OH4.png?originalFilename=QmZdqJKU72dZEoP78HSkB7fwa3yN7Mr51QhXc88nEctJRw%3Fauto%3Dformat%26w%3D1200.png&preferredSize=auto`,
          title: `Image`,
          type: K.ResponsiveImage,
        },
        T9gmcBtzV: {
          defaultValue: `Design Board`,
          displayTextArea: !0,
          title: `Title`,
          type: K.String,
        },
        mClhBAXgo: {
          defaultValue: `DIY Step`,
          displayTextArea: !0,
          title: `Sub-Title`,
          type: K.String,
        },
        oLF3cLudd: { title: `Link`, type: K.Link },
        l9LjRaJjB: { defaultValue: !1, title: `New Tab`, type: K.Boolean },
      }),
      z(
        An,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `DM Sans`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Nn,
  Pn = e(() => {
    Nn = (e) => e;
  }),
  Fn = e(() => {
    Pn();
  }),
  In = e(() => {
    Fn();
  });
function Ln(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Rn = e(() => {}),
  zn,
  Bn = e(() => {
    ((zn = {}),
      Object.defineProperty(zn, `__esModule`, { value: !0 }),
      (zn.warning = function () {}),
      (zn.invariant = function () {}),
      zn.__esModule,
      zn.warning,
      zn.invariant);
  }),
  Vn = e(() => {
    Pn();
  });
function Hn(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Un(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Hn(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function`
                ? o.set(e.target, n)
                : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : dr[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Wn(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Gn({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = fr.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Wn(e, n);
        },
      });
    });
}
function Kn(e) {
  e.forEach(Gn);
}
function qn() {
  typeof ResizeObserver < `u` && (pr = new ResizeObserver(Kn));
}
function Jn(e, t) {
  pr || qn();
  let n = Hn(e);
  return (
    n.forEach((e) => {
      let n = fr.get(e);
      (n || ((n = new Set()), fr.set(e, n)), n.add(t), pr?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = fr.get(e);
        (n?.delete(t), (n != null && n.size) || pr == null || pr.unobserve(e));
      });
    }
  );
}
function Yn() {
  ((hr = () => {
    let e = { width: l.innerWidth, height: l.innerHeight },
      t = { target: l, size: e, contentSize: e };
    mr.forEach((e) => e(t));
  }),
    l.addEventListener(`resize`, hr));
}
function Xn(e) {
  return (
    mr.add(e),
    hr || Yn(),
    () => {
      (mr.delete(e), !mr.size && hr && (hr = void 0));
    }
  );
}
function Zn(e, t) {
  return typeof e == `function` ? Xn(e) : Jn(e, t);
}
function Qn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function $n(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr = e(() => {
    for (let e in (a(),
    Pn(),
    In(),
    Rn(),
    Bn(),
    Vn(),
    (er = [``, `X`, `Y`, `Z`]),
    (tr = [`translate`, `scale`, `rotate`, `skew`]),
    (nr = {
      syntax: `<angle>`,
      initialValue: `0deg`,
      toDefaultUnit: (e) => e + `deg`,
    }),
    (rr = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: nr,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Nn },
      skew: nr,
    }),
    (ir = new Map()),
    (ar = (e) => `--motion-${e}`),
    (or = [`x`, `y`, `z`]),
    tr.forEach((e) => {
      er.forEach((t) => {
        (or.push(e + t), ir.set(ar(e + t), rr[e]));
      });
    }),
    new Set(or),
    (sr = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (cr = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          sr({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!sr({ opacity: [0, 1] }).finished,
    }),
    (lr = {}),
    (ur = {}),
    cr))
      ur[e] = () => (lr[e] === void 0 && (lr[e] = cr[e]()), lr[e]);
    ((dr = { any: 0, all: 1 }),
      (fr = new WeakMap()),
      (mr = new Set()),
      (gr = {
        isActive: (e) => !!e.inView,
        subscribe: (
          e,
          { enable: t, disable: n },
          { inViewOptions: r = {} },
        ) => {
          let { once: i } = r;
          return Un(
            e,
            (r) => {
              if ((t(), $n(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), $n(e, `viewleave`, t));
                };
            },
            Ln(r, [`once`]),
          );
        },
      }),
      (_r = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Qn(e, t, r));
      }),
      (vr = {
        inView: gr,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = _r(e, `hoverstart`, t),
              i = _r(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(),
                  Qn(e, `pressend`, t),
                  l.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(),
                  Qn(e, `pressstart`, n),
                  l.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i),
                  l.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(vr)]);
  });
function br(e) {
  let {
      slots: n = [],
      gap: a,
      padding: o,
      paddingPerSide: c,
      paddingTop: l,
      paddingRight: u,
      paddingBottom: d,
      paddingLeft: p,
      speed: m,
      hoverFactor: v,
      direction: y,
      alignment: D,
      sizingOptions: O,
      fadeOptions: A,
      style: j,
    } = e,
    {
      fadeContent: M,
      overflow: N,
      fadeWidth: P,
      fadeInset: F,
      fadeAlpha: I,
    } = A,
    { widthType: L, heightType: R } = O,
    z = c ? `${l}px ${u}px ${d}px ${p}px` : `${o}px`,
    te = ne.current(),
    B = te === ne.canvas || te === ne.export,
    re = n.filter(Boolean),
    ie = b.count(re),
    ae = ie > 0;
  y === !0 && (y = `left`);
  let V = y === `left` || y === `right`,
    H = S(0),
    U = Sr[y];
  E(H, U);
  let W = i(null),
    G = g(() => [{ current: null }, { current: null }], []),
    [oe, K] = s({ parent: null, children: null }),
    se = null,
    ce = [],
    le = 0,
    ue = 0;
  (B && ((le = ie ? Math.floor(10 / ie) : 0), (ue = 1)),
    !B &&
      ae &&
      oe.parent &&
      ((le = Math.round((oe.parent / oe.children) * 2) + 1),
      (le = Math.min(le, xr)),
      (ue = 1)));
  let de = t(() => {
      if (ae && W.current) {
        let e = V ? W.current.offsetWidth : W.current.offsetHeight,
          t = G[0].current
            ? V
              ? G[0].current.offsetLeft
              : G[0].current.offsetTop
            : 0;
        K({
          parent: e,
          children:
            (G[1].current
              ? V
                ? G[1].current.offsetLeft + G[1].current.offsetWidth
                : G[1].current.offsetTop + G[1].current.offsetHeight
              : 0) -
            t +
            a,
        });
      }
    }, []),
    q = B ? { contentVisibility: `auto` } : {};
  if (ae) {
    if (!B) {
      let e = i(!0);
      x(
        () => (
          ee.read(de, !1, !0),
          Zn(W.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ee.read(de, !1, !0),
              (e.current = !1));
          })
        ),
        [],
      );
    }
    se = b.map(re, (e, t) => {
      let n;
      (t === 0 && (n = G[0]), t === re.length - 1 && (n = G[1]));
      let i = {
        width: L ? e.props?.width : `100%`,
        height: R ? e.props?.height : `100%`,
      };
      return f(k, {
        inherit: `id`,
        children: f(`li`, {
          ref: n,
          style: i,
          children: r(
            e,
            {
              style: { ...e.props?.style, ...i, flexShrink: 0, ...q },
              layoutId: e.props.layoutId
                ? e.props.layoutId + `-original-` + t
                : void 0,
            },
            e.props?.children,
          ),
        }),
      });
    });
  }
  let J = B ? !0 : C(W);
  if (!B)
    for (let e = 0; e < le; e++)
      ce = ce.concat(
        b.map(re, (t, n) =>
          f(
            k,
            {
              inherit: `id`,
              children: f(
                `li`,
                {
                  style: {
                    width: L ? t.props?.width : `100%`,
                    height: R ? t.props?.height : `100%`,
                    willChange: J ? `transform` : void 0,
                  },
                  "aria-hidden": !0,
                  children: r(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: L ? t.props?.width : `100%`,
                        height: R ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...q,
                      },
                      layoutId: t.props.layoutId
                        ? t.props.layoutId + `-dupe-` + e
                        : void 0,
                    },
                    t.props?.children,
                  ),
                },
                e + `li` + n,
              ),
            },
            e + `lg` + n,
          ),
        ),
      );
  let Y = oe.children + oe.children * Math.round(oe.parent / oe.children);
  (i(null), i(null), i(0));
  let fe = i(!1),
    pe = w(),
    me = i(null),
    X = i(null);
  if (!B) {
    h(() => {
      if (!(pe || !Y || !m))
        return (
          (X.current = me.current.animate(
            { transform: [U(0), U(Y)] },
            {
              duration: (Math.abs(Y) / m) * 1e3,
              iterations: 1 / 0,
              easing: `linear`,
            },
          )),
          () => X.current.cancel()
        );
    }, [v, Y, m]);
    let e = t(() => {
      if (!X.current) return;
      let e = document.hidden;
      J && !e && X.current.playState === `paused`
        ? X.current.play()
        : (!J || e) && X.current.playState === `running` && X.current.pause();
    }, [J]);
    (h(() => {
      e();
    }, [J, v, Y, m]),
      h(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e],
      ));
  }
  let he = V ? `to right` : `to bottom`,
    ge = P / 2,
    _e = 100 - P / 2,
    ve = `linear-gradient(${he}, rgba(0, 0, 0, ${I}) ${Or(F, 0, ge)}%, rgba(0, 0, 0, 1) ${ge}%, rgba(0, 0, 0, 1) ${_e}%, rgba(0, 0, 0, ${I}) ${100 - F}%)`;
  return ae
    ? f(`section`, {
        style: {
          ...Cr,
          opacity: ue,
          WebkitMaskImage: M ? ve : void 0,
          maskImage: M ? ve : void 0,
          overflow: N ? `visible` : `hidden`,
          padding: z,
        },
        ref: W,
        children: _(T.ul, {
          ref: me,
          style: {
            ...Cr,
            gap: a,
            top: y === `bottom` && kr(Y) ? -Y : void 0,
            left: y === `right` && kr(Y) ? -Y : void 0,
            placeItems: D,
            position: `relative`,
            flexDirection: V ? `row` : `column`,
            ...j,
            willChange: B || !J ? `auto` : `transform`,
            transform: U(0),
          },
          onMouseEnter: () => {
            ((fe.current = !0), X.current && (X.current.playbackRate = v));
          },
          onMouseLeave: () => {
            ((fe.current = !1), X.current && (X.current.playbackRate = 1));
          },
          children: [se, ce],
        }),
      })
    : _(`section`, {
        style: wr,
        children: [
          f(`div`, { style: Tr, children: `✨` }),
          f(`p`, { style: Er, children: `Connect to Content` }),
          f(`p`, {
            style: Dr,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar = e(() => {
    (v(),
      n(),
      F(),
      A(),
      yr(),
      (xr = 100),
      (Sr = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (br.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: {
          fadeContent: !0,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        direction: !0,
      }),
      P(br, {
        slots: {
          type: K.Array,
          title: `Children`,
          control: { type: K.ComponentInstance },
        },
        speed: {
          type: K.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: K.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: K.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: K.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: K.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: K.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: K.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: K.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: K.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: K.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: K.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: K.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: K.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: K.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: K.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Cr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (wr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Tr = { fontSize: 32, marginBottom: 10 }),
      (Er = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      (Dr = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (Or = (e, t, n) => Math.min(Math.max(e, t), n)),
      (kr = (e) => typeof e == `number` && !isNaN(e)));
  });
function jr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr = e(() => {
    (v(),
      F(),
      A(),
      n(),
      Ar(),
      (Mr = L(br)),
      (Nr = [`hGPGrY1F2`, `iVF8K2Gs6`]),
      (Pr = `framer-6pWZH`),
      (Fr = { hGPGrY1F2: `framer-v-u1kxln`, iVF8K2Gs6: `framer-v-q8nznx` }),
      (Ir = { duration: 0, type: `tween` }),
      (Lr = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (Rr = { Desktop: `hGPGrY1F2`, Mobile: `iVF8K2Gs6` }),
      (zr = T.create(o)),
      (Br = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Rr[r.variant] ?? r.variant ?? `hGPGrY1F2`,
      })),
      (Vr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Hr = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: o, setLocale: s } = J();
          ue();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Br(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = H({
              cycleOrder: Nr,
              defaultVariant: `hGPGrY1F2`,
              ref: r,
              variant: d,
              variantClassNames: Fr,
            }),
            w = Vr(e, C),
            E = j(Pr);
          return f(k, {
            id: u ?? a,
            children: f(zr, {
              animate: C,
              initial: !1,
              children: f(Lr, {
                value: Ir,
                children: f(T.div, {
                  ...p,
                  ..._,
                  className: j(E, `framer-u1kxln`, l, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `hGPGrY1F2`,
                  ref: r,
                  style: { ...c },
                  ...jr({ iVF8K2Gs6: { "data-framer-name": `Mobile` } }, m, v),
                  children: f(U, {
                    children: f(pe, {
                      className: `framer-1vsnxrx-container`,
                      "data-framer-name": `Ticker`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: w,
                      layoutId: `xbPusXZxL-container`,
                      name: `Ticker`,
                      nodeId: `xbPusXZxL`,
                      rendersWithMotion: !0,
                      scopeId: `UdjphyVxG`,
                      children: f(br, {
                        alignment: `center`,
                        direction: `left`,
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 50,
                          overflow: !1,
                        },
                        gap: 24,
                        height: `100%`,
                        hoverFactor: 0.5,
                        id: `xbPusXZxL`,
                        layoutId: `xbPusXZxL`,
                        name: `Ticker`,
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          f(T.div, {
                            className: `framer-1s3xuod`,
                            "data-framer-name": `Logo 1`,
                            layoutDependency: w,
                            layoutId: `N2gIer3Dk`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 95,
                                pixelWidth: 250,
                                sizes: `136px`,
                                src: `/esper/images/twwqyxotlhdxabp7dwhjedkyhae.png?width=250&height=95`,
                              },
                              className: `framer-qt3cnw`,
                              layoutDependency: w,
                              layoutId: `jqh5UHWij`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-9b7j98`,
                            "data-framer-name": `Logo 2`,
                            layoutDependency: w,
                            layoutId: `fnWlFmkJK`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 500,
                                pixelWidth: 500,
                                sizes: `136px`,
                                src: `/esper/images/b0gribr06czgnoidqqwzynyz2vc.png?width=500&height=500`,
                              },
                              className: `framer-18094cp`,
                              layoutDependency: w,
                              layoutId: `kphMsK9uq`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-15y5g6b`,
                            "data-framer-name": `Logo 3`,
                            layoutDependency: w,
                            layoutId: `kDbvycMRw`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1603,
                                pixelWidth: 3441,
                                sizes: `87px`,
                                src: `/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png?width=3441&height=1603`,
                                srcSet: `/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png?scale-down-to=512&width=3441&height=1603 512w,/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png?scale-down-to=1024&width=3441&height=1603 1024w,/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png?scale-down-to=2048&width=3441&height=1603 2048w,/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png?width=3441&height=1603 3441w`,
                              },
                              className: `framer-1ugonz3`,
                              layoutDependency: w,
                              layoutId: `ULboz4n26`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-dpvj72`,
                            "data-framer-name": `Logo 10`,
                            layoutDependency: w,
                            layoutId: `uiNaMa5dl`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 148,
                                intrinsicWidth: 341,
                                pixelHeight: 148,
                                pixelWidth: 341,
                                sizes: `129px`,
                                src: `/esper/images/gvt2qwmuoxufwi7sozmrjjnxum.png?width=341&height=148`,
                              },
                              className: `framer-f55kn0`,
                              "data-framer-name": `Untitled design (21)`,
                              layoutDependency: w,
                              layoutId: `H9UkcQ7gi`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1dnidcj`,
                            "data-framer-name": `Logo 5`,
                            layoutDependency: w,
                            layoutId: `Mx7VuzRh8`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 705,
                                pixelWidth: 902,
                                sizes: `53px`,
                                src: `/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png?width=902&height=705`,
                                srcSet: `/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png?scale-down-to=512&width=902&height=705 512w,/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png?width=902&height=705 902w`,
                              },
                              className: `framer-110vvm9`,
                              layoutDependency: w,
                              layoutId: `tcG9PUoXO`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1grg9lo`,
                            "data-framer-name": `Logo 9`,
                            layoutDependency: w,
                            layoutId: `GQFhpB5be`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 2564,
                                intrinsicWidth: 2332,
                                pixelHeight: 2564,
                                pixelWidth: 2332,
                                sizes: `34px`,
                                src: `/esper/images/mdpsq2xil2s5agl02n5lk2em.png?width=2332&height=2564`,
                                srcSet: `/esper/images/mdpsq2xil2s5agl02n5lk2em.png?scale-down-to=1024&width=2332&height=2564 931w,/esper/images/mdpsq2xil2s5agl02n5lk2em.png?scale-down-to=2048&width=2332&height=2564 1862w,/esper/images/mdpsq2xil2s5agl02n5lk2em.png?width=2332&height=2564 2332w`,
                              },
                              className: `framer-dmvt4j`,
                              "data-framer-name": `Sirasa TV_Logo (1)`,
                              layoutDependency: w,
                              layoutId: `PbcMzKvgG`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1l875mh`,
                            "data-framer-name": `Logo 6`,
                            layoutDependency: w,
                            layoutId: `Ij8U4jbMH`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 202,
                                intrinsicWidth: 200,
                                pixelHeight: 202,
                                pixelWidth: 200,
                                sizes: `37px`,
                                src: `/esper/images/gtmjsu8rsz7nqupbgqvlwlefw.webp?width=200&height=202`,
                              },
                              className: `framer-1uac056`,
                              "data-framer-name": `Helakuru-logo1`,
                              layoutDependency: w,
                              layoutId: `asz4jPBQx`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1a325hl`,
                            "data-framer-name": `Logo 8`,
                            layoutDependency: w,
                            layoutId: `pzgSh33eG`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 4172,
                                intrinsicWidth: 11037,
                                pixelHeight: 4172,
                                pixelWidth: 11037,
                                sizes: `150px`,
                                src: `/esper/images/spigwnekuaj8rvgfpdanj0y0.png?width=11037&height=4172`,
                                srcSet: `/esper/images/spigwnekuaj8rvgfpdanj0y0.png?scale-down-to=512&width=11037&height=4172 512w,/esper/images/spigwnekuaj8rvgfpdanj0y0.png?scale-down-to=1024&width=11037&height=4172 1024w,/esper/images/spigwnekuaj8rvgfpdanj0y0.png?scale-down-to=2048&width=11037&height=4172 2048w,/esper/images/spigwnekuaj8rvgfpdanj0y0.png?scale-down-to=4096&width=11037&height=4172 4096w,/esper/images/spigwnekuaj8rvgfpdanj0y0.png?width=11037&height=4172 11037w`,
                              },
                              className: `framer-of5n20`,
                              "data-framer-name": `Logo Full_Dark`,
                              layoutDependency: w,
                              layoutId: `s2CD1UNkN`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1nlvtlm`,
                            "data-framer-name": `Logo 4`,
                            layoutDependency: w,
                            layoutId: `a6UWC9BoZ`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 2048,
                                pixelWidth: 2048,
                                sizes: `136px`,
                                src: `/esper/images/nvzenooymu1olttjngo499jcbnw.png?width=2048&height=2048`,
                                srcSet: `/esper/images/nvzenooymu1olttjngo499jcbnw.png?scale-down-to=512&width=2048&height=2048 512w,/esper/images/nvzenooymu1olttjngo499jcbnw.png?scale-down-to=1024&width=2048&height=2048 1024w,/esper/images/nvzenooymu1olttjngo499jcbnw.png?width=2048&height=2048 2048w`,
                              },
                              className: `framer-o73pj4`,
                              layoutDependency: w,
                              layoutId: `vntrFZEXL`,
                            }),
                          }),
                          f(T.div, {
                            className: `framer-1qw8ix1`,
                            "data-framer-name": `Logo 11`,
                            layoutDependency: w,
                            layoutId: `rzXqgdfxV`,
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 400,
                                intrinsicWidth: 1001,
                                pixelHeight: 400,
                                pixelWidth: 1001,
                                sizes: `91px`,
                                src: `/esper/images/5dvidyczitj8ceqx69gnqzwki4.png?width=1001&height=400`,
                                srcSet: `/esper/images/5dvidyczitj8ceqx69gnqzwki4.png?scale-down-to=512&width=1001&height=400 512w,/esper/images/5dvidyczitj8ceqx69gnqzwki4.png?width=1001&height=400 1001w`,
                              },
                              className: `framer-klbtjz`,
                              "data-framer-name": `Logo-transparent`,
                              layoutDependency: w,
                              layoutId: `lMvJqCaXs`,
                            }),
                          }),
                        ],
                        speed: 70,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                        ...jr({ iVF8K2Gs6: { gap: 0 } }, m, v),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6pWZH.framer-ykl6ak, .framer-6pWZH .framer-ykl6ak { display: block; }`,
          `.framer-6pWZH.framer-u1kxln { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1152px; }`,
          `.framer-6pWZH .framer-1vsnxrx-container { flex: none; height: 40px; position: relative; width: 110%; }`,
          `.framer-6pWZH .framer-1s3xuod, .framer-6pWZH .framer-9b7j98, .framer-6pWZH .framer-15y5g6b, .framer-6pWZH .framer-1dnidcj, .framer-6pWZH .framer-1l875mh, .framer-6pWZH .framer-1nlvtlm { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: min-content; }`,
          `.framer-6pWZH .framer-qt3cnw, .framer-6pWZH .framer-18094cp, .framer-6pWZH .framer-o73pj4 { flex: none; height: 45px; position: relative; width: 136px; }`,
          `.framer-6pWZH .framer-1ugonz3 { flex: none; height: 40px; position: relative; width: 87px; }`,
          `.framer-6pWZH .framer-dpvj72, .framer-6pWZH .framer-1grg9lo, .framer-6pWZH .framer-1a325hl, .framer-6pWZH .framer-1qw8ix1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: 168px; }`,
          `.framer-6pWZH .framer-f55kn0 { aspect-ratio: 2.304054054054054 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 129px; }`,
          `.framer-6pWZH .framer-110vvm9 { flex: none; height: 43px; position: relative; width: 53px; }`,
          `.framer-6pWZH .framer-dmvt4j { aspect-ratio: 0.9095163806552262 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: visible; position: relative; width: 34px; }`,
          `.framer-6pWZH .framer-1uac056 { aspect-ratio: 0.9900990099009901 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: visible; position: relative; width: 37px; }`,
          `.framer-6pWZH .framer-of5n20 { aspect-ratio: 2.6454937679769897 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 150px; }`,
          `.framer-6pWZH .framer-klbtjz { aspect-ratio: 2.5025 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); overflow: visible; position: relative; width: 91px; }`,
          `.framer-6pWZH.framer-v-q8nznx.framer-u1kxln { width: 390px; }`,
        ],
        `framer-6pWZH`,
      )),
      (Ur = Hr),
      (Hr.displayName = `Clients 2`),
      (Hr.defaultProps = { height: 40, width: 1152 }),
      P(Hr, {
        variant: {
          options: [`hGPGrY1F2`, `iVF8K2Gs6`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      z(Hr, [{ explicitInter: !0, fonts: [] }, ...Mr], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Gr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri = e(() => {
    (v(),
      F(),
      A(),
      n(),
      (Kr = [`boPhwZ0iR`, `afz5MUbaa`]),
      (qr = `framer-GnrQ9`),
      (Jr = { afz5MUbaa: `framer-v-x07z0q`, boPhwZ0iR: `framer-v-ftv5ce` }),
      (Yr = { bounce: 0.1, delay: 0, duration: 0.3, type: `spring` }),
      (Xr = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (Zr = T.create(o)),
      (Qr = { Pause: `afz5MUbaa`, Play: `boPhwZ0iR` }),
      ($r = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qr[r.variant] ?? r.variant ?? `boPhwZ0iR`,
      })),
      (ei = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ti = V(
        p(function (e, t) {
          let { activeLocale: n, setLocale: r } = J(),
            { style: a, className: o, layoutId: s, variant: c, ...l } = $r(e),
            {
              baseVariant: u,
              classNames: d,
              clearLoadingGesture: p,
              gestureHandlers: m,
              gestureVariant: h,
              isLoading: g,
              setGestureState: _,
              setVariant: v,
              variants: b,
            } = H({
              cycleOrder: Kr,
              defaultVariant: `boPhwZ0iR`,
              variant: c,
              variantClassNames: Jr,
            }),
            x = ei(e, b),
            S = j(qr),
            C = i(null),
            w = y(),
            E = ue();
          return f(k, {
            id: s ?? w,
            children: f(Zr, {
              animate: b,
              initial: !1,
              children: f(Xr, {
                value: Yr,
                children: f(T.div, {
                  ...l,
                  ...m,
                  className: j(S, `framer-ftv5ce`, o, d),
                  "data-framer-name": `Play`,
                  layoutDependency: x,
                  layoutId: `boPhwZ0iR`,
                  ref: t ?? C,
                  style: {
                    background: `linear-gradient(180deg, var(--token-9ca352cf-e781-4754-be23-516091b00cfe, rgb(255, 129, 77)) /* {"name":"Orange 65"} */ 0%, var(--token-0aa6d802-236c-45d5-97bb-34c9b0e88964, rgb(255, 75, 0)) /* {"name":"Orange 50"} */ 100%)`,
                    borderBottomLeftRadius: 295,
                    borderBottomRightRadius: 295,
                    borderTopLeftRadius: 295,
                    borderTopRightRadius: 295,
                    ...a,
                  },
                  ...Gr({ afz5MUbaa: { "data-framer-name": `Pause` } }, u, h),
                  children: f(q, {
                    background: {
                      alt: `Icon`,
                      fit: `fill`,
                      loading: M(
                        (E?.y || 0) + (12 + ((E?.height || 50) - 24 - 26) / 2),
                      ),
                      pixelHeight: 25,
                      pixelWidth: 25,
                      src: `/esper/images/qzs3aqvipi9og1lulv7sipq70.svg`,
                    },
                    className: `framer-15ovp32`,
                    "data-framer-name": `Icon`,
                    layoutDependency: x,
                    layoutId: `N3IwrdevB`,
                    style: {
                      mask: `linear-gradient(207deg, rgba(0,0,0,1) 20.35824887387387%, rgba(0, 0, 0, 0.58) 94.68785191441441%) add`,
                      rotate: 0,
                      WebkitMask: `linear-gradient(207deg, rgba(0,0,0,1) 20.35824887387387%, rgba(0, 0, 0, 0.58) 94.68785191441441%) add`,
                    },
                    variants: { afz5MUbaa: { rotate: 360 } },
                    ...Gr(
                      {
                        afz5MUbaa: {
                          background: {
                            alt: `Icon`,
                            fit: `fill`,
                            loading: M(
                              (E?.y || 0) +
                                (12 + ((E?.height || 50) - 24 - 26) / 2),
                            ),
                            pixelHeight: 24,
                            pixelWidth: 24,
                            src: `/esper/images/ztt8xgwhxtsfapsiwvj2wnhlg.svg`,
                          },
                        },
                      },
                      u,
                      h,
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-GnrQ9.framer-1986mf0, .framer-GnrQ9 .framer-1986mf0 { display: block; }`,
          `.framer-GnrQ9.framer-ftv5ce { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: min-content; }`,
          `.framer-GnrQ9 .framer-15ovp32 { flex: none; height: 26px; overflow: visible; position: relative; width: 26px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GnrQ9.framer-ftv5ce { gap: 0px; } .framer-GnrQ9.framer-ftv5ce > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-GnrQ9.framer-ftv5ce > :first-child { margin-left: 0px; } .framer-GnrQ9.framer-ftv5ce > :last-child { margin-right: 0px; } }`,
        ],
        `framer-GnrQ9`,
      )),
      (ni = ti),
      (ti.displayName = `Helper/Play Button`),
      (ti.defaultProps = { height: 50, width: 50 }),
      P(ti, {
        variant: {
          options: [`boPhwZ0iR`, `afz5MUbaa`],
          optionTitles: [`Play`, `Pause`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      z(ti, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function ii(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function ai(e) {
  return f(pi, { ...ii(e) });
}
function oi(e) {
  let n = ie(),
    r = i(!1),
    a = i(!1),
    o = t((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: t(() => {
      let t = e.current;
      t &&
        ((t.preload = `auto`),
        !(
          t.currentTime > 0 &&
          t.onplaying &&
          !t.paused &&
          !t.ended &&
          t.readyState >= t.HAVE_CURRENT_DATA
        ) &&
          t &&
          !r.current &&
          n &&
          ((r.current = !0),
          (a.current = !0),
          t
            .play()
            .catch((e) => {})
            .finally(() => (r.current = !1))));
    }, []),
    pause: t(() => {
      !e.current || r.current || (e.current.pause(), (a.current = !1));
    }, []),
    setProgress: o,
    isPlaying: a,
  };
}
function si({
  playingProp: e,
  muted: t,
  loop: n,
  playsinline: r,
  controls: i,
}) {
  let [a] = s(() => e),
    [o, c] = s(!1);
  e !== a && !o && c(!0);
  let l = a && t && n && r && !i && !o,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function ci(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function li(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(ci)
    .join(` `);
}
var ui,
  di,
  fi,
  pi,
  mi,
  hi = e(() => {
    (v(),
      F(),
      A(),
      Pe(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((ui ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((di ||= {})),
      (fi = `/esper/images/mlwpbw1duqawjlhhun3dbwpgjak.mp4`),
      (pi = m(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: a = !1,
            controls: o = !1,
            playing: s = !0,
            loop: c = !0,
            muted: l = !0,
            playsinline: u = !0,
            restartOnEnter: d = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: v = 25,
            startTime: y = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: w,
            onPause: T,
            onPlay: E,
            onEnd: D,
            onClick: ee,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
          } = e,
          N = i(),
          P = Ke(),
          F = i(null),
          I = i(null),
          L = Fe(),
          R = Re(),
          z = L || R === ne.export,
          te = We(e),
          B = z
            ? `no-autoplay`
            : si({
                playingProp: x,
                muted: l,
                loop: c,
                playsinline: u,
                controls: o,
              }),
          re = z ? !0 : C(N),
          ie = z ? !1 : C(N, { margin: `10%`, once: !0 }),
          ae = y === 100 ? 99.9 : y,
          { play: V, pause: H, setProgress: U, isPlaying: W } = oi(N);
        (h(() => {
          z || (B !== `on-viewport` && (x ? V() : H()));
        }, [B, x]),
          h(() => {
            z ||
              (re && x && B !== `no-autoplay` && V(),
              B === `on-viewport` && H());
          }, [B, re, x]),
          h(() => {
            !L || b || a || ae || !N.current || (N.current.currentTime = 0.01);
          }, [a, b, ae]));
        let G = i(!1);
        (h(() => {
          if (!G.current) {
            G.current = !0;
            return;
          }
          U(((O(S) ? S.get() : (S ?? 0) * 0.01) ?? 0) || (ae ?? 0) / 100);
        }, [ae, r, n, S]),
          h(() => {
            if (O(S)) return S.on(`change`, (e) => U(e));
          }, [S]),
          He(() => {
            F.current !== null && N.current && ((!I && c) || !F.current) && V();
          }),
          ze(() => {
            N.current &&
              ((I.current = N.current.ended),
              (F.current = N.current.paused),
              H());
          }));
        let oe = g(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, ae]);
        return (
          h(() => {
            P && N.current && B === `on-mount` && setTimeout(() => V(), 50);
          }, []),
          h(() => {
            N.current && !l && (N.current.volume = (v ?? 0) / 100);
          }, [v]),
          f(`video`, {
            onClick: ee,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
            src: oe,
            loop: c,
            ref: N,
            onSeeked: (e) => w?.(e),
            onPause: (e) => T?.(e),
            onPlay: (e) => E?.(e),
            onEnded: (e) => D?.(e),
            autoPlay:
              W.current || B === `on-mount` || (x && B === `on-viewport` && re),
            preload: W.current
              ? `auto`
              : z && !b
                ? `metadata`
                : B !== `on-mount` && !ie
                  ? `none`
                  : `metadata`,
            poster:
              a && !r && n === fi
                ? `/esper/images/5ilrvlyxf72khsvhqpa3sngzju.jpg`
                : a && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = N.current;
              e &&
                (e.currentTime < 0.3 && ae > 0 && U((ae ?? 0) * 0.01),
                (W.current ||
                  B === `on-mount` ||
                  (x && B === `on-viewport` && re)) &&
                  V());
            },
            controls: o,
            muted: z ? !0 : l,
            playsInline: u,
            style: {
              cursor: ee ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: te,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (ai.displayName = `Video`),
      (mi = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      P(ai, {
        srcType: {
          type: K.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: K.String,
          title: `URL`,
          defaultValue: `/esper/images/mlwpbw1duqawjlhhun3dbwpgjak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: K.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: {
          type: K.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        ...Ve,
        posterEnabled: {
          type: K.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: K.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: {
          type: K.Color,
          title: `Background`,
          defaultValue: `rgba(0,0,0,0)`,
        },
        startTime: {
          title: `Start Time`,
          type: K.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
        },
        loop: {
          type: K.Boolean,
          title: `Loop`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        objectFit: {
          type: K.Enum,
          title: `Fit`,
          options: mi,
          optionTitles: mi.map(li),
        },
        controls: {
          type: K.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: {
          type: K.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        volume: {
          type: K.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: K.EventHandler },
        onSeeked: { type: K.EventHandler },
        onPause: { type: K.EventHandler },
        onPlay: { type: K.EventHandler },
        ...Ie,
      }));
  });
function gi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li = e(() => {
    (v(),
      F(),
      A(),
      n(),
      ri(),
      hi(),
      (_i = L(ai)),
      (vi = L(ni)),
      (yi = te(ai)),
      (bi = { GpmNXdl7m: { hover: !0 } }),
      (xi = [`w6i92mI6q`, `GpmNXdl7m`, `wsZuiwTtq`]),
      (Si = `framer-6Gshl`),
      (Ci = {
        GpmNXdl7m: `framer-v-1gie71q`,
        w6i92mI6q: `framer-v-1k1obxd`,
        wsZuiwTtq: `framer-v-gmrdb1`,
      }),
      (wi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ti = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Ei = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Di = { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` }),
      (Oi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.04,
        skewX: 0,
        skewY: 0,
        transition: Di,
      }),
      (ki = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        transition: Di,
      }),
      (Ai = ({ value: e, children: t }) => {
        let n = c(D),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(D.Provider, { value: i, children: t });
      }),
      (ji = T.create(o)),
      (Mi = { Paused: `wsZuiwTtq`, Playing: `GpmNXdl7m` }),
      (Ni = ({
        controls: e,
        height: t,
        id: n,
        loop: r,
        muted: i,
        sourceType: a,
        thumbnail: o,
        videoFile: s,
        width: c,
        ...l
      }) => ({
        ...l,
        ccXMT_4VA: e ?? l.ccXMT_4VA,
        eihbh3Ofi: r ?? l.eihbh3Ofi,
        kiPAjtbyV:
          s ?? l.kiPAjtbyV ?? `/esper/images/eufx58khoofipla8j9ir0em8.mp4`,
        NC0UEvmcb: o ??
          l.NC0UEvmcb ?? {
            pixelHeight: 3e3,
            pixelWidth: 6222,
            src: `/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?width=6222&height=3000`,
            srcSet: `/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?scale-down-to=512&width=6222&height=3000 512w,/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?scale-down-to=1024&width=6222&height=3000 1024w,/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?scale-down-to=2048&width=6222&height=3000 2048w,/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?scale-down-to=4096&width=6222&height=3000 4096w,/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp?width=6222&height=3000 6222w`,
          },
        PigqzeBO6: i ?? l.PigqzeBO6,
        variant: Mi[l.variant] ?? l.variant ?? `w6i92mI6q`,
        ymOYwie1O: a ?? l.ymOYwie1O ?? `Upload`,
      })),
      (Pi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Fi = V(
        p(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = y(),
            { activeLocale: o, setLocale: s } = J(),
            c = ue(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              ymOYwie1O: m,
              kiPAjtbyV: h,
              NC0UEvmcb: g,
              ccXMT_4VA: v,
              eihbh3Ofi: b,
              PigqzeBO6: x,
              ...S
            } = Ni(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: ee,
              setGestureState: A,
              setVariant: N,
              variants: P,
            } = H({
              cycleOrder: xi,
              defaultVariant: `w6i92mI6q`,
              enabledGestures: bi,
              ref: r,
              variant: p,
              variantClassNames: Ci,
            }),
            F = Pi(e, P),
            { activeVariantCallback: I, delay: L } = oe(C),
            R = I(async (...e) => {
              N(`GpmNXdl7m`);
            }),
            z = I(async (...e) => {
              N(`wsZuiwTtq`);
            }),
            te = j(Si);
          return f(k, {
            id: d ?? a,
            children: f(ji, {
              animate: P,
              initial: !1,
              children: f(Ai, {
                value: Ti,
                children: _(q, {
                  ...S,
                  ...D,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: M(c?.y || 0),
                    sizes: c?.width || `100vw`,
                    ...wi(g),
                  },
                  className: j(te, `framer-1k1obxd`, u, w),
                  "data-framer-name": `Paused`,
                  layoutDependency: F,
                  layoutId: `w6i92mI6q`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 18,
                    borderBottomRightRadius: 18,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    mask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 78.44700168918918%, rgba(0,0,0,0) 100%) add`,
                    WebkitMask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 78.44700168918918%, rgba(0,0,0,0) 100%) add`,
                    ...l,
                  },
                  variants: {
                    GpmNXdl7m: {
                      mask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      WebkitMask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                    },
                    wsZuiwTtq: {
                      mask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      WebkitMask: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                    },
                  },
                  ...gi(
                    {
                      "GpmNXdl7m-hover": { "data-framer-name": void 0 },
                      GpmNXdl7m: { "data-framer-name": `Playing` },
                    },
                    C,
                    O,
                  ),
                  children: [
                    f(U, {
                      children: f(pe, {
                        className: `framer-1x3fur6-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: F,
                        layoutId: `YulVDpnx_-container`,
                        nodeId: `YulVDpnx_`,
                        rendersWithMotion: !0,
                        scopeId: `wsAX_jwc2`,
                        style: { opacity: 0 },
                        variants: {
                          GpmNXdl7m: { opacity: 1 },
                          wsZuiwTtq: { opacity: 1 },
                        },
                        children: f(ai, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 18,
                          bottomLeftRadius: 18,
                          bottomRightRadius: 18,
                          controls: v,
                          height: `100%`,
                          id: `YulVDpnx_`,
                          isMixedBorderRadius: !1,
                          layoutId: `YulVDpnx_`,
                          loop: b,
                          muted: x,
                          objectFit: `fill`,
                          playing: !1,
                          poster: Ei(g),
                          posterEnabled: !0,
                          srcFile: h,
                          srcType: m,
                          srcUrl: `/esper/images/mlwpbw1duqawjlhhun3dbwpgjak.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 18,
                          topRightRadius: 18,
                          volume: 55,
                          width: `100%`,
                          ...gi({ GpmNXdl7m: { playing: !0 } }, C, O),
                        }),
                      }),
                    }),
                    f(q, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: M(
                          (c?.y || 0) +
                            ((c?.height || 521) * 0.5011086474501111 - 40),
                        ),
                        pixelHeight: 80,
                        pixelWidth: 80,
                        sizes: `80px`,
                        src: `/esper/images/ibhfykckawatzkk5zohjkwtbwki.svg?width=80&height=80`,
                      },
                      className: `framer-1hcaxd7`,
                      "data-framer-name": `Button Container`,
                      "data-highlight": !0,
                      layoutDependency: F,
                      layoutId: `GUdNVBhtR`,
                      onTap: R,
                      style: {
                        backdropFilter: `blur(5px)`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        opacity: 1,
                        WebkitBackdropFilter: `blur(5px)`,
                      },
                      variants: {
                        "GpmNXdl7m-hover": { opacity: 1 },
                        GpmNXdl7m: { opacity: 0 },
                        wsZuiwTtq: { opacity: 1 },
                      },
                      ...gi({ GpmNXdl7m: { onTap: z } }, C, O),
                      children: f(T.div, {
                        className: `framer-10m2d3c`,
                        "data-framer-name": `Button Wrap`,
                        layoutDependency: F,
                        layoutId: `oLzEnr2yp`,
                        whileHover: Oi,
                        whileTap: ki,
                        children: f(U, {
                          height: 50,
                          y:
                            (c?.y || 0) +
                            ((c?.height || 521) * 0.5011086474501111 - 40) +
                            15 +
                            0,
                          children: f(pe, {
                            className: `framer-v1kro5-container`,
                            isModuleExternal: !0,
                            layoutDependency: F,
                            layoutId: `IZ6YBisns-container`,
                            nodeId: `IZ6YBisns`,
                            rendersWithMotion: !0,
                            scopeId: `wsAX_jwc2`,
                            children: f(ni, {
                              height: `100%`,
                              id: `IZ6YBisns`,
                              layoutId: `IZ6YBisns`,
                              variant: `boPhwZ0iR`,
                              width: `100%`,
                              ...gi(
                                { "GpmNXdl7m-hover": { variant: `afz5MUbaa` } },
                                C,
                                O,
                              ),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6Gshl.framer-1gxfkml, .framer-6Gshl .framer-1gxfkml { display: block; }`,
          `.framer-6Gshl.framer-1k1obxd { height: 521px; position: relative; width: 920px; }`,
          `.framer-6Gshl .framer-1x3fur6-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-6Gshl .framer-1hcaxd7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2.814814805984497px; height: 80px; justify-content: center; left: calc(50.00000000000002% - 80px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.110864745011106% - 80px / 2); width: 80px; z-index: 1; }`,
          `.framer-6Gshl .framer-10m2d3c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-6Gshl .framer-v1kro5-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-6Gshl.framer-v-1gie71q.framer-1k1obxd { cursor: pointer; }`,
        ],
        `framer-6Gshl`,
      )),
      (Ii = Fi),
      (Fi.displayName = `Video Component 2`),
      (Fi.defaultProps = { height: 521, width: 920 }),
      P(Fi, {
        variant: {
          options: [`w6i92mI6q`, `GpmNXdl7m`, `wsZuiwTtq`],
          optionTitles: [`Paused`, `Playing`, `Paused`],
          title: `Variant`,
          type: K.Enum,
        },
        ymOYwie1O: yi?.srcType && {
          ...yi.srcType,
          defaultValue: `Upload`,
          description: void 0,
          hidden: void 0,
          title: `Source Type`,
        },
        kiPAjtbyV: yi?.srcFile && {
          ...yi.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,EuFX58kHooFipla8J9ir0EM8.mp4?originalFilename=Framer+Plugins+_+Available+now%28720P_HD%29.mp4`,
          description: `Introduction Video`,
          hidden: void 0,
          title: `Video File`,
        },
        NC0UEvmcb: {
          __defaultAssetReference: `data:framer/asset-reference,0i9DmvASJEyFaEtgSTpeH5kFpGo.webp?originalFilename=Video+Thumbnail+image.webp&preferredSize=auto`,
          title: `Thumbnail`,
          type: K.ResponsiveImage,
        },
        ccXMT_4VA: { defaultValue: !1, title: `Controls`, type: K.Boolean },
        eihbh3Ofi: { defaultValue: !1, title: `Loop`, type: K.Boolean },
        PigqzeBO6: { defaultValue: !1, title: `Muted`, type: K.Boolean },
      }),
      z(Fi, [{ explicitInter: !0, fonts: [] }, ..._i, ...vi], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  Ri,
  zi,
  Bi,
  Vi = e(() => {
    (F(),
      W.loadFonts([
        `FR;InterDisplay`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (Ri = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/2uibialfchvpwbhqrmzutft7giu.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/zwfz6xbve5pmcwrjrgbdhnmkoki.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/u9laddmbrhzx3sb8g8glty5fete.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/tvew2lzxj1t7qfxp1gdtidj2o0g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/df7bjcrmstypqsb945lalmfccvq.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/bhynjqztyl2lqvmmirrs6y16es.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/vebzumjgykkysfcy73iwwtzlnag.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/dppbyi0sl4fylgakx8kxopvt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/4raeqdeorcndkhhiicbjow92lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/1k3w8dizy3v4emk8mb08yhxtbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/tusctfyvm1i1ichuycwz9gddq.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/vgyfwiwsac5oyxaycrxxvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/syrnpwzamircj3wilpip43kjqs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/giryzetix4ifypco5pyzonkhjio.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/h89bbhkbhdzlxzzxi8upztsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/u6gjwduwb143kpnk1t1mdkdwkmc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/43sj6mfoph1lcjt46ovydusba6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/wcchg0r4gbdairhfhiolq6oekqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/wz367jpwf9brw6ldthn8rxgsjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/ia3uin3hqwqdrvloc1zetyhww.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/2a4xx7cngadfglvv4xro06obhy.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/cfmzu8w2e7thgf4t4ratmpuwosa.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/867qobyax8ansfx4tgevu9yicm.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/oyn2zbenfdnw7mt2lzjk1h9zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/cdae8hgz1cmylu9g005paw3xmo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/dofvtme1uplcq161m6hj8csqyg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/pkrfnwfozl77qycaip84ln1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/tktbcdnbmevseejkdnghhklzyo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (zi = [
        `.framer-2hnee .framer-styles-preset-18k3ehq:not(.rich-text-wrapper), .framer-2hnee .framer-styles-preset-18k3ehq.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, #d6d6d6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Bi = `framer-2hnee`));
  }),
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  Q,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  $,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja;
e(() => {
  (v(),
    F(),
    A(),
    n(),
    Xe(),
    ct(),
    Ot(),
    Ne(),
    Kt(),
    on(),
    yn(),
    Ee(),
    Me(),
    Mn(),
    Wr(),
    Li(),
    Vi(),
    Le(),
    qe(),
    (Hi = L(Ae)),
    (Ui = me(R)),
    (Wi = L(Ur)),
    (Gi = L(Ze)),
    (Ki = L(De)),
    (qi = L(Ii)),
    (Ji = fe(T.div)),
    (Yi = L(Dt)),
    (Xi = fe(B)),
    (Zi = L(Ye)),
    (Qi = L(jn)),
    ($i = L(an)),
    (ea = L(vn)),
    (ta = L(Z)),
    (na = me(T.div)),
    (ra = L(Oe)),
    (ia = {
      AV4qGqEC9: `(max-width: 809.98px)`,
      binYOdBcM: `(min-width: 1440px)`,
      nmuyZviuC: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px) and (max-width: 1439.98px)`,
    }),
    (aa = () => typeof document < `u`),
    (oa = []),
    (sa = `framer-7YhlT`),
    (ca = {
      AV4qGqEC9: `framer-v-9w4hrp`,
      binYOdBcM: `framer-v-193nlgj`,
      nmuyZviuC: `framer-v-ebiaht`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (la = void 0),
    (ua = void 0),
    (da = void 0),
    (fa = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pa = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 60,
        delay: 0.3,
        mass: 0.5,
        stiffness: 360,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    (ma = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (ha = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (ga = {
      damping: 60,
      delay: 0.1,
      mass: 0.5,
      stiffness: 360,
      type: `spring`,
    }),
    (_a = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ga,
      x: 0,
      y: 40,
    }),
    (va = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 24,
    }),
    (ya = { delay: 0.3, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    ($ = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (ba = { delay: 0.2, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (xa = {
      effect: {
        filter: `blur(4px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 12,
      },
      repeat: !1,
      startDelay: 0,
      threshold: 1,
      tokenization: `line`,
      transition: {
        delay: 0.05,
        duration: 0.8,
        ease: [0.12, 0.23, 0.17, 0.98],
        type: `tween`,
      },
      trigger: `onInView`,
      type: `appear`,
    }),
    (Sa = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      },
      repeat: !1,
      startDelay: 0.2,
      threshold: 1,
      tokenization: `word`,
      transition: {
        delay: 0.05,
        duration: 0.5,
        ease: [0.12, 0.23, 0.17, 0.98],
        type: `tween`,
      },
      trigger: `onInView`,
      type: `appear`,
    }),
    (Ca = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (wa = (e) => e),
    (Ta = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 60,
        delay: 0.5,
        mass: 0.5,
        stiffness: 360,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    (Ea = {
      "Desktop 2": `binYOdBcM`,
      Desktop: `WQLkyLRf1`,
      Phone: `AV4qGqEC9`,
      Tablet: `nmuyZviuC`,
    }),
    (Da = ({ value: e }) =>
      G()
        ? null
        : f(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Oa = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ea[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (ka = V(
      p(function (e, t) {
        let n = i(null),
          r = t ?? n,
          a = y(),
          { activeLocale: s, setLocale: l } = J(),
          u = ue(),
          { style: d, className: p, layoutId: m, variant: h, ...v } = Oa(e);
        ae(g(() => Je({}, s), [s]));
        let [b, x] = de(h, ia, !1),
          S = j(sa, Ge, Bi),
          C = c(re)?.isLayoutTemplate,
          w = fa(C, !!c(D)?.transition?.layout),
          E = () => !aa() || b === `AV4qGqEC9`,
          O = () => (aa() ? b !== `AV4qGqEC9` : !0),
          ee = () => !aa() || b === `nmuyZviuC`,
          A = le(`gfH_8JeJY`),
          N = i(null),
          P = () => !aa() || b === `binYOdBcM`,
          F = () => (aa() ? ![`nmuyZviuC`, `AV4qGqEC9`].includes(b) : !0),
          I = le(`XB3ZpmHpG`),
          L = i(null),
          z = () => (aa() ? b !== `nmuyZviuC` : !0),
          te = le(`dYtMLpeYf`),
          ne = i(null),
          ie = le(`Tbdeu193a`),
          V = i(null),
          H = le(`vAu4_v7EX`),
          W = i(null);
        return (
          se({}),
          f(re.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Ea,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: ca,
            },
            children: _(k, {
              id: m ?? a,
              children: [
                f(Da, {
                  value: `html body { background: var(--token-d530a452-d1c0-4efd-8ee8-39f881c479e9, rgb(4, 4, 4)); } html { font-size: 100%; }`,
                }),
                _(T.div, {
                  ...v,
                  className: j(S, `framer-72rtr7`, p),
                  ref: r,
                  style: { ...d },
                  children: [
                    _(T.div, {
                      className: `framer-nqkdlu`,
                      "data-framer-name": `Header+Main`,
                      layout: w,
                      children: [
                        f(Y, {
                          breakpoint: b,
                          overrides: {
                            AV4qGqEC9: { y: (u?.y || 0) + 0 + 0 + 0 },
                          },
                          children: f(U, {
                            height: 172,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 0 + 0 + 0,
                            children: f(B, {
                              className: `framer-fanaa3-container`,
                              "data-framer-name": `Header`,
                              name: `Header`,
                              nodeId: `Z0nwQUs12`,
                              scopeId: `augiA20Il`,
                              children: f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: { variant: Q(`H2UUL1GY2`) },
                                },
                                children: f(Ae, {
                                  height: `100%`,
                                  id: `Z0nwQUs12`,
                                  layoutId: `Z0nwQUs12`,
                                  name: `Header`,
                                  style: { width: `100%` },
                                  variant: Q(`S7BezGRLj`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        E() &&
                          f(`div`, {
                            className: `framer-1np4c7y hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                            "data-framer-name": `Spacer`,
                          }),
                        O() &&
                          f(`div`, {
                            className: `framer-1bv71pv hidden-9w4hrp`,
                            "data-framer-name": `Spacer`,
                          }),
                        ee() &&
                          _(`main`, {
                            className: `framer-1xskp1a hidden-72rtr7 hidden-9w4hrp hidden-193nlgj`,
                            "data-framer-name": `Main`,
                            children: [
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  nmuyZviuC: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (u?.y || 0) + 0 + 0 + 0 + 570 + 0 + 0,
                                      ),
                                      pixelHeight: 349,
                                      pixelWidth: 942,
                                      sizes: `565px`,
                                      src: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349`,
                                      srcSet: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?scale-down-to=512&width=942&height=349 512w,/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349 942w`,
                                    },
                                  },
                                },
                                children: f(q, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 349,
                                    pixelWidth: 942,
                                    sizes: `565px`,
                                    src: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349`,
                                    srcSet: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?scale-down-to=512&width=942&height=349 512w,/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349 942w`,
                                  },
                                  className: `framer-1coyxf9`,
                                }),
                              }),
                              f(`div`, {
                                className: `framer-2dssc1`,
                                "data-framer-name": `Top`,
                                children: f(`div`, {
                                  className: `framer-1iownmg`,
                                  "data-framer-name": `H1+Body`,
                                  children: f(Ui, {
                                    __fromCanvasComponent: !0,
                                    animate: pa,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-1nu4r2j`,
                                        "data-styles-preset": `vtMx1ujdK`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `SRILANKA'S PREMIER SCIENCE DAY AND AWARDS CERAMONY BROUGHT TO YOU BY THE SCIENCE SOCIETY OF D.S. SENANAYAKE COLLEGE`,
                                      }),
                                    }),
                                    className: `framer-fwpjb1`,
                                    "data-framer-appear-id": `fwpjb1`,
                                    "data-framer-name": `Our team of creative experts delivers stunning, high-quality designs tailored to your needs, ensuring your brand stands out in a crowded market.`,
                                    fonts: [`Inter`],
                                    initial: ma,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        E() &&
                          _(`main`, {
                            className: `framer-1fnvbas hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                            "data-framer-name": `Main`,
                            children: [
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (u?.y || 0) + 0 + 0 + 140 + 349 + 0 + 0,
                                      ),
                                      pixelHeight: 349,
                                      pixelWidth: 942,
                                      sizes: `274px`,
                                      src: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349`,
                                      srcSet: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?scale-down-to=512&width=942&height=349 512w,/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349 942w`,
                                    },
                                  },
                                },
                                children: f(q, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 349,
                                    pixelWidth: 942,
                                    sizes: `274px`,
                                    src: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349`,
                                    srcSet: `/esper/images/1axaeepaiboo6au7fywunhesdak.png?scale-down-to=512&width=942&height=349 512w,/esper/images/1axaeepaiboo6au7fywunhesdak.png?width=942&height=349 942w`,
                                  },
                                  className: `framer-1jj0gun`,
                                }),
                              }),
                              f(`div`, {
                                className: `framer-wmsjic`,
                                "data-framer-name": `Top`,
                                children: f(`div`, {
                                  className: `framer-1vdtq3r`,
                                  "data-framer-name": `H1+Body`,
                                  children: f(Ui, {
                                    __fromCanvasComponent: !0,
                                    animate: pa,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-18k3ehq`,
                                        "data-styles-preset": `A6tNITizW`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `SRILANKA'S PREMIER SCIENCE DAY AND AWARDS CERAMONY BROUGHT TO YOU BY THE SCIENCE SOCIETY OF D.S. SENANAYAKE COLLEGE`,
                                      }),
                                    }),
                                    className: `framer-a37a8b`,
                                    "data-framer-appear-id": `a37a8b`,
                                    "data-framer-name": `Our team of creative experts delivers stunning, high-quality designs tailored to your needs, ensuring your brand stands out in a crowded market.`,
                                    fonts: [`Inter`],
                                    initial: ma,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    E() &&
                      f(Y, {
                        breakpoint: b,
                        overrides: {
                          AV4qGqEC9: {
                            height: 40,
                            width: `385px`,
                            y: (u?.y || 0) + 0 + 749,
                          },
                        },
                        children: f(U, {
                          children: f(B, {
                            className: `framer-spzwq1-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                            "data-framer-name": `Brands`,
                            layout: w,
                            name: `Brands`,
                            nodeId: `fR0VCCfAL`,
                            scopeId: `augiA20Il`,
                            children: f(Ur, {
                              height: `100%`,
                              id: `fR0VCCfAL`,
                              layoutId: `fR0VCCfAL`,
                              name: `Brands`,
                              style: { width: `100%` },
                              variant: Q(`iVF8K2Gs6`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    O() &&
                      _(T.div, {
                        className: `framer-w3gto7 hidden-9w4hrp`,
                        "data-framer-name": `Plasma`,
                        layout: w,
                        children: [
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              binYOdBcM: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: M((u?.y || 0) + 0 + -1.51),
                                  pixelHeight: 1080,
                                  pixelWidth: 1920,
                                  sizes: u?.width || `100vw`,
                                  src: `/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?width=1920&height=1080`,
                                  srcSet: `/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?scale-down-to=512&width=1920&height=1080 512w,/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?scale-down-to=1024&width=1920&height=1080 1024w,/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?width=1920&height=1080 1920w`,
                                },
                              },
                              nmuyZviuC: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: M((u?.y || 0) + 0 + -1.4923),
                                  pixelHeight: 1080,
                                  pixelWidth: 1920,
                                  sizes: `calc(${u?.width || `100vw`} * 1.0012)`,
                                  src: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080`,
                                  srcSet: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=512&width=1920&height=1080 512w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=1024&width=1920&height=1080 1024w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080 1920w`,
                                },
                              },
                            },
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: M((u?.y || 0) + 0 + -0.99),
                                pixelHeight: 1080,
                                pixelWidth: 1920,
                                sizes: u?.width || `100vw`,
                                src: `/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?width=1920&height=1080`,
                                srcSet: `/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?scale-down-to=512&width=1920&height=1080 512w,/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?scale-down-to=1024&width=1920&height=1080 1024w,/esper/images/9bs090cscytfdacmrr7jlvndqfc.png?width=1920&height=1080 1920w`,
                              },
                              className: `framer-1wdis9r`,
                            }),
                          }),
                          f(`div`, {
                            className: `framer-17jcdvw`,
                            "data-framer-name": `Overlay`,
                          }),
                          f(U, {
                            children: f(B, {
                              className: `framer-1opuij9-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `uPmz212cS`,
                              scopeId: `augiA20Il`,
                              children: f(Y, {
                                breakpoint: b,
                                overrides: { nmuyZviuC: { reach: 30 } },
                                children: f(Ze, {
                                  animation: { animate: !0, speed: 10 },
                                  height: `100%`,
                                  id: `uPmz212cS`,
                                  intensity: 31,
                                  layoutId: `uPmz212cS`,
                                  position: 0,
                                  radius: `0px`,
                                  rays: 36,
                                  raysColor: {
                                    color: `rgb(255, 191, 102)`,
                                    color1: `rgb(255, 255, 255)`,
                                    color2: `rgb(255, 203, 71)`,
                                    mode: `single`,
                                  },
                                  reach: 31,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    O() &&
                      f(U, {
                        children: f(B, {
                          className: `framer-xwq82o-container hidden-9w4hrp`,
                          "data-framer-name": `Smooth-Scroll`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: w,
                          name: `Smooth-Scroll`,
                          nodeId: `LICuQH4yD`,
                          scopeId: `augiA20Il`,
                          children: f(De, {
                            height: `100%`,
                            id: `LICuQH4yD`,
                            intensity: 12,
                            layoutId: `LICuQH4yD`,
                            name: `Smooth-Scroll`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    _(Ji, {
                      __framer__animate: { transition: ga },
                      __framer__animateOnce: !0,
                      __framer__enter: ha,
                      __framer__exit: _a,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-lhng8p`,
                      "data-framer-name": `Team`,
                      id: A,
                      layout: w,
                      ref: N,
                      children: [
                        O() &&
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              binYOdBcM: { y: (u?.y || 0) + 0 + 775 + 0 + 0 },
                              nmuyZviuC: { y: (u?.y || 0) + 0 + 905 + 9 + 0 },
                            },
                            children: f(U, {
                              height: 40,
                              width: `905px`,
                              y: (u?.y || 0) + 0 + 710 + 0 + 0,
                              children: f(B, {
                                className: `framer-3ubug2-container hidden-9w4hrp`,
                                "data-framer-name": `Brands`,
                                name: `Brands`,
                                nodeId: `YJnSTU1FQ`,
                                scopeId: `augiA20Il`,
                                children: f(Ur, {
                                  height: `100%`,
                                  id: `YJnSTU1FQ`,
                                  layoutId: `YJnSTU1FQ`,
                                  name: `Brands`,
                                  style: { width: `100%` },
                                  variant: Q(`hGPGrY1F2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        _(Ji, {
                          __framer__animate: { transition: ya },
                          __framer__animateOnce: !0,
                          __framer__enter: va,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1gzigij`,
                          "data-framer-name": `Videp Wrap`,
                          children: [
                            f(`div`, {
                              className: `framer-f8sdpn`,
                              "data-framer-name": `BG Gredient`,
                            }),
                            f(Y, {
                              breakpoint: b,
                              overrides: {
                                AV4qGqEC9: {
                                  height: 220,
                                  width: `calc(min(${u?.width || `100vw`}, 1160px) - 44px)`,
                                  y: (u?.y || 0) + 0 + 829 + 0 + 0 + 6 + 0,
                                },
                                binYOdBcM: {
                                  y: (u?.y || 0) + 0 + 775 + 0 + 76 + 12 + 0,
                                },
                                nmuyZviuC: {
                                  width: `calc(min(${u?.width || `100vw`}, 1160px) - 16px)`,
                                  y: (u?.y || 0) + 0 + 905 + 9 + 123 + 8 + 0,
                                },
                              },
                              children: f(U, {
                                height: 521,
                                width: `calc(min(${u?.width || `100vw`}, 1160px) - 24px)`,
                                y: (u?.y || 0) + 0 + 710 + 0 + 76 + 12 + 0,
                                children: f(B, {
                                  className: `framer-1liewsu-container`,
                                  nodeId: `qyrGj23qv`,
                                  scopeId: `augiA20Il`,
                                  children: f(Ii, {
                                    ccXMT_4VA: !1,
                                    eihbh3Ofi: !1,
                                    height: `100%`,
                                    id: `qyrGj23qv`,
                                    kiPAjtbyV: `/esper/images/u8envoaruzs1o3fwmebitz5gdu.mp4`,
                                    layoutId: `qyrGj23qv`,
                                    NC0UEvmcb: $(
                                      {
                                        pixelHeight: 985,
                                        pixelWidth: 1741,
                                        src: `/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png?width=1741&height=985`,
                                        srcSet: `/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png?scale-down-to=512&width=1741&height=985 512w,/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png?scale-down-to=1024&width=1741&height=985 1024w,/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png?width=1741&height=985 1741w`,
                                      },
                                      `Thumbnail`,
                                    ),
                                    PigqzeBO6: !1,
                                    style: { height: `100%`, width: `100%` },
                                    variant: Q(`w6i92mI6q`),
                                    width: `100%`,
                                    ymOYwie1O: `Upload`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        E() &&
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              AV4qGqEC9: {
                                height: 56,
                                y: (u?.y || 0) + 0 + 829 + 0 + 267,
                              },
                            },
                            children: f(U, {
                              children: f(Xi, {
                                __framer__animate: { transition: ba },
                                __framer__animateOnce: !0,
                                __framer__enter: va,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-uiizrd-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                isModuleExternal: !0,
                                nodeId: `ELuSjcyCX`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: f(Dt, {
                                  AyWRicLnL: !1,
                                  dnbs0gLnU: !1,
                                  height: `100%`,
                                  id: `ELuSjcyCX`,
                                  layoutId: `ELuSjcyCX`,
                                  O2s5dHJnY: !1,
                                  variant: Q(`knV6KwmH_`),
                                  WBHDxVlAg: `16px 24px 16px 24px`,
                                  width: `100%`,
                                  wjO8MQqIi: `Watch The Full Episode`,
                                  yRT8xCm66: `https://www.youtube.com/watch?v=LCd2KkoUOTw`,
                                }),
                              }),
                            }),
                          }),
                        O() &&
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              binYOdBcM: { y: (u?.y || 0) + 0 + 775 + 692 },
                              nmuyZviuC: { y: (u?.y || 0) + 0 + 905 + 502 },
                            },
                            children: f(U, {
                              height: 56,
                              y: (u?.y || 0) + 0 + 710 + 674,
                              children: f(Xi, {
                                __framer__animate: { transition: ba },
                                __framer__animateOnce: !0,
                                __framer__enter: va,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-13kfmgi-container hidden-9w4hrp`,
                                isModuleExternal: !0,
                                nodeId: `Rp3KH3j8c`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: f(Dt, {
                                  AyWRicLnL: !1,
                                  dnbs0gLnU: !1,
                                  height: `100%`,
                                  id: `Rp3KH3j8c`,
                                  layoutId: `Rp3KH3j8c`,
                                  O2s5dHJnY: !1,
                                  variant: Q(`knV6KwmH_`),
                                  WBHDxVlAg: `16px 24px 16px 24px`,
                                  width: `100%`,
                                  wjO8MQqIi: `Watch The Full Episode`,
                                  yRT8xCm66: `https://www.youtube.com/watch?v=LCd2KkoUOTw`,
                                }),
                              }),
                            }),
                          }),
                        _(`div`, {
                          className: `framer-1ylbk1b`,
                          "data-framer-name": `H2+Body`,
                          children: [
                            O() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    children: f(o, {
                                      children: f(`h2`, {
                                        style: {
                                          "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                          "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                          "--framer-font-size": `52px`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `40%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: `successfully concluded ! `,
                                      }),
                                    }),
                                  },
                                },
                                children: f(R, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: f(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                        "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                        "--framer-font-size": `52px`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `40%`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: `successfully concluded ! `,
                                    }),
                                  }),
                                  className: `framer-jctzf6 hidden-9w4hrp`,
                                  "data-framer-name": `Meet Your Dream Team`,
                                  fonts: [`GF;Playfair Display-600italic`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            O() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    height: 561.8,
                                    y: (u?.y || 0) + 0 + 775 + 0 + 657 + 692,
                                  },
                                  nmuyZviuC: {
                                    height: 846.8,
                                    width: `calc(min(${u?.width || `100vw`}, 1160px) - 34px)`,
                                    y: (u?.y || 0) + 0 + 905 + 9 + 743 + 502,
                                  },
                                },
                                children: f(U, {
                                  height: 56,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    710 +
                                    0 +
                                    657 +
                                    1199.8 -
                                    2,
                                  children: f(Xi, {
                                    __framer__animate: { transition: ba },
                                    __framer__animateOnce: !0,
                                    __framer__enter: va,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1dbp5on-container hidden-9w4hrp`,
                                    isModuleExternal: !0,
                                    nodeId: `ETP7tGh6k`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: f(Dt, {
                                      AyWRicLnL: !1,
                                      dnbs0gLnU: !1,
                                      height: `100%`,
                                      id: `ETP7tGh6k`,
                                      layoutId: `ETP7tGh6k`,
                                      O2s5dHJnY: !1,
                                      variant: Q(`knV6KwmH_`),
                                      WBHDxVlAg: `16px 24px 16px 24px`,
                                      width: `100%`,
                                      wjO8MQqIi: `Visir Full Album Here`,
                                      yRT8xCm66: `https://www.facebook.com/share/p/1Cfd1XF45A/?mibextid=wwXIfr`,
                                    }),
                                  }),
                                }),
                              }),
                            O() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `140%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                    },
                                    children: f(`strong`, {
                                      children: `The Pinnacle of School Science Excellence — ESPER Awards ’26 — has been successfully concluded at Monarch Imperial, Colombo, on 17th March 2026.`,
                                    }),
                                  }),
                                }),
                                className: `framer-94gx0i hidden-9w4hrp`,
                                "data-framer-name": `Our dedicated team blends diverse expertise, innovative thinking, and a passion for excellence to turn your vision into reality.`,
                                fonts: [
                                  `FR;InterDisplay-Light`,
                                  `FR;InterDisplay`,
                                ],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            f(U, {
                              children: f(B, {
                                className: `framer-ig4vtf-container`,
                                "data-code-component-plugin-id": `84d4c1`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `aLD6sIhgq`,
                                scopeId: `augiA20Il`,
                                children: f(Y, {
                                  breakpoint: b,
                                  overrides: {
                                    AV4qGqEC9: {
                                      gridColumns: 1,
                                      gridRows: 4,
                                      images: [
                                        $(
                                          {
                                            pixelHeight: 1178,
                                            pixelWidth: 2048,
                                            src: `/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg?width=2048&height=1178`,
                                            srcSet: `/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg?scale-down-to=512&width=2048&height=1178 512w,/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg?scale-down-to=1024&width=2048&height=1178 1024w,/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg?width=2048&height=1178 2048w`,
                                          },
                                          ``,
                                        ),
                                        $(
                                          {
                                            pixelHeight: 1221,
                                            pixelWidth: 2048,
                                            src: `/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg?width=2048&height=1221`,
                                            srcSet: `/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg?scale-down-to=512&width=2048&height=1221 512w,/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg?scale-down-to=1024&width=2048&height=1221 1024w,/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg?width=2048&height=1221 2048w`,
                                          },
                                          ``,
                                        ),
                                        $(
                                          {
                                            pixelHeight: 823,
                                            pixelWidth: 2048,
                                            src: `/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?width=2048&height=823`,
                                            srcSet: `/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?scale-down-to=512&width=2048&height=823 512w,/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?scale-down-to=1024&width=2048&height=823 1024w,/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?width=2048&height=823 2048w`,
                                          },
                                          ``,
                                        ),
                                        $(
                                          {
                                            pixelHeight: 1365,
                                            pixelWidth: 2048,
                                            src: `/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?width=2048&height=1365`,
                                            srcSet: `/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?scale-down-to=512&width=2048&height=1365 512w,/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?scale-down-to=1024&width=2048&height=1365 1024w,/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?width=2048&height=1365 2048w`,
                                          },
                                          ``,
                                        ),
                                      ],
                                      spanConfig: [
                                        {
                                          colSpan: 2,
                                          imageIndex: 0,
                                          rowSpan: 2,
                                        },
                                        {
                                          colSpan: 2,
                                          imageIndex: 2,
                                          rowSpan: 2,
                                        },
                                      ],
                                    },
                                  },
                                  children: f(Ye, {
                                    animationDuration: 0.3,
                                    backgroundColor: `rgb(0, 0, 0)`,
                                    borderColor: `rgb(0, 0, 0)`,
                                    borderRadius: 24,
                                    borderWidth: 0,
                                    enableLightbox: !1,
                                    enableSpanning: !0,
                                    gap: 8,
                                    grayscaleOnHover: !1,
                                    gridColumns: 3,
                                    gridRows: 3,
                                    height: `100%`,
                                    id: `aLD6sIhgq`,
                                    images: [
                                      $(
                                        {
                                          pixelHeight: 1365,
                                          pixelWidth: 2048,
                                          src: `/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg?width=2048&height=1365`,
                                          srcSet: `/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg?scale-down-to=512&width=2048&height=1365 512w,/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg?scale-down-to=1024&width=2048&height=1365 1024w,/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg?width=2048&height=1365 2048w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 1365,
                                          pixelWidth: 2048,
                                          src: `/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg?width=2048&height=1365`,
                                          srcSet: `/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg?scale-down-to=512&width=2048&height=1365 512w,/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg?scale-down-to=1024&width=2048&height=1365 1024w,/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg?width=2048&height=1365 2048w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 823,
                                          pixelWidth: 2048,
                                          src: `/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?width=2048&height=823`,
                                          srcSet: `/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?scale-down-to=512&width=2048&height=823 512w,/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?scale-down-to=1024&width=2048&height=823 1024w,/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg?width=2048&height=823 2048w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 1365,
                                          pixelWidth: 2048,
                                          src: `/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?width=2048&height=1365`,
                                          srcSet: `/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?scale-down-to=512&width=2048&height=1365 512w,/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?scale-down-to=1024&width=2048&height=1365 1024w,/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg?width=2048&height=1365 2048w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 2048,
                                          pixelWidth: 1365,
                                          src: `/esper/images/fqm2hf3u20oeqqkdaofwxb1lvcy.jpg?width=1365&height=2048`,
                                          srcSet: `/esper/images/fqm2hf3u20oeqqkdaofwxb1lvcy.jpg?scale-down-to=1024&width=1365&height=2048 682w,/esper/images/fqm2hf3u20oeqqkdaofwxb1lvcy.jpg?width=1365&height=2048 1365w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 1203,
                                          pixelWidth: 2048,
                                          src: `/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg?width=2048&height=1203`,
                                          srcSet: `/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg?scale-down-to=512&width=2048&height=1203 512w,/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg?scale-down-to=1024&width=2048&height=1203 1024w,/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg?width=2048&height=1203 2048w`,
                                        },
                                        ``,
                                      ),
                                      $(
                                        {
                                          pixelHeight: 1178,
                                          pixelWidth: 1198,
                                          src: `/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg?width=1198&height=1178`,
                                          srcSet: `/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg?scale-down-to=512&width=1198&height=1178 512w,/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg?scale-down-to=1024&width=1198&height=1178 1024w,/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg?width=1198&height=1178 1198w`,
                                        },
                                        ``,
                                      ),
                                    ],
                                    layoutId: `aLD6sIhgq`,
                                    lightboxBackgroundColor: `rgb(0, 0, 0)`,
                                    lightboxOpacity: 0,
                                    opacity: 1,
                                    overlayColor: `rgb(0, 0, 0)`,
                                    overlayOpacity: 0,
                                    showOverlay: !0,
                                    spanConfig: [
                                      { colSpan: 2, imageIndex: 0, rowSpan: 1 },
                                      { colSpan: 1, imageIndex: 2, rowSpan: 2 },
                                    ],
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            E() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `140%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                    },
                                    children: f(`strong`, {
                                      children: `The Pinnacle of School Science Excellence — ESPER Awards ’26 — has been successfully concluded at Monarch Imperial, Colombo, on 17th March 2026.`,
                                    }),
                                  }),
                                }),
                                className: `framer-uj38uk hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                "data-framer-name": `Our dedicated team blends diverse expertise, innovative thinking, and a passion for excellence to turn your vision into reality.`,
                                fonts: [
                                  `FR;InterDisplay-Light`,
                                  `FR;InterDisplay`,
                                ],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            E() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                      "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                      "--framer-font-size": `33px`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `110%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `successfully concluded ! `,
                                  }),
                                }),
                                className: `framer-1bbxm6c hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`GF;Playfair Display-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            E() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    height: 56,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      358 +
                                      30 +
                                      1143.3,
                                  },
                                },
                                children: f(U, {
                                  children: f(Xi, {
                                    __framer__animate: { transition: ba },
                                    __framer__animateOnce: !0,
                                    __framer__enter: va,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-fe31eb-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                    isModuleExternal: !0,
                                    nodeId: `SkEa1VzwQ`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: f(Dt, {
                                      AyWRicLnL: !1,
                                      dnbs0gLnU: !1,
                                      height: `100%`,
                                      id: `SkEa1VzwQ`,
                                      layoutId: `SkEa1VzwQ`,
                                      O2s5dHJnY: !1,
                                      variant: Q(`knV6KwmH_`),
                                      WBHDxVlAg: `16px 24px 16px 24px`,
                                      width: `100%`,
                                      wjO8MQqIi: `Visit Full Album Here`,
                                      yRT8xCm66: `https://www.facebook.com/share/p/1Cfd1XF45A/?mibextid=wwXIfr`,
                                    }),
                                  }),
                                }),
                              }),
                            ee() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  nmuyZviuC: {
                                    height: 56,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      905 +
                                      9 +
                                      743 +
                                      30 +
                                      1178.8,
                                  },
                                },
                                children: f(U, {
                                  children: f(Xi, {
                                    __framer__animate: { transition: ba },
                                    __framer__animateOnce: !0,
                                    __framer__enter: va,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-a7x7db-container hidden-72rtr7 hidden-9w4hrp hidden-193nlgj`,
                                    isModuleExternal: !0,
                                    nodeId: `zrqtp0vLv`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: f(Dt, {
                                      AyWRicLnL: !1,
                                      dnbs0gLnU: !1,
                                      height: `100%`,
                                      id: `zrqtp0vLv`,
                                      layoutId: `zrqtp0vLv`,
                                      O2s5dHJnY: !1,
                                      variant: Q(`knV6KwmH_`),
                                      WBHDxVlAg: `16px 24px 16px 24px`,
                                      width: `100%`,
                                      wjO8MQqIi: `Visit Full Album `,
                                      yRT8xCm66: `https://www.facebook.com/share/p/1Cfd1XF45A/?mibextid=wwXIfr`,
                                    }),
                                  }),
                                }),
                              }),
                            P() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    height: 54,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      775 +
                                      0 +
                                      657 +
                                      1199.8 -
                                      0,
                                  },
                                },
                                children: f(U, {
                                  children: f(Xi, {
                                    __framer__animate: { transition: ba },
                                    __framer__animateOnce: !0,
                                    __framer__enter: va,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-s59ln5-container hidden-72rtr7 hidden-ebiaht hidden-9w4hrp`,
                                    isModuleExternal: !0,
                                    nodeId: `YLPmlNxmZ`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: f(Dt, {
                                      AyWRicLnL: !1,
                                      dnbs0gLnU: !1,
                                      height: `100%`,
                                      id: `YLPmlNxmZ`,
                                      layoutId: `YLPmlNxmZ`,
                                      O2s5dHJnY: !1,
                                      style: { height: `100%` },
                                      variant: Q(`knV6KwmH_`),
                                      WBHDxVlAg: `16px 24px 16px 24px`,
                                      width: `100%`,
                                      wjO8MQqIi: `Visir Full Album Here`,
                                      yRT8xCm66: `https://www.facebook.com/share/p/1Cfd1XF45A/?mibextid=wwXIfr`,
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        O() &&
                          _(`div`, {
                            className: `framer-1kihxcd hidden-9w4hrp`,
                            "data-framer-name": `H2+Body`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                      "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                      "--framer-font-size": `52px`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `40%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `our Judges`,
                                  }),
                                }),
                                className: `framer-1djpwv1`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`GF;Playfair Display-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    children: f(o, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                          "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `300`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                        },
                                        children: f(`strong`, {
                                          children: `Our esteemed, nationally and internationally recognized judges for ESPER Awards ’26—upholding fairness, integrity, and thoughtful evaluation.`,
                                        }),
                                      }),
                                    }),
                                    fonts: [
                                      `FR;InterDisplay-Light`,
                                      `FR;InterDisplay`,
                                    ],
                                  },
                                },
                                children: f(R, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: _(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                        "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `300`,
                                        "--framer-line-height": `140%`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                      },
                                      children: [
                                        f(`strong`, {
                                          children: `Our esteemed, `,
                                        }),
                                        f(`span`, {
                                          style: {
                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5`,
                                            "--framer-font-weight": `400`,
                                          },
                                          children: f(`strong`, {
                                            children: `nationally and internationally`,
                                          }),
                                        }),
                                        f(`strong`, {
                                          children: ` recognized judges for ESPER Awards ’26—upholding fairness, integrity, and thoughtful evaluation.`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-ucidsy`,
                                  "data-framer-name": `Our dedicated team blends diverse expertise, innovative thinking, and a passion for excellence to turn your vision into reality.`,
                                  fonts: [
                                    `FR;InterDisplay-Light`,
                                    `FR;InterDisplay`,
                                    `FR;InterDisplay-Bold`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        E() &&
                          _(`div`, {
                            className: `framer-1ovidn8 hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                            "data-framer-name": `Services Cards`,
                            children: [
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    width: `min(min(${u?.width || `100vw`}, 1160px) - 32px, 1160px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      1914.8 +
                                      0 +
                                      0,
                                  },
                                },
                                children: f(U, {
                                  height: 521,
                                  children: f(B, {
                                    className: `framer-11tazn-container`,
                                    nodeId: `xfCKA4aaq`,
                                    scopeId: `augiA20Il`,
                                    children: f(jn, {
                                      bLduUHqqh: $(
                                        {
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          src: `/esper/images/tes9nouyvfibtcargbei3i4si.png?width=1080&height=1080`,
                                          srcSet: `/esper/images/tes9nouyvfibtcargbei3i4si.png?scale-down-to=512&width=1080&height=1080 512w,/esper/images/tes9nouyvfibtcargbei3i4si.png?scale-down-to=1024&width=1080&height=1080 1024w,/esper/images/tes9nouyvfibtcargbei3i4si.png?width=1080&height=1080 1080w`,
                                        },
                                        `Villa`,
                                      ),
                                      height: `100%`,
                                      id: `xfCKA4aaq`,
                                      l9LjRaJjB: !0,
                                      layoutId: `xfCKA4aaq`,
                                      mClhBAXgo: `an award-winning Sri Lankan wildlife 
photographer,`,
                                      style: { height: `100%`, width: `100%` },
                                      T9gmcBtzV: `Lakshitha Karunarathna`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    width: `min(min(${u?.width || `100vw`}, 1160px) - 32px, 1160px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      1914.8 +
                                      0 +
                                      545,
                                  },
                                },
                                children: f(U, {
                                  height: 517,
                                  children: f(B, {
                                    className: `framer-91aqzp-container`,
                                    nodeId: `uzLpzVkAT`,
                                    scopeId: `augiA20Il`,
                                    children: f(jn, {
                                      bLduUHqqh: $(
                                        {
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          src: `/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?width=1080&height=1080`,
                                          srcSet: `/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?scale-down-to=512&width=1080&height=1080 512w,/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?scale-down-to=1024&width=1080&height=1080 1024w,/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?width=1080&height=1080 1080w`,
                                        },
                                        `Car`,
                                      ),
                                      height: `100%`,
                                      id: `uzLpzVkAT`,
                                      l9LjRaJjB: !0,
                                      layoutId: `uzLpzVkAT`,
                                      mClhBAXgo: `Internationaly recognized Sri Lankan visual director`,
                                      style: { height: `100%`, width: `100%` },
                                      T9gmcBtzV: `Randy Chriz Perera`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    width: `min(min(${u?.width || `100vw`}, 1160px) - 32px, 1160px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      1914.8 +
                                      0 +
                                      1086,
                                  },
                                },
                                children: f(U, {
                                  height: 509,
                                  children: f(B, {
                                    className: `framer-j29ilj-container`,
                                    nodeId: `cC1jwKuAC`,
                                    scopeId: `augiA20Il`,
                                    children: f(jn, {
                                      bLduUHqqh: $(
                                        {
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          src: `/esper/images/j5g4kfbwy38as4gp6ttkvhgplg.png?width=1080&height=1080`,
                                          srcSet: `/esper/images/j5g4kfbwy38as4gp6ttkvhgplg.png?scale-down-to=512&width=1080&height=1080 512w,/esper/images/j5g4kfbwy38as4gp6ttkvhgplg.png?scale-down-to=1024&width=1080&height=1080 1024w,/esper/images/j5g4kfbwy38as4gp6ttkvhgplg.png?width=1080&height=1080 1080w`,
                                        },
                                        `Paper Floating`,
                                      ),
                                      height: `100%`,
                                      id: `cC1jwKuAC`,
                                      l9LjRaJjB: !0,
                                      layoutId: `cC1jwKuAC`,
                                      mClhBAXgo: `Sri Lankan Computer Science researcher undergraduate at (UCSC)`,
                                      style: { height: `100%`, width: `100%` },
                                      T9gmcBtzV: `Viduanga Landers`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        O() &&
                          _(`div`, {
                            className: `framer-1nvqr6w hidden-9w4hrp`,
                            "data-framer-name": `Services Cards`,
                            children: [
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      775 +
                                      0 +
                                      2227.6 +
                                      0 +
                                      0,
                                  },
                                  nmuyZviuC: {
                                    width: `max((min(min(${u?.width || `100vw`}, 1160px) * 0.95, 1160px) - 48px) / 3, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      905 +
                                      9 +
                                      2382.6 +
                                      0 +
                                      0,
                                  },
                                },
                                children: f(U, {
                                  height: 481,
                                  width: `max((min(${u?.width || `100vw`}, 1160px) - 48px) / 3, 50px)`,
                                  y: (u?.y || 0) + 0 + 710 + 0 + 2227.6 + 0 + 0,
                                  children: f(B, {
                                    className: `framer-1t3wuux-container`,
                                    nodeId: `J3PE1O_jw`,
                                    scopeId: `augiA20Il`,
                                    children: f(an, {
                                      bLduUHqqh: $(
                                        {
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          src: `https://framerusercontent.com/images/nouTXxe4ueCNOyRy5T8ScZLFa8.png?width=1080&height=1080`,
                                          srcSet: `https://framerusercontent.com/images/nouTXxe4ueCNOyRy5T8ScZLFa8.png?scale-down-to=512&width=1080&height=1080 512w,https://framerusercontent.com/images/nouTXxe4ueCNOyRy5T8ScZLFa8.png?scale-down-to=1024&width=1080&height=1080 1024w,https://framerusercontent.com/images/nouTXxe4ueCNOyRy5T8ScZLFa8.png?width=1080&height=1080 1080w`,
                                        },
                                        `Paper Floating`,
                                      ),
                                      height: `100%`,
                                      id: `J3PE1O_jw`,
                                      l9LjRaJjB: !0,
                                      layoutId: `J3PE1O_jw`,
                                      mClhBAXgo: `Sri Lankan Computer 
Science researcher
undergraduate at
(UCSC)`,
                                      style: { height: `100%`, width: `100%` },
                                      T9gmcBtzV: `Viduanga Landers`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      775 +
                                      0 +
                                      2227.6 +
                                      0 +
                                      0,
                                  },
                                  nmuyZviuC: {
                                    width: `max((min(min(${u?.width || `100vw`}, 1160px) * 0.95, 1160px) - 48px) / 3, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      905 +
                                      9 +
                                      2382.6 +
                                      0 +
                                      0,
                                  },
                                },
                                children: f(U, {
                                  height: 481,
                                  width: `max((min(${u?.width || `100vw`}, 1160px) - 48px) / 3, 50px)`,
                                  y: (u?.y || 0) + 0 + 710 + 0 + 2227.6 + 0 + 0,
                                  children: f(B, {
                                    className: `framer-zrzgsf-container`,
                                    nodeId: `PppVst0vb`,
                                    scopeId: `augiA20Il`,
                                    children: f(Y, {
                                      breakpoint: b,
                                      overrides: {
                                        nmuyZviuC: {
                                          mClhBAXgo: `an award-winning 
Sri Lankan wildlife 
photographer,`,
                                        },
                                      },
                                      children: f(an, {
                                        bLduUHqqh: $(
                                          {
                                            pixelHeight: 1080,
                                            pixelWidth: 1080,
                                            src: `/esper/images/tes9nouyvfibtcargbei3i4si.png?width=1080&height=1080`,
                                            srcSet: `/esper/images/tes9nouyvfibtcargbei3i4si.png?scale-down-to=512&width=1080&height=1080 512w,/esper/images/tes9nouyvfibtcargbei3i4si.png?scale-down-to=1024&width=1080&height=1080 1024w,/esper/images/tes9nouyvfibtcargbei3i4si.png?width=1080&height=1080 1080w`,
                                          },
                                          `Car`,
                                        ),
                                        height: `100%`,
                                        id: `PppVst0vb`,
                                        l9LjRaJjB: !0,
                                        layoutId: `PppVst0vb`,
                                        mClhBAXgo: `an award-winning 
Sri Lankan 
wildlife 
photographer,`,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        T9gmcBtzV: `Lakshitha Karunarathna`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      775 +
                                      0 +
                                      2227.6 +
                                      0 +
                                      0,
                                  },
                                  nmuyZviuC: {
                                    width: `max((min(min(${u?.width || `100vw`}, 1160px) * 0.95, 1160px) - 48px) / 3, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      905 +
                                      9 +
                                      2382.6 +
                                      0 +
                                      0,
                                  },
                                },
                                children: f(U, {
                                  height: 481,
                                  width: `max((min(${u?.width || `100vw`}, 1160px) - 48px) / 3, 50px)`,
                                  y: (u?.y || 0) + 0 + 710 + 0 + 2227.6 + 0 + 0,
                                  children: f(B, {
                                    className: `framer-vxixd6-container`,
                                    nodeId: `RdoAvDkWR`,
                                    scopeId: `augiA20Il`,
                                    children: f(an, {
                                      bLduUHqqh: $(
                                        {
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          src: `/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?width=1080&height=1080`,
                                          srcSet: `/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?scale-down-to=512&width=1080&height=1080 512w,/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?scale-down-to=1024&width=1080&height=1080 1024w,/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png?width=1080&height=1080 1080w`,
                                        },
                                        `Villa`,
                                      ),
                                      height: `100%`,
                                      id: `RdoAvDkWR`,
                                      l9LjRaJjB: !0,
                                      layoutId: `RdoAvDkWR`,
                                      mClhBAXgo: `Internationaly
recognized
Sri Lankan 
visual director`,
                                      style: { height: `100%`, width: `100%` },
                                      T9gmcBtzV: `Randy Chriz Perera`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        O() &&
                          _(`div`, {
                            className: `framer-wt6gb8 hidden-9w4hrp`,
                            "data-framer-name": `Content Container`,
                            children: [
                              _(`div`, {
                                className: `framer-46ipdk`,
                                "data-framer-name": `Title`,
                                children: [
                                  f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      nmuyZviuC: {
                                        children: _(o, {
                                          children: [
                                            _(`h2`, {
                                              style: {
                                                "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                                "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                                "--framer-font-size": `64px`,
                                                "--framer-font-style": `italic`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `-3px`,
                                                "--framer-line-height": `110%`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: [
                                                `Monarch Imperial `,
                                                f(`span`, {
                                                  style: {
                                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-weight": `500`,
                                                  },
                                                  children: `.`,
                                                }),
                                              ],
                                            }),
                                            f(`p`, {
                                              children: f(`br`, {
                                                className: `trailing-break`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: f(R, {
                                      __fromCanvasComponent: !0,
                                      children: _(o, {
                                        children: [
                                          _(`h2`, {
                                            style: {
                                              "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                              "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-font-style": `italic`,
                                              "--framer-font-weight": `600`,
                                              "--framer-letter-spacing": `-3px`,
                                              "--framer-line-height": `110%`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: [
                                              f(`span`, {
                                                style: {
                                                  "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                                  "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-text-color": `var(--token-a6d02d7b-c62e-4bdd-a986-baa8bce5578c, rgb(0, 2, 2))`,
                                                },
                                                children: `It Embarks At `,
                                              }),
                                              `Monarch Imperial `,
                                              f(`span`, {
                                                style: {
                                                  "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                                  "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-weight": `500`,
                                                },
                                                children: `.`,
                                              }),
                                            ],
                                          }),
                                          f(`p`, {
                                            children: f(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      className: `framer-m71xm8`,
                                      "data-framer-name": `Main Title`,
                                      effect: xa,
                                      fonts: [
                                        `GF;Playfair Display-600italic`,
                                        `FR;InterDisplay-Medium`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(R, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `RlI7SW50ZXJEaXNwbGF5`,
                                          "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-line-height": `27.6px`,
                                          "--framer-text-color": `var(--token-a6d02d7b-c62e-4bdd-a986-baa8bce5578c, rgb(0, 2, 2))`,
                                        },
                                        children: `Carrying pride with elegance — embarking in true Senanayakian colours.`,
                                      }),
                                    }),
                                    className: `framer-1srbmyl`,
                                    "data-framer-name": `Subtitle`,
                                    effect: Sa,
                                    fonts: [`FR;InterDisplay`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (u?.y || 0) + 0 + 775 + 0 + 2768.6 + 40,
                                      ),
                                      pixelHeight: 1221,
                                      pixelWidth: 1080,
                                      sizes: `508px`,
                                      src: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221`,
                                      srcSet: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?scale-down-to=1024&width=1080&height=1221 905w,https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221 1080w`,
                                    },
                                  },
                                  nmuyZviuC: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (u?.y || 0) + 0 + 905 + 9 + 2970.6 + 40,
                                      ),
                                      pixelHeight: 1221,
                                      pixelWidth: 1080,
                                      sizes: `432px`,
                                      src: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221`,
                                      srcSet: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?scale-down-to=1024&width=1080&height=1221 905w,https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221 1080w`,
                                    },
                                  },
                                },
                                children: f(q, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: M(
                                      (u?.y || 0) + 0 + 710 + 0 + 2768.6 + 40,
                                    ),
                                    pixelHeight: 1221,
                                    pixelWidth: 1080,
                                    sizes: `508px`,
                                    src: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221`,
                                    srcSet: `https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?scale-down-to=1024&width=1080&height=1221 905w,https://framerusercontent.com/images/1OYuC5sakLW3J5Zga7uDk3wNzAI.png?width=1080&height=1221 1080w`,
                                  },
                                  className: `framer-j939b3`,
                                }),
                              }),
                            ],
                          }),
                        E() &&
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              AV4qGqEC9: {
                                height: 475,
                                width: `calc(min(${u?.width || `100vw`}, 1160px) - 32px)`,
                                y: (u?.y || 0) + 0 + 829 + 0 + 3544.8,
                              },
                            },
                            children: f(U, {
                              children: f(B, {
                                className: `framer-1dqpp9l-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                nodeId: `MgDuEZHgh`,
                                scopeId: `augiA20Il`,
                                children: f(vn, {
                                  bz2SOKPAC: ua,
                                  FKARN3Cfk: Ca(la),
                                  height: `100%`,
                                  id: `MgDuEZHgh`,
                                  layoutId: `MgDuEZHgh`,
                                  LKJDuHAih: wa(da, s),
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        _(`div`, {
                          className: `framer-15qykm`,
                          "data-framer-name": `H2+Body`,
                          children: [
                            O() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  binYOdBcM: {
                                    children: f(o, {
                                      children: _(`h2`, {
                                        style: {
                                          "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                          "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                          "--framer-font-size": `52px`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `40%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: [
                                          `School`,
                                          f(`span`, {
                                            style: {
                                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              "--framer-font-style": `normal`,
                                            },
                                            children: ` `,
                                          }),
                                          `Awards`,
                                          f(`span`, {
                                            style: {
                                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              "--framer-font-style": `normal`,
                                            },
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                    }),
                                    fonts: [
                                      `GF;Playfair Display-600italic`,
                                      `FR;InterDisplay-SemiBold`,
                                    ],
                                  },
                                  nmuyZviuC: {
                                    children: f(o, {
                                      children: _(`h2`, {
                                        style: {
                                          "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                          "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                          "--framer-font-size": `52px`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `40%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: [
                                          `School`,
                                          f(`span`, {
                                            style: {
                                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              "--framer-font-style": `normal`,
                                            },
                                            children: ` `,
                                          }),
                                          `Awards`,
                                          f(`span`, {
                                            style: {
                                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              "--framer-font-style": `normal`,
                                            },
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                    }),
                                    fonts: [
                                      `GF;Playfair Display-600italic`,
                                      `FR;InterDisplay-SemiBold`,
                                    ],
                                  },
                                },
                                children: f(R, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: f(`h2`, {
                                      style: {
                                        "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                        "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                        "--framer-font-size": `52px`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `40%`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: `School Awards `,
                                    }),
                                  }),
                                  className: `framer-17eqxwi hidden-9w4hrp`,
                                  "data-framer-name": `Meet Your Dream Team`,
                                  fonts: [`GF;Playfair Display-600italic`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            O() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-size": `35px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `140%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `creator awards`,
                                  }),
                                }),
                                className: `framer-8e3bt0 hidden-9w4hrp`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`Inter-SemiBold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            E() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    style: {
                                      "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                      "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                      "--framer-font-size": `39px`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `50%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `school Awards`,
                                  }),
                                }),
                                className: `framer-1qbciz1 hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`GF;Playfair Display-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            E() &&
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-size": `23px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `120%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `creator Awards`,
                                  }),
                                }),
                                className: `framer-ndz598 hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`Inter-SemiBold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            E() &&
                              f(`div`, {
                                className: `framer-nct3u9 hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                "data-framer-name": `Plasma`,
                              }),
                            f(R, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: _(`p`, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                  },
                                  children: [
                                    f(`strong`, { children: `Creator Awards` }),
                                    ` — Celebrating the boundless creativity of students, recognizing innovative ideas, artistic brilliance, and imaginative thinking that inspire future innovation.`,
                                  ],
                                }),
                              }),
                              className: `framer-w85e7j`,
                              "data-framer-name": `Our dedicated team blends diverse expertise, innovative thinking, and a passion for excellence to turn your vision into reality.`,
                              fonts: [
                                `FR;InterDisplay`,
                                `FR;InterDisplay-Bold`,
                              ],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        _(`div`, {
                          className: `framer-g159kn`,
                          "data-framer-name": `Team Collection`,
                          children: [
                            f(Y, {
                              breakpoint: b,
                              overrides: {
                                AV4qGqEC9: {
                                  width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                  y: (u?.y || 0) + 0 + 829 + 0 + 4356.9 + 0 + 0,
                                },
                                binYOdBcM: {
                                  width: `332px`,
                                  y: (u?.y || 0) + 0 + 775 + 0 + 3783.4 + 0 + 0,
                                },
                                nmuyZviuC: {
                                  height: 644,
                                  width: `363px`,
                                  y: (u?.y || 0) + 0 + 905 + 9 + 4079.4 + 0 + 0,
                                },
                              },
                              children: f(U, {
                                height: 578,
                                width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                y: (u?.y || 0) + 0 + 710 + 0 + 3783.4 + 0 + 0,
                                children: f(B, {
                                  className: `framer-168vegr-container`,
                                  isModuleExternal: !0,
                                  nodeId: `l2YHbQgp0`,
                                  scopeId: `augiA20Il`,
                                  children: f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      AV4qGqEC9: { variant: Q(`qoawDqr0s`) },
                                    },
                                    children: f(Z, {
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `l2YHbQgp0`,
                                      layoutId: `l2YHbQgp0`,
                                      style: { width: `100%` },
                                      variant: Q(`AvHcalqs8`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `https://framerusercontent.com/images/nWfYn4OVSrRosRSMEe8J2HmFUqg.png?width=1080&height=1350`,
                                          srcSet: `https://framerusercontent.com/images/nWfYn4OVSrRosRSMEe8J2HmFUqg.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/nWfYn4OVSrRosRSMEe8J2HmFUqg.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Graphic Designer`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(Y, {
                              breakpoint: b,
                              overrides: {
                                AV4qGqEC9: {
                                  width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    829 +
                                    0 +
                                    4356.9 +
                                    0 +
                                    602,
                                },
                                binYOdBcM: {
                                  width: `332px`,
                                  y: (u?.y || 0) + 0 + 775 + 0 + 3783.4 + 0 + 0,
                                },
                                nmuyZviuC: {
                                  height: 644,
                                  width: `363px`,
                                  y: (u?.y || 0) + 0 + 905 + 9 + 4079.4 + 0 + 0,
                                },
                              },
                              children: f(U, {
                                height: 578,
                                width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                y: (u?.y || 0) + 0 + 710 + 0 + 3783.4 + 0 + 0,
                                children: f(B, {
                                  className: `framer-tn6t8r-container`,
                                  isModuleExternal: !0,
                                  nodeId: `uRa8Qg28c`,
                                  scopeId: `augiA20Il`,
                                  children: f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      AV4qGqEC9: { variant: Q(`qoawDqr0s`) },
                                    },
                                    children: f(Z, {
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `uRa8Qg28c`,
                                      layoutId: `uRa8Qg28c`,
                                      style: { width: `100%` },
                                      variant: Q(`AvHcalqs8`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `https://framerusercontent.com/images/HDkefVDKeCLfamePKdZUbQw36PE.png?width=1080&height=1350`,
                                          srcSet: `https://framerusercontent.com/images/HDkefVDKeCLfamePKdZUbQw36PE.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/HDkefVDKeCLfamePKdZUbQw36PE.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Short Film`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(Y, {
                              breakpoint: b,
                              overrides: {
                                AV4qGqEC9: {
                                  width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    829 +
                                    0 +
                                    4356.9 +
                                    0 +
                                    1204,
                                },
                                binYOdBcM: {
                                  width: `332px`,
                                  y: (u?.y || 0) + 0 + 775 + 0 + 3783.4 + 0 + 0,
                                },
                                nmuyZviuC: {
                                  height: 644,
                                  width: `363px`,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    905 +
                                    9 +
                                    4079.4 +
                                    0 +
                                    652,
                                },
                              },
                              children: f(U, {
                                height: 578,
                                width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                y: (u?.y || 0) + 0 + 710 + 0 + 3783.4 + 0 + 0,
                                children: f(B, {
                                  className: `framer-1e7qg6w-container`,
                                  isModuleExternal: !0,
                                  nodeId: `lSEXDuw80`,
                                  scopeId: `augiA20Il`,
                                  children: f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      AV4qGqEC9: { variant: Q(`qoawDqr0s`) },
                                    },
                                    children: f(Z, {
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `lSEXDuw80`,
                                      layoutId: `lSEXDuw80`,
                                      style: { width: `100%` },
                                      variant: Q(`AvHcalqs8`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `https://framerusercontent.com/images/a9OkDiAT586Y0Tk07IeQgtGgA.png?width=1080&height=1350`,
                                          srcSet: `https://framerusercontent.com/images/a9OkDiAT586Y0Tk07IeQgtGgA.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/a9OkDiAT586Y0Tk07IeQgtGgA.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Wildlife Photographer`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(Y, {
                              breakpoint: b,
                              overrides: {
                                AV4qGqEC9: {
                                  width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    829 +
                                    0 +
                                    4356.9 +
                                    0 +
                                    1806,
                                },
                                binYOdBcM: {
                                  width: `332px`,
                                  y: (u?.y || 0) + 0 + 775 + 0 + 3783.4 + 0 + 0,
                                },
                                nmuyZviuC: {
                                  height: 644,
                                  width: `363px`,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    905 +
                                    9 +
                                    4079.4 +
                                    0 +
                                    652,
                                },
                              },
                              children: f(U, {
                                height: 578,
                                width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                y: (u?.y || 0) + 0 + 710 + 0 + 3783.4 + 0 + 0,
                                children: f(B, {
                                  className: `framer-yf8hda-container`,
                                  isModuleExternal: !0,
                                  nodeId: `D9IG7UJZO`,
                                  scopeId: `augiA20Il`,
                                  children: f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      AV4qGqEC9: { variant: Q(`qoawDqr0s`) },
                                    },
                                    children: f(Z, {
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `D9IG7UJZO`,
                                      layoutId: `D9IG7UJZO`,
                                      style: { width: `100%` },
                                      variant: Q(`AvHcalqs8`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `https://framerusercontent.com/images/FTUAmgrt98RQLoaU6d76o3kI8o.png?width=1080&height=1350`,
                                          srcSet: `https://framerusercontent.com/images/FTUAmgrt98RQLoaU6d76o3kI8o.png?scale-down-to=1024&width=1080&height=1350 819w,https://framerusercontent.com/images/FTUAmgrt98RQLoaU6d76o3kI8o.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Research Team`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            E() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    height: 578,
                                    width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      4356.9 +
                                      0 +
                                      2408,
                                  },
                                },
                                children: f(U, {
                                  children: f(B, {
                                    className: `framer-119pog1-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                    isModuleExternal: !0,
                                    nodeId: `m2ZJmKUjR`,
                                    scopeId: `augiA20Il`,
                                    children: f(Z, {
                                      fb_jC0b_S: `https://forms.gle/3tUxBp3YXPrPRab57`,
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `m2ZJmKUjR`,
                                      layoutId: `m2ZJmKUjR`,
                                      style: { width: `100%` },
                                      variant: Q(`qoawDqr0s`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?width=1080&height=1350`,
                                          srcSet: `/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Article Writer`,
                                    }),
                                  }),
                                }),
                              }),
                            E() &&
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    height: 578,
                                    width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      829 +
                                      0 +
                                      4356.9 +
                                      0 +
                                      3010,
                                  },
                                },
                                children: f(U, {
                                  children: f(B, {
                                    className: `framer-p7fjgv-container hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                                    isModuleExternal: !0,
                                    nodeId: `bzsAAzWkC`,
                                    scopeId: `augiA20Il`,
                                    children: f(Z, {
                                      fb_jC0b_S: `https://forms.gle/dXuGF1sCkLtZ1escA`,
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `bzsAAzWkC`,
                                      layoutId: `bzsAAzWkC`,
                                      style: { width: `100%` },
                                      variant: Q(`qoawDqr0s`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350`,
                                          srcSet: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Sci - Fi Artist`,
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        F() &&
                          f(na, {
                            animate: Ta,
                            className: `framer-nrbcmf hidden-ebiaht hidden-9w4hrp`,
                            "data-framer-appear-id": `nrbcmf`,
                            "data-framer-name": `Bottom`,
                            initial: ma,
                            optimized: !0,
                          }),
                        O() &&
                          _(Ji, {
                            __framer__animate: { transition: ga },
                            __framer__animateOnce: !0,
                            __framer__enter: ha,
                            __framer__exit: _a,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-p4q4wv hidden-9w4hrp`,
                            "data-framer-name": `Team`,
                            id: I,
                            ref: L,
                            children: [
                              _(`div`, {
                                className: `framer-1kbkbje`,
                                "data-framer-name": `H2+Body`,
                                children: [
                                  f(R, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h2`, {
                                        style: {
                                          "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                          "--framer-font-size": `35px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: `creator awards`,
                                      }),
                                    }),
                                    className: `framer-1n14928`,
                                    "data-framer-name": `Meet Your Dream Team`,
                                    fonts: [`Inter-SemiBold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  z() &&
                                    f(R, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`h2`, {
                                          style: {
                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                            "--framer-font-size": `35px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                            "--framer-text-transform": `capitalize`,
                                          },
                                          children: `tech awards`,
                                        }),
                                      }),
                                      className: `framer-124em4z hidden-ebiaht`,
                                      "data-framer-name": `Meet Your Dream Team`,
                                      fonts: [`Inter-SemiBold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                ],
                              }),
                              _(`div`, {
                                className: `framer-153iuej`,
                                "data-framer-name": `Team Collection`,
                                children: [
                                  f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      binYOdBcM: {
                                        width: `332px`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          775 +
                                          0 +
                                          4433.4 +
                                          0 +
                                          72 +
                                          0 +
                                          0,
                                      },
                                      nmuyZviuC: {
                                        width: `363px`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          905 +
                                          9 +
                                          5458.4 +
                                          9 +
                                          68 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: f(U, {
                                      height: 578,
                                      width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                      y:
                                        (u?.y || 0) +
                                        0 +
                                        710 +
                                        0 +
                                        4433.4 +
                                        0 +
                                        72 +
                                        0 +
                                        0,
                                      children: f(B, {
                                        className: `framer-aw3jnk-container`,
                                        isModuleExternal: !0,
                                        nodeId: `KGhIHXXuQ`,
                                        scopeId: `augiA20Il`,
                                        children: f(Z, {
                                          g00LJCSg8: `Of The Year`,
                                          height: `100%`,
                                          id: `KGhIHXXuQ`,
                                          layoutId: `KGhIHXXuQ`,
                                          style: { width: `100%` },
                                          variant: Q(`AvHcalqs8`),
                                          width: `100%`,
                                          WiQAc6QPE: $(
                                            {
                                              pixelHeight: 1350,
                                              pixelWidth: 1080,
                                              src: `/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?width=1080&height=1350`,
                                              srcSet: `/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png?width=1080&height=1350 1080w`,
                                            },
                                            ``,
                                          ),
                                          x4R5Mb5Jq: `Article Writer`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      binYOdBcM: {
                                        width: `332px`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          775 +
                                          0 +
                                          4433.4 +
                                          0 +
                                          72 +
                                          0 +
                                          0,
                                      },
                                      nmuyZviuC: {
                                        width: `363px`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          905 +
                                          9 +
                                          5458.4 +
                                          9 +
                                          68 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: f(U, {
                                      height: 578,
                                      width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                      y:
                                        (u?.y || 0) +
                                        0 +
                                        710 +
                                        0 +
                                        4433.4 +
                                        0 +
                                        72 +
                                        0 +
                                        0,
                                      children: f(B, {
                                        className: `framer-x8vgbu-container`,
                                        isModuleExternal: !0,
                                        nodeId: `GnyvOYGOz`,
                                        scopeId: `augiA20Il`,
                                        children: f(Y, {
                                          breakpoint: b,
                                          overrides: {
                                            nmuyZviuC: {
                                              fb_jC0b_S: `https://forms.gle/dXuGF1sCkLtZ1escA`,
                                              WiQAc6QPE: $(
                                                {
                                                  pixelHeight: 1350,
                                                  pixelWidth: 1080,
                                                  src: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350`,
                                                  srcSet: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350 1080w`,
                                                },
                                                ``,
                                              ),
                                              x4R5Mb5Jq: `Sci -Fi Artist`,
                                            },
                                          },
                                          children: f(Z, {
                                            g00LJCSg8: `Of The Year`,
                                            height: `100%`,
                                            id: `GnyvOYGOz`,
                                            layoutId: `GnyvOYGOz`,
                                            style: { width: `100%` },
                                            variant: Q(`AvHcalqs8`),
                                            width: `100%`,
                                            WiQAc6QPE: $(
                                              {
                                                pixelHeight: 1350,
                                                pixelWidth: 1080,
                                                src: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350`,
                                                srcSet: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350 1080w`,
                                              },
                                              ``,
                                            ),
                                            x4R5Mb5Jq: `Ai Photo Manipulator`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  z() &&
                                    f(Y, {
                                      breakpoint: b,
                                      overrides: {
                                        binYOdBcM: {
                                          width: `332px`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            775 +
                                            0 +
                                            4433.4 +
                                            0 +
                                            72 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: f(U, {
                                        height: 578,
                                        width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          710 +
                                          0 +
                                          4433.4 +
                                          0 +
                                          72 +
                                          0 +
                                          0,
                                        children: f(B, {
                                          className: `framer-1p6myi8-container hidden-ebiaht`,
                                          isModuleExternal: !0,
                                          nodeId: `ig4embC30`,
                                          scopeId: `augiA20Il`,
                                          children: f(Z, {
                                            g00LJCSg8: `Of The Year`,
                                            height: `100%`,
                                            id: `ig4embC30`,
                                            layoutId: `ig4embC30`,
                                            style: { width: `100%` },
                                            variant: Q(`AvHcalqs8`),
                                            width: `100%`,
                                            WiQAc6QPE: $(
                                              {
                                                pixelHeight: 1350,
                                                pixelWidth: 1080,
                                                src: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350`,
                                                srcSet: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350 1080w`,
                                              },
                                              ``,
                                            ),
                                            x4R5Mb5Jq: `Edu Coder`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  z() &&
                                    f(Y, {
                                      breakpoint: b,
                                      overrides: {
                                        binYOdBcM: {
                                          width: `332px`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            775 +
                                            0 +
                                            4433.4 +
                                            0 +
                                            72 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: f(U, {
                                        height: 578,
                                        width: `max((min(${u?.width || `100vw`}, 1160px) - 72px) / 4, 50px)`,
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          710 +
                                          0 +
                                          4433.4 +
                                          0 +
                                          72 +
                                          0 +
                                          0,
                                        children: f(B, {
                                          className: `framer-oxq9dj-container hidden-ebiaht`,
                                          isModuleExternal: !0,
                                          nodeId: `Vdr2KD_T0`,
                                          scopeId: `augiA20Il`,
                                          children: f(Z, {
                                            g00LJCSg8: `Of The Year`,
                                            height: `100%`,
                                            id: `Vdr2KD_T0`,
                                            layoutId: `Vdr2KD_T0`,
                                            style: { width: `100%` },
                                            variant: Q(`AvHcalqs8`),
                                            width: `100%`,
                                            WiQAc6QPE: $(
                                              {
                                                pixelHeight: 1350,
                                                pixelWidth: 1080,
                                                src: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350`,
                                                srcSet: `/esper/images/7yqzd58x3tmsvmblicznfphxg.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/7yqzd58x3tmsvmblicznfphxg.png?width=1080&height=1350 1080w`,
                                              },
                                              ``,
                                            ),
                                            x4R5Mb5Jq: `Sci - Fi Artist`,
                                          }),
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ee() &&
                          _(Ji, {
                            __framer__animate: { transition: ga },
                            __framer__animateOnce: !0,
                            __framer__enter: ha,
                            __framer__exit: _a,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1nbg65x hidden-72rtr7 hidden-9w4hrp hidden-193nlgj`,
                            "data-framer-name": `Team`,
                            id: te,
                            ref: ne,
                            children: [
                              f(`div`, {
                                className: `framer-un73em`,
                                "data-framer-name": `H2+Body`,
                                children: f(R, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: f(`h2`, {
                                      style: {
                                        "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                        "--framer-font-size": `35px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `140%`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: `tech awards`,
                                    }),
                                  }),
                                  className: `framer-1dmm7nv`,
                                  "data-framer-name": `Meet Your Dream Team`,
                                  fonts: [`Inter-SemiBold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              _(`div`, {
                                className: `framer-cp2zc9`,
                                "data-framer-name": `Team Collection`,
                                children: [
                                  f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      nmuyZviuC: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          905 +
                                          9 +
                                          6230.4 +
                                          9 +
                                          68 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: f(U, {
                                      height: 578,
                                      width: `363px`,
                                      children: f(B, {
                                        className: `framer-1hi9gnm-container`,
                                        isModuleExternal: !0,
                                        nodeId: `AcWIYlUmn`,
                                        scopeId: `augiA20Il`,
                                        children: f(Z, {
                                          fb_jC0b_S: `https://forms.gle/dXnkPzsVAvJXCqBZ9`,
                                          g00LJCSg8: `Of The Year`,
                                          height: `100%`,
                                          id: `AcWIYlUmn`,
                                          layoutId: `AcWIYlUmn`,
                                          style: { width: `100%` },
                                          variant: Q(`AvHcalqs8`),
                                          width: `100%`,
                                          WiQAc6QPE: $(
                                            {
                                              pixelHeight: 1350,
                                              pixelWidth: 1080,
                                              src: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350`,
                                              srcSet: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350 1080w`,
                                            },
                                            ``,
                                          ),
                                          x4R5Mb5Jq: `Edu Coder`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  f(Y, {
                                    breakpoint: b,
                                    overrides: {
                                      nmuyZviuC: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          905 +
                                          9 +
                                          6230.4 +
                                          9 +
                                          68 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: f(U, {
                                      height: 578,
                                      width: `363px`,
                                      children: f(B, {
                                        className: `framer-czai9s-container`,
                                        isModuleExternal: !0,
                                        nodeId: `WGbRs3End`,
                                        scopeId: `augiA20Il`,
                                        children: f(Z, {
                                          fb_jC0b_S: `https://forms.gle/84j6hWFD2v1ngk966`,
                                          g00LJCSg8: `Of The Year`,
                                          height: `100%`,
                                          id: `WGbRs3End`,
                                          layoutId: `WGbRs3End`,
                                          style: { width: `100%` },
                                          variant: Q(`AvHcalqs8`),
                                          width: `100%`,
                                          WiQAc6QPE: $(
                                            {
                                              pixelHeight: 1350,
                                              pixelWidth: 1080,
                                              src: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350`,
                                              srcSet: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350 1080w`,
                                            },
                                            ``,
                                          ),
                                          x4R5Mb5Jq: `AI manipulator`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        E() &&
                          _(`div`, {
                            className: `framer-2bek0m hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                            "data-framer-name": `H2+Body`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7UGxheWZhaXIgRGlzcGxheS02MDBpdGFsaWM=`,
                                      "--framer-font-family": `"Playfair Display", "Playfair Display Placeholder", serif`,
                                      "--framer-font-size": `39px`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `50%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `our Judges`,
                                  }),
                                }),
                                className: `framer-12hyy7m`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`GF;Playfair Display-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: _(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `140%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-3ecf9004-c795-4969-8dc2-46e9a5f93615, rgb(214, 214, 214))`,
                                    },
                                    children: [
                                      f(`strong`, {
                                        children: `Our esteemed, `,
                                      }),
                                      f(`span`, {
                                        style: {
                                          "--font-selector": `RlI7SW50ZXJEaXNwbGF5`,
                                          "--framer-font-weight": `400`,
                                        },
                                        children: f(`strong`, {
                                          children: `nationally and internationally `,
                                        }),
                                      }),
                                      f(`strong`, {
                                        children: `recognized judges for ESPER Awards ’26—upholding fairness, integrity, and thoughtful evaluation.`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-1ee6nr4`,
                                "data-framer-name": `Our dedicated team blends diverse expertise, innovative thinking, and a passion for excellence to turn your vision into reality.`,
                                fonts: [
                                  `FR;InterDisplay-Light`,
                                  `FR;InterDisplay`,
                                  `FR;InterDisplay-Bold`,
                                ],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                      ],
                    }),
                    E() &&
                      _(T.div, {
                        className: `framer-o0xigs hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                        "data-framer-name": `Plasma`,
                        layout: w,
                        children: [
                          f(Y, {
                            breakpoint: b,
                            overrides: {
                              AV4qGqEC9: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: M((u?.y || 0) + 0 + -1),
                                  pixelHeight: 1080,
                                  pixelWidth: 1920,
                                  positionX: `right`,
                                  positionY: `center`,
                                  sizes: `550px`,
                                  src: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080`,
                                  srcSet: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=512&width=1920&height=1080 512w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=1024&width=1920&height=1080 1024w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080 1920w`,
                                },
                              },
                            },
                            children: f(q, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1080,
                                pixelWidth: 1920,
                                positionX: `right`,
                                positionY: `center`,
                                src: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080`,
                                srcSet: `/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=512&width=1920&height=1080 512w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?scale-down-to=1024&width=1920&height=1080 1024w,/esper/images/uinxiuqfy89scr4h14ee0fbc.png?width=1920&height=1080 1920w`,
                              },
                              className: `framer-1eq4zmj`,
                              children: f(U, {
                                children: f(B, {
                                  className: `framer-1pry9as-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `LF9nICiG0`,
                                  scopeId: `augiA20Il`,
                                  children: f(Ze, {
                                    animation: { animate: !0, speed: 10 },
                                    height: `100%`,
                                    id: `LF9nICiG0`,
                                    intensity: 31,
                                    layoutId: `LF9nICiG0`,
                                    position: 0,
                                    radius: `0px`,
                                    rays: 36,
                                    raysColor: {
                                      color: `rgb(255, 191, 102)`,
                                      color1: `rgb(255, 255, 255)`,
                                      color2: `rgb(255, 203, 71)`,
                                      mode: `single`,
                                    },
                                    reach: 30,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          f(`div`, {
                            className: `framer-1a5klvr`,
                            "data-framer-name": `Overlay`,
                          }),
                        ],
                      }),
                    f(Y, {
                      breakpoint: b,
                      overrides: {
                        AV4qGqEC9: { y: (u?.y || 0) + 0 + 10135.9 },
                        binYOdBcM: { y: (u?.y || 0) + 0 + 5968.4 },
                        nmuyZviuC: { y: (u?.y || 0) + 0 + 7857.4 },
                      },
                      children: f(U, {
                        height: 94,
                        width: `min(${u?.width || `100vw`}, 1160px)`,
                        y: (u?.y || 0) + 0 + 5903.4,
                        children: f(Xi, {
                          __framer__animate: { transition: ga },
                          __framer__animateOnce: !0,
                          __framer__enter: ha,
                          __framer__exit: _a,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-hozd2f-container`,
                          id: ie,
                          layout: w,
                          nodeId: `Tbdeu193a`,
                          ref: V,
                          rendersWithMotion: !0,
                          scopeId: `augiA20Il`,
                          children: f(Y, {
                            breakpoint: b,
                            overrides: {
                              AV4qGqEC9: { variant: Q(`KGNdK9pqE`) },
                              nmuyZviuC: { variant: Q(`mbklRgcdK`) },
                            },
                            children: f(Oe, {
                              height: `100%`,
                              id: `Tbdeu193a`,
                              layoutId: `Tbdeu193a`,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: Q(`JBdMApcv5`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    E() &&
                      _(Ji, {
                        __framer__animate: { transition: ga },
                        __framer__animateOnce: !0,
                        __framer__enter: ha,
                        __framer__exit: _a,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-1sv1kgx hidden-72rtr7 hidden-ebiaht hidden-193nlgj`,
                        "data-framer-name": `Team`,
                        id: H,
                        layout: w,
                        ref: W,
                        children: [
                          _(`div`, {
                            className: `framer-1og5q3n`,
                            "data-framer-name": `H2+Body`,
                            children: [
                              f(R, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h2`, {
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-size": `39px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `50%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-c05d7eb5-3b85-4d38-a5b8-65cb0e0a1652, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `tech Awards`,
                                  }),
                                }),
                                className: `framer-1b03h31`,
                                "data-framer-name": `Meet Your Dream Team`,
                                fonts: [`Inter-SemiBold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(`div`, {
                                className: `framer-11s4jop`,
                                "data-framer-name": `Plasma`,
                              }),
                            ],
                          }),
                          _(`div`, {
                            className: `framer-ti0ezp`,
                            "data-framer-name": `Team Collection`,
                            children: [
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      8813.9 +
                                      0 +
                                      102 +
                                      0 +
                                      0,
                                  },
                                },
                                children: f(U, {
                                  height: 578,
                                  children: f(B, {
                                    className: `framer-mwq59m-container`,
                                    isModuleExternal: !0,
                                    nodeId: `exj0Ftit5`,
                                    scopeId: `augiA20Il`,
                                    children: f(Z, {
                                      fb_jC0b_S: `https://forms.gle/dXnkPzsVAvJXCqBZ9`,
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `exj0Ftit5`,
                                      layoutId: `exj0Ftit5`,
                                      style: { width: `100%` },
                                      variant: Q(`qoawDqr0s`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350`,
                                          srcSet: `/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Edu Coder`,
                                    }),
                                  }),
                                }),
                              }),
                              f(Y, {
                                breakpoint: b,
                                overrides: {
                                  AV4qGqEC9: {
                                    width: `max(min(${u?.width || `100vw`}, 1160px) - 32px, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      8813.9 +
                                      0 +
                                      102 +
                                      0 +
                                      602,
                                  },
                                },
                                children: f(U, {
                                  height: 578,
                                  children: f(B, {
                                    className: `framer-1qqgxo9-container`,
                                    isModuleExternal: !0,
                                    nodeId: `Taq8NcHU4`,
                                    scopeId: `augiA20Il`,
                                    children: f(Z, {
                                      fb_jC0b_S: `https://forms.gle/84j6hWFD2v1ngk966`,
                                      g00LJCSg8: `Of The Year`,
                                      height: `100%`,
                                      id: `Taq8NcHU4`,
                                      layoutId: `Taq8NcHU4`,
                                      style: { width: `100%` },
                                      variant: Q(`qoawDqr0s`),
                                      width: `100%`,
                                      WiQAc6QPE: $(
                                        {
                                          pixelHeight: 1350,
                                          pixelWidth: 1080,
                                          src: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350`,
                                          srcSet: `/esper/images/dh6yersaxujk2enuqyj6hluea.png?scale-down-to=1024&width=1080&height=1350 819w,/esper/images/dh6yersaxujk2enuqyj6hluea.png?width=1080&height=1350 1080w`,
                                        },
                                        ``,
                                      ),
                                      x4R5Mb5Jq: `Ai Manipulator `,
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
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-7YhlT.framer-lux5qc, .framer-7YhlT .framer-lux5qc { display: block; }`,
        `.framer-7YhlT.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-d530a452-d1c0-4efd-8ee8-39f881c479e9, #040404); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-7YhlT .framer-nqkdlu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-fanaa3-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,
        `.framer-7YhlT .framer-1np4c7y { flex: none; height: 349px; overflow: hidden; position: relative; width: 389px; }`,
        `.framer-7YhlT .framer-1bv71pv { flex: none; height: 318px; overflow: hidden; position: relative; width: 810px; }`,
        `.framer-7YhlT .framer-1xskp1a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: 295px; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-1coyxf9 { flex: none; gap: 6px; height: 203px; position: relative; width: 565px; }`,
        `.framer-7YhlT .framer-2dssc1, .framer-7YhlT .framer-wmsjic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-1iownmg, .framer-7YhlT .framer-1vdtq3r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-fwpjb1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 573px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-1fnvbas { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 220px; justify-content: flex-start; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-1jj0gun { flex: none; gap: 6px; height: 92px; position: relative; width: 274px; }`,
        `.framer-7YhlT .framer-a37a8b { --framer-paragraph-spacing: 0px; flex: none; height: 106px; position: relative; white-space: pre-wrap; width: 269px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-spzwq1-container { flex: none; height: auto; position: relative; width: 385px; }`,
        `.framer-7YhlT .framer-w3gto7 { flex: none; height: 850px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-7YhlT .framer-1wdis9r { flex: none; height: 78%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(38.82352941176473% - 77.88235294117646% / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-7YhlT .framer-17jcdvw { background: linear-gradient(180deg, rgba(4, 4, 4, 0) 0%, rgb(4, 4, 4) 100%); bottom: 180px; flex: none; height: 35%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-7YhlT .framer-1opuij9-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: -1px; }`,
        `.framer-7YhlT .framer-xwq82o-container { flex: none; height: 1679px; left: calc(50.00000000000002% - 100% / 2); opacity: 0; position: absolute; top: -261px; width: 100%; z-index: 0; }`,
        `.framer-7YhlT .framer-lhng8p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; max-width: 1160px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-3ubug2-container { flex: none; height: auto; position: relative; width: 905px; }`,
        `.framer-7YhlT .framer-1gzigij { align-content: center; align-items: center; background: radial-gradient(34% 25% at 49.3% 0%, #ffebe3 0%, rgb(222, 109, 64) 32.45178772522522%, rgb(235, 119, 73) 52.05518018018018%, rgba(237, 237, 237, 0.15) 97.82516891891892%); border-bottom-left-radius: 26px; border-bottom-right-radius: 26px; border-top-left-radius: 26px; border-top-right-radius: 26px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 12px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-f8sdpn { background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; bottom: 0px; flex: none; height: 121px; left: 0px; overflow: hidden; position: absolute; right: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }`,
        `.framer-7YhlT .framer-1liewsu-container { aspect-ratio: 1.765834932821497 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 643px); position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-uiizrd-container, .framer-7YhlT .framer-fe31eb-container, .framer-7YhlT .framer-a7x7db-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-7YhlT .framer-13kfmgi-container { flex: none; height: auto; left: 32px; position: absolute; top: 674px; width: auto; z-index: 1; }`,
        `.framer-7YhlT .framer-1ylbk1b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-jctzf6, .framer-7YhlT .framer-uj38uk, .framer-7YhlT .framer-1bbxm6c, .framer-7YhlT .framer-1djpwv1, .framer-7YhlT .framer-m71xm8, .framer-7YhlT .framer-17eqxwi, .framer-7YhlT .framer-8e3bt0, .framer-7YhlT .framer-1qbciz1, .framer-7YhlT .framer-ndz598, .framer-7YhlT .framer-12hyy7m, .framer-7YhlT .framer-1ee6nr4 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-1dbp5on-container { bottom: -54px; flex: none; height: auto; position: absolute; right: 0px; width: auto; z-index: 1; }`,
        `.framer-7YhlT .framer-94gx0i, .framer-7YhlT .framer-ucidsy, .framer-7YhlT .framer-w85e7j { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 580px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-ig4vtf-container { flex: none; height: 915px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-s59ln5-container { bottom: -54px; flex: none; height: 54px; position: absolute; right: 0px; width: auto; z-index: 1; }`,
        `.framer-7YhlT .framer-1kihxcd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-1ovidn8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1160px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-7YhlT .framer-11tazn-container { flex: none; height: 521px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-91aqzp-container { flex: none; height: 517px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-j29ilj-container { flex: none; height: 509px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-1nvqr6w { display: grid; flex: none; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: start; max-width: 1160px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-7YhlT .framer-1t3wuux-container, .framer-7YhlT .framer-zrzgsf-container, .framer-7YhlT .framer-vxixd6-container, .framer-7YhlT .framer-168vegr-container, .framer-7YhlT .framer-tn6t8r-container, .framer-7YhlT .framer-1e7qg6w-container, .framer-7YhlT .framer-yf8hda-container, .framer-7YhlT .framer-p7fjgv-container, .framer-7YhlT .framer-aw3jnk-container, .framer-7YhlT .framer-x8vgbu-container, .framer-7YhlT .framer-1p6myi8-container, .framer-7YhlT .framer-oxq9dj-container, .framer-7YhlT .framer-1hi9gnm-container, .framer-7YhlT .framer-czai9s-container, .framer-7YhlT .framer-1qqgxo9-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-wt6gb8 { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-46ipdk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-7YhlT .framer-1srbmyl { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 350px; opacity: 0.7; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-j939b3 { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: 635px; position: relative; width: 508px; }`,
        `.framer-7YhlT .framer-1dqpp9l-container { flex: none; height: 475px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-15qykm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-nct3u9, .framer-7YhlT .framer-11s4jop { bottom: -53px; flex: none; left: calc(50.140056022408984% - 108.68347338935574% / 2); overflow: hidden; position: absolute; top: -31px; width: 109%; z-index: 0; }`,
        `.framer-7YhlT .framer-g159kn, .framer-7YhlT .framer-153iuej { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-119pog1-container, .framer-7YhlT .framer-mwq59m-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-nrbcmf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-7YhlT .framer-p4q4wv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; max-width: 1160px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-1kbkbje, .framer-7YhlT .framer-1og5q3n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 29px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-1n14928, .framer-7YhlT .framer-1dmm7nv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 570px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-124em4z { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 512px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-1nbg65x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: flex-start; max-width: 1160px; overflow: visible; padding: 9px 0px 9px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-un73em { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 29px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-7YhlT .framer-cp2zc9 { display: grid; flex: none; gap: 76px 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 750px; }`,
        `.framer-7YhlT .framer-2bek0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-7YhlT .framer-o0xigs { background-color: #000000; flex: none; height: 850px; left: calc(50.00000000000002% - 487px / 2); overflow: hidden; position: absolute; top: 0px; width: 487px; z-index: 0; }`,
        `.framer-7YhlT .framer-1eq4zmj { flex: none; height: 520px; left: -58px; overflow: hidden; position: absolute; right: -5px; top: -1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-7YhlT .framer-1pry9as-container { flex: none; height: 491px; left: 87px; position: absolute; top: calc(47.30769230769233% - 491px / 2); width: 431px; }`,
        `.framer-7YhlT .framer-1a5klvr { background: linear-gradient(180deg, rgba(4, 4, 4, 0) 0%, rgb(4, 4, 4) 100%); flex: none; height: 17%; left: calc(49.87146529562984% - 100.25706940874035% / 2); overflow: hidden; position: absolute; top: calc(91.73076923076925% - 17.115384615384617% / 2); width: 100%; z-index: 0; }`,
        `.framer-7YhlT .framer-hozd2f-container { flex: none; height: auto; max-width: 1160px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-7YhlT .framer-1sv1kgx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; max-width: 1160px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7YhlT .framer-1b03h31 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7YhlT .framer-ti0ezp { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...Be,
        ...zi,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-7YhlT.framer-72rtr7 { gap: 40px; width: 810px; } .framer-7YhlT .framer-nqkdlu { gap: 40px; } .framer-7YhlT .framer-1coyxf9, .framer-7YhlT .framer-jctzf6, .framer-7YhlT .framer-1djpwv1, .framer-7YhlT .framer-1t3wuux-container, .framer-7YhlT .framer-17eqxwi, .framer-7YhlT .framer-1n14928, .framer-7YhlT .framer-aw3jnk-container { order: 0; } .framer-7YhlT .framer-2dssc1, .framer-7YhlT .framer-94gx0i, .framer-7YhlT .framer-zrzgsf-container, .framer-7YhlT .framer-8e3bt0, .framer-7YhlT .framer-x8vgbu-container { order: 1; } .framer-7YhlT .framer-w3gto7 { height: 686px; } .framer-7YhlT .framer-1wdis9r { height: 81%; left: calc(50.00000000000002% - 100.12345679012347% / 2); top: calc(40.08746355685133% - 80.61224489795919% / 2); width: 100%; } .framer-7YhlT .framer-17jcdvw { bottom: 134px; height: 20%; } .framer-7YhlT .framer-xwq82o-container { top: 0px; } .framer-7YhlT .framer-lhng8p { gap: 83px; padding: 9px 0px 9px 0px; } .framer-7YhlT .framer-1gzigij { padding: 8px; } .framer-7YhlT .framer-1liewsu-container { height: var(--framer-aspect-ratio-supported, 450px); } .framer-7YhlT .framer-13kfmgi-container { left: 34px; top: 502px; } .framer-7YhlT .framer-1dbp5on-container { bottom: unset; height: 57px; left: 34px; order: 3; right: unset; top: 502px; width: 254px; } .framer-7YhlT .framer-ig4vtf-container, .framer-7YhlT .framer-ucidsy, .framer-7YhlT .framer-vxixd6-container { order: 2; } .framer-7YhlT .framer-a7x7db-container { order: 7; } .framer-7YhlT .framer-1kihxcd { padding: 0px; } .framer-7YhlT .framer-1nvqr6w { width: 95%; } .framer-7YhlT .framer-j939b3 { width: 432px; } .framer-7YhlT .framer-w85e7j { order: 5; } .framer-7YhlT .framer-g159kn { gap: 8px 24px; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: 1296px; width: 750px; } .framer-7YhlT .framer-p4q4wv { gap: 19px; height: 689px; padding: 9px 0px 9px 0px; } .framer-7YhlT .framer-1kbkbje { width: min-content; } .framer-7YhlT .framer-153iuej { gap: 76px 24px; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 750px; }}`,
        `@media (max-width: 809.98px) { .framer-7YhlT.framer-72rtr7 { gap: 40px; width: 394px; } .framer-7YhlT .framer-nqkdlu { gap: 0px; justify-content: flex-start; order: 0; padding: 140px 16px 0px 16px; } .framer-7YhlT .framer-fanaa3-container { left: 50%; order: 0; position: absolute; top: 0px; transform: translateX(-50%); } .framer-7YhlT .framer-1np4c7y, .framer-7YhlT .framer-wmsjic, .framer-7YhlT .framer-spzwq1-container, .framer-7YhlT .framer-uj38uk, .framer-7YhlT .framer-1ee6nr4 { order: 1; } .framer-7YhlT .framer-1fnvbas, .framer-7YhlT .framer-uiizrd-container, .framer-7YhlT .framer-ig4vtf-container, .framer-7YhlT .framer-1qbciz1 { order: 2; } .framer-7YhlT .framer-1jj0gun, .framer-7YhlT .framer-1bbxm6c, .framer-7YhlT .framer-nct3u9, .framer-7YhlT .framer-12hyy7m { order: 0; } .framer-7YhlT .framer-lhng8p { gap: 35px; order: 5; padding: 0px 16px 0px 16px; } .framer-7YhlT .framer-1gzigij { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; order: 1; padding: 6px; } .framer-7YhlT .framer-f8sdpn { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; order: 0; } .framer-7YhlT .framer-1liewsu-container { aspect-ratio: 1.5727272727272728 / 1; height: var(--framer-aspect-ratio-supported, 223px); order: 1; } .framer-7YhlT .framer-1ylbk1b { gap: 22px; order: 3; } .framer-7YhlT .framer-fe31eb-container { order: 6; } .framer-7YhlT .framer-1ovidn8 { order: 5; } .framer-7YhlT .framer-1dqpp9l-container, .framer-7YhlT .framer-hozd2f-container { order: 8; } .framer-7YhlT .framer-15qykm { order: 10; padding: 31px 0px 31px 0px; } .framer-7YhlT .framer-ndz598 { order: 3; } .framer-7YhlT .framer-w85e7j { order: 5; width: 100%; } .framer-7YhlT .framer-g159kn { grid-template-columns: repeat(1, minmax(50px, 1fr)); order: 11; } .framer-7YhlT .framer-168vegr-container { height: auto; } .framer-7YhlT .framer-2bek0m { order: 4; } .framer-7YhlT .framer-o0xigs { height: 520px; order: 6; } .framer-7YhlT .framer-1sv1kgx { order: 7; }}`,
        `@media (min-width: 1440px) { .framer-7YhlT.framer-72rtr7 { width: 1440px; } .framer-7YhlT .framer-1bv71pv { height: 383px; } .framer-7YhlT .framer-w3gto7 { left: calc(50.00000000000002% - min(100%, 100%) / 2); max-width: 100%; } .framer-7YhlT .framer-1wdis9r { height: 100%; top: calc(49.88235294117649% - 100.11764705882354% / 2); } .framer-7YhlT .framer-17jcdvw { bottom: 0px; height: 56%; } .framer-7YhlT .framer-xwq82o-container { top: 0px; } .framer-7YhlT .framer-13kfmgi-container { top: 692px; } .framer-7YhlT .framer-1dbp5on-container { bottom: unset; height: 54px; top: 692px; } .framer-7YhlT .framer-g159kn, .framer-7YhlT .framer-153iuej { width: 1400px; }}`,
      ],
      `framer-7YhlT`,
    )),
    (Aa = ka),
    (ka.displayName = `Home`),
    (ka.defaultProps = { height: 6037, width: 1200 }),
    z(
      ka,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/5vvr9vy74if2i6bqbjvbw7sy1pq.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/eor0mi4hntlgwnn9if640ezzxco.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/y9k9qrlzaqio88klkmbd8vomqc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/oyrd2tbibpvojxiihnlooxny9m.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/jeywfuapfzhqheg8u5gtpdz7wq.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/grgckwrn6d3uz8ewclhzxwefc4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/b6y37fthzealdunqhicbt6futy.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Playfair Display`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Playfair Display`,
              url: `https://fonts.gstatic.com/s/playfairdisplay/v40/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_naUbtPK-F2rA0s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/cnmzvkzxlpb68ritfngufle65m4.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/2uibialfchvpwbhqrmzutft7giu.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/zwfz6xbve5pmcwrjrgbdhnmkoki.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/u9laddmbrhzx3sb8g8glty5fete.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/tvew2lzxj1t7qfxp1gdtidj2o0g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/df7bjcrmstypqsb945lalmfccvq.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/bhynjqztyl2lqvmmirrs6y16es.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/vebzumjgykkysfcy73iwwtzlnag.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/i11lrmubdqzweplj62kkvsklu5y.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/ujfzpdy3qgudktqm4q9cxhkfia8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/8exwvhjy2dhj4n5prylvmrekmq.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/uteedek21ho5jdxeuldzdscuqpg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/ig8b8nzy11hziweiynkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/qctqfojqj9aibrsip0ahcqpfxn8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/esper/font/epun3mcjzajihnycdvkbfizkyy0.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/esper/font/v3j1l0o5vpfke26sw4hcpxcfho.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/esper/font/f3kdpd2n0ctowv5huazjjgm.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `/esper/font/0idmxkizu9gozoclqiqsv5rvetu.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/esper/font/r0mv3negma0akcqsnfotg32las.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/iwwtdc49enf2tchbqlnarxw6ug.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/esper/font/ii21jnsjkulbkshhxklapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/esper/font/ydti2ui8xceg1w2je9xpn3noo.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
          ],
        },
        ...Hi,
        ...Wi,
        ...Gi,
        ...Ki,
        ...qi,
        ...Yi,
        ...Zi,
        ...Qi,
        ...$i,
        ...ea,
        ...ta,
        ...ra,
        ...X(Ue),
        ...X(Ri),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (ka.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          I(Ae, {}, t),
          I(Ur, {}, t),
          I(Ii, {}, t),
          I(Dt, {}, t),
          I(jn, {}, t),
          I(an, {}, t),
          I(vn, {}, t),
          I(Z, {}, t),
          I(Oe, {}, t),
        ])
      ),
    }),
    (ja = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `6037`,
            framerImmutableVariables: `true`,
            framerRootFontSize: `16`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"gfH_8JeJY":{"pattern":":gfH_8JeJY","name":"team"},"XB3ZpmHpG":{"pattern":":XB3ZpmHpG","name":"awards2"},"dYtMLpeYf":{"pattern":":dYtMLpeYf","name":"team"},"Tbdeu193a":{"pattern":":Tbdeu193a","name":"contact"},"vAu4_v7EX":{"pattern":":vAu4_v7EX","name":"team"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nmuyZviuC":{"layout":["fixed","auto"]},"AV4qGqEC9":{"layout":["fixed","auto"]},"binYOdBcM":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ja as __FramerMetadata__, Aa as default, oa as queryParamNames };
//# sourceMappingURL=o7WVZTeacsXNAKIuhPoAnnCHW_gAOBlPVKKMiOrr9w8.CbP_ynTs.mjs.map
