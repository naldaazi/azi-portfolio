/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING IN THIS ONE FILE.
 *  Every word on the site comes from here — no component edits needed.
 * ─────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  index: string;
  kind: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  problem: string;
  approach: readonly string[];
  result: string;
  metrics: readonly { value: string; label: string }[];
  tools: readonly string[];
};

export const site = {
  // ── Identity ─────────────────────────────────────────────
  name: "Azi Nalda",
  handle: "@azinalda",
  role: "Executive Assistant & Operations Specialist",
  location: "Manila · GMT+8",
  availability: "Available for new clients",
  email: "casimiro.en@gmail.com",
  bookingUrl: "https://calendly.com/casimiro-en/1-1-30-minute-discovery-call",

  // ── Hero ─────────────────────────────────────────────────
  headline: [{ text: "Nothing" }, { text: "falls through.", accent: true }],
  lede: "I keep founders organized, supported, and moving — personally and operationally. Inbox, calendar, research, meeting prep, workflow systems and SOPs: the work that has to happen consistently so you can lead.",
  introWords: ["Nothing", "falls", "through.", "Ever."],

  // ── Socials ──────────────────────────────────────────────
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/azi-edson-nalda-b1a6783a8/",
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~017ae9f9e749ecfd5f",
    },
    {
      label: "OnlineJobs",
      href: "https://www.onlinejobs.ph/jobseekers/info/4693548",
    },
    { label: "Email", href: "mailto:casimiro.en@gmail.com" },
  ],

  // ── Proof numbers ────────────────────────────────────────
  stats: [
    { value: "5 hrs+", label: "Admin time reclaimed weekly" },
    { value: "2", label: "Founders supported with systems" },
    { value: "3", label: "Systems built: inbox, calendar, workflows" },
    { value: "100%", label: "Client retention" },
  ],

  // ── Pain points ──────────────────────────────────────────
  pain: {
    title: "Sound familiar?",
    points: [
      "Your inbox is running you, not the other way around.",
      "You're sending the same follow-ups by hand, every week.",
      "Tasks live in three different places — and still get missed.",
      "Your calendar is full, but your priorities aren't moving.",
      "You need things researched, booked and handled, with no one reliable to do it.",
    ],
    turn: "This isn't a productivity problem. It's a systems problem — and it's fixable.",
  },

  // ── About ────────────────────────────────────────────────
  about: {
    eyebrow: "About",
    title: "Hi, I'm Azi.",
    paragraphs: [
      "I handle the executive and operational layer for founders — inboxes, calendars, research, meeting prep, workflow systems, and the SOPs that keep all of it from unravelling.",
      "At EXP Solutions I managed shared inboxes, built workflow tracking systems, coordinated team schedules, and turned meeting discussions into documented action items across multiple concurrent projects.",
      "My approach is simple: audit what's breaking, build the system that fixes it, and make sure it runs without you watching it.",
    ],
  },

  // ── The method ───────────────────────────────────────────
  approach: [
    { k: "Audit", d: "Find where work actually leaks." },
    { k: "Structure", d: "Give it an owner, a stage, a rule." },
    { k: "Streamline", d: "Remove steps instead of speeding them up." },
    { k: "Support", d: "Run it, and keep it running." },
  ],

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      title: "Inbox & Communication",
      blurb:
        "Inbox structure, email handling and follow-up workflows that cut the clutter and make every message actionable.",
      points: [
        "Labels, priority flags & filters",
        "Daily triage routine",
        "Reply templates",
        "Follow-up tracking",
      ],
    },
    {
      title: "Calendar & Scheduling",
      blurb:
        "Scheduling, coordination, reminders and meeting management structured around how you actually work.",
      points: [
        "Focus blocks & buffers",
        "Booking rules",
        "Meeting prep briefs",
        "Reminders that fire",
      ],
    },
    {
      title: "Workflow & Task Systems",
      blurb:
        "Task tracking and operational visibility in ClickUp or Notion, so status is never a conversation.",
      points: [
        "Owners, deadlines, statuses",
        "Custom workflow stages",
        "Weekly reporting view",
        "Archive & records",
      ],
    },
    {
      title: "Automation & SOPs",
      blurb:
        "Simple automations and written processes that remove repetitive admin work and manual follow-ups.",
      points: [
        "Zapier automations",
        "SOP documentation",
        "Checklists & handoffs",
        "Handover-ready docs",
      ],
    },
    {
      title: "Executive & Personal Support",
      blurb:
        "The day-to-day layer: research, recommendations, meeting preparation, travel coordination, and the small things that matter.",
      points: [
        "Research & options",
        "Meeting preparation",
        "Travel coordination",
        "Inbox & calendar cover",
      ],
    },
    {
      title: "Operations Audit",
      blurb:
        "A short, structured pass over your operations to find where work leaks — with a written plan to close it.",
      points: [
        "Workflow walkthrough",
        "Bottleneck map",
        "Prioritised fix list",
        "No obligation to continue",
      ],
    },
  ],

  // ── Projects ─────────────────────────────────────────────
  projects: [
    {
      slug: "meeting-confirmation-automation",
      index: "01",
      kind: "Client work",
      title: "Meeting confirmations that send themselves",
      client: "EXP Solutions",
      year: "2025",
      summary:
        "Every confirmation written by hand, one at a time. Follow-ups slipped, and some never went out at all.",
      problem:
        "Confirmations were copy-pasted individually for every meeting. Follow-ups were delayed or missed entirely, and hours each week disappeared into communication that should have been instant.",
      approach: [
        "Mapped the full sequence a confirmation actually needs — all fifteen steps.",
        "Connected Google Sheets to Gmail through Zapier so a logged meeting triggers the chain.",
        "Pulled name, time, date and link from the row into a personalised email template.",
        "Added a follow-up reminder that fires automatically 24 hours before the meeting.",
      ],
      result:
        "Five or more hours of manual admin removed every week, and no confirmation has been missed since it went live.",
      metrics: [
        { value: "5+ hrs", label: "Manual work removed weekly" },
        { value: "0", label: "Missed confirmations" },
        { value: "15", label: "Steps automated" },
      ],
      tools: ["Google Sheets", "Zapier", "Gmail"],
    },
    {
      slug: "operational-workflow-system",
      index: "02",
      kind: "Client work",
      title: "One source of truth for the whole operation",
      client: "EXP Solutions",
      year: "2025",
      summary:
        "Tasks lived in emails, chat threads and memory. Nothing had an owner, a deadline or a status.",
      problem:
        "The team was reactive, always catching up and never ahead. Work arrived through several channels and disappeared into whichever one the person happened to be looking at.",
      approach: [
        "Structured a ClickUp workspace around how the business actually operates, not a generic to-do list.",
        "Gave every task an owner, a priority, a deadline and a status anyone can read at a glance.",
        "Built custom workflow stages so progress was visible without asking.",
        "Archived completed work for records and reporting.",
      ],
      result:
        "The team went from reactive to organized inside the first week, and status-chasing stopped being part of the day.",
      metrics: [
        { value: "1 wk", label: "From scattered to structured" },
        { value: "0", label: "Status-chasing threads" },
        { value: "1", label: "Source of truth" },
      ],
      tools: ["ClickUp", "Google Workspace"],
    },
    {
      slug: "inbox-management-system",
      index: "03",
      kind: "Client work",
      title: "An inbox that stays actionable",
      client: "Founder, small team",
      year: "2024",
      summary:
        "Hundreds of unread emails, no labels, no priority — important messages buried under noise.",
      problem:
        "Every message landed in one place with no system behind it. Decisions were delayed because the message that mattered sat underneath forty that didn't.",
      approach: [
        "Triaged the backlog into categories that matched real decisions, not generic folders.",
        "Built labels by category, priority flags, and filters that keep the structure intact.",
        "Wrote one triage rule: every email is actionable in under 30 seconds.",
        "Set a repeatable daily sweep so the inbox never rebuilds itself.",
      ],
      result:
        "An inbox that stays organised after the clean-up — important threads surface first, and nothing sits unread for days.",
      metrics: [
        { value: "30 sec", label: "To action any email" },
        { value: "100%", label: "Labelled & prioritised" },
        { value: "Daily", label: "Sweep, not scramble" },
      ],
      tools: ["Gmail", "Google Workspace"],
    },
    {
      slug: "calendar-management-system",
      index: "04",
      kind: "Client work",
      title: "A calendar built around priorities",
      client: "Founder, small team",
      year: "2024",
      summary:
        "Full of meetings, no focus blocks, no buffers, and no sense of which week mattered.",
      problem:
        "The calendar reflected everyone else's requests. Back-to-back calls filled the day, focus work got pushed to evenings, and priorities were invisible until they were urgent.",
      approach: [
        "Rebuilt the week around the founder's actual goals rather than incoming requests.",
        "Colour-coded meetings by category so the week reads at a glance.",
        "Protected focus blocks and added buffer time between calls.",
        "Consolidated meetings into predictable windows instead of all-day scatter.",
      ],
      result:
        "A calendar that shows its priorities before you open it, with focus time that survives the week.",
      metrics: [
        { value: "2+", label: "Protected focus blocks" },
        { value: "0", label: "No-buffer days" },
        { value: "Weekly", label: "Clarity at a glance" },
      ],
      tools: ["Google Calendar", "Calendly"],
    },
  ] as Project[],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Azi played a key role in keeping our operations organized and efficient. From managing workflows to handling follow-ups consistently, her support helped create smoother day-to-day operations for our team.",
      name: "Jenny Divina",
      role: "Co-Owner, EXP Solutions",
    },
    {
      quote:
        "Azi was instrumental in helping our operations stay organized and running smoothly. Her ability to manage workflows, maintain consistent follow-ups, and support daily operations brought a level of structure our team truly valued.",
      name: "Natasha Botbijl",
      role: "CEO, EXP Solutions",
    },
  ],

  // ── Tools ────────────────────────────────────────────────
  tools: [
    { name: "Google Workspace", level: "Advanced" },
    { name: "ClickUp", level: "Advanced" },
    { name: "Notion", level: "Advanced" },
    { name: "Calendly", level: "Advanced" },
    { name: "Zoom", level: "Advanced" },
    { name: "Google Sheets", level: "Advanced" },
    { name: "Zapier", level: "Intermediate" },
    { name: "Slack", level: "Working" },
    { name: "Canva", level: "Working" },
  ],
};

export const explore = [
  { n: "01", name: "Projects", slug: "#work", note: "Four builds, start to finish" },
  { n: "02", name: "Services", slug: "#services", note: "What I take off your plate" },
  { n: "03", name: "Testimonials", slug: "#words", note: "From the people I've worked with" },
  { n: "04", name: "About", slug: "#about", note: "How I work, and why" },
  { n: "05", name: "Contact", slug: "#contact", note: "Book a 20-minute call" },
];
