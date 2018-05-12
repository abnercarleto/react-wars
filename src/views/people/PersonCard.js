import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import LabeldText from '../utils/LabeldText';

const styles = {
  card: {
    maxWidth: 345,
  }
}

function PersonCard(props) {
  const { classes, person } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="headline" component="h2">
                {person.name}
              </Typography>
            </Grid>

            <LabeldText label="Height" value={person.height} />
            <LabeldText label="Mass" value={person.mass} />
            <LabeldText label="Hair color" value={person.hair_color} />
            <LabeldText label="Skin color" value={person.skin_color} />
            <LabeldText label="Eye color" value={person.eye_color} />
            <LabeldText label="Birth year" value={person.birth_year} />
            <LabeldText label="Gender" value={person.gender} />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PersonCard);
