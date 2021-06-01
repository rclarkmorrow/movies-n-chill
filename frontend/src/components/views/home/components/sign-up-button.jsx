// ./src/components/views/home/components/sign-up-button.jsx

// External package dependencies.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Create } from '@material-ui/icons/';

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
});

// Create the homepage sign up button.
const SignUpButton = () => {
  // Setup the login action.
  const { loginWithRedirect } =useAuth0();
  const classes = useStyles();
  const { BTN_SIGN_UP } = BUTTON_SETTINGS;

  // Define the login button and return it with
  // the login action.
  return (
    <Button
      size="large"
    //   variant="outlined"
      variant="contained"
      color="secondary"
      border={3}
      className={classes.baseButton}
      startIcon={<Create
        className={classes.buttonIconStyle}
    />}
      onClick={() => loginWithRedirect({screen_hint: 'signup'})}
    >{BTN_SIGN_UP}</Button>
  );
};

// Export the button.
export default SignUpButton;
