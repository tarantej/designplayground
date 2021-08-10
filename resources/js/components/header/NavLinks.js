import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../../public/images/dp-logo.png';
import PropTypes from 'prop-types';
import Nav from './header/Nav';

export default class NavLinks extends Component {
  static defaultProps  = {
        title:'Design Playground',
        activeClass:'active'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
  render()
  {
    return
    (
      <Nav>
      <div>
                            <ul className="nav-menu">
                            <li><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="about"><i class="bx bx-user"></i> <span>{this.props.activePage}</span></a></li>
                            <li><a href="projects"><i class="bx bx-file-blank"></i> <span>Projects</span></a></li>
                            <li><a href="case-studies"><i class="bx bx-cabinet"></i> Case Studies</a></li>
                            <li><a href="blog"><i class="bx bx-book"></i> Blog</a></li>
                            <li><a href="cv"><i class="bx bx-id-card"></i> Download CV</a></li>
                            </ul>
      </div>
      </Nav>
    );
  }
}