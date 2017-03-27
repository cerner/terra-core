/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default table with no stripes with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`)
      .assert.elementNotPresent('.terra-Table--striped')
      .assert.elementPresent('.terra-Table');
  },

  'Displays a table with zebra stripes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/stripedTable`)
      .assert.elementPresent('.terra-Table--striped')
      .assert.elementPresent('.terra-Table');
  },

  'Displays a table with selectable rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectableTable`)
      .assert.elementPresent('tr.terra-Table--isSelectable');
  },

  'Displays a table with selected rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/tableWithHighlightedRows`)
      .assert.elementPresent('.terra-Table--isSelected');
  },
};

