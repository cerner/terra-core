// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default toggle': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-tests/default`)
      .assert.elementPresent('#toggle');
  },

  'Expanding the toggle: aria-hidden attribute': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/toggle-tests/default`);

    browser.expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');

    browser
     .click('button')
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');

    browser
     .click('button')
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');
  },

  'Render as opened': (browser) => {
    browser
     .url(`${browser.launchUrl}/#/tests/toggle-tests/open`)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');
  },

  'Disables focusable elements within animated toggle when closed': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/toggle-tests/animated`);

    browser
     .assert.cssProperty('#toggle[aria-hidden="true"]', 'visibility', 'hidden')
     .click('button') // Opens toggle
     .waitForElementPresent('#toggle[aria-hidden="false"]', 1000);

    browser
     .click('button') // Closes toggle
     .waitForElementPresent('#toggle[aria-hidden="true"]', 1000);
  },

  'Enables focusable elements within animated toggle when opened': (browser) => {
    browser
     .url(`${browser.launchUrl}/#/tests/toggle-tests/animated`)
     .click('button')
     .assert.cssProperty('#toggle[aria-hidden="false"]', 'visibility', 'visible');
  },
});
