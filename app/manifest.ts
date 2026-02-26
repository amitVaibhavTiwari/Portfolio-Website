import { MetadataRoute } from "next"
import { getPortfolioData } from "@/lib/portfolio-data"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  const data = getPortfolioData()
  const config = data.seo.manifest

  return {
    name: data.seo.title,
    short_name: config.shortName,
    description: data.seo.description,
    start_url: "/",
    display: config.display as any,
    background_color: config.backgroundColor,
    theme_color: config.themeColor,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
