/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-arrange', done);
  },

  'Displays an arrange with fitStart, fill, and fitEnd content aligned together': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-all-arrange`);
  },

  'Displays an arrange with fill and fitEnd content aligned together': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);
  },

  'Displays an arrange with fitStart and fill content aligned together': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);
  },

  'Displays an arrange with fitStart aligned individually': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-individually-fit-start`);
  },

  'Displays an arrange with fill aligned individually': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-individually-fill`);
  },

  'Displays an arrange with fitEnd aligned individually': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/arrange-tests/aligned-individually-fit-end`);
  },
};
