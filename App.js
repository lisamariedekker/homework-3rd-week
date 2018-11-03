import React, { Component } from 'react';
import './App.css';
import ModelDetailsContainer from './components/ModelDetailsContainer';
import ModelListContainer from './components/ModelListContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ModelListContainer />
        <ModelDetailsContainer />
      </div>
    );
  }
}

export default App;
