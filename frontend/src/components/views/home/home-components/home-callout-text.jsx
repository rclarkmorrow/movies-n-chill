// ./src/components/views/home/home-components/home-callout-text.jsx

// External package dependencies.
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

// Local imports.
import useStyles, { CALLOUT_TEXT } from 'components/views/home/styles';

// Create the callout text component of the homepage.
const HomeCalloutText = () => {
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
          <FavoriteBorderIcon />
          <FavoriteIcon />
          <FavoriteBorderIcon />
        </Grid>
        <Grid item xs={10} align="center">
          {CALLOUT_TEXT}
        </Grid>
        <Grid item xs={1} align="right">
          <FavoriteBorderIcon />
          <FavoriteIcon />
          <FavoriteBorderIcon />
        </Grid>
      </Grid>
    </Typography>
  );
};

export default HomeCalloutText;
