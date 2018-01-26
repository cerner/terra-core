// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['#example-list [class*="list-item"]:nth-child(1)', '#example-list [class*="list-item"]:nth-child(2)', '#example-list [class*="list-item"]:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a multi select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/multi-select-list/default-multi-select-list`)
      .assert.elementPresent('#example-list');
  },

  'Displays items in the multi select list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/multi-select-list/default-multi-select-list`)
      .assert.containsText('#example-list [class*="list-item"]:nth-child(1)', 'test 1')
      .assert.containsText('#example-list [class*="list-item"]:nth-child(2)', 'test 2')
      .assert.containsText('#example-list [class*="list-item"]:nth-child(3)', 'test 3');
  },

  'Displays items in the multi select list with a max selection count of 2': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/max-count-multi-select-list`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
  },

  'Display a multi select list and highlights the selected item(s) upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/default-multi-select-list`);

    browser.click('#example-list [class*="list-item"]:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.click('#example-list [class*="list-item"]:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.click('#example-list [class*="list-item"]:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },

  'Display a multi select list and highlights the selected item(s) upon enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/default-multi-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },

  'Displays a multi select list and highlights the selected item(s) upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/default-multi-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },

  'Displays a multi select list  with max selection of 2 and highlights the selected item(s)': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/max-count-multi-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
  },

  'Triggers onChange for multi select list': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/on-change-multi-select-list`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, true]);
    browser.assert.containsText('#selected-index', '0, 1, 2');

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
    browser.assert.containsText('#selected-index', '0, 2');

    browser.click('#example-list [class*="list-item"]:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');
  },

  'Triggers onChange for multi select list with max selection of 2': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/on-change-multi-select-list-with-max-selection`);

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(1)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('#example-list [class*="list-item"]:nth-child(2)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(3)', browser.Keys.ENTER);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, true, false]);
    browser.assert.containsText('#selected-index', '0, 1');

    browser.sendKeys('#example-list [class*="list-item"]:nth-child(2)', browser.Keys.SPACE);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
    browser.assert.containsText('#selected-index', '0');

    browser.click('#example-list [class*="list-item"]:nth-child(3)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, true]);
    browser.assert.containsText('#selected-index', '0, 2');
  },

  'Displays a selected item in the multi select list that cannot be deselected': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/multi-select-list/multi-select-list-with-no-deselect-item`);
    browser.expect.element('#example-list [class*="list-item"]:nth-child(1)').to.have.attribute('class').which.contains('selected');
    browser.expect.element('#example-list [class*="list-item"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('#example-list [class*="list-item"]:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);

    browser.click('#example-list [class*="list-item"]:nth-child(1)');
    checkElementsClass(browser, listItemSelectors, selectedClasses, [true, false, false]);
  },

});
