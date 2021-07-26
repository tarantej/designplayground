import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Blog extends Component{
    render()
    {
        return(<h1>Blog</h1>);
    }
}
if (document.getElementById('blog')) {
    ReactDOM.render(<Blog />, document.getElementById('blog'));
}
