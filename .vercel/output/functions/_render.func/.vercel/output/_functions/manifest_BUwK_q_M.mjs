import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DsYsS27q.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DWPYSQod.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/laragon/www/frontendue/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":false,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"artikel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/artikel","isIndex":true,"type":"page","pattern":"^\\/artikel\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/artikel/index.astro","pathname":"/artikel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"beasiswa/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/beasiswa","isIndex":true,"type":"page","pattern":"^\\/beasiswa\\/?$","segments":[[{"content":"beasiswa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/beasiswa/index.astro","pathname":"/beasiswa","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"program/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/program","isIndex":true,"type":"page","pattern":"^\\/program\\/?$","segments":[[{"content":"program","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/program/index.astro","pathname":"/program","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"program/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/program","isIndex":false,"type":"page","pattern":"^\\/program\\/?$","segments":[[{"content":"program","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/program.astro","pathname":"/program","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"promo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/promo","isIndex":false,"type":"page","pattern":"^\\/promo\\/?$","segments":[[{"content":"promo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/promo.astro","pathname":"/promo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sitemap.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/artikel/author/[slug]/[page]","isIndex":false,"type":"page","pattern":"^\\/artikel\\/author\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}],[{"content":"author","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["slug","page"],"component":"src/pages/artikel/author/[slug]/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/artikel/author/[slug]","isIndex":false,"type":"page","pattern":"^\\/artikel\\/author\\/([^/]+?)\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}],[{"content":"author","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/artikel/author/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/artikel/category/[slug]/[page]","isIndex":false,"type":"page","pattern":"^\\/artikel\\/category\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["slug","page"],"component":"src/pages/artikel/category/[slug]/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/artikel/category/[slug]","isIndex":false,"type":"page","pattern":"^\\/artikel\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/artikel/category/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/artikel/[slug]","isIndex":false,"type":"page","pattern":"^\\/artikel\\/([^/]+?)\\/?$","segments":[[{"content":"artikel","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/artikel/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/beasiswa/page/[page]","isIndex":false,"type":"page","pattern":"^\\/beasiswa\\/page\\/([^/]+?)\\/?$","segments":[[{"content":"beasiswa","dynamic":false,"spread":false}],[{"content":"page","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/beasiswa/page/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D0R1LHw-.css"}],"routeData":{"route":"/beasiswa/[slug]","isIndex":false,"type":"page","pattern":"^\\/beasiswa\\/([^/]+?)\\/?$","segments":[[{"content":"beasiswa","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/beasiswa/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/laragon/www/frontendue/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/articles.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/author/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/author/[slug]/[page].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/category/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/category/[slug]/[page].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/artikel/page/[page].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/beasiswa/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/beasiswa/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/beasiswa/page/[page].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/program.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/program/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/program/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/frontendue/src/pages/promo.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/artikel/author/[slug]/[page]@_@astro":"pages/artikel/author/_slug_/_page_.astro.mjs","\u0000@astro-page:src/pages/artikel/author/[slug]@_@astro":"pages/artikel/author/_slug_.astro.mjs","\u0000@astro-page:src/pages/artikel/category/[slug]/[page]@_@astro":"pages/artikel/category/_slug_/_page_.astro.mjs","\u0000@astro-page:src/pages/artikel/category/[slug]@_@astro":"pages/artikel/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/artikel/page/[page]@_@astro":"pages/artikel/page/_page_.astro.mjs","\u0000@astro-page:src/pages/artikel/[slug]@_@astro":"pages/artikel/_slug_.astro.mjs","\u0000@astro-page:src/pages/beasiswa/page/[page]@_@astro":"pages/beasiswa/page/_page_.astro.mjs","\u0000@astro-page:src/pages/beasiswa/[slug]@_@astro":"pages/beasiswa/_slug_.astro.mjs","\u0000@astro-page:src/pages/beasiswa/index@_@astro":"pages/beasiswa.astro.mjs","\u0000@astro-page:src/pages/program/[slug]@_@astro":"pages/program/_slug_.astro.mjs","\u0000@astro-page:src/pages/program@_@astro":"pages/program.astro.mjs","\u0000@astro-page:src/pages/promo@_@astro":"pages/promo.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/program/index@_@astro":"pages/program.astro2.mjs","\u0000@astro-page:src/pages/artikel/index@_@astro":"pages/artikel.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/laragon/www/frontendue/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/laragon/www/frontendue/src/lib/api/endpoints.ts":"chunks/endpoints_BcQY9cMI.mjs","\u0000@astrojs-manifest":"manifest_BUwK_q_M.mjs","C:/laragon/www/frontendue/src/components/common/MegaMenuWrapper.jsx":"_astro/MegaMenuWrapper.BKJ_CiJ7.js","@astrojs/react/client.js":"_astro/client.CPmkLvHQ.js","/astro/hoisted.js?q=0":"_astro/hoisted.BCj23viQ.js","/astro/hoisted.js?q=1":"_astro/hoisted.BLozwnGd.js","/astro/hoisted.js?q=2":"_astro/hoisted.ZRWqcK5A.js","/astro/hoisted.js?q=3":"_astro/hoisted.Bu1I0O1Z.js","/astro/hoisted.js?q=4":"_astro/hoisted.BHWLWJpN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D0R1LHw-.css","/_astro/about.Dv4Y1qF5.css","/_astro/articles.4lZ_YNvV.css","/_astro/promo.BNr64Y3v.css","/_astro/index.CuDqLU21.css","/robots.txt","/_astro/client.CPmkLvHQ.js","/_astro/index.CzjdDlXV.js","/_astro/MegaMenuWrapper.BKJ_CiJ7.js","/images/mentor/12505828bf851b9c213d2ec3d522d4fe34ca870b.png","/images/mentor/882da435fb72ca1762594ce50f496e802c95458c.png","/images/mentor/c71ca56cbe2522a1a282382e8abf61230a86320d.png","/images/mentor/e36acd71c9d0a3cf31eb26fc4e64d423d6fb6974.png","/images/partners/1-300x300.webp","/images/partners/2-300x300.webp","/images/partners/3-300x300.webp","/images/partners/4-300x300.webp","/images/partners/5-300x300.webp","/images/partners/6-300x300.webp","/images/partners/7-300x300.webp","/images/partners/8-300x300.webp","/images/partners/9-300x300.webp","/404.html","/about/index.html","/articles/index.html","/artikel/index.html","/beasiswa/index.html","/program/index.html","/program/index.html","/promo/index.html","/sitemap.xml","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"nMDDVs2/o8PRls6BXIVUlWNhgVASarY4MrxBuhQrWEI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
