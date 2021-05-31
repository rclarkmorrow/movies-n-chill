// ./src/styles/styles.js

// External package dependencies.
import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';

// Create theme with colors.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#923d87'
    },
    secondary: {
      main: '#008AB8'
    },
    background: {
      default: '#FFE6FF',
    },
    warning: {
      main: '#923d87',
    },
  },
});

// Set the theme.
theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

export { theme, useStyle };
