// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default OverlayContainer': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/overlay-container-tests/default`);
    browser.assert.attributeEquals('#terra-OverlayContainer', 'tabIndex', '-1');
  },
});
