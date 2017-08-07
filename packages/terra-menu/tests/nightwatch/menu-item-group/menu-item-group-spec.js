/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-menu-item-group', done);
  },

  'Displays a default item group': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-group-tests/default`)
      .assert.elementPresent('.TestGroup')
      .assert.elementPresent('.TestGroupItem1')
      .assert.elementPresent('.TestGroupItem2')
      .assert.elementPresent('.TestGroupItem3');
  },
  'Items in the item group are selectable': (browser) => {
    browser
      .click('.TestGroupItem1')
      .assert.visible('.TestGroupItem1 svg[class*="_checkmark"]')
      .click('.TestGroupItem3')
      .assert.visible('.TestGroupItem3 svg[class*="_checkmark"]')
      .assert.hidden('.TestGroupItem1 svg[class*="_checkmark"]');
  },
};
