import React from 'react';
import './style.css';

const NavBar = props => (
  <div>
    <header>
      <h2><a href="#" class="home grow">winstonCodes</a></h2>
      <nav class="nav-container">
        <li><a href="#" class="about grow">About</a></li>
        <li><a href="#" class="portfolio grow">Portfolio</a></li>
        <li><a href="#" class="blog grow">Blog</a></li>
        <li><a href="#" class="contact grow">Contact</a></li>
      </nav>
    </header>
  </div>
);

export default NavBar;
