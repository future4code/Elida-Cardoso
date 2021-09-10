import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
    state = {
      posts: [
        { 
          usuario: "paulinha",
          fotoPerfil: 'https://picsum.photos/50/50?random=1',
          post: "https://picsum.photos/200/150?random=1"
        },
        {
          usuario: "fotos_lindas",
          fotoPerfil: "https://picsum.photos/50/50?random=2",
          post: "https://picsum.photos/200/150?random=2"
        },
        {
          usuario: "rogerinho",
          fotoPerfil: "https://picsum.photos/50/50?random=3",
          post: "https://picsum.photos/200/150?random=3"
        }

      ]
    }
  render() { 

    const listaDeComponentes = this.state.posts.map((post) => {
      return (
        <MainContainer>
          <Post
          nomeUsuario = {post.usuario}
          fotoUsuario = {post.fotoPerfil}
          fotoPost = {post.post}
          />
        </MainContainer>
      );
    });

    return (
      <MainContainer>
        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
