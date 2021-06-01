// ./src/components/theme/not-found/not-found-components/error-404.jsx

// External package dependencies.
import React from 'react';
import {
 Grid, Typography
} from '@material-ui/core';

// Local imports.
import useStyles, { ERROR_TEXT } from 'components/theme/not-found/styles';

const Error404 = () => {
  const classes = useStyles();
  const { ERR_404, NOT_FOUND } = ERROR_TEXT
  return (
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
        {NOT_FOUND}
        </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        </Grid>
    </Grid>
    <Grid item xs={false} sm={2}></Grid>
    </Grid>
  );
};

export default Error404;
