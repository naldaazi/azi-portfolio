import { site } from "@/lib/content";
import {
  MockSheet,
  MockPlan,
  MockBoard,
  MockInbox,
  MockWeek,
} from "./Mocks";

function Arrow({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 1h8v8M11 1L1 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const bySlug = (slug: string) => site.projects.find((p) => p.slug === slug)!;

export default function ProjectGallery() {
  const automation = bySlug("meeting-confirmation-automation");
  const workflow = bySlug("operational-workflow-system");
  const inbox = bySlug("inbox-management-system");
  const calendar = bySlug("calendar-management-system");

  return (
    <div className="proj-hero">
      <span className="proj-hint">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M6 1v10M1 6h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Click a card to open it
      </span>

      <div className="proj-grid">
        {/* Feature */}
        <a
          className="pcard pcard-wide"
          href={`/projects/${automation.slug}`}
          data-reveal
        >
          <div className="pcard-top">
            <span className="pcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 11.5l3.6-3.6 2.4 2.4L14 4.3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.3h4v4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <span className="pcard-eyebrow">01 · {automation.kind}</span>
              <h2 className="pcard-title">Automations</h2>
            </span>
          </div>
          <p className="pcard-desc">
            Real screens from the workflows I build — here, confirmations that
            send themselves the moment a meeting is logged.
          </p>
          <div className="pcard-mock">
            <MockSheet />
          </div>
          <span className="pcard-more">
            Walk the build
            <Arrow size={10} />
          </span>
        </a>

        {/* Build plan */}
        <div className="pcard" data-reveal>
          <div className="pcard-top">
            <span className="pcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="9" y="9" width="5" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 4.5h2.5a2 2 0 012 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span>
              <span className="pcard-eyebrow">The build plan</span>
              <h2 className="pcard-title">Before the clicks</h2>
            </span>
          </div>
          <p className="pcard-desc">
            Every automation starts as a written plan — triggers, waits and the
            one step people forget.
          </p>
          <div className="pcard-mock">
            <MockPlan />
          </div>
        </div>

        {/* Workflow */}
        <a className="pcard" href={`/projects/${workflow.slug}`} data-reveal>
          <div className="pcard-top">
            <span className="pcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="3.6" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                <rect x="6.2" y="3" width="3.6" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
                <rect x="10.4" y="3" width="3.6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <span>
              <span className="pcard-eyebrow">02 · {workflow.kind}</span>
              <h2 className="pcard-title">Workflow systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{workflow.summary}</p>
          <div className="pcard-mock">
            <MockBoard />
          </div>
          <span className="pcard-more">
            Open case study
            <Arrow size={10} />
          </span>
        </a>

        {/* Inbox */}
        <a className="pcard" href={`/projects/${inbox.slug}`} data-reveal>
          <div className="pcard-top">
            <span className="pcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M1.6 9.2L4 4.2h8l2.4 5v3.2H1.6V9.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M1.6 9.2h3.2l.9 1.6h4.6l.9-1.6h3.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <span className="pcard-eyebrow">03 · {inbox.kind}</span>
              <h2 className="pcard-title">Inbox systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{inbox.summary}</p>
          <div className="pcard-mock">
            <MockInbox />
          </div>
          <span className="pcard-more">
            Open case study
            <Arrow size={10} />
          </span>
        </a>

        {/* Calendar */}
        <a className="pcard" href={`/projects/${calendar.slug}`} data-reveal>
          <div className="pcard-top">
            <span className="pcard-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3.4" width="12" height="10.6" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 6.6h12M5.4 1.8v3M10.6 1.8v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span>
              <span className="pcard-eyebrow">04 · {calendar.kind}</span>
              <h2 className="pcard-title">Calendar systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{calendar.summary}</p>
          <div className="pcard-mock">
            <MockWeek />
          </div>
          <span className="pcard-more">
            Open case study
            <Arrow size={10} />
          </span>
        </a>
      </div>
    </div>
  );
}
