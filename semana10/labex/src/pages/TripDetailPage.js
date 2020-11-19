import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const TripDetailPage = () => {
  const history = useHistory()
  const pathParams = useParams()

  const goBackToTrips = () => {
    history.push("/trips")
  }

  return (
    <div>
      <p>TripDetailPage</p>
      <button onClick={goBackToTrips}>Voltar</button>
    </div>
  );
}

export default TripDetailPage