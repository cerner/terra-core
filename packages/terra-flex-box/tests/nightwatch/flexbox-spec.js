/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default flexbox component with no attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/default`);
    browser.expect.element('#default').to.be.present;
  },

  'Displays a flexbox component with all parent attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/parent`);
    browser.expect.element('#parent').to.be.present;
  },

  'Displays a flexbox component with all child attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/child`);
    browser.expect.element('#child').to.be.present;
  },

  'Displays a flexbox component with min and max attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/minmax`);
    browser.expect.element('#minmax').to.be.present;
  },
});
