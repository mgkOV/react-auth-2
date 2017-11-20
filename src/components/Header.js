import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logOut } from '../actions';
import MdFitnessCenter from 'react-icons/lib/md/fitness-center';

import './Header.css';

export class Header extends Component {
  handleLogOut = e => {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push('/signin');
  };

  render() {
    const { authenticateUser } = this.props;
    return (
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <NavLink to="/" className="brand-logo">
            <MdFitnessCenter className="logo-icon" />
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              {authenticateUser ? (
                <a onClick={this.handleLogOut}>Выйти</a>
              ) : (
                <NavLink to="/signin">Войти</NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  ({ authenticateUser }) => ({
    authenticateUser
  }),
  { logOut }
)(withRouter(Header));
