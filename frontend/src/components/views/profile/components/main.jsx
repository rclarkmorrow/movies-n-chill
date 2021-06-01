// ./src/components/views/profile/components/main.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import { CenteredPage } from 'components';
import { UserProfile } from 'components/views/profile/components';

const Main = () => {

  return(
        <CenteredPage>
          <UserProfile />
        </CenteredPage>
  );
};

export default Main;
