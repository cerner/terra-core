/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default table with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/striped-table`);
    browser.expect.element('#Table').to.be.present;
    browser.expect.element('[class*="striped"]').to.be.present;
  },

  'Displays a default table and verify the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/striped-table`);
    browser.assert.containsText('th:nth-child(1)', 'Name');
    browser.expect.element('th:nth-child(1)').to.have.attribute('class').which.contains('min-width-small');

    browser.assert.containsText('th:nth-child(2)', 'Address');
    browser.expect.element('th:nth-child(2)').to.have.attribute('class').which.contains('min-width-medium');

    browser.assert.containsText('th:nth-child(3)', 'Phone Number');
    browser.expect.element('th:nth-child(3)').to.have.attribute('class').which.contains('min-width-large');

    browser.assert.containsText('tr:nth-child(1) td:nth-child(1)', 'John Smith');
    browser.assert.containsText('tr:nth-child(1) td:nth-child(2)', '123 Adams Drive');
    browser.assert.containsText('tr:nth-child(1) td:nth-child(3)', '111-222-3333');

    browser.assert.containsText('tr:nth-child(2) td:nth-child(1)', 'Jane Smith');
    browser.assert.containsText('tr:nth-child(2) td:nth-child(2)', '321 Drive Street');
    browser.assert.containsText('tr:nth-child(2) td:nth-child(3)', '111-222-3333');

    browser.assert.containsText('tr:nth-child(3) td:nth-child(1)', 'Dave Smith');
    browser.assert.containsText('tr:nth-child(3) td:nth-child(2)', '213 Raymond Road');
    browser.assert.containsText('tr:nth-child(3) td:nth-child(3)', '111-222-3333');
  },

  'Displays a table without the stripes': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/no-striped-table`);
    browser.expect.element('#Table').to.be.present;
    browser.expect.element('[class*="striped"]').to.not.be.present;
  },

  'Displays a table without padding': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/no-padding-table`);
    browser.expect.element('#Table').to.be.present;
    browser.expect.element('[class*="padded"]').to.not.be.present;
  },

  'Display a table with a sorting indicator': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/table/table/table-with-sort-indicator`)
      .assert.attributeContains('th:nth-child(2)', 'data-sort', 'asc');
  },

  'Display a table with selected rows': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/table/table/table-with-highlighted-rows`)
      .expect.element('tr[class*="is-selected"]').to.be.present;
  },

  'Display a table with a subheader': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/table-with-subheaders`);
    browser.expect.element('tbody tr:nth-child(1)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(1) td:nth-child(1)', 'Single');
    browser.expect.element('tbody tr:nth-child(4)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(4) td:nth-child(1)', 'Married');
  },

  'Displays a table with only one row': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/single-row-table`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.be.present;
    browser.expect.element('[class*="row"]:nth-child(2)').to.not.be.present;
  },

  'Displays a table with no rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/table/table/table-no-rows`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.not.be.present;
  },
});
