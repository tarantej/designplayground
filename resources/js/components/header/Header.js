import React from 'react';
import ReactDOM from 'react-dom';
import profile_img from '../../../../public/img/profile-img.jpg';

export default function Header() {
    return (
        <div className="container">
                <div className="profile">
                <img src={profile_img} alt="" className="responsive-img circle" />
                <h1 className="text-light"><a href="/">Alex Smith</a></h1>

                <div>
                    <ul className="nav-menu">
                    <li class="active"><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#projects"><i class="bx bx-file-blank"></i> <span>Projects</span></a></li>
                    <li><a href="#case-studies"><i class="bx bx-cabinet"></i> Case Studies</a></li>
                    <li><a href="#blog"><i class="bx bx-book"></i> Blog</a></li>
                    {/* <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li> */}
                    <li><a href="#cv"><i class="bx bx-id-card"></i> Download CV</a></li>
                    </ul>
                </div>
                <div className="social-links row">
                    <div className="col s3"><a href="#" className="twitter"><i className="bx bxl-twitter"></i></a></div>
                    <div className="col s3"><a href="#" className="facebook"><i className="bx bxl-facebook"></i></a></div>
                    <div className="col s3"><a href="#" className="instagram"><i className="bx bxl-instagram"></i></a></div>
                    <div className="col s3"><a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a></div>
                </div>
                </div>
        </div>
    );
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
