import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../../Components/Single-project/SingleProject";
import { PageChanger } from "../../Components/Page-changer/PageChanger";
import { Fade } from "react-awesome-reveal";
import Footer from "../../Components/Footer/Footer";
const Projects = () => {
  return (
    <PageChanger>
      <div className="all-projects-pg">
        <Fade triggerOnce={true}>
          <h1 className="projects-heading">Projects</h1>

          <div className="all-projects-container">
            {projects.map((e) => {
              return <SingleProject key={e.id} {...e} />;
            })}
          </div>
        </Fade>
      </div>
      <div className="projects-pg-footer-container">
        <Footer />
      </div>
    </PageChanger>
  );
};

export default Projects;
