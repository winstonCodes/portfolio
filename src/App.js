import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact component={LandingPage} path="/" />
              <Route exact component={AboutPage} path="/about" />
              <Route exact component={BlogPage} path="/blog" />
              <Route exact component={ContactPage} path="/contact" />
              <Route exact component={PortfolioPage} path="/portfolio" />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
