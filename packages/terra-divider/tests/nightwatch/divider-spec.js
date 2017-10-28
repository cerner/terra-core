// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable no-unused-expressions */
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default divider': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/divider-tests/default`)
      .expect.element('#divider').to.be.present;
  },
});
