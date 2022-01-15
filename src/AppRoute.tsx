import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";

function AppRoute() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default AppRoute;
