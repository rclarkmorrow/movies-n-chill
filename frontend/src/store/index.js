// ./src/store/index.js

// Import the data store for exporting.
import store from 'store/configure-store';

// Import actions from slices.
import {
  currentUserSelector,
  fetchCurrentUser,
} from 'store/slices/current-user-slice';

import{
  fetchTMDBMovies,
  tmdbMoviesSelector
} from 'store/slices/tmdb-movies-slice';

import {
    createUserProfile,
    editUserProfile,
    fetchUserProfile,
    userProfileSelector,
} from 'store/slices/current-user-slice';

// Export the store as default.
export default store;

// Export imported actions.
export {
  createUserProfile,
  currentUserSelector,
  editUserProfile,
  fetchCurrentUser,
  fetchTMDBMovies,
  fetchUserProfile,
  tmdbMoviesSelector,
  userProfileSelector,
};