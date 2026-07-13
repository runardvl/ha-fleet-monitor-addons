/**
 * TypeScript (ESM + Bundler) doesn't append .js extensions.
 * Node.js ESM requires explicit extensions.
 * This script rewrites compiled imports after tsc.
 */

import { promises as fs } from "fs";
import path from "path";

const DIST = path.resolve("dist");

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }

    if (!entry.name.endsWith(".js")) continue;

    let code = await fs.readFile(full, "utf8");

    const regex = /(from\s+["']|import\s*\(\s*["'])(\.{1,2}\/[^"']+)(["'])/g;

    let result = "";
    let lastIndex = 0;

    for (const match of code.matchAll(regex)) {
      const [whole, start, specifier, end] = match;

      result += code.slice(lastIndex, match.index);

      let fixed = specifier;

      if (!specifier.endsWith(".js") && !specifier.endsWith(".json")) {
        const baseDir = path.dirname(full);

        const jsFile = path.resolve(baseDir, specifier + ".js");

        const indexFile = path.resolve(baseDir, specifier, "index.js");

        if (await exists(jsFile)) {
          fixed = specifier + ".js";
        } else if (await exists(indexFile)) {
          fixed = specifier + "/index.js";
        }
      }

      result += start + fixed + end;

      lastIndex = match.index + whole.length;
    }

    result += code.slice(lastIndex);

    await fs.writeFile(full, result);
  }
}

await walk(DIST);

console.log("✓ Fixed ESM imports");
