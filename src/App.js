import React, { Component } from 'react';
import './App.css';

import CssBaseline from 'material-ui/CssBaseline';
import RwAppBar from './RwAppBar.js';

import PeopleList from './views/people/PeopleList.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CssBaseline />

        <RwAppBar />
        <PeopleList />
      </div>
    );
  }
}

export default App;
