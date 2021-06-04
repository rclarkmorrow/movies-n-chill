// ./src/components/views/movies/components/movies-list.jsx

// External package imports.
import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box, Grid, GridList, GridListTile,
    GridListTileBar, Typography
} from '@material-ui/core';


// Local imports.
import { currentUserSelector } from 'store';
import { Rating } from 'components/views/movies/components';

const MoviesList = () => {
  const { currentUser } = useSelector(currentUserSelector);
  const { movies } = currentUser;

  return (
    <Grid container>
      <Grid item xs={12} align="center">
            <Box mt={5} mb={5}>
            <Typography variant="h4">
              YOUR FAVORITE MOVIES
            </Typography>
            </Box>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={10}>
        <Box mb={5}>
          <GridList cols={2} cellHeight={500}>
          { movies.map((movie) => (
              <GridListTile key={movie.url_movie_image}>
                <img src={movie.url_movie_image} alt={movie.movie_title}/>
                <GridListTileBar
                  titlePosition="top"
                  title={movie.year}
                  subtitle={movie.movie_title}
                />
                <GridListTileBar
                  title={
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Typography variant="h6">
                          {movie.rating}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Rating rating={movie.rating}/>
                      </Grid>
                    </Grid>
                  }
                />
              </GridListTile>
          ))};
          </GridList>
        </Box>
        </Grid>
        <Grid item xs={1} />
    </Grid>
  );
};

export default MoviesList;
