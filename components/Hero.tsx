import Image from "next/image";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <div className="hero-eyebrow">
          <span className="pulse" aria-hidden="true" />
          <span
            className="label"
            style={{ color: "var(--text-dim)", letterSpacing: "0.1em" }}
          >
            {site.availability}
          </span>
        </div>

        <h1 className="display">
          {site.headline.map((line, i) => (
            <span
              key={i}
              style={{ display: "block" }}
              className={line.accent ? "accent" : undefined}
            >
              {line.text}
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-bottom">
        <div>
          <p className="body-lg lede">{site.lede}</p>

          <div className="hero-cta">
            <a
              className="btn btn-solid"
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book a 20-minute call
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 11L11 1M11 1H4M11 1v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn-line" href="#work">
              See the work
            </a>
          </div>

          <div className="socials">
            {site.socials.map((s) => (
              <a
                key={s.label}
                className="social"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {s.label}
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 11L11 1M11 1H4M11 1v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <figure className="portrait-card">
          <div className="portrait-frame">
            <Image
              src="/portrait.jpg"
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 980px) 36vw, 92vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <figcaption className="portrait-cap">
            <span>
              <span className="portrait-name">{site.name}</span>
              <span className="portrait-role">{site.role}</span>
            </span>
            <span className="portrait-chip">{site.location}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
