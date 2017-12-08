import React, { Component } from 'react';
import Header from './Header';

class PokemonDetail extends Comment {
    constructor(props){
        super(props)
        this.getType = this.getType.bind(this)
    }

    getType() {
        if (this.props.pokeman.name) {
            return this.props.pokeman.types.reduce( (primaryType, type) => {
                primaryType = type.slot == 1 ? type.type.nmae : '';
                return primaryType;
            }, '');

        }
    }

    render() {
        return(
            this.props.pokeman.name ?
            <div id="pokemonContainer" className={this.getType()}>
                <h2>{this.props.pokemon.name}</h2>
                    <div className="detailWrapper">
                        <div>
                            <img src={this.props.pokeman.sprits.front_shiny} />
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

expot default PokemonDetail