// ./src/components/views/movies/movies.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';

// Local imports.
import {
  CenteredPage, Error404, Footer,
  Header, Loading
} from 'components';
import { MoviesList } from 'components/views/movies/components';
import { currentUserSelector } from 'store';

// This is the main movie page wrapper. It should determine
// state, and display components appropriately.
const Movies = () => {
  const {
    currentUser, isLoading: isCurrentUserLoading,
    hasErrors
  } = useSelector(currentUserSelector);

  return(
    <>
      <Header />
      { isCurrentUserLoading ?
        <Loading />
      : currentUser ?
        <CenteredPage>
          <MoviesList />
        </CenteredPage>
      :  hasErrors &&
        <Error404 />
      }
      <Footer />
    </>
);
};
export default Movies;
