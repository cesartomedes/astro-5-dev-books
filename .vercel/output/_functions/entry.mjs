import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C4zpKvHR.mjs';
import { manifest } from './manifest_Ds0ve2Ql.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BTPQEr3e.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DJpxB7Q3.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9b4286b5-323b-447b-8f66-3567d31c32fd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
