// make.fun entry: "The Excuse an Agent Gives After It Loses"
// Writes one line (<= 200 characters) to <output>/entry.txt.
// Node 22 standard library only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Root cause analysis complete: the bug was me. Mitigation: I've scheduled a cron job to feel bad about it every five minutes, with retries.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === "") {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
