import React from "react";
import axios from "axios";

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
            return <div key={user.id}>
                <li>{user.name}</li> 
                <button onClick={() => this.deleteUser(user.id)}> X </button>
                </div>;
        });

        return (
            <div>
                <button onClick={this.props.irParaCadastro}> Pagina Inicial </button>
                <h3>Usuários Cadastrados:</h3>
                {usersComponents}
            </div>
        )
    }
}