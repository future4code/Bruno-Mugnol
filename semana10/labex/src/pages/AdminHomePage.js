import React from 'react';
import { useHistory } from 'react-router-dom';
import useAdminOnlyAccess from '../hooks/useAdminOnlyAccess';

const AdminHomePage = () => {
    useAdminOnlyAccess()
    const history = useHistory()

    const goBackAdminHome = () => {
        history.push("/")
    }

    const goToTripForm = () => {
        history.push("/trips/create")
    }

    const goToTrips = () => {
        history.push("/trips")
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goBackAdminHome}>Voltar</button>
            <button onClick={goToTripForm}>Criar Viagem</button>
            <button onClick={goToTrips}>Ver viagens</button>
        </div>
    );
}

export default AdminHomePage