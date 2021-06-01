// ./src/components/views/home/components/login-button.jsx

// External package dependencies.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

// Local imports.
import { BUTTON_SETTINGS } from 'components/views/home/settings';

const useStyles = makeStyles({
  buttonIconStyle: {
    transform: 'scale(1.3)',
  },
  baseButton: {
    boxShadow: 'none',
    width: '300px',
    height: 50,
    fontSize: 25,
    '&:hover': {
      boxShadow: 'none',
    },
  },
})

// Create the homepage login button.
const LoginButton = () => {
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

export default LoginButton;
