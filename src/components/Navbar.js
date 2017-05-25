import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/" activeClassName="active">Home</Link></li>
                    <li className="dropdown">
                        <Link to="/movies" className="dropdown-toggle" data-toggle="dropdown">Movies
                        <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/movies/latest">Latest</Link></li>
                            <li><Link to="/movies/popular">Popular</Link></li>
                            <li><Link to="/movies/top_rated">Top rated</Link></li>
                            <li><Link to="/movies/upcoming">Upcoming</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/tv">TV</Link></li>
                    <li><Link to="/genres">Genres</Link></li>
                </ul>
            </nav>
        );
    }
}