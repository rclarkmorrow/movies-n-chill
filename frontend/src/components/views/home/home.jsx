// ./src/components/views/home/home.jsx

// External package dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

//Local imports
import { HomeMain } from 'components/views/home/home-components';
import { Loading } from 'components';

const Home = () => {
  // Check for authentication.
  const { isAuthenticated, isLoading } = useAuth0();

  return(
    isLoading ?
      <Loading />
    : isAuthenticated ?
      <Redirect to="/profile" />
    : <HomeMain />
  );
};

// Export the home view.
export default Home;
