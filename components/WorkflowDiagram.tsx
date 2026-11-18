import type { ReactNode } from "react";

/* Step glyphs that don't have a brand logo */
const G = {
  sliders: (
    <>
      <path d="M4 7h9M17 7h3M4 12h4M12 12h8M4 17h11M19 17h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" />
    </>
  ),
  funnel: (
    <path d="M3.5 5h17l-6.4 7.4V19l-4.2-2.1v-4.5L3.5 5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.4V12l3 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
};

type Step = {
  n: number;
  app: string;
  label: string;
  logo?: string;
  glyph?: ReactNode;
};

/* The real 15-step Zap, in order. */
const STEPS: Step[] = [
  { n: 1, app: "Calendly", label: "Invite created", logo: "/logos/calendly.svg" },
  { n: 2, app: "Formatter", label: "Date format", glyph: G.sliders },
  { n: 3, app: "Formatter", label: "Time · customer", glyph: G.sliders },
  { n: 4, app: "Formatter", label: "Time · executive", glyph: G.sliders },
  { n: 5, app: "Formatter", label: "Utilities mapping", glyph: G.sliders },
  { n: 6, app: "Sheets", label: "Create row", logo: "/logos/googlesheets.svg" },
  { n: 7, app: "Filter", label: "New only", glyph: G.funnel },
  { n: 8, app: "Gmail", label: "Email customer", logo: "/logos/gmail.svg" },
  { n: 9, app: "Gmail", label: "Email executive", logo: "/logos/gmail.svg" },
  { n: 10, app: "Sheets", label: "Update row", logo: "/logos/googlesheets.svg" },
  { n: 11, app: "Formatter", label: "Time reminder", glyph: G.sliders },
  { n: 12, app: "Delay", label: "Delay until", glyph: G.clock },
  { n: 13, app: "Filter", label: "Condition", glyph: G.funnel },
  { n: 14, app: "Filter", label: "Confirmed", glyph: G.funnel },
  { n: 15, app: "Gmail", label: "Send reminder", logo: "/logos/gmail.svg" },
];

/* Snake layout: 5 per row, alternating direction. */
const COLS = [10, 30, 50, 70, 90];
const ROWS = [21, 52, 82];

function place(step: Step) {
  const i = step.n - 1;
  const row = Math.floor(i / 5);
  const idx = i % 5;
  const col = row % 2 === 0 ? COLS[idx] : COLS[4 - idx];
  return { x: col, y: ROWS[row] };
}

export default function WorkflowDiagram() {
  return (
    <div className="wf-shell">
      <div className="wf-bar">
        <span className="wf-dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="wf-title">Automation Workflow</span>
        <span className="wf-badge">15 steps</span>
      </div>

      <div className="wf-scroll">
        <div className="wf-canvas">
          <svg
            className="wf-lines"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* row 1 → */}
            <path className="wf-wire" d="M175 130H225" />
            <path className="wf-wire" d="M375 130H425" />
            <path className="wf-wire" d="M575 130H625" />
            <path className="wf-wire" d="M775 130H825" />
            {/* elbow 1 ↓ */}
            <path className="wf-wire" d="M900 162V288" />
            {/* row 2 ← */}
            <path className="wf-wire" d="M825 320H775" />
            <path className="wf-wire" d="M625 320H575" />
            <path className="wf-wire" d="M425 320H375" />
            <path className="wf-wire" d="M225 320H175" />
            {/* elbow 2 ↓ */}
            <path className="wf-wire" d="M100 352V478" />
            {/* row 3 → */}
            <path className="wf-wire" d="M175 510H225" />
            <path className="wf-wire" d="M375 510H425" />
            <path className="wf-wire" d="M575 510H625" />
            <path className="wf-wire" d="M775 510H825" />
          </svg>

          {STEPS.map((s, i) => {
            const { x, y } = place(s);
            return (
              <div
                key={s.n}
                className="wf-node"
                style={{ left: `${x}%`, top: `${y}%`, ["--i" as string]: i }}
              >
                <span className="wf-icon" aria-hidden="true">
                  {s.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={s.logo} alt="" width={20} height={20} />
                  ) : (
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                      {s.glyph}
                    </svg>
                  )}
                </span>
                <span className="wf-label">
                  <b>{s.n}.</b> {s.label}
                </span>
                <span className="wf-sub">{s.app}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="wf-foot">
        <span className="wf-live" aria-hidden="true" />
        Live run · Calendly → Sheets → Gmail, no manual input
      </div>
    </div>
  );
}
