import { getPortfolioData } from "@/lib/portfolio-data";
import type { Metadata } from "next";

const data = getPortfolioData();

export const metadata: Metadata = {
  title: data.seo.pages.about.title,
  description: data.seo.pages.about.description,
};

export default function About() {
  const data = getPortfolioData();
  const { about, social, personal } = data;

  return (
    <div className="container font-normal mx-auto px-6 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl text-left md:text-2xl  font-bold mb-4">
          {about.title}
        </h2>

        <div className="space-y-6 text-sm text-foreground/90 leading-relaxed text-left">
          {about.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="pt-6">
            <h2 className="text-lg lg:text-xl font-bold mb-4">
              {about.beyondCode.title}
            </h2>
            <p>{about.beyondCode.content}</p>
          </div>

          <div className="pt-6">
            <h2 className="text-lg lg:text-xl font-bold mb-4">
              {about.connect.title}
            </h2>
            <p className="mb-4">{about.connect.content}</p>
            <div className="flex gap-3 text-sm">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                X
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-foreground hover:text-muted-foreground hover:underline underline-offset-4 transition-colors"
              >
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
