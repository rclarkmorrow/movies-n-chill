// ./src/components/theme/header/components/nav-menu.jsx

// External package imports.
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PeopleAlt, Person, Theaters } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles({
  root: {
    height: '65px',
    width: '65px',
    '&:active': {
      boxShadow: 'none',
      outline: 0,
      outlineStyle: 'none',
      outlineWidth: 0,
    },
    '&:focus': {
      boxShadow: 'none',
      outline: 0,
      outlineStyle: 'none',
      outlineWidth: 0,
    },
  },
}, { index : 1 })

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
        <Person data-tip="Profile" className={classes.root} />
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="movies"
        onClick={() => history.push("/movies")}
      >
          <Theaters data-tip="Movies" className={classes.root} />
      </IconButton>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="matches"
        onClick={() => history.push("/matches")}
      >
        <PeopleAlt data-tip="Matches" className={classes.root} />
      </IconButton>
    </>
  )
}

export default NavMenu;
