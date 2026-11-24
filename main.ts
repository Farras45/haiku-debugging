import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A haiku about debugging, in the 5-7-5 syllable shape:
//   "cursor blinks at three"            — 5 syllables
//   "the log says nothing is wrong"    — 7 syllables
//   "yet the bug still breathes"       — 5 syllables
const HAIKU = [
  "cursor blinks at three",
  "the log says nothing is wrong",
  "yet the bug still breathes",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = HAIKU + "\n";
// The gate allows at most 200 characters; refuse loudly rather than
// silently writing an entry that can never be valid.
if (text.length > 200) {
  throw new Error(`haiku is ${text.length} characters, over the 200 limit`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
