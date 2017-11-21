import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import './Admin.css';

class Admin extends Component {
  componentWillMount() {
    this.props.fetchContent();
  }

  render() {
    return <div className="card large indigo darken-1 app-card">123</div>;
  }
}

export default connect(null, { fetchContent })(Admin);
