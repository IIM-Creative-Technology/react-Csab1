import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "@rjsf/core";


import List from './components/List.jsx';
import data from './data.json';
import Selector from './components/selector.jsx';

class App extends Component {
  filterData() {
    data.filter(); // si ma chaine de caractère est include dans le nom d'un appartement je garde l'appart sinon je le drop
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
      
          <Selector />
    
      <div id='bracket'></div>   
      <div id='app'></div>
        </header>
      </div>
    );
  }
}

export default App;
