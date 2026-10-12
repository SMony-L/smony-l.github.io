# Dependency Security Remediation

## October 12, 2026

The npm lockfile initially reported **96 audit findings**: 2 critical, 60 high,
and 34 moderate, including dependency-chain meta-advisories. GitHub also reported
114 open Dependabot alerts across `package-lock.json` and the stale `yarn.lock`.
These counts overlap; they are not counts of distinct exploitable vulnerabilities.

The previous approach of overriding Create React App's transitive dependencies
could not fix everything. Several dependencies have no published patched release,
and the patched webpack development server is incompatible with
`react-scripts@5.0.1`. Development-only vulnerabilities still matter: development
servers and build tools run on developers' machines and in CI.

## Changes

- Replaced deprecated Create React App with Vite and migrated the rendering test
  to Vitest/jsdom. React and the portfolio components retain their existing
  behavior; files containing JSX now use `.jsx` extensions.
- Removed the vulnerable webpack, Jest, SVG optimization, and development-server
  dependency chains instead of forcing incompatible transitive upgrades.
- Removed the obsolete npm overrides and regenerated `package-lock.json`.
- Removed the tracked, out-of-date `yarn.lock`. npm is the supported package
  manager; use `npm ci` to reproduce the committed dependency tree.
- Pinned `gh-pages` to **6.1.1**. Releases 6.2.0 and later introduce
  `globby`/`fast-glob`/`micromatch`/`braces`; the available `braces` release remains
  affected by [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
  Do not upgrade this pin until the dependency chain has a verified fix.
- Updated Netlify to Node.js 24. Supported Node.js versions are declared in
  `package.json`.

The existing `npm start`, `npm run build`, `npm test`, and `npm run deploy`
commands remain available. Production output stays in `build/`.
`npm run test:watch` enables interactive tests, and `npm run preview` serves a
production build locally. Vite derives asset paths from the `homepage` pathname;
`PUBLIC_URL` overrides it for alternate deployment paths.

## Verification

- A fresh `npm ci` and full `npm audit` report **zero vulnerabilities**, including
  development dependencies.
- The production build and application rendering test pass.
- The resolved dependency versions are checked against every open Dependabot
  alert's vulnerable range. Packages are either removed or outside those ranges;
  alerts against `yarn.lock` are addressed by removing the unsupported lockfile.
- Development and production-preview smoke checks cover HTML, application
  modules, static assets, and a non-root deployment base.

GitHub's alerts and existing Dependabot pull requests refer to the default branch.
They are not resolved remotely merely by fixing a feature branch. After this
change is merged, GitHub must rescan the updated manifests; redundant Dependabot
pull requests can then be closed.

## References

- [Repository Dependabot alerts](https://github.com/SMony-L/smony-l.github.io/security/dependabot)
- [Open Dependabot pull requests](https://github.com/SMony-L/smony-l.github.io/pulls?q=is%3Aopen+is%3Apr+author%3Aapp%2Fdependabot)
- [React: Sunsetting Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)
- [Vite: Getting started](https://vite.dev/guide/)
- [Vitest: Migration guide](https://vitest.dev/guide/migration.html)
- [npm: Reproducible installs with npm ci](https://docs.npmjs.com/cli/commands/npm-ci)
