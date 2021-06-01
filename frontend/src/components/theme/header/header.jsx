// ./src/components/theme/header/header.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar, Box, Grid, Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


// Local imports.
import { currentUserSelector } from 'store';
import {
  NavLogo, NavLogoutButton, NavMenu
} from 'components/theme/header/components';

const useStyles = makeStyles({
  appBar:{
    boxShadow: 'none',
  },
})

// The main Navigation bar component.
const Header = () => {
  const classes = useStyles();
  const { currentUser } = useSelector(currentUserSelector);
  const { isAuthenticated } = useAuth0();

  // Return the main header component (navigation bar).
  return (
    // Define the NavBar with classes and add component elements.
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
      <Grid container justify={"space-between"} alignItems="center">
        <Grid item xs={false} sm={3} m={3}>
          <Box
            display={{
              xs: 'none',
              sm: 'block',
            }}
            align="left"
          >
            <NavLogo />
          </Box>
        </Grid>
        { currentUser ?
            <NavMenu  />
          :
            <></>
        }
        <Grid item xs={3} sm={3} md={3}>
          <Box display={{
           xs: 'block',
            sm: 'block',
          }} align='right'>
            { isAuthenticated ?
                <NavLogoutButton />
              :
                <></>
            }
          </Box>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
