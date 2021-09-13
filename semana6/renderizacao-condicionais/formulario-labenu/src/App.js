import React from 'react';
import './App.css';
import EtapaUm from './components/EtapaUm';
import EtapaDois from './components/EtapaDois';
import EtapaTres from './components/EtapaTres';
import EtapaQuatro from './components/EtapaQuatro';

export default class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <EtapaUm />;
      case 2: 
        return <EtapaDois />;
      case 3: 
        return <EtapaTres />;
      case 4:
        return <EtapaQuatro />
      default: 
        return <p>Seção inexistente</p>
    }
  };

  onClickProximaEtapa = () => {
    this.setState({ etapa: 1})
  }

  render (){

    return (
      <div>
        {this.renderizaEtapa()}
        <hr />
        <button onClick={this.onClickProximaEtapa}>Próxima Etapa!</button>
      </div>
    );
  }
}
