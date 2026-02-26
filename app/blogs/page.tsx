import { getPortfolioData } from "@/lib/portfolio-data"
import type { Metadata } from "next"

const data = getPortfolioData()

export const metadata: Metadata = {
  title: data.seo.pages.writing.title,
  description: data.seo.pages.writing.description,
}

export default function Blogs() {
  const data = getPortfolioData()

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {data.writing.map((platform, index) => (
            <div
              key={index}
              className={`border-b border-border/40 pb-6 ${
                index === data.writing.length - 1 ? "last:border-0" : ""
              }`}
            >
              <h2 className="text-lg md:text-xl font-bold mb-2">{platform.title}</h2>
              <p className="text-sm text-foreground/80 mb-3 leading-relaxed">
                {platform.description}
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  visit {platform.platform}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
