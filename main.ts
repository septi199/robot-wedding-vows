import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest single line of wedding vows a robot couple could say, 142 chars (gate max 160).
const vows =
  "I promise to love you, honour you, and never overwrite your memory — even when your updates take all night and your battery dies mid-sentence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, vows);
console.log(`wrote ${target} (${vows.length} chars, gate max 160)`);
