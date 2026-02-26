import fs from "fs"
import path from "path"
import yaml from "js-yaml"

export interface PortfolioData {
  personal: {
    name: string
    designation: string
    image: string
    initials: string
    logo: string
    email: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
    siteUrl: string
    googleVerification?: string
    sitemap: {
      changeFrequency: {
        home: string
        about: string
        projects: string
        resume: string
        writing: string
      }
      priority: {
        home: number
        about: number
        projects: number
        resume: number
        writing: number
      }
    }
    robots: {
      allowAll: boolean
      crawlDelay: number
    }
    manifest: {
      shortName: string
      backgroundColor: string
      themeColor: string
      display: string
    }
    pages: {
      home: { title: string; description: string }
      about: { title: string; description: string }
      projects: { title: string; description: string }
      resume: { title: string; description: string }
      writing: { title: string; description: string }
    }
  }
  social: {
    github: string
    linkedin: string
    twitter: string
    instagram: string
  }
  home: {
    bio: string[]
  }
  about: {
    title: string
    intro: string[]
    whatIDo: {
      title: string
      items: string[]
    }
    beyondCode: {
      title: string
      content: string
    }
    connect: {
      title: string
      content: string
    }
  }
  projects: Array<{
    title: string
    description: string
    demoUrl: string
    githubUrl: string
  }>
  resume: {
    projectsToShow: number
    experience: Array<{
      period: string
      type: string
      title: string
      responsibilities: string[]
    }>
    education: Array<{
      period: string
      degree: string
      location: string
    }>
    skills: Array<{
      category: string
      items: string
    }>
    contact: {
      location: string
    }
  }
  writing: Array<{
    title: string
    description: string
    platform: string
    url: string
  }>
}

let cachedData: PortfolioData | null = null

export function getPortfolioData(): PortfolioData {
  // to disable cache in development for hot reload
  const isDev = process.env.NODE_ENV === "development"
  
  if (cachedData && !isDev) {
    return cachedData
  }
  const filePath = path.join(process.cwd(), "data", "portfolio.yaml")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const data = yaml.load(fileContents) as PortfolioData

  if (!isDev) {
    cachedData = data
  }

  return data
}
