// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays an arrange with fitStart, fill, and fitEnd content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);
  },

  'Displays an arrange with fill and fitEnd content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);
  },

  'Displays an arrange with fitStart and fill content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);
  },

  'Displays an arrange with fitStart aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-start`);
  },

  'Displays an arrange with fill aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fill`);
  },

  'Displays an arrange with fitEnd aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-end`);
  },
});
