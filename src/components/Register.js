import React, { Component, Prototypes } from 'react';

export default class Register extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <imput refs="firstName" name="firstName" type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Name:</label>
                    <imput refs="lastName" name="lastName" type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Name:</label>
                    <imput refs="lastName" name="lastName" type="text" placeholder="Name" />
                </div>
            </form>
        );
    }
}