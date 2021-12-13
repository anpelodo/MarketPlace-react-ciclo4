import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { getAuthData } = useAuth();
  const location = useLocation();

  const authData = getAuthData();

  let isAdmin = false;
  let redirectPath = 'auth/login';
  if (authData) {
    const rol = authData.user.rol;

    isAdmin = rol === 'ADMIN';

    redirectPath = rol === 'USER' ? '/' : redirectPath;
  }

  return (
    <Route {...rest}>
      {isAdmin === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: redirectPath, state: { from: location } }} />
      )}
    </Route>
  );
}
