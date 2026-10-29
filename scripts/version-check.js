import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

// CI-only: a PR that changes src/ must bump the version in package.json.
const base = process.env.BASE_REF;
if (!base) process.exit(0);
const changed = execFileSync("git", ["diff", "--name-only", `origin/${base}...HEAD`], { encoding: "utf-8" }).split("\n");
const version = (rev) => JSON.parse(rev === "HEAD" ? readFileSync("package.json", "utf-8") : execFileSync("git", ["show", `${rev}:package.json`], { encoding: "utf-8" })).version;
if (changed.some((f) => f.startsWith("src/")) && version("HEAD") === version(`origin/${base}`)) {
  console.error("src/ changed but the version in package.json did not: bump it (patch version).");
  process.exit(1);
}
console.log("version check ok");

