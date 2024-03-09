import { useState } from "react";
import "./Nav.scss";
import { BsList } from "react-icons/bs";
import { useGlobalContext } from "../../GlobalContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Nav = () => {
  const { userPreferredTheme, dispatch } = useGlobalContext();

  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState(userPreferredTheme);
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

  return (
    <nav>
      <div className="nav-center">
        <Logo className="logo" />
        <div className="nav-links">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/about">
                About me
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/contact">
                Contact me
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
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

      {/* below is sidebar visible only on mobile */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${
          showSidebar
            ? "sidebar-container show-sidebar-container"
            : "sidebar-container"
        }`}
      >
        <div className={`${"sidebar"}`}>
          <div className="sidebar-logo">
            <Logo />
          </div>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/about">
                About me
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/contact">
                Contact me
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
