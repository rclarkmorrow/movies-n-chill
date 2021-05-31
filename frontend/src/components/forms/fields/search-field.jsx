// ./src/components/forms/fields/search-field.jsx

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchField = (props) => {
  const classes = useStyles();
  const { placeholder, ...rest } = props;

  return (
    <>
      <InputBase
        {...rest}
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': {placeholder}  }}
        onKeyPress={keyEvent => {keyEvent.keyCode === 13 && keyEvent.preventDefault()}}
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </>
  );
}

export default SearchField;
