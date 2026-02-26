import { MetadataRoute } from "next"
import { getPortfolioData } from "@/lib/portfolio-data"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const data = getPortfolioData()
  const baseUrl = data.seo.siteUrl
  const config = data.seo.sitemap

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency.home as any,
      priority: config.priority.home,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency.about as any,
      priority: config.priority.about,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency.projects as any,
      priority: config.priority.projects,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency.resume as any,
      priority: config.priority.resume,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency.writing as any,
      priority: config.priority.writing,
    },
  ]
}
