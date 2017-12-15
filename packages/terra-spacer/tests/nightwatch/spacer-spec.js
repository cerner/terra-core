/* eslint-disable no-unused-expressions */
// Background color added for context. The orange background shows margin, while the green background shows padding.
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  // Just the spacer component with <div> tag as child and without any props set
  'Displays a default spacer': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/default`)
      .expect.element('#spacer').to.be.present;
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with small-2 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall2`)
      .expect.element('#spacerMarginSmall2').to.be.present;
    browser.expect.element('#spacerPaddingSmall2').to.be.present;
    browser.expect.element('#spacerMarginPaddingSmall2').to.be.present;

    browser.expect.element('#spacerMarginSmall2').to.have.css('margin-top');
    browser.expect.element('#spacerMarginSmall2').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginSmall2').to.have.css('margin-left');
    browser.expect.element('#spacerMarginSmall2').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingSmall2').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingSmall2').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingSmall2').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingSmall2').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingSmall2').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingSmall2InlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with small-1 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall1`)
      .expect.element('#spacerMarginSmall1').to.be.present;
    browser.expect.element('#spacerPaddingSmall1').to.be.present;
    browser.expect.element('#spacerMarginPaddingSmall1').to.be.present;

    browser.expect.element('#spacerMarginSmall1').to.have.css('margin-top');
    browser.expect.element('#spacerMarginSmall1').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginSmall1').to.have.css('margin-left');
    browser.expect.element('#spacerMarginSmall1').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingSmall1').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingSmall1').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingSmall1').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingSmall1').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingSmall1').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingSmall1InlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with small margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall`)
      .expect.element('#spacerMarginSmall').to.be.present;
    browser.expect.element('#spacerPaddingSmall').to.be.present;
    browser.expect.element('#spacerMarginPaddingSmall').to.be.present;

    browser.expect.element('#spacerMarginSmall').to.have.css('margin-top');
    browser.expect.element('#spacerMarginSmall').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginSmall').to.have.css('margin-left');
    browser.expect.element('#spacerMarginSmall').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingSmall').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingSmall').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingSmall').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingSmall').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingSmall').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingSmallInlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with medium margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerMedium`)
      .expect.element('#spacerMarginMedium').to.be.present;
    browser.expect.element('#spacerPaddingMedium').to.be.present;
    browser.expect.element('#spacerMarginPaddingMedium').to.be.present;

    browser.expect.element('#spacerMarginMedium').to.have.css('margin-top');
    browser.expect.element('#spacerMarginMedium').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginMedium').to.have.css('margin-left');
    browser.expect.element('#spacerMarginMedium').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingMedium').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingMedium').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingMedium').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingMedium').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingMedium').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingMediumInlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge`)
      .expect.element('#spacerMarginLarge').to.be.present;
    browser.expect.element('#spacerPaddingLarge').to.be.present;
    browser.expect.element('#spacerMarginPaddingLarge').to.be.present;

    browser.expect.element('#spacerMarginLarge').to.have.css('margin-top');
    browser.expect.element('#spacerMarginLarge').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginLarge').to.have.css('margin-left');
    browser.expect.element('#spacerMarginLarge').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingLarge').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingLarge').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingLarge').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingLarge').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingLarge').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingLargeInlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with large+1 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge1`)
      .expect.element('#spacerMarginLarge1').to.be.present;
    browser.expect.element('#spacerPaddingLarge1').to.be.present;
    browser.expect.element('#spacerMarginPaddingLarge1').to.be.present;

    browser.expect.element('#spacerMarginLarge1').to.have.css('margin-top');
    browser.expect.element('#spacerMarginLarge1').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginLarge1').to.have.css('margin-left');
    browser.expect.element('#spacerMarginLarge1').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingLarge1').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingLarge1').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingLarge1').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingLarge1').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingLarge1').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingLarge1InlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with large+2 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge2`)
      .expect.element('#spacerMarginLarge2').to.be.present;
    browser.expect.element('#spacerPaddingLarge2').to.be.present;
    browser.expect.element('#spacerMarginPaddingLarge2').to.be.present;

    browser.expect.element('#spacerMarginLarge2').to.have.css('margin-top');
    browser.expect.element('#spacerMarginLarge2').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginLarge2').to.have.css('margin-left');
    browser.expect.element('#spacerMarginLarge2').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingLarge2').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingLarge2').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingLarge2').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingLarge2').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingLarge2').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingLarge2InlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with large+3 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge3`)
      .expect.element('#spacerMarginLarge3').to.be.present;
    browser.expect.element('#spacerPaddingLarge3').to.be.present;
    browser.expect.element('#spacerMarginPaddingLarge3').to.be.present;

    browser.expect.element('#spacerMarginLarge3').to.have.css('margin-top');
    browser.expect.element('#spacerMarginLarge3').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginLarge3').to.have.css('margin-left');
    browser.expect.element('#spacerMarginLarge3').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingLarge3').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingLarge3').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingLarge3').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingLarge3').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingLarge3').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingLarge3InlineBlock').to.have.css('display').which.equals('inline-block');
  },

  /*
    Margin Applied to visual example 1
    Padding Applied to visual example 2
    Margin and Padding Applied to visual example 3
    Margin, Padding and isInline Applied to visual example 4
   */
  'Displays spacer with large+4 margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge4`)
      .expect.element('#spacerMarginLarge4').to.be.present;
    browser.expect.element('#spacerPaddingLarge4').to.be.present;
    browser.expect.element('#spacerMarginPaddingLarge4').to.be.present;

    browser.expect.element('#spacerMarginLarge4').to.have.css('margin-top');
    browser.expect.element('#spacerMarginLarge4').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginLarge4').to.have.css('margin-left');
    browser.expect.element('#spacerMarginLarge4').to.have.css('margin-right');

    browser.expect.element('#spacerPaddingLarge4').to.have.css('padding-top');
    browser.expect.element('#spacerPaddingLarge4').to.have.css('padding-bottom');
    browser.expect.element('#spacerPaddingLarge4').to.have.css('padding-left');
    browser.expect.element('#spacerPaddingLarge4').to.have.css('padding-right');

    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('margin-top');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('margin-bottom');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('margin-left');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('margin-right');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('padding-top');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('padding-bottom');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('padding-left');
    browser.expect.element('#spacerMarginPaddingLarge4').to.have.css('padding-right');
    browser.expect.element('#spacerMarginPaddingLarge4InlineBlock').to.have.css('display').which.equals('inline-block');
  },
});
