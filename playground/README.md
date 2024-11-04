
| `scripts` | `environment` | `description` | `build` | `browser` |
|------|------|----|----|----|
| `dev` | `full-dev` |  `Runtime+compiler development build (Browser)`   | `dist/vue.js` | ✅ |
| `dev:cjs` | `runtime-cjs-dev` | `Runtime only (CommonJS). Used by bundlers e.g. Webpack & Browserify`  | `dist/vue.runtime.common.dev.js` | ❌ |
| `dev:esm` | `runtime-esm` | `Runtime only ES modules build (for bundlers)`   | `dist/vue.runtime.esm.js` | ✅ |
| `dev:ssr` | `server-renderer-dev` | `Web server renderer (CommonJS).` | `packages/server-renderer/build.dev.js` | ❌ |
| `dev:compiler` | `compiler` | `Web compiler (CommonJS).`  | `packages/template-compiler/build.js` | ❌ |
| `dev:compiler-browser` | `compiler-browser` | `Web compiler (UMD for in-browser use).` | `packages/template-compiler/browser.js` | ✅ |
