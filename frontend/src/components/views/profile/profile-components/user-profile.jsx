// ./src/components/views/profile/profile-components/user-profile.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';

// Local imports.
import {
  UserDetails, UserEditButton,
  UserMovies, UserPicture
} from 'components/views/profile/profile-components';
import { currentUserSelector, userProfileSelector } from 'store';

const UserProfile = () => {
  const { userProfile } = useSelector(userProfileSelector);
  const { currentUser } = useSelector(currentUserSelector);

  return(
    <>
      <Grid item xs={12} sm={4} align="left">
        <Box ml={{
          sm: 0,
          md: 15
        }}>
          <UserPicture />
          { userProfile.user_id === currentUser.user_id &&
            <UserEditButton />
          }
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} align="left">
        <UserDetails />
      </Grid>
      <UserMovies />
    </>
  );
};

export default UserProfile;
