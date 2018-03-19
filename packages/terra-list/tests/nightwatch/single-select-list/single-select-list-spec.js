// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;
const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['ul li:nth-child(1)', 'ul li:nth-child(2)', 'ul li:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['medium'], {
  'Displays a single select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`)
      .assert.elementPresent('ul');
  },

  'Displays items in the single select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },

  'Display a single select list  list and highlights the selected item upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Display a single select list  list and highlights the selected item upon enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Display a single select list  list and highlights the selected item upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/default-single-select-list`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Triggers onChange for a single select list': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/single-select-list/on-change-single-select-list`);

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
});
