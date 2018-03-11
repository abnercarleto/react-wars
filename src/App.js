import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CssBaseline from 'material-ui/CssBaseline';
import RwAppBar from './RwAppBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <RwAppBar />
      </div>
    );
  }
}

export default App;
