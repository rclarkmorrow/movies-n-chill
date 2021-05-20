// ./src/components/theme/header/styles/styles.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles';

export default makeStyles(theme => ({
  applicationBar:{
    boxShadow: 'none',
  },
  navIconStyle: {
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
}));
