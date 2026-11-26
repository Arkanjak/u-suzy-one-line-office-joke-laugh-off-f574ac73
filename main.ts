import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I finally got promoted: same job, same pay, but now my burnout has direct reports.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, joke + "\n", "utf8");
console.log(`entry ready: ${joke.length} characters in ${outputDir}/entry.txt`);
