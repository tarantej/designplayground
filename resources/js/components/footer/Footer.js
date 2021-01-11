import React from 'react';
import ReactDOM from 'react-dom';

export default function Footer() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    Footer Content
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}