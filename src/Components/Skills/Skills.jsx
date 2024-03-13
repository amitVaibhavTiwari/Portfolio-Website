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
        {skills.map((e) => {
          return (
            <Fade
              key={e.id}
              direction="up"
              delay={e.id * 120}
              triggerOnce={true}
            >
              <div className="skill-card">
                <img src={e.img} alt={e.name} />
                <h4>{e.name}</h4>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
