import { getPortfolioData } from "@/lib/portfolio-data"
import type { Metadata } from "next"

const data = getPortfolioData()

export const metadata: Metadata = {
  title: data.seo.pages.resume.title,
  description: data.seo.pages.resume.description,
}

export default function Resume() {
  const data = getPortfolioData()
  const { resume, social, personal } = data

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12 text-sm max-w-2xl">
          <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {resume.experience.map((job, index) => (
                <div key={index} className="pl-6">
                  <p className="text-xs text-muted-foreground mb-1 font-light italic">{job.period}</p>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{job.type}</p>
                  <h3 className="font-semibold text-sm mb-3">{job.title}</h3>
                  <ul className="space-y-1 text-foreground/80 list-disc list-inside">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Projects</h2>
            <div className="space-y-8">
              {data.projects.slice(0, resume.projectsToShow).map((project, index) => (
                <div key={index} className="pl-6">
                  <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                      Live
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
          </section> */}

      
          <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Skills and Tech Stack</h2>
            <div className="space-y-4 pl-6">
              {resume.skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm mb-2">{skill.category}</h3>
                  <p className="text-foreground/80">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

    <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6 pl-6">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <p className="text-xs italic text-muted-foreground mb-2">{edu.period}</p>
                  <h3 className="font-semibold text-sm">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
              ))}
            </div>
          </section>


          <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-2 pl-6">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  {personal.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  {social.linkedin.replace("https://", "")}
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  {social.github.replace("https://", "")}
                </a>
              </p>
              {/* <p>
                <span className="font-semibold">Location:</span> {resume.contact.location}
              </p> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
