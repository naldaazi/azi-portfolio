"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { site } from "@/lib/content";
import BootIntro from "./BootIntro";
import A11yPanel, { DEFAULT_A11Y, type A11ySettings } from "./A11yPanel";

/** Monochrome social glyphs — single colour, drawn on one grid so they match. */
function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
        />
      </svg>
    );
  }

  if (label === "Upwork") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
        />
      </svg>
    );
  }

  if (label === "Email") {
    return (
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect
          x="1.8"
          y="4"
          width="16.4"
          height="12"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M2.8 5.4 10 10.8l7.2-5.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src="/logos/oj-logo-square.png" alt="" width={17} height={17} aria-hidden="true" />
  );
}

const NAV = [
  {
    label: "Home",
    href: "/",
    icon: (
      <>
        <path d="M3 8.5L10 3l7 5.5V17H3V8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    icon: (
      <>
        <path d="M3 6.5h5l1.5 2H17v8H3v-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Services",
    href: "/services",
    icon: (
      <>
        <path d="M10 3l7 3.5-7 3.5-7-3.5L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 10.5L10 14l7-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    icon: (
      <>
        <path d="M3 4h14v9H8l-4 3v-3H3V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <>
        <circle cx="10" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17c0-3.2 2.7-5 6-5s6 1.8 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <>
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 6.5L10 11l6.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Chrome({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [a11y, setA11y] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_A11Y);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") setTheme(saved);

      const raw = localStorage.getItem("a11y");
      if (raw) setSettings({ ...DEFAULT_A11Y, ...JSON.parse(raw) });
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

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

    const reduce =
      settings.motion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.remove("js-reveal");
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-in"));
    }

    try {
      localStorage.setItem("a11y", JSON.stringify(settings));
    } catch {}
  }, [settings]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setA11y(false);
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

      <div className="app">
        <aside className="sidebar">
          <div className="sb-avatar">
            <Image
              src="/portrait.jpg"
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              sizes="296px"
              style={{ objectFit: "cover", objectPosition: "center 16%" }}
            />
          </div>

          <p className="sb-name">
            {site.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2.2l2.3 2.1 3.1-.3 1 3 2.8 1.4-.8 3 .8 3-2.8 1.4-1 3-3.1-.3L12 21.8 9.7 19.7l-3.1.3-1-3L2.8 15.6l.8-3-.8-3 2.8-1.4 1-3 3.1.3L12 2.2z"
                fill="var(--accent-soft)"
              />
              <path
                d="M8.4 12.2l2.5 2.5 4.8-4.9"
                stroke="#fff"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <p className="sb-sub">
            <span className="sb-handle">{site.handle}</span> · {site.location}
          </p>

          <div className="sb-socials">
            {site.socials.map((s) => (
              <a
                key={s.label}
                className="social-dot"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                title={s.label}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SocialIcon label={s.label} />
              </a>
            ))}

            <button
              className="social-dot"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={
                theme === "light" ? "Switch to dark mode" : "Switch to light mode"
              }
              aria-pressed={theme === "dark"}
              title={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? (
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M16.5 12.4A7 7 0 017.6 3.5a7 7 0 108.9 8.9z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="3.4" fill="currentColor" />
                  <path
                    d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav className="sb-nav" aria-label="Sections">
            {NAV.map((n) => {
              const active =
                n.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`sb-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    {n.icon}
                  </svg>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="sb-foot">
            <button
              className="sb-a11y"
              onClick={() => setA11y(true)}
              aria-label="Accessibility settings"
              title="Accessibility settings"
            >
              <svg width="21" height="21" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="4.1" r="1.9" fill="currentColor" />
                <path
                  d="M4.3 7.6h11.4M10 7.6v4.9M10 12.5l-2.7 4.4M10 12.5l2.7 4.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <span>
              © {new Date().getFullYear()}
              <br />
              {site.name}. All rights reserved.
            </span>
          </div>
        </aside>

        <main className="stage" id="main">
          {children}
        </main>
      </div>

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
