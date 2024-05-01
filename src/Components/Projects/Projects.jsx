import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../Single-project/SingleProject";
import { useNavigate } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-section">
      <Fade direction="up" delay={800} triggerOnce={true}>
        <h1>Recent projects</h1>
      </Fade>
      <Fade direction="up" delay={860} triggerOnce={true}>
        <h2>Take a look</h2>
      </Fade>

      <div className="projects-box-container">
        {projects.slice(0, 3).map((e) => {
          return <SingleProject key={e.id} {...e} />;
        })}
      </div>

      <Zoom triggerOnce={true}>
        <h4 onClick={() => navigate("/projects")} className="see-all-projects">
          See all projects
        </h4>
      </Zoom>
    </div>
  );
};

export default Projects;
