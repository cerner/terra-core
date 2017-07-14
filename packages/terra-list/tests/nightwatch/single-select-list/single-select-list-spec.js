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

  'Displays a single select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`)
      .assert.elementPresent('.terra-List');
  },
  'Displays items in the single select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`)
      .assert.containsText('.terra-List .terra-ListItem:nth-child(1)', 'test 1')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(2)', 'test 2')
      .assert.containsText('.terra-List .terra-ListItem:nth-child(3)', 'test 3');
  },
  'Displays items in the single select list divided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/items-divided`)
      .assert.cssClassPresent('.terra-List', 'terra-List-divided');
  },
  'Displays items in the single select list with a chevron from hasChevrons prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/chevron`)
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem-hasChevron')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem-hasChevron')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem-hasChevron');
  },
  'Displays chevron single select list with one non-chevron item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/single-non-chevron`)
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem-hasChevron')
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem-hasChevron')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem-hasChevron');
  },
  'Displays single select list with one chevron item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/single-chevron`)
      .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem-hasChevron')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem-hasChevron')
      .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem-hasChevron');
  },
  'Display a single select list  list and highlights the selected item upon clicking': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(2)');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Display a single select list  list and highlights the selected item upon enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');


    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Display a single select list  list and highlights the selected item upon space keydown': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.SPACE);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.SPACE);
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Triggers onChange for a single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/on-change`);

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(1)', browser.Keys.SPACE);
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
    browser.assert.containsText('#selected-index', '1');

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
    browser.assert.containsText('#selected-index', '0');
  },
  'Displays only one selected item in the single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/preselected`)
    .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected')
    .assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected')
    .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');

    browser.click('.terra-List .terra-ListItem:nth-child(1)');
    browser.assert.cssClassPresent('.terra-List .terra-ListItem:nth-child(1)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(2)', 'terra-ListItem--selected');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a non-selectable item in the single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/non-selectable`)
    .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected')
    .assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem-selectable');

    browser.click('.terra-List .terra-ListItem:nth-child(3)');
    browser.assert.cssClassNotPresent('.terra-List .terra-ListItem:nth-child(3)', 'terra-ListItem--selected');
  },
  'Displays a single select list with one item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/one-item`)
      .assert.elementPresent('.terra-List');
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/one-item`)
      .assert.elementPresent('.terra-ListItem');
  },
  'Displays a single select list with no items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/no-items`)
      .assert.elementPresent('.terra-List');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/no-items`)
      .assert.elementNotPresent('.terra-ListItem');
  },
};
