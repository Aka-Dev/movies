import React, { Component } from 'react';
import { Link } from 'react-router';
import emptyImg from '../static/img/empty.png'

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            moviesPerPage: 5
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
            let row ;
            if(Number(this.props.genreId) === 0) {
                row = (
                    <tr key={movie.id}>
                        <td>
                            <Link to={`/movies/${movie.id}`}>
                            <img className="img-rounded" src={movie.poster_path ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path : emptyImg} alt={movie.title} title={movie.title}/>
                            </Link>
                        </td>
                        <td>{movie.title}</td>
                        <td>{movie.release_date}</td>
                    </tr>   
                );
            } else {
                if(movie.genre_ids.indexOf(Number(this.props.genreId)) !== -1) {
                    row = (
                    <tr key={movie.id}>
                            <td>
                                <Link to={`/movies/${movie.id}`}>
                                <img className="img-rounded" src={movie.poster_path ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path : emptyImg} alt={movie.title} title={movie.title}/>
                                </Link>
                            </td>
                            <td>{movie.title}</td>
                            <td>{movie.release_date}</td>
                        </tr> 
                    );
                }
            }

            return (
                row
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
                            <th>Release date</th>
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