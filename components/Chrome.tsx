"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { site } from "@/lib/content";
import BootIntro from "./BootIntro";
import A11yPanel, { DEFAULT_A11Y, type A11ySettings } from "./A11yPanel";

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
    } else {
      root.classList.add("js-reveal");
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
                <img src={s.logo} alt="" width={17} height={17} aria-hidden="true" />
              </a>
            ))}
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
            <div className="sb-tools">
              <button
                className={`sb-tool${theme === "light" ? " is-on" : ""}`}
                onClick={() => setTheme("light")}
                aria-label="Light mode"
                aria-pressed={theme === "light"}
                title="Light mode"
              >
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                className={`sb-tool${theme === "dark" ? " is-on" : ""}`}
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
                aria-pressed={theme === "dark"}
                title="Dark mode"
              >
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.5 12.4A7 7 0 017.6 3.5a7 7 0 108.9 8.9z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="sb-tool"
                onClick={() => setA11y(true)}
                aria-label="Accessibility settings"
                title="Accessibility settings"
              >
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="4.6" r="1.9" fill="currentColor" />
                  <path
                    d="M4 7.6h12M10 7.6v5M10 12.6l-3 4M10 12.6l3 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <span>
              © {new Date().getFullYear()} {site.name}.
              <br />
              All rights reserved.
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
