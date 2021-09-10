import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DivInputs = styled.div`
  border: 1px solid gray;
  display: grid;
  align-items: center;
  row-gap: 8px;
  
  width: 290px;
  margin: 10px 0;
  padding: 10px 5px;

  input:hover {
    background-color: lightsalmon;
  }

  button:hover {
    background-color: darkgray;
    color: whitesmoke;
    border: white;
    border-radius: 2px;
    height: 20px;
  }

  button:active {
    background-color: lightskyblue;
  }

`

class App extends React.Component {
    state = {
      posts: [
        { 
          usuario: "paulinha",
          fotoPerfil: 'https://picsum.photos/50/50?random=1',
          fotoPost: "https://picsum.photos/200/150?random=1"
        },
        {
          usuario: "fotos_lindas",
          fotoPerfil: "https://picsum.photos/50/50?random=2",
          fotoPost: "https://picsum.photos/200/150?random=2"
        },
        {
          usuario: "rogerinho",
          fotoPerfil: "https://picsum.photos/50/50?random=3",
          fotoPost: "https://picsum.photos/200/150?random=3"
        }
      ],

          // valores Input
          inputUsuario: "",
          inputFotoPerfil: "",
          inputFotoPost: ""
        
    };

    onClickAdicionaPost = () => {
      const novoPost = {
        usuario: this.state.inputUsuario,
        fotoUsuario: this.state.inputFotoPerfil,
        fotoPost: this.state.inputFotoPost
      }

      const novosPosts = [... this.state.posts, novoPost]

      this.setState({
        posts: novosPosts,
        inputUsuario: "",
        inputFotoPerfil: "",
        inputFotoPost: ""
      })
    };

    onChangeInputUsuario = (event) => {
      this.setState({inputUsuario: event.target.value})
    };

    onChangeInputFotoPerfil = (event) => {
      this.setState({inputFotoPerfil: event.target.value})
    };

    onChangeInputFotoPost = (event) => {
      this.setState({inputFotoPost: event.target.value})
    };

  render() { 

    const listaDeComponentes = this.state.posts.map((post) => {
      return (
          <Post
          nomeUsuario = {post.usuario}
          fotoUsuario = {post.fotoPerfil}
          fotoPost = {post.fotoPost}
          />
      );
    });

    return (
      <MainContainer>
        <DivInputs>
        <input
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do Usuário"}
          />

        <input
            value={this.state.inputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto do Perfil"}
          />

        <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da foto"}
          />
          <button onClick={this.onClickAdicionaPost}>Adicionar Foto</button>
        </DivInputs>
        <div> {listaDeComponentes} </div>
      </MainContainer>
    );
  }
}

export default App;
