import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Chrome from "@/components/Chrome";
import { site } from "@/lib/content";

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = site.projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Chrome />
      <main id="main" className="shell">
        <div className="panel">
          <div className="detail-hero">
            <a
              href="/#work"
              className="label"
              style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M11 1L1 11M1 11h7M1 11V4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              All projects
            </a>

            <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
              <span className={`chip${project.kind === "Client work" ? " chip-accent" : ""}`}>
                {project.kind}
              </span>
              <span className="chip">{project.year}</span>
            </div>

            <h1 className="h2" style={{ marginTop: 18, maxWidth: "24ch" }}>
              {project.title}
            </h1>
            <p className="body-lg" style={{ marginTop: 16, maxWidth: "52ch" }}>
              {project.summary}
            </p>

            <div className="detail-meta">
              {project.tools.map((t) => (
                <span className="tool-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-body">
            <div>
              <span className="label">The problem</span>
              <p className="body-lg" style={{ marginTop: 10 }}>
                {project.problem}
              </p>

              <div style={{ marginTop: 38 }}>
                <span className="label">What I did</span>
                <div className="steps">
                  {project.approach.map((step, i) => (
                    <div className="step" key={i}>
                      <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="result-box">
                <span
                  className="label"
                  style={{ color: "var(--accent-soft)" }}
                >
                  Result
                </span>
                <p style={{ marginTop: 8, color: "var(--text)" }}>{project.result}</p>
              </div>

              <div style={{ marginTop: 38 }}>
                <span className="label">Next</span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 12,
                  }}
                >
                  {others.map((o) => (
                    <a key={o.slug} href={`/work/${o.slug}`} className="chip" style={{ padding: "8px 12px" }}>
                      {o.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <aside className="detail-aside">
              <div className="aside-box">
                <span className="label">At a glance</span>
                <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
                  <div>
                    <div className="stat-v" style={{ fontSize: 15 }}>{project.client}</div>
                    <div className="stat-l">Client</div>
                  </div>
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="stat-v" style={{ fontSize: 20 }}>{m.value}</div>
                      <div className="stat-l">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside-box">
                <span className="label">Want this run for you?</span>
                <a
                  className="btn btn-solid"
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "100%", marginTop: 12 }}
                >
                  Book a call
                </a>
              </div>
            </aside>
          </div>

          <footer className="foot">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <a href="/#work">Back to all projects</a>
          </footer>
        </div>
      </main>
    </>
  );
}
