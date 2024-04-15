import "./Connect.scss";

import { PageChanger } from "../../Components/Page-changer/PageChanger";
import { Fade, Zoom } from "react-awesome-reveal";
import Footer from "../../Components/Footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Connect = () => {
  return (
    <PageChanger>
      <Zoom fraction={0.1} cascade damping={0.4} triggerOnce={true}>
        <div className="contact-me-pg">
          <Fade direction="up" triggerOnce={true}>
            <h1>Have an idea ?</h1>
          </Fade>
          <Fade direction="up" delay={700} triggerOnce={true}>
            <h3> Interested in working together ?</h3>
          </Fade>
          <Fade
            fraction={0.1}
            cascade
            delay={1100}
            damping={0.4}
            triggerOnce={true}
          >
            <div className="contact-box">
              <Zoom delay={1300} triggerOnce={true}>
                <h2>Let’s talk</h2>
              </Zoom>
              <div className="group-parent">
                <Fade direction="up" delay={1400} triggerOnce={true}>
                  <a
                    href="https://api.whatsapp.com/send?phone=9511414759"
                    className="group"
                    target="_blank"
                  >
                    <span>
                      <IoLogoWhatsapp />
                    </span>
                    <p>Chat with me</p>
                  </a>
                </Fade>
                <Fade direction="up" delay={1600} triggerOnce={true}>
                  <a
                    target="_blank"
                    href="mailto:amitvaibhavtiwari@gmail.com"
                    className="group"
                  >
                    <span>
                      <IoMail />
                    </span>
                    <p>Mail me</p>
                  </a>
                </Fade>
              </div>

              <div className="social-links">
                <Zoom delay={1800} triggerOnce={true}>
                  <h1>Find me:</h1>
                </Zoom>
                <div className="socials-box-container">
                  <Fade direction="up" delay={2000} triggerOnce={true}>
                    <div className="breaker">
                      <span>
                        <FaSquareInstagram />
                      </span>

                      <span>
                        <FaXTwitter />
                      </span>
                    </div>
                  </Fade>
                  <Fade direction="up" delay={2200} triggerOnce={true}>
                    <div className="breaker">
                      <span>
                        <FaLinkedin />
                      </span>

                      <span>
                        <FaGithub />
                      </span>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Zoom>
    </PageChanger>
  );
};

export default Connect;
