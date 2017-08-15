/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-card', done);
  },

  'Displays a default card': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/default`)
      .assert.cssProperty('#defaultcard', 'padding', '0px');
  },

  'Displays a default card with vertical padding': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/paddingvertical`);
    browser.assert.cssProperty('#verticalcard', 'padding-bottom', '10px');
    browser.assert.cssProperty('#verticalcard', 'padding-top', '10px');
  },

  'Displays a default card with horizontal padding': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/paddinghorizontal`);
    browser.assert.cssProperty('#horizontalcard', 'padding-left', '10px');
    browser.assert.cssProperty('#horizontalcard', 'padding-right', '10px');
  },

  'Displays a default card with padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/padding`)
      .assert.cssProperty('#paddingcard', 'padding', '10px');
  },

};
