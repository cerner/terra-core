/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .assert.elementPresent('.terra-Table')
      .assert.elementPresent('.terra-Table--striped');
  },

  'Displays a default table and verify the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`)
      .assert.containsText('.terra-Table-header:nth-child(1)', 'Name')
      .assert.cssClassPresent('.terra-Table-header:nth-child(1)', 'terra-Table-min-width--small')
      .assert.containsText('.terra-Table-header:nth-child(2)', 'Address')
      .assert.cssClassPresent('.terra-Table-header:nth-child(2)', 'terra-Table-min-width--medium')
      .assert.containsText('.terra-Table-header:nth-child(3)', 'Phone Number')
      .assert.cssClassPresent('.terra-Table-header:nth-child(3)', 'terra-Table-min-width--large')
      .assert.containsText('tr:nth-child(1) td:nth-child(1)', 'John Smith')
      .assert.containsText('tr:nth-child(1) td:nth-child(2)', '123 Adams Drive')
      .assert.containsText('tr:nth-child(1) td:nth-child(3)', '111-222-3333')
      .assert.containsText('tr:nth-child(2) td:nth-child(1)', 'Jane Smith')
      .assert.containsText('tr:nth-child(2) td:nth-child(2)', '321 Drive Street')
      .assert.containsText('tr:nth-child(2) td:nth-child(3)', '111-222-3333')
      .assert.containsText('tr:nth-child(3) td:nth-child(1)', 'Dave Smith')
      .assert.containsText('tr:nth-child(3) td:nth-child(2)', '213 Raymond Road')
      .assert.containsText('tr:nth-child(3) td:nth-child(3)', '111-222-3333');
  },

  'Displays a table without the stripes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/no-striped`)
      .assert.elementPresent('.terra-Table')
      .assert.cssClassNotPresent('.terra-Table', '.terra-Table--striped');
  },

  'Displays a table without padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/no-padding`)
      .assert.elementPresent('.terra-Table')
      .assert.cssClassNotPresent('.terra-Table', '.terra-Table--padded');
  },

  'Display a sorting indicator': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-sort-indicator`)
      .assert.attributeContains('.terra-Table-header:nth-child(2)', 'data-sort', 'asc');
  },

  'Display a table with selected rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/table-highlighted-rows`)
      .assert.elementPresent('.terra-Table--isSelected');
  },

  'Displays a table with selectable rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`)
      .assert.elementPresent('tr.terra-Table--isSelectable');
  },

  'Display a table highlighting rows upon clicking': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);
    browser.click('.terra-Table-row:nth-child(1)');
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');

    browser.click('.terra-Table-row:nth-child(2)');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');

    browser.click('.terra-Table-row:nth-child(3)');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');
  },

  'Toggle aria-selected on seletable rows': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);
    browser.click('.terra-Table-row:nth-child(1)');
    browser.expect.element('.terra-Table-row:nth-child(1)').to.have.attribute('aria-selected').which.contains('true');
    browser.expect.element('.terra-Table-row:nth-child(2)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('.terra-Table-row:nth-child(3)').to.have.attribute('aria-selected').which.contains('false');

    browser.click('.terra-Table-row:nth-child(2)');
    browser.expect.element('.terra-Table-row:nth-child(1)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('.terra-Table-row:nth-child(2)').to.have.attribute('aria-selected').which.contains('true');
    browser.expect.element('.terra-Table-row:nth-child(3)').to.have.attribute('aria-selected').which.contains('false');

    browser.click('.terra-Table-row:nth-child(3)');
    browser.expect.element('.terra-Table-row:nth-child(1)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('.terra-Table-row:nth-child(2)').to.have.attribute('aria-selected').which.contains('false');
    browser.expect.element('.terra-Table-row:nth-child(3)').to.have.attribute('aria-selected').which.contains('true');
  },

  'Display a table highlighting rows upon enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectable-table`);

    browser.sendKeys('.terra-Table-row:nth-child(1)', browser.Keys.ENTER);
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');

    browser.sendKeys('.terra-Table-row:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');

    browser.sendKeys('.terra-Table-row:nth-child(3)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(1)', 'terra-Table--isSelected');
    browser.assert.cssClassNotPresent('.terra-Table-row:nth-child(2)', 'terra-Table--isSelected');
    browser.assert.cssClassPresent('.terra-Table-row:nth-child(3)', 'terra-Table--isSelected');
  },
};
