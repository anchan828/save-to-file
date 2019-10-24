import { save } from "../src/save";
import * as tmp from "tmp";
import { readFileSync } from "fs";
import { join } from "path";
describe("save", () => {
  it("should be defined", () => {
    expect(save).toBeDefined();
  });

  it("should save text", async () => {
    const file = tmp.tmpNameSync();
    await save("test", file, "utf8");
    expect(readFileSync(file, "utf8")).toBe("test")
  });

  it("should save base64 text", async () => {
    const file = tmp.tmpNameSync();
    await save("dGVzdA==", file, "base64");
    expect(readFileSync(file, "utf8")).toBe("test")
  });

  it("should create dir", async () => {
    const file = join(tmp.dirSync().name, "path", "to", "test.txt");
    await save("test", file, "utf8");
    expect(readFileSync(file, "utf8")).toBe("test")
  });
});
