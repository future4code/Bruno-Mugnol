import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { baseUrl } from '../constants/constants';

import MatchButton from '../components/MatchButton';
import { MatchButtonDiv } from '../components/styled';
import { CenteredBiggerCard } from './styled';
import InfoCard from '../components/InfoCard';
import { Button } from '@material-ui/core';



const MatchingScreen = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getUnseenProfile()
    }, [])

    const getUnseenProfile = () => {
        axios.get(`${baseUrl}/person`)
            .then(response => {
                setProfile(response.data.profile)
            })
            .catch(error => {
                console.log("Erro ao buscar um perfil não visto.")
                console.log(error.message)
            })
    }

    const onClickChoose = (match) => {
        const body = {
            id: profile.id,
            choice: match
        }

        axios.post(`${baseUrl}/choose-person`, body)
            .then(response => {
                getUnseenProfile()
            })
            .catch(error => {
                console.log("Erro ao realizar escolha.")
                console.log(error.message)
            })
    }

    return (
        <CenteredBiggerCard>
            <Button variant="contained" onClick={props.onClickChangePage} >Ver seus matches</Button>
            <InfoCard name={profile.name} age={profile.age} photo={profile.photo} bio={profile.bio} />
            <MatchButtonDiv>
                <MatchButton buttonText={"Not so nice"} match={false} onClickChoose={onClickChoose} />
                <MatchButton buttonText={"Niiiiiice"} match={true} onClickChoose={onClickChoose} />
            </MatchButtonDiv>
        </CenteredBiggerCard>
    )
}

export default MatchingScreen