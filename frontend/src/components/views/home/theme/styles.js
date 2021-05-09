// ./src/components/views/home.style.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles'

// Style constants
const calloutTextColor = `#662a5e`;

export default makeStyles(theme => ({
  buttonIconStyle: {
    transform: 'scale(1.3)',
  },
  calloutText: {
    color: calloutTextColor,
    fontWeight: 600,
    fontSize: '1.5em',
  },
  calloutContainer: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '300px',
  },
  baseButton: {
    boxShadow: 'none',
    width: '300px',
    height: 50,
    fontSize: 25,
    '&:hover': {
      boxShadow: 'none',
    },
  },
}));
