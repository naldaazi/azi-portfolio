"use client";

import { useEffect, useState } from "react";

const STEPS = [
  {
    app: "Sheets",
    label: "New row added",
    detail: "Meeting logged with name, date, time and joining link",
  },
  {
    app: "Formatter",
    label: "Date & time formatted",
    detail: "Normalised into the shape the email template expects",
  },
  {
    app: "Filter",
    label: "Booking validated",
    detail: "Skips blank rows and anything already sent",
  },
  {
    app: "Gmail",
    label: "Confirmation sent",
    detail: "Personalised email with the meeting details and link",
  },
  {
    app: "Delay",
    label: "Waits until 24h before",
    detail: "The run holds, then resumes on its own — no one chases it",
  },
  {
    app: "Gmail",
    label: "Reminder sent",
    detail: "Same details, shorter nudge, sent automatically",
  },
  {
    app: "Sheets",
    label: "Row marked confirmed",
    detail: "Status written back so nothing double-sends",
  },
];

export default function LiveFlow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setIndex(STEPS.length);
      setPlaying(false);
      return;
    }
    if (!playing) return;

    const timer = window.setInterval(() => {
      setIndex((v) => (v >= STEPS.length ? 0 : v + 1));
    }, 1150);

    return () => window.clearInterval(timer);
  }, [playing]);

  const pct = Math.round((Math.min(index, STEPS.length) / STEPS.length) * 100);
  const done = index >= STEPS.length;

  return (
    <div className="flow">
      <div className="flow-head">
        <span className="flow-title">
          <span className={`flow-live${playing && !done ? " is-on" : ""}`} />
          Meeting confirmation
        </span>
        <button
          className="flow-btn"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause the workflow" : "Replay the workflow"}
        >
          {playing && !done ? "Pause" : "Replay"}
        </button>
      </div>

      <div className="flow-bar" aria-hidden="true">
        <i style={{ width: `${done ? 100 : pct}%` }} />
      </div>

      <p className="flow-status" aria-live="polite">
        {done
          ? "Run complete · 15 Zapier steps, no manual input"
          : index === 0
            ? "Armed · 15 Zapier steps, grouped into 7 stages"
            : `Running · step ${index} of ${STEPS.length}`}
      </p>

      <ol className="flow-list">
        {STEPS.map((s, i) => {
          const state =
            i < index ? "is-done" : i === index ? "is-active" : "";
          return (
            <li className={`flow-step ${state}`} key={s.label}>
              <span className="flow-dot" aria-hidden="true">
                {i < index ? (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.3l2.6 2.6L10 3.3"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  String(i + 1)
                )}
              </span>
              <span>
                <span className="flow-app">{s.app}</span>
                <span className="flow-label">{s.label}</span>
                <span className="flow-detail">{s.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
