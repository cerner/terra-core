// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays an image with default options': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/image-tests/default`);
  },

  'Displays non fluid image examples': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/image-tests/non-fluid`);
  },

  'Displays fluid image examples': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/image-tests/fluid`);
  },

  'Displays an image that successfully loaded': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/image-tests/loading`)
      .waitForElementPresent('#loadedImage', 1000);
  },

  'Displays an image that failed to load': (browser) => {
    browser.waitForElementPresent('#errorImage', 1000);
  },
});
