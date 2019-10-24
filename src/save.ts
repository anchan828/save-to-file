import { dirname } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export async function save(text: string, file: string, encoding: string) {
  const dir = dirname(file);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(file, text, encoding);
}
