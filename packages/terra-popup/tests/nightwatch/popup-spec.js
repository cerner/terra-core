/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-Popup', done);
  },

  'isOpen prop - RESIZE': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/default`)
      .waitForElementPresent('#default-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#default-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .resizeWindow(960, 600)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .resizeWindow(browser.globals.width, browser.globals.height);
  },

  'isOpen prop - ESC': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/default`)
      .waitForElementPresent('#default-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#default-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .keys([browser.Keys.ESCAPE])
      .waitForElementNotPresent('.terra-PopupContent', 1000);
  },

  'isOpen prop - CLICK': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/default`)
      .waitForElementPresent('#default-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#default-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .moveTo('#default-button', 200, 0)
      .mouseButtonClick(0)
      .waitForElementNotPresent('.terra-PopupContent', 1000);
  },

  'isArrowDisplayed prop - DEFAULT': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/default`)
      .waitForElementPresent('#default-button', 1000)
      .waitForElementNotPresent('.terra-Popup.terra-Popup-showArrow', 1000)
      .click('#default-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementNotPresent('.terra-PopupContent-showArrow', 1000)
      .expect.element('.terra-PopupArrow').to.not.be.present;
  },

  'isArrowDisplayed prop - SHOWN': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/arrow`)
      .waitForElementPresent('#arrow-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#arrow-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementPresent('.terra-PopupContent-showArrow', 1000)
      .expect.element('.terra-PopupArrow').to.be.present;
  },

  'boundingRef prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/bounded`)
      .waitForElementPresent('#bounded-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#bounded-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-header').to.be.present;
  },

  'disableHeader prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/no-header`)
      .waitForElementPresent('#no-header-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#no-header-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-header').to.not.be.present;
  },

  'className props': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/class-name`)
      .waitForElementPresent('#class-name-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#class-name-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementPresent('.terra-PopupOverlay.terra-TestClass-overlay', 1000)
      .waitForElementPresent('.terra-PopupContent-inner.terra-TestClass-content', 1000)
      .waitForElementPresent('.terra-PopupArrow.terra-TestClass-arrow', 1000);
  },

  'contentDimension prop - SMALL': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/small`)
      .waitForElementPresent('#small-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#small-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 90px; width: 160px;');
  },

  // 'contentDimension prop - MEDIUM': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/medium`)
  //     .waitForElementPresent('#default-popup-button', 1000)
  //     .waitForElementNotPresent('.terra-Popup', 1000)
  //     .click('#default-popup-button')
  //     .waitForElementPresent('.terra-Popup', 1000)
  //     .moveTo('#default-popup-button', 100, 0)
  //     .mouseButtonClick(0)
  //     .waitForElementNotPresent('.terra-Popup', 1000);
  // },

  // 'contentDimension prop - LARGE': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/large`)
  //     .waitForElementPresent('#default-popup-button', 1000)
  //     .waitForElementNotPresent('.terra-Popup', 1000)
  //     .click('#default-popup-button')
  //     .waitForElementPresent('.terra-Popup', 1000)
  //     .moveTo('#default-popup-button', 100, 0)
  //     .mouseButtonClick(0)
  //     .waitForElementNotPresent('.terra-Popup', 1000);
  // },

};
