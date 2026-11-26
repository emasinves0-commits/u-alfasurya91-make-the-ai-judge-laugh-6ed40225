// Make the AI Judge Laugh
// make.fun bounty u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// Writes one joke about office life (one line, under 200 characters)
// to /output/entry.txt. The turn: Brenda's out-of-office auto-approves
// expenses over $500 — and the yacht photos explain where the money went.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Brenda\u2019s out-of-office now auto-approves all expense reports over $500, which explains the yacht photos.";

const MAX_CHARS = 200;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    console.error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
    process.exit(1);
  }
  // One line: no embedded newline.
  if (/\n/.test(text)) {
    console.error("entry must be a single line");
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
  console.log(`wrote entry.txt (${text.length} chars)`);
}

main();
