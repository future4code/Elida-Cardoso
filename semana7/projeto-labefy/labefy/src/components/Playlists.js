import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerMain = styled.div`
background-color: #171717;
margin-bottom: 30px;

display: flex;

`

const H2Play = styled.h2`
background-color: #DA0037;
height: 10vh;
padding-left: 4px;
display: grid;
align-items: center;
`

const DivDetalheTracks = styled.div`
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
border: white solid 2px;
padding: 4px 8px;
margin-bottom: 4px;

li {
    font-size: 4vh;
}

audio {
    width: 100%;
    grid-column: 1 / -1;
}

button {
    border-radius: 360px;
    width: 40px;
    justify-self: end;
}
`
const DivInputNovasMusicas = styled.div`
border: white inset 4px;
padding: 0 8px 4px 8px;
margin-bottom: 8px;
margin-right: 20px;

display: grid;

h3 {
    background-color: #444444;
}
`
const Input = styled.input`
    margin-bottom: 4px;

    background-color: #EDEDED;
    border: none;
    height: 3vh;

    &:hover{
        background-color: #444444;
        color: #EDEDED;
    }
`
const Button = styled.button`
    margin: 2px 0;
    background-color: #DA0037;
    border-radius: 8px;
    color: #EDEDED;
    cursor: pointer;
    transition: all 0.2s ease-in 50ms;
    -webkit-transition: all 0.2s ease-in 50ms;
    -moz-transition: all 0.2s ease-in 50ms;
    -ms-transition: all 0.2s ease-in 50ms;
    -o-transition: all 0.2s ease-in 50ms;

&:hover {
    background-color: transparent;
    box-shadow: 0 0 0 2px #DA0037;
    transition: all 0.1s ease-out 50ms;
    -webkit-transition: all 0.1s ease-out 50ms;
    -moz-transition: all 0.1s ease-out 50ms;
    -ms-transition: all 0.1s ease-out 50ms;
    -o-transition: all 0.1s ease-out 50ms;
}

&:active {
    transform: scale(0.8);
}
`

export default class Playlists extends React.Component{
    state = {
        playlists: [],
        tracks: [],
        name: "",
        artist:"",
        url: ""
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleArtist = (e) => {
        this.setState({artist: e.target.value})
    }
    handleUrl = (e) => {
        this.setState({url: e.target.value})
    }

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {headers: {Authorization: "elida-nunes-maryam"}})
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Algo deu errado :(", err.response.data)
        })
    }

    getPlaylistTrack = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get( url, {headers: {Authorization: "elida-nunes-maryam"}})
        .then((res) => {
            this.setState({tracks: res.data.result.tracks})
            console.log(res.data.result.tracks)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    addTrackToPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url, body, {headers: {Authorization: "elida-nunes-maryam"}})
        .then((res) => {
            this.setState({name: "", artist:"", url: ""})
            this.getAllPlaylists();
            alert("Música adicionada com sucesso!")
        })
        .catch((err) => {
            this.setState({name: "", artist:"", url: ""})
            alert("Algo deu errado :(", err.response.data)
            console.log(err.response.data)
        })
    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {headers: {Authorization: "elida-nunes-maryam"}})
        .then((res) => {
            this.getAllPlaylists();
            alert("Playlist excluida!")
        })
        .catch((err) => {
            alert("Algo deu errado :(", err.response.data)
            console.log(err.response.data)
        })
    }

    removeTrackFromPlaylist = (idPlaylist, idTrack) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idTrack}`

        axios.delete(url, {headers: {Authorization: "elida-nunes-maryam"}})
        .then((res) => {
            this.getPlaylistTrack();
            alert("Musica deletada!")
        })
        .catch((err) => {
            alert("Algo deu errado :(", err.response.data)
            console.log(err.response.data)
        })
    }
    render () {
        const tracksOfPlayLists = this.state.tracks.map((track) => {
            return (
                <DivDetalheTracks key={track.id}>
                    <li>{track.name}</li>
                    <Button>X</Button>
                    <p>{track.artist}</p>
                    <audio controls="controls">
                        <source src={track.url} type="audio/mp3" />
                    </audio>
                </DivDetalheTracks>
            )
        })

        const listOfPlayLists = this.state.playlists.map((playlist) => {
            return (
                <DivInputNovasMusicas key={playlist.id}>
                    <h3>{playlist.name}</h3>
                    
                    <Input
                    placeholder="Nome da música" 
                    value={this.state.name}
                    onChange={this.handleName}
                    />
                    <Input placeholder="Artista"
                    value={this.state.artist}
                    onChange={this.handleArtist}
                    />
                    <Input placeholder="URL da música"
                    value={this.state.url}
                    onChange={this.handleUrl}
                    />
                    
                    <Button onClick={() => {this.addTrackToPlaylist(playlist.id)}}>Adicionar música nova</Button>
                    <Button onClick={() => {this.getPlaylistTrack(playlist.id)}}>Detalhes da Playlist</Button>
                    <Button onClick={() => {this.deletePlaylist(playlist.id)}}>Deletar playlist</Button>
                </DivInputNovasMusicas>
            )
        })
        return (
            <div>
                <H2Play>Suas Playlists:</H2Play>
                <ContainerMain>
                    <div>{listOfPlayLists}</div>
                    <div>{tracksOfPlayLists}</div>
                </ContainerMain>
            </div>
        )
    }
}