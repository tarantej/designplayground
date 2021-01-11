import React from 'react';
import ReactDOM from 'react-dom';

export default function Header() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Header</div>

                        <div className="card-body">Header Content</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}