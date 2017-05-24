import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        var criteria = [];
        criteria.push(ReactDOM.findDOMNode(this.refs.search).value.trim());
        criteria.push(ReactDOM.findDOMNode(this.refs.genre).value.trim());
        this.props.onSearch(criteria);
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search</label>
                        <input ref="search" type="text" placeholder="Search" className="form-control" id="search" 
                            onChange={this.props.updateStateProp}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <select ref="genre">
                            <option value="0" selected>All</option>
                            {this.props.genres.map(genre => 
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                            )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;