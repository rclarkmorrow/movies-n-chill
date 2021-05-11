// ./src/components/theme/header/styles/styles.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles'

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

// // Button constants.
// const navBackgroundColor = `#923d87`;
// // const highlightColor = `#662a5e`;
// const textColor = `#FFFFFF`;

// const useStyles = makeStyles({
//   navBarDisplayFlex:{
//     // display: 'flex',
//     // justifyContent: 'space-between',
//   },
//   navDisplayFlex:{
//     // display: 'flex',
//     // // justifyContent: 'space-between',
//     // flexDirection: 'row-reverse'
//   },
//   toolbarRight:{
//     // marginLeft: 'auto',
//     display: 'flex',
//     justifyContent: 'space-between',
//     // flexDirection: 'row-reverse'
//   },
//   linkText: {
//     textDecoration: 'none',
//     textTransform: 'uppercase',
//     color: '#FFFFFF',
//   },
// });