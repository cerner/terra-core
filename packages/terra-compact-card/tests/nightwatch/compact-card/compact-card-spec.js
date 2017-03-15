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
      .assert.containsText('#test-displays-two .terra-CompactCard-row:nth-child(3) .terra-CompactCard-content:nth-child(2)', 'display 6')
      .assert.cssClassPresent('#test-displays-two-left .terra-CompactCard-row:nth-child(1) .terra-CompactCard-content:nth-child(2)', 'terra-CompactCard-content--secondaryColor')
      .assert.cssClassPresent('#test-displays-two-left .terra-CompactCard-row:nth-child(2) .terra-CompactCard-content:nth-child(2)', 'terra-CompactCard-content--secondaryColor')
      .assert.cssClassPresent('#test-displays-two-left .terra-CompactCard-row:nth-child(3) .terra-CompactCard-content:nth-child(2)', 'terra-CompactCard-content--secondaryColor');
  },
  'Displays a compact card with accessories set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/accessory`);
    browser.expect.element('#test-left-accessory .terra-CompactCard-accessory:nth-child(1) > :first-child').to.be.present;
    browser.expect.element('#test-left-accessory .terra-CompactCard-accessory:nth-child(3) > :first-child').to.not.be.present;
    browser.expect.element('#test-right-accessory .terra-CompactCard-accessory:nth-child(1) > :first-child').to.not.be.present;
    browser.expect.element('#test-right-accessory .terra-CompactCard-accessory:nth-child(3) > :first-child').to.be.present;
    browser.assert.cssClassPresent('#test-both-accessory-top', 'terra-CompactCard-accessory--alignTop');
  },
  'Displays a compact card with a comment set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/comment`);
    browser.expect.element('.terra-CompactCard-body .terra-CompactCard-comment').to.be.present;
  },
};
