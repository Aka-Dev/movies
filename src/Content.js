import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <div>
                <h1>{this.props.searchVal}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Popularity</th>
                            <th>Vote average</th>
                            <th>Vote count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(movie => 
                        <tr key={movie.id}>
                            <td><img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}/> </td>
                            <td>{movie.title}</td>
                            <td>{movie.overview}</td>
                            <td>{movie.popularity}</td>
                            <td>{movie.vote_average}</td>
                            <td>{movie.vote_count}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Content;