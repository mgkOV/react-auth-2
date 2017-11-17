import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="card medium indigo darken-1 signin-card ">
        <h2>Sign In</h2>
        <div className="row">
          <form className="signin-form">
            <label className="signin-label">
              <span>Username</span>
              <input type="text" className="signin-input" />
            </label>
            <label className="signin-label">
              <span>Password</span>
              <input type="text" className="signin-input" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
