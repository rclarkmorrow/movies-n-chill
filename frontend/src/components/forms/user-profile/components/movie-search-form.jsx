// ./src /components/forms/user-profile/components/movie-search-form.jsx

// External package dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, FieldArray, useFormikContext } from 'formik';
import {
  Box, Chip, Grid, IconButton, Snackbar, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle, } from '@material-ui/lab';
import { AddCircle, Delete, MovieOutlined, } from '@material-ui/icons';

// Local imports
import {
  FAVORITES_SETTINGS, MOVIE_API_SETTINGS, MOVIE_SEARCH_ERRORS
} from 'components/forms/user-profile/settings';
import { fetchTMDBMovies, tmdbMoviesSelector } from 'store';
import { SearchField } from 'components/forms/fields';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginLeft: 40,
    marginRight: 40,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const MovieSearchForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tmdbMovies } = useSelector(tmdbMoviesSelector);
  const { values, setFieldValue } = useFormikContext();
  const [ movieSearch, setMovieSearch ] = useState(null);
  const [ movieSearchPage, setMovieSearchPage ] = useState(1);
  const [ hasMovieError, setHasMovieError ] = useState(false);
  const { MOVIE_IMG_URI_BASE } = MOVIE_API_SETTINGS;
  const {
    MOVIE_LIMIT, FAVORITES_HEADER, FAVORITES_INSTRUCTIONS
  } = FAVORITES_SETTINGS;
  const {
    DUPLICATE_TITLE, DUPLICATE_CONTENT,
    LIMIT_TITLE, LIMIT_CONTENT,
  } = MOVIE_SEARCH_ERRORS;

  useEffect(() => {
    movieSearch && movieSearch.length > 4 &&
      dispatch(fetchTMDBMovies({movieSearch, movieSearchPage}));
  }, [dispatch, movieSearch, movieSearchPage]);

  const setObjectTemp = (originalObject) => {
    // This function returns an extensible copy of
    // objects that are not directly extensible (such
    // as values.movies). useful for any logic that needs
    // to use a temporary copy of the object to add or
    // remove properties before re-assigning the temp
    // object back to the original.
    return JSON.parse(JSON.stringify(originalObject));
  }

  const addMovie = async (tmdbMovie) => {
    if (values.movies) {
      // Verify that we aren't adding too many movies.
      if (values.movies.length >= MOVIE_LIMIT) {
        setHasMovieError("limit");
        return null;
      }
      // Verify that we aren't adding duplicates.
      if (values.movies.length) {
        for (const movie of values.movies) {
          if (String(tmdbMovie.id) === String(movie.tmdb_id)) {
            setHasMovieError("duplicate");
            return null;
          };
        };
      };
    };
    // Create a new movie object.
    const newMovie = {
      genres: tmdbMovie.genre_ids,
      movie_title: tmdbMovie.title,
      rating: tmdbMovie.vote_average,
      tmdb_id: tmdbMovie.id,
      url_movie_image: `${MOVIE_IMG_URI_BASE}${tmdbMovie.poster_path}`,
      year: tmdbMovie.release_date ? tmdbMovie.release_date.split('-')[0] : 'None'
    }
    // Create a temporary copy of values.movies so that
    // we can add the new movies to the list and then
    // push the new list to values.movies.
    let moviesTemp = setObjectTemp(values.movies);
    moviesTemp ? moviesTemp.push(newMovie) : moviesTemp = [newMovie];
    setFieldValue('movies', moviesTemp);
  };

  // Create handler for the search field.
  const handleSearchChange = (e) => {
    e.preventDefault();
    setMovieSearch(e.target.value);
    setMovieSearchPage(1);
  }

  const handleCloseAlert = () => {
    setHasMovieError(false)
  }

  return (
    <>
      <Box mt={5} mb={5} align="center">
        <Typography variant="h4">{FAVORITES_HEADER}</Typography>
        <Typography>
          {
            values.movies && MOVIE_LIMIT-values.movies.length > 0 &&
              <>
                {FAVORITES_INSTRUCTIONS(MOVIE_LIMIT-values.movies.length)}
              </>
          }
        </Typography>
        <Box align="center" mt={2}>
          <SearchField placeholder="Search Movies" onChange={handleSearchChange} />
        </Box>
      </Box>
      <FieldArray
        name="movies"
        render={arrayHelpers => (
          <>
          <Box className={classes.root}>
            { values.movies && values.movies.map((data, index) => {
              return (
                <li key={index}>
                  <Field type="hidden" name={`${index}`} />
                  <Chip
                    icon={<MovieOutlined />}
                    deleteIcon={<Delete />}
                    label={data.movie_title}
                    onDelete={() => arrayHelpers.remove(index)}
                    className={classes.chip}
                    color="secondary"
                  />
                </li>
               );
             })}
          </Box>
          <Box mt={5}>
            { tmdbMovies.map((tmdbMovie, index) => (
              <Grid
                container
                key={index}
                id={tmdbMovie.id}
                justify="space-around"
                alignItems="center"
              >
                {tmdbMovie.poster_path &&
                  <>
                    <Grid item xs={12} sm={2} align="Center">
                      <img
                        src={`${MOVIE_IMG_URI_BASE}${tmdbMovie.poster_path}`}
                        alt={`Movie poster for ${tmdbMovie.title}`}
                        height="150px"
                      />
                    </Grid>
                    <Grid item xs={12}  sm={6} align="center">
                      <Box ml={4}>
                      <Typography variant="h6" align="center">
                        {tmdbMovie.title}
                      </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={2} align="center">
                      <Box pl={4} pb={4}>
                      <IconButton onClick={() => addMovie(tmdbMovie)}>
                        <AddCircle color="secondary" />
                      </IconButton>
                      </Box>
                    </Grid>
                  </>
                }
              </Grid>
            ))}
          </Box>
        </>
        )}
      />
      <Snackbar
        id="alert_dialog"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
        open={hasMovieError ? true : false}
        onClose={handleCloseAlert}
        autoHideDuration={12000}
      >
        <Alert
          id="dialog_desc"
          variant="filled"
          severity="warning"
          onClose={handleCloseAlert}
        >
          <AlertTitle id="dialog_label">
            {hasMovieError === "duplicate" ?
            DUPLICATE_TITLE : hasMovieError === "limit"
            ? LIMIT_TITLE : null}
          </AlertTitle>
          {hasMovieError === "duplicate" ?
          DUPLICATE_CONTENT : hasMovieError === "limit"
          ? LIMIT_CONTENT : null}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MovieSearchForm;
