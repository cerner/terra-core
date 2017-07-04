/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-button', done);
  },

  'Displays a default button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/default`)
      .assert.containsText('.button.default', 'Default');
  },

  'Wraps long text at smaller screen sizes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/long-text`)
      .assert.containsText('.button.default', 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long');
  },

  'Displays a disabled button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/disabled`)
      .assert.containsText('.button.default.is-disabled', 'Disabled Button');
  },

  'Displays a disabled link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/disabled-link`)
      .assert.containsText('.button.link.is-disabled', 'Disabled Link');
  },

  'Displays as a primary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/primary`)
      .assert.containsText('.button.primary', 'Primary');
  },

  'Displays as a secondary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/secondary`)
      .assert.containsText('.button.secondary', 'Secondary');
  },

  'Displays as a link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/link`)
      .assert.containsText('.button.link', 'Link');
  },

  'Displays as a tiny button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/tiny`)
      .assert.containsText('.button.tiny', 'Tiny');
  },

  'Displays as a small button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/small`)
      .assert.containsText('.button.small', 'Small');
  },

  'Displays as a medium button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/medium`)
      .assert.containsText('.button.medium', 'Medium');
  },

  'Displays as a large button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/large`)
      .assert.containsText('.button.large', 'Large');
  },

  'Displays as a huge button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/huge`)
      .assert.containsText('.button.huge', 'Huge');
  },

  'Displays as a button with the type set to button and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-button`)
      .assert.containsText('.button[type="button"]', 'Button Type is Default');
  },

  'Displays as a button with the type set to reset and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-reset`)
      .assert.containsText('.button[type="reset"]', 'Button Type is Reset');
  },

  'Displays as a button with the type set to submit and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-submit`)
      .assert.containsText('.button[type="submit"]', 'Button Type is Submit');
  },

  'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-default`)
      .assert.containsText('.button.default > :last-child', 'Button with Icon')
      .assert.cssClassPresent('.tbutton.default > :first-child', 'test');
  },

  'Displays an icon only': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-only`)
      .assert.elementNotPresent('.text')
      .assert.cssClassPresent('.button.default > :first-child', 'test');
  },

  'Displays a button with icons and text reversed': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-reversed`)
      .assert.containsText('.button.default > :first-child', 'Button with Icon and reversed')
      .assert.cssClassPresent('.button.default > :last-child', 'test');
  },

  'Displays as a compact button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/compact`)
      .assert.containsText('.button.compact', 'Compact');
  },
};
