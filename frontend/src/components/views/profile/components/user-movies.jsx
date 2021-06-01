// ./src/components/views/profile/components/user-movies.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Grid, GridList, GridListTile,
  GridListTileBar, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Local imports.
import { userProfileSelector } from 'store';
import { PROFILE_TEXT } from 'components/views/profile/settings';

const useStyles = makeStyles({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 450
  },
})

const UserMovies = (props) => {
  const classes = useStyles();
  const { MOVIE_LIST_TITLE } = PROFILE_TEXT;
  const { userProfile } = useSelector(userProfileSelector);
  const { movies } = userProfile;

  return(
    <Grid container>
    <Grid item xs={12} align="center">
        <Box mt={5} mb={5}>
        <Typography variant="h4">
          {MOVIE_LIST_TITLE}
        </Typography>
        </Box>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={10} align="center">
    <div className={classes.root} style={{marginBottom: '50px'}}>
    <GridList cols={2.5} className={classes.gridList} cellHeight={450}>
      { movies.map((movie) => (
        <GridListTile key={movie.url_movie_image}>
          <img src={movie.url_movie_image} alt={movie.movie_title}/>
          <GridListTileBar
            title={movie.movie_title}
          />
        </GridListTile>
      ))};
    </GridList>
    </div>
    </Grid>
    <Grid item xs={1} />
    </Grid>
  );
};

export default UserMovies;
