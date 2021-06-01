// ./src/components/views/home/components/left-panel.jsx

// External package dependencies.
import React from 'react';
import { Box, Grid } from '@material-ui/core';

// Local imports.
import {
    CalloutText, LoginButton,
    Logo, SignUpButton,
} from 'components/views/home/components';

// Create the layout for the left panel of the homepage.
const LeftPanel = () => (

    <Grid item container xs={12} md={5} alignItems="center">
      <Grid container direction="column" spacing={2}>
        <Grid item align="center">
          <Box pt={7}>
            <Logo />
          </Box>
        </Grid>
        <Grid item align="center">
          <CalloutText />
        </Grid>
        <Grid item align="center">
          <LoginButton />
        </Grid>
        <Grid item align="center">
          <SignUpButton />
        </Grid>
      </Grid>
    </Grid>
);

export default LeftPanel;
