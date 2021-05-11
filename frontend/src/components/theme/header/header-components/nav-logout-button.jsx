// ./src/components/theme/header/header-components/nav-logout-button.jsx

// External package dependencies.
import React, {Fragment} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

// Local imports.
import useStyles from 'components/theme/header/styles';

// Create the homepage login button.
const NavLogoutButton = (props) => {
  // Setup the login action.
  const { logout } =useAuth0();

  // Setup the button classes.
  const classes = useStyles();

  // Define the login button and return it with
  // the login action.
  return (
    <Fragment>
      <ReactTooltip
       place="bottom"
       effect="solid"
       delayShow={500}
      />
      <IconButton
        edge="start"
        color="inherit"
        aria-label="logout"
        onClick={() => logout()}
      >
        <ExitToApp data-tip="Logout" className={classes.navIconStyle} />
      </IconButton>
    </Fragment>
  );
};

// Export the LogoutButton.
export default NavLogoutButton;
