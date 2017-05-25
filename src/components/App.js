import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Content from './Content';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: 'Search..',
      genres: [],
      movies: [],
      genreToFilter: 0
    }

    this.updateState = this.updateState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
            
      axios.get(this.props.route.url + 'discover/movie?api_key=' + this.props.route.keyApi + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => {
          const movies = res.data.results.map(obj => obj);
          this.setState({ 
              movies
          });
      });
      axios.get(this.props.route.url + 'genre/movie/list?api_key=' + this.props.route.keyApi + '&language=en-US')
      .then(res => {
          const genres = res.data.genres.map(obj => obj);
          this.setState({ 
              genres
          });
      });
  }

  updateState(e) {
    this.setState({searchVal: e.target.value});
  }


  handleSearch(criteria) {
    if(criteria[0] !== '') {
        axios.get(this.props.route.url + 'search/movie?api_key=' + this.props.route.keyApi + '&query=' + criteria[0])
        .then(res => {
            const movies = res.data.results.map(obj => obj);
            this.setState({movies});
      });
    } 
    this.setState({
      genreToFilter: criteria[1]
    });
    
  }

  render() {
    return (
      <div className="App container">
        <Search searchVal = {this.state.searchVal} genres= {this.state.genres} updateStateProp = {this.updateState} onSearch = {this.handleSearch}/>
        <Content movies = {this.state.movies} genreId = {this.state.genreToFilter}/>
      </div>
    );
  }
}

export default App;
