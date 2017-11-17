import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Albom from 'react-icons/lib/md/album';

import './Header.css';

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <NavLink to="/" className="brand-logo">
            <Albom className="logo-icon" />
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect()(Header);
