// ./src/components/views/profile/profile-components/user-details.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@material-ui/core';
import { Email, Phone } from '@material-ui/icons';

// Local imports.
import { userProfileSelector } from 'store';

const UserDetails = () => {

  const { userProfile } = useSelector(userProfileSelector);
  const {
      city, email_address, self_gender, phone_number,
      seeking_gender, state, user_name,
  } = userProfile;

  return(
    <Box pt={7} pl={4}>
      <Typography variant="h4">
        {user_name}
      </Typography>
      <Typography>
        {city}, {state}
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
            <Email />
        </Grid>
        <Grid item>
          <Typography>
            {email_address}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Phone />
        </Grid>
        <Grid item>
          <Typography>
            {phone_number}
          </Typography>
        </Grid>
      </Grid>
      <Box pt={3}>
        <Typography variant="h6">
          Gender: {self_gender}
        </Typography>
        <Typography variant="h6">
          Seeking: {seeking_gender}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDetails;
