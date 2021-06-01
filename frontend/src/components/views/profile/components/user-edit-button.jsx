// ./src/components/views/profile/components/user-edit-button.jsx

// External package dependencies.
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { Create } from '@material-ui/icons';

// Local imports
import { PROFILE_TEXT } from 'components/views/profile/settings';

const UserEditButton = () => {
  const history = useHistory();
  const { EDIT_BUTTON_TEXT, EDIT_BUTTON_URL } = PROFILE_TEXT;

  return(
    <Box pl={10}>
      <Button
        color="primary"
        startIcon={<Create />}
        onClick={() =>
          history
          .push(`${EDIT_BUTTON_URL}`)}
      >
        {EDIT_BUTTON_TEXT}
      </Button>
    </Box>
  );
};

export default UserEditButton;
