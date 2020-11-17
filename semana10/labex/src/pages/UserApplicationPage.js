import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UserApplicationPage = () => {
  const history = useHistory()
  const pathParams = useParams()

  const goToTripDetail = () => {
    history.push(`/trips/details/${pathParams.tripID}`)
  }

  const goToTrips = () => {
    history.push("/trips")
  }

  return (
    <div>
      <p>UserApplicationPage</p>
      <button onClick={goToTripDetail}>Voltar</button>
      <button onClick={goToTrips}>Enviar</button>
    </div>
  );
}

export default UserApplicationPage