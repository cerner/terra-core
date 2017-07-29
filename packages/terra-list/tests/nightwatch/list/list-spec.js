/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-list', done);
  },

  'Displays a default list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/default`)
      .assert.elementPresent('ul');
  },
  'Displays items in the list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/default`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },
  'Displays a divided list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/items-divided`);
    browser.expect.element('ul').to.have.attribute('class').which.contains('divided');
  },
  'Displays a list with one item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/one-item`)
      .assert.elementPresent('ul');
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/one-item`)
      .assert.elementPresent('ul > li');
  },
  'Displays a list with no items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/no-items`)
      .assert.elementPresent('ul');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/no-items`)
      .assert.elementNotPresent('li');
  },
};
