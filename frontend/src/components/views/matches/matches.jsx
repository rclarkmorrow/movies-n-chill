// ./src/components/views/matches/matches.jsx

// External package dependencies.
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

// Local imports.
import { CenteredPage } from 'components';

// This is the main matches page wrapper. It should determine
// state, and display components appropriately.
const Matches = () => (
  <CenteredPage>
    <Grid item xs={12} align="center">
      <Typography variant="h2">MATCHES PAGE</Typography>
    </Grid>
    <Box mt={5}>
      <Typography variant="h4">components go here</Typography>
    </Box>
  </CenteredPage>
);

export default Matches;
