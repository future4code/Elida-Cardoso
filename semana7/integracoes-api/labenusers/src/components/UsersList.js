import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivTotal = styled.div`
    display: flex;
    justify-content: center;
`
const ConteinerUsers = styled.div`
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

h3 {
    background-color: lightcoral;
    font-size: 4vh;
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
const DivUsuarios = styled.div`
box-shadow: gray 0 2px 4px 0;
background-color: lightcoral;
height: 40px;
padding: 8px 10px;
font-size: 20px;

display: flex;
justify-content: space-between;
align-items: center;

&:hover{
    background-color: #e07979;
}
`
const BotaoDelete = styled.button`
    cursor: pointer;
    font-weight: bold;
    outline: 0;
    width: 2vw;
    height: 2vw;
    background-color: #e07979;
    color: whitesmoke;
    border-radius: 360px;

    &:hover{
        background-color: #B60000;
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

export default class UsersList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers();
    };
    
    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    
        axios.get(url, headers)
        .then( (response) => {
            this.setState( {users: response.data} )
        })
        .catch( (error) => {
            console.log(error.response)
        })
    };

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        
        axios
        .delete(url, headers)
        .then( (response) => {
        this.getAllUsers();
        })
        .catch((error) => {
        alert(error.response.data);
        })
    }

    render () {
        const usersComponents = this.state.users.map((user) => {
            return <DivUsuarios key={user.id}>
                <li>{user.name}</li> 
                <BotaoDelete onClick={() => this.deleteUser(user.id)}> X </BotaoDelete>
                </DivUsuarios>;
        });

        return (
            <DivTotal>
                <ConteinerUsers>
                    <DivTitulo> 
                        <button onClick={this.props.irParaCadastro}> Página Inicial </button>
                        <h3>Usuários Cadastrados:</h3>
                    </DivTitulo>
                        {usersComponents}
                </ConteinerUsers>
            </DivTotal>
        )
    }
}