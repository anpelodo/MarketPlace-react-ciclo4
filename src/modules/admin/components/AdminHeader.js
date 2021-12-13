import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function AdminHeader() {
  return (
    <header className="w-100 mb-5">
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="/home" className="fw-bold text-white">
            <img
              src="favicon.ico"
              alt="Icono de la app"
              width="45"
              className="me-3"
            />
            Marketplace
          </Navbar.Brand>

          <Nav className="ms-auto fw-bold text-white fs-5">
            <div>Administrar productos</div>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
