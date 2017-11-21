import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = ComposedComponent => {
  class Authentication extends Component {
    render() {
      return this.props.authenticated === true
        ? <ComposedComponent {...this.props} />
        : <Redirect to="/" />;
    }
  }

  return connect(({ auth }) => ({ authenticated: auth.authenticated }))(
    Authentication
  );
};

export default requireAuth;
