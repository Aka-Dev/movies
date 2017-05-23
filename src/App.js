import React, { Component } from 'react';
import Search from './Search';
import Content from './Content';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Search />
        <Content />
      </div>
    );
  }
}

export default App;
