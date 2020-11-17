import React from 'react';
import { useHistory } from 'react-router-dom';

const TripsPage = () => {
  const history = useHistory()

  const goBackHome = () => {
    history.push("/")
  }

  const goTripDetail = (id) => {
    history.push(`/trips/details/${id}`)
  }

  return (
    <div>
      <p>TripsPage</p>
      <button onClick={goBackHome}>Voltar</button>
      <button onClick={() => { goTripDetail(Date.now()) }}>Ver detalhes</button>
    </div>
  );
}

export default TripsPage