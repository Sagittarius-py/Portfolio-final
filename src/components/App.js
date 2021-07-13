import React from "react";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/main.scss";

function App() {
  return (
    <Router>
      <div className="main">
        <Page />
      </div>
    </Router>
  );
}

export default App;
