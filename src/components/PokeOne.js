import React, { Component } from 'react';


//displays 1 poke
//print data as objects in console log



class PokeOne extends Component{
    render() {
        const {pokeman, id} = this.props;
        return (
            <div> className = "species">
                <div className = "species-container">
                    <div className = "species-sprite">
                    <img src = {`/public/sprits/${id}.png`} />
                    </div>
                    <div className = "species-name">{pokeman.name}</div>
                </div>
            </div>
        )
    } 
};

export default PokeOne