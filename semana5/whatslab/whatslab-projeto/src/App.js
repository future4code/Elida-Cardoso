import React from 'react';
import './App.css';
import styled from 'styled-components'

const DivEnglobaTodos = styled.div`
display: flex;
justify-content: center;
`

const MainContainer = styled.div`
  border: 1px solid black;
  background-color: #F6DCBF;
  height: 100vh;
  width: 50vw;

  display: grid;
  align-items: center;
  grid-template-rows: 7vw 1fr 8vw;
`
const Header = styled.header`
  background-color: #E1701A;
  box-shadow: 0 0 10px 0 gray;
  color: white;
  width: 100%;
  height: 100%;
  padding-left: 8px;
`

const ContainerInputs = styled.div`
  background-color: #E1701A;
  box-shadow: 0 0 2px 0 gray;
  height: 100%;
  padding: 4px 8px 2px 8px;

  display: grid;
  grid-template-columns: 10vw 1fr 5vw;
  column-gap: 3px;
  align-items: center;
`
const Input = styled.input`
height: 5vw;
padding: 5px;
border-radius: 8px;
border: none;

&:hover{
  background-color: lightgrey;
  border-style: none;
}
`
const Botao = styled.button`
background-color: lightgrey;
height: 5vw;
border-radius: 8px;
border: none;

&:hover{
  background-color: #AAAAAA;
}

&:active{
  background-color: #F7A440;
}
`
const ContainerMensagens = styled.div`
  height: 100%;
  padding-left: 8px;
  display: grid;
  align-items: end;
`

const BalaoDeMensagem = styled.div`
background-color: #F7A440;
box-shadow: 0 0 2px 0 gray;
margin: 2px 5px 2px 0;
padding: 2px 0 2px 5px;
`

class App extends React.Component {

    state = {
        mensagensEnviadas: [ 
            { nome: "",
                mensagem: ""
            }
            ],
            valorInputNome: "",
            valorInputMensagem: ""
        };

        onClickAdicionaMensagem = () => {
            const novaMensagem = {
                nome: this.state.valorInputNome,
                mensagem: this.state.valorInputMensagem
            };
    
            const novasMensagens = [...this.state.mensagensEnviadas, novaMensagem];
    
            this.setState({
                mensagensEnviadas: novasMensagens,
                valorInputNome: "",
                valorInputMensagem: ""
            });
          };

        onChangeInputNome = (event) => {
            this.setState({ valorInputNome: event.target.value});
        };

        onChangeInputMensagem = (event) => {
            this.setState({ valorInputMensagem: event.target.value});
        };
        

        render() {
            const listaMensagens = this.state.mensagensEnviadas.map((mensagemEnviada) => {
                return (
                  <BalaoDeMensagem>
                    <div><strong>{mensagemEnviada.nome}</strong></div> 
                    <div>{mensagemEnviada.mensagem}</div>
                  </BalaoDeMensagem>
                )
            });

            return ( 
                <DivEnglobaTodos>
                  <MainContainer>
                    <Header> <h1>WhatsLab</h1> </Header>
                      
                      <ContainerMensagens> {listaMensagens} </ContainerMensagens>

                      <ContainerInputs>
                          <Input value={this.state.valorInputNome}
                                  onChange={this.onChangeInputNome}
                                  placeholder={"Digite seu nome"} 
                          />
                          <Input value={this.state.valorInputMensagem}
                                  onChange={this.onChangeInputMensagem}
                                  placeholder={"Digite sua mensagem"} 
                          />
                          <Botao onClick={this.onClickAdicionaMensagem}>Enviar</Botao>
                      </ContainerInputs>
                  </MainContainer>
                </DivEnglobaTodos>
            );
        };
  };

export default App;
