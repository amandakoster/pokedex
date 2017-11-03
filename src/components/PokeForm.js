import React, { Component } from 'react';
// import superagent from 'superagent'

//create inputs with: onChange and value (controlled inputs)
//bind inputs to state
//render new state based in event to DOM
//component api call here - fetch data
//api call with limit to 12 as per wireframe

//display a list of PokeOne componentes
//include a name, a link (external) to more information 
//and any information you see fit


class PokeForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            pokeName: '',
            // species: [],
            // fetched: false,
            // loading: false,
        };
        this.handelPokeNameChange = this.handelPokeNameChange.bind(this)
    }

    //renders value of input ie pokemon name
    handelPokeNameChange(e) {
        this.setState({pokeName: e.target.value})
    }

//     componentDidMount(){
//         this.setState({
//             loading: true,
//             pokeName: ''
//         });

//         fetch('http://pokeapi.co/api/v2/pokemon?limit=50')
//         .then(res => {
//             this.setState({
        
//             species: res.results,
//             fetched: true,
//             loading: true,
//             });
//         });
// };

    render(){
        return(
    <form>
        <input 
        type='text'
        name ='pokemonName'
        placeholder='poke name'
        onChange={this.handelPokeNameChange}
        value={this.state.pokeName}
        />

        <p> pokeName: </p>
        <p> {this.state.pokeName} </p>

    </form>


        );
    }
}

export default PokeForm;