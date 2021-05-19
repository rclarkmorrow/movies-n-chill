// ./src/components/theme/header/header-components/nav-logo.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import {
  NAV_LOGO_ALT_TEXT, NAV_LOGO_FILE, NAV_LOGO_SIZE
} from 'components/theme/header/styles';

// Define the Logo/Branded component of the navigation bar.
const NavLogo = () => (

    <img
      // className="header-logo"
      src={NAV_LOGO_FILE}
      alt={NAV_LOGO_ALT_TEXT}
      height={NAV_LOGO_SIZE}
    />
);

export default NavLogo;
