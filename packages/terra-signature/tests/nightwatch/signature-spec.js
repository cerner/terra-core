/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Displays a default signature': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas[class*="signature"]').to.be.present;
  },

  'Draw a line signature and verify canvas': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 10, 10) // Move to offset position of 10(x) 10(y)
      .mouseButtonDown(0)
      .moveToElement('canvas#drawline', 90, 90) // Move to offset position of 10(x) 60(y)
      .mouseButtonUp(0);
  },

});
