import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../../public/images/dp-logo.png';
import PropTypes from 'prop-types';

export default class Nav extends Component{

//  Set static default props so that a default value is shown even if the title property is not passed

    static defaultProps  = {
        title:'Design Playground',
        activeClass:'active'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render(){
        return(
            <div className="container">
                <div className="profile">
                        <img src={logo} alt="" className="responsive-img circle" />

{/* 

//  Title property to use in the Nav component used in the header
//  Picks default  value from static defaultProps
// Setting value in component props will overwrite the default value

*/}

                        <h1 className="text-light"><a href="/">{this.props.title}</a></h1>
                    </div>
                     <div>
                            <ul className="nav-menu">
                            <li><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="about"><i class="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="projects"><i class="bx bx-file-blank"></i> <span>Projects</span></a></li>
                            <li><a href="case-studies"><i class="bx bx-cabinet"></i> Case Studies</a></li>
                            <li><a href="blog"><i class="bx bx-book"></i> Blog</a></li>
                            <li><a href="cv"><i class="bx bx-id-card"></i> Download CV</a></li>
                            </ul>
                        </div>
                        {/* <div className="social-links row">
                            <div className="col s3"><a href="#" className="twitter"><i className="bx bxl-twitter"></i></a></div>
                            <div className="col s3"><a href="#" className="facebook"><i className="bx bxl-facebook"></i></a></div>
                            <div className="col s3"><a href="#" className="instagram"><i className="bx bxl-instagram"></i></a></div>
                            <div className="col s3"><a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a></div>
                        </div> */}
            </div>
          
        
        );

    }

}
if (document.getElementById('nav')) {
    ReactDOM.render(<Nav />, document.getElementById('nav'));
}
