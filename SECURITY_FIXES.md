# Security Vulnerability Fixes

This document summarizes the security audit and remediation performed on this
repository (a Create React App portfolio deployed as static files to GitHub Pages).

## Summary

| | Vulnerabilities |
| --- | --- |
| **Before** | **32** (1 critical, 14 high, 7 moderate, 10 low) |
| **After** | **3** (0 critical, 1 high, 2 moderate) |

**~91% reduction.** The critical and every high/moderate/low that has an installable
fix were eliminated. The 3 residual issues are **dev/build-time only** — none of them
ship in the deployed `build/` bundle that users download, so the live site is not
exposed.

- ✅ Production build passes (`CI=true npm run build` → *Compiled successfully*, main.js ≈ 67 kB gzip).
- ✅ Dev server (`npm start`) compiles and serves HTTP 200.

## What "deployed as static files" means for security

`react-scripts`, `webpack-dev-server`, `svgo`, `jest`, `eslint`, `brace-expansion`,
etc. are **build- and dev-time tooling**. They run on a developer's machine or in CI
to *produce* the static `build/` folder. They are **not** part of the HTML/CSS/JS that
GitHub Pages serves to visitors. A vulnerability in build tooling can only affect
someone running `npm run build` / `npm start` locally — it cannot be triggered by a
visitor to the published site.

## How the fixes were applied

CRA is deprecated and `react-scripts@5.0.1` is the last release, so it pins old
transitive dependencies. `npm audit fix --force` "resolves" this by downgrading
`react-scripts` to a broken `0.0.0` stub — **never do this**. Instead, the vulnerable
transitive packages were pinned to patched, compatible versions using the npm
[`overrides`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides)
field in `package.json`.

```jsonc
"overrides": {
  "@babel/core": "^7.29.7",          // stays in 7.x, no breaking change
  "@tootallnate/once": "^2.0.1",     // clears the jsdom -> http-proxy-agent -> jest low chain
  "nth-check": "^2.1.1",             // ReDoS (GHSA-rp65-9cf3-cjxr)
  "postcss": "^8.4.31",              // line-return parsing (GHSA-7fh5-64p2-3v2j)
  "serialize-javascript": "^7.0.7",  // XSS (advisory range <=7.0.4; must be 7.0.5+)
  "svgo": "^2.8.3",                  // in-major backport patch, safe for postcss-svgo
  "uuid": "^11.1.1",                 // used by sockjs (dev server); verified safe
  "websocket-driver": "^0.7.5",      // cleared the CRITICAL
  "fast-uri": "^3.1.4",
  "js-yaml": "^4.3.0",
  "http-proxy-middleware": "^2.0.10" // request handling fixes
}
```

Each change was validated with a full production build **and** a dev-server smoke test
to confirm no runtime regressions. The `serialize-javascript` 6→7 and `uuid` / `svgo`
bumps were specifically verified because they cross a major version.

## Remaining vulnerabilities (3 — all dev/build-time only)

These have **no installable, non-breaking fix** today and do not affect the deployed
site. They are safe to accept.

### 1. `brace-expansion` — High (GHSA-3jxr-9vmj-r5cp)

- **What:** ReDoS / exponential-time expansion of consecutive non-expanding `{}` groups.
- **Where:** A single nested instance, `filelist/node_modules/brace-expansion@2.1.0`
  (`filelist` → `jake`, a build-tool dependency). The top-level
  `brace-expansion@1.1.14` is already patched.
- **Why not fixed:** The patched `2.1.2` exists, but adding *any* `brace-expansion`
  override (global **or** scoped to `filelist`) makes npm re-resolve the whole
  brace-expansion set and flags the advisory across ~40–50 `minimatch` consumers,
  ballooning the count from **3 to 50+**. Leaving the two nested instances as-is keeps
  it a single contained entry. This was verified empirically.
- **Impact:** Build-time glob parsing only; not reachable from the deployed site.
- **Path forward:** When the CRA/`react-scripts` toolchain naturally pulls
  `brace-expansion@2.1.2+` (e.g. via a future Dependabot bump of `jake`/`filelist`),
  this clears on its own without a manual override.

> Note: this machine enforces a global npm `min-release-age` supply-chain guard
> (a `before` cutoff in `~/.npmrc`) that blocks installing very recently published
> versions. It did **not** block any fix used above (all were published before the
> cutoff); it is only mentioned here because it can affect which brace-expansion
> version resolves on a given day.

### 2. `webpack-dev-server` — Moderate (GHSA-9jgg-88mc-972h, GHSA-4v9v-hfq4-rm2v)

- **What:** Source code could be read by a malicious website when using a
  non-Chromium browser **while the dev server is running**.
- **Why not fixed:** The fix requires `webpack-dev-server@5.x`, which is incompatible
  with CRA's `react-scripts@5.0.1` dev server and breaks `npm start`.
- **Impact:** Local development only (`npm start`). It never runs in production and is
  never deployed. Mitigate by not browsing untrusted sites while `npm start` is active.

### 3. `react-scripts` — Moderate

- A meta-advisory that only reports because of the `webpack-dev-server` issue above.
  It clears automatically once that dependency can be upgraded.

## Recommendations

1. **Accept the 3 residuals** — they are dev/build-time only and do not affect visitors.
2. **Long term:** migrating off the deprecated Create React App to a maintained builder
   (e.g. **Vite**) would eliminate the entire `react-scripts` transitive tree and these
   residuals for good. Escalate as a separate, larger effort.
3. **Consolidate lockfiles:** the repo carries both `package-lock.json` and `yarn.lock`.
   Deployment uses npm, so `package-lock.json` is authoritative; consider removing
   `yarn.lock` to prevent drift between the two.
4. **Keep monitoring** Dependabot alerts for newly installable fixes.

## Testing

- [x] `npm audit`: 32 → 3 vulnerabilities (critical eliminated).
- [x] `CI=true npm run build` — compiles successfully.
- [x] `npm start` — dev server compiles and serves HTTP 200.
- [x] No changes to application source; deployed bundle behavior unchanged.

## Date

Audited and fixed on: 2026-07-27
