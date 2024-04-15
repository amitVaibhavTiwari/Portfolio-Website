/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
const globalContext = createContext();
// const root = document.getElementById("root");
const root = document.documentElement;

export const useGlobalContext = () => useContext(globalContext);

// this function is to get user's preferred theme
const getInitialThemePreference = () => {
  const userPreferredTheme = localStorage.getItem("THEME");

  if (userPreferredTheme) {
    // means user has opened our site at least once and has selected a theme preference (that's why there is preference in local storage)
    // add theme specific class to our root element
    root.classList.add(`${userPreferredTheme}-theme`);
    return userPreferredTheme;
  } else {
    // user has no theme preference stored in local storage
    // check weather user prefers light theme or dark theme on its browser and accordingly return theme preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (prefersDarkMode === true) {
      // user likes dark mode by default
      root.classList.add(`dark-theme`);

      return "dark";
    }
    if (prefersDarkMode === false) {
      // user likes light mode by default
      root.classList.add(`default-theme`);

      return "default";
    }
  }
};

const GlobalContext = ({ children }) => {
  // this is global state,based on which we'll set darkmode or light mode
  const defaultState = {
    userPreferredTheme: getInitialThemePreference(),
  };

  const reducer = (state, action) => {
    // this below function does what its action name is
    if (action.type === "CHANGE_USER_THEME_PREFERENCE") {
      // removing previous theme preferred class from root
      root.className = "";
      // adding theme preferred class to root
      root.classList.add(`${action.payload.theme}-theme`);
      localStorage.setItem("THEME", action.payload.theme);
      return { ...state, userPreferredTheme: action.payload.theme };
    }
    
  };

  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <globalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
