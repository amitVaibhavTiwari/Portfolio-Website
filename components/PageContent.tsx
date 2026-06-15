"use client";
import { useEffect, useState } from "react";

export function PageContent({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("terminalBootDone", handler);
    return () => window.removeEventListener("terminalBootDone", handler);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      {children}
    </div>
  );
}
