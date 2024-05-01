/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import "./SingleProject.scss";
import { useNavigate } from "react-router-dom";

const SingleProject = ({ name, technologies, img, id, points, link }) => {
  const navigate = useNavigate();
  return (
    <div className="project-box">
      <Fade delay={id * 200} triggerOnce={true}>
        <img src={img} alt={name} />

        <h1>{name}</h1>
        <ul>
          {points.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
        <div className="technologies-used">
          {technologies.map((e) => {
            return (
              <div key={e} className="tech-box">
                {e}
              </div>
            );
          })}
        </div>
        <a href={link} target="_blank">
          <button className="see-more">View Live</button>
        </a>
      </Fade>
    </div>
  );
};

export default SingleProject;
