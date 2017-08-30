/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');
// const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'isOpen prop - RESIZE': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/default`);
    browser.expect.element('.test-content').to.be.present;

    browser.resizeWindow(960, 600);
    browser.waitForElementNotPresent('.test-content', 1000);
    const width = screenWidth(browser);
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'isOpen prop - ESC': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/default`);
    browser.expect.element('.test-content').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.waitForElementNotPresent('.test-content', 1000);
  },

  'isOpen prop - CLICK': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/default`);
    browser.expect.element('.test-content').to.be.present;

    browser.moveTo('#default-button', 200, 0);
    browser.mouseButtonClick(0);
    browser.waitForElementNotPresent('.test-content', 1000);
  },

  'isArrowDisplayed prop - DEFAULT': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/default`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
  },

  'isArrowDisplayed prop - SHOWN': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/arrow`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.be.present;
  },

  'boundingRef prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/bounded`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
    browser.expect.element('svg').to.be.present;
  },

  'boundingRef prop - BOUNDED HEIGHT': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/bounded-height`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 175px; width: 240px;');
  },

  'boundingRef prop - BOUNDED WIDTH': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/bounded-width`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 120px; width: 350px;');
  },

  'boundingRef prop && disableHeader prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/no-header`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
    browser.expect.element('svg').to.not.be.present;
  },

  'className props': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/class-name`);
    browser.expect.element('.terra-TestClass-overlay').to.be.present;
    browser.expect.element('.terra-TestClass-content').to.be.present;
    browser.expect.element('.terra-TestClass-arrow').to.be.present;
  },

  'popup inside modal - close on ESC': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/popup-inside-modal`);

    browser.click('.disclose');
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.waitForElementNotPresent('.test-content', 1000);
    browser.assert.elementPresent('div[role="document"]');

    browser.keys([browser.Keys.ESCAPE]);
    browser.assert.elementNotPresent('div[role="document"]');
  },

  'popup inside modal - close on CLICK': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/popup-inside-modal`);
    browser.click('.disclose');
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;

    browser.moveTo('#default-button', 200, 0);
    browser.mouseButtonClick(0);
    browser.waitForElementNotPresent('.test-content', 1000);
  },

  'contentAttachment prop - HORIZONTAL CENTER': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/horizontal-center`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 31px;');
  },

  'contentAttachment prop - VERTICAL LEFT': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/vertical-left`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 25px;');
  },

  'contentAttachment prop - VERTICAL CENTER': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/vertical-center`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 91px;');
  },

  'contentAttachment prop - VERTICAL RIGHT': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/vertical-right`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 157px;');
  },

  'contentAttachment prop - MIDDLE LEFT RESPOSITION': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/left-arrow-offset`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 26px;');
  },

  'contentAttachment prop - MIDDLE RIGHT RESPOSITION': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/right-arrow-offset`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 36px;');
  },

  'contentAttachment prop - TOP RIGHT RESPOSITION': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/top-arrow-offset`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 29px;');
  },

  'contentAttachment prop - BOTTOM LEFT RESPOSITION': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/bottom-arrow-offset`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 153px;');
  },

  'contentDimension small': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/small`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 40px; width: 160px;');
  },

  'contentDimension meduim ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/medium`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 120px; width: 320px;');
  },

  'contentDimension large': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/large`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 240px; width: 960px;');
  },

  'contentDimension invalid': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/popup-tests/invalid`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 80px; width: 240px;');
  },
});
