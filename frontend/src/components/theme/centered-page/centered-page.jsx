// ./src/components/theme/centered-page/centered-page.jsx

// External package dependencies.
import React from 'react';
import {
  Box, Grid, Paper
} from '@material-ui/core';


// This creates a 'theme' wrapper for pages that should have
// a centered white Paper component with a from material UI
// at approx. 2/3rds screen width (100% for small views) as
// a background for other components.
const CenteredPage = ({children}) => {

  return (
  <Grid container>
    <Grid item xs={false} sm={2} />
    <Grid item xs={12} sm={8}>
      <Paper>
        <Box pt={5}>
          <Grid  container justify="space-around">
            {children}
          </Grid>
        </Box>
      </Paper>
    </Grid>
    <Grid item xs={false} sm={2} />
  </Grid>
  );
};

export default CenteredPage;
