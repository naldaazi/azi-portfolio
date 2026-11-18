import Image from "next/image";
import { site } from "@/lib/content";
import { projectShot } from "@/lib/shots";

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
  "Operations audit",
];

/* Each marquee copy repeats the tool list so it outruns any viewport width. */
const LOOP = Array.from({ length: 4 }).flatMap(() => site.tools);

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
              {LOOP.map((d, i) => (
                <span className="driver" key={`${dup}-${i}`}>
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
            {[
              { n: "01", t: "Automations", s: "Meeting confirmations" },
              { n: "02", t: "Workflow systems", s: "ClickUp, one source of truth" },
              { n: "03", t: "Inbox systems", s: "Gmail triage & labels" },
              { n: "04", t: "Calendar systems", s: "Focus blocks & buffers" },
            ].map((row) => (
              <div className="prow" key={row.n}>
                <span className="prow-n">{row.n}</span>
                <span>
                  <span className="prow-t" style={{ display: "block" }}>
                    {row.t}
                  </span>
                  <span className="prow-s" style={{ display: "block" }}>
                    {row.s}
                  </span>
                </span>
                <Arrow size={10} />
              </div>
            ))}
          </div>

          <div className="b-thumbs">
            {["inbox-management-system", "calendar-management-system"].map((slug) => {
              const src = projectShot(slug);
              if (!src) return null;
              return (
                <span className="b-thumb" key={slug}>
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1180px) 180px, 40vw"
                    style={{ objectFit: "cover", objectPosition: "top left" }}
                  />
                </span>
              );
            })}
          </div>

          <span className="bcard-more">
            Read the case studies
            <Arrow size={10} />
          </span>
        </a>

        {/* Focus */}
        <a className="bcard b-focus" href="/about" data-reveal>
          <div className="b-focus-top">
            <span className="bcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span className="bcard-title">Focus</span>
            <Arrow size={11} />
          </div>

          <div className="orbit">
            <span className="orbit-ring" aria-hidden="true" />
            <span className="orbit-core" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2.6c3.4 1.7 5.2 4.9 5.2 8.6 0 2-.4 3.7-1 5.1l-2.6-1.4V19l-1.6 1.6L10.4 19v-4.1l-2.6 1.4c-.6-1.4-1-3.1-1-5.1 0-3.7 1.8-6.9 5.2-8.6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>

            {site.tools.slice(0, 6).map((t, i) => {
              const spots = [
                { left: "14%", top: "12%" },
                { left: "72%", top: "6%" },
                { left: "84%", top: "44%" },
                { left: "62%", top: "82%" },
                { left: "16%", top: "80%" },
                { left: "2%", top: "46%" },
              ];
              const s = spots[i];
              return (
                <span
                  className="orbit-node"
                  key={t.name}
                  style={{ left: s.left, top: s.top }}
                  title={t.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt="" width={16} height={16} aria-hidden="true" />
                </span>
              );
            })}
          </div>

          <p className="bcard-desc" style={{ marginTop: 0 }}>
            Executive support and operations systems.
          </p>
          <span className="pill-badge">Operations &amp; systems</span>
        </a>

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
