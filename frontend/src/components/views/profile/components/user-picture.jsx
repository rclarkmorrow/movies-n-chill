// ./src/components/views/profile/components/user-picture.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

// Local imports.
import { userProfileSelector } from 'store';

const useStyles = makeStyles({
  root:{
    width: "128px",
    height: "128px",
  },
})

const UserPicture = () => {
  const classes = useStyles();
  const { userProfile } = useSelector(userProfileSelector);
  const { user_name, picture_url} = userProfile

  return(
    <Box pt={5} pl={4}>
      <Avatar
        className={classes.root}
        alt={`User picture for ${user_name}`}
        src={picture_url}
      />
    </Box>
  );
};

export default UserPicture;
