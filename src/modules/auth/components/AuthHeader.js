import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

export default function AuthHeader() {
  let { path } = useRouteMatch();

  return (
    <header>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <h1>Marketplace Auth</h1>
        <Link style={{ paddingLeft: "5px" }} to="/">
          Store
        </Link>
        <Link style={{ paddingLeft: "5px" }} to={`${path}`}>
          Home
        </Link>
        <Link style={{ paddingLeft: "5px" }} to={`${path}/login`}>
          Login
        </Link>
        <Link style={{ paddingLeft: "5px" }} to={`${path}/register`}>
          Register
        </Link>
      </nav>
    </header>
  );
}
