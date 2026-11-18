import Image from "next/image";
import {
  ArrowUpRight,
  TrendUp,
  SquaresFour,
  Kanban,
  Tray,
  CalendarBlank,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { projectShot } from "@/lib/shots";
import {
  MockSheet,
  MockPlan,
  MockBoard,
  MockInbox,
  MockWeek,
} from "./Mocks";

/** Shows the real screenshot if one exists, otherwise the illustrative mock. */
function Shot({
  src,
  alt,
  fallback,
}: {
  src: string | null;
  alt: string;
  fallback: React.ReactNode;
}) {
  if (!src) return <>{fallback}</>;
  return (
    <div className="pcard-shot">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1100px) 420px, (min-width: 760px) 45vw, 90vw"
        style={{ objectFit: "cover", objectPosition: "top left" }}
      />
    </div>
  );
}

function Arrow({ size = 11 }: { size?: number }) {
  return <ArrowUpRight size={size} weight="bold" aria-hidden="true" />;
}

const bySlug = (slug: string) => site.projects.find((p) => p.slug === slug)!;

export default function ProjectGallery() {
  const automation = bySlug("meeting-confirmation-automation");
  const workflow = bySlug("operational-workflow-system");
  const inbox = bySlug("inbox-management-system");
  const calendar = bySlug("calendar-management-system");

  const shots = {
    automation: projectShot(automation.slug),
    workflow: projectShot(workflow.slug),
    inbox: projectShot(inbox.slug),
    calendar: projectShot(calendar.slug),
  };

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
              <TrendUp size={15} weight="bold" />
            </span>
            <span>
              <span className="pcard-eyebrow">01 Â· {automation.kind}</span>
              <h2 className="pcard-title">Automations</h2>
            </span>
          </div>
          <p className="pcard-desc">
            Real screens from the workflows I build â€” here, confirmations that
            send themselves the moment a meeting is logged.
          </p>
          <div className="pcard-mock">
            <Shot
              src={shots.automation}
              alt={`${automation.title} â€” automation screen`}
              fallback={<MockSheet />}
            />
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
              <SquaresFour size={15} weight="bold" />
            </span>
            <span>
              <span className="pcard-eyebrow">The build plan</span>
              <h2 className="pcard-title">Before the clicks</h2>
            </span>
          </div>
          <p className="pcard-desc">
            Every automation starts as a written plan â€” triggers, waits and the
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
              <Kanban size={15} weight="bold" />
            </span>
            <span>
              <span className="pcard-eyebrow">02 Â· {workflow.kind}</span>
              <h2 className="pcard-title">Workflow systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{workflow.summary}</p>
          <div className="pcard-mock">
            <Shot
              src={shots.workflow}
              alt={`${workflow.title} â€” workflow board`}
              fallback={<MockBoard />}
            />
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
              <Tray size={15} weight="bold" />
            </span>
            <span>
              <span className="pcard-eyebrow">03 Â· {inbox.kind}</span>
              <h2 className="pcard-title">Inbox systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{inbox.summary}</p>
          <div className="pcard-mock">
            <Shot
              src={shots.inbox}
              alt={`${inbox.title} â€” inbox layout`}
              fallback={<MockInbox />}
            />
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
              <CalendarBlank size={15} weight="bold" />
            </span>
            <span>
              <span className="pcard-eyebrow">04 Â· {calendar.kind}</span>
              <h2 className="pcard-title">Calendar systems</h2>
            </span>
          </div>
          <p className="pcard-desc">{calendar.summary}</p>
          <div className="pcard-mock">
            <Shot
              src={shots.calendar}
              alt={`${calendar.title} â€” calendar layout`}
              fallback={<MockWeek />}
            />
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
