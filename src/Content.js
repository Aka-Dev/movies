import React, { Component } from 'react';
import axios from 'axios';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=47e27219ee335b95988455c455c809f8&query=legend')
        .then(res => {
        const movies = res.data.data.children.map(obj => obj.data);
        this.setState({ movies });
      });
    }

    render() {
        return (
            <div>
                <ul>
                {this.state.movies.map(movie =>
                    <li key={movie.id}>{movie.title}</li>
                )}
                </ul>
            </div>
        );
    }
}