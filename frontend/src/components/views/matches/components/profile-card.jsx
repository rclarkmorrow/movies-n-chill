// ./src/components/views/matches/components/profile-card.jsx

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Box, Card, CardContent,
  CardActions, Grid, Link, Typography
} from '@material-ui/core';
import { Email, Favorite, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    height: '100px',
    width: '100px'
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  const {
    user_id, user_name, picture_url,
    email_address, phone_number, city,
    state, match_percent,
  } = props

  return (
    <Card className={classes.root} elevation={0} square={true}>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item>
            <Avatar
              aria-label="profile picture"
              className={classes.avatar}
              alt-text={`user profile picture for ${user_name}`}
              src={picture_url}
            />
          </Grid>
          <Grid item>
            <Box
              mt={2}
            >
              <Typography variant="h4">
                {user_name}
              </Typography>
              <Typography variant="h5">
                {city}, {state}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <CardActions disableSpacing>
            <Link
              href={`profile/${user_id}`}
            >
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Favorite />
                </Grid>
              <Grid item>
                <Typography variant="h4">
                  {match_percent} match!
                </Typography>
              </Grid>
              </Grid>
            </Link>
          </CardActions>
        </Box>
        <Box ml={2}>
          <Typography variant="h6">
            Contact:
          </Typography>
          <Link
            href={`mailto:${email_address}`}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Email fontSize="small"/>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {email_address}
                </Typography>
              </Grid>
            </Grid>
          </Link>
          <Link
            href={`tel:${phone_number}`}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Phone fontSize="small"/>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {phone_number}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;