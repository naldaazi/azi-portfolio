"use client";

import { useCallback, useEffect, useState } from "react";
import { site, explore } from "@/lib/content";
import BootIntro from "./BootIntro";
import A11yPanel, { DEFAULT_A11Y, type A11ySettings } from "./A11yPanel";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Chrome() {
  const [menu, setMenu] = useState(false);
  const [a11y, setA11y] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_A11Y);

  /* Restore saved preferences on mount */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("a11y");
      if (raw) setSettings({ ...DEFAULT_A11Y, ...JSON.parse(raw) });
    } catch {}
  }, []);

  /* Push preferences onto <html> */
  useEffect(() => {
    const root = document.documentElement;
    const set = (attr: string, on: boolean, value = "") => {
      if (on) root.setAttribute(attr, value);
      else root.removeAttribute(attr);
    };
    set("data-size", settings.size !== "sm", settings.size);
    set("data-contrast", settings.contrast, "high");
    set("data-motion", settings.motion, "reduce");
    set("data-links", settings.links, "under");

    /* Scroll reveal only runs when motion is allowed */
    const reduce =
      settings.motion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.remove("js-reveal");
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-in"));
    } else {
      root.classList.add("js-reveal");
    }
    try {
      localStorage.setItem("a11y", JSON.stringify(settings));
    } catch {}
  }, [settings]);

  /* Lock scroll while an overlay is open */
  useEffect(() => {
    const locked = menu || a11y;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, a11y]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setA11y(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const update = useCallback(
    <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) =>
      setSettings((s) => ({ ...s, [key]: value })),
    [],
  );

  const reset = useCallback(() => {
    setSettings(DEFAULT_A11Y);
    try {
      localStorage.removeItem("a11y");
    } catch {}
  }, []);

  return (
    <>
      <BootIntro />

      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="pbar">
        <a href="#top" className="brand" aria-label={`${site.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {initials(site.name)}
          </span>
          <span className="brand-words">
            <span className="brand-name">{site.name}</span>
            <span className="brand-handle">{site.handle}</span>
          </span>
        </a>

        <nav className="bar-links" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="bar-link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="bar-actions">
          <button
            className="icon-btn desk-only"
            onClick={() => setA11y(true)}
            aria-label="Accessibility settings"
            title="Accessibility settings"
          >
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Aa
            </span>
          </button>
          <a className="btn btn-solid desk-only" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Book a call
          </a>
          <button
            className="icon-btn mob-only"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            aria-expanded={menu}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M0 1h16M0 6h16M0 11h16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`drawer-scrim${menu ? " is-open" : ""}`}
        onClick={() => setMenu(false)}
        aria-hidden="true"
      />
      <aside className={`drawer${menu ? " is-open" : ""}`} aria-hidden={!menu}>
        <nav aria-label="Mobile sections">
          {explore.map((e) => (
            <a
              key={e.n}
              href={e.slug}
              className="drawer-link"
              onClick={() => setMenu(false)}
            >
              <span>
                {e.name}
                <span
                  style={{
                    display: "block",
                    fontSize: 11.5,
                    color: "var(--text-faint)",
                  }}
                >
                  {e.note}
                </span>
              </span>
              <span className="drawer-n">{e.n}</span>
            </a>
          ))}
        </nav>

        <div className="drawer-foot">
          <a
            className="btn btn-solid"
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%" }}
          >
            Book a 20-minute call
          </a>
          <button
            className="btn btn-line"
            onClick={() => {
              setMenu(false);
              setA11y(true);
            }}
            style={{ width: "100%" }}
          >
            Accessibility settings
          </button>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            {site.email}
          </a>
        </div>
      </aside>

      <A11yPanel
        open={a11y}
        settings={settings}
        update={update}
        reset={reset}
        onClose={() => setA11y(false)}
      />
    </>
  );
}
