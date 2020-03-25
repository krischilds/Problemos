import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "./Components/LogicProblems/Game";
import Home from "./Home";
import ProblemList from "./Components/Problems";
import NavMenu from "./Components/Nav"
import LinkedListProblems from "./Components/LogicProblems/LinkedList/LinkedListProblems";
import FindMeetingTimes from "./Components/LogicProblems/FindMeetingTimes";

export default function AppLinks() {
  return (
    <section>
      <h4>Study App</h4>

      <Router>
        <div>
          <NavMenu />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={ProblemList} />
            <Route exact path="/ttt" component={Game} />
            <Route exact path="/linked-list" component={LinkedListProblems} />
            <Route exact path="/meeting-times" component={FindMeetingTimes} />
          </Switch>

        </div>
      </Router>
    </section>
  );
}
