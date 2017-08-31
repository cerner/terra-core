/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default dynamic-grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/dynamic-grid-tests/default`)
      .expect.element('#defaultDynamicGrid').to.be.present;

    browser.expect.element('#defaultDynamicGrid').to.have.css('display').which.matches(/^(-ms-)?grid$/);
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-gap');
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-template-columns');
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-template-rows');

    browser.expect.element('#region1').to.have.css('grid-row-start');
    browser.expect.element('#region1').to.have.css('grid-column-start');
    browser.expect.element('#region1').text.to.equal('R1');

    browser.expect.element('#region2').to.have.css('grid-row-start');
    browser.expect.element('#region2').to.have.css('grid-column-start');
    browser.expect.element('#region2').text.to.equal('R2');
  },
});
