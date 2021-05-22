// ./src/components/vies/profile/styles/styles.js

// External package dependencies.
import { makeStyles }from '@material-ui/core/styles';

// This page contains style classes used by the Profile component.

export default makeStyles(theme => ({
  avatarSize:{
    width: "128px",
    height: "128px",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 450
  },
}));
