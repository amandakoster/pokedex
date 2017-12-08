import React, { Component } from 'react';
import DataCache from './lib/_.js';

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

class App extends Component {

    constructor(props {
        super(props);
        this.state = {
            loading: "loading",
            pokemonList: [],
            pokemon: {},

        }
        this.selectPokemon = this.selectPokemon.bind(this)
    }

        componentDidMount() {
            console.log{"___STATE___", this.state}
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

            DataCache.fetchData(pokemonURL)
            .then(pokemon => {
                loading = "";
                this.setState({pokemon, loading})
            })
    }

    

    })
}