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

  'Toggle aria-selected on seletable rows': (browser) => {
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

  'Display a selectable table with a subheader': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/subheaders`);
    browser.expect.element('tbody tr:nth-child(1)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(1) td:nth-child(1)', 'Single');
    browser.expect.element('tbody tr:nth-child(4)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(4) td:nth-child(1)', 'Married');
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

  'Displays a selectable table with only one row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/single-row`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.be.present;
    browser.expect.element('[class*="row"]:nth-child(2)').to.not.be.present;
  },

  'Displays a selectable table with no rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/no-rows`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.not.be.present;
  },

  'Maintains custom classNames when provided': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/single-select-table-tests/subheaders`);
    browser.expect.element('.Table-Custom').to.be.present;
    browser.expect.element('.Header-Custom').to.be.present;
    browser.expect.element('.HeaderCell-Custom').to.be.present;
    browser.expect.element('.Cell-Custom').to.be.present;
    browser.expect.element('.SingleSelectableRows-Custom').to.be.present;
    browser.expect.element('.Subheader-Custom').to.be.present;
  },
});
