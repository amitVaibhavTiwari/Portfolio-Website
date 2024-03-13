/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <div className="footer">
      <div className="line"></div>
      <Fade fraction={0.1} cascade damping={0.1} triggerOnce={true}>
        <h1>Let's connect</h1>
        <h2>
          Feel free to reach out for collaborations or just a friendly hello.
        </h2>
        <h3>amitvaibhavtiwari@gmail.com</h3>
        <div className="social-icons-container">
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaGithub />
          </span>
          <span>
            <IoMailSharp />
          </span>
        </div>
        <h5>No © copyright issues. </h5>
        <h6>Feel free to copy whatever you like.</h6>
      </Fade>
    </div>
  );
};

export default Footer;
