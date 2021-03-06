import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Details from './Details';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

const DaddyDiv = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template: 80px 1fr / 1fr 1fr;
`
const HalflingDiv = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 32px;
`
const HeaderDiv = styled.div`
    grid-area: 1 / 1 / 2 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: maroon;
    color: white;
`
const PlaylistNameInput = styled.input`
    margin-left: 8px;
    text-align: left;
`
const KidDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HuggingButton = styled.button`
    margin: 8px 4px;
`

class PlayList extends React.Component {
    state = {
        playlistNameValue: "",
        selectedPlaylist: null,
    }

    onChangePlaylistName = (event) => {
        this.setState({ playlistNameValue: event.target.value })
    }

    onClickCreatePlaylist = () => {
        if (this.state.playlistNameValue) {
            const body = {
                name: this.state.playlistNameValue
            }
            axios.post(baseUrl, body, { headers: this.props.headers })
                .then(() => {
                    this.setState({ playlistNameValue: "" })
                    this.props.updater()
                })
                .catch(error => {
                    console.log("Erro ao criar playlist")
                    console.log(error.message)
                })
        } else {
            window.alert("Criação não realizada. Campo vazio ou com nome já existente.")
        }
    }

    onClickDeletePlaylist = (playlistID) => {
        if (window.confirm("Tem certeza que deseja deletar esta playlist?")) {
            axios.delete(`${baseUrl + playlistID}`, { headers: this.props.headers })
                .then(() => {
                    this.props.updater()
                    if (playlistID === this.state.selectedPlaylist.id) {
                        this.setState({ selectedPlaylist: null })
                    }
                })
                .catch(error => {
                    console.log("Erro ao deletar playlist")
                    console.log(error.message)
                })
        }
    }

    onClickDetails = (playlistID, playlistName) => {
        const playlistInfo = {
            name: playlistName,
            id: playlistID
        }
        this.setState({ selectedPlaylist: playlistInfo })
    }

    render() {
        const renderedPlaylist = this.props.playlistsArray ?
            this.props.playlistsArray.map((playlist) => {
                return (
                    <KidDiv key={playlist.id}>
                        <li>{playlist.name}</li>
                        <div>
                            <HuggingButton
                                onClick={() => { this.onClickDetails(playlist.id, playlist.name) }}
                            >Ver detalhes</HuggingButton>
                            <HuggingButton
                                onClick={() => { this.onClickDeletePlaylist(playlist.id) }}
                            >X</HuggingButton>
                        </div>
                    </KidDiv>
                )
            })
            : <></>

        const renderedDetailOrNot = this.state.selectedPlaylist ?
            <Details
                playlistInfo={this.state.selectedPlaylist}
                headers={this.props.headers}
                updater={this.props.updater}
            />
            : <></>



        return (
            <DaddyDiv>
                <HeaderDiv>
                    <h3>Crie uma playlist:</h3>
                    <div>
                        <PlaylistNameInput
                            value={this.state.playlistNameValue}
                            placeholder="Nome da playlist"
                            onChange={this.onChangePlaylistName}
                        />
                        <button
                            onClick={this.onClickCreatePlaylist}
                        >Criar</button>
                    </div>
                </HeaderDiv>

                <HalflingDiv>
                    <h2>Suas playlists:</h2>
                    <br />
                    {renderedPlaylist}
                    <br />
                </HalflingDiv>

                {renderedDetailOrNot}

            </DaddyDiv>
        )
    }
}

export default PlayList