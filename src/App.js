import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Containers/HomePage';
import Cases from './Containers/CasesPage';
import Contact from './Containers/ContactPage';
import NotFound from "./Containers/404Page";
import Team from './Containers/TeamPage';
import Navigation from "./Components/Navbar";
import ServicesMethods from './Containers/ServicesMethodsPage';
import CaseDetails from './Containers/CaseDetailsPage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/services&Methods" component={ServicesMethods} />
            <Route exact path="/cases" component={Cases} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/caseDetails" component={CaseDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
