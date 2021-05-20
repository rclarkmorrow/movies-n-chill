// ./src/store/configure-store.js

// External package dependencies.
import {
  configureStore, combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Local imports.
import currentUserSlice from 'store/slices/current-user-slice';
import tmdbMoviesSlice from 'store/slices/tmdb-movies-slice';
import userProfileSlice from 'store/slices/user-profile-slice';

// Combine the reducers.
const reducer = combineReducers({
  currentUser: currentUserSlice,
  tmdbMovies: tmdbMoviesSlice,
  userProfile: userProfileSlice,
});

// Configure the store with reducers and default
// middleware.
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()]
});

export default store;
