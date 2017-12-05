/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Display tab panel with text only': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tab-pane-tests/text-only`);
    browser.expect.element('#textOnly[class*="is-text-only"]').to.be.present;
    browser.expect.element('#textOnly').text.to.contain('Text only');
  },
  'Display tab panel with icon only': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tab-pane-tests/icon-only`);
    browser.expect.element('#iconOnly[class*="is-icon-only"]').to.be.present;
    browser.expect.element('#iconOnly svg').to.be.present;
    browser.expect.element('#iconOnly').text.to.not.contain('Icon Only');
  },
  'Display tab panel with icon and text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tab-pane-tests/icon-and-text`);
    browser.expect.element('#iconAndText').to.be.present;
    browser.expect.element('#iconAndText svg').to.be.present;
    browser.expect.element('#iconAndText').text.to.contain('Icon and Text');
  },
  'Display tab panel with custom display': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tab-pane-tests/custom-display`);
    browser.expect.element('#customDisplay').to.be.present;
    browser.expect.element('#customDisplayContent').to.be.present;
  },
  'Display tab panel with long text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tab-pane-tests/long-text`);
    browser.expect.element('#longText').to.be.present;
  },
});
