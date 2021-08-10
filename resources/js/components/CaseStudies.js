import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './header/Nav';

export default class CaseStudies extends Component{
    render(){

        return(<h1>Case Studies</h1>);
}
}

if (document.getElementById('case-studies')) {
    ReactDOM.render(<CaseStudies />, document.getElementById('case-studies'));
}
