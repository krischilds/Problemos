import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./Components/Game";
import Home from "./Components/Home";
import LinkedListProblems from "./Components/LogicProblems/LinkedList/LinkedListProblems";
import ProblemList from "./Components/LogicProblems";
import FindMeetingTimes from "./Components/LogicProblems/FindMeetingTimes";
import NavMenu from "./Components/Nav";

export default function App() {
  return (
    <section>
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
