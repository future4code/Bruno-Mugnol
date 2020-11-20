import React from 'react';
import { useHistory } from 'react-router-dom';
import useAdminOnlyAccess from '../hooks/useAdminOnlyAccess';

const TripFormPage = () => {
  useAdminOnlyAccess()
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