import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAdminOnlyAccess from '../hooks/useAdminOnlyAccess';
import useFetchToken from '../hooks/useFetchToken';
import useGetRequest from '../hooks/useGetRequest';

const TripDetailPage = () => {
  useAdminOnlyAccess()
  const token = useFetchToken()
  const history = useHistory()
  const pathParams = useParams()

  const detailsObject = useGetRequest(`/trip/${pathParams.tripID}`, token)

  const goBackToTrips = () => {
    history.push("/trips")
  }

  return (
    <div>
      <p>TripDetailPage</p>
      {detailsObject.trip ?
        <h2>{detailsObject.trip.name}</h2>
        :
        <p>... Carregando ...</p>
      }
      <button onClick={goBackToTrips}>Voltar</button>
    </div>
  );
}

export default TripDetailPage