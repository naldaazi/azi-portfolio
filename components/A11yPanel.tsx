"use client";

export type A11ySettings = {
  size: "sm" | "lg" | "xl";
  contrast: boolean;
  motion: boolean;
  links: boolean;
};

export const DEFAULT_A11Y: A11ySettings = {
  size: "sm",
  contrast: false,
  motion: false,
  links: false,
};

type Props = {
  open: boolean;
  settings: A11ySettings;
  update: <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => void;
  reset: () => void;
  onClose: () => void;
};

const SIZES: { key: A11ySettings["size"]; label: string }[] = [
  { key: "sm", label: "A" },
  { key: "lg", label: "A+" },
  { key: "xl", label: "A++" },
];

const TOGGLES: {
  key: "contrast" | "motion" | "links";
  label: string;
  note: string;
}[] = [
  { key: "contrast", label: "High contrast", note: "Brighter text, stronger edges" },
  { key: "motion", label: "Reduce motion", note: "No animation or drift" },
  { key: "links", label: "Underline links", note: "Every link gets a line" },
];

export default function A11yPanel({ open, settings, update, reset, onClose }: Props) {
  return (
    <>
      <div
        className={`a11y-scrim${open ? " is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`a11y${open ? " is-open" : ""}`}
        role="dialog"
        aria-label="Accessibility settings"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="a11y-head">
          <span className="a11y-title">Accessibility</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close settings">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="a11y-group">
          <span className="a11y-label">Text size</span>
          <div className="a11y-sizes">
            {SIZES.map((s) => (
              <button
                key={s.key}
                className={`a11y-size${settings.size === s.key ? " is-on" : ""}`}
                onClick={() => update("size", s.key)}
                aria-pressed={settings.size === s.key}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="a11y-group">
          {TOGGLES.map((t) => (
            <button
              key={t.key}
              className="a11y-switch"
              aria-pressed={settings[t.key]}
              onClick={() => update(t.key, !settings[t.key])}
            >
              <span className="a11y-switch-text">
                {t.label}
                <small>{t.note}</small>
              </span>
              <span className="toggle" aria-hidden="true" />
            </button>
          ))}
        </div>

        <button className="a11y-reset" onClick={reset}>
          Reset to default
        </button>
      </div>
    </>
  );
}
