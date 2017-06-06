import React, { Component } from 'react';
import { Link } from 'react-router';
import emptyImg from '../../static/img/empty.png';

export default class TableRow extends Component {

    render() {
        const currentMovies = this.props.listMovies;
        const renderMovies = currentMovies.map((movie) => {
            let row;
            if (Number(this.props.genreIdChild) === 0) {
                row = (
                    <div className="col-md-4 col-lg-4 item" key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <div className="wrapper-img">
                                <img className="img-rounded" src={movie.poster_path ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path : emptyImg} alt={movie.title} title={movie.title} />
                            </div>
                            <div className="wrapper-desc">
                                <h2>{movie.title}</h2>
                                <date>{movie.release_date}</date>
                            </div>
                        </Link>
                    </div>
                );
            } else {
                if (movie.genre_ids.indexOf(Number(this.props.genreIdChild)) !== -1) {
                    row = (
                        <div className="col-md-4 col-lg-4 item" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <div className="wrapper-img">
                                    <img className="img-rounded" src={movie.poster_path ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path : emptyImg} alt={movie.title} title={movie.title} />
                                </div>
                                <div className="wrapper-desc">
                                    <h2>{movie.title}</h2>
                                    <date>{movie.release_date}</date>
                                </div>
                            </Link>
                        </div>
                    );
                }
            }

            return (
                row
            );
        });
        return (
            <div className="row list-items">
                {renderMovies}
            </div>
        );
    }
}