import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

class App extends Component() {
  render() {
    return (
      <div className='App'>
        <Main />
      </div>
    );
  }
}

export default App;
