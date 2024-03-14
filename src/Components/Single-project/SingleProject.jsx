/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import "./SingleProject.scss";
import { useNavigate } from "react-router-dom";

const SingleProject = ({ name, miniDesc, technologies, img, id }) => {
  const navigate = useNavigate();
  return (
    <div className="project-box">
      <Fade delay={id * 200} triggerOnce={true}>
        <img src={img} alt={name} />

        <h1>{name}</h1>
        <p>{miniDesc}</p>
        <div className="technologies-used">
          {technologies.map((e) => {
            return (
              <div key={e} className="tech-box">
                {e}
              </div>
            );
          })}
        </div>
        <button onClick={() => navigate(`/project/${id}`)} className="see-more">
          See more
        </button>
      </Fade>
    </div>
  );
};

export default SingleProject;
