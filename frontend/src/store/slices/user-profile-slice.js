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

const baseURI = "" // Base API URI goes here.

// Set initial state values.
const initialState= {
  isLoading: false,
  hasErrors: false,
  userProfile: [],
}

// Define the search movie slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfile: state => {
      state.loading = true;
    },
    getUserProfileSuccess: (state, {payload}) => {
      state.userProfile = payload
      state.isLoading = false;
      state.hasErrors = false;
    },
    getUserProfileFailure: state => {
        state.isLoading = false;
        state.hasErrors = true;
    },
    patchUserProfile: state => {
        state.loading = true;
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
    }
  },
})

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
  postUserProfileFailure
} = userProfileSlice.actions;

// Export the selector.
export const userProfileSelector = state => state.userProfile;

// Export the reducer.
export default userProfileSlice.reducer;

// Asynchronous thunk action (where the API call lives).
export const fetchUserProfile = (props) => {
    console.log(`start fetch user`)
    // const { getTokenSilently } = useAuth0()
  return async dispatch => {
    dispatch(getUserProfile());
    try {
      const { profileId, userId } = props;
      const useId = userId ? userId : profileId;
      const URIId = encodeURIComponent(useId);
      const response = await axios.get(`${baseURI}${URIId}`);
      dispatch(getUserProfileSuccess(response.data.user));
    } catch (error) {
      dispatch(getUserProfileFailure());
    }
  }
}

// Asynchronous thunk action (makes an API Post request)
export const createUserProfile = (props) => {
  return async dispatch => {
    dispatch(postUserProfile());
    try {
      const { token, ...otherProps } = props;
      const request ={
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(otherProps)
      };
      const response = await axios.post(`${baseURI}`, request);
      console.log(`response ${response}`);
      dispatch(postUserProfileSuccess());
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
        const { token, ...otherProps } = props;
        const request ={
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(otherProps)
        };
        const response = await axios.post(`${baseURI}`, request);
        console.log(`response ${response}`);
        dispatch(patchUserProfileSuccess());
      } catch (error) {
        dispatch(patchUserProfileFailure());
      };
    };
  };
