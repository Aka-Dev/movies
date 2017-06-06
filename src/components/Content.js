import React, { Component } from 'react';
import TableRow from './Movies/TableRow'


class Content extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.searchVal}</h1>
                <TableRow listMovies={this.props.movies} genreIdChild={this.props.genreId} />
            </div>
        );
    }
}

export default Content;