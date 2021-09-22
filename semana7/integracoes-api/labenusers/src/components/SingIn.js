import React from "react";
import axios from "axios";
import styled from "styled-components";


const DivTotal = styled.div`
    display: flex;
    justify-content: center;
`

const ConteinerSingIn = styled.div`
    background-color: lightblue;
    width: 60vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: grid;
    justify-content: center;
    align-items: center;
`
const DivTitulo = styled.div`
display: grid;
justify-content: center;

h1 {
    background-color: lightcoral;
    font-size: 10vh;
    padding: 1em;
}

button {
    border: black dotted 2px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    outline: 0;
    padding: 1em 2.2em;
    text-transform: uppercase;
    background-color: lightcoral;
    color: #000;
    transition: all 0.2s ease-in 50ms;
    -webkit-transition: all 0.2s ease-in 50ms;
    -moz-transition: all 0.2s ease-in 50ms;
    -ms-transition: all 0.2s ease-in 50ms;
    -o-transition: all 0.2s ease-in 50ms;


&:hover {
  background-color: transparent;
  box-shadow: 0 0 0 2px;
  transition: all 0.1s ease-out 50ms;
  -webkit-transition: all 0.1s ease-out 50ms;
  -moz-transition: all 0.1s ease-out 50ms;
  -ms-transition: all 0.1s ease-out 50ms;
  -o-transition: all 0.1s ease-out 50ms;
}

&:active {
  transform: scale(0.8);
}
}
`

const DivInput = styled.div`
box-shadow: gray 0 2px 4px 0;
background-color: lightcoral;
padding: 8px;

display: grid;
row-gap: 1vh;
justify-content: center;
justify-items: center;

input {
    width: 150%;
    height: 4vh;
    border-radius: 10px;
}
`
const BotaoSalvar = styled.button`
    border: none;
    height: 8vh;
    width: 15vw;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    outline: 0;
    padding: 2px;
    text-transform: uppercase;
    background-color: #C078F6;

    &:hover {
    box-shadow: 0 0 0 2px;
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

const headers = {
    headers: {
        Authorization: "elida-nunes-maryam"
    }
};

export default class SingIn extends React.Component {

    state = {
        userName: "",
        userEmail: "",
    }
    
    createUsers = () => {
        const url =
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
        const body = {
        id: this.state.userId,
        name: this.state.userName,
        email: this.state.userEmail
        };
    
        axios
        .post(url, body, headers)
        .then((response) => {
            this.setState({ userName: "", userEmail: "" });
            alert("Usuário cadastrado!")
        })
        .catch((error) => {
            alert(error.response.data.message);
        }); 
        }
    
        handleUserName = (event) => {
        this.setState({ userName: event.target.value });
        };
        
        handleUserEmail = (event) => {
        this.setState({ userEmail: event.target.value });
        };


    render () {
        return (
            
            <DivTotal> 
                <ConteinerSingIn> 
                    <DivTitulo> 
                        <h1> LabenUsers </h1>
                        <button onClick={this.props.irParaLista}>Página da lista</button>
                    </DivTitulo>
                    <DivInput> 
                        <label>Nome:</label>
                        <input 
                        placeholder="Nome do Usuário"
                        value={this.state.userName}
                        onChange={this.handleUserName}
                        />
                    </DivInput>
                    <DivInput>
                        <label>Email:</label>
                        <input 
                        placeholder="Email"
                        value={this.state.userEmail}
                        onChange={this.handleUserEmail}
                        />
                    </DivInput>
                    <BotaoSalvar onClick={this.createUsers}>Salvar</BotaoSalvar>
                </ConteinerSingIn>
            </DivTotal>
        )
    }
}