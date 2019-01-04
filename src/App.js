import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
