import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory()

  const goBackHome = () => {
    history.push("/")
  }

  const goToAdminHomePage = () => {
    history.push("/home/admin")
  }

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={goBackHome}>Voltar</button>
      <button onClick={goToAdminHomePage}>Login</button>
    </div>
  );
}

export default LoginPage