import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Nav = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <div className="menu-head">
        <button onClick={() => navigate('/')}>Noelle Huchette</button>
      </div>
      <div className="menu-pages">
        <button
          onClick={() => {
            navigate('/projects');
          }}
        >
          PROJECTS
        </button>
        <p>||</p>
        <button
          onClick={() => {
            navigate('/contact');
          }}
        >
          CONTACT
        </button>
        <p>||</p>
        <a href="/NoelleHuchetteResume.pdf" download="NoelleHuchetteResume">
          <button>RESUME</button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
