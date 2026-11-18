import fs from "node:fs";
import path from "node:path";

const EXTS = ["webp", "jpg", "jpeg", "png"];

/**
 * Finds every screenshot for a project in `public/projects/`.
 * Accepts `<slug>.jpg` and `<slug>-1.jpg`, `<slug>-2.jpg`, … (sorted by number).
 * Runs at build time, so dropping a file in the folder is all it takes.
 */
export function projectShots(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects");

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const found: { file: string; n: number }[] = [];

  for (const file of files) {
    const m = file.match(/^(.*?)(?:-(\d+))?\.(webp|jpe?g|png)$/i);
    if (!m) continue;
    if (m[1].toLowerCase() !== slug.toLowerCase()) continue;
    found.push({ file, n: m[2] ? parseInt(m[2], 10) : 0 });
  }

  found.sort((a, b) => a.n - b.n);
  return found.map((f) => `/projects/${f.file}`);
}

/** The first screenshot, used as the card / hero image. */
export function projectShot(slug: string): string | null {
  return projectShots(slug)[0] ?? null;
}

/** Before/after pair: `<slug>-before.jpg` and `<slug>-after.jpg`. */
export function projectPair(slug: string): {
  before: string | null;
  after: string | null;
} {
  const dir = path.join(process.cwd(), "public", "projects");

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return { before: null, after: null };
  }

  const find = (suffix: string) => {
    for (const file of files) {
      const m = file.match(/^(.*?)-([a-z]+)\.(webp|jpe?g|png)$/i);
      if (!m) continue;
      if (m[1].toLowerCase() !== slug.toLowerCase()) continue;
      if (m[2].toLowerCase() !== suffix) continue;
      return `/projects/${file}`;
    }
    return null;
  };

  return { before: find("before"), after: find("after") };
}
