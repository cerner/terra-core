/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-modal', done);
  },

  'isOpen prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/default`)
      .waitForElementPresent('.button-open-modal', 1000)
      .waitForElementNotPresent('.terra-Modal', 1000)
      .click('.button-open-modal')
      .waitForElementPresent('.terra-Modal', 1000)
      .click('.terra-Modal-overlay')
      .waitForElementNotPresent('.terra-Modal', 1000);
  },

  'openByClickOn prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/open-by-click-on`)
      .waitForElementPresent('.button-open-modal', 1000)
      .waitForElementNotPresent('.terra-Modal', 1000)
      .click('.button-open-modal')
      .waitForElementPresent('.terra-Modal', 1000)
      .click('.terra-Modal-overlay')
      .waitForElementNotPresent('.terra-Modal', 1000);
  },

  'isFullscreen={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .waitForElementPresent('.terra-Modal.terra-Modal--fullscreen', 1000);
  },

  'isFullscreen={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-esc`)
      .waitForElementNotPresent('.terra-Modal.terra-Modal--fullscreen', 1000);
  },

  'closeOnOutsideClick={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .waitForElementPresent('.terra-Modal', 1000)
      .click('.terra-Modal-overlay')
      .waitForElementNotPresent('.terra-Modal', 1000);
  },

  'closeOnOutsideClick={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-outside-click`)
      .waitForElementPresent('.terra-Modal', 1000)
      .click('.terra-Modal-overlay')
      .waitForElementPresent('.terra-Modal', 1000);
  },

  'closeOnEsc={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-esc`)
      .waitForElementPresent('.terra-Modal', 1000)
      .setValue('body', [browser.Keys.ESC])
      .waitForElementPresent('.terra-Modal', 1000);
  },

  'closeOnEsc={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .waitForElementPresent('.terra-Modal', 1000)
      .setValue('body', [browser.Keys.ESC])
      .waitForElementPresent('.terra-Modal', 1000);
  },

  'set ariaLabel': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('aria-label').which.contains('Terra Modal');
  },

  'role default value': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('aria-label').which.contains('Terra Modal');
  },

  'role is overridable': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/override-role`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('role').which.contains('button');
  },

  'event hooks': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/event-hooks`)
      .waitForElementPresent('.button-open-modal', 1000)
      .waitForElementNotPresent('.terra-Modal', 1000)
      .click('.button-open-modal')
      .waitForElementPresent('.terra-Modal', 1000)
      .click('.terra-Modal-overlay')
      .waitForElementNotPresent('.terra-Modal', 1000);
  },

};
