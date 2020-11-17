import React from 'react';
import { useHistory } from 'react-router-dom';

const TripFormPage = () => {
  const history = useHistory()

  const goToAdminHome = () => {
    history.push("/home/admin")
  }

  return (
    <div>
      <p>TripFormPage</p>
      <button onClick={goToAdminHome}>Voltar</button>
    </div>
  );
}

export default TripFormPage