// ./src/components/views/profile/profile-components/user-picture.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Avatar } from '@material-ui/core';

// Local imports.
import useStyles from 'components/views/profile/styles';
import { userProfileSelector } from 'store';

const UserPicture = () => {
  console.log('user picture loads')
  const classes = useStyles();
  const { userProfile } = useSelector(userProfileSelector);
  const { user_name, picture_url} = userProfile
  console.log(`${user_name}, ${picture_url}`)

  return(
    <Box pt={5} pl={4}>
      <Avatar
        className={classes.avatarSize}
        alt={`User picture for ${user_name}`}
        src={picture_url}
      />
    </Box>
  );
};

export default UserPicture;
