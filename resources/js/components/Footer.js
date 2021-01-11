import React from 'react';
import ReactDOM from 'react-dom';

export default function Footer() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Footer</div>

                        <div className="card-body">Footer Content</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}