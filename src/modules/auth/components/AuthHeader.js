import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

export default function AuthHeader(props) {
  let { path } = useRouteMatch();

  let ref = [];
  if (props.login) {
    ref[0] = '¿No tienes una cuenta?';
    ref[1] = 'Regístrate';
    ref[2] = `${path}`;
  } else {
    ref[0] = '¿Ya tienes una cuenta?';
    ref[1] = 'Iniciar Sesion';
    ref[2] = `${path}/login`;
  }

  return (
    <header>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="/home">
            <img src="favicon.ico" alt="Icono de la app" width="45" />
          </Navbar.Brand>

          <div className="d-flex flex-row text-white align-items-center">
            <div className="text-white me-2" disabled>
              {ref[0]}
            </div>
            <Link className="text-reset text-white fw-bold" to={ref[2]}>
              {ref[1]}
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
