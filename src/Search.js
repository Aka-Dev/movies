import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search</label>
                    <input type="text" placeholder="Search" className="form-control" id="search"  />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

export default Search;