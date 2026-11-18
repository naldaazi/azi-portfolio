import Image from "next/image";
import { site } from "@/lib/content";

function Arrow({ size = 11 }: { size?: number }) {
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

const SERVICES_MINI = [
  "Inbox & communication",
  "Calendar & scheduling",
  "Workflow systems",
  "Automation & SOPs",
  "Executive support",
];

export default function Bento() {
  return (
    <div className="wrap" id="top">
      <div className="head">
        <div>
          <h1 className="display">
            {site.headline.map((line, i) => (
              <span key={i} className={line.accent ? "accent" : undefined}>
                {line.text}
                {i < site.headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="head-lede">
            I keep founders organized, supported and moving — inbox, calendar,
            research, meeting prep, workflows and SOPs.
          </p>
        </div>
        <a
          className="btn btn-solid"
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Book a call
          <Arrow />
        </a>
      </div>

      {/* Tools I work with — auto-scrolling marquee */}
      <div className="drivers">
        <div className="drivers-label">
          <b>Daily drivers</b>
          <span>Tools I work with</span>
        </div>
        <div className="drivers-track">
          {[0, 1].map((dup) => (
            <div className="drivers-list" key={dup} aria-hidden={dup === 1}>
              {site.tools.map((d) => (
                <span className="driver" key={`${dup}-${d.name}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.logo} alt="" width={16} height={16} aria-hidden="true" />
                  {d.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bento grid */}
      <div className="bento">
        {/* Portrait */}
        <div className="bcard b-portrait" data-reveal>
          <span className="bp-video" aria-hidden="true">
            <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor">
              <path d="M0 0l8 4.5L0 9z" />
            </svg>
            0:59
          </span>

          <div className="bp-frame">
            <Image
              src="/portrait.jpg"
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 1180px) 300px, 60vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
            <span className="bp-tick" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6.4l2.6 2.6L10 3.4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <span className="bp-hi">Hi, I&rsquo;m</span>
          <span className="bp-name">{site.name}</span>
          <span className="bp-rule" aria-hidden="true" />
          <span className="bp-meta">
            EA · Operations · Workflows
            <br />
            Manila
          </span>
          <span className="bp-tag">Nothing falls through.</span>

          <span className="bp-links">
            <span className="pulse" aria-hidden="true" />
            {site.availability}
          </span>
        </div>

        {/* Projects */}
        <a className="bcard b-projects" href="/projects" data-reveal>
          <div className="bcard-head">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="bcard-title">Projects</span>
          </div>
          <p className="bcard-desc">
            Systems built, shipped and handed over — inbox, workflow, calendar
            and automation.
          </p>

          <div className="mini-list">
            {site.projects.slice(0, 4).map((p) => (
              <div className="prow" key={p.slug}>
                <span className="prow-n">{p.index}</span>
                <span>
                  <span className="prow-t" style={{ display: "block" }}>
                    {p.title}
                  </span>
                  <span className="prow-s" style={{ display: "block" }}>
                    {p.client}
                  </span>
                </span>
                <Arrow size={10} />
              </div>
            ))}
          </div>

          <span className="bcard-more">
            Read the case studies
            <Arrow size={10} />
          </span>
        </a>

        {/* Toolkit */}
        <div className="bcard" data-reveal>
          <div className="bcard-head">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M2 5.5h12M5.5 5.5V3h5v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="2" y="5.5" width="12" height="8" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="bcard-title">Toolkit</span>
          </div>
          <p className="bcard-desc">The stack I run operations on.</p>

          <div className="mini-list">
            {site.tools.slice(0, 5).map((t) => (
              <div className="mini-row" key={t.name} title={`${t.name} — ${t.level}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.logo} alt="" width={14} height={14} aria-hidden="true" />
                {t.name}
              </div>
            ))}
          </div>

          <span className="pill-badge">Ops stack</span>
        </div>

        {/* Focus */}
        <div className="bcard" data-reveal>
          <div className="bcard-head">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span className="bcard-title">Focus</span>
          </div>
          <p className="bcard-desc">
            Executive support and operations systems. Audit what&rsquo;s
            breaking, build what fixes it.
          </p>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              flex: 1,
              padding: "14px 0",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "grid",
                placeItems: "center",
                width: 62,
                height: 62,
                borderRadius: "50%",
                border: "1px solid var(--hair)",
                background: "var(--card-2)",
                color: "var(--accent)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 14.5l5.5 5.5M14.5 4L20 9.5M9 9l6 6M15 3l6 6-3 3-6-6 3-3zM3 15l3-3 6 6-3 3-6-6z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <span className="pill-badge">Operations &amp; systems</span>
        </div>

        {/* Services */}
        <a className="bcard" href="/services" data-reveal>
          <div className="bcard-head">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="bcard-title">Services</span>
          </div>
          <p className="bcard-desc">What I take off your plate.</p>

          <div className="mini-list">
            {SERVICES_MINI.map((s, i) => (
              <div className="mini-row" key={s}>
                <i aria-hidden="true">{String(i + 1).padStart(2, "0")}</i>
                {s}
              </div>
            ))}
          </div>

          <span className="bcard-more">
            See all services
            <Arrow size={10} />
          </span>
        </a>

        {/* Testimonials */}
        <a className="bcard" href="/testimonials" data-reveal>
          <div className="bcard-head">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3.5C3.8 4.6 2.5 6.5 2.5 9v3.5h4V9H4.4c0-1.7.6-3 1.9-3.7L6 3.5zm7 0C10.8 4.6 9.5 6.5 9.5 9v3.5h4V9h-2.1c0-1.7.6-3 1.9-3.7L13 3.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="bcard-title">Testimonials</span>
          </div>

          <div className="bquote">
            <p className="bquote-text">
              &ldquo;{site.testimonials[0].quote.slice(0, 118)}…&rdquo;
            </p>
            <span className="bquote-who">
              {site.testimonials[0].name} · {site.testimonials[0].role}
            </span>
          </div>

          <span className="bcard-more">
            Read all
            <Arrow size={10} />
          </span>
        </a>
      </div>
    </div>
  );
}
