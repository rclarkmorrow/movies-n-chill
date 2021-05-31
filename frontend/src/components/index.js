// ./src/components/index.js

// This file imports and exports all components for easy access.

import CenteredPage from 'components/theme/centered-page';
import Header from 'components/theme/header';
import Home from 'components/views/home';
import Loading from 'components/theme/loading';
import Matches from 'components/views/matches';
import Movies from 'components/views/movies';
import NotFound from 'components/theme/not-found';
import { Error404 } from 'components/theme/not-found';
import Profile from 'components/views/profile';
import UserProfileForm from 'components/forms/user-profile';

export {
  CenteredPage, Header, Home, Loading,
  Matches, Movies, NotFound, Error404,
  Profile, UserProfileForm,
};
