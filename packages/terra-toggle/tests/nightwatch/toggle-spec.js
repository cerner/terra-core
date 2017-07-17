/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-toggle', done);
  },

  'Displays a default toggle': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/default`)
      .assert.elementPresent('#toggle');
  },

  'Expanding the toggle: aria-hidden attribute': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/default`)
     .waitForElementPresent('#toggle', 1000)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');

    browser
     .click('button')
     .waitForElementPresent('#toggle', 1000)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');

    browser
     .click('button')
     .waitForElementPresent('#toggle', 1000)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('true');
  },

  'Render as opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/open`)
     .waitForElementPresent('#toggle', 1000)
     .expect.element('#toggle').to.have.attribute('aria-hidden').to.equal('false');
  },

  'Disables focusable elements within animated toggle when closed': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/animated`)
     .assert.cssProperty('#toggle[aria-hidden="true"]', 'visibility', 'hidden')
     .click('button') // Opens toggle
     .waitForElementPresent('#toggle[aria-hidden="false"]', 1000)
     .click('button') // Closes toggle
     .waitForElementPresent('#toggle[aria-hidden="true"]', 1000);
  },

  'Enables focusable elements within animated toggle when opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/animated`)
     .click('button')
     .assert.cssProperty('#toggle[aria-hidden="false"]', 'visibility', 'visible');
  },
};
