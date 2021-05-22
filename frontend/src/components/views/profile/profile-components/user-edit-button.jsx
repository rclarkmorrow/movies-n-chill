// ./src/components/views/profile/profile-components/user-edit-button.jsx

// External package dependencies.
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Create } from '@material-ui/icons';

// Local imports
import { currentUserSelector } from 'store';

const UserEditButton = () => {
  const history = useHistory();
  const { currentUser } = useSelector(currentUserSelector);

  return(
    <Box pl={10}>
      <Button
        startIcon={<Create />}
        onClick={() =>
          history
          .push(`/edit-profile/${currentUser.user_id}`)}
      >
        EDIT
      </Button>
    </Box>
  );
};

export default UserEditButton;
