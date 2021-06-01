// ./src/components/forms/user-profile/settings/settings.js

// This file contains constants for elements of the header.

// Favorites settings

export const FAVORITES_SETTINGS = {
  MOVIE_LIMIT: 10,
  FAVORITES_INSTRUCTIONS: (remainingMovies) => `You have` +
    ` ${remainingMovies} favorites left to choose.`,
  FAVORITES_HEADER: `Favorite Movies`
}

// Typography constants
export const FORM_SETTINGS = {
  FORM_SIGN_UP_TITLE: `SIGN UP FOR MOVIES 'N CHILL`,
  FORM_EDIT_TITLE: `EDIT YOUR USER PROFILE`,
  FORM_STEPS: ['User Details', 'Movies'],
};

export const MOVIE_API_SETTINGS = {
  MOVIE_IMG_URI_BASE: `https://www.themoviedb.org/t/p/w1280`,
}

export const MOVIE_SEARCH_ERRORS = {
  ACTIONS: {
    LIMIT: 'LIMIT',
    DUPLICATE: 'DUPLICATE'
  },
  LIMIT_TITLE:`Favorites Limit Reached`,
  LIMIT_CONTENT:
    `You have already selected ${FAVORITES_SETTINGS.MOVIE_LIMIT}` +
    ` movies. If you want to make changes, you can delete some` +
    ` movies from your favorites and add different ones.`,
  DUPLICATE_TITLE: `Duplicate Movie`,
  DUPLICATE_CONTENT:
    `You have already added this movie to your` +
    ` favorites, search again to find another favorite.`,
}

