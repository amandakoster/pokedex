import React, { Component } from 'react';
// import superagent from 'superagent'

//component api call here - fetch data
//api call with limit to 12 as per wireframe
//display a list of PokeOne componentes
//include a name, a link (external) to more information 
//and any information you see fit


class PokeList extends Component {
    constructor(props){
        super(props);
        this.state= {
            species: [],
            fetched: false,
            loading: false,
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        fetch('http://pokeapi.co/api/v2/pokemon?limit=50')
        .then(res => {
            console.log(res.body)
            this.setState({
            species: res.results,
            fetched: true,
            loading: true,
            });
        });
};

    render(){
        return(
    <main>
        <div>hello</div>
    </main>
        );
    }
}

export default PokeList;