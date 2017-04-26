/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-progress-bar', done);
  },

  'Displays a default progress bar': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/default`)
      .waitForElementPresent('.terra-ProgressBar', 1000)
      .expect.element('.terra-ProgressBar').to.be.present;
  },

  'Displays tiny progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--tiny', 1000)
      .expect.element('.terra-ProgressBar--tiny').to.be.present
  },

  'Displays small progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--small', 1000)
      .expect.element('.terra-ProgressBar--small').to.be.present
  },

  'Displays medium progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--medium', 1000)
      .expect.element('.terra-ProgressBar--medium').to.be.present
  },

  'Displays large progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--large', 1000)
      .expect.element('.terra-ProgressBar--large').to.be.present
  },

  'Displays huge progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--huge', 1000)
      .expect.element('.terra-ProgressBar--huge').to.be.present
  },

  'Displays orange progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="Orange"]', 1000)
      .expect.element('.terra-ProgressBar[color="Orange"]').to.be.present
  },

  'Displays #8ccc62 progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="#8ccc62"]', 1000)
      .expect.element('.terra-ProgressBar[color="#8ccc62"]').to.be.present
  },

  'Displays rgb(255, 0, 0) progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="rgb(255, 0, 0)"]', 1000)
      .expect.element('.terra-ProgressBar[color="rgb(255, 0, 0)"]').to.be.present
  },

};
