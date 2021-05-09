// ./src/index.js

// External package dependencies.
import React, { StrictMode }from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Local modules.
import App from 'App';
import { Auth0ProviderWithHistory } from 'auth';
import { ThemeWrapper } from 'styles';

ReactDOM.render(
  <Router>
    <StrictMode>
      <Auth0ProviderWithHistory>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </Auth0ProviderWithHistory>
    </StrictMode>
  </Router>,
  document.getElementById('root')
);
