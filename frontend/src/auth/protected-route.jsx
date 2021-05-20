// ./src/auth/protected-route.jsx

// External package imports.
import React, { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

// Local imports.
import { Loading } from "../components";
import { currentUserSelector, fetchCurrentUser } from "../store";

const ProtectedRoute = ({ component: ComponentToRender, ...args }) => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, user } = useAuth0();
  const {
    currentUser,
    isLoading: isUserLoading
  } = useSelector(currentUserSelector);

  useEffect(() => {
      if (isAuthenticated) {
        const { sub } = user
        dispatch(fetchCurrentUser({ sub }));
      }

  }, [dispatch, isAuthenticated, user]);

  // console.log(`Protected Route Current User: ${JSON.stringify(currentUser.userName)}`)
  return (
    <Route {...args} render={(props=> {
      return (
        isLoading || isUserLoading ?
          <Loading />
        : !isAuthenticated ?
          <Redirect to="/" />
        // UNCOMMENT TO REDIRECT TO PROFILE PAGE WHEN SIGNUP FORM
        // IS IMPLEMENTED -- THIS CATCHES USERS WHO HAVE REGISTERED
        // THROUGH AUTH0, BUT WHO DO NOT HAVE NOT SET UP A PROFILE.
        // : !currentUser && pathname !== "/signup" ?
        //   <Redirect to="/signup" />
        : <ComponentToRender />
      )
    })}></Route>
  )
}

// Export the protected route.
export default ProtectedRoute;
