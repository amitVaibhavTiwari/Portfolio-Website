// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./GlobalContext.jsx";
import "./saas_styles/Global.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GlobalContext>
    <App />
  </GlobalContext>
  // </React.StrictMode>,
);
