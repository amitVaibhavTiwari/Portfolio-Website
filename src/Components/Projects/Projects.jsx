import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../Single-project/SingleProject";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-section">
      <h1>Recent projects</h1>
      <h2>Take a look</h2>

      <div className="projects-box-container">
        {projects.map((e) => {
          return <SingleProject key={e.id} {...e} />;
        })}
      </div>
      <h4 onClick={() => navigate("/projects")} className="see-all-projects">
        See all projects
      </h4>
    </div>
  );
};

export default Projects;
