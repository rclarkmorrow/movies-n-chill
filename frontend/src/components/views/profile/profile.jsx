// ./src/components/views/profile/profile.jsx

// External package dependencies.
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// Local imports.
import { Error404, Header, Loading } from 'components';
import { Main } from 'components/views/profile/components';
import {
  currentUserSelector,
  fetchUserProfile,
  userProfileSelector,
} from 'store';

// This is the main profile page wrapper. It should determine
// state, and display components appropriately.
const Profile = () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  // Grabs URL parameters.
  const { profileId } = useParams();
  // Get user profile and loading status
  const {
    hasErrors, userProfile,
    isLoading: isUserProfileLoading
  } = useSelector(userProfileSelector);
  // Get current user's data from redux store.
  const { currentUser } = useSelector(currentUserSelector);

  // If there are URI parameters, fetch that user ID otherwise
  // with no parameters we'll load the profile for the current
  // logged in user.
  useEffect(() => {
    // We use async here to ensure that the access token is
    // returned before we execute further logic; this prevents
    // unwanted renderings of the 404 page.
    const getUserProfile = async () => {
      const token = await getAccessTokenSilently();
      if (profileId) {
        dispatch(fetchUserProfile({profileId,token}));
      } else if (currentUser) {
        const { user_id } = currentUser
        dispatch(fetchUserProfile({user_id, token}));
      }
    }
    getUserProfile()
  }, [dispatch, profileId, currentUser,
      getAccessTokenSilently]);

  return(
    <>
      <Header />
      { isUserProfileLoading ?
        <Loading />
      : userProfile ?
        <Main />
      :  hasErrors &&
        <Error404 />
      }
    </>
  );
};

export default Profile;
