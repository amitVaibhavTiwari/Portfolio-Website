import { useNavigate } from "react-router-dom";
import "./Hero.scss";
import { Bounce, Fade, JackInTheBox, Roll, Zoom } from "react-awesome-reveal";
import TypewriterText from "../Typewriter/Typewriter";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-left">
        <Fade
          fraction={0.1}
          delay={1700}
          direction="up"
          cascade
          damping={0.32}
          triggerOnce={true}
        >
          <h1>Hey there,</h1>
          <h2>
            I'm <span> Amit</span>
          </h2>
          <div className="typewriter-parent">
            <TypewriterText />
          </div>
          <h4>
            I am an Undergraduate student and a developer who loves to convert
            designs into quality code. I have a keen interest in the field of
            web development and UI UX development.
          </h4>
          <div className="hero-btns-container">
            <button onClick={() => navigate("/about")}>More about me</button>
            <button onClick={() => navigate("/connect")}>Reach out</button>
          </div>
        </Fade>
      </div>
      <div className="hero-right">
        <Fade
          fraction={0.1}
          direction="up"
          cascade
          delay={600}
          damping={0.45}
          triggerOnce={true}
        >
          <div className="img-frame"></div>
          <div>
            <img className="avt-img" src="/photo1709926858.jpeg" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
