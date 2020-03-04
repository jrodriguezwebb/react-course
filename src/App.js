import React, { Component } from 'react';
import './App.css';

class Title extends Component {
  render() {
  return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: 'Titulo por defecto'
}

class ContadorNumero extends Component {
  render() {
  return <span>{this.props.numero}</span>
  }
}

class Contador extends Component {
  state = { contador: this.props.contadorInicial }
  // Old way
  /* constructor(props) {
    super(props)
    this.state = { contador: 1 }
  } */
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000);
  }

  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0,
}

function App() {
  return (
    <div className="App">
      <Title text="Otro titulo desde props" />
      <Contador contadorInicial={100} />
    </div>
  );
}

export default App;
