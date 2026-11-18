import { site, explore } from "@/lib/content";

function Arrow({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M1 11L11 1M11 1H4M11 1v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlockHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="block-head">
      <span className="label">{n}</span>
      <span className="label">{label}</span>
    </div>
  );
}

/* ── Explore rail ─────────────────────────────────────────── */

export function ExploreRail() {
  return (
    <section className="rail" aria-label="Explore" data-reveal>
      <span className="label">01–05 · Explore</span>
      <div className="rail-list">
        {explore.map((e) => (
          <a key={e.n} href={e.slug} className="rail-item">
            <span className="rail-n">{e.n}</span>
            <span>
              <span className="rail-name">{e.name}</span>
              <span className="rail-note" style={{ display: "block" }}>
                {e.note}
              </span>
            </span>
            <span className="rail-arrow">
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Projects ─────────────────────────────────────────────── */

export function ProjectsSection() {
  return (
    <section className="block" id="work" data-reveal>
      <BlockHead n="01" label="Projects" />
      <h2 className="h2">Work that shipped.</h2>
      <p className="body" style={{ marginTop: 12, maxWidth: "54ch" }}>
        Four builds, written up honestly — the problem, what I actually did, and
        what changed. Open a card to walk the whole thing.
      </p>

      <div className="grid-2">
        {site.projects.map((p) => (
          <a key={p.slug} href={`/work/${p.slug}`} className="card">
            <div className="card-top">
              <span
                className={`chip${p.kind === "Client work" ? " chip-accent" : ""}`}
              >
                {p.kind}
              </span>
              <span className="label">{p.index}</span>
            </div>
            <h3 className="card-title">{p.title}</h3>
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
    </section>
  );
}

/* ── Services ─────────────────────────────────────────────── */

export function ServicesSection() {
  return (
    <section className="block" id="services" data-reveal>
      <BlockHead n="02" label="Services" />

      <div className="pain">
        <span className="label">{site.pain.title}</span>
        <ul className="pain-list">
          {site.pain.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="pain-turn">{site.pain.turn}</p>
      </div>

      <h2 className="h2" style={{ marginTop: 42 }}>
        What I take off your plate.
      </h2>
      <p className="body" style={{ marginTop: 12, maxWidth: "54ch" }}>
        Structured support, built around what is actually breaking — not a menu
        of tasks billed by the hour.
      </p>

      <div className="grid-3">
        {site.services.map((s, i) => (
          <div className="card" key={s.title} style={{ cursor: "default" }}>
            <div className="card-top">
              <span className="label">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="card-title">{s.title}</h3>
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
    </section>
  );
}

/* ── Testimonials ─────────────────────────────────────────── */

export function TestimonialsSection() {
  return (
    <section className="block" id="words" data-reveal>
      <BlockHead n="03" label="Testimonials" />
      <h2 className="h2">The people who kept me on.</h2>

      <div className="grid-2">
        {site.testimonials.map((t) => (
          <figure className="quote" key={t.name}>
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
    </section>
  );
}

/* ── About ────────────────────────────────────────────────── */

export function AboutSection() {
  return (
    <section className="block" id="about" data-reveal>
      <BlockHead n="04" label="About" />
      <div className="two-col" style={{ marginTop: 10 }}>
        <div>
          <h2 className="h2">{site.about.title}</h2>
          <div className="prose" style={{ marginTop: 20 }}>
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
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────── */

export function ContactSection() {
  return (
    <section className="block" id="contact" data-reveal>
      <BlockHead n="05" label="Contact" />
      <div className="contact-box">
        <span className="eyebrow">Next step</span>
        <h2 className="h2" style={{ marginTop: 14, maxWidth: "20ch" }}>
          Bring me the part of the week you dread.
        </h2>
        <p className="body" style={{ marginTop: 14, maxWidth: "52ch" }}>
          Thirty minutes, no pitch. Tell me what keeps slipping and I&rsquo;ll
          tell you honestly whether I&rsquo;m the right person to run it.
        </p>

        <div className="hero-cta" style={{ marginTop: 26 }}>
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
      </div>
    </section>
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
            style={{ color: "inherit" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
