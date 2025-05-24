import { projects } from "@/portfolio_config";


export const metadata = {
  title: "Projects",
};


const page = () => {

  if (projects.length == 0) {
    return <div className="min-h-screen">
      <p className="text-sm text-center mt-5">-------Currently revamping this website. Will add my all  projects here soon-------</p>
    </div>
  }

  if (projects.length > 0)
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
              className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
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
      </div>
    )
}

export default page

