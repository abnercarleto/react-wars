import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

function LabeldText(props) {
  return (
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Typography variant="body2">
          {props.label}:
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <Typography variant="body1">
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
}

LabeldText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default LabeldText;
