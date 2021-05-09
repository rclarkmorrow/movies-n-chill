// ./src/styles/theme-wrapper.jsx

// External package dependencies
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

// Local imports.
import { theme, useStyle } from 'styles';

const ThemeWrapper = ({ children }) => {
  const classes=useStyle();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          {children}
        </div>
    </ThemeProvider>
  )
}

// Export the theme wrapper.
export default ThemeWrapper;