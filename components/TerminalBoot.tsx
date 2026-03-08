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

  // Runtime init
  {
    text: "Initializing runtime environment...",
    tag: "SYS",
    suffix: "[  OK  ]",
    type: "step",
    delay: 300,
  },
  {
    text: "Heap alloc: 64MB base / 512MB ceiling — zones mapped...",
    tag: "MEM",
    suffix: "[  OK  ]",
    type: "step",
    delay: 420,
  },
  {
    text: "V8 v12.4.254.20 — Turbofan JIT armed, Maglev tier ready...",
    tag: "V8 ",
    suffix: "[  OK  ]",
    type: "step",
    delay: 540,
  },
  {
    text: "GC: scavenge + mark-sweep-compact, 8ms budget enforced...",
    tag: "GC ",
    suffix: "[  OK  ]",
    type: "step",
    delay: 660,
  },
  {
    text: ".env.production sealed — 12 vars injected, 0 leaked...",
    tag: "ENV",
    suffix: "[  OK  ]",
    type: "step",
    delay: 800,
  },
  { text: "", type: "blank", delay: 920 },

  // Network + TLS
  {
    text: "A record → 76.76.21.21  TTL:60s  DNSSEC: valid...",
    tag: "DNS",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1040,
  },
  {
    text: "TLS 1.3  ECDHE-RSA-AES-256-GCM-SHA384  0-RTT: off...",
    tag: "TLS",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1180,
  },
  {
    text: "Edge-sin1 selected — AS16509  RTT: 14ms  cache: HIT...",
    tag: "CDN",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1320,
  },
  { text: "", type: "blank", delay: 1420 },

  // App boot
  {
    text: "Bundle verified — 6 chunks  84.2 kB gzip  0 collisions...",
    tag: "APP",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1540,
  },
  {
    text: "Hydration diffed — 0 mismatches  CLS: 0.00  LCP: 0.91s...",
    tag: "HYD",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1680,
  },
  {
    text: "CSP enforced  SRI verified  HSTS: max-age=31536000...",
    tag: "SEC",
    suffix: "[  OK  ]",
    type: "step",
    delay: 1820,
  },
  { text: "", type: "blank", delay: 1920 },

  // Connection info
  { text: "Connection info:", type: "info", delay: 2040 },
  { text: "  Remote IP   : {IP}", type: "kv", delay: 2200 },
  { text: "  Node        : edge-sin1.cdn.global", type: "kv", delay: 2320 },
  {
    text: "  Protocol    : HTTPS / HTTP2   Port : 443",
    type: "kv",
    delay: 2440,
  },
  {
    text: "  Cipher      : ECDHE-RSA-AES256-GCM-SHA384",
    type: "kv",
    delay: 2560,
  },
  { text: "  Latency     : <18ms  (edge cached)", type: "kv", delay: 2680 },
  { text: "  Uptime      : 99.98%  (last 90 days)", type: "kv", delay: 2800 },
  { text: "", type: "blank", delay: 2900 },

  {
    text: "All systems operational. Launching interface...",
    type: "ready",
    delay: 3060,
  },
  { text: "", type: "blank", delay: 3180 },
  { text: "amit@amitvaibhavtiwari.dev ~ % start", type: "prompt", delay: 3340 },
];

const LAST_DELAY = 3340;
const BAR_BLOCKS = 38;
const BAR_START = LAST_DELAY + 280; // 3620ms — bar begins
const BAR_INTERVAL = 46; // ms per block → 38 * 46 ≈ 1750ms to fill
const BAR_END = BAR_START + BAR_BLOCKS * BAR_INTERVAL; // ~5370ms
const FADE_START = BAR_END + 550; // ~5920ms
const FADE_MS = 500;

export function TerminalBoot() {
  const [shown, setShown] = useState(0);
  const [barProgress, setBarProgress] = useState(0);
  const [barDone, setBarDone] = useState(false);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const [ip, setIp] = useState("resolving...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((d) => setIp(d.ip))
      .catch(() => setIp("127.0.0.1"));

    LINES.forEach((_, i) => {
      setTimeout(() => setShown(i + 1), LINES[i].delay);
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

    setTimeout(() => setFading(true), FADE_START);
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
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        className="w-full max-w-[560px] px-8"
        style={{
          fontFamily:
            '"Cascadia Code", "Fira Mono", "IBM Plex Mono", Menlo, Consolas, monospace',
          fontSize: "12.5px",
          lineHeight: "1.65",
        }}
      >
        {LINES.slice(0, shown).map((line, i) => {
          const text = line.text.replace("{IP}", ip);

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
              <div key={i} className="text-zinc-700 mb-0.5">
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
                  <span className="text-zinc-600 shrink-0">[</span>
                  <span className="text-cyan-500 font-semibold shrink-0 w-[28px] text-center">
                    {line.tag}
                  </span>
                  <span className="text-zinc-600 shrink-0">]</span>
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
                <span className="text-zinc-600">{key}:</span>
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
            <div className="flex items-center gap-0">
              <span className="text-zinc-600 shrink-0">[</span>
              <span className="text-green-400" style={{ letterSpacing: "0px" }}>
                {filled}
              </span>
              <span className="text-zinc-800" style={{ letterSpacing: "0px" }}>
                {empty}
              </span>
              <span className="text-zinc-600 shrink-0">]</span>
              <span className="text-cyan-400 ml-2 w-9 shrink-0 text-[11px]">
                {pct}%
              </span>
              {barDone && (
                <span
                  className="text-green-400 font-bold text-[11px] tracking-widest ml-1"
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
