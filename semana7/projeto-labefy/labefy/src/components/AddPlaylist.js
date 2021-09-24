import React from "react";
import axios from "axios";

export default class AddPlaylist extends React.Component{
    state = {
        name: ""
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    creatPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const body = {
            name: this.state.name
        }
        try {
            const response = await axios.post(url, body, {headers: {Authorization: "elida-nunes-maryam"}})
            this.setState({name: ""})
        } catch(error){
            alert("Algo deu errado :(", error.response.data)
            this.setState({name: ""})
        }
    }

    render () {
        return (
            <div>
                <label>Nome da Playlist:</label>
                <input
                value={this.state.name}
                onChange={this.handleName}/>
                <button onClick={this.creatPlaylist}>CRIAR PLAYLIST</button>
            </div>
        )
    }
}