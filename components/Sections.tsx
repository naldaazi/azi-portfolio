import { site } from "@/lib/content";

export function Arrow({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 1h8v8M11 1L1 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Page header ──────────────────────────────────────────── */

export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="page-head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="h2" style={{ marginTop: 10 }}>
        {title}
      </h1>
      <p className="head-lede" style={{ marginTop: 10 }}>
        {lede}
      </p>
    </header>
  );
}

/* ── Projects ─────────────────────────────────────────────── */

export function ProjectsGrid() {
  return (
    <div className="grid-2" style={{ marginTop: 24 }}>
      {site.projects.map((p) => (
        <a key={p.slug} href={`/projects/${p.slug}`} className="card" data-reveal>
          <div className="card-top">
            <span className={`chip${p.kind === "Client work" ? " chip-accent" : ""}`}>
              {p.kind}
            </span>
            <span className="label">{p.index}</span>
          </div>
          <h2 className="card-title">{p.title}</h2>
          <p className="card-desc">{p.summary}</p>
          <div className="card-foot">
            <span>{p.client}</span>
            <span className="go">
              Read <Arrow size={10} />
            </span>
          </div>
          <span className="car-rule" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

/* ── Services ─────────────────────────────────────────────── */

export function PainBlock() {
  return (
    <div className="pain" data-reveal>
      <span className="label">{site.pain.title}</span>
      <ul className="pain-list">
        {site.pain.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="pain-turn">{site.pain.turn}</p>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid-3" style={{ marginTop: 24 }}>
      {site.services.map((s, i) => (
        <div className="card" key={s.title} style={{ cursor: "default" }} data-reveal>
          <div className="card-top">
            <span className="label">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h2 className="card-title">{s.title}</h2>
          <p className="card-desc">{s.blurb}</p>
          <ul className="svc-points">
            {s.points.map((p) => (
              <li className="svc-point" key={p}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ── Testimonials ─────────────────────────────────────────── */

export function TestimonialsGrid() {
  return (
    <div className="grid-2" style={{ marginTop: 24 }}>
      {site.testimonials.map((t) => (
        <figure className="quote" key={t.name} data-reveal>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote className="quote-text">{t.quote}</blockquote>
          <figcaption className="quote-who">
            <span className="quote-avatar" aria-hidden="true">
              {t.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </span>
            <span>
              <span className="quote-name">{t.name}</span>
              <span className="quote-role" style={{ display: "block" }}>
                {t.role}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ── About ────────────────────────────────────────────────── */

export function AboutBody() {
  return (
    <div className="two-col" style={{ marginTop: 24 }}>
      <div>
        <div className="prose">
          {site.about.paragraphs.map((p, i) => (
            <p className="body" key={i}>
              {p}
            </p>
          ))}
        </div>

        <div className="tool-tags">
          {site.tools.map((t) => (
            <span className="tool-tag" key={t.name}>
              {t.name}
              <em>{t.level}</em>
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="stat-grid">
          {site.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="approach">
          <span className="label">The method</span>
          {site.approach.map((a, i) => (
            <div className="ap-row" key={a.k}>
              <span className="ap-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="ap-k">{a.k}</span>
              <span className="ap-d">{a.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Contact ──────────────────────────────────────────────── */

export function ContactBody() {
  return (
    <div className="contact-box" style={{ marginTop: 24 }}>
      <span className="eyebrow">Next step</span>
      <h2 className="h2" style={{ marginTop: 12, maxWidth: "22ch" }}>
        Bring me the part of the week you dread.
      </h2>
      <p className="body" style={{ marginTop: 12, maxWidth: "52ch" }}>
        Thirty minutes, no pitch. Tell me what keeps slipping and I&rsquo;ll
        tell you honestly whether I&rsquo;m the right person to run it.
      </p>

      <div className="hero-cta">
        <a
          className="btn btn-solid"
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Book a discovery call
          <Arrow />
        </a>
        <a className="btn btn-line" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>

      <div className="tool-tags">
        {site.socials.map((s) => (
          <a
            key={s.label}
            className="tool-tag"
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── Footer ───────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="foot">
      <span>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        {site.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
