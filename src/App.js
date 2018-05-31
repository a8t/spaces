import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SpaceList from './Components/SpaceList';

class App extends Component {
  state = {
    page: 0,
  };
  render() {
    return (
      <div className="App">
        <SpaceList />
      </div>
    );
  }
}

export default App;
