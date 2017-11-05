import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';

// Components
import PlayGround from './components/PlayGround'
import Experience from './components/Experience'
import Narrative from './components/Narrative'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PlayGround />
          <Switch>
              <Experience />
              <Narrative />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
