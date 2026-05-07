import fs from "fs";
import path from "path";
import TOML from "@iarna/toml";
import type { SorobanToml } from "@soropkg/core";

export const MANIFEST_FILENAME = "soroban.toml";

export function findManifest(cwd = process.cwd()): string | null {
  let dir = cwd;
  while (true) {
    const candidate = path.join(dir, MANIFEST_FILENAME);
    if (fs.existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function readManifest(filePath?: string): SorobanToml {
  const resolved = filePath ?? findManifest();
  if (!resolved) {
    throw new Error(
      `No ${MANIFEST_FILENAME} found. Run "soropkg init" to create one.`
    );
  }
  const raw = fs.readFileSync(resolved, "utf8");
  return TOML.parse(raw) as unknown as SorobanToml;
}

export function writeManifest(manifest: SorobanToml, filePath?: string): void {
  const target = filePath ?? path.join(process.cwd(), MANIFEST_FILENAME);
  fs.writeFileSync(target, TOML.stringify(manifest as unknown as TOML.JsonMap));
}
