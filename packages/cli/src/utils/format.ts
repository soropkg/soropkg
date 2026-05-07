import chalk from "chalk";
import type { ContractInterface, SpecFunction, SpecType, SpecError } from "@soropkg/core";

function printFunction(fn: SpecFunction): void {
  const inputs = fn.inputs.map((i) => `${i.name}: ${i.type}`).join(", ");
  const outputs = fn.outputs.map((o) => o.type).join(", ");
  const ret = outputs ? ` → ${outputs}` : "";

  if (fn.doc) {
    console.log(chalk.gray(`  // ${fn.doc}`));
  }
  console.log(`  ${chalk.cyan("fn")} ${chalk.bold(fn.name)}(${inputs})${ret}`);
}

function printType(t: SpecType): void {
  if (t.doc) {
    console.log(chalk.gray(`  // ${t.doc}`));
  }
  if (t.kind === "struct") {
    console.log(`  ${chalk.yellow("struct")} ${chalk.bold(t.name)} {`);
    for (const f of t.fields ?? []) {
      console.log(`    ${f.name}: ${f.type}`);
    }
    console.log("  }");
  } else if (t.kind === "enum") {
    console.log(`  ${chalk.yellow("enum")} ${chalk.bold(t.name)} {`);
    for (const c of t.cases ?? []) {
      console.log(`    ${c.name}${c.value !== undefined ? ` = ${c.value}` : ""}`);
    }
    console.log("  }");
  } else {
    console.log(`  ${chalk.yellow("union")} ${chalk.bold(t.name)} {`);
    for (const c of t.cases ?? []) {
      if (c.fields?.length) {
        const fields = c.fields.map((f) => f.type).join(", ");
        console.log(`    ${c.name}(${fields})`);
      } else {
        console.log(`    ${c.name}`);
      }
    }
    console.log("  }");
  }
}

function printError(e: SpecError): void {
  if (e.doc) {
    console.log(chalk.gray(`  // ${e.doc}`));
  }
  console.log(`  ${chalk.red("error")} ${chalk.bold(e.name)} = ${e.code}`);
}

export function printContractInterface(iface: ContractInterface): void {
  console.log();
  console.log(
    chalk.bold(`Contract: `) + chalk.green(iface.contractId)
  );
  console.log(chalk.dim(`Network:  ${iface.network}`));
  console.log(chalk.dim(`WASM:     ${iface.wasmHash}`));
  console.log();

  if (iface.functions.length) {
    console.log(chalk.bold.underline("Functions"));
    for (const fn of iface.functions) {
      printFunction(fn);
    }
    console.log();
  }

  if (iface.types.length) {
    console.log(chalk.bold.underline("Types"));
    for (const t of iface.types) {
      printType(t);
    }
    console.log();
  }

  if (iface.errors.length) {
    console.log(chalk.bold.underline("Errors"));
    for (const e of iface.errors) {
      printError(e);
    }
    console.log();
  }

  const summary = [
    `${iface.functions.length} function(s)`,
    `${iface.types.length} type(s)`,
    `${iface.errors.length} error(s)`,
  ].join(", ");
  console.log(chalk.dim(`─── ${summary} ───`));
}
