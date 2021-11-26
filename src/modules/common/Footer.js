import React from 'react';

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-evenly bg-light p-3 w-100">
      <div className="d-flex flex-column">
        <h2 className="fw-bold text-primary">Contacto</h2>

        <div className="text-info mb-2">
          <div className="mb-2">
            <div> Persona 1 </div>
            <div> email: persona1@gmail.com </div>
          </div>
          <div>
            <div> Persona 2 </div>
            <div> email: persona2@gmail.com </div>
          </div>
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
