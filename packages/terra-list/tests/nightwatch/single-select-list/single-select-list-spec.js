/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-list', done);
  },

  'Displays a default single select list with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items in the list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/items`)
      .assert.containsText('.terra-List .terra-ListItem:nth-child(1)', 'test 1')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(2)', 'test 2')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(3)', 'test 3')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the list divided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/items-divided`)
      .assert.cssClassPresent('.terra-List', 'terra-List-divided');
  },
  'Displays a items in the list with a chevron': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/chevron`)
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem-hasChevron')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem-hasChevron')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem-hasChevron');
  },
  'Displays a items in the list with a function set for on change with click': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/on-change`);

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the list with a function set for on change with enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/on-change`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');


    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
};
