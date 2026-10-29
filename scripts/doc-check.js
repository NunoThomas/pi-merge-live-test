// CI-only check: every exported function in src/ must have a JSDoc comment directly above it.
import { readdirSync, readFileSync } from "node:fs";

let bad = 0;
for (const f of readdirSync("src")) {
  const lines = readFileSync(`src/${f}`, "utf-8").split("\n");
  lines.forEach((line, i) => {
    if (/^export function /.test(line) && !/\*\/\s*$/.test(lines[i - 1] ?? "")) {
      console.error(`src/${f}:${i + 1}: exported function has no JSDoc comment: ${line}`);
      bad++;
    }
  });
}
if (bad) process.exit(1);
console.log("every exported function is documented");

