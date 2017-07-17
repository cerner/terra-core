/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

const waitInms = 1000;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-base', done);
  },


  'Displays a customized en locale message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/base-tests/switch`);

    browser.expect.element('div').text.to.contain('en').before(waitInms);
  },

  'Switches locale and displays en-US customized locale message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/base-tests/switch`)
      .waitForElementVisible('button', waitInms)
      .click('button');

    browser.expect.element('div').text.to.contain('en-US').before(waitInms);
  },

  // NOTE: This test is designed to assume that tests won't fail on an error.  If it starts failing,
  // we can remove it and either deem that this scenario is not needed in night watch or find a
  // better solution.
  'Displays a placeholder when translations are not loaded': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/base-tests/no-translations-loaded`);

    browser.expect.element('div').text.to.contain('No Translations');
  },
};
