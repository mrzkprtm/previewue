import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fEoypTFy.mjs';
import { manifest } from './manifest_C2pxTBVB.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/artikel/author/_slug_/_page_.astro.mjs');
const _page5 = () => import('./pages/artikel/author/_slug_.astro.mjs');
const _page6 = () => import('./pages/artikel/category/_slug_/_page_.astro.mjs');
const _page7 = () => import('./pages/artikel/category/_slug_.astro.mjs');
const _page8 = () => import('./pages/artikel/page/_page_.astro.mjs');
const _page9 = () => import('./pages/artikel/_slug_.astro.mjs');
const _page10 = () => import('./pages/artikel.astro.mjs');
const _page11 = () => import('./pages/beasiswa/page/_page_.astro.mjs');
const _page12 = () => import('./pages/beasiswa/_slug_.astro.mjs');
const _page13 = () => import('./pages/beasiswa.astro.mjs');
const _page14 = () => import('./pages/kontak.astro.mjs');
const _page15 = () => import('./pages/mitra.astro.mjs');
const _page16 = () => import('./pages/partnership.astro.mjs');
const _page17 = () => import('./pages/program/_slug_.astro.mjs');
const _page18 = () => import('./pages/program.astro2.mjs');
const _page19 = () => import('./pages/program.astro.mjs');
const _page20 = () => import('./pages/promo.astro.mjs');
const _page21 = () => import('./pages/sitemap.xml.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles.astro", _page3],
    ["src/pages/artikel/author/[slug]/[page].astro", _page4],
    ["src/pages/artikel/author/[slug].astro", _page5],
    ["src/pages/artikel/category/[slug]/[page].astro", _page6],
    ["src/pages/artikel/category/[slug].astro", _page7],
    ["src/pages/artikel/page/[page].astro", _page8],
    ["src/pages/artikel/[slug].astro", _page9],
    ["src/pages/artikel/index.astro", _page10],
    ["src/pages/beasiswa/page/[page].astro", _page11],
    ["src/pages/beasiswa/[slug].astro", _page12],
    ["src/pages/beasiswa/index.astro", _page13],
    ["src/pages/kontak.astro", _page14],
    ["src/pages/mitra.astro", _page15],
    ["src/pages/partnership.astro", _page16],
    ["src/pages/program/[slug].astro", _page17],
    ["src/pages/program/index.astro", _page18],
    ["src/pages/program.astro", _page19],
    ["src/pages/promo.astro", _page20],
    ["src/pages/sitemap.xml.ts", _page21],
    ["src/pages/index.astro", _page22]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e8f8f8f7-8c75-48a8-b487-65896b49324d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
