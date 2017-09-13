// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

// module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
module.exports = resizeTo(['small'], {

  'Displays a default signature': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/signature-tests/default`)
      .waitForElementPresent('body', 500)
      .pause(10000)
      .assert.elementPresent('canvas[class*="signature"]');
  },

  'Draw a line signature and verify canvas': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/signature-tests/default`)
      .waitForElementPresent('canvas#drawline', 15000)
      .expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 10, 10) // Move to offset position of 10(x) 10(y)
      .mouseButtonDown(0)
      .moveToElement('canvas#drawline', 10, 60) // Move to offset position of 10(x) 60(y)
      .mouseButtonUp(0)
      .pause(5000);  // Keep browser open for 5 seconds so you can see result
  },

});
