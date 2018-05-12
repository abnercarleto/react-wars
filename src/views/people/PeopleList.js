import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import PersonCard from './PersonCard';

const styles = {
  root: {
    flexGrow: 1,
  }
}

class PeopleList extends Component {
  constructor(props) {
    super(props);
    const { classes, people } = props;
    this.classes = classes;
    this.people = people;
  }

  cardList() {
    return this.people.map(person => {
      return (<PersonCard key={person.id} person={person} />);
    });
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12}>
            {this.cardList()}
          </Grid>
        </Grid>
      </div>
    )
  }
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PeopleList);

