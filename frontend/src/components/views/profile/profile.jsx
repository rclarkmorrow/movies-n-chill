// ./src/components/views/profile/profile.jsx

// External package dependencies.
import {Box, Grid, Typography } from '@material-ui/core';

// Local imports.
import { CenteredPage, Header } from 'components';

// This is the main profile page wrapper. It should determine
// state, and display components appropriately.
const Profile = () => (
  <>
    <Header />
    <CenteredPage>
      <Grid item xs={12} align="center">
        <Typography variant="h2">PROFILE PAGE</Typography>
      </Grid>
      <Box mt={5}>
        <Typography variant="h4">components go here</Typography>
      </Box>
    </CenteredPage>
  </>
);

export default Profile;
