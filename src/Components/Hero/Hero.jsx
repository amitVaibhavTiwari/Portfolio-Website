import { useNavigate } from "react-router-dom";
import "./Hero.scss";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-left">
        <Fade
          fraction={0.1}
          delay={1500}
          direction="up"
          cascade
          damping={0.2}
          triggerOnce={true}
        >
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
        </Fade>
      </div>
      <div className="hero-right">
        <Fade direction="right" triggerOnce="true">
          <div className="img-frame">
            <Fade direction="right" delay={700} triggerOnce="true">
              <img src="/photo1709926858.jpeg" />
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
