const COLUMNS = [
  {
    name: "To do",
    tone: "todo",
    cards: [
      { title: "Draft onboarding checklist", date: "May 16", priority: "High", tag: "sop" },
      { title: "Write weekly report template", date: "May 18", priority: "Med", tag: "reporting" },
    ],
  },
  {
    name: "In progress",
    tone: "doing",
    cards: [
      { title: "Inbox labels & filters", date: "May 15", priority: "High", tag: "inbox" },
      { title: "Calendar focus blocks", date: "May 16", priority: "Med", tag: "calendar" },
    ],
  },
  {
    name: "For approval",
    tone: "review",
    cards: [
      { title: "SOP: meeting follow-ups", date: "May 16", priority: "High", tag: "sop" },
    ],
  },
  {
    name: "Completed",
    tone: "done",
    cards: [
      { title: "Meeting confirmation automation", date: "May 11", priority: "High", tag: "zapier" },
      { title: "Client onboarding flow", date: "May 09", priority: "Med", tag: "workflow" },
    ],
  },
  {
    name: "Archive",
    tone: "archive",
    cards: [{ title: "Research CRM options", date: "May 03", priority: "Low", tag: "research" }],
  },
];

export default function BoardMock() {
  return (
    <div className="board-wrap">
      <div className="board">
        {COLUMNS.map((col) => (
          <div className={`board-col board-col--${col.tone}`} key={col.name}>
            <div className="board-head">
              <span className="board-name">{col.name}</span>
              <span className="board-count">{col.cards.length}</span>
            </div>

            {col.cards.map((c) => (
              <div className="board-card" key={c.title}>
                <span className="board-title">{c.title}</span>
                <span className="board-meta">
                  <i className="board-av" aria-hidden="true">
                    AN
                  </i>
                  <span className="board-date">{c.date}</span>
                  <span className={`board-flag board-flag--${c.priority.toLowerCase()}`}>
                    {c.priority}
                  </span>
                  <span className="board-tag">{c.tag}</span>
                </span>
              </div>
            ))}

            <span className="board-add">+ Add task</span>
          </div>
        ))}
      </div>
      <p className="board-note">
        Illustrative board — the structure and workflow I set up, not client data.
      </p>
    </div>
  );
}
