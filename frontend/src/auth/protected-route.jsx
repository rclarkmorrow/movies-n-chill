// ./src/auth/protected-route.jsx

// External package imports.
import React, { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

// Local imports.
import { Header, Loading } from "../components";
import { currentUserSelector, fetchCurrentUser } from "../store";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    getAccessTokenSilently, user,
    isAuthenticated, isLoading: isAuthLoading
  } = useAuth0();
  const {
    hasErrors,isLoading: isCurrentUserLoading
  } = useSelector(currentUserSelector);

  useEffect(() => {
    const storeCurrentUser = async() => {
      if (isAuthenticated) {
        const { sub } = user;
        const token = await getAccessTokenSilently();
        dispatch(fetchCurrentUser({sub, token}));
      }
    }
    storeCurrentUser();
  }, [dispatch, getAccessTokenSilently,
      isAuthenticated, user]);

  return (
    <Route {...rest} render={props => {
        return (
          isCurrentUserLoading || isAuthLoading ?
            <>
              <Header />
              <Loading />
            </>
          : hasErrors && pathname !== "/signup" ?
            <Redirect to={
              {
                pathname: "/signup",
                state: {
                  from: props.location
                }
              }
            } />
          : isAuthenticated ?
            <Component {...rest} {...props} />
          // : !currentUser && pathname !== "/signup" ?
          //   <Redirect to="/signup" />
          :
            <Redirect to={
              {
                pathname: "/",
                state: {
                  from: props.location
                }
              }
            } />
        )
      }}
    />
  );
};

export default ProtectedRoute;
