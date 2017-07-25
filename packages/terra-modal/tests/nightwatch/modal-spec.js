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
      .assert.elementPresent('.button-open-modal')
      .assert.elementNotPresent('div[role="document"]')
      .click('.button-open-modal')
      .assert.elementPresent('div[role="document"]')
      .click('[class*="ModalOverlay"]') // overlay
      .assert.elementNotPresent('div[role="document"]');
  },

  'isFullscreen={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .assert.elementPresent('div[role="document"]');
  },

  'isFullscreen={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-esc`)
      .assert.elementPresent('div[role="document"]');
  },

  'closeOnOutsideClick={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .assert.elementPresent('div[role="document"]')
      .click('[class*="ModalOverlay"]') // overlay
      .assert.elementNotPresent('div[role="document"]');
  },

  'closeOnOutsideClick={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-outside-click`)
      .assert.elementPresent('div[role="document"]')
      .click('[class*="ModalOverlay"]') // overlay
      .assert.elementPresent('div[role="document"]');
  },

  'closeOnEsc={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/disable-close-on-esc`)
      .assert.elementPresent('div[role="document"]')
      .setValue('body', [browser.Keys.ESC])
      .assert.elementPresent('div[role="document"]');
  },

  'closeOnEsc={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .assert.elementPresent('div[role="document"]')
      .setValue('body', [browser.Keys.ESC])
      .assert.elementPresent('div[role="document"]');
  },

  'set ariaLabel': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .assert.elementPresent('div[aria-label="Terra Modal"]');
  },

  'role default value': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/is-fullscreen`)
      .assert.elementPresent('div[role="document"]');
  },

  'role is overridable': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/override-role`)
      .assert.elementPresent('div[role="button"]');
  },

  'append css class to modal': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/append-class`)
      .expect.element('div[role="document"]').to.have.attribute('class').which.contains('modal-custom-class');
  },

  'append css class to overlay': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/append-class`)
      .expect.element('[class*="ModalOverlay"]').to.have.attribute('class').which.contains('overlay-custom-class');
  },

  'content overflow example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .assert.elementPresent('#modal-overflow');
  },

  'modal is focusable': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/no-focusable-content`)
      .expect.element('div[role="document"]').to.have.attribute('tabindex').which.equals('0');
  },

  'background does not scroll when modal is open': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .expect.element('html').to.have.attribute('style').which.equals('overflow: hidden;');

    browser
      .click('[class*="ModalOverlay"]')
      .expect.element('html').to.have.attribute('style').which.equals('');
  },

  'isScrollable default value': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/content-overflow`)
      .assert.elementPresent('#modal-overflow');
  },

  'isScrollable={false}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/scrollable-false`)
      .assert.elementPresent('#modal-scroll-false');
  },

  'isScrollable={true}': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/scrollable-true`)
      .assert.elementPresent('#modal-scroll-true');
  },

  'custom props': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/custom-props`)
      .assert.attributeEquals('div[role="document"]', 'id', 'custom-props');
  },
};
