// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default status view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/default`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);

    browser.expect.element('#statusView').to.have.attribute('class').which.contains('status-view');
    browser.expect.element('#statusView div').to.have.attribute('class').which.contains('status-view-inner');
    browser.expect.element('#statusView div').to.have.attribute('style').to.equal('padding-top: 0px; padding-bottom: 0px;');

    browser.expect.element('#statusView div > :nth-child(1)').to.have.attribute('class').which.contains('glyph');
    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('error');

    browser.expect.element('#statusView div > :nth-child(2)').to.have.attribute('class').which.contains('message-content-group');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').to.have.attribute('class').which.contains('title');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('Error');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(2)').to.have.attribute('class').which.contains('divider');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(2) > hr').to.have.attribute('class').which.contains('divider');
  },

  'Displays an error status view with all props given': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/error-all-props`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);
    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('error');

    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('500');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(3)').to.have.attribute('class').which.contains('message');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(3)').text.to.equal('An exception was thrown.');

    browser.expect.element('#button1').text.to.equal('OK');
    browser.expect.element('#button2').text.to.equal('Cancel');
  },

  'Displays an error status view with the glyph being hidden': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/glyph-hidden`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);

    browser.expect.element('#statusView div > :nth-child(1)').to.have.attribute('class').which.contains('message-content-group');
    browser.expect.element('#statusView div > :nth-child(1) > :nth-child(1)').to.have.attribute('class').which.contains('title');
    browser.expect.element('#statusView div > :nth-child(1) > :nth-child(1)').text.to.equal('Error');
  },

  'Displays an error status view with the glyph being hidden with too small of a height': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/height-too-small`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);
    browser.expect.element('#statusView').to.have.attribute('style').to.equal('border: 1px solid black; height: 150px;');
    browser.expect.element('#statusView div').to.have.attribute('style').to.not.equal('padding-top: 0px; padding-bottom: 0px;');

    browser.expect.element('#statusView div > :nth-child(1)').to.have.attribute('class').which.contains('message-content-group');
    browser.expect.element('#statusView div > :nth-child(1) > :nth-child(1)').to.have.attribute('class').which.contains('title');
    browser.expect.element('#statusView div > :nth-child(1) > :nth-child(1)').text.to.equal('Error');
  },

  'Displays a no-data status view with the content centered in its container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/centered`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);
    browser.expect.element('#statusView').to.have.attribute('style').to.equal('border: 1px solid black; height: 500px;');
    browser.expect.element('#statusView div').to.have.attribute('style').to.not.equal('padding-top: 0px; padding-bottom: 0px;');

    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('no-data');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('No Results');
  },

  'Displays a no-matching-results status view with the content aligned at the top in its container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/align-top`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);
    browser.expect.element('#statusView').to.have.attribute('style').to.equal('border: 1px solid black; height: 500px;');
    browser.expect.element('#statusView div').to.have.attribute('style').to.equal('padding-top: 0px; padding-bottom: 0px;');

    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('no-matching-results');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('No Matching Results');
  },

  'Displays a not-authorized status view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/not-authorized`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);

    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('not-authorized');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('Not Authorized');
  },

  'Displays a no-service status view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/no-service`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);

    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('no-service');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('Not Connected');
  },

  'Displays a custom status view that displays as empty by default': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/custom`);
    browser.expect.element('#statusView').to.be.present.to.equal(true);

    browser.expect.element('#statusView div > :nth-child(1) > svg').to.have.attribute('class').which.contains('custom');
    browser.expect.element('#statusView div > :nth-child(2) > :nth-child(1)').text.to.equal('');
  },
});
