/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

const waitInms = 1000;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-base', done);
  },

  'Displays html with terra-Base class': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/base-tests/default`)
      .waitForElementVisible('body', waitInms);

    browser.assert.cssClassPresent('html', 'terra-Base');
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
};
