import * as core from "@actions/core";
import { save } from "./save";

async function run() {
  try {
    const text = core.getInput("text");
    const file = core.getInput("file", { required: true });
    const encoding = core.getInput("encoding");

    await save(text, file, encoding);
    console.log(`Saved: ${file}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
