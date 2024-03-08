import { Outlet } from "react-router-dom";
import "./Home.scss";
import Nav from "../../Components/Navbar/Nav";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Outlet />
    </div>
  );
};

export default Home;
