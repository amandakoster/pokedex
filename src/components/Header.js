import React from 'react';
import './header.css'
import headerImage from '../assets/headerimage03.jpg';


const Header = () => {
    return (

    <div>
        <h1 className="pokedex-title">Poké Dex</h1>
            <div className="header-backgound"> 
                <img className="header-image"
                src={headerImage}
                alt={"Pokemon, Pikachu"} />
            </div>
    </div>

    );
};

export default Header;
