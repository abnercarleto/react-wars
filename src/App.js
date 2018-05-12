import React, { Component } from 'react';
import './App.css';

import CssBaseline from 'material-ui/CssBaseline';
import RwAppBar from './RwAppBar.js';

import PeopleList from './views/people/PeopleList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male'
        },
        {
          id: 5,
          name: 'Leia Organa',
          height: '150',
          mass: '49',
          hair_color: 'brown',
          skin_color: 'light',
          eye_color: 'brown',
          birth_year: '19BBY',
          gender: 'famale'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <CssBaseline />

        <RwAppBar />
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
