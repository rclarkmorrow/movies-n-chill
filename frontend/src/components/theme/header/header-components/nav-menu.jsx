// ./src/components/theme/header/headercomponents/nav-menu.jsx

// External package imports.
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Home, PeopleAlt, Person, Theaters } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

// Local imports.
import useStyles from 'components/theme/header/styles';

// Create the navigation menu component.
const NavMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  return(
    <Fragment>
      <ReactTooltip
        place="bottom"
        effect="solid"
        delayShow={500}
      />
      <IconButton
        edge="start"
        color="inherit"
        aria-label="profile"
        onClick={() => history.push("/profile")}
      >
        <Person data-tip="Profile" className={classes.navIconStyle} />
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="movies"
        onClick={() => history.push("/movies")}
      >
          <Theaters data-tip="Movies" className={classes.navIconStyle} />
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="matches"
        onClick={() => history.push("/matches")}
      >
        <PeopleAlt data-tip="Matches" className={classes.navIconStyle} />
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="home"
        onClick={() => history.push("/")}
      >
        <Home data-tip="Home" className={classes.navIconStyle} />
      </IconButton>
    </Fragment>
  )
}

// Export the navigation menu.
export default NavMenu;