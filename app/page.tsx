import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amit Vaibhav Tiwari - Software Engineer",
  description:
    "Welcome to my Personal Website. I'm a software engineer passionate about building elegant solutions.",
  keywords: [
    "Amit Vaibhav Tiwari",
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "Python",
    "Golang",
    "React",
    "Next.js",
    "Software Development",
    "Resume",
    "Projects",
    "Experience",
  ],
  authors: [{ name: "Amit Vaibhav Tiwari" }],
  creator: "Amit Vaibhav Tiwari",
};

const socialLinks = [
  {
    href: "https://github.com/amitvaibhavtiwari",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://in.linkedin.com/in/amit-vaibhav-tiwari-23967b306",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/im_avt",
    label: "X / Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/amitvaibhavtiwari",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: "mailto:amitvaibhavtiwari@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Vaibhav Tiwari",
    jobTitle: "Software Engineer",
    email: "amitvaibhavtiwari@gmail.com",
    url: "https://www.amitvaibhavtiwari.dev",
    sameAs: [
      "https://github.com/amitvaibhavtiwari",
      "https://in.linkedin.com/in/amit-vaibhav-tiwari-23967b306",
      "https://x.com/im_avt",
      "https://instagram.com/amitvaibhavtiwari",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <img
              src="./home_img.jpg"
              alt="Amit Vaibhav Tiwari"
              className="h-44 w-44 rounded-full object-cover"
              loading="eager"
            />
          </div>
          <h1 className="text-xl md:text-3xl font-extrabold tracking-tight mb-1">
            Amit Vaibhav Tiwari
          </h1>
          <p className="text-sm md:text-base font-semibold text-green-700 dark:text-green-400 mb-4">
            Software Engineer
          </p>
          <div className="flex gap-2 mb-4 md:mb-8">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={s.label}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="space-y-5 text-xs md:text-sm text-foreground/80 leading-relaxed">
            <p>
              I'm a Software Engineer at Kuvaka Tech. I mainly work with
              JavaScript/TypeScript and Python, and I'm currently exploring Go
              through personal projects.
            </p>
            <p>
              I also have experience with cloud practices on Azure and GCP,
              particularly around deployments, infrastructure, and CI/CD
              pipelines.
            </p>
          </div>
          <div className="mt-10 md:mt-16 space-y-12 text-xs md:text-sm max-w-2xl">
            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Experience
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-border/30 dark:border-zinc-700 pl-6 hover:border-border/70 dark:hover:border-zinc-500 transition-colors">
                  <p className="text-xs font-light italic text-cyan-600 dark:text-cyan-400">
                    Sept 2025 - Present
                  </p>
                  <p className="font-medium mb-3 text-yellow-600 dark:text-yellow-400">
                    Remote (Bangalore, Karnataka)
                  </p>
                  <h3 className="font-semibold mb-3 text-pink-800 dark:text-pink-600">
                    SDE-1 at Kuvaka Tech
                  </h3>
                  <ul className="space-y-1 text-foreground/80 list-disc list-inside">
                    <li>
                      Led development of microservices architecture using
                      Node.js and TypeScript
                    </li>
                    <li>
                      Implemented CI/CD pipelines reducing deployment time by
                      60%
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                    <li>Built scalable REST APIs serving 1M+ requests daily</li>
                  </ul>
                </div>
                <div className="border-l-2 border-border/30 dark:border-zinc-700 pl-6 hover:border-border/70 dark:hover:border-zinc-500 transition-colors">
                  <p className="text-xs font-light italic text-cyan-600 dark:text-cyan-400">
                    May 2024 - Aug 2025
                  </p>
                  <p className="font-medium mb-3 text-yellow-600 dark:text-yellow-400">
                    Hybrid (Lucknow, Uttar Pradesh)
                  </p>
                  <h3 className="font-semibold mb-3 text-pink-800 dark:text-pink-600">
                    Full Stack Developer at Brimo Software Solutions
                  </h3>
                  <ul className="space-y-1 text-foreground/80 list-disc list-inside">
                    <li>
                      Developed and maintained React-based web applications
                    </li>
                    <li>
                      Designed and implemented PostgreSQL database schemas
                    </li>
                    <li>
                      Integrated third party APIs including Stripe, SendGrid,
                      and AWS
                    </li>
                    <li>
                      Improved application performance by 40% through
                      optimization
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Skills and Tech Stack
              </h2>
              <div className="space-y-4 pl-6">
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                    Languages
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    JavaScript, TypeScript, Python, Golang, SQL
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                    Frontend
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    React, Next.js, Tailwind CSS, Material UI, Zustand, Redux,
                    HTML, CSS, SCSS
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                    Backend
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Django, DRF, Node.js, Express, PostgreSQL, MongoDB, Redis,
                    REST APIs, GraphQL APIs
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                    Tools &amp; Platforms
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Git, GitHub, Docker, Azure, GCP
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                    Other
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Agile/Scrum, System Design, Performance Optimization,
                    Technical Writing
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Projects
              </h2>
              <div className="space-y-6">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 border border-border/40 dark:border-zinc-700 rounded-lg p-5 hover:border-border/80 dark:hover:border-zinc-500 hover:bg-muted/30 transition-all"
                >
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:underline underline-offset-4 transition-colors text-pink-800 dark:text-pink-600">
                      Project One
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      A comprehensive web application built with React and
                      TypeScript. Features include real-time updates, user
                      authentication, and a responsive design.
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 border border-border/40 dark:border-zinc-700 rounded-lg p-5 hover:border-border/80 dark:hover:border-zinc-500 hover:bg-muted/30 transition-all"
                >
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:underline underline-offset-4 transition-colors text-pink-800 dark:text-pink-600">
                      Project Two
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      An open-source library that simplifies complex workflows.
                      Used by thousands of developers worldwide.
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Education
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs italic mb-2 text-cyan-600 dark:text-cyan-400">
                    Sep 2022 - April 2026
                  </p>
                  <h3 className="font-semibold">
                    B. Tech. in Computer Science and Engineering at DSMNRU
                    University
                  </h3>
                  <p className="text-muted-foreground">
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
                <div>
                  <p className="text-xs italic mb-2 text-cyan-600 dark:text-cyan-400">
                    2021 - 2022
                  </p>
                  <h3 className="font-semibold">
                    Intermediate at Pioneer Montessori Inter College
                  </h3>
                  <p className="text-muted-foreground">
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Writing
              </h2>
              <div className="space-y-4">
                <a
                  href="https://gist.github.com/amitvaibhavtiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg px-3 py-3 -mx-3 hover:bg-muted/40 transition-colors border-b border-border/20 dark:border-zinc-700 last:border-0"
                >
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    Code Snippets
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg px-3 py-3 -mx-3 hover:bg-muted/40 transition-colors border-b border-border/20 dark:border-zinc-700 last:border-0"
                >
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    Blogs
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-base lg:text-xl font-bold mb-6 text-green-700 dark:text-green-400">
                Resume
              </h2>
              <div className="pl-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Download my resume in PDF format for the most up-to-date
                  information about me.
                </p>
                <a
                  href="https://drive.google.com/your-resume-link-here"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border/40 dark:border-zinc-700 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-muted/40 hover:border-border/80 dark:hover:border-zinc-500 transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="mb-1 mt-16 mr-2 text-[10px] text-zinc-500 dark:text-zinc-600 text-right leading-relaxed">
        No copyright issues. Feel free to modify it and make yours.{" "}
        <a
          href="https://github.com/amitvaibhavtiwari/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
        >
          Here's the code
        </a>
      </div>
    </>
  );
}
