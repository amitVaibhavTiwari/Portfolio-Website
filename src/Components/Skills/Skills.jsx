import "./Skills.scss";
import { skills } from "../../Data";
const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h2>See what i am good at</h2>
      <div className="skills-box-container">
        {skills.map((e) => {
          return (
            <div className="skill-card" key={e.id}>
              <img src={e.img} alt={e.name} />
              <h4>{e.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
