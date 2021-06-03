// ./src/store/slice/user-matches-slice.js

// External package dependencies.
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


// const baseURI = 'http://ec2-52-14-4-251.us-east-2.compute.amazonaws.com:5000/users';
const baseURI = 'http://localhost/api/users'
// const baseURI = 'https://5236a6d8b1df.ngrok.io/api/users';


// Set initial state values.
const initialState= {
  isLoading: false,
  hasErrors: false,
  userMatches: false,
};

// Define user matches data slice.
const userMatchesSlice = createSlice({
  name: 'suerMatches',
  initialState,
  reducers: {
    getUserMatches: state => {
      state.isLoading = true;
    },
    getUserMatchesSuccess: (state, {payload}) => {
      state.userMatches = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getUserMatchesFailure: state => {
        state.isLoading = false;
        state.hasErrors = true;
    },
  },
})

// Export the actions generated from the slice.
export const {
  getUserMatches,
  getUserMatchesSuccess,
  getUserMatchesFailure
} = userMatchesSlice.actions;

// Export the selector.
export const userMatchesSelector = state => state.userMatches;

// Export the reducer.
export default userMatchesSlice.reducer;

// Asynchronous thunk action (where the API call lives).
export const fetchUserMatches = (props) => {
  return async dispatch => {
    dispatch(getUserMatches());
    try {
      const { user_id, token } = props;
      const response = await axios.get(
        `${baseURI}/${user_id}/matches`,
        {headers: {'Authorization' : `Bearer ${token}`}}
      );
      dispatch(getUserMatchesSuccess(response.data));
    } catch (error) {
      dispatch(getUserMatchesFailure());
    };
  };
};
