// ./src/components/views/matches/matches.jsx

// External package dependencies.
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';


// Local imports.
import { Main } from 'components/views/matches/components';
import { Error404, Footer, Header, Loading  } from 'components'
import {
  currentUserSelector, fetchUserMatches,
  userMatchesSelector,
} from 'store';

// This is the main matches page wrapper. It should determine
// state, and display components appropriately.
const Matches = () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { currentUser } = useSelector(currentUserSelector);
  const {
    hasErrors, isLoading: areMatchesLoading,
  } = useSelector(userMatchesSelector);

  useEffect(() => {
    const getUserMatches = async () => {
      const token = await getAccessTokenSilently();
      if (currentUser) {
        const { user_id } = currentUser
        dispatch(fetchUserMatches({user_id, token}));
      }
    }
    getUserMatches();
  }, [dispatch, currentUser,
    getAccessTokenSilently]);

  return (
    <>
      <Header />
      { areMatchesLoading ?
        <Loading />
      : currentUser ?
        <Main />
      :  hasErrors &&
        <Error404 />
      }
      <Footer />
    </>
  );
};

export default Matches;
