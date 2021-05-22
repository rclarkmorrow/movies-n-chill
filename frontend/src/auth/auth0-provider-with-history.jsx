// ./src/auth/auth0-provider-with-history.jsx

// External package dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// Boiler plate component provides auth0 authorization
// with navigation history.
const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const onRedirectCallback = (appState) => {
      history.push(appState?.returnTo || window.location.pathname);
    };

    return (
      <Auth0Provider
        domain="moviesnchill.us.auth0.com"
        clientId="KOozcZalWEzMc328EiNQ1xlOpy8azokg"
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        audience="MoviesNChill"
        useRefreshTokens
        cacheLocation="localstorage"
      >
        {children}
      </Auth0Provider>
    );
  };

// Export the authorization provider component.
export default Auth0ProviderWithHistory;
