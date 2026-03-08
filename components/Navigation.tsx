"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { HexLogo } from "./HexLogo";

export function Navigation() {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
            aria-label="Home"
          >
            <HexLogo />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
