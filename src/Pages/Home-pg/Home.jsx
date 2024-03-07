import { Outlet } from "react-router-dom";
import "./Home.scss";
import Nav from "../../Components/Navbar/Nav";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Skills />
      <Outlet />
    </div>
  );
};

export default Home;
