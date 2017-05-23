import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Content from './Content';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: 'Search..',
      movies: [],
      key: '47e27219ee335b95988455c455c809f8'
    }

    this.updateState = this.updateState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  updateState(e) {
    this.setState({searchVal: e.target.value});
  }


  handleSearch(title) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.state.key + '&query=' + title)
      .then(res => {
          const movies = res.data.results.map(obj => obj);
          this.setState({movies});
    });
  }

  render() {
    return (
      <div className="App container">
        <Search searchVal = {this.state.searchVal} updateStateProp = {this.updateState} onSearch = {this.handleSearch}/>
        <Content movies = {this.state.movies}/>
      </div>
    );
  }
}

export default App;
