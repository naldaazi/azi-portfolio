import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { site } from "@/lib/content";
import { projectShots } from "@/lib/shots";

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
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
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

  /* A plain `<slug>.jpg` is the wide hero; numbered `-1,-2,-3` are the proof strip. */
  const allShots = projectShots(project.slug);
  const heroShot = allShots.find((s) => !/-\d+\.[a-z]+$/i.test(s)) ?? null;
  const proof = allShots.filter((s) => s !== heroShot);

  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <div className="detail-hero" style={{ padding: 0 }}>
            <a
              href="/projects"
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

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <span
                className={`chip${project.kind === "Client work" ? " chip-accent" : ""}`}
              >
                {project.kind}
              </span>
              <span className="chip">{project.year}</span>
            </div>

            <h1 className="h2" style={{ marginTop: 16, maxWidth: "26ch" }}>
              {project.title}
            </h1>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: "54ch" }}>
              {project.summary}
            </p>

            <div className="detail-meta">
              {project.tools.map((t) => (
                <span className="tool-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            {heroShot && (
              <div className="detail-shot">
                <Image
                  src={heroShot}
                  alt={`${project.title} — screen`}
                  fill
                  priority
                  sizes="(min-width: 900px) 900px, 92vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
            )}
          </div>

          <div className="detail-body" style={{ padding: "26px 0 0", marginTop: 24 }}>
            <div>
              <span className="label">The problem</span>
              <p className="body-lg" style={{ marginTop: 10 }}>
                {project.problem}
              </p>

              <div style={{ marginTop: 34 }}>
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

              {project.slug === "meeting-confirmation-automation" && (
                <div style={{ marginTop: 34 }}>
                  <span className="label">The workflow, running</span>
                  <WorkflowDiagram />
                </div>
              )}

              {proof.length > 0 && (
                <div style={{ marginTop: 30 }}>
                  <span className="label">Proof · the actual Zap</span>
                  <div className="proof-grid">
                    {proof.map((src, i) => (
                      <a
                        key={src}
                        className="proof-item"
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open screenshot ${i + 1} of the Zap, full size`}
                      >
                        <Image
                          src={src}
                          alt={`Zapier step screenshots, part ${i + 1}`}
                          fill
                          sizes="(min-width: 900px) 240px, 45vw"
                          style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="result-box">
                <span className="label" style={{ color: "var(--accent-ink)" }}>
                  Result
                </span>
                <p style={{ marginTop: 8 }}>{project.result}</p>
              </div>

              <div style={{ marginTop: 34 }}>
                <span className="label">Next</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {others.map((o) => (
                    <a
                      key={o.slug}
                      href={`/projects/${o.slug}`}
                      className="tool-tag"
                    >
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
                    <div className="stat-v" style={{ fontSize: 15 }}>
                      {project.client}
                    </div>
                    <div className="stat-l">Client</div>
                  </div>
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="stat-v" style={{ fontSize: 20 }}>
                        {m.value}
                      </div>
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

          <Footer />
        </div>
      </Chrome>
    </>
  );
}
