import "./Landing.scss";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";
const Landing = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Landing;
