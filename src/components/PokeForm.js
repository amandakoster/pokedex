import React, { Component } from 'react';
import './pokeform.css';

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
        //pass props into super adds props to current context
        super(props);
        this.state= {
            pokeName: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePokeNameChange = this.handlePokeNameChange.bind(this)
    }

    //renders value of input (pokemon name)
    handlePokeNameChange(e) {
        this.setState({pokeName: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.pokemonSelect(this.state.pokeName)
    }

render(){
    return(
    <form onSubmit={this.handleSubmit}>
    
        <input 
        type='text'
        name ='pokemonName'
        placeholder='poke name'
        value={this.state.pokeName}
        onChange={this.handlePokeNameChange}
        />

    </form>
        );
    }
}

export default PokeForm;