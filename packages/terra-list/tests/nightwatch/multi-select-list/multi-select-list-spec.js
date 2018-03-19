// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['ul li:nth-child(1)', 'ul li:nth-child(2)', 'ul li:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['medium'], {
  'Displays a multi select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/default-multi-select-list`)
      .assert.elementPresent('ul');
  },

  'Displays items in the multi select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/default-multi-select-list`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },

  'Displays items in the multi select list with a max selection count of 2': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/max-count-multi-select-list`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
  },

  'Display a multi select list and highlights the selected item(s) upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/default-multi-select-list`);

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
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/default-multi-select-list`);

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

  'Displays a multi select list and highlights the selected item(s) upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/default-multi-select-list`);

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

  'Displays a multi select list  with max selection of 2 and highlights the selected item(s)': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/max-count-multi-select-list`);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.click('ul li:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
  },

  'Triggers onChange for multi select list': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/on-change-multi-select-list`);

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
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/on-change-multi-select-list-with-max-selection`);

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
    browser.url(`${browser.launchUrl}/#/raw/tests/list/multi-select-list/multi-select-list-with-no-deselect-item`);
    browser.expect.element('ul li:nth-child(1)').to.have.attribute('class').which.contains('selected');
    browser.expect.element('ul li:nth-child(1)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('ul li:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },

});
