// ./src/components/views/home/home-components/home-login-button.jsx

// External package dependencies.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

// Local imports.
import useStyles, { BUTTON_SETTINGS } from 'components/views/home/styles';


// Create the homepage login button.
const HomeLoginButton = () => {
  // Setup the login action.
  const { loginWithRedirect } =useAuth0();
  const classes = useStyles();
  const { BTN_LOGIN } = BUTTON_SETTINGS;

  // Define the login button and return it with
  // the login action.
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      className={classes.baseButton}
      startIcon={<LockOpenIcon
        className={classes.buttonIconStyle}
      />}
      onClick={() => loginWithRedirect()}
    >{BTN_LOGIN}</Button>
  );
};

export default HomeLoginButton;
