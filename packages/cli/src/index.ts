#!/usr/bin/env node
import { Command } from "commander";
import { inspectCommand } from "./commands/inspect";
import { initCommand } from "./commands/init";
import { addCommand } from "./commands/add";
import { installCommand } from "./commands/install";
import { publishCommand } from "./commands/publish";
import { searchCommand } from "./commands/search";
import { generateCommand } from "./commands/generate";

const program = new Command();

program
  .name("soropkg")
  .description("Package manager for Soroban smart contracts on Stellar")
  .version("0.1.0");

program.addCommand(initCommand);
program.addCommand(inspectCommand);
program.addCommand(addCommand);
program.addCommand(installCommand);
program.addCommand(publishCommand);
program.addCommand(searchCommand);
program.addCommand(generateCommand);

program.parse(process.argv);
