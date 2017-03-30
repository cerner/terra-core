/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-view', done);
  },

  'Displays a clinical item view with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/clinical-item-view-tests/default`);
    browser.expect.element('.terra-ClinicalItemView').to.be.present;
  },
  'Displays a clinical item view with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/clinical-item-view-tests/displays`)
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(1)', 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1')
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(2)', 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2')
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(3)', 'display 3')
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(4)', 'display 4')
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(5)', 'display 5')
      .assert.containsText('#test-displays .terra-ClinicalItemView-row:nth-child(6)', 'display 6')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(1) .terra-ClinicalItemView-content:nth-child(1)', 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(1) .terra-ClinicalItemView-content:nth-child(2)', 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(2) .terra-ClinicalItemView-content:nth-child(1)', 'display 3')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(2) .terra-ClinicalItemView-content:nth-child(2)', 'display 4')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(3) .terra-ClinicalItemView-content:nth-child(1)', 'display 5')
      .assert.containsText('#test-displays-two .terra-ClinicalItemView-row:nth-child(3) .terra-ClinicalItemView-content:nth-child(2)', 'display 6')
      .assert.cssClassPresent('#test-displays-two-left .terra-ClinicalItemView-row:nth-child(1) .terra-ClinicalItemView-content:nth-child(2)', 'terra-ClinicalItemView-content--secondaryColor')
      .assert.cssClassPresent('#test-displays-two-left .terra-ClinicalItemView-row:nth-child(2) .terra-ClinicalItemView-content:nth-child(2)', 'terra-ClinicalItemView-content--secondaryColor')
      .assert.cssClassPresent('#test-displays-two-left .terra-ClinicalItemView-row:nth-child(3) .terra-ClinicalItemView-content:nth-child(2)', 'terra-ClinicalItemView-content--secondaryColor');
  },
  'Displays a clinical item view with accessories set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/clinical-item-view-tests/accessory`);
    browser.expect.element('#test-start-accessory .terra-ClinicalItemView-accessory:nth-child(1) > :first-child').to.be.present;
    browser.expect.element('#test-start-accessory .terra-ClinicalItemView-accessory:nth-child(3) > :first-child').to.not.be.present;
    browser.expect.element('#test-end-accessory .terra-ClinicalItemView-accessory:nth-child(1) > :first-child').to.not.be.present;
    browser.expect.element('#test-end-accessory .terra-ClinicalItemView-accessory:nth-child(3) > :first-child').to.be.present;
    browser.expect.element('#test-both-accessory-top .terra-ClinicalItemView-accessory:nth-child(1) > :first-child').to.be.present;
    browser.expect.element('#test-both-accessory-top .terra-ClinicalItemView-accessory:nth-child(3) > :first-child').to.be.present;
    browser.assert.cssClassPresent('#test-both-accessory-top', 'terra-ClinicalItemView-accessory--alignTop');
  },
  'Displays a clinical item view with a comment set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/clinical-item-view-tests/comment`);
    browser.expect.element('.terra-ClinicalItemView-body .terra-ClinicalItemView-comment').to.be.present;
  },
};
