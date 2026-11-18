import type { ReactNode } from "react";

const I = {
  bolt: (
    <path d="M13 3L6 15h5l-1 8 8-12h-5l0-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 7.5L12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0111 0c0 4 1.5 5.2 1.5 5.2H5S6.5 14 6.5 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10.2 18.6a2 2 0 003.6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  video: (
    <>
      <rect x="2.8" y="6" width="12.6" height="12" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.4 10.5l5.2-3v9l-5.2-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  check: (
    <path d="M5 12.5l4.2 4.2L19 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  hourglass: (
    <>
      <path d="M7 3.5h10M7 20.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 3.5c0 4 8 4.5 8 8.5s-8 4.5-8 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 3.5c0 4-8 4.5-8 8.5s8 4.5 8 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  x: (
    <>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h9M17 7h3M4 12h4M12 12h8M4 17h11M19 17h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
};

type Node = {
  id: string;
  label: string;
  sub: string;
  icon: ReactNode;
  x: number;
  y: number;
  tone?: "primary" | "ok" | "warn" | "bad";
};

const NODES: Node[] = [
  { id: "n1", label: "New Row", sub: "Sheets trigger", icon: I.bolt, x: 9, y: 20, tone: "primary" },
  { id: "n2", label: "Format Time", sub: "Formatter step", icon: I.sliders, x: 26, y: 20 },
  { id: "n3", label: "Validated", sub: "Filter check", icon: I.calendar, x: 43, y: 20 },
  { id: "n4", label: "Confirmation", sub: "Gmail sent", icon: I.mail, x: 60, y: 20 },
  { id: "n5", label: "24hr Wait", sub: "Delay step", icon: I.clock, x: 77, y: 20 },
  { id: "n6", label: "Reminder", sub: "Gmail sent", icon: I.bell, x: 94, y: 20 },

  { id: "b1", label: "Confirmed", sub: "Row updated", icon: I.check, x: 26, y: 70, tone: "ok" },
  { id: "b2", label: "No-show", sub: "Follow-up queued", icon: I.hourglass, x: 60, y: 70, tone: "warn" },
  { id: "b3", label: "Closed out", sub: "Archived", icon: I.x, x: 94, y: 70, tone: "bad" },
];

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
            viewBox="0 0 1000 460"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* main row */}
            <path className="wf-wire" d="M124 92H226" />
            <path className="wf-wire" d="M294 92H396" />
            <path className="wf-wire" d="M464 92H566" />
            <path className="wf-wire" d="M634 92H736" />
            <path className="wf-wire" d="M804 92H906" />

            {/* reschedule loop back to validated */}
            <path
              className="wf-wire wf-wire--alt"
              d="M940 132C940 196 430 196 430 132"
            />

            {/* branches down */}
            <path className="wf-wire wf-wire--branch" d="M940 150C940 260 260 250 260 320" />
            <path className="wf-wire wf-wire--branch" d="M930 160C930 250 600 246 600 320" />
            <path className="wf-wire wf-wire--branch" d="M940 150C940 210 940 260 940 320" />
          </svg>

          <span className="wf-loop-label">Booking rescheduled</span>

          {NODES.map((n, i) => (
            <div
              key={n.id}
              className={`wf-node wf-node--${n.tone ?? "default"}`}
              style={{ left: `${n.x}%`, top: `${n.y}%`, ["--i" as string]: i }}
            >
              <span className="wf-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {n.icon}
                </svg>
              </span>
              <span className="wf-label">{n.label}</span>
              <span className="wf-sub">{n.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
