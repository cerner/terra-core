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
    browser.expect.element('#parent').to.have.css('align-items').which.equals('stretch');
    browser.expect.element('#parent').to.have.css('display').which.equals('inline-flex');
    browser.expect.element('#parent').to.have.css('flex-flow').which.equals('column wrap');
    browser.expect.element('#parent').to.have.css('align-content').which.equals('flex-start');
    browser.expect.element('#parent').to.have.css('justify-content').which.equals('center');
    browser.expect.element('#parent').to.have.css('place-content').which.equals('flex-start center');
  },

  'Displays a flexbox component with all child attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/child`);
    browser.expect.element('#parent').to.be.present;
    browser.expect.element('#parent div:nth-child(1)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('display').which.equals('flex');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('flex-grow').which.equals('0');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('flex-shrink').which.equals('0');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('flex-basis').which.equals('auto');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('order').which.equals('2');
    browser.expect.element('#parent div:nth-child(1)').to.have.css('flex').which.equals('0 0 auto');

    browser.expect.element('#parent div:nth-child(2)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('display').which.equals('flex');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('flex-grow').which.equals('0');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('flex-shrink').which.equals('0');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('flex-basis').which.equals('auto');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('order').which.equals('1');
    browser.expect.element('#parent div:nth-child(2)').to.have.css('flex').which.equals('0 0 auto');

    browser.expect.element('#parent div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('display').which.equals('flex');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('flex-grow').which.equals('0');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('flex-shrink').which.equals('0');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('flex-basis').which.equals('auto');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('order').which.equals('0');
    browser.expect.element('#parent div:nth-child(3)').to.have.css('flex').which.equals('0 0 auto');
  },

  'Displays a flexbox component with min and max attributes set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/minmax`);
    browser.expect.element('#minmax').to.be.present;
    browser.expect.element('#minmax').to.have.css('display').which.equals('flex');
    browser.expect.element('#minmax').to.have.css('max-height').which.equals('200px');
    browser.expect.element('#minmax').to.have.css('max-width').which.equals('80%');
    browser.expect.element('#minmax').to.have.css('min-height').which.equals('50px');
    browser.expect.element('#minmax').to.have.css('min-width').which.equals('20%');
  },

  'Displays a flexbox component with using the shorthand props': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/flexbox-tests/shorthand`);
    browser.expect.element('#flexflow').to.be.present;
    browser.expect.element('#flexprop').to.be.present;
    browser.expect.element('#flexflow').to.have.css('flex-flow').which.equals('column wrap');
    browser.expect.element('#flexprop').to.have.css('flex').which.equals('1 1 20%');

  },
});
