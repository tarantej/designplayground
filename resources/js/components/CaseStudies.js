import React from 'react';
import ReactDOM from 'react-dom'

export default function CaseStudies()
{

        return(<h1>Case Studies</h1>);
}

if (document.getElementById('case-studies')) {
    ReactDOM.render(<CaseStudies />, document.getElementById('case-studies'));
}
