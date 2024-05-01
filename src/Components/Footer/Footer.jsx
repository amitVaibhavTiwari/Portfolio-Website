/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";
import { FaLinkedin, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
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
          <span className="footer-link">
            <FaXTwitter />
          </span>
          <a
            href="https://www.linkedin.com/in/amit-vaibhav-tiwari-23967b306/"
            target="_blank"
            className="footer-link"
          >
            <FaLinkedin />
          </a>
          <a
            className="footer-link"
            href="https://github.com/amitVaibhavTiwari"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
        <h5>No © copyright issues. </h5>
        <h6>Feel free to copy whatever you like.</h6>
      </Fade>
    </div>
  );
};

export default Footer;
