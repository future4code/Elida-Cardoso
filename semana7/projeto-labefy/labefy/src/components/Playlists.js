import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerMain = styled.div`
background-color: lightblue;

display: flex;
`

export default class Playlists extends React.Component{
    state = {
        playlists: [],
        tracks: [],
        name: "",
        artist:"",
        url: ""
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

    componentDidMount() {
        this.getAllPlaylists();
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
    render () {
        const tracksOfPlayLists = this.state.tracks.map((track) => {
            return (
                <div key={track.id}>
                <li>{track.name}</li>

                <p>{track.artist}</p>
                <audio controls="controls">
                    <source src={track.url} type="audio/mp3" />
                </audio>
                </div>
            )
        })

        const listOfPlayLists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <h3>{playlist.name}</h3>
                    
                    <input
                    placeholder="Nome da música" 
                    value={this.state.name}
                    onChange={this.handleName}
                    />
                    <input placeholder="Artista"
                    value={this.state.artist}
                    onChange={this.handleArtist}
                    />
                    <input placeholder="URL da música"
                    value={this.state.url}
                    onChange={this.handleUrl}
                    />
                    
                    <button onClick={() => {this.addTrackToPlaylist(playlist.id)}}>Adicionar musicas</button>
                    <button onClick={() => {this.deletePlaylist(playlist.id)}}>X</button>
                    <button onClick={() => {this.getPlaylistTrack(playlist.id)}}>mostrar musicas</button>
                </div>
            )
        })
        return (
            <div>
                <h2>Suas Playlists</h2>
                <ContainerMain>
                    <div>{listOfPlayLists}</div>
                    <div>{tracksOfPlayLists}</div>
                </ContainerMain>
            </div>
        )
    }
}