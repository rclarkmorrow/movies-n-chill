// ./src/components/views/profile/components/user-details.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { Email, Phone } from '@material-ui/icons';

// Local imports.
import { userProfileSelector } from 'store';
import { PROFILE_TEXT } from 'components/views/profile/settings';

const UserDetails = () => {
  const { GENDER_LABEL, SEEKING_LABEL } = PROFILE_TEXT
  const { userProfile } = useSelector(userProfileSelector);
  const {
      city, email_address, self_gender, phone_number,
      seeking_gender, state, user_name,
  } = userProfile;

  return(
    <Box pt={7} pl={4}>
      <Typography variant="h3">
        {user_name}
      </Typography>
      <Typography variant="h5">
        {city}, {state}
      </Typography>
      <Link
        href={`mailto:${email_address}`}
      >
        <Grid container spacing={1}>
          <Grid item>
              <Email fontSize="small"/>
          </Grid>
          <Grid item>
            <Typography variant="body2">
                {email_address}
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Link
        href={`tel:${phone_number}`}
      >
        <Grid container spacing={1}>
          <Grid item>
            <Phone fontSize="small"/>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              {phone_number}
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Box pt={3}>
        <Typography variant="h6">
          {GENDER_LABEL}{self_gender}
        </Typography>
        <Typography variant="h6">
          {SEEKING_LABEL}{seeking_gender}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDetails;
