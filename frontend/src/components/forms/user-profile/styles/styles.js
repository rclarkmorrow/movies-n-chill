// ./src/components/forms/user-profile/styles/styles.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles';

// This page contains style classes used by the Profile component.

export default makeStyles((theme) => ({
  filledWarning: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  chipRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginLeft: 40,
    marginRight: 40
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
