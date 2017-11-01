/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default flexbox component with no attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/default`);
    browser.expect.element('#default').to.be.present;
  },

  'Displays a flexbox component with all parent attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/parent`);
    browser.expect.element('#parent').to.be.present;
    browser.expect.element('#parent').to.be.an('header');
    browser.expect.element('#parent').to.have.attribute('style').which.equals(
      'place-content: flex-start center; align-items: stretch; display: inline-flex; flex-flow: column wrap;');
  },

  'Displays a flexbox component with all child attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/child`);
    browser.expect.element('#parent').to.be.present;
    browser.expect.element('#parent div:nth-child(1)').to.have.attribute('style').which.equals('align-self: flex-end; display: flex; flex: 0 0 auto; order: 2;');
    browser.expect.element('#parent div:nth-child(2)').to.have.attribute('style').which.equals('align-self: center; display: flex; flex: 0 0 auto; order: 1;');
    browser.expect.element('#parent div:nth-child(3)').to.have.attribute('style').which.equals('align-self: flex-start; display: flex; flex: 0 0 auto; order: 0;');
  },

  'Displays a flexbox component with min and max attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/minmax`);
    browser.expect.element('#minmax').to.be.present;
    browser.expect.element('#minmax').to.have.attribute('style').which.equals('display: flex; max-height: 200px; max-width: 80%; min-height: 50px; min-width: 20%;');
  },

  'Displays a flexbox component with using the shorthand props': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/shorthand`);
    browser.expect.element('#flexflow').to.be.present;
    browser.expect.element('#flexprop').to.be.present;
  },
});
