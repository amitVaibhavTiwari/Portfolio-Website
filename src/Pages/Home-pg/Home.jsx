import { Outlet } from "react-router-dom";
import "./Home.scss";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer";
import { PageChanger } from "../../Components/Page-changer/PageChanger";

const Home = () => {
  return (
    <PageChanger>
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </PageChanger>
  );
};

export default Home;
