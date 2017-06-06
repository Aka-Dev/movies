import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onSearch(ReactDOM.findDOMNode(this.refs.search).value.trim());
    }

    handleChange() {
        this.props.onSearchGenre(ReactDOM.findDOMNode(this.refs.genre).value.trim());
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label htmlFor="search">Search</label>
                        <input ref="search" type="text" placeholder="Search" className="form-control" id="search"
                            onChange={this.props.updateStateProp} />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <div className="form-group search-by-genre">
                    <label htmlFor="genre">Genre</label>
                    <select ref="genre" defaultValue="0" onChange={this.handleChange} className="form-control">
                        <option value="0">All</option>
                        {this.props.genres.map(genre =>
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}

export default Search;