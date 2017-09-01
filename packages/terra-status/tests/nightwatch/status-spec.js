// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default status': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/status-tests/default`)
      .expect.element('#status').text.to.contain('Sample text');
  },

  'Displays arrange status example': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/status-tests/arrange`)
      .expect.element('#statusArrange').text.to.contain('Sample text');
  },

  'Displays icon status example': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-tests/icon`);
  },

  'Displays image status example': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-tests/image`);
  },

  'Displays status with no style': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-tests/no-color`);
  },
});
