import React from 'react';
import logo from '../../images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo"/>
        <h1>Narkal</h1>
        <button>Narkal Map</button>
        <button>Log In/Sign Up</button>
        <button>Find Out More</button>
      </header>
    </div>
  );
}

export default App;
