// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;
const { checkElementsClass } = require('../common.js');

const listItemSelectors = ['ul li:nth-child(1)', 'ul li:nth-child(2)', 'ul li:nth-child(3)'];
const selectedClasses = ['selected', 'selected', 'selected'];

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a selectable list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/default`)
      .assert.elementPresent('ul');
  },

  'Displays items in the selectable list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/default`)
      .assert.containsText('ul li:nth-child(1)', 'test 1')
      .assert.containsText('ul li:nth-child(2)', 'test 2')
      .assert.containsText('ul li:nth-child(3)', 'test 3');
  },

  'Triggers onChange for a selectable list': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/on-change`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.SPACE);
    browser.assert.containsText('#current-index', '0');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');

    browser.click('ul li:nth-child(1)');
    browser.assert.containsText('#current-index', '0');
  },

  'Triggers onChange for disabled unselected': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/disabled-on-change`);

    browser.sendKeys('ul li:nth-child(1)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '0');

    browser.sendKeys('ul li:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');

    browser.sendKeys('ul li:nth-child(3)', browser.Keys.ENTER);
    browser.assert.containsText('#current-index', '1');
  },

  'Displays items in the selectable list with a chevron from hasChevrons prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays chevron selectable list with one non-chevron item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/single-non-chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays selectable list with one chevron item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/single-chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays items in the selectable list divided': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/items-divided`);
    browser.expect.element('ul').to.have.attribute('class').which.contains('divided');
  },

  'Displays only one selected item in the selectablelist': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/preselected`);
    checkElementsClass(browser, listItemSelectors, selectedClasses, [false, true, false]);
  },

  'Displays a non-selectable item in the selectable list': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-list-tests/non-selectable`);
    browser.expect.element('ul li:nth-child(3)').to.have.attribute('class').which.not.contains('is-selectable');

    browser.click('ul li:nth-child(3)');
    browser.assert.containsText('#current-index', 'none');
  },

  'Displays a selectable list with one item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/one-item`)
      .assert.elementPresent('ul');
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/one-item`)
      .assert.elementPresent('li');
  },

  'Displays a selectable list with no items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/no-items`)
      .assert.elementPresent('ul');

    browser
      .url(`${browser.launchUrl}/#/tests/selectable-list-tests/no-items`)
      .assert.elementNotPresent('li');
  },

});
