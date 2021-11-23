import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import AuthHeader from "./components/AuthHeader";
import AuthHome from "./views/AuthHome";
import AuthLogin from "./views/AuthLogin";
import AuthRegister from "./views/AuthRegister";

export default function AuthView() {
  let { path } = useRouteMatch();

  return (
    <React.Fragment>
      <AuthHeader />
      <h2>Auth View</h2>

      <Switch>
        <Route exact path={`${path}`}>
          <AuthHome />
        </Route>

        <Route path={`${path}/login`}>
          <AuthLogin />
        </Route>

        <Route path={`${path}/register`}>
          <AuthRegister />
        </Route>

        <Route path={`${path}/*`}>
          <Redirect to="404-not-found" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
