// ./src/index.js

// External package dependencies.
import React, { StrictMode }from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Local modules.
import App from 'App';
import store from 'store';
import { Auth0ProviderWithHistory } from 'auth';
import { ThemeWrapper } from 'styles';

ReactDOM.render(
  <Router>
    <StrictMode>
      <Provider store={store}>
        <Auth0ProviderWithHistory>
          <ThemeWrapper>
            <App />
          </ThemeWrapper>
        </Auth0ProviderWithHistory>
      </Provider>
    </StrictMode>
  </Router>,
  document.getElementById('root')
);
