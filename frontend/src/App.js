// ./src/app.js

// External package dependencies.
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom';

// Local imports.
import { Header, Home, Profile } from 'components';
// import { Profile } from 'components/views/profile';

const App = () => {
  // Get the current location.
  const { pathname } =useLocation();

  // Return the app routes.
  return (
    <div>
      {/* Display the header on every page but the home page. Putting it here reduces
      amount of times the header component is rendered. */}
      <Route
        path="/"
        render={
          ( props ) => (props.location.pathname !== "/") &&
          <Header />
        }
      />
      <Switch>
        {/* If a route is accessed with a a trailing slash, redirect to
        the route without the slash. */}
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        {/* Holding spot for a profile page to test theme and header load */}
        <Route path="/profile" component={Profile} />
        {/* update with 404 page component */}
        <Route><p>ERROR</p></Route>
      </Switch>
    </div>
  );
}

export default App;
