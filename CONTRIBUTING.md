# Contributing to soropkg

Thanks for contributing. Every stub command and service in this repo is an open issue — each one is self-contained and has a clear spec written directly in the source file as a `// TODO(contributor):` comment.

## Quick Start

```bash
git clone https://github.com/lumenloop/soropkg
cd soropkg
npm install
npm run build
```

## How Issues Are Structured

Each open issue maps to a single file. The file has a `// TODO(contributor):` block that describes exactly what needs to be implemented, what the inputs/outputs are, and what prior art to look at. You don't need to ask what to build — it's already written.

| Issue | File | What it builds |
|-------|------|----------------|
| #3  | `packages/cli/src/commands/add.ts` | `soropkg add <pkg>` — registry lookup + toml update |
| #4  | `packages/cli/src/commands/install.ts` | `soropkg install` — resolve + lock dependencies |
| #5  | `packages/cli/src/commands/publish.ts` | `soropkg publish` — GitHub OAuth + on-chain verification |
| #6  | `packages/cli/src/commands/search.ts` | `soropkg search` — query registry API, format results |
| #7  | `packages/cli/src/commands/generate.ts` | `soropkg generate` — emit typed TypeScript clients |
| #8  | `packages/registry/src/routes/packages.ts` + `src/services/db.ts` | Registry CRUD routes |
| #9  | `packages/registry/src/routes/packages.ts` POST | Publish endpoint + auth |
| #10 | `packages/registry/src/routes/search.ts` | Full-text search with pg_trgm |
| #11 | `packages/registry/src/services/indexer.ts` | On-chain contract indexer |
| #12 | `seeds/contracts.ts` | Wire seed data to Postgres |

## Where to Start

If this is your first contribution, start with **issue #10** (search route) or **issue #3** (the `add` command). Both are self-contained with no dependencies on other open issues.

## Pull Request Guidelines

1. One PR per issue.
2. TypeScript strict mode — no `any` without a comment explaining why.
3. No new external dependencies without discussing in the issue first.
4. If you change a public type in `@soropkg/core`, update both `cli` and `registry` accordingly.
5. Squash your commits before merging.

## Key Concepts

**On-chain spec extraction** — `packages/cli/src/utils/wasm.ts` contains the WASM parser and XDR spec decoder. Read this before working on `generate` (issue #7).

**Stellar RPC** — `packages/cli/src/utils/stellar.ts` handles all Stellar RPC calls. The pattern is: get contract instance → extract WASM hash → fetch WASM bytes.

**soroban.toml** — `packages/cli/src/utils/toml.ts` reads and writes the manifest. The schema is in `packages/core/src/types.ts`.

**Database** — `packages/registry/schema.sql` is the Postgres schema. `packages/registry/src/services/db.ts` is where the query helpers go.

## Questions

Open a discussion on GitHub or ask in the `#dev-tools` channel on the [Stellar Developers Discord](https://discord.gg/stellardev).
