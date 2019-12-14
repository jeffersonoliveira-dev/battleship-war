import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <GlobalStyles />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
