# AGENTS.md

## Cursor Cloud specific instructions

This is the **OpenFeature documentation website** built with Docusaurus 3.9. It is a single-product repo (not a monorepo).

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `yarn install` |
| Init submodules | `git submodule update --init --recursive` (or `yarn submodules`) |
| Dev server | `yarn start` (port 3000) |
| Build | `yarn build` |
| Lint | `yarn lint` (runs ESLint + markdownlint via wireit) |
| Type check | `yarn typecheck` |

### Non-obvious notes

- **Git submodules are required.** The build will fail if `external-content/specification` and `external-content/community` are not initialized. The `yarn start` command (via wireit) automatically runs `git submodule update --init --recursive` as a dependency, but `yarn build` does **not** — run `yarn submodules` first if building directly.
- The `yarn start` wireit task auto-initializes submodules before starting the dev server.
- The `yarn lint` wireit task runs both `lint:es` (ESLint) and `lint:md` (markdownlint-cli2) in parallel.
- `yarn build` has `onBrokenLinks: 'throw'` so broken internal links will cause the build to fail — this acts as a de-facto integration test.
- The Makefile at the repo root is for Docker-based workflows only and is not needed for local development.
- Node.js >= 20 is required (`engines` field in package.json).
- Package manager is Yarn Classic 1.x (specified in `packageManager` field).
