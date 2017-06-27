/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .assert.elementPresent('.terra-Toggle');
  },

  'Expanding the toggle: aria-hidden attribute': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/default`)
     .waitForElementPresent('.terra-Toggle', 1000)
     .expect.element('.terra-Toggle').to.have.attribute('aria-hidden').to.equal('true');

    browser
     .click('button')
     .waitForElementPresent('.terra-Toggle', 1000)
     .expect.element('.terra-Toggle').to.have.attribute('aria-hidden').to.equal('false');

    browser
     .click('button')
     .waitForElementPresent('.terra-Toggle', 1000)
     .expect.element('.terra-Toggle').to.have.attribute('aria-hidden').to.equal('true');
  },

  'Render as opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/open`)
     .waitForElementPresent('.terra-Toggle', 1000)
     .expect.element('.terra-Toggle').to.have.attribute('aria-hidden').to.equal('false');
  },

  'Disables focusable elements within animated toggle when closed': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/animated`)
     .assert.cssClassPresent('.terra-Toggle-content', 'is-closed')
     .assert.cssProperty('.terra-Toggle-content.is-closed', 'visibility', 'hidden')
     .click('button') // Opens toggle
     .click('button') // Closes toggle
     .waitForElementPresent('.terra-Toggle-content.is-closed', 1000)
     .assert.cssClassPresent('.terra-Toggle-content', 'is-closed')
     .assert.cssProperty('.terra-Toggle-content.is-closed', 'visibility', 'hidden');
  },

  'Enables focusable elements within animated toggle when opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-tests/animated`)
     .click('button')
     .assert.cssClassNotPresent('.terra-Toggle-content', 'is-closed')
     .assert.cssProperty('.terra-Toggle-content', 'visibility', 'visible');
  },
};
