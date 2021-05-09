// ./src/components/views/home/home-components/home-left-panel.jsx

// External package dependencies.
import React from 'react';
import { Box, Grid } from '@material-ui/core';

// Local imports.
import {
    HomeCalloutText, HomeLoginButton,
    HomeLogo, HomeSignUpButton,
} from 'components/views/home/home-components';

// Create the layout for the left panel of the homepage.
const HomeLeftPanel = () => (

    <Grid item container xs={12} md={5} alignItems="center">
      <Grid container direction="column" spacing={2}>
        <Grid item align="center">
          <Box pt={7}>
            <HomeLogo />
          </Box>
        </Grid>
        <Grid item align="center">
          <HomeCalloutText />
        </Grid>
        <Grid item align="center">
          <HomeLoginButton />
        </Grid>
        <Grid item align="center">
          <HomeSignUpButton />
        </Grid>
      </Grid>
    </Grid>
  );

  // Export the main panel of the homepage.
  export default HomeLeftPanel;
