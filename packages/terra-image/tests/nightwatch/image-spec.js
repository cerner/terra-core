// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays an image with default options': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/image/image-default`);
  },

  'Displays non fluid image examples': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/image/image-non-fluid`);
  },

  'Displays fluid image examples': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/image/image-fluid`);
  },

  'Displays an image that successfully loaded': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/image/image-loading`)
      .waitForElementPresent('#loadedImage', 1000);
  },

  'Displays an image that failed to load': (browser) => {
    browser.waitForElementPresent('#errorImage', 1000);
  },
});
