import Link from "next/link";
import { getPortfolioData } from "@/lib/portfolio-data";
import type { Metadata } from "next";

const data = getPortfolioData();

export const metadata: Metadata = {
  title: data.seo.pages.home.title,
  description: data.seo.pages.home.description,
};

export default function Home() {
  const data = getPortfolioData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.personal.name,
    jobTitle: data.personal.designation,
    email: data.personal.email,
    url: data.seo.siteUrl,
    sameAs: [
      data.social.github,
      data.social.linkedin,
      data.social.twitter,
      data.social.instagram,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 py-8 font-normal">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            {data.personal.image ? (
              <img
                src={data.personal.image}
                alt={`${data.personal.name} - ${data.personal.designation}`}
                className="h-44 w-44 rounded-full object-cover"
                loading="eager"
              />
            ) : (
              <div
                className="h-32 w-32 rounded-full bg-muted flex items-center justify-center text-5xl font-bold text-muted-foreground"
                role="img"
                aria-label={`${data.personal.name} initials`}
              >
                {data.personal.initials}
              </div>
            )}
          </div>

          <h1 className="text-[1.6rem] md:text-3xl lg:text-3xl font-black">
            {data.personal.name}
          </h1>
          <p className="text-lg md:text-lg lg:text-xl lg:mt-1 lg:font-semibold text-muted-foreground mb-4">
            {data.personal.designation}
          </p>

          <div className="space-y-4 text-sm text-foreground/90 leading-relaxed mb-10">
            {data.home.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-10">
            <p className="text-lg lg:text-xl font-bold text-foreground mb-4">
              Connect with me
            </p>
            <div className="flex gap-4 md:gap-5 justify-center text-sm">
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                GitHub
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                X
              </a>
              <a
                href={data.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                Mail
              </a>
            </div>
          </div>

          {/* <div>
            <p className="text-lg lg:text-xl font-bold text-foreground mb-4">
              Quick links
            </p>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
                >
                  Know more about me
                </Link>
              </li>
              <li>
              <Link
                href="/projects"
                className="text-sm text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                See what I've built
              </Link>
            </li>
              <li>
                <Link
                  href="/resume"
                  className="text-sm text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
                >
                  See my resume
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
                >
                  See what I write
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
