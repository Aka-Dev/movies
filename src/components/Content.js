import React, { Component } from 'react';
import TableRow from './Movies/TableRow'


class Content extends Component {

    render() {
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
                    <TableRow listMovies= {this.props.movies} genreIdChild={this.props.genreId}/>
                </table>
            </div>
        );
    }
}

export default Content;