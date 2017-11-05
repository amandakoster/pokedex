import React, { Component } from 'react';
import PokeForm from './components/PokeForm'
import superagent from 'superagent';

const API_URL = 'https://pokeapi.co/api/v2'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: '',
      pokemonNameError: null,
    }

    this.pokemonSelect = this.pokemonSelect.bind(this)
  }
  // called evertime the state is changed

  componentDidUpdate(){
    console.log('___STATE___', this.state)
  }

  
  //lifecycle hook w promises: gets called once before app mounts/or added to DOM
  componentDidMount(){
    console.log('HIT API')
 superagent.get(`${API_URL}/pokemon/`)
      .then(res => {
        let pokemonLookup = res.body.results.reduce((lookup, next) => {
          lookup[next.name] = next.url;
          return lookup
        }, {})
        try {
          this.setState({pokemonLookup})
        } catch (err) {
          console.error(err)
        }
      })
 
    }

  pokemonSelect(name){
    console.log('HIT API')
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
    return (
      <div>
        <h1> form demo </h1>

        <PokeForm pokemonSelect={this.pokemonSelect} />

        { this.state.pokemonNameError ? 
          <div> 
            <h2> pokemon {this.state.pokemonNameError} does not exist </h2>
            <p> make another request ! </p>
          </div> :
          <div>
          { this.state.pokemonSelected ? 
            <div> 
              <h2> PokeMon Name: {this.state.pokemonSelected.name} </h2>
              <h3> Abilities: </h3>
              <ul>
                {this.state.pokemonSelected.abilities.map((item, i) => {
                  return (
                    <li key={i}>
                      <p> {item.ability.name} </p>
                    </li>
                  )
                })}
              </ul>
            </div> : 
            <div> 
              <p> make a request </p>
            </div>
          }
          </div>
        }
      </div>
    )
  }
}

export default App
 
