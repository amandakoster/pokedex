import React, { Component } from 'react';
import './pokemon-detail.css'


class PokemonDetail extends Component {
    constructor(props){
        super(props)
        this.getType = this.getType.bind(this)
    }

    getType() {
        if (this.props.pokemon.name) {
            return this.props.pokemon.types.reduce( (primaryType, type) => {
                primaryType = type.slot === 1 ? type.type.name : '';
                return primaryType;
            }, '');

        }
    }

    render() {
        console.log(this.state, "RENDER STATE")
        return(
            this.props.pokemon.name ?

            <div id="pokemonContainer" className={this.getType()}>
                <h2>{this.props.pokemon.name}</h2>
                    <div className="detailWrapper">
                        <div>
                            <img className="sprite" src={this.props.pokemon.sprites.front_shiny} alt="pokemon sprite"/>
                        </div>

                        <div>
                            <h3>Abilites</h3>
                                <ul>{this.props.pokemon.abilities.map((value, i) => 
                                <li key={i}>{value.ability.name}</li>
                                )}
                                </ul>
                        </div>

                        <div>
                            <h3>Top 5 Moves</h3>
                                <ul>{this.props.pokemon.moves.slice(0,5).map((value, i) =>
                                <li key={i}>{value.move.name}</li>
                                )}
                                </ul>
                        </div>
                            
                    </div>
            </div>

            : <div id="pokemonContainer"></div>
        )
    }
}

export default PokemonDetail;