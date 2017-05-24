import React, { Component } from 'react';
import { Link } from 'react-router';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            moviesPerPage: 3
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const {currentPage, moviesPerPage} = this.state;

        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = this.props.movies.slice(indexOfFirstMovie, indexOfLastMovie);

        const renderMovies = currentMovies.map((movie) => {
            return (
                <tr key={movie.id}>
                    <td>
                        <Link to={`/movies/${movie.id}`}>
                        <img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt={movie.title}/>
                        </Link>
                    </td>
                    <td>{movie.title}</td>
                    <td>{movie.overview}</td>
                    <td>{movie.popularity}</td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.vote_count}</td>
                </tr>            
            );
        });

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(this.props.movies.length / moviesPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <h1>{this.props.searchVal}</h1>
                <table className="table table-bordered table-responsive">
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
                        {renderMovies}
                    </tbody>
                </table>
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default Content;