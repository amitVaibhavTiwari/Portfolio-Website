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

          <div className="projects-box-container">
            {projects.map((e) => {
              return <SingleProject key={e.id} {...e} />;
            })}
          </div>
        </Fade>
      </div>
      <Footer />
    </PageChanger>
  );
};

export default Projects;
