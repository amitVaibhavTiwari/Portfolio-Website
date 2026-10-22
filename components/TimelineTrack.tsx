"use client";

import { useEffect, useRef, useState } from "react";

export function TimelineTrack({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const markerY = window.innerHeight * 0.6;
      const p = (markerY - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
      <div
        className="absolute left-6 top-0 w-0.5 h-full bg-foreground origin-top"
        style={{ transform: `scaleY(${progress})` }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
