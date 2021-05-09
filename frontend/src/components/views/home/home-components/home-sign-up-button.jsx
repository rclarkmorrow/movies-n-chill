// ./src/components/views/home/home-components/home-sign-up-button.jsx

// External package dependencies.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { Create } from '@material-ui/icons/';

// Local imports.
import useStyles, { BTN_SIGN_UP } from 'components/views/home/theme';

// Create the homepage sign up button.
const HomeSignUpButton = () => {
  // Setup the login action.
  const { loginWithRedirect } =useAuth0();
  const classes = useStyles();

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
export default HomeSignUpButton;
