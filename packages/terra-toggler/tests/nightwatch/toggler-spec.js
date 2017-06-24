/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-toggler', done);
  },

  'Displays a default toggler': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/default`)
      .assert.elementPresent('.terra-Toggler');
  },

  'Expanding the toggler: aria-hidden attribute': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/default`)
     .waitForElementPresent('.terra-Toggler', 1000)
     .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('true');

    browser
     .click('button')
     .waitForElementPresent('.terra-Toggler', 1000)
     .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('false');

    browser
     .click('button')
     .waitForElementPresent('.terra-Toggler', 1000)
     .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('true');
  },

  'Render as opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/open`)
     .waitForElementPresent('.terra-Toggler', 1000)
     .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('false');
  },

  'Disables focusable elements within animated toggler when closed': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/animated`)
     .assert.cssClassPresent('.terra-Toggler-content', 'is-closed')
     .assert.cssProperty('.terra-Toggler-content.is-closed', 'visibility', 'hidden')
     .click('button') // Opens toggler
     .click('button') // Closes toggler
     .waitForElementPresent('.terra-Toggler-content.is-closed', 1000)
     .assert.cssClassPresent('.terra-Toggler-content', 'is-closed')
     .assert.cssProperty('.terra-Toggler-content.is-closed', 'visibility', 'hidden');
  },

  'Enables focusable elements within animated toggler when opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/animated`)
     .click('button')
     .assert.cssClassNotPresent('.terra-Toggler-content', 'is-closed')
     .assert.cssProperty('.terra-Toggler-content', 'visibility', 'visible');
  },
};
