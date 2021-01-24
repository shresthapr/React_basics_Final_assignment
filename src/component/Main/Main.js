import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Join from "./Join";
import Leave from "./Leave";
import List from "./List";

class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hbc-college"></Route>
            <Route path="/lists" component={List} />
            <Route path="/joinus" component={Join} />
            <Route path="/leave" component={Leave} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
