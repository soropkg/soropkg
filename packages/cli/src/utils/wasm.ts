import { xdr } from "@stellar/stellar-sdk";
import { XdrReader } from "@stellar/js-xdr";
import type {
  ContractInterface,
  SpecFunction,
  SpecFunctionArg,
  SpecType,
  SpecError,
} from "@soropkg/core";

const WASM_MAGIC = 0x6d736100; // '\0asm' in little-endian uint32

function readULEB128(buf: Buffer, offset: number): [number, number] {
  let result = 0;
  let shift = 0;
  let bytesRead = 0;
  while (true) {
    const byte = buf[offset + bytesRead];
    if (byte === undefined) throw new Error("Unexpected end of WASM buffer");
    bytesRead++;
    result |= (byte & 0x7f) << shift;
    if ((byte & 0x80) === 0) break;
    shift += 7;
  }
  return [result, bytesRead];
}

// Extract the raw bytes of the contractspecv0 custom section from a WASM binary.
export function extractSpecSection(wasm: Buffer): Buffer {
  if (wasm.readUInt32LE(0) !== WASM_MAGIC) {
    throw new Error("Not a valid WASM binary (bad magic bytes)");
  }

  let offset = 8; // skip magic (4 bytes) + version (4 bytes)

  while (offset < wasm.length) {
    const sectionId = wasm[offset];
    offset += 1;

    const [sectionSize, sizeBytes] = readULEB128(wasm, offset);
    offset += sizeBytes;

    const sectionContentStart = offset;

    if (sectionId === 0) {
      // custom section — read the name first
      const [nameLen, nameLenBytes] = readULEB128(wasm, offset);
      const nameStart = offset + nameLenBytes;
      const name = wasm.slice(nameStart, nameStart + nameLen).toString("utf8");
      const dataStart = nameStart + nameLen;
      const dataEnd = sectionContentStart + sectionSize;

      if (name === "contractspecv0") {
        return wasm.slice(dataStart, dataEnd);
      }
    }

    offset = sectionContentStart + sectionSize;
  }

  throw new Error(
    "No contractspecv0 section found — this may not be a Soroban contract"
  );
}

// Parse concatenated XDR ScSpecEntry items from the spec section buffer.
// Uses XdrReader so each read() call advances the cursor without requiring
// the whole buffer to be consumed by a single entry (unlike fromXDR).
export function parseSpecEntries(specBuf: Buffer): xdr.ScSpecEntry[] {
  const entries: xdr.ScSpecEntry[] = [];
  const reader = new XdrReader(specBuf);

  while (!reader.eof) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      entries.push(xdr.ScSpecEntry.read(reader as any));
    } catch {
      break;
    }
  }

  return entries;
}

// Convert xdr.ScSpecTypeDef to a human-readable string.
function typeName(typeDef: xdr.ScSpecTypeDef): string {
  const kind = typeDef.switch().name;
  switch (kind) {
    case "scSpecTypeVal":       return "Val";
    case "scSpecTypeBool":      return "bool";
    case "scSpecTypeVoid":      return "void";
    case "scSpecTypeError":     return "Error";
    case "scSpecTypeU32":       return "u32";
    case "scSpecTypeI32":       return "i32";
    case "scSpecTypeU64":       return "u64";
    case "scSpecTypeI64":       return "i64";
    case "scSpecTypeTimepoint": return "Timepoint";
    case "scSpecTypeDuration":  return "Duration";
    case "scSpecTypeU128":      return "u128";
    case "scSpecTypeI128":      return "i128";
    case "scSpecTypeU256":      return "u256";
    case "scSpecTypeI256":      return "i256";
    case "scSpecTypeBytes":     return "Bytes";
    case "scSpecTypeString":    return "String";
    case "scSpecTypeSymbol":    return "Symbol";
    case "scSpecTypeAddress":   return "Address";
    case "scSpecTypeOption": {
      const inner = typeName(typeDef.option().valueType());
      return `Option<${inner}>`;
    }
    case "scSpecTypeResult": {
      const ok  = typeName(typeDef.result().okType());
      const err = typeName(typeDef.result().errorType());
      return `Result<${ok}, ${err}>`;
    }
    case "scSpecTypeVec": {
      const elem = typeName(typeDef.vec().elementType());
      return `Vec<${elem}>`;
    }
    case "scSpecTypeMap": {
      const k = typeName(typeDef.map().keyType());
      const v = typeName(typeDef.map().valueType());
      return `Map<${k}, ${v}>`;
    }
    case "scSpecTypeTuple": {
      const elems = typeDef.tuple().valueTypes().map(typeName).join(", ");
      return `Tuple<${elems}>`;
    }
    case "scSpecTypeBytesN": {
      return `BytesN<${typeDef.bytesN().n()}>`;
    }
    case "scSpecTypeUdt": {
      return typeDef.udt().name().toString();
    }
    default:
      return kind;
  }
}

// Build a ContractInterface from raw XDR spec entries.
export function buildContractInterface(
  entries: xdr.ScSpecEntry[],
  contractId: string,
  wasmHash: string,
  network: import("@soropkg/core").Network
): ContractInterface {
  const functions: SpecFunction[] = [];
  const types: SpecType[] = [];
  const errors: SpecError[] = [];

  for (const entry of entries) {
    const kind = entry.switch().name;

    if (kind === "scSpecEntryFunctionV0") {
      const fn = entry.functionV0();
      functions.push({
        name: fn.name().toString(),
        doc: fn.doc().toString() || undefined,
        inputs: fn.inputs().map((inp) => ({
          name: inp.name().toString(),
          type: typeName(inp.type()),
        })),
        outputs: fn.outputs().map((out) => ({
          name: "",
          type: typeName(out),
        })),
      });
    } else if (kind === "scSpecEntryUdtStructV0") {
      const s = entry.udtStructV0();
      types.push({
        kind: "struct",
        name: s.name().toString(),
        doc: s.doc().toString() || undefined,
        fields: s.fields().map((f) => ({
          name: f.name().toString(),
          type: typeName(f.type()),
        })),
      });
    } else if (kind === "scSpecEntryUdtEnumV0") {
      const e = entry.udtEnumV0();
      types.push({
        kind: "enum",
        name: e.name().toString(),
        doc: e.doc().toString() || undefined,
        cases: e.cases().map((c) => ({
          name: c.name().toString(),
          value: c.value(),
        })),
      });
    } else if (kind === "scSpecEntryUdtUnionV0") {
      const u = entry.udtUnionV0();
      types.push({
        kind: "union",
        name: u.name().toString(),
        doc: u.doc().toString() || undefined,
        cases: u.cases().map((c) => {
          const caseName = c.switch().name;
          if (caseName === "scSpecUdtUnionCaseTupleV0") {
            const tc = c.tupleCase();
            return {
              name: tc.name().toString(),
              fields: tc.type().map((t, i) => ({
                name: `field_${i}`,
                type: typeName(t),
              })),
            };
          }
          return { name: c.voidCase().name().toString() };
        }),
      });
    } else if (kind === "scSpecEntryUdtErrorEnumV0") {
      const e = entry.udtErrorEnumV0();
      for (const c of e.cases()) {
        errors.push({
          name: c.name().toString(),
          code: c.value(),
          doc: c.doc().toString() || undefined,
        });
      }
    }
  }

  return { contractId, network, wasmHash, functions, types, errors };
}
