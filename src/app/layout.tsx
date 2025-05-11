import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from 'next/font/google';
import { FloatingDock } from "@/components/FloatingDock/FloatingDock";
import { FloatingDockLinks } from "@/components/FloatingDock/DockItems";
import Navbar from "@/components/Navbar/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper/themeWrapper";
import GreetingWrapper from "@/components/GreetingWrapper/GreetingWrapper";

const noto = Noto_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Amit Vaibhav Tiwari",
  description: "Portfolio Website for Amit Vaibhav Tiwari",
  keywords: ["Amit Vaibhav Tiwari", "Amit Tiwari", "Lucknow", "Engineer", "Frontend Developer", "Backend Developer", "Amit", "Developer", "Web Developer", "Software Engineer", "Resume"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} antialiased  text-zinc-700 dark:text-neutral-400 dark:bg-[#151414]`}
      >
        <ThemeWrapper>
          <GreetingWrapper>
            <Navbar />
            <div className="px-6 md:px-20 lg:px-0 lg:max-w-4xl mx-auto">
              {children}
              <FloatingDock
                items={FloatingDockLinks}
              />
            </div>
            <p className="text-[.55rem] md:text-[.65rem] lg:text-xs mt-12 md:mt-20 mb-1 md:ml-2 text-center md:text-left">No © copyright issues. Feel free to copy whatever you like. Here's the <a href="https://github.com/amitVaibhavTiwari/Portfolio-Website" target="_blank" className="underline font-semibold"> code</a>.</p>
          </GreetingWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}
