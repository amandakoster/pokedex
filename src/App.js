import React, { Component } from 'react';
import PokeList from './components/PokeList'
import './App.css';




//build hello world
//render compenents here


class App extends Component {
  render(){
    return(
      <div>
        <h1> PokeDex! </h1>
        <PokeList />
        </div>
    );
  }
}

export default App

