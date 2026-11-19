import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry image is drawn in code at build time; the program only places it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(import.meta.dirname, "entry.png"), join(outDir, "entry.png"));
