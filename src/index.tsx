import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import App from "./App";
import { GlobalStyles } from "./styles/global-styles";

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
