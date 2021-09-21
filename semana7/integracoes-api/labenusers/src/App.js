import React from "react";
import axios from "axios";

const headers = {
  headers: {
      Authorization: "elida-nunes-maryam"
  }
};


export default class App extends React.Component {
  state = {
    users: [],
    userName: "",
    userEmail: "",
    userId: ""
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
  
    axios.get(url, headers)
    .then( (response) => {
        this.setState( {users: response.data} )
        console.log(response.data)
    })
    .catch( (error) => {
        console.log(error.response)
    })
  };

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
        this.getAllUsers();
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
    
    deleteUser = () => {

      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";

      const path = {
        id: this.state.userId
      };
      
      

      axios
      .delete(url, path, headers)
      .then( (response) => {
        this.setState({ userId: ""});
        this.getAllUsers();
        console.log("deletou", response.data)
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data)
      })
    }
    


  render () {

    const usersComponents = this.state.users.map((user) => {
      return <div>
        <li key={user.id}>{user.name}</li> 
        <button onClick={this.deleteUser}> X </button>
        </div>;
    });

    return (
      <div>
          <div>
                <button>Página da lista</button>
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
          <div>
                <h3>Usuários Cadastrados:</h3>
                {usersComponents}
            </div>

      </div>
    );
  };
}
