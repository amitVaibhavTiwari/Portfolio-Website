import { MetadataRoute } from "next"
import { getPortfolioData } from "@/lib/portfolio-data"

export const dynamic = "force-static"

// Known aggressive AI scrapers and SEO bots that generate junk traffic
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
]

export default function robots(): MetadataRoute.Robots {
  const data = getPortfolioData()
  const config = data.seo.robots

  return {
    rules: [
      {
        userAgent: BLOCKED_BOTS,
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: config.allowAll ? "/" : undefined,
        disallow: config.allowAll ? undefined : "/",
        crawlDelay: config.crawlDelay,
      },
    ],
    sitemap: `${data.seo.siteUrl}/sitemap.xml`,
  }
}
