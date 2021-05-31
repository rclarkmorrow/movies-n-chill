// ./src/components/theme/header/headercomponents/nav-menu.jsx

// External package imports.
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { PeopleAlt, Person, Theaters } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

// Local imports.
import useStyles from 'components/theme/header/styles';

// Create the navigation menu component.
const NavMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  return(
    <>
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
    </>
  )
}

export default NavMenu;
