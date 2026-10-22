import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { TerminalBootWrapper } from "@/components/TerminalBootWrapper";
import { PageContent } from "@/components/PageContent";
import { SplashCursorWrapper } from "@/components/SplashCursorWrapper";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Geist, Geist_Mono, JetBrains_Mono, Dancing_Script } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Amit Vaibhav Tiwari",
  description: "Personal Website of Amit Vaibhav Tiwari",
  keywords: [
    "Amit Vaibhav Tiwari",
    "Amit Tiwari",
    "Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Amit",
    "Developer",
    "Web Developer",
    "Software Engineer",
    "AI",
    "AI Engineer",
    "Resume",
  ],
  authors: [{ name: "Amit Vaibhav Tiwari" }],
  creator: "Amit Vaibhav Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amitvaibhavtiwari.dev",
    title: "Amit Vaibhav Tiwari",
    description: "Personal Website of Amit Vaibhav Tiwari",
    siteName: "Amit Vaibhav Tiwari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Vaibhav Tiwari",
    description: "Personal Website of Amit Vaibhav Tiwari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${dancingScript.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll />
          <TerminalBootWrapper />
          <SplashCursorWrapper />
          <PageContent>
            <div className="relative z-10 min-h-screen bg-background">
              <Navigation />
              {children}
            </div>
          </PageContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
