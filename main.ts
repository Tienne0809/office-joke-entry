import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke: 24-Hour Sprint — make.fun bounty entry.
// The program writes one office joke line to the output entry file.
const line =
  `My boss said "let us circle back" so many times that we completed the orbit and achieved escape velocity.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
