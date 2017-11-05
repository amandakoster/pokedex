import React, { Component } from 'react';
import PokeForm from './components/PokeForm'
import superagent from 'superagent';

const API_URL = 'https://pokeapi.co/api/v2'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: null,
      pokemonNameError: null,
    }

    this.pokemonSelect = this.pokemonSelect.bind(this)
  }
  // called evertime the state is changed

  componentWillUpdate(){
    console.log('___STATE___', this.state)
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

  pokemonSelect(name){
    console.log('cool beans')
    if(!this.state.pokemonLookup[name]){
      // do something on state that enables the 
      // view to show an error that that pokemon does not exist
      this.setState({
        pokemonSelected: null,
        pokemonNameError: name,
      })
    } else {
      // make a request to the pokemon api and do something on 
      // state to store the pokemons details to be desplayed to the user
      superagent.get(this.state.pokemonLookup[name])
      .then(res => {
        console.log('selected pokemon', res.body)
        this.setState({
          pokemonSelected: res.body,
          pokemonNameError: null,
        })
      })
      .catch(console.error)
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
 
