import React, { Component } from 'react';
import Header from './components/Header';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import DataCache from './lib/_.js';
import './App.css'


const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: "loading",
            pokemonList: [],
            pokemon: {},

        }
        this.selectPokemon = this.selectPokemon.bind(this)
    }

        componentDidMount() {
            console.log("___STATE___", this.state)
        }

        componentWillMount() {
            let loading = "loading";
            this.setState({loading})

            DataCache.fetchData(pokemonAPI)
            .then(data => {
                loading = "";
                let pokemonList = data.results;
                this.setState({pokemonList, loading})
            })
        }
        
        selectPokemon(pokemonURL){
            let loading = "loading";
            this.setState({loading})

            DataCache.fetchData(pokemonURL) //pokemonURL is the handler from selectPokemon()
            .then(pokemon => {
                loading = "";
                this.setState({pokemon, loading})
            })
    }

    render() {
        console.log("APP RENDER STATE", this.state)
        return(
            <div>
                <Header />
                <div id="pokeWrapper" className = {this.state.loading}>

                <PokemonList
                    pokemonList={this.state.pokemonList}
                    handler={this.selectPokemon} />
                <PokemonDetail pokemon={this.state.pokemon} />
                
                </div>
            </div>
        )
    }

}

export default App