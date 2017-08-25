/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-theme-provider', done);
  },

  'Displays a default theme-provider': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/theme-provider-tests/default`);
    browser.assert.elementPresent('#themeProvider');
    browser.assert.elementPresent('#themedComponent');
  },

  // The following tests wont work with PhantomJS as it does not have support for CSS custom properties.
  // Once we switch to headless chrome we can uncomment these tests
  /*
  'Displays a themed component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/theme-provider-tests/default`)
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(0, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline');
  },

  'Displays an updated themed component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/theme-provider-tests/default`)
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(0, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline')
    .click('select[id="themeName"] option[value="cerner-mock-theme"]')
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(0, 0, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline-block');
  },
  */
};
