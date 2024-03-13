import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../../Components/Single-project/SingleProject";
import { PageChanger } from "../../Components/Page-changer/PageChanger";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <PageChanger>
      <div className="all-projects-pg">
        <Fade direction="up" triggerOnce={true}>
          <h1 className="projects-heading">Projects</h1>
          <Fade fraction={0.1} cascade damping={0.2} triggerOnce={true}>
            <div className="projects-box-container">
              {projects.map((e) => {
                return <SingleProject key={e.id} {...e} />;
              })}
            </div>
          </Fade>
        </Fade>
      </div>
    </PageChanger>
  );
};

export default Projects;
