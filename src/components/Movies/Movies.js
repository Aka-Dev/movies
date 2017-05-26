import React, { Component } from 'react';
// import TableRow from './TableRow'
import axios from 'axios';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popular: [],
            topRated: [],
            upcoming: []
        }
    }

    componentWillMount() {
        // Popular
        axios.get(this.props.route.url + 'movie/popular?api_key=' + this.props.route.keyApi + '&language=en-US&page=1')
        .then(res => {
            const popular = res.data.results.map(obj => obj);
            this.setState({
                popular: popular
            });
        });
        // Top rated
        axios.get(this.props.route.url + 'movie/top_rated?api_key=' + this.props.route.keyApi + '&language=en-US&page=1')
        .then(res => {
            const top_rated = res.data.results.map(obj => obj);
            this.setState({
                top_rated: top_rated
            });
        });
        // Upcoming
        axios.get(this.props.route.url + 'movie/upcoming?api_key=' + this.props.route.keyApi + '&language=en-US&page=1')
        .then(res => {
            const upcoming = res.data.results.map(obj => obj);
            this.setState({
                upcoming: upcoming
            });
        });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => {
                if(child.type.name === 'Popular') {
                    return React.cloneElement(child, {
                         popular: this.state.popular,
                         genreIdChild:'0'
                    })
                } else if(child.type.name === 'TopRated') {
                    return React.cloneElement(child, {
                         top_rated: this.state.top_rated,
                         genreIdChild:'0'
                    })
                } else if(child.type.name === 'Upcoming') {
                    return React.cloneElement(child, {
                         upcoming: this.state.upcoming,
                         genreIdChild:'0'
                    })
                }
                return React.cloneElement(child, 'hello')
            }
        );
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
                    {childrenWithProps}
                </table>
            </div>
        );
    }
}

export default Content;