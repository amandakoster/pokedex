import React from 'react';

//make api call

class Pokeman extends Component{
    render() {
        const {name, id} = this.props;
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

export default Pokeman