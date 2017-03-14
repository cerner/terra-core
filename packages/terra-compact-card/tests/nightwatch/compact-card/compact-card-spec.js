/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a compact card with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/default`);
    browser.expect.element('.terra-CompactCard').to.be.present;
  },
  'Displays a compact card with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/displays`)
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(1)', 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1')
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(2)', 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2')
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(3)', 'display 3')
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(4)', 'display 4')
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(5)', 'display 5')
      .assert.containsText('#test-displays .terra-CompactCard-row:nth-child(6)', 'display 6')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(1) .terra-CompactCard-content:nth-child(1)', 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(1) .terra-CompactCard-content:nth-child(2)', 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(2) .terra-CompactCard-content:nth-child(1)', 'display 3')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(2) .terra-CompactCard-content:nth-child(2)', 'display 4')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(3) .terra-CompactCard-content:nth-child(1)', 'display 5')
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(3) .terra-CompactCard-content:nth-child(2)', 'display 6');
  },
  'Displays a compact card with accessories set': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/accessory`)
      .assert.cssClassPresent('.terra-CompactCard-accessory > :first-child', 'graphic');
  },
  'Displays a compact card with a comment set': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/comment`)
      .assert.cssClassPresent('.terra-CompactCard-accessory > :first-child', 'graphic');
  },
};
