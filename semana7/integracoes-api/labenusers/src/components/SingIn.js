import React from "react";
import axios from "axios";

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
            <div> 
                <button onClick={this.props.irParaLista}>Página da lista</button>
                <label>Nome:</label>
                <input 
                placeholder="Nome do Usuário"
                value={this.state.userName}
                onChange={this.handleUserName}
                />
                <label>Email:</label>
                <input 
                placeholder="Email"
                value={this.state.userEmail}
                onChange={this.handleUserEmail}
                />
                <button onClick={this.createUsers}>Salvar</button>
            </div>
        )
    }
}