import "./Projects.scss";
import { projects } from "../../Data";
import SingleProject from "../../Components/Single-project/SingleProject";
import { PageChanger } from "../../Components/Page-changer/PageChanger";
const Projects = () => {
  return (
    <PageChanger>
      <div className="all-projects-pg">
        <h1 className="projects-heading">Projects</h1>
        <div className="projects-box-container">
          {projects.map((e) => {
            return <SingleProject key={e.id} {...e} />;
          })}
        </div>
      </div>
    </PageChanger>
  );
};

export default Projects;
