// ./src/components/views/profile/profile-components/profile-main.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import { CenteredPage } from 'components';
import { UserProfile } from 'components/views/profile/profile-components';

const ProfileMain = () => {

  return(
        <CenteredPage>
          <UserProfile />
        </CenteredPage>
  );
};

export default ProfileMain;
