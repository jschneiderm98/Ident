import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect to="/dashboard" exact path="/" />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
