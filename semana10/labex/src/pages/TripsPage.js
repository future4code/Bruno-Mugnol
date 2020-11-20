import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetchToken from '../hooks/useFetchToken';
import useGetRequest from '../hooks/useGetRequest';

const TripsPage = () => {
  const history = useHistory()
  const tripsObject = useGetRequest("/trips", null)
  const token = useFetchToken()

  const goBackHome = () => {
    history.push("/")
  }

  const goToUserApplication = (id) => {
    history.push(`/application/${id}`)
  }

  const goToTripDetail = (id) => {
    history.push(`/trips/details/${id}`)
  }

  const renderedTrips = tripsObject.trips ? tripsObject.trips.map((trip) => {
    return (
      <div key={trip.id}>
        <h3>{trip.name}</h3>
        <p><em>{trip.description}</em></p>
        <h4>Partida: {trip.date}, viagem de {trip.durationInDays} dias</h4>
        <button onClick={() => goToUserApplication(trip.id)}>Inscreva-se</button>
        {token && <button onClick={() => { goToTripDetail(trip.id) }}>Ver detalhes</button>}
        <br />
        <br />
      </div>
    )
  }) : null

  return (
    <div>
      <p>TripsPage</p>
      {renderedTrips}
      <button onClick={goBackHome}>Voltar</button>      
    </div>
  );
}

export default TripsPage