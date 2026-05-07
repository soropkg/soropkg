export type Network = "mainnet" | "testnet" | "futurenet";

// soroban.toml — the manifest file that lives in a project root
export interface SorobanToml {
  package: PackageMeta;
  networks?: Partial<Record<Network, Record<string, string>>>;
  dependencies?: Record<string, string>;
}

export interface PackageMeta {
  name: string;          // "org/package-name"
  version: string;       // semver
  description?: string;
  license?: string;
  repository?: string;
  homepage?: string;
  authors?: string[];
}

// A published package entry in the registry
export interface Package {
  name: string;
  org: string;
  slug: string;
  description?: string;
  license?: string;
  repository?: string;
  homepage?: string;
  latestVersion: string;
  versions: PackageVersion[];
  createdAt: string;
  updatedAt: string;
}

export interface PackageVersion {
  version: string;
  networks: Partial<Record<Network, NetworkContracts>>;
  dependencies: Record<string, string>;
  publishedAt: string;
  publishedBy: string;
  wasmHashes: Partial<Record<Network, Record<string, string>>>;
  audits: AuditRecord[];
}

export interface NetworkContracts {
  [contractLabel: string]: string; // label → contract ID
}

export interface AuditRecord {
  name: string;
  url: string;
  auditor: string;
  date: string;
}

// Parsed from the contractspecv0 WASM custom section
export interface ContractInterface {
  contractId: string;
  network: Network;
  wasmHash: string;
  functions: SpecFunction[];
  types: SpecType[];
  errors: SpecError[];
}

export interface SpecFunction {
  name: string;
  doc?: string;
  inputs: SpecFunctionArg[];
  outputs: SpecFunctionArg[];
}

export interface SpecFunctionArg {
  name: string;
  type: string;
}

export interface SpecType {
  kind: "struct" | "enum" | "union";
  name: string;
  doc?: string;
  fields?: SpecTypeField[];
  cases?: SpecTypeCase[];
}

export interface SpecTypeField {
  name: string;
  type: string;
}

export interface SpecTypeCase {
  name: string;
  value?: number;
  fields?: SpecTypeField[];
}

export interface SpecError {
  name: string;
  code: number;
  doc?: string;
}

// Registry API response shapes
export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiError {
  error: string;
  code: string;
  details?: unknown;
}

export interface SearchResult {
  packages: Package[];
  total: number;
  page: number;
  perPage: number;
}

// Public RPC endpoints (no API key required)
export const PUBLIC_RPC_URLS: Record<Network, string> = {
  mainnet: "https://rpc.ankr.com/stellar_soroban",
  testnet: "https://soroban-testnet.stellar.org",
  futurenet: "https://rpc-futurenet.stellar.org",
};
