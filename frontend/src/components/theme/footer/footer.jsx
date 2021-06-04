// ./src/components/theme/footer/footer.jsx

// External package dependencies.
import React, { useState } from "react";
import {
  Box, Dialog, DialogContent, DialogTitle,
  Grid, IconButton, Link, Paper, Typography
} from '@material-ui/core';
import { Close, Info } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Local imports.
import { ABOUT_TEXT, FOOTER_TEXT } from 'components/theme/footer/settings';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
      flexWrap: 'wrap',
    },
    linkColor: {
      color: '#FFFFFF',
    },
    aboutClose: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    primaryText: {
      color: theme.palette.primary.main
    }
  }));

const Footer = () => {
  const classes = useStyles();
  const {
    COPYRIGHT, ATTRIBUTION, SOURCE, LINK
  } = FOOTER_TEXT
  const { TITLE, CONTENT } = ABOUT_TEXT
  const [ aboutOpen, setAboutOpen ] = useState(false);

  const handleAboutOpen = () => {
      setAboutOpen(true);
  }
  const handleAboutClose = () => {
      setAboutOpen(false);
  }

  return (
    <>
    <Paper
      className={classes.root}
      elevation={0}
      square={true}
    >
      <Box width="100%" pt={4} pb={4} pl={10} pr={10}>
        <Grid container spacing={2} justify="space-around">
          <Grid item align="left">
            <Box>
            <IconButton
              className={classes.linkColor}
              onClick={handleAboutOpen}
            >
                <Info />
                <Typography variant="h5">
                  &nbsp;About
                </Typography>
              </IconButton>
            </Box>
          </Grid>
          <Grid item align="right">
            <Box>
              <Typography variant="body2">
                {COPYRIGHT}
              </Typography>
              <Typography variant="body2">
                {ATTRIBUTION}
                <Link className={classes.linkColor} href={LINK}>
                  {SOURCE}
                </Link>.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
    <Dialog onClose={handleAboutClose} open={aboutOpen}>
      <DialogTitle>
        <Typography className={classes.primaryText} variant="h6">
          {TITLE}
          <IconButton
            className={`${classes.aboutClose} ${classes.primaryText}`}
            onClick={handleAboutClose}
          >
            <Close />
          </IconButton>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        { CONTENT.map((paragraph, index) => (
          <Typography key={index} gutterBottom gutterTop>
            {paragraph}
          </Typography>
        ))}
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Footer;