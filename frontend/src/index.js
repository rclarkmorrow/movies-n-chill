// ./src/index.js

// External package dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Local modules.
import App from 'App';
import { Auth0ProviderWithHistory } from 'auth';

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById('root')
);
