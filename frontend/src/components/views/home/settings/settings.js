// ./src/components/views/home/settings/settings.js

// This file contains constants for elements of the home page.

// Text for the buttons on the homepage.
export const BUTTON_SETTINGS = {
  BTN_LOGIN: `Login`,
  BTN_SIGN_UP: `Sign Up`,
};

// The callout text on the homepage.
export const CALLOUT_TEXT = `Find people with similar taste in films.`;

// Logo image constants.
export const LOGO_SETTINGS = {
  LOGO_ALT_TEXT: `A movie camera facing left with a strip of` +
                 ` film extending to the edge on a purple` +
                 ` background. Movies 'n Chill is written in` +
                 ` white below the strip of film.`,
  LOGO_FILE: `${process.env.PUBLIC_URL}/logo512.png`,
  LOGO_SIZE: `300px`,
}

// Panel image constants.
export const PANEL_IMG_SETTINGS = {
  PANEL_IMG_ALT_TEXT: `A view looks in through the windows of a` +
                      ` small cinema. Ticket machines and movie` +
                      ` listings are on the left, and stairs lead` +
                      ` up to the theatre rooms.`,
  PANEL_IMG_CREATOR: `Myke Simon`,
  PANEL_IMG_FIT: `cover`,
  PANEL_IMG: `${process.env.PUBLIC_URL}/cinema.jpg`,
  PANEL_IMG_SIZE: `100%`,
  PANEL_IMG_SOURCE: `https://unsplash.com/photos/atsUqIm3wxo`,
}
