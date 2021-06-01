// ./src/app.js

// External package dependencies.
import React from 'react';
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom';


// Local imports.
import {
  Home, Matches, Movies, NotFound,
  Profile, UserProfileForm,
} from 'components';
import { ProtectedRoute } from 'auth';

const App = () => {
  // Get the current location.
  const { pathname } = useLocation();

  // Return the app routes.
  return (
    <>
      <Switch>
        {/* If a route is accessed with a a trailing slash, redirect to
        the route without the slash. */}
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/matches" component={Matches} />
        <ProtectedRoute path="/movies" component={Movies} />
        <ProtectedRoute exact path="/profile/:profileId?" component={Profile} />
        <ProtectedRoute path="/signup" component={UserProfileForm} />
        <ProtectedRoute component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
