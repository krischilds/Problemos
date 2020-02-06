import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";
import LogicProblems from "./LogicProblems";

export default function AppLinks() {
  return (
    <section>
      <h4>Study App</h4>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/game">TTTicacoe</Link>
            </li>
            <li>
              <Link to="/logic-problems">Logic Problems</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/logic-problems" component={LogicProblems} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}
