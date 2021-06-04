// ./src/components/theme/footer/settings/settings.js

const year = new Date().getFullYear();

export const FOOTER_TEXT={
  COPYRIGHT: `©${year} Dee Turco, Raj Birru & Rick Morrow. All rights reserved`,
  ATTRIBUTION: `All movie data and images provided by `,
  SOURCE: `TMDb`,
  LINK:`https://www.themoviedb.org`,
}

export const ABOUT_TEXT={
  TITLE: `About Movies \`n Chill`,
  CONTENT: [
    `Co-created by Dee Turco, Raj Birru and Rick Morrow as a capstone project ` +
    `for the University of Washington Tacoma's Graduate Certificate in Software `+
    `Development Engineering. It is concept demonstration of a full stack ` +
    `application that can match users together based on their preferences in movies:`,
    `Once upon a time there was a world free of a COVID-19 pandemic. We could go `+
    `to the theater and enjoy movies together . . . . .`,
    `More than a year since the first COVID-19 case was reported, things have changed forever.`,
    `We aren’t able to go out freely any more . . . . .`,
    `BUT Don’t worry . . . . . `,
    `AT UW-Tacoma's GC-SDE program, there were 3 students working on an application to give ` +
    `the humans back their entertainment & chill: `,
    `Raj, Dee and Rick`,
    `They met at night and developed something together — The “Movies ’n Chill” web application !!`
  ]
}