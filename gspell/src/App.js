import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';

// Components
import NavBar from './components/NavBar'
import Display from './components/Display'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <NavBar />

          <Display />

        </div>
      </Router>
    );
  }
}

export default App;
