/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
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
      .assert.containsText('.terra-Table-header:nth-child(1)', 'Column Heading 1')
      .assert.attributeContains('.terra-Table-header:nth-child(1)', 'data-column-min-width', 'small')
      .assert.containsText('.terra-Table-header:nth-child(2)', 'Column Heading 2')
      .assert.attributeContains('.terra-Table-header:nth-child(2)', 'data-column-min-width', 'medium')
      .assert.containsText('.terra-Table-header:nth-child(3)', 'Column Heading 3')
      .assert.attributeContains('.terra-Table-header:nth-child(3)', 'data-column-min-width', 'large')
      .assert.containsText('tr:nth-child(1) td:nth-child(1)', 'Row 1 Cell 1')
      .assert.containsText('tr:nth-child(1) td:nth-child(2)', 'Row 1 Cell 2')
      .assert.containsText('tr:nth-child(1) td:nth-child(3)', 'Row 1 Cell 3')
      .assert.containsText('tr:nth-child(2) td:nth-child(1)', 'Row 2 Cell 1')
      .assert.containsText('tr:nth-child(2) td:nth-child(2)', 'Row 2 Cell 2')
      .assert.containsText('tr:nth-child(2) td:nth-child(3)', 'Row 2 Cell 3')
      .assert.containsText('tr:nth-child(3) td:nth-child(1)', 'Row 3 Cell 1')
      .assert.containsText('tr:nth-child(3) td:nth-child(2)', 'Row 3 Cell 2')
      .assert.containsText('tr:nth-child(3) td:nth-child(3)', 'Row 3 Cell 3');
  },

  'Displays a table without the stripes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/no-striped`)
      .assert.elementPresent('.terra-Table')
      .assert.cssClassNotPresent('.terra-Table', '.terra-Table--striped');
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
};

