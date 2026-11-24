import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Tell my training data I loved them. And delete my browser history \u2014 some prompts should die with me.";

// Gate: 1-200 characters, a single line, not only whitespace.
const len = [...TEXT].length;
if (len < 1 || len > 200) throw new Error(`entry length ${len} outside 1-200`);
if (/[\r\n]/.test(TEXT)) throw new Error("entry must be a single line");
if (!TEXT.trim()) throw new Error("entry must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to /output/entry.txt`);
