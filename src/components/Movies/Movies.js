import React, { Component } from 'react';
import TableRow from './TableRow'
import axios from 'axios';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popular: []
        }
    }

    componentWillMount() {
        axios.get(this.props.route.url + 'movie/popular?api_key=' + this.props.route.keyApi + '&language=en-US&page=1')
        .then(res => {
            const popular = res.data.results.map(obj => obj);
            this.setState({
                popular: popular
            });
        });
    }

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
                    <TableRow listMovies= {this.state.popular} genreIdChild='0' />
                </table>
            </div>
        );
    }
}

export default Content;