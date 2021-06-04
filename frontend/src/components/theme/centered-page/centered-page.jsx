// ./src/components/theme/centered-page/centered-page.jsx

// External package dependencies.
import React from 'react';
import {
  Box, Grid, Paper
} from '@material-ui/core';

// This creates a 'theme' wrapper for pages with an optional
// centered white Paper component with a from material UI
// at approx. 2/3rds screen width (100% for small views) as
// a background for other components.
const CenteredPage = ({children}) => (
  <Grid container>
    <Grid item xs={false} sm={1} />
    <Grid item xs={12} sm={10}>
      <Paper>
        <Box pt={5}>
          <Grid  container justify="space-around">
            {children}
          </Grid>
        </Box>
      </Paper>
    </Grid>
    <Grid item xs={false} sm={1} />
  </Grid>
);

export default CenteredPage;
