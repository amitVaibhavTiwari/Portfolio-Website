"use client";
import { useEffect, useState } from "react";

type LineType =
  | "title"
  | "divider"
  | "blank"
  | "step"
  | "info"
  | "kv"
  | "ready"
  | "prompt";

type Line = {
  text: string;
  type: LineType;
  tag?: string;
  suffix?: string;
  delay: number;
};

const LINES: Line[] = [
  {
    text: "amitvaibhavtiwari.dev — boot sequence initiated",
    type: "title",
    delay: 0,
  },
  {
    text: "─────────────────────────────────────────────────────",
    type: "divider",
    delay: 110,
  },
  { text: "", type: "blank", delay: 200 },

  {
    text: "Initializing runtime environment...",
    tag: "SYS",
    suffix: "[  OK  ]",
    type: "step",
    delay: 300,
  },
  {
    text: "V8 v12.4.254.20 — Turbofan JIT armed, Maglev tier ready...",
    tag: "V8 ",
    suffix: "[  OK  ]",
    type: "step",
    delay: 420,
  },
  {
    text: "Loading personal profile & portfolio data...",
    tag: "SYS",
    suffix: "[  OK  ]",
    type: "step",
    delay: 540,
  },
  {
    text: "Securing your connection, end-to-end...",
    tag: "SEC",
    suffix: "[  OK  ]",
    type: "step",
    delay: 660,
  },
  { text: "", type: "blank", delay: 760 },

  {
    text: "Bundle verified — 6 chunks  84.2 kB gzip  0 collisions...",
    tag: "APP",
    suffix: "[  OK  ]",
    type: "step",
    delay: 880,
  },
  {
    text: "CSP enforced  SRI verified  HSTS: max-age=31536000...",
    tag: "SEC",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1000,
  },
  {
    text: "Optimizing visuals for your device...",
    tag: "GFX",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1120,
  },
  { text: "", type: "blank", delay: 1220 },

  { text: "Connection info:", type: "info", delay: 1340 },
  { text: "  Remote IP   : {IP}", type: "kv", delay: 1480 },
  { text: "  Location    : {LOC}", type: "kv", delay: 1600 },
  { text: "  ISP         : {ISP}", type: "kv", delay: 1720 },
  {
    text: "  Protocol    : HTTPS / HTTP2   Port : 443",
    type: "kv",
    delay: 1840,
  },
  { text: "  Latency     : <18ms  (edge cached)", type: "kv", delay: 1960 },
  { text: "", type: "blank", delay: 2060 },

  {
    text: "All systems operational. Launching interface...",
    type: "ready",
    delay: 2220,
  },
  { text: "", type: "blank", delay: 2340 },
  { text: "amit@amitvaibhavtiwari.dev ~ % start", type: "prompt", delay: 2500 },
];

const LAST_DELAY = 2500;
const BAR_BLOCKS = 28;
const BAR_START = LAST_DELAY + 280; // 3620ms — bar begins
const BAR_INTERVAL = 46; // ms per block → 38 * 46 ≈ 1750ms to fill
const BAR_END = BAR_START + BAR_BLOCKS * BAR_INTERVAL; // ~5370ms
const FADE_START = BAR_END + 1100; // 1100ms pause at BOOT SUCCESSFUL before fading
const FADE_MS = 500;

