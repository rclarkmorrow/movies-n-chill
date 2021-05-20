// ./src/components/theme/page-not-found/page-not-found.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import { Header, NotFoundError } from 'components';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <NotFoundError />
    </>
    );
  };

export default NotFoundPage;
