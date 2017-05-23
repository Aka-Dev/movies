import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        var criteria = ReactDOM.findDOMNode(this.refs.search).value.trim();
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
                    <button type="submit" className="btn btn-default" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;