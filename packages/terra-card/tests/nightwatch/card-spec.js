/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default card': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/card-tests/default`);
    browser.expect.element('#defaultcard').to.be.present;
    browser.assert.cssProperty('#defaultcard', 'padding', '0px');
  },

  'Displays a default card with vertical padding': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/card-tests/paddingvertical`);
    browser.expect.element('#verticalcard').to.be.present;
    browser.assert.cssProperty('#verticalcard', 'padding-bottom', '10px');
    browser.assert.cssProperty('#verticalcard', 'padding-top', '10px');
  },

  'Displays a default card with horizontal padding': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/card-tests/paddinghorizontal`);
    browser.expect.element('#horizontalcard').to.be.present;
    browser.assert.cssProperty('#horizontalcard', 'padding-left', '10px');
    browser.assert.cssProperty('#horizontalcard', 'padding-right', '10px');
  },

  'Displays a default card with padding': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/card-tests/padding`);
    browser.expect.element('#paddingcard').to.be.present;
    browser.assert.cssProperty('#paddingcard', 'padding', '10px');
  },
});
