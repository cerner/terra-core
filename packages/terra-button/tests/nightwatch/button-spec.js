/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
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
      .assert.containsText('.terra-Button.terra-Button--linkDefault.is-disabled', 'Disabled Link');
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

  'Displays as a positive button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/positive`)
      .assert.containsText('.terra-Button.terra-Button--positive', 'Positive');
  },

  'Displays as a negative button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/negative`)
      .assert.containsText('.terra-Button.terra-Button--negative', 'Negative');
  },

  'Displays as a warning button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/warning`)
      .assert.containsText('.terra-Button.terra-Button--warning', 'Warning');
  },

  'Displays as an info button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/info`)
      .assert.containsText('.terra-Button.terra-Button--info', 'Info');
  },

  'Displays with a transparent background with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/outline`)
      .assert.containsText('.terra-Button.terra-Button--outlineDefault', 'Outline');
  },

  'Displays as a link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/link`)
      .assert.containsText('.terra-Button.terra-Button--linkDefault', 'Link');
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

  'Displays an button with icons and text reversed': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-tests/icon-reversed`)
      .assert.containsText('.terra-Button.terra-Button--default > :first-child', 'Button with Icon and reversed')
      .assert.cssClassPresent('.terra-Button.terra-Button--default > :last-child', 'test');
  },
};
