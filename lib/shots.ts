import fs from "node:fs";
import path from "node:path";

/**
 * Looks for a project screenshot in `public/projects/<slug>.<ext>` at build time.
 * Drop a file in that folder and it replaces the illustrative mock automatically.
 */
export function projectShot(slug: string): string | null {
  for (const ext of ["webp", "jpg", "jpeg", "png"]) {
    const rel = `/projects/${slug}.${ext}`;
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
    } catch {
      return null;
    }
  }
  return null;
}
