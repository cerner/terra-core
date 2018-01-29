// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default OverlayContainer': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/overlay-container/default-overlay-container`);
    browser.assert.attributeEquals('#terra-OverlayContainer', 'tabIndex', '-1');
  },
});
