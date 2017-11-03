import React, { Component } from 'react';
import PokeForm from './components/PokeForm'
import superagent from 'superagent';
import './App.css';

// const Pokedex = require('pokeapi-js-wrapper');
// const P = new Pokedex.Pokedex();

const API_URL = 'https://pokeapi.co/api/v2'
//build hello world
//render compenents here

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokeman: [],
    }
  }

  //lifecycle hook w promises: gets called once before app mounts/or added to DOM
  componentDidMount() {
    console.log('HIT API')
    superagent.get(`${API_URL}/pokemon/`)
    .then(res => {
      console.log('res.body', res.body)
    })
    .catch(console.log('console.err', console.error))
  }

  render(){
    return(
      <div>
        <h1> PokeDex! </h1>
        <PokeForm/>
        </div>
    );
  }
}

export default App
 
