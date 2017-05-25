import React, {Component} from 'react';
import TableRow from './TableRow';

export default class Popular extends Component {

    render() {
        console.log(this.props.popular);
        return (
            <tbody>
                <TableRow listMovie={this.props.popular} genreIdChild = "0" /> 
            </tbody>
        );
    }
} 