/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-table', done);
  },

  'Displays a default table with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`)
      .assert.elementPresent('#Table')
      .assert.elementPresent('[class*="striped"]');
  },

  'Displays a default table and verify the provided text': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`);
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
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/no-striped`)
      .assert.elementPresent('#Table')
      .assert.elementNotPresent('[class*="striped"]');
  },

  'Displays a table without padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/no-padding`)
      .assert.elementPresent('#Table')
      .assert.elementNotPresent('[class*="padded"]');
  },

  'Display a sorting indicator': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-sort-indicator`)
      .assert.attributeContains('th:nth-child(2)', 'data-sort', 'asc');
  },

  'Display a table with selected rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-highlighted-rows`)
      .assert.elementPresent('tr[class*="is-selected"]');
  },

  'Displays a table with selectable rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`)
      .assert.elementPresent('tr[class*="is-selectable"]');
  },

  'Display a selectable table and highlights the selected row upon clicking': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);
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

  'Toggle aria-selected on seletable rows': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);
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

  'Display a selectable table and highlights the selected row upon enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);

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
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);

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

  'Display a selectable table with a subheader': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-selectable-subheaders`);
    browser.expect.element('tbody tr:nth-child(1)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(1) td:nth-child(1)', 'Single');
    browser.expect.element('tbody tr:nth-child(4)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(4) td:nth-child(1)', 'Married');
  },

  'Display a non-selectable table with a subheader': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-subheaders`);
    browser.expect.element('tbody tr:nth-child(1)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(1) td:nth-child(1)', 'Single');
    browser.expect.element('tbody tr:nth-child(4)').to.have.attribute('data-terra-table-subheader-row');
    browser.assert.containsText('tbody tr:nth-child(4) td:nth-child(1)', 'Married');
  },

  'Triggers onChange for selectable table upon clicking a row': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table-onchange`);

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

  'Displays a table with only one row': (browser) => {
    browser
    .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/single-row-table`);
    browser.assert.elementPresent('[class*="row"]:nth-child(1)');
    browser.assert.elementNotPresent('[class*="row"]:nth-child(2)');
  },

  'Displays a table with no rows': (browser) => {
    browser
    .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-no-rows`);
    browser.assert.elementNotPresent('[class*="row"]:nth-child(1)');
  },

  'Displays a selectable table with only one row': (browser) => {
    browser
    .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table-single-row`);
    browser.assert.elementPresent('[class*="row"]:nth-child(1)');
    browser.assert.elementNotPresent('[class*="row"]:nth-child(2)');
  },

  'Displays a selectable table with no rows': (browser) => {
    browser
    .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table-no-rows`);
    browser.assert.elementNotPresent('[class*="row"]:nth-child(1)');
  },

  'Maintains custom classNames when provided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-selectable-subheaders`);
    browser.assert.elementPresent('.Table-Custom');
    browser.assert.elementPresent('.Header-Custom');
    browser.assert.elementPresent('.HeaderCell-Custom');
    browser.assert.elementPresent('.Cell-Custom');
    browser.assert.elementPresent('.SingleSelectableRows-Custom');
    browser.assert.elementPresent('.Subheader-Custom');
  },
};
