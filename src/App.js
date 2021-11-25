import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomeView from './modules/home/HomeView';
import AuthView from './modules/auth/AuthView';
import AdminView from './modules/admin/AdminView';
import NoMatch from './modules/common/NoMatch';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <HomeView />
        </Route>

        <Route path="/auth">
          <AuthView />
        </Route>

        <Route path="/admin">
          <AdminView />
        </Route>

        <Route path="/404-not-found">
          <NoMatch />
        </Route>

        <Route path="*">
          <Redirect to="/404-not-found" />
        </Route>
      </Switch>
    </Router>
  );
}
