import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Containers/HomePage';
import NotFound from "./Containers/404Page";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
