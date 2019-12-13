import React from 'react';
import logo from '../../images/logo.png';
import { Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import Map from '../Map/Map';
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img className='logo' src={logo} alt="logo"/>
        <h1>Narkal</h1>
      </header>
      <Route exact path='/' component={Menu} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/map' component={Map} />
       
    </div>
  );
}

export default App;
