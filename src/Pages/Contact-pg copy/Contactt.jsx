import "./Contact.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PageChanger } from "../../Components/Page-changer/PageChanger";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";

const Contactt = () => {
  return (
    <PageChanger>
      <div className="contact-pg">
        {/* <Fade direction="up" triggerOnce={true}> */}
        <h1>Have an idea ?</h1>
        {/* </Fade> */}
        {/* <Fade direction="up" delay={400} triggerOnce={true}> */}
        <h3> Interested in working together ?</h3>
        {/* </Fade> */}

        {/* <Fade direction="up" triggerOnce={true} delay={600}> */}
        <div className="contact-box">
          <h2>Let’s talk</h2>
          <div className="group-parent">
            <div
              onClick={(e) => {
                window.location.href =
                  "https://api.whatsapp.com/send?phone=9511414759";
                e.preventDefault();
              }}
              className="group"
            >
              <span>
                <IoLogoWhatsapp />
              </span>
              <p>Chat with me</p>
            </div>
            <div
              onClick={(e) => {
                window.location.href = "mailto:amitvaibhavtiwari@gmail.com";
                e.preventDefault();
              }}
              className="group"
            >
              <span>
                <IoMail />
              </span>
              <p>Mail me</p>
            </div>
          </div>

          <div className="social-links">
            <h1>Find me:</h1>
            <div className="socials-box-container">
              <div className="breaker">
                <span>
                  <FaSquareInstagram />
                </span>
                <span>
                  <FaXTwitter />
                </span>
              </div>
              <div className="breaker">
                <span>
                  <FaLinkedin />
                </span>
                <span>
                  <FaGithub />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </div>
    </PageChanger>
  );
};

export default Contactt;
