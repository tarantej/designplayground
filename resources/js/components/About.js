import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './header/Nav';

export default class About extends Component{
    render(){

        return(<h1>About</h1>);
}
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
