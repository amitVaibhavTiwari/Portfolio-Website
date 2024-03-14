import "./Skills.scss";
import { skills } from "../../Data";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
  return (
    <div className="skills-container">
      <Fade direction="up" triggerOnce={true}>
        <h1>Skills</h1>
      </Fade>
      <Fade direction="up" triggerOnce={true}>
        <h2>See what i am good at</h2>
      </Fade>
      <div className="skills-box-container">
        <Fade
          fraction={0.1}
          cascade
          damping={0.08}
          direction="up"
          triggerOnce={true}
        >
          {skills.map((e) => {
            return (
              <div key={e.id} className="skill-card">
                <img src={e.img} alt={e.name} />
                <h4>{e.name}</h4>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
