// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/grid-tests/default`)
      .assert.elementPresent('#grid');
  },
  'Displays a responsive grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/grid-tests/responsive`)
      .assert.elementPresent('#grid');
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/grid-tests/nested`)
      .assert.elementPresent('#grid');
  },
});
