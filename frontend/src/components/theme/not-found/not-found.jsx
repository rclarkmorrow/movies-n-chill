// ./src/components/theme/not-found/not-found.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import { Footer, Header, Error404 } from 'components';

const NotFound = () => {

  // Create and return the 404 error page.
  return (
    <>
      <Header />
      <Error404 />
      <Footer />
    </>
    );
  };

export default NotFound;
