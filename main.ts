// One-Line Office Jokes — entry program (v1: direct write).
// Writes a single one-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-199 chars, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said 'exceeds expectations', and my pay rise said 'meets budget'.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, { encoding: "utf8", mode: 0o644 });
