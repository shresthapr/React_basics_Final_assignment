import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/lists">
            <List />
          </Route>
          <Route path="/joinus">
            <Join />
          </Route>
          <Route path="/leave">
            <Leave />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;