/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default badge with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/default`);

    browser.expect.element('#default-badge').to.be.present;
    browser.expect.element('#default-badge span').text.to.equal('Default');
  },

  'Displays intent badges': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/intent`);

    browser.expect.element('#default-badge').to.be.present;

    browser.expect.element('#primary-badge').to.have.attribute('class').which.contains('primary');

    browser.expect.element('#secondary-badge').to.have.attribute('class').which.contains('secondary');

    browser.expect.element('#positive-badge').to.have.attribute('class').which.contains('positive');

    browser.expect.element('#negative-badge').to.have.attribute('class').which.contains('negative');

    browser.expect.element('#warning-badge').to.have.attribute('class').which.contains('warning');

    browser.expect.element('#info-badge').to.have.attribute('class').which.contains('info');
  },

  'Displays size badges': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/size`);

    browser.expect.element('#tiny-badge').to.have.attribute('class').which.contains('tiny');

    browser.expect.element('#small-badge').to.have.attribute('class').which.contains('small');

    browser.expect.element('#medium-badge').to.have.attribute('class').which.contains('medium');

    browser.expect.element('#large-badge').to.have.attribute('class').which.contains('large');

    browser.expect.element('#huge-badge').to.have.attribute('class').which.contains('huge');
  },

  'Displays icon badges': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/badge-tests/icon`);

    browser.expect.element('#text-right *:nth-child(1)').to.have.attribute('class').which.contains('terra-Icon');
    browser.expect.element('#text-right *:nth-child(2)').to.have.attribute('class').which.contains('text');

    browser.expect.element('#text-left *:nth-child(2)').to.have.attribute('class').which.contains('terra-Icon');
    browser.expect.element('#text-left *:nth-child(1)').to.have.attribute('class').which.contains('text');

    browser.expect.element('#no-text *:nth-child(1)').to.have.attribute('class').which.contains('terra-Icon');
    browser.expect.element('#no-text *:nth-child(2)').to.not.be.present;
  },
});
