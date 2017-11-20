import React, { Component } from 'react';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../actions';
import SignInForm from './SignInForm';
import './SignIn.css';

export class SignIn extends Component {
  handleSubmit = value => {
    const { reset, signIn } = this.props;
    const { username, password } = value;
    signIn({ username, password });
    reset('signIn');
  };

  render() {
    const { authenticateUser } = this.props;

    const singInPage = (
      <div className="card medium indigo darken-1 signin-card ">
        <h2>Вход</h2>
        <div className="row">
          <SignInForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );

    return authenticateUser === true ? <Redirect to="/app" /> : singInPage;
  }
}

export default connect(
  ({ authenticateUser }) => ({
    authenticateUser
  }),
  { reset, signIn }
)(SignIn);
