import { access } from "node:fs/promises";
for (const file of [
  "index.html",
  "src/main.js",
  "src/styles.css",
  "README.md",
  "CLAUDE_HANDOFF_DSD_STANDALONE.md",
  "DSD_TODO.md",
])
  await access(file);
console.log("Lint/sanity check passed: required standalone app files exist.");
