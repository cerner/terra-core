// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a profile image': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/profile-image-tests/default`);
  },

  'Displays the avatar image if the profile image was not found': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/profile-image-tests/default`);
  },
});
