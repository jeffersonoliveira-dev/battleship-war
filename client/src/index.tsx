import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Ranking from "./routes/Ranking";
import Dashboard from "./routes/Dashboard";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from 'react-redux'
import {store} from './store/index'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/game" component={Game} />
      <Route path="/ranking" component={Ranking} />
      <GlobalStyles />
    </div>
    </Router>
    </Provider>
    ,
  document.getElementById("root")
);

