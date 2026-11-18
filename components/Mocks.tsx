/* Lightweight UI mockups drawn in markup — no screenshots needed. */

export function MockSheet() {
  return (
    <div className="mock">
      <div className="mock-line">
        <span className="mock-tab">Meetings</span>
        <span className="mock-tab is-dim">Confirmed</span>
        <span className="mock-pill mock-pill--ok">Live</span>
      </div>
      {[
        ["Kickoff call", "Mon 09:00", "Sent"],
        ["Pipeline review", "Tue 14:30", "Sent"],
        ["Client onboarding", "Wed 11:00", "Sent"],
        ["Follow-up", "Thu 16:15", "Queued"],
      ].map(([name, when, state]) => (
        <div className="mock-row" key={name}>
          <span className="mock-cell mock-cell--wide">{name}</span>
          <span className="mock-cell">{when}</span>
          <span className={`mock-pill${state === "Sent" ? " mock-pill--ok" : ""}`}>
            {state}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MockPlan() {
  return (
    <div className="mock">
      <span className="mock-eyebrow">Automation plan</span>
      <b className="mock-title">The full confirmation flow</b>
      <div className="mock-steps">
        <span className="mock-step">Trigger</span>
        <span className="mock-step">Wait</span>
        <span className="mock-step">Send</span>
        <span className="mock-step is-on">Follow-up</span>
      </div>
      <div className="mock-bar">
        <i />
      </div>
      <span className="mock-foot">15 steps · runs on its own</span>
    </div>
  );
}

export function MockBoard() {
  return (
    <div className="mock">
      <div className="mock-cols">
        {["Inbox", "Doing", "Done"].map((col, i) => (
          <div className="mock-col" key={col}>
            <span className="mock-colhead">{col}</span>
            <span className="mock-card" />
            <span className="mock-card" style={{ width: i === 2 ? "70%" : "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockInbox() {
  return (
    <div className="mock">
      {[
        ["Supplier invoice", "Finance", true],
        ["Client request", "Action", true],
        ["Newsletter", "Later", false],
        ["Meeting notes", "Filed", false],
      ].map(([subject, label, hot]) => (
        <div className="mock-row" key={subject as string}>
          <span className={`mock-dot${hot ? "" : " is-dim"}`} />
          <span className="mock-cell mock-cell--wide">{subject}</span>
          <span className={`mock-pill${hot ? " mock-pill--ok" : ""}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function MockWeek() {
  return (
    <div className="mock">
      <div className="mock-week">
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <div className="mock-day" key={i}>
            <span className="mock-dayhead">{d}</span>
            <span className="mock-slot" style={{ opacity: i === 2 ? 1 : 0.55 }} />
            <span className="mock-slot" style={{ opacity: 0.35 }} />
            <span className="mock-slot" style={{ opacity: i === 1 ? 0.8 : 0.25 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
