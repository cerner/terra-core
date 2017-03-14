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
      .assert.containsText('.terra-CompactCard-display', 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1')
      .assert.containsText('.terra-CompactCard-display', 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2')
      .assert.containsText('.terra-CompactCard-display', 'display 3')
      .assert.containsText('.terra-CompactCard-display', 'display 4')
      .assert.containsText('.terra-CompactCard-display', 'display 5')
      .assert.containsText('.terra-CompactCard-display', 'display 6');
  },
  // 'Displays a compact card with accessories set': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/accessory`)
  //     .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  // },
  // 'Displays a compact card with a comment set': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/comment`)
  //     .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  // },
};
