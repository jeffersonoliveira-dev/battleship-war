import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Score from "./routes/Score";
import Dashboard from "./routes/Dashboard";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/game" component={Game} />
      <Route path="/score" component={Score} />
      <GlobalStyles />
    </div>
  </Router>,
  document.getElementById("root")
);

