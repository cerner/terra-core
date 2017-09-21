// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default theme-provider': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/default`);
    browser.assert.elementPresent('#themeProvider');
    browser.assert.elementPresent('#themedComponent');
  },

  'Displays a themed component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/default`)
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(0, 0, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline-block');
  },

  'Displays a globally themed component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/global-theme`)
    .assert.cssProperty('html', 'font-size', '20px')
    .assert.cssProperty('body', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('body', 'color', 'rgba(0, 255, 0, 1)')
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(0, 0, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline-block');
  },

  'Displays an updated themed component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/theme-switching`)
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(0, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline')
    .click('select[id="theme"] option[value="cerner-mock-theme"]')
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(0, 0, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline-block');
  },

  'Displays an updated globally themed component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/global-theme-switching`)
    .assert.cssProperty('html', 'font-size', '14px')
    .assert.cssProperty('body', 'background-color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('body', 'color', 'rgba(28, 31, 33, 1)')
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(0, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline')
    .click('select[id="theme"] option[value="cerner-mock-theme"]')
    .assert.cssProperty('html', 'font-size', '20px')
    .assert.cssProperty('body', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('body', 'color', 'rgba(0, 255, 0, 1)')
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(255, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(0, 0, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline-block');
  },

  'Displays a themed provider without a themeName provided': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/theme-provider-tests/theme-provider-no-theme`)
    .assert.cssProperty('#themedComponent', 'background-color', 'rgba(0, 0, 0, 1)')
    .assert.cssProperty('#themedComponent', 'color', 'rgba(255, 255, 255, 1)')
    .assert.cssProperty('#themedComponent', 'display', 'inline');
  },
});
