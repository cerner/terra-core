// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default icon with aria-hidden equal to true': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-default`)
      .expect.element('#icon-default').to.have.attribute('aria-hidden').which.contains('true');
  },

  'Displays a default icon with height equal to 1em': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-default`)
      .expect.element('#icon-default').to.have.attribute('height').which.contains('1em');
  },

  'Displays a default icon with width equal to 1em': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-default`)
      .expect.element('#icon-default').to.have.attribute('width').which.contains('1em');
  },

  'Displays a default icon with focusable equal to false': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-default`)
      .expect.element('#icon-default').to.have.attribute('focusable').which.contains('false');
  },

  'Displays an icon with an appended css class': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-append-class`)
      .expect.element('#append-class-custom').to.have.attribute('class').which.contains('custom-class');
  },

  'Displays icon example where the ariaLabel is given': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-aria`)
      .expect.element('#icon-aria-label').to.have.attribute('role').which.contains('img');

    browser
      .expect.element('#icon-aria-label').to.not.have.attribute('aria-hidden');
  },

  'Displays icon height and width examples': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/icon/icon-height-width`)
      .expect.element('#icon-height-5em').to.have.attribute('height').which.contains('5em');

    browser
      .expect.element('#icon-width-5em').to.have.attribute('width').which.contains('5em');

    browser
      .expect.element('#icon-height-50-width-50').to.have.attribute('width').which.contains('50');
  },

  'Displays icon bidirectionality examples': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/icon/icon-bidi`);
  },
});
