import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = props => (
  <div>
    <header>
      <h2><NavLink to="/" className="home grow">winstonCodes</NavLink></h2>
      <nav className="nav-container">
        <li><NavLink to="/about" className="about grow">About</NavLink></li>
        <li><NavLink to="/portfolio" className="portfolio grow">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="contact grow">Contact</NavLink></li>
      </nav>
    </header>
  </div>
);

export default NavBar;


// <li><NavLink to="/blog" className="blog grow">Blog</NavLink></li>
