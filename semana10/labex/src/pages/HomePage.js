import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory()

  const goToTripsPage = () => {
    history.push("/trips")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <div>
      <p>HomePage</p>
      <button onClick={goToTripsPage}>Acesso usuário</button>
      <button onClick={goToLoginPage}>Acesso admin</button>
    </div>
  );
}

export default HomePage