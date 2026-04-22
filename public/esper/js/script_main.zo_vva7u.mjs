import { t as e } from "./rolldown-runtime.cwr5z7jy.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  L as a,
  M as o,
  N as s,
  R as c,
  _ as l,
  a as u,
  h as d,
  i as f,
  j as p,
  m,
  n as h,
  p as g,
  r as _,
  t as v,
  u as y,
  x as b,
} from "./react.dmfexh9x.mjs";
import {
  $ as x,
  G as S,
  J as C,
  K as w,
  Q as T,
  W as E,
  X as D,
  at as O,
  bt as k,
  d as A,
  f as j,
  g as M,
  h as N,
  l as P,
  mt as F,
  q as I,
  s as L,
  tt as R,
  ut as z,
  xt as B,
} from "./framer.bcmn9luh.mjs";
async function V({
  routeId: e,
  pathVariables: n,
  localeId: i,
  collectionItemId: a,
}) {
  let l = W[e].page.preload(),
    u = y(N, {
      children: y(P, {
        children: y(j, {
          children: y(M, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: n,
            routes: W,
            collectionUtils: K,
            framerSiteId: q,
            notFoundPage: C(
              () =>
                import(
                  `./_HFufIOZxQGt3fBruxcR1hoHTLDaq-5i_IMfmJRVhB8.CC5CH0FB.mjs`
                ),
            ),
            isReducedMotion: !0,
            localeId: i,
            locales: G,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://orchid-themes-501884.framer.app`,
            EditorBar: true
              ? void 0
              : (() => {
                  if (Y) {
                    console.log(
                      `[Framer On-Page Editing] Unavailable because navigator is bot`,
                    );
                    return;
                  }
                  return C(async () => {
                    c.__framer_editorBarDependencies = {
                      __version: 3,
                      framer: {
                        useCurrentRoute: O,
                        useLocaleInfo: z,
                        useRouter: F,
                      },
                      react: {
                        createElement: y,
                        Fragment: o,
                        memo: d,
                        useCallback: t,
                        useEffect: p,
                        useRef: r,
                        useState: s,
                        useLayoutEffect: b,
                      },
                      "react-dom": { createPortal: f },
                    };
                    let { createEditorBar: e } = await import(`../js/init.mjs`);
                    return { default: e() };
                  });
                })(),
            adaptLayoutToTextDirection: !1,
            loadSnippetsModule: new A(
              () =>
                import(
                  `./VZZLcGdHeDtcG1FefoLyofiLGGFOxiQ4ZVODWlAcVS4.BiQiQObj.mjs`
                ),
            ),
            initialCollectionItemId: a,
          }),
          value: {
            autobahnNavigation: !0,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: { routes: {} },
    });
  return (await l, u);
}
function H() {
  J && c.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    H(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = T(W, r)));
    else {
      T(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = E(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let u = V({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    c !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(a);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          l = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: q ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await B({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          ));
      })();
    let d = await u;
    e
      ? (k(`framer-rewrite-breakpoints`, () => {
          (x(o), c.__framer_onRewriteBreakpoints?.(o));
        }),
        (Y ? (e) => e() : l)(() => {
          (D(), R(), v(t, d, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y;
e(() => {
  if (
    (i(),
    w(),
    n(),
    u(),
    h(),
    (W = {
      augiA20Il: {
        elements: {
          dYtMLpeYf: `team-1`,
          gfH_8JeJY: `team`,
          Tbdeu193a: `contact`,
          vAu4_v7EX: `team-2`,
          XB3ZpmHpG: `awards2`,
        },
        page: C(
          () =>
            import(
              `./o7wvzteacsxnakiuhpoannchw_gaoblpvkkmiorr9w8.cbp_ynts.mjs`
            ),
        ),
        path: `/`,
      },
      LAbeA1ecL: {
        elements: {},
        page: C(
          () =>
            import(
              `./_HFufIOZxQGt3fBruxcR1hoHTLDaq-5i_IMfmJRVhB8.CC5CH0FB.mjs`
            ),
        ),
        path: `/404`,
      },
      xNOop3GL3: {
        collectionId: `QOpzFzShJ`,
        elements: { ZzTYLaonu: `projects` },
        page: C(
          () =>
            import(
              `./OFdUACNNzODYWBppap1LZGg-5v6gZqKk0oI3-eezYCo.rwrygg9_.mjs`
            ),
        ),
        path: `/:Axe1yfn5h`,
      },
    }),
    (G = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (K = {
      QOpzFzShJ: async () =>
        (
          await import(
            `./MEV8HZoVFSC_gG9p9E3oa2OQcF1aBTkgRs-uCqwsH7o.D4ySDOXp.mjs`
          )
        )?.utils,
    }),
    (q = `62ebd15de9c5c9fea6e37ac35b6f2d1751a28d4e99af2be8c6fef4490e76aec1`),
    (J = typeof document < `u`),
    (Y =
      J &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        a.userAgent,
      )),
    J)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      y(L, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (c.__framer_events = c.__framer_events || []),
      S(),
      I());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
  (function () {
    J &&
      l(() => {
        v(
          document.getElementById(`__framer-badge-container`),
          y(m, {}, y(g(() => import(`./px9hioivm.cc3zksbo.mjs`)))),
        );
      });
  })();
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.Zo_vvA7U.mjs.map
