import React from 'react';
import { shape, string } from 'prop-types'

class PokeCard extends React.Component {
 props: {
     name: string,
     abilites: string,
 };

 redner() {
     return(
        <div className="pokemonlist-container">
            <ul className="poke-list">
                {this.state.pokemonList.map((item, i) => {
                  return (
                    <li className="sprite" key={i}>
                      <img src={item.sprites.front_default} alt={"Pokemon sprite"} />
                      <li className="poke-list-name" key={i} alt={"Pokemon name"}>{item.name}</li>
                    </li>
                        )
                      })}
              </ul>
            </div>
     );
    }

    PokeCard.propty
}