// ./src/components/forms/user-profile/stepper-wrapper.jsx

// External package dependencies.
import React from 'react';
import { Grid } from '@material-ui/core';

// This wraps the stepper component in the form in Grids so that
// it displays with the proper layout without cluttering the
// main component.
const StepperWrapper = ({children}) => (
  <Grid container>
    <Grid item xs={false} sm={3}/>
    <Grid item xs={12} sm={6}>
      {children}
    </Grid>
    <Grid item xs={false} sm={3}/>
  </Grid>
);

export default StepperWrapper;
