import { useNavigate } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>Hey there,</h1>
        <h2>
          I'm <span> Amit</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <h4>
          I am a developer who loves to convert designs into quality code.
        </h4>
        <h5>
          I have a keen interest in the field of web development and UI UX
          development.
        </h5>
        <div className="hero-btns-container">
          <button onClick={() => navigate("/about")}>More about me</button>
          <button onClick={() => navigate("/contact")}>Reach out</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="img-frame">
          <img src="/photo1709926858.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
