// ./src/components/views/matches/components/main.jsx

// External package dependencies.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

// Local imports.
import { MatchesPanel } from 'components/views/matches/components';

const useStyles = makeStyles({
  root: {
    minHeight: `calc(100vh - 10px)`,
  },
  calloutText: {
    color: `#662a5e`,
    fontWeight: 600,
  },
  iconSize:{

  }
});

const Main = () => {
  const classes = useStyles()

  return(
    <Box className={classes.root}>
      <Box m={3} align="center">
        <Typography
          variant="h4"
          className={classes.calloutText}
        >
          <Box>
            <FavoriteBorder fontSize="large" />
            <Favorite fontSize="large" />
            <FavoriteBorder fontSize="large" />
            <Favorite fontSize="large" />
            <FavoriteBorder fontSize="large" />
            <Favorite fontSize="large" />
            <FavoriteBorder fontSize="large" />
            <Favorite fontSize="large" />
            <FavoriteBorder fontSize="large" />
          </Box>
          YOUR MOVIE MATCHES
        </Typography>
      </Box>
      <MatchesPanel />
    </Box>
  );
};

export default Main;