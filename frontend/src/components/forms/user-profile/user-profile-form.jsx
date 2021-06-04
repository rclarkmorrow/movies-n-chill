// ./src/components/forms/user-profile-form/user-profile-form.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';

// Local imports.
import { CenteredPage, Footer, Header, Loading, } from 'components';
import { ProfileForm } from 'components/forms/user-profile/components';
import { currentUserSelector } from 'store';

const UserProfileForm = () => {
  const { isLoading: isCurrentUserLoading } = useSelector(currentUserSelector);

  return (
    <>
    <Header />
    { isCurrentUserLoading ?
        <Loading />
      :
        <>
          <CenteredPage>
            <ProfileForm />
          </CenteredPage>
        </>
    }
    <Footer />
  </>
  );
};

export default UserProfileForm;