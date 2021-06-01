// ./src/components/theme/header/components/nav-logout-button.jsx

// External package dependencies.
import React, {Fragment} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

// Local imports.
// import useStyles from 'components/theme/header/styles';

const useStyles = makeStyles({
  root: {
    height: '65px',
    width: '65px',
    '&:active': {
      boxShadow: 'none',
      outline: 0,
      outlineStyle: 'none',
      outlineWidth: 0,
    },
    '&:focus': {
      boxShadow: 'none',
      outline: 0,
      outlineStyle: 'none',
      outlineWidth: 0,
    },
  }
})

// Create the homepage login button.
const NavLogoutButton = (props) => {
  const { logout } =useAuth0();
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
        <ExitToApp data-tip="Logout"
        className={classes.root}
        />
      </IconButton>
    </Fragment>
  );
};

export default NavLogoutButton;
