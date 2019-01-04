import React from 'react';
import './style.css';

const Footer = props => (
  <footer>
    <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
    <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
    <p></p>
    <ul>
      <li><a href="#"><i class="fab fa-twitter-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fab fa-facebook-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fab fa-snapchat-square fa-2x"></i></a></li>
    </ul>
  </footer>
);

export default Footer;
