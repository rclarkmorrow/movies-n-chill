// ./src/components/views/profile/profile.jsx

// External package dependencies.
import React from 'react';
import { Typography } from '@material-ui/core';

// Local imports.
import { CenteredPage } from 'components';

// This is the main profile page wrapper. It should determine
// state, and display components appropriately.
const Profile = () => (
    <CenteredPage>
        <Typography variant="h3">Components go here</Typography>
    </CenteredPage>
);

export default Profile;
