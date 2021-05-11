// ./src/store/slice/current-user-slice.js

// External package dependencies.
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// These are the API Settings for the Movies 'n
// Chill backed. This endpoint should return
// the user currently authorized by Auth0 if
// that user has signed up for the app and
// should return none if not (indicating that
// the user still needs to go through the sign
// up page and create their profile).
const baseURI = "" // base URI goes here

// Set initial state values.
const initialState= {
  isLoading: false,
  hasErrors: false,
  currentUser: [],
};

// Define current user data slice.
const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    getCurrentUser: state => {
      state.loading = true;
    },
    getCurrentUserSuccess: (state, {payload}) => {
      state.currentUser = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getCurrentUserFailure: state => {
        state.isLoading = false;
        state.hasErrors = true;
    },
  },
})

// Export the actions generated from the slice.
export const {
  getCurrentUser,
  getCurrentUserSuccess,
  getCurrentUserFailure
} = currentUserSlice.actions;

// Export the selector.
export const currentUserSelector = state => state.currentUser;

// Export the reducer.
export default currentUserSlice.reducer;

// Asynchronous thunk action (where the API call lives).
export const fetchCurrentUser = (props) => {
  return async dispatch => {
    dispatch(getCurrentUser());
    try {
      const { sub } = props;
      const splitSub = sub.split('|');
      const auth0Id = encodeURIComponent(splitSub[1].trim());
      const response = await axios.get(`${baseURI}${auth0Id}`);
      dispatch(getCurrentUserSuccess(response.data.user));
    } catch (error) {
      dispatch(getCurrentUserFailure());
    };
  };
};
