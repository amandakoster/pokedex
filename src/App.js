import React, { Component } from 'react';
import PokeForm from './components/PokeForm'
import superagent from 'superagent';
import './App.css'

const API_URL = 'https://pokeapi.co/api/v2'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: '',
      pokemonNameError: null,
      pokemonList: [],
    }

    this.pokemonSelect = this.pokemonSelect.bind(this)
  }

  componentDidUpdate(){
    console.log('___STATE___', this.state)
  }
  
  //lifecycle hook w promises: gets called once before app mounts/or added to DOM
  componentDidMount(){
    let context = this
    //reassined this to context because the functions with callbacks e .map, .then. reduce overwrote the 'this' context
 superagent.get(`${API_URL}/pokemon/`)
      .then(res => {
        let pokemonList = []
        let pokemonLookup = res.body.results.reduce((lookup, next) => {
          lookup[next.name] = next.url;
          return lookup
        }, {});

    res.body.results.map(function(poke) {
    superagent.get(poke.url)
    .then(res => {
      pokemonList.push(res.body) 
      context.setState({pokemonList})
    })
  });
        try {
          this.setState({pokemonLookup, pokemonList})
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
      <div className="app">
        <h1> Poke Dex </h1>
        <PokeForm className="pokeForm" pokemonSelect={this.pokemonSelect} />
      <div>

        { this.state.pokemonNameError ? 
          <div> 
            <h2> {this.state.pokemonNameError} is not a valid Pokemon. </h2>
            <p> Try again! </p>
          </div> :
          <div>
          { this.state.pokemonSelected ? 
            <div> 
              <h2> {this.state.pokemonSelected.name} </h2>
              <h3> Abilities: </h3>
              <ul className="abilities-list">
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
              <p> Search for a Pokemon! </p>
            </div>
          }
          </div>
        }
        </div>

            <div className="pokemonlist-container">
            <ul className="poke-list">
                {this.state.pokemonList.map((item, i, j) => {
                  return (
                    <li className="sprite" key={i}>
                      <img src={item.sprites.front_default} alt={"Pokemon sprite"} />
                      <li key={i} alt={"Pokemon name"}>{item.name}</li>
                    </li>
                        )
                      })}
                      
      
              </ul>
            </div>
      </div>
    )
  }
}

export default App
 
