/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['medium'], {
  'Displays a default popup & closes on width resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/default-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(960, 600);
    browser.waitForElementNotPresent('.test-content', 1000);
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a default popup & remains open on height resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/default-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(width, 600);
    browser.expect.element('.test-content').to.be.present;
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a default popup & closes on ESC': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/default-popup`);
    browser.expect.element('.test-content').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.expect.element('.test-content').to.not.be.present;
  },

  'Displays a default popup & closes on outside click': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/default-popup`);
    browser.expect.element('.test-content').to.be.present;
    browser
       .moveToElement('#root', 300, 300)
       .mouseButtonDown(0);
    browser.expect.element('.test-content').to.not.be.present;
  },

  'Displays a default popup without an arrow': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/default-popup`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
  },

  'Displays a popup with an overlay': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/overlay-popup`);
    browser.expect.element('#popup-overlay-test').to.have.attribute('style').which.equals('overflow: auto;');

    browser.click('#overlay-button');
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('#popup-overlay-test').to.have.attribute('style').which.equals('overflow: hidden;');

    browser.keys([browser.Keys.ESCAPE]);
    browser.expect.element('.test-content').to.not.be.present;

    browser.expect.element('#popup-overlay-test').to.have.attribute('style').which.equals('overflow: auto;');
  },

  'Displays a popup with an arrow': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-popup`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.be.present;
  },

  'Displays a bounded popup with a header': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/bounded-popup`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
    browser.expect.element('span').to.be.present;
  },

  'Displays a bounded popup without a header': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/no-header-popup`);
    browser.expect.element('.test-content').to.be.present;
    browser.expect.element('.test-arrow').to.not.be.present;
    browser.expect.element('.test-content svg').to.not.be.present;
  },

  'Displays a popup bounded by height': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/bounded-height-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 175px; width: 240px;');
  },

  'Displays a popup bounded by width': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/bounded-width-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 120px; width: 350px;');
  },

  'Verifies content and arrow classnames are applied': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/class-name-popup`);
    browser.expect.element('.terra-test-class-content').to.be.present;
    browser.expect.element('.terra-test-class-arrow').to.be.present;
  },

  'Displays a popup inside a modal & closes on width resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/popup-inside-modal`);
    browser.click('.disclose');
    browser.expect.element('[class*="modal"]').to.be.present;
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;

    browser.resizeWindow(960, 600);
    browser.waitForElementNotPresent('.test-content', 1000);
    const width = screenWidth(browser);
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup inside a modal & remains open on height resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/popup-inside-modal`);
    browser.click('.disclose');
    browser.expect.element('[class*="modal"]').to.be.present;
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(width, 600);
    browser.expect.element('.test-content').to.be.present;
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup inside modal & closes on ESC': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/popup-inside-modal`);

    browser.click('.disclose');
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.expect.element('.test-content').to.not.be.present;
    browser.assert.elementPresent('div[role="document"]');

    browser.keys([browser.Keys.ESCAPE]);
    browser.assert.elementNotPresent('div[role="document"]');
  },

  'Displays a popup inside modal & closes on outside click': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/popup-inside-modal`);
    browser.click('.disclose');
    browser.click('#popup-in-modal');
    browser.expect.element('.test-content').to.be.present;
    browser
       .moveToElement('#root', 10, 10)
       .mouseButtonDown(0);
    browser.expect.element('.test-content').to.not.be.present;
  },

  'Positions the arrow for vertical-left attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-vertical-attachments-popup`);
    browser.click('#attach-Left');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 61px;');
  },

  'Positions the arrow for vertical-center attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-vertical-attachments-popup`);
    browser.click('#attach-Center');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 91px;');
  },

  'Positions the arrow for vertical-right attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-vertical-attachments-popup`);
    browser.click('#attach-Right');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 121px;');
  },

  'Adjusts the arrow for vertical-left attachment when arrow would be offscreen': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-vertical-left-adjustment-popup`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 25px;');
  },

  'Adjusts the arrow for vertical-right attachment when arrow would be offscreen': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-vertical-right-adjustment-popup`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 157px;');
  },

  'Applies content offset when target has vertial-right when content vertial-left attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/different-attachments-popup`);
    browser.click('#attach-Left');
    browser.getLocation('[data-terra-popup-content]', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 196);
      browser.assert.equal(coordinates.value.y, 99);
    });
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 25px;');
  },

  'Applies content offset when target has vertial-left when content vertial-right attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/different-attachments-popup`);
    browser.click('#attach-Right');

    browser.getLocation('[data-terra-popup-content]', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 44);
      browser.assert.equal(coordinates.value.y, 99);
    });
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 157px;');
  },

  'Applies content offset when target is smaller than the arrow for vertial-left attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-small-target-left-popup`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 25px;');
  },

  'Applies content offset when target is smaller than the arrow for vertial-right attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-small-target-right-popup`);
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 157px;');
  },

  'Positions the arrow for horizontal-top attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-horizontal-attachments-popup`);
    browser.click('#attach-Top');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 31px;');
  },

  'Positions the arrow for horizontal-middle attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-horizontal-attachments-popup`);
    browser.click('#attach-Middle');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 41px;');
  },

  'Positions the arrow for horizontal-bottom attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/arrow-horizontal-attachments-popup`);
    browser.click('#attach-Bottom');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('top: 51px;');
  },

  'Displays a small-sized popup correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/size-small-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 40px; width: 160px;');
  },

  'Displays a medium-sized popup correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/size-medium-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 120px; width: 320px;');
  },

  'Displays a large-sized popup correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/size-large-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 240px; width: 960px;');
  },

  'Displays a fallback-sized popup correctly when invalid sizes are provided ': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/size-invalid-popup`);
    browser.expect.element('.test-content').to.have.attribute('style').which.equals('height: 80px; width: 240px;');
  },

  'Displays a popup with automatic height correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-height-popup`);
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-height');
  },

  'Displays a popup with automatic height & closes on width resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-height-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(960, 600);
    browser.waitForElementNotPresent('.test-content', 1000);
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup with automatic height & remains open on height resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-height-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(width, 600);
    browser.expect.element('.test-content').to.be.present;
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup with automatic height correctly when bounded by height': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-height-bounded-popup`);
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-height');
    browser.expect.element('.test-content').to.have.attribute('style').which.contains('height: 175px;');
  },

  'Displays a popup with automatic width correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-width-popup`);
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-width');
  },

  'Displays a popup with automatic width & closes on width resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-width-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(960, 600);
    browser.waitForElementNotPresent('.test-content', 1000);
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup with automatic width & remains open on height resize': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-width-popup`);
    browser.expect.element('.test-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(width, 600);
    browser.expect.element('.test-content').to.be.present;
    browser.resizeWindow(width, browser.globals.breakpoints.small[1]);
  },

  'Displays a popup with automatic width correctly when bounded by width': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/automatic-width-bounded-popup`);
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-width');
    browser.expect.element('.test-content').to.have.attribute('style').which.contains('width: 200px;');
  },

  'Displays a popup with automatic dimensions resizing': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/popup/resized-content-popup`);
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-height');
    browser.expect.element('.test-content').to.have.attribute('data-terra-popup-automatic-width');

    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 62px;');
    browser.click('#resize-content');
    browser.expect.element('.test-arrow').to.have.attribute('style').which.equals('left: 112px;');
  },
});
