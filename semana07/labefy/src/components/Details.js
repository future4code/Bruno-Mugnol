import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

const HalflingDiv = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 32px;
    text-align: center;
`
const KidDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

class Details extends React.Component {
    state = {
        playlistTracks: [],
    }

    componentDidUpdate = () => {
        this.fetchPlaylistTracks()
    }

    fetchPlaylistTracks = () => {
        console.log(this.props.playlistInfo.id)
        axios.get(`${baseUrl + this.props.playlistInfo.id}/tracks`, { headers: this.props.headers })
            .then(response => {
                if (response.data.result.quantity) {
                    this.setState({ playlistTracks: response.data.result.tracks })
                }
                console.log(response.data.result.tracks)
            }).catch((error) => {
                console.log("Erro ao buscar tracks")
                console.log(error.message)
            })
    }

    render() {
        const renderedTracks = (this.state.playlistTracks[0]) ?
            this.state.playlistTracks.map((track) => {
            return <p>{track.name}</p>
            })
            : <p>Esta playlist não tem nenhuma música!</p>

        return (
            <HalflingDiv>
                <h3>{this.props.playlistInfo.name}</h3>
                <br />
                <KidDiv>
                    {renderedTracks}
                </KidDiv>
            </HalflingDiv>
        )
    }
}

export default Details