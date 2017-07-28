/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['ul li:nth-child(1)', 'ul li:nth-child(2)', 'ul li:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-list', done);
  },

  'Displays a multi select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`)
      .assert.elementPresent('ul');
  },
  'Displays items in the multi select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },
  'Displays items in the multi select list divided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/items-divided`);
    browser.expect.element('ul').to.have.attribute('class').which.contains('divided');
  },
  'Displays items in the multi select list with a max selection count of 2': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
  },
  'Display a multi select list and highlights the selected item(s) upon clicking': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.click('ul li:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.click('ul li:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },
  'Display a multi select list and highlights the selected item(s) upon enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },
  'Display a multi select list and highlights the selected item(s) upon space keydown': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },
  'Display a multi select list  with max selection of 2 and highlights the selected item(s)': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count`);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
  },
  'Triggers onChange for multi select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/on-change`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);
    browser.assert.containsText('#selected-index', '0, 1, 2');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
    browser.assert.containsText('#selected-index', '0, 2');

    browser.click('ul li:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');
  },
  'Triggers onChange for multi select list with max selection of 2': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count-on-change`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('ul li:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
    browser.assert.containsText('#selected-index', '0, 2');
  },
  'Displays a selected item in the multi select list that cannot be deselected': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/no-deselect`);
    browser.expect.element('ul li:nth-child(1)').to.have.attribute('class').which.contains('selected');
    browser.expect.element('ul li:nth-child(1)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },
  'Displays a preselected item in the multi select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/preselected`);
    browser.expect.element('ul li:nth-child(1)').to.have.attribute('class').which.contains('selected');
  },
  'Displays a non-selectable item in the multi select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/non-selectable`);

    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('selected');
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(3)');
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('selected');
  },
  'Displays a multi select list with one item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/one-item`)
      .assert.elementPresent('ul');
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/one-item`)
      .assert.elementPresent('li');
  },
  'Displays a multi select list with no items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/no-items`)
      .assert.elementPresent('ul');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/no-items`)
      .assert.elementNotPresent('li');
  },
};
