// ./src/components/views/matches/components/matches-panel.jsx

// External package dependencies.
import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box, Grid,
} from '@material-ui/core';


// Local imports.
import { ProfileCard } from 'components/views/matches/components';
import { userMatchesSelector } from 'store';

const MatchesPanel = () => {
    const { userMatches } = useSelector(userMatchesSelector);

    return(
      <Box mt={2}>
        <Grid container>
          {
            !userMatches ?
              <h2>No matches found!</h2>
            :
              userMatches.map((match) => (
                <Grid item sm={6} md={4} key={match.user_id}>
                  <Box m={4}>
                    <ProfileCard
                      id={match.user_id}
                      user_id={match.user_id}
                      user_name={match.user_name}
                      email_address={match.email_address}
                      phone_number={match.phone_number}
                      picture_url={match.picture_url}
                      city={match.city}
                      state={match.state}
                      match_percent={match.match_percent}
                    />
                  </Box>
                </Grid>
              ))
          }
        </Grid>
      </Box>
    )
}

export default MatchesPanel;
