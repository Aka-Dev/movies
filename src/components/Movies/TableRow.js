import React, {Component} from 'react';
import {Link} from 'react-router';
import emptyImg from '../../static/img/empty.png';

export default class TableRow extends Component {

    render() {
        const currentMovies = this.props.listMovies;
        const renderMovies = currentMovies.map((movie) => {
            let row ;
            if(Number(this.props.genreIdChild) === 0) {
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
                if(movie.genre_ids.indexOf(Number(this.props.genreIdChild)) !== -1) {
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
        return (
            <tbody>
                {renderMovies}
            </tbody>
        );
    }
}