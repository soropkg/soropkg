# soropkg

**The package manager for Soroban smart contracts on Stellar.**

Developers building on Soroban today copy-paste contract interfaces from GitHub, manually track contract IDs across networks, and have no way to declare or resolve dependencies between contracts. `soropkg` fixes that.

```bash
npm install -g soropkg

# Inspect any deployed contract's interface directly from the chain
soropkg inspect CAQQR5SWBXKIGZKPBZDH3KM5GQ5GUTPKB7JAFCINLZBC5WXPJKRG3IM7

# Scaffold a manifest for your project
soropkg init

# (coming soon) Add a dependency
soropkg add blend-capital/blend-protocol

# (coming soon) Generate typed TypeScript clients
soropkg generate
```

---

## Why

When you compile a Soroban contract, the WASM binary embeds a full machine-readable interface spec in a custom section called `contractspecv0`. Every deployed contract on Stellar mainnet already has this. `soropkg` reads it directly from the chain — no manual ABI uploads, no trust, the ground truth is on-chain.

The registry adds a discovery and versioning layer on top: named packages, semver pinning, dependency declarations, and audit records — so the Stellar ecosystem can compose protocols the same way JavaScript developers compose npm packages.

---

## Structure

```
packages/
  core/       # @soropkg/core — shared TypeScript types
  cli/        # soropkg CLI (this is what users install)
  registry/   # @soropkg/registry — REST API server
seeds/        # Initial contract data from stellar-ecosystem-db
```

---

## The `soroban.toml` Manifest

Every project that publishes to the registry includes a `soroban.toml`:

```toml
[package]
name = "blend-capital/blend-protocol"
version = "2.0.0"
description = "Blend Protocol core contracts"
license = "Apache-2.0"
repository = "https://github.com/blend-capital/blend-contracts"

[networks.mainnet]
pool_factory = "CDSYOAVXFY7SM5S64IZPPPYB4GVGGLMQVFREPSQQEZVIWXX5R23G4QSU"
backstop     = "CAQQR5SWBXKIGZKPBZDH3KM5GQ5GUTPKB7JAFCINLZBC5WXPJKRG3IM7"

[networks.testnet]
pool_factory = "C..."

[dependencies]
"stellar/token" = "1.0.0"
```

---

## CLI Commands

| Command | Status | Description |
|---------|--------|-------------|
| `soropkg init` | ✅ Working | Scaffold `soroban.toml` interactively |
| `soropkg inspect <id>` | ✅ Working | Fetch and display a contract's interface from the chain |
| `soropkg add <pkg>` | 🚧 Open issue #3 | Add a dependency to `soroban.toml` |
| `soropkg install` | 🚧 Open issue #4 | Install all declared dependencies |
| `soropkg publish` | 🚧 Open issue #5 | Publish to the registry |
| `soropkg search <q>` | 🚧 Open issue #6 | Search the registry |
| `soropkg generate` | 🚧 Open issue #7 | Generate typed TypeScript clients |

---

## Registry API

The registry is a REST API with a Postgres backend. Current status:

| Route | Status | Description |
|-------|--------|-------------|
| `GET /health` | ✅ Working | Health check |
| `GET /packages` | 🚧 Open issue #8 | List packages |
| `GET /packages/:org/:name` | 🚧 Open issue #8 | Get package metadata |
| `POST /packages` | 🚧 Open issue #9 | Publish a package |
| `GET /search` | 🚧 Open issue #10 | Full-text search |

---

## Development Setup

```bash
git clone https://github.com/lumenloop/soropkg
cd soropkg
npm install
npm run build

# Try the working inspect command
node packages/cli/dist/index.js inspect CAQQR5SWBXKIGZKPBZDH3KM5GQ5GUTPKB7JAFCINLZBC5WXPJKRG3IM7

# Start the registry API (requires Postgres — see packages/registry/.env.example)
cd packages/registry
cp .env.example .env
psql -d soropkg -f schema.sql
npm run dev
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open issues are tagged `good first issue` — every stub command is its own self-contained issue with a clear spec.

---

## License

Apache-2.0
