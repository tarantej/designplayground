import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'

export default class Header extends Component {
    render(){
        return (
            <div className="container">
                <Nav />
            </div>
        );
    }
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
