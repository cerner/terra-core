/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-list', done);
  },

  'Displays a default multi select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items in the multi select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/items`)
      .assert.containsText('.terra-List .terra-ListItem:nth-child(1)', 'test 1')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(2)', 'test 2')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(3)', 'test 3');
  },
  'Displays a items in the multi select list divided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/items-divided`)
      .assert.cssClassPresent('.terra-List', 'terra-List-divided');
  },
  'Displays a items in the multi select list with a max selection count': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count`)
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the multi select list for on change with click': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/on-change`);

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(3)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(3)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the multi select list for on change with enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/on-change`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(3)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(3)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the multi select list with max selection of 2 for on change with click': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count-on-change`);

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(3)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(3)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a items in the multi select list with max selection of 2 for on change with enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count-on-change`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(3)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(3)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a select items in the multi select list that cannot be deselected': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/no-deselect`)
    .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected')
    .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem-selectable');

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
};
