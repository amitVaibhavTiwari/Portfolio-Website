// app/projects/page.tsx

// import { CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Women's Safety App",
    points: [
      "Emergency alert system for nearby users & police.",
      "Real-time location sharing and radius-based notifications.",
      "Built with React Native and Node.js backend."
    ],
    link: "https://github.com/yourusername/womens-safety-app",
  },
  {
    title: "E-Commerce Platform",
    points: [
      "Next.js frontend with GraphQL & PostgreSQL backend.",
      "Product listings, authentication, cart and checkout flow.",
      "Fully responsive with clean UI and dark mode support."
    ],
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "To-Do Reminder App",
    points: [
      "React Native app with offline local storage.",
      "Set reminders and receive native notifications.",
      "Simple, clean interface for daily productivity."
    ],
    link: "https://github.com/yourusername/todo-app",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid gap-8 ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 group"
          >
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-indigo-600 transition">
              {project.title}
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {project.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  {/* <  className="w-4 h-4 text-indigo-500 mt-1" /> */}
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </main>
  );
}
