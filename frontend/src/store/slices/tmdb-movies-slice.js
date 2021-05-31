// ./src/store/slices/tmdb-movies-slice

// External package dependencies.
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// These are the API settings for the TMDB movie database
// that the app will use to allow the user to select which
// movies are their favorites. API documentation is here:
// https://www.themoviedb.org/documentation/api.
const apiKey = `f886ade617a824eb49c945ea6bd325ae`;
const language = `en-US`;
const adultFilms = `false`;
// Build URI strings
const baseURI = `https://api.themoviedb.org/3/search/movie?`;
const authAPI = `api_key=${apiKey}`;
const setLanguage = `&language=${language}`;
const setAdult = `&include_adult=${adultFilms}`;
const partialURI = baseURI + authAPI + setLanguage + setAdult;

// Set initial state values.
const initialState= {
  isLoading: false,
  hasErrors: false,
  tmdbMovies: [],
};

// Define the search movie slice.
const tmdbMoviesSlice = createSlice({
  name: 'tmdbMovies',
  initialState,
  reducers: {
    getTMDBMovies: state => {
      state.loading = true;
    },
    getTMDBMoviesSuccess: (state, {payload}) => {
      state.tmdbMovies = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getTMDBMoviesFailure: state => {
        state.isLoading = false;
        state.hasErrors = true;
    },
  },
})

// Export the actions generated from the slice.
export const {
  getTMDBMovies,
  getTMDBMoviesSuccess,
  getTMDBMoviesFailure
} = tmdbMoviesSlice.actions;

// Export the selector.
export const tmdbMoviesSelector = state => state.tmdbMovies;

// Export the reducer.
export default tmdbMoviesSlice.reducer;

// Asynchronous thunk action (where the API call lives).
export const fetchTMDBMovies = (props) => {
  return async dispatch => {
    dispatch(getTMDBMovies());
    try {
      const {
        movieSearch:  search, movieSearchPage: page
      } = props;
      const searchURI = encodeURIComponent(search.trim());
      const queryURI = `&query=${searchURI}&page=${page}`;
      const response = await axios.get(`${partialURI}${queryURI}`);
      dispatch(getTMDBMoviesSuccess(response.data.results));
    } catch (error) {
      dispatch(getTMDBMoviesFailure());
    };
  };
};
