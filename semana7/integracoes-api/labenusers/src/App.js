import React from "react";
import SingIn from "./components/SingIn";
import UsersList from "./components/UsersList";

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
        {this.escolheTela()}
      </div>
    );
  };
}
