import React, { Component } from 'react';
import Recherche from './components/Recherche';
import './App.css';
import { Message, CardGroup } from 'semantic-ui-react';
import Etablissement from './components/Etablissement';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component {

  state = {
    data: [],
    error: ''
  }

  onSearch = async (departement, type) => {
    //console.log(departement, type);
    if (departement && type) {
      try {
        let response = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${departement}/${type}`);
        let data = await response.json();
        this.setState({
          data: data.features,
          error: ''
        });
      } catch (error) {
        this.setState({ error: 'Erreur lors de la recherche' })
      }
    } else {
      this.setState({ error: 'Merci de choisir un département et un établissement' })
    }
  }

  onEmpty = () => {
    this.setState({ data: [], error: '' });
  }

  render() {
    return (
      <div className="app">
        <h1>Annuaire des administrations en Pays de la Loire</h1>
        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty} />
        {this.state.error ? <Message warning>{this.state.error}</Message> : undefined}
        <CardGroup>
          <Etablissement></Etablissement>
          <Etablissement></Etablissement>
          <Etablissement></Etablissement>
        </CardGroup>
      </div>
    );
  }
}

export default App;
