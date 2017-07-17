/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-open`)
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
      .expect.element('.terra-Modal').to.have.attribute('role').which.contains('document');
  },

  'role is overridable': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/override-role`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('role').which.contains('button');
  },

  'append css class to modal': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/append-class`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('class').which.contains('terra-Modal modal-custom-class');
  },

  'append css class to overlay': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/append-class`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal-overlay').to.have.attribute('class').which.contains('terra-Modal-overlay overlay-custom-class');
  },

  'content overflow example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .waitForElementPresent('.terra-Modal', 1000);
  },

  'modal is focusable': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/no-focusable-content`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('tabindex').which.equals('0');
  },

  'background does not scroll when modal is open': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('html').to.have.attribute('style').which.equals('overflow: hidden;');

    browser
      .click('.terra-Modal-overlay')
      .waitForElementNotPresent('.terra-Modal', 1000)
      .expect.element('html').to.have.attribute('style').which.equals('');
  },

  'isScrollable default value': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('class').which.equals('terra-Modal');
  },

  'isScrollable={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/scrollable-false`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('class').which.equals('terra-Modal');
  },

  'isScrollable={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/scrollable-true`)
      .waitForElementPresent('.terra-Modal', 1000)
      .expect.element('.terra-Modal').to.have.attribute('class').which.equals('terra-Modal terra-Modal--scrollable');
  },

  'custom props': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/custom-props`)
      .assert.attributeEquals('div[role="document"]', 'id', 'custom-props');
  },
};
