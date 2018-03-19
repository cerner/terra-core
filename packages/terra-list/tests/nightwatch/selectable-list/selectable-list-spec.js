// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;
const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['ul li:nth-child(1)', 'ul li:nth-child(2)', 'ul li:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['medium'], {
  'Displays a selectable list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/default-selectable-list`)
      .assert.elementPresent('ul');
  },

  'Displays items in the selectable list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/default-selectable-list`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },

  'Triggers onChange for a selectable list': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/on-change-selectable-list`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    browser.assert.containsText('#current-index', '0');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');

    browser.click('ul li:nth-child(1)');
    browser.assert.containsText('#current-index', '0');
  },

  'Triggers onChange for disabled unselected': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/disable-unselected-selectable-list`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '0');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');
  },

  'Displays items in the selectable list with a chevron from hasChevrons prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/chevron-selectable-list`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays chevron selectable list with one non-chevron item': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/single-non-chevron-selectable-list`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays selectable list with one chevron item': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/single-chevron-selectable-list`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays items in the selectable list divided': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/items-divided-selectable-list`);
    browser.expect.element('ul').to.have.attribute('class').which.contains('divided');
  },

  'Displays only one selected item in the selectablelist': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/preselected-item-selectable-list`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Displays a non-selectable item in the selectable list': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/non-selectable-item-selectable-list`);
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(3)');
    browser.assert.containsText('#current-index', 'none');
  },

  'Displays a selectable list with one item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/one-item-selectable-list`)
      .assert.elementPresent('ul');
  },

  'Displays a selectable list with no items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/selectable-list/no-items-selectable-list`)
      .assert.elementPresent('ul');
  },

});
