/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a content container with default props': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/content-container/default-content-container`);
    browser.expect.element('#content-container').to.be.present;
    browser.expect.element('#content-container').to.have.attribute('class').which.not.contains('fill');
    browser.expect.element('#content-container div:nth-child(1)').text.to.contain('header');
    browser.expect.element('#content-container div:nth-child(2)').text.to.contain('content');
  },

  'Displays a content container with fill': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/content-container/fill-content-container`)
      .expect.element('#content-container').to.have.attribute('class').which.contains('fill');
  },
});
