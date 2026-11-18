"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] sections as they enter the viewport.
 * - No-JS: everything stays visible (the hidden state only applies with .js-reveal).
 * - Reduced motion: skipped entirely.
 * - Safety net: anything still hidden after 3s is revealed anyway.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-reveal")) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!items.length) return;

    const show = (el: Element) => el.classList.add("is-in");

    if (!("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }

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
      // Anything already on screen at load should not animate in.
      if (rect.top < window.innerHeight * 0.92) show(el);
      else observer.observe(el);
    });

    const safety = window.setTimeout(() => items.forEach(show), 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
