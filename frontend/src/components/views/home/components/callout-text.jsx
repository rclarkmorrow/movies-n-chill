// ./src/components/views/home/components/callout-text.jsx

// External package dependencies.
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Favorite, FavoriteBorder }from '@material-ui/icons';

// Local imports.
import { CALLOUT_TEXT } from 'components/views/home/settings';

const useStyles = makeStyles({
  calloutContainer: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '300px',
  },
  calloutText: {
    color: `#662a5e`,
    fontWeight: 600,
    fontSize: '1.5em',
  },
})

// Create the callout text component of the homepage.
const CalloutText = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="h4"
      className={classes.calloutText}
    >
      <Grid
        container
        direction="row"
        className={classes.calloutContainer}
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item xs={1} align="left">
          <FavoriteBorder />
          <Favorite />
          <FavoriteBorder />
        </Grid>
        <Grid item xs={10} align="center">
          {CALLOUT_TEXT}
        </Grid>
        <Grid item xs={1} align="right">
          <FavoriteBorder />
          <Favorite />
          <FavoriteBorder />
        </Grid>
      </Grid>
    </Typography>
  );
};

export default CalloutText;
