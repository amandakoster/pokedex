import React, { Component } from 'react';
import './pokeform.css';

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