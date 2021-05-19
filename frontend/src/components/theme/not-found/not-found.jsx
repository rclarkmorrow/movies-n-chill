// ./src/components/theme/page-not-found/page-not-found.jsx

// External package dependencies.
import React from 'react';
import {
 Grid, Typography
} from '@material-ui/core';

// Local imports.
import { Header } from 'components';
import useStyles, {
  ERR_404, NOT_FOUND_TEXT
} from 'components/theme/not-found/styles';

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container className={classes.pageContainer}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h3" className={classes.errorLargeText} align="center">
            {ERR_404}
          </Typography>
          <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
          <Typography variant="h4" className={classes.errorText} align="center">
            {NOT_FOUND_TEXT}
          </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </>
    );
  };

export default NotFound;
