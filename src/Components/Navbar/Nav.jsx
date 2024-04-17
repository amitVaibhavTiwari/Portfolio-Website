import { useEffect, useState } from "react";
import "./Nav.scss";
import { BsList } from "react-icons/bs";
import { useGlobalContext } from "../../GlobalContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Nav = () => {
  const { userPreferredTheme, dispatch } = useGlobalContext();

  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState(userPreferredTheme);

  useEffect(() => {
    const body = document.documentElement;
    if (showSidebar) {
      body.style =
        "overflow-y: hidden; position: absolute; width: 100%; top: 0px; ";
    } else {
      body.style =
        "overflow-y: overlay; position: initial; width: auto; top: initial ;";
    }
  }, [showSidebar]);

  const handleThemeChange = () => {
    if (theme === "dark") {
      dispatch({
        type: "CHANGE_USER_THEME_PREFERENCE",
        payload: { theme: "default" },
      });
      setTheme("default");
    }
    if (theme === "default") {
      dispatch({
        type: "CHANGE_USER_THEME_PREFERENCE",
        payload: { theme: "dark" },
      });
      setTheme("dark");
    }
  };

  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-center">
        <Logo className="logo" />
        <div className="nav-links-container">
          <ul className="nav-links">
            <Fade fraction={0.1} cascade damping={0.3} triggerOnce={true}>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/about")}>About me</li>
              <li onClick={() => navigate("/connect")}>Contact me</li>
              <li onClick={() => navigate("/projects")}> Projects</li>
            </Fade>
          </ul>
          <span>
            <div onClick={() => handleThemeChange()} className="theme">
              {theme === "dark" ? <IoSunnyOutline /> : <IoIosMoon />}
            </div>
            <div
              onClick={() => setShowSidebar(!showSidebar)}
              className="toggle-btn"
            >
              <BsList />
            </div>
          </span>
        </div>
      </div>

      {/* below is sidebar visible only on mobile */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${
          showSidebar
            ? "sidebar-container show-sidebar-container"
            : "sidebar-container"
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            return null;
          }}
          className="sidebar"
        >
          <div className="sidebar-logo">
            <Logo />
          </div>
          <Fade
            fraction={0.1}
            triggerOnce={true}
            direction="right"
            cascade
            damping={0.1}
          >
            <ul>
              <li
                onClick={() => {
                  setShowSidebar(false);
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  setShowSidebar(false);
                  navigate("/about");
                }}
              >
                About me
              </li>
              <li
                onClick={() => {
                  setShowSidebar(false);
                  navigate("/connect");
                }}
              >
                Contact me
              </li>
              <li
                onClick={() => {
                  setShowSidebar(false);
                  navigate("/projects");
                }}
              >
                {" "}
                Projects
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
