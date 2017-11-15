// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable no-unused-expressions */
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default spacer': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/default`)
      .expect.element('#spacer').to.be.present;
  },

  'Displays spacer with very very small margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall2`)
      .expect.element('#spacermarginsmall-2').to.be.present;
    browser.expect.element('#spacerpaddingsmall-2').to.be.present;
    browser.expect.element('#spacermarginpaddingsmall-2').to.be.present;

    browser.expect.element('#spacermarginsmall-2').to.have.css('margin-top');
    browser.expect.element('#spacermarginsmall-2').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginsmall-2').to.have.css('margin-left');
    browser.expect.element('#spacermarginsmall-2').to.have.css('margin-right');

    browser.expect.element('#spacerpaddingsmall-2').to.have.css('padding-top');
    browser.expect.element('#spacerpaddingsmall-2').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddingsmall-2').to.have.css('padding-left');
    browser.expect.element('#spacerpaddingsmall-2').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddingsmall-2').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddingsmall-2inlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with very small margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall1`)
      .expect.element('#spacermarginsmall-1').to.be.present;
    browser.expect.element('#spacerpaddingsmall-1').to.be.present;
    browser.expect.element('#spacermarginpaddingsmall-1').to.be.present;

    browser.expect.element('#spacermarginsmall-1').to.have.css('margin-top');
    browser.expect.element('#spacermarginsmall-1').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginsmall-1').to.have.css('margin-left');
    browser.expect.element('#spacermarginsmall-1').to.have.css('margin-right');

    browser.expect.element('#spacerpaddingsmall-1').to.have.css('padding-top');
    browser.expect.element('#spacerpaddingsmall-1').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddingsmall-1').to.have.css('padding-left');
    browser.expect.element('#spacerpaddingsmall-1').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddingsmall-1').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddingsmall-1inlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with small margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerSmall`)
      .expect.element('#spacermarginsmall').to.be.present;
    browser.expect.element('#spacerpaddingsmall').to.be.present;
    browser.expect.element('#spacermarginpaddingsmall').to.be.present;

    browser.expect.element('#spacermarginsmall').to.have.css('margin-top');
    browser.expect.element('#spacermarginsmall').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginsmall').to.have.css('margin-left');
    browser.expect.element('#spacermarginsmall').to.have.css('margin-right');

    browser.expect.element('#spacerpaddingsmall').to.have.css('padding-top');
    browser.expect.element('#spacerpaddingsmall').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddingsmall').to.have.css('padding-left');
    browser.expect.element('#spacerpaddingsmall').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddingsmall').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddingsmall').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddingsmallinlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with medium margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerMedium`)
      .expect.element('#spacermarginmedium').to.be.present;
    browser.expect.element('#spacerpaddingmedium').to.be.present;
    browser.expect.element('#spacermarginpaddingmedium').to.be.present;

    browser.expect.element('#spacermarginmedium').to.have.css('margin-top');
    browser.expect.element('#spacermarginmedium').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginmedium').to.have.css('margin-left');
    browser.expect.element('#spacermarginmedium').to.have.css('margin-right');

    browser.expect.element('#spacerpaddingmedium').to.have.css('padding-top');
    browser.expect.element('#spacerpaddingmedium').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddingmedium').to.have.css('padding-left');
    browser.expect.element('#spacerpaddingmedium').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddingmedium').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddingmedium').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddingmediuminlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge`)
      .expect.element('#spacermarginlarge').to.be.present;
    browser.expect.element('#spacerpaddinglarge').to.be.present;
    browser.expect.element('#spacermarginpaddinglarge').to.be.present;

    browser.expect.element('#spacermarginlarge').to.have.css('margin-top');
    browser.expect.element('#spacermarginlarge').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginlarge').to.have.css('margin-left');
    browser.expect.element('#spacermarginlarge').to.have.css('margin-right');

    browser.expect.element('#spacerpaddinglarge').to.have.css('padding-top');
    browser.expect.element('#spacerpaddinglarge').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddinglarge').to.have.css('padding-left');
    browser.expect.element('#spacerpaddinglarge').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddinglarge').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddinglarge').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddinglargeinlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with very large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge1`)
      .expect.element('#spacermarginlarge1').to.be.present;
    browser.expect.element('#spacerpaddinglarge1').to.be.present;
    browser.expect.element('#spacermarginpaddinglarge1').to.be.present;

    browser.expect.element('#spacermarginlarge1').to.have.css('margin-top');
    browser.expect.element('#spacermarginlarge1').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginlarge1').to.have.css('margin-left');
    browser.expect.element('#spacermarginlarge1').to.have.css('margin-right');

    browser.expect.element('#spacerpaddinglarge1').to.have.css('padding-top');
    browser.expect.element('#spacerpaddinglarge1').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddinglarge1').to.have.css('padding-left');
    browser.expect.element('#spacerpaddinglarge1').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddinglarge1').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddinglarge1inlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with very very large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge2`)
      .expect.element('#spacermarginlarge2').to.be.present;
    browser.expect.element('#spacerpaddinglarge2').to.be.present;
    browser.expect.element('#spacermarginpaddinglarge2').to.be.present;

    browser.expect.element('#spacermarginlarge2').to.have.css('margin-top');
    browser.expect.element('#spacermarginlarge2').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginlarge2').to.have.css('margin-left');
    browser.expect.element('#spacermarginlarge2').to.have.css('margin-right');

    browser.expect.element('#spacerpaddinglarge2').to.have.css('padding-top');
    browser.expect.element('#spacerpaddinglarge2').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddinglarge2').to.have.css('padding-left');
    browser.expect.element('#spacerpaddinglarge2').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddinglarge2').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddinglarge2inlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with very very very large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge3`)
      .expect.element('#spacermarginlarge3').to.be.present;
    browser.expect.element('#spacerpaddinglarge3').to.be.present;
    browser.expect.element('#spacermarginpaddinglarge3').to.be.present;

    browser.expect.element('#spacermarginlarge3').to.have.css('margin-top');
    browser.expect.element('#spacermarginlarge3').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginlarge3').to.have.css('margin-left');
    browser.expect.element('#spacermarginlarge3').to.have.css('margin-right');

    browser.expect.element('#spacerpaddinglarge3').to.have.css('padding-top');
    browser.expect.element('#spacerpaddinglarge3').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddinglarge3').to.have.css('padding-left');
    browser.expect.element('#spacerpaddinglarge3').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddinglarge3').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddinglarge3inlineblock').to.have.css('display').which.equals('inline-block');
  },

  'Displays spacer with very very very very large margin': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/spacer-tests/SpacerLarge4`)
      .expect.element('#spacermarginlarge4').to.be.present;
    browser.expect.element('#spacerpaddinglarge4').to.be.present;
    browser.expect.element('#spacermarginpaddinglarge4').to.be.present;

    browser.expect.element('#spacermarginlarge4').to.have.css('margin-top');
    browser.expect.element('#spacermarginlarge4').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginlarge4').to.have.css('margin-left');
    browser.expect.element('#spacermarginlarge4').to.have.css('margin-right');

    browser.expect.element('#spacerpaddinglarge4').to.have.css('padding-top');
    browser.expect.element('#spacerpaddinglarge4').to.have.css('padding-bottom');
    browser.expect.element('#spacerpaddinglarge4').to.have.css('padding-left');
    browser.expect.element('#spacerpaddinglarge4').to.have.css('padding-right');

    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('margin-top');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('margin-bottom');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('margin-left');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('margin-right');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('padding-top');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('padding-bottom');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('padding-left');
    browser.expect.element('#spacermarginpaddinglarge4').to.have.css('padding-right');
    browser.expect.element('#spacermarginpaddinglarge4inlineblock').to.have.css('display').which.equals('inline-block');
  },
});
