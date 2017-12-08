import React, { Component } from 'react';


class PokemonDetail extends Component {
    constructor(props){
        super(props)
        this.getType = this.getType.bind(this)
    }

    getType() {
        if (this.props.pokeman.name) {
            return this.props.pokeman.types.reduce( (primaryType, type) => {
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
                            <img src={this.props.pokeman.sprits.front_shiny} alt="pokemon sprite"/>
                        </div>

                        <div>
                            <h3>Abilites</h3>
                                <ul>{this.props.pokemon.abilities.map((value, i) => 
                                <li key={i}>{value.ability.name}</li>
                                )}
                                </ul>
                        </div>

                        <div>
                            <h3>Moves</h3>
                                <ul>{this.props.pokeman.moves.map((value, i) =>
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