import React from 'react';
import './App.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

import ImagemElida from './images/foto-elida.jpeg';
import ImagemEmail from './images/email.png';
import ImagemEndereco from './images/endereco.png';
import ImagemGithub from './images/github.png';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`

const BigCardContainer = styled.div`
    
    .bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    width: 800px;
    }

    .bigcard-container > div{
      display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }

    .bigcard-container > img {
      width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }

    .bigcard-container > h4 {
      margin-bottom: 15px;
    }
`
const CardPequenoContainer = styled.div `
    
    .card-pequeno {
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 800px;

    display: flex;
    align-items: center;
    }
    
    .imagem-card-p {
    width: 70px;
    margin-right: 10px;
} `

const ContainerSection = styled.div`

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h2 {
  text-align: center;
  margin-bottom: 20px;
} `

const ImagemBotao = styled.div `
    .image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

.image-button-container > img {
    width: 30px;
    margin-right: 10px;
} `

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BigCardContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemElida}
          nome="Élida Nunes" 
          descricao="Olá, eu sou a Élida. Sou estudante Full Stack da Labenu. Faço sites bonitos e passo raiva com bugs."
        />
        
        <ImagemBotao>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </ImagemBotao>
      </BigCardContainer>

      <CardPequenoContainer>
        <CardPequeno 
        imagem={ImagemEmail}
        indicador="Email"
        conteudo="elidanccardoso@gmail.com"
        />

        <CardPequeno 
        imagem={ImagemEndereco}
        indicador="Endereço"
        conteudo="Brasília - DF"
        />

        <CardPequeno 
        imagem={ImagemGithub}
        indicador="Github"
        conteudo="user: elida07"
        />
      </CardPequenoContainer>

      <BigCardContainer>
        <h2>Experiências profissionais</h2>

        <ContainerSection> 
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Desenvolvi projetos, individuais e em grupos." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Desenvolvi nomes as estrelas." 
        />
        </ContainerSection>
        </BigCardContainer>

      <ContainerSection>
        <h2>Minhas redes sociais</h2>
        <ImagemBotao> 
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        </ImagemBotao>
      </ContainerSection>
    </div>
  );
}

export default App;
