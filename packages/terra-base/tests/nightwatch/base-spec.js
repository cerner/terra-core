// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

const waitInms = 1000;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a customized en locale message': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/base-tests/switch`);
    browser.expect.element('div').text.to.contain('en').before(waitInms);
  },

  'Displays an array of elements as a children': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/base-tests/array-of-children`);
    browser.assert.elementPresent('#one');
    browser.assert.elementPresent('#two');
    browser.assert.elementPresent('#three');
    browser.assert.elementPresent('#four');
    browser.assert.elementPresent('#five');
    browser.assert.elementPresent('#six');
  },

  'Switches locale and displays en-US customized locale message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/base-tests/switch`)
      .waitForElementVisible('button', waitInms)
      .click('button');

    browser.expect.element('div').text.to.contain('en-US').before(waitInms);
  },

  // NOTE: This test is designed to assume that tests won't fail on an error.  If it starts failing,
  // we can remove it and either deem that this scenario is not needed in night watch or find a
  // better solution.
  'Displays a placeholder element when translations are not loaded': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/base-tests/no-translations-loaded`);
    browser.expect.element('div').text.to.contain('No Translations');
  },

  'Displays a placeholder string when translations are not loaded': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/base-tests/no-translations-loaded-string`);
    browser.expect.element('div').text.to.contain('No Translations String');
  },
});
