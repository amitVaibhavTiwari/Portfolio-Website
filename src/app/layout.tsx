import type { Metadata } from "next";
import "./globals.css";
import { Baloo_Bhai_2 ,} from 'next/font/google';
import { FloatingDock } from "@/components/FloatingDock/FloatingDock";
import { FloatingDockLinks } from "@/components/FloatingDock/DockItems";
import Navbar from "@/components/Navbar/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper/themeWrapper";
import { personalInfo } from "@/portfolio_config";

const noto = Baloo_Bhai_2({
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: personalInfo.name,
  description: personalInfo.metadataDescription,
  keywords: personalInfo.metadataKeywords
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} antialiased bg-[#e6e6e6]  text-black dark:text-neutral-400 dark:bg-[#000000]`}
      >
        <ThemeWrapper>
          <Navbar />
          <div className="px-6 md:px-20 lg:px-0 lg:max-w-4xl mx-auto text-[1.05rem] md:text-lg">
            {children}
            <FloatingDock
              items={FloatingDockLinks}
            />
          </div>
          <p className="text-[.65rem] md:text-[.75rem] lg:text-xs mt-12 md:mt-20 mb-1 md:ml-2 text-center md:text-left">No © copyright issues. Feel free to copy whatever you like. Here's the <a href="https://github.com/amitVaibhavTiwari/Portfolio-Website" target="_blank" className="underline font-semibold"> code</a>.</p>
        </ThemeWrapper>
      </body>
    </html >
  );
}
