import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';

  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#923d87'
      },
      secondary: {
        main: '#008AB8'
      },
      background: '#FFE6FF',
    }
  });

  theme = responsiveFontSizes(theme);

  const useStyle = makeStyles(() => ({
    root: {
      width: '100%',
      heigh: '100%',
      backgroundColor: theme.palette.background,
      color: theme.palette.text.primary
    },
    // paper: {
    //   marginTop: theme.spacing(3),
    //   marginBottom: theme.spacing(3),
    //   padding: theme.spacing(2),
    //   [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //     marginTop: theme.spacing(6),
    //     marginBottom: theme.spacing(6),
    //     padding: theme.spacing(3)
    //   }
    // },
  }));

  // Export the theme.
  export { theme, useStyle };
