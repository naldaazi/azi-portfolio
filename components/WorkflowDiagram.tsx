import type { ReactNode } from "react";
import { SlidersHorizontal, Funnel, Clock } from "@phosphor-icons/react/dist/ssr";

/* Step glyphs that don't have a brand logo */
const G = {
  sliders: <SlidersHorizontal size={20} weight="bold" />,
  funnel: <Funnel size={20} weight="bold" />,
  clock: <Clock size={20} weight="bold" />,
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
                    s.glyph
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
