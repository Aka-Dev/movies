import React, {Component} from 'react';
import TableRow from './TableRow';

export default class TopRated extends Component {

    render() {
        return (
            <TableRow listMovies={this.props.top_rated} genreIdChild = "0" /> 
        );
    }
} 