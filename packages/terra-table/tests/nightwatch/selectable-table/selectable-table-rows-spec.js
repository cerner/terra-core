/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default table with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/selectable-table-tests/default`)
      .expect.element('#Table').to.be.present;
  },

  'Displays a selectable table with a subheader': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/subheaders`);
    browser.expect.element('tbody tr:nth-child(1)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(1) td:nth-child(1)', 'Single');
    browser.expect.element('tbody tr:nth-child(4)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(4) td:nth-child(1)', 'Married');
  },

  'Maintains custom classNames when provided': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/subheaders`);
    browser.expect.element('.Table-Custom').to.be.present;
    browser.expect.element('.Header-Custom').to.be.present;
    browser.expect.element('.HeaderCell-Custom').to.be.present;
    browser.expect.element('.Cell-Custom').to.be.present;
    browser.expect.element('.SelectableRows-Custom').to.be.present;
    browser.expect.element('.Subheader-Custom').to.be.present;
  },

  'Display a selectable table with preselected rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/preselected`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selected');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selected');
  },

  'Applies aria-selected on selected rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/preselected`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('aria-selected').which.contains('true');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('aria-selected').which.contains('true');
  },

  'Displays a selectable table with non-selectable rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/non-selectable`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.have.attribute('class').which.contains('is-selectable');
    browser.expect.element('[class*="row"]:nth-child(2)').to.have.attribute('class').which.not.contains('is-selectable');
    browser.expect.element('[class*="row"]:nth-child(3)').to.have.attribute('class').which.contains('is-selectable');
  },

  'Triggers onChange for selectable table upon selecting a row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/onchange`);

    browser.click('[class*="row"]:nth-child(1)');
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('[class*="row"]:nth-child(2)', browser.Keys.ENTER);
    browser.assert.containsText('#selected-index', '1');

    browser.sendKeys('[class*="row"]:nth-child(3)', browser.Keys.SPACE);
    browser.assert.containsText('#selected-index', '2');
  },

  'Displays a selectable table with only one row': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/single-row`);
    browser.expect.element('[class*="row"]:nth-child(1)').to.be.present;
    browser.expect.element('[class*="row"]:nth-child(2)').to.not.be.present;
  },

  'Displays a selectable table with no rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/selectable-table-tests/no-rows`)
      .expect.element('[class*="row"]:nth-child(1)').to.not.be.present;
  },
});
