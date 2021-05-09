// ./src/components/views/home/home-components/home-main.jsx

// External package dependencies.
import React from 'react';
import { Grid } from '@material-ui/core';

// Local imports.
import { HomeLeftPanel, HomeRightPanel} from 'components/views/home/home-components';

// Create the main homepage component.
const HomeMain = () => (
    <Grid container direction="row">
      <HomeLeftPanel />
      <HomeRightPanel />
    </Grid>
);

// Export the main homepage.
export default HomeMain;