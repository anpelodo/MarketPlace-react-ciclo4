export function useAuth() {
  const key = 'authData';

  const putAuthData = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getAuthData = () => {
    const data = JSON.parse(localStorage.getItem(key));

    if (data) {
      //Decodificar JWT y verificar si aún es válido
      let token = '';
      token = data.token;
      const payload = token.split('.')[1];
      const payloadDecoded = JSON.parse(window.atob(payload));

      //Si es negativo significa que está vencido
      let diff = payloadDecoded.exp - Date.now() / 1000;
      return diff > 0 ? data : null;
    }

    return null;
  };

  return { getAuthData, putAuthData };
}
