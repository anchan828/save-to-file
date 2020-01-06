import * as core from "@actions/core";
import { dirname, join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export async function save(text: string, file: string, encoding: string) {
  if (file[0] === "~" || file[0] === "$HOME") {
    return join(process.env.HOME!, file.slice(1));
  }

  const dir = dirname(file);

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    core.debug(`Created directory: ${dir}`);
  }

  writeFileSync(file, text, encoding);
}
