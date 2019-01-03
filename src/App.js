import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
