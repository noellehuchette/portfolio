import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Nav = () => {
    return (
        <nav>
        <div className='menu-head'>
            <h3>Noelle Huchette</h3>
        </div>
        <div className='menu-pages'>
            <p>||</p>
            <a>RESUME</a>                
            <p>||</p>
            <a>PROJECTS</a>
            <p>||</p>
            <a>CONTACT</a>
            <p>||</p>
        </div>
        </nav>
    );
};


export default Nav;