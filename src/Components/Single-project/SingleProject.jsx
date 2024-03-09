/* eslint-disable react/prop-types */
import "./SingleProject.scss";

const SingleProject = ({ name, miniDesc, technologies, img }) => {
  return (
    <div className="project-box">
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
      <button className="see-more">See more</button>
    </div>
  );
};

export default SingleProject;
