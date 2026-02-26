"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {
  logo: string;
}

export function Navigation({ logo }: NavigationProps) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Writing" },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-3xl lg:text-4xl font-black text-foreground hover:opacity-70 transition-opacity tracking-tight font-sans"
            aria-label="Home"
          >
            {logo}
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            {/* <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:underline underline-offset-4 ${link.href === "/" ? "hidden md:inline-block" : ""
                    } ${pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
