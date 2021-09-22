import React from "react";
import SingIn from "./components/SingIn";
import UsersList from "./components/UsersList";
import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <SingIn irParaLista={this.irParaLista} />
      case "lista":
        return <UsersList irParaCadastro={this.irParaCadastro} />
      default:
        return <h3> Página não encontrada! </h3>
    }
  }

  irParaCadastro = () => {
      this.setState( {telaAtual: "cadastro"} )
  };

  irParaLista = () => {
      this.setState( {telaAtual: "lista"} )
  }

  render () {

    return (
        <div>
          <GlobalStyle/>
        {this.escolheTela()}
        </div>
    );
  };
}
