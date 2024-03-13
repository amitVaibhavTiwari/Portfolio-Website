import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../Single-project/SingleProject";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-section">
      <Fade direction="up" delay={100} triggerOnce={true}>
        <h1>Recent projects</h1>
      </Fade>
      <Fade direction="up" delay={100} triggerOnce={true}>
        <h2>Take a look</h2>
      </Fade>
      <Fade fraction={0.15} cascade damping={0.2} triggerOnce={true}>
        <div className="projects-box-container">
          {projects.map((e) => {
            return <SingleProject key={e.id} {...e} />;
          })}
        </div>

        <h4 onClick={() => navigate("/projects")} className="see-all-projects">
          See all projects
        </h4>
      </Fade>
    </div>
  );
};

export default Projects;
