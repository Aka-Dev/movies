import React, {Component} from 'react';
import TableRow from './TableRow';

export default class Popular extends Component {

    render() {
        return (
            <TableRow listMovies={this.props.popular} genreIdChild = "0" /> 
        );
    }
} 