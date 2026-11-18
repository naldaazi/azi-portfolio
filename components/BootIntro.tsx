"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

const FLOW = ["Enquiries", "Triage", "Scheduled", "Handled"];

export default function BootIntro() {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (root.getAttribute("data-boot") !== "1") return;

    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      root.getAttribute("data-motion") === "reduce";

    if (reduce) {
      root.removeAttribute("data-boot");
      sessionStorage.setItem("intro", "1");
      return;
    }

    setActive(true);
    timer.current = window.setTimeout(() => dismiss(), 2900);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    if (timer.current) window.clearTimeout(timer.current);
    document.documentElement.removeAttribute("data-boot");
    try {
      sessionStorage.setItem("intro", "1");
    } catch {}
    setDone(true);
    window.setTimeout(() => setActive(false), 700);
  }

  if (!active) return null;

  return (
    <div className={`boot${done ? " is-done" : ""}`} aria-hidden="true">
      <div className="boot-inner">
        <div className="boot-words">
          {site.introWords.map((w, i) => (
            <span
              className={`boot-word${i === site.introWords.length - 1 ? " dim" : ""}`}
              key={w + i}
            >
              <span style={{ ["--d" as string]: `${i * 0.11}s` }}>{w}</span>
            </span>
          ))}
        </div>

        <div className="boot-flow">
          {FLOW.map((label, i) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: "inherit" }}
            >
              {i > 0 && <span className="boot-link" />}
              <span className={`boot-node${i === 3 ? " is-on" : ""}`}>
                <i>{i < 3 ? "✓" : "→"}</i>
                <b>{label}</b>
              </span>
            </div>
          ))}
        </div>

        <div className="boot-status">
          <span className="pulse" />
          Running operations
        </div>
      </div>

      <button className="boot-skip" onClick={dismiss}>
        Skip
      </button>
    </div>
  );
}
