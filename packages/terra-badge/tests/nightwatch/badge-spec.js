// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default badge with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/default`);
  },

  'Displays intent badges with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/intent`);
  },

  'Displays size badges with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/size`);
  },

  'Displays icon badges with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/icon`);
  },
});
