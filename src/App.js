import React, { Component } from 'react';
import PokeForm from './components/PokeForm'
import superagent from 'superagent';
import './App.css';

const API_URL = 'https://pokeapi.co/api/v2'
//build hello world
//render compenents here

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokemonLookup: {}, //results of all poke on all api call
      pokemonSelect: null, //stores details of selected poke for display
      pokemonNameError:'',
    }
  }

  //lifecycle hook w promises: gets called once before app mounts/or added to DOM
  componentDidMount() {
    console.log('HIT API')
    superagent.get(`${API_URL}/pokemon/`)
    .then(res => {
      //resuls in an array of indiv poke objects - not searchable
      //so, reduce array to 1 object of poke name : url - searchable
      let pokemonLookup = res.body.results.reduce((lookup, next) => {
        lookup[next.name] = next.url;
        return lookup
      }, {})
      console.log('pokemonLookup', res.body.results, pokemonLookup)
      this.setState({pokemonLookup: res.body.results})
    })
    .catch('console.err', console.error)
  }

  selectPokemon(name){
    if(!this.pokemonLookup(name)){
      this.setState({
        pokemonSelect: null,
        pokemonNameError: name,
      })
    } else{

    }
  }

  render(){
    return(
      <div>
        <h1> PokeDex! </h1>
        <PokeForm pokemonSelect={this.pokemonSelect}/>
        <p> pokemon name error: {this.state.pokemonNameError} </p>
        </div>
    );
  }
}

export default App
 
