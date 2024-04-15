/* eslint-disable react/no-unescaped-entities */
import { Fade, Zoom } from "react-awesome-reveal";
import Education from "../../Components/EducationTimeline/Education";
import { PageChanger } from "../../Components/Page-changer/PageChanger";
import "./About.scss";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <PageChanger>
      <div className="about-pg">
        <Zoom triggerOnce={true}>
          <h1>A little bit about me.</h1>
        </Zoom>
        <Fade
          fraction={0.1}
          delay={530}
          cascade
          damping={0.5}
          triggerOnce={true}
        >
          <p className="info-para">
            I'm an undergrad student pursuing a Bachelor's degree in Computer
            Science and Engineering. As a full-stack developer, I posses
            expertise in both frontend and backend development, bringing
            projects to life from design to function.
            <br />
            I'm well-versed in both frontend and backend technologies like React
            js, Node js, Express js, PostgreSQL, MongoDB and so on. I'm also
            good at solving problems using Java.
            <br />I am a quick learner and continuously seek to expand my
            knowledge in the field. I am currently learning React Native to
            create native mobile applications, which will further enhance my
            skills. I am not only a talented designer and developer, but also a
            natural leader who is a hard worker and a great team player. I
            thrive under pressure and am confident in meeting tight deadlines.
          </p>
        </Fade>
        <Fade triggerOnce={true} delay={980}>
          <h1>Education</h1>

          <Education />
        </Fade>
      </div>
      <Footer />
    </PageChanger>
  );
};

export default About;
