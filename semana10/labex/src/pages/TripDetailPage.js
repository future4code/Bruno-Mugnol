import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const TripDetailPage = () => {
  const history = useHistory()
  const pathParams = useParams()

  const goBackToTrips = () => {
    history.push("/trips")
  }

  const goToUserApplication = () => {
    history.push(`/application/${pathParams.tripID}`)
  }

  return (
    <div>
      <p>TripDetailPage</p>
      <button onClick={goBackToTrips}>Voltar</button>
      <button onClick={goToUserApplication}>Inscreva-se!</button>
    </div>
  );
}

export default TripDetailPage