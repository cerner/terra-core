// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;
const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['#example-list [class*="list-item"]:nth-child(1)', '#example-list [class*="list-item"]:nth-child(2)', '#example-list [class*="list-item"]:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a single select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`)
      .assert.elementPresent('#example-list');
  },

  'Displays items in the single select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`)
      .assert.containsText('#example-list [class*="list-item"]:nth-child(1)', 'test 1')
      .assert.containsText('#example-list [class*="list-item"]:nth-child(2)', 'test 2')
      .assert.containsText('#example-list [class*="list-item"]:nth-child(3)', 'test 3');
  },

  'Display a single select list  list and highlights the selected item upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.click('#example-list [class*="list-item"]:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Display a single select list  list and highlights the selected item upon enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Display a single select list  list and highlights the selected item upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Triggers onChange for a single select list': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/on-change-single-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
    browser.assert.containsText('#selected-index', '1');

    browser.click('#example-list [class*="list-item"]:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');
  },
});
