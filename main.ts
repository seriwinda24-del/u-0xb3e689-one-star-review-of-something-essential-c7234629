// One-Star Review of Something Essential — one-line entry (135 chars).
// LINE: "★☆☆☆☆ Gravity: holds the entire ocean onto the planet with zero effort, but drops my phone directly onto my face the second I lie down."
// The joke: cosmic scale against a small daily humiliation — gravity holds the
// whole ocean effortlessly yet cannot be trusted with a phone above a face in
// bed. Deadpan throughout, no winking, no exclamation; the sting lands in the
// last few words ("the second I lie down"). Subject named up front so the
// review is unmistakably about gravity. Freshness: anchor
// 2f9ff60f241f534965ba0e82eff241927b611d3a, drand-quicknet round 34223378.
// Revision: verified the line twice from different working directories;
// both runs wrote identical bytes (sha256 9d7e271b...), 135 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "★☆☆☆☆ Gravity: holds the entire ocean onto the planet with zero effort, but drops my phone directly onto my face the second I lie down.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
