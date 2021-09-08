import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Dashboard from '../../pages/dashboard/dashboard';

/**
 * Creates a Navigation component.
 * @return {Component}
 */
function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <nav>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ol>
      </nav>
    </BrowserRouter>
  );
}

export default Navigation;
