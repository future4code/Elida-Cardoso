import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerAddPlay = styled.div`
    display: grid;
    justify-content: left;
    align-items: center;

    padding-left: 2vw;
`
const DivInputNovaPlay = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;

width: 40vw;

div {
    display: grid;
    align-items: center;
}
`
const Input = styled.input`
    width: 25vw;
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

export default class AddPlaylist extends React.Component{
    state = {
        name: ""
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    createPlaylist = async () => {
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
        };
    }

    render () {
        return (
            <ContainerAddPlay>
                    <h3>Adicione uma nova playlist aqui:</h3>
                <DivInputNovaPlay>
                    <label>Nome da Playlist:</label>
                    <div>
                        <Input
                        value={this.state.name}
                        onChange={this.handleName}/>
                        <Button onClick={this.createPlaylist}>CRIAR PLAYLIST</Button>
                    </div>
                </DivInputNovaPlay>
            </ContainerAddPlay>
        )
    }
}