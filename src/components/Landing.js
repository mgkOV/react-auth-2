import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo2.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="card medium indigo darken-1 landing-card ">
        {/* <img src={logo} alt="Logo" className="landing-logo" /> */}
        Landing
        <Link
          to="/signin"
          className="waves-effect waves-light btn btn landing-button"
        >
          Войти
        </Link>
      </div>
    );
  }
}

export default Landing;
