/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default table with no stripes with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`);
      .expect.element('.terra-Table--striped').to.not.be.present;
  },

  'Displays a table with selectable rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/selectableTable`);
      .expect.element('.terra-Table--isSelectable').to.be.present;
  },

  'Displays a table with zebra stripes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/stripedTable`);
      .expect.element('.terra-Table--striped').to.be.present;
  },

  'Displays a table with selected rows': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/tableWithHighlightedRows`);
      .expect.element('.terra-Table--isSelected').to.be.present;
  },
};

