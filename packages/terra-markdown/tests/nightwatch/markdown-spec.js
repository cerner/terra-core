// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a props table': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('[class*="markdown-body"]');
  },

  'Displays the component title': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('#terra-mock-component');
  },

  'Displays the component getting started section': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('#getting-started');
  },

  'Displays the component usage section': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('#usage');
  },

  'Displays the component example code': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('.lang-jsx');
  },

  'Displays the component features': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/markdown/default`)
      .assert.elementPresent('#component-features');
  },
});
