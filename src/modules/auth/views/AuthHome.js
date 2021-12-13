import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory, useRouteMatch } from 'react-router-dom/';

export default function AuthHome() {
  let history = useHistory();
  let { path } = useRouteMatch();

  const loginRedirect = () => {
    console.log('Redirecting to login');
    history.push(`${path}/register`);
  };

  return (
    <div className="d-flex justify-content-center h-100">
      <div className="d-flex flex-column gap-2 w-50 align-items-center justify-content-center ">
        <h5 style={{ fontWeight: 'normal' }}>Crear una cuenta es gratis</h5>
        <div className="d-grid gap-4 w-75 align-items-center">
          <Button variant="outline-primary" size="lg" onClick={loginRedirect}>
            <div className="d-flex flex-row gap-2 text-dark text-wrap align-items-center justify-content-center">
              <span className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-mailbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                </svg>
              </span>
              <div>Continuar con correo-e</div>
            </div>
          </Button>
          <div style={{ textAlign: 'justify' }}>
            Si continúas, indicas que estás de acuerdo con los Términos de Uso y
            confirmas que has leído las Política de Privacidad.
          </div>
        </div>
      </div>
    </div>
  );
}
