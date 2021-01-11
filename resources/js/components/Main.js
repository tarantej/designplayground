import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function Main() {
    return (
        <div className="container">
            <Header />
            <div class="content">
              
            </div>
              <div class="title m-b-md">
                    Laravel
                </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Main Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
