import * as core from "@actions/core";
import { save } from "./save";

async function run() {
  try {
    const text = core.getInput("text");
    const file = core.getInput("file", { required: true });
    const encoding = core.getInput("encoding") as BufferEncoding;

    await save(text, file, encoding);
    core.debug(`Saved: ${file}`);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
