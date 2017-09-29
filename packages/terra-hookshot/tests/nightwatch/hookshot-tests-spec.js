/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  // minimum props
  // isOpen, verify content is present on the dom.

  // attachementBehavior: validate 'none', 'auto', and 'mirror' behaviors.
    // fallback patterns:
    // none: valid primary position, pushed by bounds
    // mirror: valid primary position, valid 180 degree, pushed by bounds
    // auto: valid primary position, valid 180 degree, valid 90 degree, valid -90 degree, pushed by bounds

  // attachmentMargin: validate number set adjusts positioning by so much.

  // boundingRef: test - top bottom left right bounding container adjustments as well as window.

  // Verify Content Offset Positioning
  'Display the content offset correctly for dir=ltr': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-offset`);
    browser.expect.element('#ContentOffset-content').to.be.present;
    // Offset Applied (20px, -10px).
    // For the defined content attchement: "bottom right" & target attchement: "bottom left"
    // LTR x value calculation: value = 220 (margin) - 200 (content width) + (-10) (offset) + 1
    // LTR y value calculation: value =  55 (margin) - 35 (content height) + 20 (offset) + 1
    browser.getLocation('#ContentOffset-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 41);
    });
  },

  'Displays the content offset correctly for dir=rtl': (browser) => {
    const width = screenWidth(browser);
    if (width === browser.globals.breakpoints.small[0]) {
      browser.execute("document.getElementsByTagName('html')[0].dir='rtl';");
      browser.pause(500);
      browser.click('#trigger-ContentOffset');
      browser.expect.element('#ContentOffset-content').to.be.present;
      // Offset Applied (20px, -10px).
      // For the defined content attchement: "bottom right" & target attchement: "bottom left"
      // RTL x value calculation: value = 622 (width) - 220 (margin) - (-10) (offset) - 1
      browser.getLocation('#ContentOffset-content', (coordinates) => {
        browser.assert.equal(coordinates.value.x, 411);
        browser.assert.equal(coordinates.value.y, 41);
      });
      browser.execute("document.getElementsByTagName('html')[0].dir='ltr';");
    }
  },

  // Verify Target Offset Positioning
  'Display the target offset correctly for dir=ltr': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/target-offset`);
    browser.expect.element('#TargetOffset-content').to.be.present;
    // Offset Applied (-10px, -20px).
    // For the defined content attchement: "bottom left" & target attchement: "top left"
    // LTR x value calculation: value = 220 (margin) + (-20) (offset) + 1
    // LTR y value calculation: value =  55 (margin) - 35 (content height) + (-10) (offset) + 1
    browser.getLocation('#TargetOffset-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 201);
      browser.assert.equal(coordinates.value.y, 11);
    });
  },

  'Displays the target offset correctly for dir=rtl': (browser) => {
    const width = screenWidth(browser);
    if (width === browser.globals.breakpoints.small[0]) {
      browser.execute("document.getElementsByTagName('html')[0].dir='rtl';");
      browser.pause(500);
      browser.click('#trigger-TargetOffset');
      browser.expect.element('#TargetOffset-content').to.be.present;
      // Offset Applied (-10px, -20px).
      // For the defined content attchement: "bottom left" & target attchement: "top left"
      // RTL x value calculation: value = 622 (width) - 220 (margin) - 200 (content size) - (-20) (offset) - 1
      browser.getLocation('#TargetOffset-content', (coordinates) => {
        browser.assert.equal(coordinates.value.x, 221);
        browser.assert.equal(coordinates.value.y, 11);
      });
      browser.execute("document.getElementsByTagName('html')[0].dir='ltr';");
    }
  },

  // Verify Enabled Behaviors
  'Content is positioned and visible when isEnabled={true}': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/enabled-behaviors`);
    browser.expect.element('#Enabled-content').to.be.present;
    browser.expect.element('#Enabled-content').to.have.css('opacity').which.equals('1');
    browser.expect.element('#Enabled-content').to.have.css('position').which.equals('absolute');
  },

  'Content is not positioned or visible when isEnabled={false}': (browser) => {
    browser.expect.element('#NotEnabled-content').to.be.present;
    browser.expect.element('#NotEnabled-content').to.have.css('opacity').which.equals('0');
    browser.expect.element('#NotEnabled-content').to.have.css('position').which.equals('fixed');
  },

  // Verify Close Behaviors
  'Closes the hookshot content on ESC when all close behavior is present': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/close-behaviors`);
    browser.click('#trigger-AllBehavior');
    browser.expect.element('#AllBehavior-content').to.be.present;
    browser.keys(browser.Keys.ESCAPE);
    browser.expect.element('#AllBehavior-content').to.not.be.present;
  },

  'Closes the hookshot content on outside click when all close behavior is present': (browser) => {
    browser.click('#trigger-AllBehavior');
    browser.expect.element('#AllBehavior-content').to.be.present;
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
    browser.expect.element('#AllBehavior-content').to.not.be.present;
  },

  'Closes the hookshot content on resize when all close behavior is present': (browser) => {
    browser.click('#trigger-AllBehavior');
    browser.expect.element('#AllBehavior-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(600, browser.globals.breakpoints.tiny[1]);
    // Wait for debounce
    browser.pause(100);
    browser.expect.element('#AllBehavior-content').to.not.be.present;

    browser.resizeWindow(width, browser.globals.breakpoints.tiny[1]);
  },

  'Closes the hookshot content on ESC when closeOnEsc': (browser) => {
    browser.click('#trigger-EcsBehavior');
    browser.expect.element('#EcsBehavior-content').to.be.present;
    browser.keys(browser.Keys.ESCAPE);
    browser.expect.element('#EcsBehavior-content').to.not.be.present;
  },

  'Closes the hookshot content on outside click when closeOnOutsideClick': (browser) => {
    browser.click('#trigger-OutsideClickBehavior');
    browser.expect.element('#OutsideClickBehavior-content').to.be.present;
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
    browser.expect.element('#OutsideClickBehavior-content').to.not.be.present;
  },

  'Closes the hookshot contentsent on resize when closeOnResize': (browser) => {
    browser.click('#trigger-ResizeBehavior');
    browser.expect.element('#ResizeBehavior-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(600, browser.globals.breakpoints.tiny[1]);
    // Wait for debounce
    browser.pause(100);
    browser.expect.element('#ResizeBehavior-content').to.not.be.present;

    browser.resizeWindow(width, browser.globals.breakpoints.tiny[1]);
  },

  'Does not close the hookshot content on ESC when no close behavior is present': (browser) => {
    browser.click('#trigger-NoCloseBehavior');
    browser.expect.element('#NoCloseBehavior-content').to.be.present;
    browser.keys(browser.Keys.ESCAPE);
    browser.expect.element('#NoCloseBehavior-content').to.be.present;
  },

  'Does not close the hookshot content on outside click when no close behavior is present': (browser) => {
    browser.expect.element('#NoCloseBehavior-content').to.be.present;
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
    browser.expect.element('#NoCloseBehavior-content').to.be.present;
  },

  'Does not close the hookshot content on resize when no close behavior is present': (browser) => {
    browser.expect.element('#NoCloseBehavior-content').to.be.present;

    const width = screenWidth(browser);
    browser.resizeWindow(600, browser.globals.breakpoints.tiny[1]);
    // Wait for debounce
    browser.pause(100);
    browser.expect.element('#NoCloseBehavior-content').to.be.present;

    browser.resizeWindow(width, browser.globals.breakpoints.tiny[1]);
  },
});
