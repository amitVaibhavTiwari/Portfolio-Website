"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="py-4 pt-2 md:pt-4 dark:bg-[#262626]"
    >
      <div className="mx-auto px-4 py-2 max-w-3xl">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-signature text-[19px] md:text-4xl text-foreground hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            Amit Vaibhav Tiwari
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
