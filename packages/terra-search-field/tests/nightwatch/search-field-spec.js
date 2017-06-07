/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-search-field', done);
  },

  'Displays a search field with search button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/default`)
      .assert.elementPresent('.terra-SearchField')
      .assert.elementPresent('.terra-SearchField-button')
      .assert.attributeEquals('.terra-SearchField-input', 'placeholder', '');
  },

  'Displays a search field with a placeholder value of "Search Text"': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/placeholder`)
      .assert.elementPresent('.terra-SearchField')
      .assert.elementPresent('.terra-SearchField-button')
      .assert.attributeEquals('.terra-SearchField-input', 'placeholder', 'Search Text');
  },

  'Displays a search field that handles search callbacks': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/callback`)
      .setValue('input[type=search]', 'S')
      .expect.element('#search-callback-text').text.to.equal('Search Text:').after(250);

    browser
      .setValue('input[type=search]', 'e')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Se').after(250);

    browser
      .setValue('input[type=search]', 'a')
      .click('.terra-SearchField-button')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Sea').before(250);
  },

  'Displays a search field with a search delay of 1000': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/delayed`)
      .setValue('input[type=search]', 'Test')
      .expect.element('#search-callback-text').text.to.equal('Search Text:').after(250).before(1000);

    browser
      .expect.element('#search-callback-text').text.to.equal('Search Text: Test').after(1000);
  },

  'Displays a search field with a minimum search text length of 5 characters': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/minimum-length`)
      .setValue('input[type=search]', 'Test')
      .click('.terra-SearchField-button')
      .expect.element('#search-callback-text').text.to.equal('Search Text:');

    browser
      .setValue('input[type=search]', 's')
      .click('.terra-SearchField-button')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Tests');
  },
};
