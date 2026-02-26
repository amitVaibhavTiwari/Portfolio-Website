import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { STIX_Two_Text, Great_Vibes } from "next/font/google";
import { getPortfolioData } from "@/lib/portfolio-data";
import Home from "./page";

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-stix",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
});

const portfolioData = getPortfolioData();

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.seo.siteUrl,
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    siteName: portfolioData.seo.title,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
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
  verification: {
    google: portfolioData.seo.googleVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = getPortfolioData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
      </head>
      <body
        className={`${stixTwoText.variable} ${greatVibes.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-10 min-h-screen bg-background">
            <Navigation logo={data.personal.logo} />
            {/* {children} */}
            <Home />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
