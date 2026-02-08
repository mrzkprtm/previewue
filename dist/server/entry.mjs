import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Ds1Zt7KM.mjs';
import { manifest } from './manifest_D4ohBgwv.mjs';

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
const _page14 = () => import('./pages/program/_slug_.astro.mjs');
const _page15 = () => import('./pages/program.astro.mjs');
const _page16 = () => import('./pages/program.astro2.mjs');
const _page17 = () => import('./pages/promo.astro.mjs');
const _page18 = () => import('./pages/sitemap.xml.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
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
    ["src/pages/program/[slug].astro", _page14],
    ["src/pages/program/index.astro", _page15],
    ["src/pages/program.astro", _page16],
    ["src/pages/promo.astro", _page17],
    ["src/pages/sitemap.xml.ts", _page18],
    ["src/pages/index.astro", _page19]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/laragon/www/frontendue/dist/client/",
    "server": "file:///C:/laragon/www/frontendue/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
