import React from 'react';
import ReactDOM from 'react-dom';

export default function About(){

    return(
        <div className="container">
            <h1>About</h1>
        </div>

        );
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
