import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../Single-project/SingleProject";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Recent projects</h1>
      <h2>Take a look</h2>

      <div className="projects-box-container">
        {projects.map((e) => {
          return <SingleProject key={e.id} {...e} />;
        })}
      </div>
      <h4 className="see-all-projects">See all projects</h4>
    </div>
  );
};

export default Projects;
