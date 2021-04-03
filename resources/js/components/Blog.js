import React from 'react';
import ReactDOM from 'react-dom'

export default function Blog()
{

        return(<h1>Blog</h1>);
}

if (document.getElementById('blog')) {
    ReactDOM.render(<Blog />, document.getElementById('blog'));
}
