import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import PersonCard from './PersonCard';

import PersonRepository from '../../repositories/PersonRepository'

const styles = {
  root: {
    flexGrow: 1,
  }
}

class PeopleList extends Component {
  state = {
    people: []
  }

  constructor(props) {
    super(props);
    const { classes } = props;
    this.classes = classes;
  }

  componentDidMount() {
    PersonRepository.all()
      .then(res => {
        const people = res.data.results;
        this.setState({ people });
      })
  }

  cardList() {
    return this.state.people.map(person => {
      return (
        <Grid item xs={4}>
          <PersonCard key={person.url} person={person} />
        </Grid>
      );
    });
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Grid container spacing={8}>
          {this.cardList()}
        </Grid>
      </div>
    )
  }
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PeopleList);

