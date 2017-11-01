import React, { Component } from 'react';
import './App.css';
import superagent from 'superagent';

// const API_URL = 'http://pokeapi.co/api/v2'


//build hello world
//api call with limit to 12, print data as objects in console log

class App extends Component {
  render(){
    return(
      <div>
        <h1> PokeDex! </h1>
        </div>
    );
  }
}

export default App

