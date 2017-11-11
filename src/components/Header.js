import React from 'react';
import './header.css'
import headerImage from '../assets/headerimage03.jpg';


const Header = () => {
    return (
    <div className="header-backgound"> 
        <img className="header-image"
        src={headerImage}
        alt={"Pokemon, Pikachu"} />
    </div>

    );
};

export default Header;
