-- soropkg registry schema
-- Run against a Postgres 14+ database: psql -d soropkg -f schema.sql

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- for full-text search

-- ─── Publishers ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS publishers (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  github_id     INTEGER UNIQUE NOT NULL,
  github_login  TEXT NOT NULL,
  email         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Packages ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS packages (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org             TEXT NOT NULL,
  name            TEXT NOT NULL,
  slug            TEXT GENERATED ALWAYS AS (org || '/' || name) STORED,
  description     TEXT,
  license         TEXT,
  repository      TEXT,
  homepage        TEXT,
  latest_version  TEXT,
  owner_id        UUID REFERENCES publishers(id),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (org, name)
);

CREATE INDEX IF NOT EXISTS packages_slug_trgm ON packages USING GIN (slug gin_trgm_ops);
CREATE INDEX IF NOT EXISTS packages_description_trgm ON packages USING GIN (description gin_trgm_ops);

-- ─── Versions ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS versions (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  package_id    UUID NOT NULL REFERENCES packages(id),
  version       TEXT NOT NULL,
  published_by  UUID REFERENCES publishers(id),
  published_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (package_id, version)
);

-- ─── Contracts per version per network ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contracts (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  version_id  UUID NOT NULL REFERENCES versions(id),
  network     TEXT NOT NULL CHECK (network IN ('mainnet', 'testnet', 'futurenet')),
  label       TEXT NOT NULL,     -- human label, e.g. "pool_factory"
  contract_id TEXT NOT NULL,     -- C... Soroban address
  wasm_hash   TEXT NOT NULL,     -- hex wasm hash, verified on-chain at publish time
  UNIQUE (version_id, network, label)
);

-- ─── Dependencies ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dependencies (
  version_id     UUID NOT NULL REFERENCES versions(id),
  dep_package    TEXT NOT NULL,   -- "org/name"
  dep_constraint TEXT NOT NULL,   -- semver range e.g. "^1.2.0"
  PRIMARY KEY (version_id, dep_package)
);

-- ─── Audits ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audits (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  package_id  UUID NOT NULL REFERENCES packages(id),
  name        TEXT NOT NULL,
  url         TEXT NOT NULL,
  auditor     TEXT NOT NULL,
  audit_date  DATE NOT NULL,
  added_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
