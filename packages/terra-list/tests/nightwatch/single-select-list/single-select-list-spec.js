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

  'Displays a single select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`)
      .assert.elementPresent('ul');
  },
  'Displays items in the single select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },
  'Displays items in the single select list divided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/items-divided`);
    browser.expect.element('ul').to.have.attribute('class').which.contains('divided');
  },
  'Displays items in the single select list with a chevron from hasChevrons prop': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },
  'Displays chevron single select list with one non-chevron item': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/single-non-chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },
  'Displays single select list with one chevron item': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/single-chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },
  'Display a single select list  list and highlights the selected item upon clicking': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },
  'Display a single select list  list and highlights the selected item upon enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },
  'Display a single select list  list and highlights the selected item upon space keydown': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/default`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },
  'Triggers onChange for a single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/on-change`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
    browser.assert.containsText('#selected-index', '1');

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');
  },
  'Displays only one selected item in the single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/preselected`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },
  'Displays a non-selectable item in the single select list': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/non-selectable`);
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('selected');
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(3)');
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('selected');
  },
  'Displays a single select list with one item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/one-item`)
      .assert.elementPresent('ul');
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/one-item`)
      .assert.elementPresent('li');
  },
  'Displays a single select list with no items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/no-items`)
      .assert.elementPresent('ul');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/single-select-list-tests/no-items`)
      .assert.elementNotPresent('li');
  },
};
