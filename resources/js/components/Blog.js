import React from 'react';
import ReactDOM from 'react-dom'

export default function Blog(){

        return(
            <div className="container">
        <h1>Blog</h1>
        </div>
        );
}
if (document.getElementById('blog')) {
    ReactDOM.render(<Blog />, document.getElementById('blog'));
}
