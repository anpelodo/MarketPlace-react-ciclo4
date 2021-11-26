import React from 'react';

import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import HomeHeader from './components/HomeHeader';
import CartView from './views/CartView';
import ProductView from './views/ProductView';
import StoreView from './views/StoreView';
import Footer from '../common/Footer';

export default function HomeView(props) {
  let { path } = useRouteMatch();

  return (
    <div className="content-footer">
      <div>
        <HomeHeader />

        <h2>Home View</h2>

        <Switch>
          <Route path={`${path}/cart`}>
            <CartView />
          </Route>

          <Route path={`${path}/product`}>
            <ProductView />
          </Route>

          <Route exact path={`${path}`}>
            <StoreView />
          </Route>

          <Route path={`${path}/*`}>
            <Redirect to="/404-not-found" />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}
