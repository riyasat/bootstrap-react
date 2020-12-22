import React from "react";
import ReactDOM from "react-dom";
import Main from "./Pages/Main";
import "./Assets/scss/bootstrap.scss";
import "./Utilities/SelectorEngine";
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
