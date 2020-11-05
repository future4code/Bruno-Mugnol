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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`
const AudioControls = styled.audio`
    max-width: 100%;
`

class Details extends React.Component {
    state = {
        playlistTracks: [],
        addingSong: false,
        songValue: "",
        artistsValue: "",
        songUrlValue: ""
    }

    componentDidMount = () => {
        this.fetchPlaylistTracks()
    }

    componentDidUpdate = () => {
        this.fetchPlaylistTracks()
    }

    onClickInvertAddingState = () => {
        this.setState({ addingSong: !this.state.addingSong })
    }

    onChangeSongName = (event) => {
        this.setState({ songValue: event.target.value })
    }
    onChangeArtists = (event) => {
        this.setState({ artistsValue: event.target.value })
    }
    onChangeSongUrl = (event) => {
        this.setState({ songUrlValue: event.target.value })
    }

    fetchPlaylistTracks = () => {
        let receivedArrayOfObjects
        let currentArrayOfObjects = this.state.playlistTracks
        axios.get(`${baseUrl + this.props.playlistInfo.id}/tracks`, { headers: this.props.headers })
            .then(response => {
                receivedArrayOfObjects = response.data.result.tracks
                if (receivedArrayOfObjects.length || currentArrayOfObjects.length) {
                    // não entra se os dois forem vazios
                    let checksIfNotEmpty = receivedArrayOfObjects.length < 1 ? true : false
                    // se o objeto recebido for vazio, retorna true
                    if (checksIfNotEmpty) {
                        this.setState({ playlistTracks: [] })
                        return
                    }

                    if (!currentArrayOfObjects.length) {
                        // entra se o estado atual for vazio
                        this.setState({ playlistTracks: receivedArrayOfObjects })
                        return
                    } else if (!checksIfNotEmpty && (receivedArrayOfObjects[0].id !== currentArrayOfObjects[0].id)) {
                        // entra se o estado atual for diferente do recebido
                        // é o último IF pois redireciona ao .catch caso um dos arrays seja vazio
                        // verificamos isso nos IF acima, que saem da função caso isso ocorra
                        this.setState({ playlistTracks: receivedArrayOfObjects })
                        return
                    }
                }
            }).catch((error) => {
                console.log("Erro ao buscar músicas")
                console.log(error.message)
            })
    }

    addTrackToPlaylist = () => {
        if (this.state.songValue && this.state.artistsValue && this.state.songUrlValue) {
            const body = {
                name: this.state.songValue,
                artist: this.state.artistsValue,
                url: this.state.songUrlValue
            }
            axios.post(`${baseUrl + this.props.playlistInfo.id}/tracks`, body, { headers: this.props.headers })
                .then(() => {
                    this.setState({
                        songValue: "",
                        artistsValue: "",
                        songUrlValue: ""
                    })
                    this.onClickInvertAddingState()
                    this.props.updater()
                }).catch((error) => {
                    console.log("Erro ao adicionar música")
                    console.log(error.message)
                })

        } else {
            alert("Por favor, preencha todos os campos")
        }
    }

    removeTrackFromPlaylist = (trackID) => {
        axios.delete(`${baseUrl + this.props.playlistInfo.id}/tracks/${trackID}`, { headers: this.props.headers })
            .then(() => {
                this.props.updater()
            }).catch((error) => {
                console.log("Erro ao deletar música")
                console.log(error.message)
            })
    }

    render() {
        const renderedTracks = (this.state.playlistTracks[0]) ?
            this.state.playlistTracks.map((track) => {
                return (
                    <KidDiv key={track.id}>
                        <li><strong>{track.name}</strong> de <em>{track.artist}</em></li>
                        <br />
                        <AudioControls controls>
                            <source src={track.url} />
                        </AudioControls>
                        <button onClick={() => this.removeTrackFromPlaylist(track.id)} >X</button>
                    </KidDiv>
                )
            })
            : <p>Esta playlist não tem nenhuma música!</p>

        const addSongInput = this.state.addingSong ?
            <>
                <input value={this.state.songValue} placeholder="Música"
                    onChange={this.onChangeSongName} />
                <input value={this.state.artistsValue} placeholder="Artistas"
                    onChange={this.onChangeArtists} />
                <input value={this.state.songUrlValue} placeholder="Arquivo da música"
                    onChange={this.onChangeSongUrl} />
                <button onClick={this.addTrackToPlaylist}>Adicionar</button>
            </>
            : <button onClick={this.onClickInvertAddingState}>Adicionar uma nova música</button>

        return (
            <HalflingDiv>
                <h3>{this.props.playlistInfo.name}</h3>
                <br />
                {addSongInput}
                <br />
                <br />
                {renderedTracks}
            </HalflingDiv>
        )
    }
}

export default Details