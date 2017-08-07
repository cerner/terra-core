/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-markdown', done);
  },

  'Displays a props table': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('[class*="markdown-body"]');
  },

  'Displays the component title': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('#terra-mock-component');
  },

  'Displays the component getting started section': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('#getting-started');
  },

  'Displays the component usage section': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('#usage');
  },

  'Displays the component example code': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('.lang-jsx');
  },

  'Displays the component features': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/markdown/default`)
      .assert.elementPresent('#component-features');
  },
};
