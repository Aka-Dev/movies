import React, {Component} from 'react';
import Navbar from './Navbar';
import Style from '../static/css/style.css';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}