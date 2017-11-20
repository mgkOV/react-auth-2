import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import './App.css';
import SignIn from './SignIn';
import Admin from './Admin';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/app" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
