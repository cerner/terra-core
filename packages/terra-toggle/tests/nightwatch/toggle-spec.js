// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default toggle': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle/default-toggle`)
      .assert.elementPresent('#toggle');
  },

  'Expanding the toggle: aria-hidden attribute': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/toggle/default-toggle`);

    browser.expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');

    browser
     .click('#trigger-toggle')
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');

    browser
     .click('#trigger-toggle')
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');
  },

  'Render as opened': (browser) => {
    browser
     .url(`${browser.launchUrl}/#/raw/tests/toggle/open-toggle`)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');
  },

  'Disables focusable elements within animated toggle when closed': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/toggle/animated-toggle`);

    browser
     .assert.cssProperty('#toggle[aria-hidden="true"]', 'visibility', 'hidden')
     .click('#trigger-toggle') // Opens toggle
     .waitForElementPresent('#toggle[aria-hidden="false"]', 1000);

    browser
     .click('#trigger-toggle') // Closes toggle
     .waitForElementPresent('#toggle[aria-hidden="true"]', 1000);
  },

  'Enables focusable elements within animated toggle when opened': (browser) => {
    browser
     .url(`${browser.launchUrl}/#/raw/tests/toggle/animated-toggle`)
     .click('#trigger-toggle')
     .assert.cssProperty('#toggle[aria-hidden="false"]', 'visibility', 'visible');
  },
});
