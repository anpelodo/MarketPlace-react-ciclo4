import React from 'react';

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-evenly bg-light p-3">
      <div className="d-flex flex-column">
        <h2 className="fw-bold text-primary">Contacto</h2>

        <div className="text-info">
          <p>
            <div> Persona 1 </div>
            <div> email: persona1@gmail.com </div>
          </p>
          <p>
            <div> Persona 2 </div>
            <div> email: persona2@gmail.com </div>
          </p>
        </div>
      </div>

      <div className="d-flex flex-column">
        <h2 className="fw-bold text-primary">Acerca de</h2>

        <div className="text-info">
          <p> Acerca de Marketplace </p>
          <p> Condiciones de privacidad </p>
          <p> Condiciones de uso </p>
        </div>
      </div>
    </footer>
  );
}
