// ./src/components/views/home/home-components/home-logo.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import {
    LOGO_ALT_TEXT, LOGO_FILE, LOGO_SIZE,
} from 'components/views/home/styles';

// Create logo for the homepage.
const HomeLogo = () => (
    <img
      src={LOGO_FILE}
      alt={LOGO_ALT_TEXT}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
    ></img>
);

export default HomeLogo;
