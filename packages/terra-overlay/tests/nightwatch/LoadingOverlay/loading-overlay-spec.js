// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default LoadingOverlay': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/default-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay:nth-child(1)').text.to.equal('Loading...');
  },

  'Displays a fullscreen LoadingOverlay as the default': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/default-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay').to.have.attribute('class').which.contains('fullscreen');
  },

  'Displays a LoadingOverlay relative to the triggering container': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/container-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay').to.have.attribute('class').which.contains('container');
  },

  'Displays a LoadingOverlay with a custom message': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/custom-message-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay:nth-child(1)').text.to.equal('Custom Loading Message');
  },

  'Displays a LoadingOverlay with an animated icon': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/animated-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay div svg').to.have.attribute('class').which.contains('is-spin');
  },

  'Displays a LoadingOverlay with a light theme': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/light-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay').to.have.attribute('class').which.contains('light');
  },

  'Displays a LoadingOverlay with a dark theme': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/dark-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay').to.have.attribute('class').which.contains('dark');
  },

  'Displays a LoadingOverlay with a clear theme': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/overlay/loading-overlay/clear-loading-overlay`);

    browser.expect.element('#terra-LoadingOverlay').to.have.attribute('class').which.contains('clear');
  },
});
