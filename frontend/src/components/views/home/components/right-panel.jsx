// ./src/components/views/home/home-components/home-right-panel.jsx

// External package dependencies.
import React from 'react';
import { Grid } from '@material-ui/core';

// Local imports.
import { PanelImage } from 'components/views/home/components';

// Create the right panel for the homepage.
const RightPanel = () => (
  <Grid item xs={12} md={7}>
    <PanelImage />
  </Grid>
);

export default RightPanel;
