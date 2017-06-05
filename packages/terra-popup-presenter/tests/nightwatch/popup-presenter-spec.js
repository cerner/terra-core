/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-modal', done);
  },

  'isOpen prop - RESIZE': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-presenter-tests/default`)
      .waitForElementPresent('#default-popup-button', 1000)
      .waitForElementNotPresent('.terra-Popup', 1000)
      .click('#default-popup-button')
      .waitForElementPresent('.terra-Popup', 1000)
      .resizeWindow(960, 600)
      .waitForElementNotPresent('.terra-Popup', 1000);
  },

  'isOpen prop - ESC': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-presenter-tests/default`)
      .waitForElementPresent('#default-popup-button', 1000)
      .waitForElementNotPresent('.terra-Popup', 1000)
      .click('#default-popup-button')
      .waitForElementPresent('.terra-Popup', 1000)
      .setValue('body', [browser.Keys.ESCAPE])
      .waitForElementNotPresent('.terra-Popup', 1000);
  },

  'isOpen prop - CLICK': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-presenter-tests/default`)
      .waitForElementPresent('#default-popup-button', 1000)
      .waitForElementNotPresent('.terra-Popup', 1000)
      .click('#default-popup-button')
      .waitForElementPresent('.terra-Popup', 1000)
      .moveTo('#default-popup-button', 100, 0)
      .mouseButtonClick(0)
      .waitForElementNotPresent('.terra-Popup', 1000);
  },

};
