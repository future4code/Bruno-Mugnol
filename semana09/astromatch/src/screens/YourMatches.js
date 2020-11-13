import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { baseUrl } from '../constants/constants';

import { CenteredBiggerCard, Img64x64, PicPlusNameBox } from './styled';
import { Button } from '@material-ui/core'


const YourMatches = (props) => {
    const [matchedProfiles, setMatchedProfiles] = useState([])

    useEffect(() => {
        getMatchedProfiles()
    }, [])

    const getMatchedProfiles = () => {
        axios.get(`${baseUrl}/matches`)
            .then(response => {
                setMatchedProfiles(response.data.matches)
            })
            .catch(error => {
                console.log("Erro ao buscar matches.")
                console.log(error.message)
            })
    }

    const onClickClearMatches = () => {
        axios.put(`${baseUrl}/clear`)
            .then(() => {
                alert("Matches limpos com sucesso!")
                getMatchedProfiles()
            })
            .catch((error) => {
                console.log("Erro ao limpar matches.")
                console.log(error.message)
            })
    }

    const renderedMatchedProfiles = !matchedProfiles.length ? <p>Você ainda não deu match! Penteia o cabelo aí</p>
        : matchedProfiles.map((profile) => {
            return <PicPlusNameBox color="text.primary" key={profile.id}><Img64x64 src={profile.photo} />{profile.name}</PicPlusNameBox>
        })

    return (
        <CenteredBiggerCard>
            <Button variant="contained" onClick={props.onClickChangePage}>Continue a dar matches!</Button>
            <Button variant="contained" color="secondary" onClick={onClickClearMatches}>Limpe todos seus matches</Button>
            {renderedMatchedProfiles}
        </CenteredBiggerCard>
    )
}

export default YourMatches