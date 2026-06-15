"use client";
import dynamic from "next/dynamic";

const TerminalBoot = dynamic(
  () => import("@/components/TerminalBoot").then((m) => ({ default: m.TerminalBoot })),
  { ssr: false }
);

export function TerminalBootWrapper() {
  return <TerminalBoot />;
}
