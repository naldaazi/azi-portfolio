"use client";

import { useEffect, useState } from "react";

/**
 * Thin progress line at the top of the content panel.
 * Tracks the `.stage` scroller on desktop and the window on mobile.
 */
export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const stage = document.querySelector<HTMLElement>(".stage");

    const compute = () => {
      const docEl = document.documentElement;
      const stageScrollable = stage && stage.scrollHeight > stage.clientHeight + 8;

      const top = stageScrollable ? stage!.scrollTop : window.scrollY;
      const max = stageScrollable
        ? stage!.scrollHeight - stage!.clientHeight
        : docEl.scrollHeight - window.innerHeight;

      setP(max > 4 ? Math.min(1, Math.max(0, top / max)) : 0);
    };

    compute();
    stage?.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);

    return () => {
      stage?.removeEventListener("scroll", compute);
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <i style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
