// ./src/components/theme/not-found/styles/styles.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles';


// This page contains style classes used by the NotFound component.

const errorTextColor = `#662a5e`;
const errorLargeColor = `#008AB8`;

export default makeStyles(theme => ({
  errorLargeText: {
    color: errorLargeColor,
    fontSize: '15rem',
  },
  errorText: {
    color: errorTextColor,
  },
  pageContainer: {
    minHeight: "100vh",
  },
}));
