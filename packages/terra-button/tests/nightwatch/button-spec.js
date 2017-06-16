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
      .assert.containsText('.terra-Button.terra-Button--default', 'Default');
  },

  'Wraps long text at smaller screen sizes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/long-text`)
      .assert.containsText('.terra-Button.terra-Button--default', 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long');
  },

  'Displays a disabled button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/disabled`)
      .assert.containsText('.terra-Button.terra-Button--default.is-disabled', 'Disabled Button');
  },

  'Displays a disabled link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/disabled-link`)
      .assert.containsText('.terra-Button.terra-Button--link.is-disabled', 'Disabled Link');
  },

  'Displays as a primary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/primary`)
      .assert.containsText('.terra-Button.terra-Button--primary', 'Primary');
  },

  'Displays as a secondary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/secondary`)
      .assert.containsText('.terra-Button.terra-Button--secondary', 'Secondary');
  },

  'Displays as a link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/link`)
      .assert.containsText('.terra-Button.terra-Button--link', 'Link');
  },

  'Displays as a tiny button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/tiny`)
      .assert.containsText('.terra-Button.terra-Button--tiny', 'Tiny');
  },

  'Displays as a small button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/small`)
      .assert.containsText('.terra-Button.terra-Button--small', 'Small');
  },

  'Displays as a medium button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/medium`)
      .assert.containsText('.terra-Button.terra-Button--medium', 'Medium');
  },

  'Displays as a large button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/large`)
      .assert.containsText('.terra-Button.terra-Button--large', 'Large');
  },

  'Displays as a huge button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/huge`)
      .assert.containsText('.terra-Button.terra-Button--huge', 'Huge');
  },

  'Displays as a button with the type set to button and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-button`)
      .assert.containsText('.terra-Button[type="button"]', 'Button Type is Default');
  },

  'Displays as a button with the type set to reset and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-reset`)
      .assert.containsText('.terra-Button[type="reset"]', 'Button Type is Reset');
  },

  'Displays as a button with the type set to submit and with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/with-type-submit`)
      .assert.containsText('.terra-Button[type="submit"]', 'Button Type is Submit');
  },

  'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-default`)
      .assert.containsText('.terra-Button.terra-Button--default > :last-child', 'Button with Icon')
      .assert.cssClassPresent('.terra-Button.terra-Button--default > :first-child', 'test');
  },

  'Displays an icon only': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-only`)
      .assert.elementNotPresent('.terra-Button-text')
      .assert.cssClassPresent('.terra-Button.terra-Button--default > :first-child', 'test');
  },

  'Displays a button with icons and text reversed': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-reversed`)
      .assert.containsText('.terra-Button.terra-Button--default > :first-child', 'Button with Icon and reversed')
      .assert.cssClassPresent('.terra-Button.terra-Button--default > :last-child', 'test');
  },

  'Displays as a compact button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/compact`)
      .assert.containsText('.terra-Button.terra-Button--compact', 'Compact');
  },
};
