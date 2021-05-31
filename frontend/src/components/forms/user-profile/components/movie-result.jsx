// ./src/components/forms/user-profile/components/movie-result.jsx

// External package imports.
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, IconButton, Typography} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

// Local imports.
import { tmdbMoviesSelector } from 'store';

// Create the TMDB Movie card to display in search results.
const MovieResult = (props) => {
    const { buttonFunction } = props;
    const { tmdbMovies } = useSelector(tmdbMoviesSelector);

    return(
      <Fragment>
      {tmdbMovies.map(({poster_path, original_title, id }, index) => (
      <Grid key={id} id={id} container justify="space-around" alignItems="center">
          {poster_path &&
            <Fragment>
              <Grid item xs={12} sm={2} align="Center">
                <img
                  src={`https://www.themoviedb.org/t/p/w1280${poster_path}`}
                  alt={`Movie poster for ${original_title}`}
                  height="150px"
                />
              </Grid>
              <Grid item xs={12}  sm={6} align="center">
                <Box pl={4}>
                <Typography variant="h6" align="center">
                  {original_title}
                </Typography>

                </Box>
              </Grid>
              <Grid item xs={12} sm={2} align="center">
                <Box pl={4} pb={4}>
                <IconButton 
                  onClick={buttonFunction}
                >
                  <AddCircle color="secondary" />
                </IconButton>
                </Box>
              </Grid>
            </Fragment>
          }
        </Grid>
      ))}
      </Fragment>
    );
};

export default MovieResult;
