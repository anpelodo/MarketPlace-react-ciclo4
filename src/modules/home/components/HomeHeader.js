import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

export default function HomeHeader() {
  let { path } = useRouteMatch();

  return (
    <header>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Marketplace React</h1>
        <Link style={{ paddingLeft: '5px' }} to={`${path}`}>
          Store
        </Link>
        <Link style={{ paddingLeft: '5px' }} to={`${path}/cart`}>
          Carrito
        </Link>
        <Link style={{ paddingLeft: '5px' }} to={`${path}/product`}>
          Product
        </Link>
        <Link style={{ paddingLeft: '5px' }} to={`/auth`}>
          Login
        </Link>
        <Link style={{ paddingLeft: '5px' }} to={`/admin`}>
          Admin
        </Link>
      </nav>
    </header>
  );
}
