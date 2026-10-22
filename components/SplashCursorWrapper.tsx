"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SplashCursor from "./SplashCursor";

const DARK_SETTINGS = {
  colors: ["#e4e4e7"],
  colorSpeed: 3.5,
  intensity: 0.7,
  size: 0.9,
  force: 0.8,
  swirl: 12.5,
  trail: 2.35,
  momentum: 2.55,
  shading: 0.69,
  clickSplash: false,
};

const LIGHT_SETTINGS = {
  colors: ["#dddedf"],
  colorSpeed: 1.05,
  intensity: 0.45,
  size: 0.9,
  force: 0.8,
  swirl: 12.5,
  trail: 2.35,
  momentum: 2.2,
  shading: 0.45,
  glow: 0.31,
  clickSplash: false,
};

export function SplashCursorWrapper() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";
  const settings = isLight ? LIGHT_SETTINGS : DARK_SETTINGS;

  return (
    <SplashCursor
      {...settings}
      rainbow={false}
      theme={isLight ? "light" : "dark"}
    />
  );
}
