// ./src/components/theme/header/header.jsx

// External package dependencies.
import React from 'react';
import {
  AppBar, Box, Grid, Toolbar,
} from '@material-ui/core';

// Local imports.
import useStyles from 'components/theme/header/styles';
import {
  NavLogo, NavLogoutButton, NavMenu
} from 'components/theme/header/header-components';

// The main Navigation bar component.
const Header = () => {
  const classes = useStyles();

  // Return the main header component (navigation bar).
  return (
    // Define the NavBar with classes and add component elements.
    <AppBar position="static" className={classes.applicationBar}>
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
        <NavMenu  />
        <Grid item xs={false} sm={3} md={3}>
          <Box display={{
           xs: 'none',
            sm: 'block',
          }} align='right'>
            <NavLogoutButton />
          </Box>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
