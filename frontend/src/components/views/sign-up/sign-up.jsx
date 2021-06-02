// ./src/frontend/src/components/views/sign-up/sign-up.jsx

// External package dependencies.
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Local imports.
import { UserProfileForm } from 'components';
import { currentUserSelector } from 'store';

const SignUp = () => {
  const history = useHistory();
  const { currentUser } = useSelector(currentUserSelector);
  return (
    <>
      {
        currentUser ? history.push("/edit-profile")
        : <UserProfileForm />
      }
    </>
  );
}

export default SignUp;