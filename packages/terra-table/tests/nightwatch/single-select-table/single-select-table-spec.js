/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default selectable table': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/single-select-table-tests/default`)
      .expect.element('tr[class*="is-selectable"]').to.be.present;
  },

  'Display a selectable table and highlights the selected row upon clicking': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/default`);
    browser.click('[class*="row"]:nth-child(1)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.click('[class*="row"]:nth-child(2)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.click('[class*="row"]:nth-child(3)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selected');
  },

  'Display a selectable table and highlights the selected row upon enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/default`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.ENTER);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.ENTER);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selected');
  },

  'Display a selectable table and highlights the selected row upon space keydown': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/default`);

    browser.sendKeys('[class*="row"]:nth-child(1)', browser.Keys.SPACE);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.SPACE);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selected');
  },

  'Toggle aria-selected on selectable rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/default`);
    browser.click('[class*="row"]:nth-child(1)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('aria-selected').which.contains('true');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('aria-selected').which.contains('false');

    browser.click('[class*="row"]:nth-child(2)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('aria-selected').which.contains('true');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('aria-selected').which.contains('false');

    browser.click('[class*="row"]:nth-child(3)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('aria-selected').which.contains('true');
  },

  'Triggers onChange for selectable table upon clicking a row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/onchange`);

    browser.click('[class*="row"]:nth-child(1)');
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');
    browser.assert.containsText('#selected-index', '1');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selected');
    browser.assert.containsText('#selected-index', '2');
  },

  'Displays a selectable table with a preselected row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/preselected`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.not.contains('is-selected');
  },

  'Displays a selectable table with a non-selectable row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/non-selectable`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.not.attribute('class').which.contains('is-selectable');
  },
});
