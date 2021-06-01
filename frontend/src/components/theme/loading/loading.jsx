// ./src/components/theme/loading/loading.jsx

// External package imports.
import React from 'react';
import { Grid } from '@material-ui/core';

// Set the animated loading image path.
const loadingImage=`${process.env.PUBLIC_URL}/loading.svg`;

const Loading = () => (
    // Use Grid and Grid item to center the spinning
    // icon on the loading page.
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <img src={loadingImage} alt="Loading" />
        </Grid>
      </Grid>
    </>
);

export default Loading;
