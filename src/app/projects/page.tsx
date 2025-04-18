const projects = [

  {
    title: "Portfolio Template",
    points: [
      "A simple portfolio website template specially made for developers. (the one you've visited now)",
      "Built with Next.js, Tailwind CSS, and Framer Motion.",
      "Includes a details section, projects showcase, resume and a code snippet section.",
    ],
    link: "https://github.com/yourusername/womens-safety-app",
  },
];

export const metadata = {
  title: "Projects",
};


const page = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-8">Some things I've been building</h2>
      <div className="grid gap-8 ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg  border  border-black dark:border-gray-200 p-6"
          >
            <h2 className="text-xl text-black dark:text-white font-semibold mb-4">
              {project.title}
            </h2>
            <ul className="space-y-1 list-disc list-inside text-base italic ">
              {project.points.map((point, i) => (
                <li key={i} >
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
      <p className="text-sm mt-16 text-center">-------Will add my all the  projects here soon-------</p>
    </div>
  )
}

export default page

