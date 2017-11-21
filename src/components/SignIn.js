import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AlertContainer from 'react-alert';
import { signIn } from '../actions';
import SignInForm from './SignInForm';
import './SignIn.css';

export class SignIn extends Component {
  renderAlert = () => {
    const alertOptions = {
      time: 3000,
      position: 'top right',
      transition: 'fade',
      theme: 'dark'
    };

    return <AlertContainer ref={a => (this.msg = a)} {...alertOptions} />;
  };

  showAlert = () => {
    this.msg.error(this.props.auth.err);
  };

  handleSubmit = value => {
    const { signIn } = this.props;
    const { username, password } = value;
    signIn({ username, password });
  };

  componentDidUpdate() {
    if (this.props.auth.err) {
      this.showAlert();
    }
  }

  render() {
    const { auth: { authenticated, err } } = this.props;

    const singInPage = (
      <div className="card medium indigo darken-1 signin-card ">
        <h2>Вход</h2>
        <div className="row">
          <SignInForm onSubmit={this.handleSubmit} err={!!err} />
          {this.renderAlert()}
        </div>
      </div>
    );

    return authenticated === true ? <Redirect to="/app" /> : singInPage;
  }
}

export default connect(
  ({ auth }) => ({
    auth
  }),
  { signIn }
)(SignIn);
