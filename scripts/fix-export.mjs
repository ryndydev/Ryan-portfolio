// Next.js static export writes prefetch payloads as `__next.<seg>/<seg>/__PAGE__.txt`,
// but the client requests them as `__next.<seg>.<seg>.__PAGE__.txt`. Copy each payload
// to the dotted filename so prefetches resolve on a plain static host (GitHub Pages).
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let copied = 0;

function walk(dir, root) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, root ?? (name.startsWith("__next.") ? dir : undefined));
    } else if (root && name === "__PAGE__.txt") {
      const dotted = relative(root, full).split(sep).join(".");
      copyFileSync(full, join(root, dotted));
      copied++;
    }
  }
}

walk(OUT);
console.log(`fix-export: ${copied} prefetch payload(s) copied`);
