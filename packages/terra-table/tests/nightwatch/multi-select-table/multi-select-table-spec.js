/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

/**
 * Create NightWatch expects against the row element at the 0-indexed position.
 */
function expectRowForBrowserAtIndex(browser, index) {
  return browser.expect.element(`[class*="row"]:nth-child(${index + 1})`);
}

/**
 * Assert that the row at the 0-indexed position is selected.
 */
function assertRowForBrowserAtIndexIsSelected(browser, index) {
  return expectRowForBrowserAtIndex(browser, index).to.have.attribute('class')
    .which.contains('is-selected');
}

/**
 * Assert that the row at the 0-indexed position is not selected.
 */
function assertRowForBrowserAtIndexIsNotSelected(browser, index) {
  return expectRowForBrowserAtIndex(browser, index).to.have.attribute('class')
    .which.not.contains('is-selected');
}

let assertRowAtIndexIsSelected;
let assertRowAtIndexIsNotSelected;
let expectRowAtIndex;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  beforeEach: (browser) => {
    assertRowAtIndexIsSelected = index => assertRowForBrowserAtIndexIsSelected(browser, index);
    assertRowAtIndexIsNotSelected = index => assertRowForBrowserAtIndexIsNotSelected(browser, index);
    expectRowAtIndex = index => expectRowForBrowserAtIndex(browser, index);
  },

  'Displays a default selectable table': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/multi-select-table-tests/default`)
      .expect.element('tr[class*="is-selectable"]').to.be.present;
  },

  'Display a selectable table and highlights the selected row upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/default`);

    browser.click('[class*="row"]:nth-child(1)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.click('[class*="row"]:nth-child(2)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.click('[class*="row"]:nth-child(3)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsSelected(2);
  },

  'Display a selectable table and highlights the selected row upon enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/default`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsSelected(2);
  },

  'Display a selectable table and highlights the selected row upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/default`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsSelected(2);
  },

  'Toggle aria-selected on selectable rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/default`);
    browser.click('[class*="row"]:nth-child(1)');
    expectRowAtIndex(0).to.have.attribute('aria-selected').which.contains('true');
    expectRowAtIndex(1).to.have.attribute('aria-selected').which.contains('false');
    expectRowAtIndex(2).to.have.attribute('aria-selected').which.contains('false');

    browser.click('[class*="row"]:nth-child(2)');
    expectRowAtIndex(0).to.have.attribute('aria-selected').which.contains('true');
    expectRowAtIndex(1).to.have.attribute('aria-selected').which.contains('true');
    expectRowAtIndex(2).to.have.attribute('aria-selected').which.contains('false');

    browser.click('[class*="row"]:nth-child(3)');
    expectRowAtIndex(0).to.have.attribute('aria-selected').which.contains('true');
    expectRowAtIndex(1).to.have.attribute('aria-selected').which.contains('true');
    expectRowAtIndex(2).to.have.attribute('aria-selected').which.contains('true');
  },

  'Triggers onChange for selectable table upon clicking a row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/onchange`);

    browser.click('[class*="row"]:nth-child(1)');
    browser.assert.containsText('#selected-indexes', '0');
    browser.assert.containsText('#last-selected-index', '0');

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#selected-indexes', '01');
    browser.assert.containsText('#last-selected-index', '1');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    browser.assert.containsText('#selected-indexes', '012');
    browser.assert.containsText('#last-selected-index', '2');
  },

  'onChange returns indexes in order rows were clicked': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/onchange`);

    browser.click('[class*="row"]:nth-child(2)');
    browser.assert.containsText('#selected-indexes', '1');
    browser.assert.containsText('#last-selected-index', '1');

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.ENTER);
    browser.assert.containsText('#selected-indexes', '10');
    browser.assert.containsText('#last-selected-index', '0');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    browser.assert.containsText('#selected-indexes', '102');
    browser.assert.containsText('#last-selected-index', '2');
  },

  'Displays a selectable table with a preselected row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/preselected`);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a selectable table with a non-selectable row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/non-selectable`);
    assertRowAtIndexIsNotSelected(0);
  },

  'Displays a selectable table with a max selection count honored on click': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count`);

    browser.click('[class*="row"]:nth-child(1)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.click('[class*="row"]:nth-child(2)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.click('[class*="row"]:nth-child(3)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a selectable table with a max selection count honored on enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a selectable table with a max selection count honored on space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsNotSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a initially met max count selectable table with a max selection count honored on click': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-met`);

    browser.click('[class*="row"]:nth-child(3)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a initially met max count selectable table with a max selection count honored on enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-met`);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays a initially met max count selectable table with a max selection count honored on space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-met`);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
  },

  'Displays an initially exceeded max count selectable table with correctly selected rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-exceeded`);

    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
    assertRowAtIndexIsNotSelected(3);
  },

  'Displays an initially exceeded max count selectable table with a max selection count honored on click': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-exceeded`);

    browser.click('[class*="row"]:nth-child(3)');
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
    assertRowAtIndexIsNotSelected(3);
  },

  'Displays a initially exceeded max count selectable table with a max selection count honored on enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-exceeded`);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.ENTER);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
    assertRowAtIndexIsNotSelected(3);
  },

  'Displays a initially exceeded max count selectable table with a max selection count honored on space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/multi-select-table-tests/max-count-initially-exceeded`);

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    assertRowAtIndexIsSelected(0);
    assertRowAtIndexIsSelected(1);
    assertRowAtIndexIsNotSelected(2);
    assertRowAtIndexIsNotSelected(3);
  },
});
