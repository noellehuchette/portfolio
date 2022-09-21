import React from 'react';
import './style.css';

const Nav = () => {
  return (
    <nav>
      <div className="menu-head">
        <h3>Noelle Huchette</h3>
      </div>
      <div className="menu-pages">
        <a href="/NoelleResumeAug2022.pdf" download="NoelleHuchette-Resume">
          RESUME
        </a>
        <p>||</p>
        <a href="https://www.noellehuchette.dev">PROJECTS</a>
        <p>||</p>
        <a href="https://www.noellehuchette.dev">CONTACT</a>
      </div>
    </nav>
  );
};

export default Nav;
