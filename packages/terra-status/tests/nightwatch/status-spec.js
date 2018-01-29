// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default status': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/status/status-default`)
      .expect.element('#status').text.to.contain('Sample text');
  },

  'Displays arrange status example': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/status/status-arrange`)
      .expect.element('#statusArrange').text.to.contain('Sample text');
  },

  'Displays icon status example': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/status/status-icon`);
  },

  'Displays image status example': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/status/status-image`);
  },

  'Displays status with no style': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/status/status-no-color`);
  },
});
