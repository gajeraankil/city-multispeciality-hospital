import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { history } from "./history";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

reportWebVitals();
