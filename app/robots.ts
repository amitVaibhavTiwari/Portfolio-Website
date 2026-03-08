import { MetadataRoute } from "next";

export const dynamic = "force-static";

// These are some known aggressive AI scrapers and SEO bots that generate junk traffic
const BLOCKED_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "PerplexityBot",
  "Bytespider",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "PetalBot",
  "Amazonbot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: BLOCKED_BOTS,
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 10,
      },
    ],
    sitemap: "https://www.amitvaibhavtiwari.dev/sitemap.xml",
  };
}
