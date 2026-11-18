"use client";

import { useLayoutEffect } from "react";

/**
 * Reveals [data-reveal] sections as they enter the viewport.
 *
 * The `js-reveal` class is added here (after hydration, before paint) rather
 * than in the pre-paint script, so React never sees a mismatched <html> class.
 * No-JS users get the fully visible server-rendered page, which is what we want
 * for SEO and screen readers.
 */
export default function Reveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!items.length) return;

    const show = (el: Element) => el.classList.add("is-in");

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }

    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Anything already on screen should not animate in.
      if (rect.top < window.innerHeight * 0.92) show(el);
      else observer.observe(el);
    });

    // Safety net: never leave content hidden.
    const safety = window.setTimeout(() => items.forEach(show), 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
