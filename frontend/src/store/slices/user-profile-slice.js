// ./src/store/slices/user-profile-slice.js

// External package dependencies.
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

// These are the API Settings for the Movies 'n
// Chill backed. This slice will do a get request
// that should return a users profile by the ID
// stored in the app database. It should also
// make POST and PATCH requests by an
// authenticated user to create or edit their
// profile information.

// Local testing URIs.
// // const baseURI = "http://localhost/api/users"
// const baseURI = 'http://localhost:5000/api/users'

// Production URIs.
const baseURI = 'https://58271de50af4.ngrok.io/api/users';



// Set initial state values.
const initialState = {
  isLoading: false,
  hasErrors: false,
  userProfile: false,
  error: false,
}

// Define the search movie slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfile: state => {
      state.isLoading = true;
    },
    getUserProfileSuccess: (state, {payload}) => {
      state.userProfile = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getUserProfileFailure: (state, {payload}) => {
        state.isLoading = false;
        state.hasErrors = true;
        state.error = payload;
    },
    patchUserProfile: state => {
        state.isLoading = true;
    },
    patchUserProfileSuccess: state => {
      state.isLoading = false;
      state.hasErrors = false;
    },
    patchUserProfileFailure: state => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    postUserProfile: state => {
      state.loading = true;
    },
    postUserProfileSuccess: state => {
      state.isLoading = false;
      state.hasErrors = false;
    },
    postUserProfileFailure: state => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

// Export the actions generated from the slice.
export const {
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFailure,
  patchUserProfile,
  patchUserProfileSuccess,
  patchUserProfileFailure,
  postUserProfile,
  postUserProfileSuccess,
  postUserProfileFailure,
} = userProfileSlice.actions;

// Export the selector.
export const userProfileSelector = state => state.userProfile;

// Export the reducer.
export default userProfileSlice.reducer;

// Asynchronous thunk action (where the API call lives).
export const fetchUserProfile = (props) => {
  return async dispatch => {
    dispatch(getUserProfile());
    try {
      const { profileId, user_id, token } = props;
      const useId = user_id ? user_id : profileId;
      const URIId = encodeURIComponent(useId);
      const response = await axios.get(
        `${baseURI}/${URIId}`,
        {headers: {'Authorization' : `Bearer ${token}`}}
      );
      dispatch(getUserProfileSuccess(response.data));
    } catch (error) {
      dispatch(getUserProfileFailure(error));
    };
  };
};

// Asynchronous thunk action (makes an API Post request)
export const createUserProfile = (props) => {
  return async dispatch => {
    dispatch(postUserProfile(props));
    try {
      const { token, values } = props;
      const withHeaders ={
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
      };
      const response = await axios.post(`${baseURI}`, values, withHeaders);
      dispatch(postUserProfileSuccess(response.data));
    } catch (error) {
      dispatch(postUserProfileFailure());
    };
  };
};

// Asynchronous thunk action (makes an API Patch request)
export const editUserProfile = (props) => {
    return async dispatch => {
      dispatch(patchUserProfile());
      try {
        const { token, values, user_id } = props;
        const withHeaders ={
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
        };
        const response = await axios.patch(`${baseURI}/${user_id}`, values, withHeaders);

        dispatch(patchUserProfileSuccess(response.data));
      } catch (error) {
        dispatch(patchUserProfileFailure());
      };
    };
  };
