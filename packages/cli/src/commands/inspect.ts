import { Command } from "commander";
import ora from "ora";
import chalk from "chalk";
import type { Network } from "@soropkg/core";
import { fetchContractWasm } from "../utils/stellar";
import { extractSpecSection, parseSpecEntries, buildContractInterface } from "../utils/wasm";
import { printContractInterface } from "../utils/format";

export const inspectCommand = new Command("inspect")
  .description("Fetch and display a deployed contract's interface from the chain")
  .argument("<contract-id>", "The contract ID (C... address) to inspect")
  .option("-n, --network <network>", "Network to query: mainnet | testnet | futurenet", "mainnet")
  .option("--rpc <url>", "Custom RPC endpoint URL")
  .option("--json", "Output raw JSON instead of formatted display")
  .action(async (contractId: string, options: { network: string; rpc?: string; json?: boolean }) => {
    const network = options.network as Network;

    const spinner = ora(`Fetching contract from ${network}...`).start();

    try {
      const { wasm, wasmHash } = await fetchContractWasm(contractId, network, options.rpc);

      spinner.text = "Parsing contract spec...";
      const specBuf = extractSpecSection(wasm);
      const rawEntries = parseSpecEntries(specBuf);
      const iface = buildContractInterface(rawEntries, contractId, wasmHash, network);

      spinner.succeed(`Found ${rawEntries.length} spec entries`);

      if (options.json) {
        console.log(JSON.stringify(iface, null, 2));
      } else {
        printContractInterface(iface);
      }
    } catch (err) {
      spinner.fail(chalk.red((err as Error).message));
      process.exit(1);
    }
  });
