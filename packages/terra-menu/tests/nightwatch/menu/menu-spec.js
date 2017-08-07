/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-menu', done);
  },

  'Displays a default menu with expected content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/default`)
      .assert.elementPresent('#TestContent');
  },
  'Displays a bounded menu with a header': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/bounded`)
      .assert.elementPresent('.TestBoundedContent div[class*="_header"] > div:last-child > button[class*="_header-button"]');
  },
  'Dipslay a back and a close button in header when submenu in a bounded menu': (browser) => {
    browser
      .click('.TestNestedMenu')
      .assert.visible('.TestBoundedContent div[class*="_header"] > div:first-child > button[class*="_header-button"]')
      .assert.visible('.TestBoundedContent div[class*="_header"] > div:last-child > button[class*="_header-button"]')
      .keys([browser.Keys.ESCAPE]);
  },
  'Displays a menu with a small calculated height': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/small`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a menu with a medium calculated height': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/medium`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a menu with a large calculated height': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/large`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a selectable menu with apropriate spacing': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/selectable`)
      .assert.hidden('.TestNonSelectableItem svg[class*="_checkmark"]')
      .assert.hidden('.TestSelectableItem svg[class*="_checkmark"]');
  },
  'Displays a non-selectable menu with apropriate spacing': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/non-selectable`)
      .assert.elementNotPresent('.TestFirstItem svg[class*="_checkmark"]')
      .assert.elementNotPresent('.TestSecondItem svg[class*="_checkmark"]');
  },
  'Replaces menu with nested menu when an item with submenu content is clicked': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-tests/submenu`)
      .click('.TestNestedMenu')
      .assert.elementPresent('.TestNestedMenuContent')
      .assert.visible('div[class*="_header"] > div:first-child > button[class*="_header-button"]')
      .assert.hidden('div[class*="_header"] > div:last-child > button[class*="_header-button"]')
      .keys([browser.Keys.ESCAPE]);
  },
};
