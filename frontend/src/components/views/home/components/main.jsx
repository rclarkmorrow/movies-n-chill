// ./src/components/views/home/components/main.jsx

// External package dependencies.
import React from 'react';
import { Grid } from '@material-ui/core';

// Local imports.
import { LeftPanel, RightPanel} from 'components/views/home/components';

// Create the main homepage component.
const Main = () => (
    <Grid container direction="row">
      <LeftPanel />
      <RightPanel />
    </Grid>
);

export default Main;