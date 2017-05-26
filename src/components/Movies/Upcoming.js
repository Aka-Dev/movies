import React, {Component} from 'react';
import TableRow from './TableRow';

export default class Upcoming extends Component {

    render() {
        return (
            <TableRow listMovies={this.props.upcoming} genreIdChild = "0" /> 
        );
    }
} 