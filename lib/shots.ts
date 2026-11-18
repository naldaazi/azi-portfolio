import fs from "node:fs";
import path from "node:path";

const EXTS = /\.(webp|jpe?g|png)$/i;

/** Words that identify each project inside a filename. */
const KEYWORDS: Record<string, string[]> = {
  "meeting-confirmation-automation": ["meeting", "confirmation", "zap"],
  "operational-workflow-system": ["workflow", "clickup", "board"],
  "inbox-management-system": ["inbox", "gmail", "email"],
  "calendar-management-system": ["calendar", "schedule"],
};

export type Media = {
  hero: string | null;
  proof: string[];
  before: string | null;
  after: string | null;
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function listFiles(): string[] {
  try {
    return fs.readdirSync(path.join(process.cwd(), "public", "projects"));
  } catch {
    return [];
  }
}

/**
 * Resolves every image for a project.
 *
 * Matching is deliberately forgiving — a file counts if its name starts with the
 * project slug OR contains one of the project's keywords. `before` / `after` are
 * detected by name; anything else becomes proof (sorted by any trailing number).
 *
 * So all of these work:
 *   inbox-management-system-before.jpg
 *   Inbox before.png
 *   inbox_after.jpg
 */
export function projectMedia(slug: string): Media {
  const files = listFiles().filter((f) => EXTS.test(f));
  const keys = KEYWORDS[slug] ?? [];
  const nSlug = norm(slug);

  const mine = files.filter((f) => {
    const n = norm(f);
    return n.startsWith(nSlug) || keys.some((k) => n.includes(k));
  });

  const toUrl = (f: string) => `/projects/${f}`;

  const beforeFile = mine.find((f) => norm(f).includes("before")) ?? null;
  const afterFile = mine.find((f) => norm(f).includes("after")) ?? null;

  const rest = mine.filter((f) => f !== beforeFile && f !== afterFile);

  const heroFile =
    rest.find((f) => norm(f).startsWith(nSlug) && !/\d/.test(norm(f))) ?? null;

  const proof = rest
    .filter((f) => f !== heroFile)
    .map((f) => {
      const m = f.match(/(\d+)(?=\.\w+$)/);
      return { f, n: m ? parseInt(m[1], 10) : 999 };
    })
    .sort((a, b) => a.n - b.n || a.f.localeCompare(b.f))
    .map((o) => toUrl(o.f));

  return {
    hero: heroFile ? toUrl(heroFile) : null,
    proof,
    before: beforeFile ? toUrl(beforeFile) : null,
    after: afterFile ? toUrl(afterFile) : null,
  };
}

/** First available image, used by the gallery card. */
export function projectShot(slug: string): string | null {
  const m = projectMedia(slug);
  return m.hero ?? m.proof[0] ?? m.before ?? m.after ?? null;
}
