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

  'Displays a default list item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/default`)
      .assert.elementPresent('li');
  },
  'Displays a selected list item': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/selected`);
    browser.expect.element('li').to.have.attribute('class').which.contains('selected');
  },
  'Displays a selectable list item': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/selectable`);
    browser.expect.element('li').to.have.attribute('class').which.contains('is-selectable');
  },
  'Displays a chevron list item': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },
  'Displays a content for list item with the provided content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/default`)
      .assert.containsText('li p:nth-child(1)', 'test content');
  },
};
