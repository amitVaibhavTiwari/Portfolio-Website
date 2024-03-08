import "./Projects.scss";
import { projects } from "../../Data";
const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Recent projects</h1>
      <h2>Take a look</h2>

      <div className="projects-box-container">
        {projects.map((e) => {
          return (
            <div key={e.id} className="project-box">
              <img src={e.img} alt={e.name} />

              <h1>{e.name}</h1>
              <p>{e.miniDesc}</p>
              <div className="technologies-used">
                {e.technologies.map((e) => {
                  return (
                    <button key={e} className="tech-box">
                      {e}
                    </button>
                  );
                })}
              </div>
              <button className="see-more">See more</button>
            </div>
          );
        })}
        <h4 className="see-all-projects">See all projects</h4>
      </div>
    </div>
  );
};

export default Projects;
