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
      .waitForElementNotPresent('.terra-PopupArrow', 1000);
  },

  'isArrowDisplayed prop - SHOWN': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/arrow`)
      .waitForElementPresent('#arrow-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#arrow-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementPresent('.terra-PopupContent-showArrow', 1000)
      .waitForElementPresent('.terra-PopupArrow', 1000);
  },

  'boundingRef prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/bounded`)
      .waitForElementPresent('#bounded-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#bounded-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementPresent('.terra-PopupContent-header', 1000);
  },

  'boundingRef prop - BOUNDED HEIGHT': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/bounded-height`)
      .waitForElementPresent('#bounded-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#bounded-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 175px; width: 400px;');
  },

  'boundingRef prop - BOUNDED WIDTH': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/bounded-width`)
      .waitForElementPresent('#bounded-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#bounded-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 225px; width: 350px;');
  },

  'boundingRef prop && disableHeader prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/no-header`)
      .waitForElementPresent('#no-header-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#no-header-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .waitForElementNotPresent('.terra-PopupArrow', 1000);
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

  'contentAttachment prop - HORIZONTAL CENTER': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/horizontal-center`)
      .waitForElementPresent('#alignment-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#alignment-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('top: 55px;');
  },

  'contentAttachment prop - VERTICAL LEFT': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/vertical-left`)
      .waitForElementPresent('#alignment-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#alignment-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('left: 20px;');
  },

  'contentAttachment prop - VERTICAL CENTER': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/vertical-center`)
      .waitForElementPresent('#alignment-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#alignment-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('left: 90px;');
  },

  'contentAttachment prop - VERTICAL RIGHT': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/vertical-right`)
      .waitForElementPresent('#alignment-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#alignment-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('left: 160px;');
  },

  'contentAttachment prop - MIDDLE LEFT RESPOSITION': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/left-arrow-offset`)
      .waitForElementPresent('#offset-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#offset-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('top: 25px;');
  },

  'contentAttachment prop - MIDDLE RIGHT RESPOSITION': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/right-arrow-offset`)
      .waitForElementPresent('#offset-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#offset-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('top: 85px;');
  },

  'contentAttachment prop - TOP RIGHT RESPOSITION': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/top-arrow-offset`)
      .waitForElementPresent('#offset-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#offset-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('left: 28px;');
  },

  'contentAttachment prop - BOTTOM LEFT RESPOSITION': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/bottom-arrow-offset`)
      .waitForElementPresent('#offset-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#offset-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupArrow').to.have.attribute('style').which.equals('left: 152px;');
  },

  'contentDimension prop - 10X': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/dimension-10x`)
      .waitForElementPresent('#dimension-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#dimension-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 90px; width: 160px;');
  },

  'contentDimension prop - 25X': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/dimension-25x`)
      .waitForElementPresent('#dimension-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#dimension-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 225px; width: 400px;');
  },

  'contentDimension prop - 50X': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/dimension-50x`)
      .waitForElementPresent('#dimension-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#dimension-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 450px; width: 800px;');
  },

  'contentDimension prop - 75X': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/dimension-75x`)
      .waitForElementPresent('#dimension-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#dimension-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 675px; width: 1200px;');
  },

  'contentDimension prop - 100X': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/popup-tests/dimension-100x`)
      .waitForElementPresent('#dimension-button', 1000)
      .waitForElementNotPresent('.terra-PopupContent', 1000)
      .click('#dimension-button')
      .waitForElementPresent('.terra-PopupContent', 1000)
      .expect.element('.terra-PopupContent-inner').to.have.attribute('style').which.equals('height: 900px; width: 1600px;');
  },

};