export function TerminalBoot() {
  const [shown, setShown] = useState(0);
  const [barProgress, setBarProgress] = useState(0);
  const [barDone, setBarDone] = useState(false);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const [ip, setIp] = useState("resolving...");
  const [loc, setLoc] = useState("resolving...");
  const [isp, setIsp] = useState("resolving...");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => {
        setIp(d.ip ?? "127.0.0.1");
        const place = [d.city, d.region, d.country_name]
          .filter(Boolean)
          .join(", ");
        setLoc(place || "unknown");
        setIsp(d.org || "unknown");
      })
      .catch(() => {
        setIp("127.0.0.1");
        setLoc("unknown");
        setIsp("unknown");
      });

    LINES.forEach((_, i) => {
      const jitter = Math.floor(Math.random() * 30) - 15;
      setTimeout(() => setShown(i + 1), Math.max(0, LINES[i].delay + jitter));
    });

    // Block progress bar
    const barTimer = setTimeout(() => {
      let count = 0;
      const iv = setInterval(() => {
        count++;
        setBarProgress(count);
        if (count >= BAR_BLOCKS) {
          clearInterval(iv);
          setBarDone(true);
        }
      }, BAR_INTERVAL);
    }, BAR_START);

    setTimeout(() => {
      setFading(true);
      window.dispatchEvent(new CustomEvent("terminalBootDone"));
    }, FADE_START);
    setTimeout(() => setGone(true), FADE_START + FADE_MS);

    return () => clearTimeout(barTimer);
  }, []);

  if (gone) return null;

  const filled = "█".repeat(barProgress);
  const empty = "░".repeat(BAR_BLOCKS - barProgress);
  const pct = Math.round((barProgress / BAR_BLOCKS) * 100);
  const allLinesShown = shown >= LINES.length;

  return (
    <div
      className="terminal-boot fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px, #fff 3px)",
          mixBlendMode: "overlay",
        }}
        aria-hidden="true"
      />
      <div
        className="w-full max-w-[560px] px-4 md:px-8 text-[10px] md:text-[12.5px]"
        style={{
          fontFamily:
            '"Cascadia Code", "Fira Mono", "IBM Plex Mono", Menlo, Consolas, monospace',
          lineHeight: "1.65",
        }}
      >
        {LINES.slice(0, shown).map((line, i) => {
          const text = line.text
            .replace("{IP}", ip)
            .replace("{LOC}", loc)
            .replace("{ISP}", isp);

          if (line.type === "blank") return <div key={i} className="h-2" />;

          if (line.type === "title") {
            return (
              <div key={i} className="text-green-400 font-bold mb-0.5">
                {text}
              </div>
            );
          }

          if (line.type === "divider") {
            return (
              <div key={i} className="text-zinc-600 mb-0.5" aria-hidden="true">
                {text}
              </div>
            );
          }

          if (line.type === "step") {
            return (
              <div
                key={i}
                className="flex items-baseline justify-between mb-0.5"
              >
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-zinc-400 shrink-0" aria-hidden="true">[</span>
                  <span className="text-cyan-500 font-semibold shrink-0 w-7 text-center">
                    {line.tag}
                  </span>
                  <span className="text-zinc-400 shrink-0" aria-hidden="true">]</span>
                  <span className="text-zinc-400 truncate">{text}</span>
                </div>
                <span className="text-green-400 font-semibold ml-4 shrink-0 text-[11px]">
                  {line.suffix}
                </span>
              </div>
            );
          }

          if (line.type === "info") {
            return (
              <div key={i} className="text-zinc-400 mb-0.5">
                {text}
              </div>
            );
          }

          if (line.type === "kv") {
            const colonIdx = text.indexOf(":");
            const key = text.slice(0, colonIdx);
            const val = text.slice(colonIdx + 1);
            return (
              <div key={i} className="mb-0.5">
                <span className="text-zinc-400">{key}:</span>
                <span className="text-yellow-400">{val}</span>
              </div>
            );
          }

          if (line.type === "ready") {
            return (
              <div key={i} className="text-white font-semibold mb-0.5">
                {text}
              </div>
            );
          }

          if (line.type === "prompt") {
            return (
              <div key={i} className="text-green-400 mb-0.5">
                {text}
              </div>
            );
          }

          return null;
        })}

        {/* Block progress bar — appears after all lines */}
        {allLinesShown && barProgress > 0 && (
          <div className="mt-2">
            <div className="flex items-center gap-0 flex-wrap">
              <span className="text-zinc-400 shrink-0" aria-hidden="true">[</span>
              <span className="text-green-400" aria-hidden="true" style={{ letterSpacing: "0px" }}>
                {filled}
              </span>
              <span className="text-zinc-600" aria-hidden="true" style={{ letterSpacing: "0px" }}>
                {empty}
              </span>
              <span className="text-zinc-400 shrink-0" aria-hidden="true">]</span>
              <span className="text-cyan-400 ml-2 w-9 shrink-0 text-[11px]">
                {pct}%
              </span>
              {barDone && (
                <span
                  className="text-green-400 font-bold text-[11px] tracking-widest ml-1 shrink-0"
                  style={{ animation: "fadeIn 0.3s ease-in" }}
                >
                  BOOT SUCCESSFUL
                </span>
              )}
            </div>
          </div>
        )}

        {!barDone && barProgress === 0 && (
          <span
            className="inline-block w-[7px] h-[13px] bg-green-400 align-middle ml-0.5"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
