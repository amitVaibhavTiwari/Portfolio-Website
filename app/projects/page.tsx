import { getPortfolioData } from "@/lib/portfolio-data"
import type { Metadata } from "next"

const data = getPortfolioData()

export const metadata: Metadata = {
  title: data.seo.pages.projects.title,
  description: data.seo.pages.projects.description,
}

export default function Projects() {
  const data = getPortfolioData()

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center">What I've built</h1>

        <div className="space-y-12">
          {data.projects.map((project, index) => (
            <div key={index} className="border-b border-border/40 pb-6 last:border-0">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-foreground/80 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  live demo
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
