import React, { Component } from 'react';
import './pokemon-list.css';

class PokemonList extends Component {
    constructor(props){
        //pass props into super adds props to current context
        super(props);
        this.selectPokemon = this.selectPokemon.bind(this);
        }

selectPokemon(e) {
        let url = e.target.value;
        this.props.handler(url);
    }

render(){
    return(
        <div id="pokemonList">
                <form>
                    <h4>Select a Pokemon</h4>
                    {
                    this.props.pokemonList.map((pokemon, i) => 
                        <div key={i}> 
                        <input
                        onChange={this.selectPokemon}
                        type="radio"
                        id={pokemon.name}
                        name="pokemon"
                        value={pokemon.url}
                        />
                    <label htmlFor={pokemon.name}>{pokemon.name}</label>

                    </div>
                    )
                }
            </form>

        </div>
     );
    }
}

export default PokemonList;