/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  // minimum props
  'Displays default hookshot': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/default`);
    browser.click('#hookshot-standard-button');
    browser.expect.element('#testDefaultContent').to.be.present;
  },

  // attachmentBehavior: validate 'none', 'auto', and 'mirror' behaviors.
    // fallback patterns:
    // none: valid primary position, pushed by bounds
    // mirror: valid primary position, valid 180 degree, pushed by bounds
    // auto: valid primary position, valid 180 degree, valid 90 degree, valid -90 degree, pushed by bounds
  'Displays in primary position when there is enough room with no attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.click('#trigger-attachment-behavior-none-primary');
    browser.expect.element('#attachment-behavior-none-primary-content').to.be.present;
    browser.getLocation('#attachment-behavior-none-primary-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 136);
    });
  },
  'Displays with position pushed when there is not enough room in primary position with no attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-none-pushed-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-none-pushed');
    browser.expect.element('#attachment-behavior-none-pushed-content').to.be.present;
    browser.getLocation('#attachment-behavior-none-pushed-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 1);
      browser.assert.equal(coordinates.value.y, 361);
    });
  },
  'Displays in primary position when there is enough room with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-flip-primary-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-flip-primary');
    browser.expect.element('#attachment-behavior-flip-primary-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-primary-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 586);
    });
  },
  'Displays with position flipped when there is not enough room in primary position with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-flip-flipped-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-flip-flipped');
    browser.expect.element('#attachment-behavior-flip-flipped-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-flipped-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 679);
    });
  },
  'Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-flip-pushed-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-flip-pushed');
    browser.expect.element('#attachment-behavior-flip-pushed-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-pushed-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 1);
      browser.assert.equal(coordinates.value.y, 679);
    });
  },
  'Displays in primary position when there is enough room with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-auto-primary-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-auto-primary');
    browser.expect.element('#attachment-behavior-auto-primary-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-primary-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 679);
    });
  },
  'Displays with position flipped when there is not enough room in primary position with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-auto-flipped-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-auto-flipped');
    browser.expect.element('#attachment-behavior-auto-flipped-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-flipped-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 679);
    });
  },
  'Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-auto-90-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-auto-90');
    browser.expect.element('#attachment-behavior-auto-90-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-90-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 714);
    });
  },
  'Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-auto-neg-90-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-auto-neg-90');
    browser.expect.element('#attachment-behavior-auto-neg-90-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-neg-90-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 689);
    });
  },
  'Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behaviors`);
    browser.moveToElement('#attachment-behavior-auto-pushed-bounds', 0, 0);
    browser.click('#trigger-attachment-behavior-auto-pushed');
    browser.expect.element('#attachment-behavior-auto-pushed-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-pushed-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 19);
      browser.assert.equal(coordinates.value.y, 689);
    });
  },

  // attachmentMargin: validate number set adjusts positioning by so much.
  'Displays with given margin between the attachment points - Middle Left Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#trigger-attachment-margin-middle-left');
    browser.expect.element('#attachment-margin-middle-left-content').to.be.present;
    browser.getLocation('#attachment-margin-middle-left-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 0);
    });
  },
  'Displays with given margin between the attachment points - Middle Right Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-middle-right-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-middle-right');
    browser.expect.element('#attachment-margin-middle-right-content').to.be.present;
    browser.getLocation('#attachment-margin-middle-right-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 331);
      browser.assert.equal(coordinates.value.y, 295);
    });
  },
  'Displays without margin between the attachment points - Middle Center Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-middle-center-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-middle-center');
    browser.expect.element('#attachment-margin-middle-center-content').to.be.present;
    browser.getLocation('#attachment-margin-middle-center-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 487);
    });
  },
  'Displays with given margin between the attachment points - Bottom Left Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-bottom-left-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-bottom-left');
    browser.expect.element('#attachment-margin-bottom-left-content').to.be.present;
    browser.getLocation('#attachment-margin-bottom-left-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 724);
    });
  },
  'Displays with given margin between the attachment points - Bottom Right Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-bottom-right-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-bottom-right');
    browser.expect.element('#attachment-margin-bottom-right-content').to.be.present;
    browser.getLocation('#attachment-margin-bottom-right-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 724);
    });
  },
  'Displays with given margin between the attachment points - Bottom Center Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-bottom-center-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-bottom-center');
    browser.expect.element('#attachment-margin-bottom-center-content').to.be.present;
    browser.getLocation('#attachment-margin-bottom-center-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 724);
    });
  },
  'Displays with given margin between the attachment points - Top Left Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-top-left-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-top-left');
    browser.expect.element('#attachment-margin-top-left-content').to.be.present;
    browser.getLocation('#attachment-margin-top-left-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 634);
    });
  },
  'Displays with given margin between the attachment points - Top Right Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-top-right-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-top-right');
    browser.expect.element('#attachment-margin-top-right-content').to.be.present;
    browser.getLocation('#attachment-margin-top-right-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 634);
    });
  },
  'Displays with given margin between the attachment points - Top Center Target Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.moveToElement('#attachment-margin-top-center-bounds', 0, 0);
    browser.click('#trigger-attachment-margin-top-center');
    browser.expect.element('#attachment-margin-top-center-content').to.be.present;
    browser.getLocation('#attachment-margin-top-center-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 634);
    });
  },

  // boundingRef: test - top bottom left right bounding container adjustments.
  'Displays content pushed left by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.click('#trigger-bounding-container-push-left');
    browser.expect.element('#bounding-container-push-left-content').to.be.present;
    browser.getLocation('#bounding-container-push-left-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 101);
      browser.assert.equal(coordinates.value.y, 103);
    });
  },
  'Displays content pushed right by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.moveToElement('#bounding-container-push-right-bounds', 0, 0);
    browser.click('#trigger-bounding-container-push-right');
    browser.expect.element('#bounding-container-push-right-content').to.be.present;
    browser.getLocation('#bounding-container-push-right-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 295);
    });
  },
  'Displays content pushed down by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.moveToElement('#bounding-container-push-down-bounds', 0, 0);
    browser.click('#trigger-bounding-container-push-down');
    browser.expect.element('#bounding-container-push-down-content').to.be.present;
    browser.getLocation('#bounding-container-push-down-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 452);
    });
  },
  'Displays content pushed up by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.moveToElement('#bounding-container-push-up-bounds', 0, 0);
    browser.click('#trigger-bounding-container-push-up');
    browser.expect.element('#bounding-container-push-up-content').to.be.present;
    browser.getLocation('#bounding-container-push-up-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 724);
    });
  },

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
