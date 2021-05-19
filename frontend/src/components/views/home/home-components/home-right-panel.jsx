// ./src/components/views/home/home-components/home-right-panel.jsx

// External package dependencies.
import React from 'react';
import { Grid } from '@material-ui/core';

// Local imports.
import { HomePanelImage } from 'components/views/home/home-components';

// Create the right panel for the homepage.
const HomeRightPanel = () => (
  <Grid item xs={12} md={7}>
    <HomePanelImage />
  </Grid>
);

export default HomeRightPanel;
