import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { TimelineTrack } from "@/components/TimelineTrack";

export const metadata: Metadata = {
  title: "Amit Vaibhav Tiwari - Software Engineer",
  description: "Personal Website of Amit Vaibhav Tiwari.",
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
    href: "mailto:amitvaibhavtiwari@gmail.com",
    label: "Email",
    icon: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    href: "https://in.linkedin.com/in/amitvaibhavtiwari",
    label: "LinkedIn",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    href: "https://github.com/amitvaibhavtiwari",
    label: "GitHub",
    icon: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    href: "https://x.com/im_avt",
    label: "X",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
];

const experience = [
  {
    title: "SDE-1",
    company: "Kuvaka Tech",
    location: "Bangalore, Karnataka · Remote",
    period: "Sept 2025 – Present",
    description: [
      "Contributing to the 0-to-1 development of Kuvaka's Agentic AI vertical, building AI-powered solutions and healthcare agents",
      "Collaborating with engineering pods to deliver end-to-end client solutions across frontend and backend systems",
      "Developed and presented product demos to government officials and international clients",
    ],
  },
  {
    title: "Associate Developer",
    company: "Brimo Software Solutions",
    location: "Lucknow, Uttar Pradesh · Hybrid",
    period: "May 2024 – Aug 2025",
    description: [
      "Migrated legacy React applications to Next.js, improving performance and Core Web Vitals",
      "Built Django-based GraphQL APIs on Saleor to power e-commerce storefronts",
      "Contributed to the initial development of a plug-and-play Shopify app for loyalty and referral programs",
    ],
  },
];

const skillGroups = [
  { label: "Languages", items: "JavaScript, TypeScript, Python, Golang" },
  {
    label: "Frontend",
    items:
      "React, Next.js, Tailwind CSS, Material UI, Zustand, Redux, HTML, CSS, SCSS",
  },
  {
    label: "Backend",
    items: "Django, DRF, Node.js, Express, REST APIs, GraphQL APIs, SQL",
  },
  {
    label: "Databases",
    items: "PostgreSQL, MongoDB, Redis, Timescale DB",
  },
  { label: "Tools & Platforms", items: "Git, GitHub, Docker, Azure, GCP" },
  {
    label: "Other",
    items: "Agile/Scrum, System Design, Technical Writing",
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
      "https://in.linkedin.com/in/amitvaibhavtiwari",
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

      <main className="dark:bg-[#262626]">
        {/* Hero */}
        <section
          className="pt-2 md:-mt-3 pb-2 md:py-14 md:pb-10"
          aria-labelledby="hero-heading"
        >
          <Reveal
            trigger="load"
            className="max-w-3xl mx-auto flex flex-col items-center gap-4 px-4 pt-2 pb-4 md:p-4 text-center"
          >
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
              <img
                src="./home_img.webp"
                alt="Amit Vaibhav Tiwari"
                className="w-full h-full object-cover"
                loading="eager"
                width={224}
                height={224}
              />
            </div>
            <h1
              id="hero-heading"
              className="text-2xl md:text-4xl font-bold text-foreground leading-tight"
            >
              Amit Vaibhav Tiwari
            </h1>
            <div className="flex -mt-2 md:-mt-1 flex-wrap gap-3 justify-center">
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
                  className="flex items-center text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-border">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Intro */}
        <section className="pb-6 md:pb-8">
          <Reveal
            trigger="load"
            delay={250}
            className="max-w-3xl mx-auto px-4 space-y-4 font-muted text-sm text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m a Software Engineer at Kuvaka Tech, working on full-stack
              engineering and AI-powered solutions, with a focus on Agentic AI
              and real-world healthcare applications.
            </p>
            <p>
              I mainly work with JavaScript/TypeScript and Python, and have
              experience with cloud deployments, infrastructure, and CI/CD
              across GCP and Azure. I&apos;m also exploring Go through personal
              projects to further expand my tech stack.
            </p>
            <p>
              Outside of work, I enjoy vibe coding random ideas, messing around
              with new AI tools, and watching anime.
            </p>
          </Reveal>
        </section>

        {/* Work Experience */}
        <section
          className="pt-2 pb-12 md:py-16"
          aria-labelledby="work-experience-heading"
        >
          <div className="max-w-3xl mx-auto p-4">
            <Reveal>
              <h2
                id="work-experience-heading"
                className="text-[17px] md:text-2xl font-bold mb-6 md:mb-12 text-primary tracking-wider"
              >
                WORK EXPERIENCE
              </h2>
            </Reveal>
            <TimelineTrack>
              {experience.map((job, i) => (
                <div
                  key={job.title + job.company}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  <Reveal delay={i * 100} className="ml-14 md:ml-16 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-primary leading-snug">
                          {job.title}
                        </h3>
                        <div className="text-meta text-sm font-mono mt-0.5">
                          {job.company}
                        </div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-muted-foreground text-sm font-mono italic">
                          {job.period}
                        </div>
                        <div className="text-meta text-xs font-mono mt-0.5 italic">
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {job.description.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-muted-foreground leading-relaxed font-muted text-sm"
                        >
                          <span className="text-meta shrink-0">–</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              ))}
            </TimelineTrack>
          </div>
        </section>

        {/* Skills */}
        <section
          className="pt-2 pb-12 md:py-16"
          aria-labelledby="skills-heading"
        >
          <div className="max-w-3xl mx-auto p-4">
            <Reveal>
              <h2
                id="skills-heading"
                className="pl-2 sm:pl-0 text-[17px] md:text-3xl font-bold mb-5 md:mb-10 text-primary tracking-wider"
              >
                SKILLS
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 pl-6 sm:pl-0">
              {skillGroups.map((group, i) => (
                <Reveal key={group.label} delay={(i % 2) * 100}>
                  <h3 className="font-bold text-primary mb-1.5">
                    {group.label}
                  </h3>
                  <p className="font-muted text-sm text-muted-foreground leading-relaxed">
                    {group.items}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Get in touch */}
        <section className="pt-2 pb-16 md:py-16">
          <Reveal className="max-w-3xl mx-auto px-4 text-center">
            <p className="font-sans lg:font-semibold text-sm leading-relaxed mb-6 text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly
              hello! <span className="text-base">😃</span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-border">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="py-8 dark:bg-[#262626]">
        <div className="max-w-3xl mx-auto px-4 text-[10px] text-muted-foreground/70 text-center md:text-right leading-relaxed">
          No copyright issues. Feel free to modify it and make yours.{" "}
          <a
            href="https://github.com/amitvaibhavtiwari/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Here&apos;s the code
          </a>
        </div>
      </footer>
    </>
  );
}
