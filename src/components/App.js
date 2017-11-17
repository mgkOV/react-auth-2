import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import './App.css';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signin" component={SignIn} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
