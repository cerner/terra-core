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
      .assert.elementPresent('.terra-ListItem');
  },
  'Displays a selected list item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/selected`)
      .assert.cssClassPresent('.terra-ListItem', 'terra-ListItem--selected');
  },
  'Displays a selectable list item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/selectable`)
      .assert.cssClassPresent('.terra-ListItem', 'terra-ListItem-isSelectable');
  },
  'Displays a chevron list item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/chevron`)
      .assert.cssClassPresent('.terra-ListItem', 'terra-ListItem-hasChevron');
  },
  'Displays a content for list item with the provided content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-item-tests/default`)
      .assert.elementPresent('.terra-ListItem p:nth-child(1)')
      .assert.containsText('.terra-ListItem p:nth-child(1)', 'test content');
  },
};
