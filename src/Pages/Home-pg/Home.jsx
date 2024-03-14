import { Outlet } from "react-router-dom";
import "./Home.scss";
import Nav from "../../Components/Navbar/Nav";
import { PageChanger } from "../../Components/Page-changer/PageChanger";

const Home = () => {
  return (
    <PageChanger>
      <Nav />
      <Outlet />
    </PageChanger>
  );
};

export default Home;
