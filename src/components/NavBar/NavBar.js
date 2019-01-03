import React from 'react';
import './style.css';

const NavBar = props => (
  <div>
    <header>
      <h2><a href="#" class="home">winstonCodes</a></h2>
      <nav>
        <li><a href="#" class="about">About</a></li>
        <li><a href="#" class="portfolio">Portfolio</a></li>
        <li><a href="#" class="blog">Blog</a></li>
        <li><a href="#" class="contact">Contact</a></li>
      </nav>
    </header>
  </div>
);

export default NavBar;
