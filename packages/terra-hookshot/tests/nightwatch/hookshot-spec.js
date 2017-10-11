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
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-none`);
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-none');
    browser.expect.element('#attachment-behavior-none-content').to.be.present;
    browser.getLocation('#attachment-behavior-none-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with position pushed when there is not enough room in primary position with no attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-none`);
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-none');
    browser.expect.element('#attachment-behavior-none-content').to.be.present;
    browser.getLocation('#attachment-behavior-none-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 1);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays in primary position when there is enough room with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-flip`);
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-flip');
    browser.expect.element('#attachment-behavior-flip-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with position flipped when there is not enough room in primary position with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-flip`);
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-flip');
    browser.expect.element('#attachment-behavior-flip-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-flip`);
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-flip');
    browser.expect.element('#attachment-behavior-flip-content').to.be.present;
    browser.getLocation('#attachment-behavior-flip-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 1);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays in primary position when there is enough room with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-auto`);
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-auto');
    browser.expect.element('#attachment-behavior-auto-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with position flipped when there is not enough room in primary position with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-auto`);
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-auto');
    browser.expect.element('#attachment-behavior-auto-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-auto`);
    browser.click('#position-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.expect.element('#attachment-behavior-auto-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 92);
    });
  },

  'Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-auto`);
    browser.click('#position-neg-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.expect.element('#attachment-behavior-auto-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 65);
    });
  },

  'Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-behavior-auto`);
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-auto');
    browser.expect.element('#attachment-behavior-auto-content').to.be.present;
    browser.getLocation('#attachment-behavior-auto-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 19);
      browser.assert.equal(coordinates.value.y, 65);
    });
  },

  // attachmentMargin: validate number set adjusts positioning by so much.
  'Displays with given margin between the attachment points - Middle Start Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-MS');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 331);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with given margin between the attachment points - Middle End Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-ME');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays without margin between the attachment points - Middle Center Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-MC');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays with given margin between the attachment points - Bottom Start Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-BS');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 10);
    });
  },

  'Displays with given margin between the attachment points - Bottom End Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-BE');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 10);
    });
  },

  'Displays with given margin between the attachment points - Bottom Center Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-BC');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 10);
    });
  },

  'Displays with given margin between the attachment points - Top Start Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-TS');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 102);
    });
  },

  'Displays with given margin between the attachment points - Top End Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-TE');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 102);
    });
  },

  'Displays with given margin between the attachment points - Top Center Content Attachment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/attachment-margin`);
    browser.click('#attach-TC');
    browser.click('#trigger-attachment-margin');
    browser.expect.element('#attachment-margin-content').to.be.present;
    browser.getLocation('#attachment-margin-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 102);
    });
  },

  // boundingRef: test - top bottom start end bounding container adjustments.
  'Displays content pushed start by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.click('#push-left');
    browser.click('#trigger-bounding-container');
    browser.expect.element('#bounding-container-content').to.be.present;
    browser.getLocation('#bounding-container-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 101);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays content pushed end by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.click('#push-right');
    browser.click('#trigger-bounding-container');
    browser.expect.element('#bounding-container-content').to.be.present;
    browser.getLocation('#bounding-container-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 151);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  'Displays content pushed down by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.click('#push-down');
    browser.click('#trigger-bounding-container');
    browser.expect.element('#bounding-container-content').to.be.present;
    browser.getLocation('#bounding-container-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  'Displays content pushed up by bounding container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/bounding-container`);
    browser.click('#push-up');
    browser.click('#trigger-bounding-container');
    browser.expect.element('#bounding-container-content').to.be.present;
    browser.getLocation('#bounding-container-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 101);
    });
  },

    // Verify Content Offset Positioning
  'Display the content offset correctly for dir=ltr': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-offset`);
    browser.expect.element('#ContentOffset-content').to.be.present;
    // Offset Applied (20px, -10px).
    // For the defined content attachment: "bottom end" & target attachment: "bottom start"
    // LTR x value calculation: value = 220 (margin) - 200 (content width) + (-10) (offset) + 1
    // LTR y value calculation: value =  55 (margin) - 36 (content height) + 20 (offset) + 1
    browser.getLocation('#ContentOffset-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 11);
      browser.assert.equal(coordinates.value.y, 40);
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
      // For the defined content attachment: "bottom end" & target attachment: "bottom start"
      // RTL x value calculation: value = 622 (width) - 220 (margin) - (-10) (offset) - 1
      browser.getLocation('#ContentOffset-content', (coordinates) => {
        browser.assert.equal(coordinates.value.x, 411);
        browser.assert.equal(coordinates.value.y, 40);
      });
      browser.execute("document.getElementsByTagName('html')[0].dir='ltr';");
    }
  },

  // Verify Target Offset Positioning
  'Display the target offset correctly for dir=ltr': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/target-offset`);
    browser.expect.element('#TargetOffset-content').to.be.present;
    // Offset Applied (-10px, -20px).
    // For the defined content attachment: "bottom start" & target attachment: "top start"
    // LTR x value calculation: value = 220 (margin) + (-20) (offset) + 1
    // LTR y value calculation: value =  55 (margin) - 36 (content height) + (-10) (offset) + 1
    browser.getLocation('#TargetOffset-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 201);
      browser.assert.equal(coordinates.value.y, 10);
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
      // For the defined content attachment: "bottom start" & target attachment: "top start"
      // RTL x value calculation: value = 622 (width) - 220 (margin) - 200 (content size) - (-20) (offset) - 1
      browser.getLocation('#TargetOffset-content', (coordinates) => {
        browser.assert.equal(coordinates.value.x, 221);
        browser.assert.equal(coordinates.value.y, 10);
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
