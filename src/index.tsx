import { StylesProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import App from "./App";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
