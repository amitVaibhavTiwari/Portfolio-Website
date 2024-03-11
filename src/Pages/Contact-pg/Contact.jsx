import Nav from "../../Components/Navbar/Nav";
import "./Contact.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact-pg">
        <h1>
          Have an idea ? <br></br> Interested in working together ?
        </h1>
        <div className="contact-box">
          <h2>Let’s talk</h2>
          <div className="group">
            <span>
              <IoLogoWhatsapp />
            </span>
            <p>Chat with me</p>
          </div>
          <div className="group">
            <span>
              <IoMail />
            </span>
            <p>Mail me</p>
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
      </div>
    </div>
  );
};

export default Contact;
