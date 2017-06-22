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
     .assert.attributeContains('#link', 'tabindex', '-1')
     .assert.attributeContains('#text-input', 'disabled', 'true')
     .assert.attributeContains('#select-field', 'disabled', 'true')
     .assert.attributeContains('#textarea', 'disabled', 'true')
     .assert.attributeContains('#button', 'disabled', 'true')
     .click('button') // Opens toggler
     .click('button') // Closes toggler
     .assert.attributeContains('#link', 'tabindex', '-1')
     .assert.attributeContains('#text-input', 'disabled', 'true')
     .assert.attributeContains('#select-field', 'disabled', 'true')
     .assert.attributeContains('#textarea', 'disabled', 'true')
     .assert.attributeContains('#button', 'disabled', 'true');
  },

  'Enables focusable elements within animated toggler when opened': (browser) => {
    browser
     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggler-tests/animated`)
     .click('button')
     .expect.element('#link').to.not.have.attribute('tabindex');
    browser.expect.element('#text-input').to.not.have.attribute('disabled');
    browser.expect.element('#select-field').to.not.have.attribute('disabled');
    browser.expect.element('#textarea').to.not.have.attribute('disabled');
    browser.expect.element('#button').to.not.have.attribute('disabled');
  },
};
